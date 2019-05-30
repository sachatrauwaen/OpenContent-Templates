/*globals jQuery, window, Sys */
(function ($, Sys) {
  $(document).ready(function () {
    if ($('.dnnModuleManager').length){      
      initAddModule(document);
      Sys.WebForms.PageRequestManager.getInstance().add_endRequest(function (sender, args) {
        var elemId = args.get_response().get_webRequest().get_userContext();
        initAddModule($("#" + elemId));
      });
      Sys.WebForms.PageRequestManager.getInstance().add_beginRequest(function (sender, args) {
        args.get_request().set_userContext(args.get_postBackElement().id);
      });
    }
  });
  function initAddModule(elem) {
    var sf = $.ServicesFramework();
    $.ajax({
      type: "GET",
      url: sf.getServiceRoot('InternalServices') + "ControlBar/GetPortalDesktopModules",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: 'category=&loadingStartIndex=0&loadingPageSize=10&searchTerm=&excludeCategories=&sortBookmarks=true&topModule=Html',
      beforeSend: sf.setModuleHeaders
    }).done(function (data) {
      $('.dnnModuleManager', elem).each(function (index) {
        var pane = $(this).data('name');
        var $container = $("<div class='addOpenContent-container'></div>");
        data.forEach(function (m) {
          if (m.Bookmarked || m == data[0]) {
            $container.append("<div class='icon-wrap'>" +
                              "<a class='addOpenContent'" +
                              "href='#' title='"+ m.ModuleName + "' data-moduleid='" + m.ModuleID + "' data-pane='" + pane + "'>"+
                              "<img src='"+ m.ModuleImage + "' alt='" + m.ModuleName + "'>"+
                              "</a>"+
                              "</div>" );
          }
        });
        $(this).append($container);
        $(this).hover(function () {
          $($container).show();
        },function () {
          $($container).hide();
        });
        $(this).mousemove(function (){
          if($container.css('display') == 'none')
			{
				$($container).show();
			}
        });                
      });
      initClick(sf);
    }).fail(function (xhr, result, status) {
      console.error("Uh-oh, something broke: " + status);
    });    
  }
  function initClick(sf) {
    $('.addOpenContent').each(function (index) {
      var pane = $(this).data('pane');
      var moduleid = $(this).data('moduleid');
      $(this).off().click(function () {
        $.ajax({
          type: "POST",
          url: sf.getServiceRoot('InternalServices') + "ControlBar/AddModule",
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          data: JSON.stringify({
            Visibility: '0',
            Position: '-1',
            Module: moduleid,
            Page: '',
            Pane: pane,
            AddExistingModule: '',
            CopyModule: '',
            Sort: ''
          }),
          beforeSend: sf.setModuleHeaders
        }).done(function (data) {
          //location.reload(true);
          dnn.ContentEditorManager.getModuleDialog().refreshPane(pane);
        }).fail(function (xhr, result, status) {
          console.error("Uh-oh, something broke: " + status);
        });
        return false;
      });
    });
  }
}(jQuery, window.Sys));  