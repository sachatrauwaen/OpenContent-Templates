var item = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "    <div class=\"list-item col-md-12\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.IsEditable : stack1),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <!-- item "
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + " -->\r\n        <div class=\"row article\">\r\n            <div class=\"col-sm-12 col-md-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <a href=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.DetailUrl : stack1), depth0))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" title=\"\" class=\"img-thumbnail img-responsive\" /></a>\r\n                    </div>\r\n                    <div class=\"caption col-md-8\">\r\n                        <h3 class=\"title\"><a href=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.DetailUrl : stack1), depth0))
    + "\">"
    + alias3(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</a></h3>\r\n                        <p class=\"desc\">"
    + alias3(((helper = (helper = helpers.Summary || (depth0 != null ? depth0.Summary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Summary","hash":{},"data":data}) : helper)))
    + "</p>\r\n                        <p><a href=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.DetailUrl : stack1), depth0))
    + "\" class=\"btn btn-default\" role=\"button\">Read more</a></p>\r\n                        <p class=\"theme\">\r\n                            <span class=\"glyphicon glyphicon-calendar\" aria-hidden=\"true\"></span>\r\n                            "
    + alias3((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,(depth0 != null ? depth0.publishstartdate : depth0),"DD/MM/YYYY",{"name":"formatDateTime","hash":{},"data":data}))
    + "\r\n                            <span class=\"glyphicon glyphicon-tag\" aria-hidden=\"true\"></span>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Category : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "        <div style=\"outline: 1px dashed #ccc;height: 22px !important;position:relative;margin-top:1px;\">\r\n\r\n            <div style=\"padding-left:5px\">\r\n                "
    + alias2(((helper = (helper = helpers.publishstatus || (depth0 != null ? depth0.publishstatus : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"publishstatus","hash":{},"data":data}) : helper)))
    + " : "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,(depth0 != null ? depth0.publishstartdate : depth0),"DD/MM/YYYY",{"name":"formatDateTime","hash":{},"data":data}))
    + " - "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,(depth0 != null ? depth0.publishenddate : depth0),"DD/MM/YYYY",{"name":"formatDateTime","hash":{},"data":data}))
    + "\r\n            </div>\r\n            <ul class=\"dnn_mact\" style=\"position: absolute;right:0;top:0; \">\r\n                <li class=\"actionMenuEdit\">\r\n                    <a href=\""
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.EditUrl : stack1), depth0))
    + "\" title=\"Edit Item\"></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "                            <span>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.Category : depth0)) != null ? stack1.Title : stack1), depth0))
    + "</span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<script id=\"jplist-template\" type=\"text/x-handlebars-template\">\r\n\r\n    <!-- handlebars template -->\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</script>\r\n";
},"useData":true});