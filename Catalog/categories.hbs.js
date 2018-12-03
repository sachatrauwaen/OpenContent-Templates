var categories = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "\r\n                <input data-path=\"."
    + alias2(alias1(depth0, depth0))
    + "\"\r\n                       id=\""
    + alias2(alias1(depth0, depth0))
    + "\"\r\n                       type=\"checkbox\" />\r\n\r\n                <label for=\""
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2((helpers.arrayindex || (depth0 && depth0.arrayindex) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1].Options : depths[1])) != null ? stack1.fields : stack1)) != null ? stack1.Category : stack1)) != null ? stack1.optionLabels : stack1),(data && data.index),{"name":"arrayindex","hash":{},"data":data}))
    + "</label>\r\n\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "\r\n"
    + alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"jplist.core.min.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"jplist.filter-toggle-bundle.min.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"jplist.textbox-filter.min.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"jplist.pagination-bundle.min.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"jplist.history-bundle.min.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.core.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.filter-toggle-bundle.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.textbox-filter.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.pagination-bundle.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.history-bundle.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n\r\n"
    + alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"jplist.filter-toggle-bundle.min.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.filter-toggle-bundle.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n\r\n"
    + alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"/DesktopModules/OpenContent/css/font-awesome/css/font-awesome.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n<div class=\"box\">\r\n    <div id=\"demo\" class=\"box jplist\" style=\"margin: 20px 0 50px 0\">\r\n\r\n        <!-- ios button: show/hide panel -->\r\n        <div class=\"jplist-ios-button\">\r\n            <i class=\"fa fa-sort\"></i>\r\n            jPList Actions\r\n        </div>\r\n\r\n        <!-- panel -->\r\n        <div class=\"jplist-panel row panel-top\">\r\n            <!-- checkbox filters -->\r\n            <div class=\"jplist-group col-md-6\"\r\n                 data-control-type=\"checkbox-group-filter\"\r\n                 data-control-action=\"filter\"\r\n                 data-control-name=\"themes\">\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.Schema : depth0)) != null ? stack1.properties : stack1)) != null ? stack1.Category : stack1)) != null ? stack1['enum'] : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n            </div>\r\n\r\n            <!-- filter by title -->\r\n            <div class=\"text-filter-box col-lg-4\">\r\n                <i class=\"fa fa-search jplist-icon\"></i>\r\n\r\n                <!--[if lt IE 10]>\r\n                <div class=\"jplist-label\">Filter by Title:</div>\r\n                <![endif]-->\r\n\r\n                <input data-path=\".title\"\r\n                       type=\"text\"\r\n                       value=\"\"\r\n                       placeholder=\"Filter by Title\"\r\n                       data-control-type=\"textbox\"\r\n                       data-control-name=\"title-filter\"\r\n                       data-control-action=\"filter\" />\r\n            </div>\r\n\r\n        </div>\r\n\r\n     \r\n\r\n        <div class=\"row jplist-no-results text-shadow align-center\">\r\n            <p>No results found</p>\r\n        </div>\r\n\r\n\r\n     \r\n\r\n    </div>\r\n</div>\r\n";
},"useData":true,"useDepths":true});