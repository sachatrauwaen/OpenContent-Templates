var detail = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression;

  return "                            <span class=\""
    + alias1(this.lambda(depth0, depth0))
    + "\">"
    + alias1((helpers.arraytranslate || (depth0 && depth0.arraytranslate) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1].Schema : depths[1])) != null ? stack1.properties : stack1)) != null ? stack1.Category : stack1)) != null ? stack1['enum'] : stack1),((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1].Options : depths[1])) != null ? stack1.fields : stack1)) != null ? stack1.Category : stack1)) != null ? stack1.optionLabels : stack1),depth0,{"name":"arraytranslate","hash":{},"data":data}))
    + "</span>\r\n";
},"3":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "            <li role=\"presentation\" class=\"\"><a href=\""
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].Context : depths[1])) != null ? stack1.MainUrl : stack1), depth0))
    + "#categories:pathGroup=."
    + alias2(alias1(depth0, depth0))
    + "\">"
    + alias2((helpers.arrayindex || (depth0 && depth0.arrayindex) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? depths[1].Options : depths[1])) != null ? stack1.fields : stack1)) != null ? stack1.Category : stack1)) != null ? stack1.optionLabels : stack1),(data && data.index),{"name":"arrayindex","hash":{},"data":data}))
    + "</a></li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"/DesktopModules/OpenContent/css/font-awesome/css/font-awesome.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n\r\n<div class=\"row .jplist-detail\">\r\n    <div class=\"col-md-10\">\r\n        <div class=\"row article\">\r\n\r\n            <div class=\"col-sm-12 col-md-12\">\r\n                <div class=\"row article\">\r\n                    <div class=\"col-md-5\">\r\n                        <img src=\""
    + alias2(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" title=\"\" class=\"img-rounded img-responsive\" />\r\n                    </div>\r\n                    <div class=\"caption col-md-7\">\r\n                        <h2 class=\"title\">"
    + alias2(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n                        "
    + alias2(((helper = (helper = helpers.Summary || (depth0 != null ? depth0.Summary : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Summary","hash":{},"data":data}) : helper)))
    + "\r\n\r\n                        <p class=\"theme\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Category : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        "
    + alias2(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Description","hash":{},"data":data}) : helper)))
    + "\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n\r\n        <ul class=\"nav nav-pills nav-stacked\">\r\n            <li role=\"presentation\" class=\"active\"><a href=\""
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.MainUrl : stack1), depth0))
    + "\">Return to list</a></li>\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.Schema : depth0)) != null ? stack1.properties : stack1)) != null ? stack1.Category : stack1)) != null ? stack1['enum'] : stack1),{"name":"each","hash":{},"fn":this.program(3, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n\r\n    </div>\r\n</div>\r\n";
},"useData":true,"useDepths":true});