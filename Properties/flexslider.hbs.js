var flexslider = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <li>\r\n            <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" />\r\n        </li>\r\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <li>\r\n            <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" />\r\n            "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Title : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n            "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Description : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n        </li>\r\n";
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"flex-title\">"
    + this.escapeExpression(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</div>";
},"6":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"flex-description\">"
    + this.escapeExpression(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Description","hash":{},"data":data}) : helper)))
    + "</div>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3=this.lambda;

  return alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"flexslider.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jquery.flexslider-min.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n\r\n<div id=\"flexslider-slider-"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ModuleId : stack1), depth0))
    + "\" class=\"flexslider flex-slider\"\r\n     data-animationloop=\"false\"\r\n     data-slideshow=\"false\"\r\n     data-animation=\"fade\"\r\n     data-touch=\"true\"\r\n     data-controlnav=\"false\"\r\n     data-directionnav=\"true\"\r\n     data-sync=\"#flexslider-carousel-"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ModuleId : stack1), depth0))
    + "\">\r\n    <ul class=\"slides\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Gallery : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>\r\n";
},"useData":true});