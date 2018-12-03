var detail = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.flexslider,depth0,{"name":"flexslider","data":data,"indent":"                        ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "                        <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" title=\"\" class=\"img-rounded img-responsive\" />\r\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return "                        <span class=\"glyphicon glyphicon-tag\" aria-hidden=\"true\"></span>\r\n                        <span>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.Category : depth0)) != null ? stack1.Title : stack1), depth0))
    + "</span> -\r\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                            <span class=\""
    + alias3(((helper = (helper = helpers.Id || (depth0 != null ? depth0.Id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.Tag || (depth0 != null ? depth0.Tag : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Tag","hash":{},"data":data}) : helper)))
    + "</span>\r\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-body\">\r\n"
    + ((stack1 = this.invokePartial(partials.flexcarousel,depth0,{"name":"flexcarousel","data":data,"indent":"                        ","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"row panel-body\">\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">Documents</div>\r\n                        <div class=\"panel-body\">\r\n                            <ul>\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Documents : depth0),{"name":"each","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"12":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "                                <li>\r\n                                    <a href=\""
    + alias3(((helper = (helper = helpers.File || (depth0 != null ? depth0.File : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"File","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" title=\"\" target=\"_blank\">"
    + alias3(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</a>\r\n                                </li>\r\n";
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.Settings : depth0)) != null ? stack1.Social : stack1)) != null ? stack1.FaceBook : stack1),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                <div class=\"panel \">\r\n                    <div class=\"panel-body\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.Settings : depth0)) != null ? stack1.Social : stack1)) != null ? stack1.FbLike : stack1),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.Settings : depth0)) != null ? stack1.Social : stack1)) != null ? stack1.Tweeter : stack1),{"name":"if","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.Settings : depth0)) != null ? stack1.Social : stack1)) != null ? stack1.FbComments : stack1),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n";
},"15":function(depth0,helpers,partials,data) {
    return "                <div id=\"fb-root\"></div>\r\n                <script>\r\n                    (function (d, s, id) {\r\n                        var js, fjs = d.getElementsByTagName(s)[0];\r\n                        if (d.getElementById(id)) return;\r\n                        js = d.createElement(s); js.id = id;\r\n                        js.src = \"//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.5\";\r\n                        fjs.parentNode.insertBefore(js, fjs);\r\n                    }(document, 'script', 'facebook-jssdk'));</script>\r\n";
},"17":function(depth0,helpers,partials,data) {
    var stack1;

  return "                        <div class=\"fb-like\" data-href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.DetailUrl : stack1), depth0))
    + "\" data-layout=\"standard\" data-action=\"like\" data-show-faces=\"true\" data-share=\"true\"></div>\r\n";
},"19":function(depth0,helpers,partials,data) {
    return "                        <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" {count}>Tweet</a>\r\n                        <script>!function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js, fjs); } }(document, 'script', 'twitter-wjs');</script>\r\n";
},"21":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"embed-responsive embed-responsive-4by3\">\r\n                    <div class=\"fb-comments\" data-href=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.DetailUrl : stack1), depth0))
    + "\" data-numposts=\"5\"></div>\r\n\r\n                </div>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"/DesktopModules/OpenContent/css/font-awesome/css/font-awesome.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n\r\n"
    + alias2((helpers.registerstylesheet || (depth0 && depth0.registerstylesheet) || alias1).call(depth0,"jquery-oembed.css",{"name":"registerstylesheet","hash":{},"data":data}))
    + "\r\n\r\n"
    + alias2((helpers.registerscript || (depth0 && depth0.registerscript) || alias1).call(depth0,"jquery.oembed.js",{"name":"registerscript","hash":{},"data":data}))
    + "\r\n\r\n\r\n<div class=\"row jplist-detail\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"row article\">\r\n\r\n            <div class=\"col-sm-12 col-md-12\">\r\n                <div class=\"row article\">\r\n                    <div class=\"col-md-5\">\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Gallery : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </div>\r\n                    <div class=\"caption col-md-7\">\r\n                        <h2 class=\"title\">"
    + alias2(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Category : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        <span class=\"glyphicon glyphicon-calendar\" aria-hidden=\"true\"></span>\r\n                        "
    + alias2((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,(depth0 != null ? depth0.publishstartdate : depth0),"dd/MM/yyyy","fr-BE",{"name":"formatDateTime","hash":{},"data":data}))
    + "\r\n\r\n                        <p class=\"tags\">\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Tags : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                        </p>\r\n                        <div class=\"description\">\r\n                        "
    + alias2(((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"Description","hash":{},"data":data}) : helper)))
    + "\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                </div>\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Gallery : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.Documents : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n"
    + ((stack1 = helpers.unless.call(depth0,((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.IsEditable : stack1),{"name":"unless","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <a href=\""
    + alias2(this.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.MainUrl : stack1), depth0))
    + "\" class=\"btn btn-default\">Return to list</a></li>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n";
},"usePartial":true,"useData":true});