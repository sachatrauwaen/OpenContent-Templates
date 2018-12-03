var categoryList = Handlebars.template({"1":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=this.escapeExpression, alias2=helpers.helperMissing, alias3="function";

  return "\r\n            <li><a href=\""
    + alias1(this.lambda(((stack1 = (depths[1] != null ? depths[1].Context : depths[1])) != null ? stack1.MainUrl : stack1), depth0))
    + "#Category:pathGroup="
    + alias1(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"Id","hash":{},"data":data}) : helper)))
    + "|sort:path~type~order=Title~text~asc|paging:number=5|paging:currentPage=0\" onclick=\"location.reload();\"> "
    + alias1(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(depth0,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\r\n"
    + this.escapeExpression((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || helpers.helperMissing).call(depth0,"/DesktopModules/OpenContent/css/font-awesome/css/font-awesome.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-12 sidebar\">\r\n        <ul class=\"nav nav-sidebar\">\r\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.AdditionalData : depth0)) != null ? stack1.Categories : stack1),{"name":"each","hash":{},"fn":this.program(1, data, 0, blockParams, depths),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\r\n    </div>\r\n</div>\r\n";
},"useData":true,"useDepths":true});