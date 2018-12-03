(function ($) {
    $(document).ready(function () {
        initPage(document);
    });
    $(document).on("opencontent.change", function (event, element) {
        initPage(element);
    });
    function initPage(element) {
        var items = [{Title:"ttt", Description:"dd"}];
        $(".vuestarter", element).each(function () {
            var moduleid = $(this).attr('data-moduleid');
            var moduleScope = $(this),
                self = moduleScope,
                sf = $.ServicesFramework(moduleid);
            
            //search
            var $search = $('.search', self);
            $('.search', self).keyup(function () {
                refreshTable(self, sf, $search.val());
                return false;
            });


            var app = new Vue({
              el: "#vuestarter",
              template: "#vue-template",
              data: {
                message: 'Hello Vue!',
                items : [],
                search: "",
                form : {
                	Title :"",
                  Description :""
                }
              },
              mounted: function(){
                this.searchItems();
              },
              methods: {
                updateItem: function(item){
                  var self = this;
                  apiUpdate(sf, item.Context.Id, { Title: item.Title, Description:  item.Description });
                },
                deleteItem: function(item){
                  var self = this;
                   apiDelete(sf, item.Context.Id, function () {
                        self.searchItems();
                    });
                },
                searchItems: function(){
                  	var self = this;
                    var filter = null;                    
                    if (self.search) {
                        filter = {
                            rules: [{field: "Title", operator:"START_WITH", value: self.search}]
                        };
                    }
                  	var sort = [{field: "Title"}];
                    apiGet(sf, 0, 10, filter, sort, function (data) {
                   		self.items = data.items;
                    });
                },
                addItem: function(){
                  var self = this;
                	apiAdd(sf, self.form, function () {                      
                      	self.searchItems();                      	
                      	self.form.Title = "";
                      self.form.Description = "";
                	});
                }
              
              }
            });

        });
    
    }

    function apiGet(sf, pageIndex, pageSize, filter, sort, callback) {
        $.ajax({
            type: "GET",
            url: sf.getServiceRoot('OpenContent') + "Rest/v1/items",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: {pageIndex: pageIndex, pageSize: pageSize, filter: JSON.stringify(filter), sort: JSON.stringify(sort)},
            beforeSend: sf.setModuleHeaders
        }).done(function (data) {
            if (callback) callback(data);
        }).fail(function (xhr, result, status) {
            alert("Uh-oh, something broke: " + status);
        });
    }

    function apiUpdate(sf, id, item, callback) {
        $.ajax({
            type: "PUT",
            url: sf.getServiceRoot('OpenContent') + "Rest/v1/items/"+id,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({ item: item}),
            beforeSend: sf.setModuleHeaders
        }).done(function (data) {
            if (callback) callback(data);
        }).fail(function (xhr, result, status) {
            alert("Uh-oh, something broke: " + status);
        });
    }

    function apiDelete(sf, id, callback) {
        $.ajax({
            type: "DELETE",
            url: sf.getServiceRoot('OpenContent') + "Rest/v1/items/" + id,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: {},
            beforeSend: sf.setModuleHeaders
        }).done(function (data) {
            if (callback) callback(data);
        }).fail(function (xhr, result, status) {
            alert("Uh-oh, something broke: " + status);
        });
    }

    function apiAdd(sf, item, callback) {
        $.ajax({
            type: "POST",
            url: sf.getServiceRoot('OpenContent') + "Rest/v1/items",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify({ item: item }),
            beforeSend: sf.setModuleHeaders
        }).done(function (data) {
            if (callback) callback(data);
        }).fail(function (xhr, result, status) {
            alert("Uh-oh, something broke: " + status);
        });
    }

}(jQuery));