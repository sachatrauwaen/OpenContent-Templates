var item = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=this.escapeExpression;

  return "                    <span class=\""
    + alias1(this.lambda(depth0, depth0))
    + "\">"
    + alias1((helpers.arraytranslate || (depth0 && depth0.arraytranslate) || helpers.helperMissing).call(depth0,((stack1 = ((stack1 = ((stack1 = (depths[2] != null ? depths[2].Schema : depths[2])) != null ? stack1.properties : stack1)) != null ? stack1.Category : stack1)) != null ? stack1['enum'] : stack1),((stack1 = ((stack1 = ((stack1 = (depths[2] != null ? depths[2].Options : depths[2])) != null ? stack1.fields : stack1)) != null ? stack1.Category : stack1)) != null ? stack1.optionLabels : stack1),depth0,{"name":"arraytranslate","hash":{},"data":data}))
    + "</span>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "<!-- item "
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
    + " -->\r\n<div class=\"row article\">\r\n\r\n    <div class=\"col-sm-12 col-md-12\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <a href=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.DetailUrl : stack1), depth0))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" title=\"\" class=\"img-thumbnail img-responsive\" /></a>\r\n            </div>\r\n            <div class=\"caption col-md-8\">\r\n                <h3 class=\"title\"><a href=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.DetailUrl : stack1), depth0))
    + "\">"
    + alias3(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</a></h3>\r\n                <p class=\"desc\">"
    + alias3(((helper = (helper = helpers.Summary || (depth0 != null ? depth0.Summary : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Summary","hash":{},"data":data}) : helper)))
    + "</p>\r\n                <p><a href=\""
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.DetailUrl : stack1), depth0))
    + "\" class=\"btn btn-default\" role=\"button\">Read more</a></p>\r\n                <p class=\"theme\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Category : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </p>\r\n            </div>\r\n        </div>\r\n        \r\n\r\n    </div>\r\n\r\n</div>\r\n";
},"useData":true,"useDepths":true});