var template = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "                        <div class=\"col-xs-4 col-sm-3 col-md-12\">\r\n                            <div class=\"checkbox\">\r\n                                <label for=\""
    + alias2(alias1(depth0, depth0))
    + "\">\r\n                                    <input data-path=\"."
    + alias2(alias1(depth0, depth0))
    + "\"\r\n                                           id=\""
    + alias2(alias1(depth0, depth0))
    + "\"\r\n                                           type=\"checkbox\" />\r\n\r\n                                    "
    + alias2((helpers.arrayindex || (depth0 && depth0.arrayindex) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1].Options : depths[1])) != null ? stack1.fields : stack1)) != null ? stack1.Category : stack1)) != null ? stack1.optionLabels : stack1),(data && data.index),{"name":"arrayindex","hash":{},"data":data}))
    + "\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    <div class=\"list-item col-md-12\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.IsEditable : stack1),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = this.invokePartial(partials.item,depth0,{"name":"item","data":data,"indent":"                        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                    </div>\r\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "                        <div style=\"outline: 1px dashed #ccc;height: 22px !important;position:relative;margin-top:1px;\">\r\n                            <ul class=\"dnn_mact\" style=\"position: absolute;right:0;top:0; \">\r\n                                <li class=\"actionMenuEdit\">\r\n                                    <a href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.EditUrl : stack1), depth0))
    + "\" title=\"Edit Item\"></a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.core.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.filter-toggle-bundle.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.textbox-filter.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.pagination-bundle.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jplist.filter-toggle-bundle.min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n\r\n"
    + alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"/DesktopModules/OpenContent/css/font-awesome/css/font-awesome.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n<div class=\"\">\r\n    <div id=\"demo\" class=\"jplist\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 side-bar\">\r\n\r\n                <!-- panel -->\r\n                <div class=\"jplist-panel\">\r\n\r\n                    <!-- filter by title -->\r\n                    <div class=\"text-filter-box form-group\">\r\n\r\n                        <div class=\"input-group\">\r\n                            <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\r\n                            <!--[if lt IE 10]>\r\n                            <div class=\"jplist-label\">Filter by Title:</div>\r\n                            <![endif]-->\r\n\r\n                            <input data-path=\".title\" class=\"form-control\"\r\n                                   type=\"text\"\r\n                                   value=\"\"\r\n                                   placeholder=\"Filter by Title\"\r\n                                   data-control-type=\"textbox\"\r\n                                   data-control-name=\"title-filter\"\r\n                                   data-control-action=\"filter\" />\r\n                        </div>\r\n                    </div>\r\n                    <!-- checkbox filters -->\r\n                    <div class=\"jplist-group row\"\r\n                         data-control-type=\"checkbox-group-filter\"\r\n                         data-control-action=\"filter\"\r\n                         data-control-name=\"categories\">\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.Schema : depth0)) != null ? stack1.properties : stack1)) != null ? stack1.Category : stack1)) != null ? stack1['enum'] : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n                <!-- data -->\r\n                <div class=\"list row text-shadow\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Items : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n                </div>\r\n                <div class=\"row jplist-no-results text-shadow align-center\">\r\n                    <p>No results found</p>\r\n                </div>\r\n                <div class=\"jplist-panel row\">\r\n                  \r\n                    <!-- items per page dropdown -->\r\n                    <div class=\"jplist-drop-down col-md-3\"\r\n                         data-control-type=\"items-per-page-drop-down\"\r\n                         data-control-name=\"paging\"\r\n                         data-control-action=\"paging\"\r\n                         data-control-deep-link=\"false\">\r\n\r\n                        <ul>\r\n                            <li><span data-number=\"3\"> 3 per page </span></li>\r\n                            <li><span data-number=\"5\"> 5 per page </span></li>\r\n                            <li><span data-number=\"10\" data-default=\"true\"> 10 per page </span></li>\r\n                            <li><span data-number=\"all\"> view all </span></li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                    <div class=\"jplist-label col-md-2\"\r\n                         data-type=\"Page {current} of {pages}\"\r\n                         data-control-type=\"pagination-info\"\r\n                         data-control-name=\"paging\"\r\n                         data-control-action=\"paging\"\r\n                         data-control-deep-link=\"false\">\r\n                    </div>\r\n                    <div class=\"jplist-pagination col-md-7\"\r\n                         data-control-type=\"pagination\"\r\n                         data-control-name=\"paging\"\r\n                         data-control-action=\"paging\"\r\n                         data-control-deep-link=\"false\">\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n           \r\n        </div>\r\n    </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true,"useDepths":true});