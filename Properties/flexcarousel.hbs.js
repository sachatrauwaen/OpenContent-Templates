var flexcarousel = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "        <li>\r\n            <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" />\r\n        </li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div id=\"flexslider-carousel-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ModuleId : stack1), depth0))
    + "\" class=\"flexslider flex-carousel\"\r\n     data-animationloop=\"false\"\r\n     data-slideshow=\"false\"\r\n     data-touch=\"true\"\r\n     data-controlnav=\"false\"\r\n     data-directionnav=\"true\"\r\n     data-itemwidth=\"100\"\r\n     data-itemmargin=\"5\"\r\n     data-minitems=\"2\"\r\n     data-maxitems=\"6\"\r\n     data-move=\"1\"\r\n     data-asnavfor=\"#flexslider-slider-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.ModuleId : stack1), depth0))
    + "\">\r\n    <ul class=\"slides\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Image : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Gallery : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>\r\n";
},"useData":true});