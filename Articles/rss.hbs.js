var rss = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "        <item>\r\n            <title>"
    + alias3(((helper = (helper = helpers.Title || (depth0 != null ? depth0.Title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Title","hash":{},"data":data}) : helper)))
    + "</title>\r\n            <link>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.DetailUrl : stack1), depth0))
    + "</link>\r\n            <description>\r\n                <![CDATA[ \r\n                <img src=\""
    + alias3(((helper = (helper = helpers.Image || (depth0 != null ? depth0.Image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Image","hash":{},"data":data}) : helper)))
    + "\" alt=\"\" height=\"200\"/>\r\n                "
    + ((stack1 = ((helper = (helper = helpers.Description || (depth0 != null ? depth0.Description : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"Description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\r\n                ]]>\r\n            </description>\r\n            <pubDate>"
    + alias3((helpers.formatDateTime || (depth0 && depth0.formatDateTime) || alias1).call(depth0,(depth0 != null ? depth0.publishstartdate : depth0),"r",{"name":"formatDateTime","hash":{},"data":data}))
    + "</pubDate>\r\n           <guid>"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.DetailUrl : stack1), depth0))
    + "</guid>\r\n        </item>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "﻿<rss version=\"2.0\" xmlns:wfw=\"http://wellformedweb.org/CommentAPI/\" xmlns:slash=\"http://purl.org/rss/1.0/modules/slash/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:trackback=\"http://madskills.com/public/xml/rss/module/trackback/\">\r\n    <channel>\r\n        <title>Copyburo</title>\r\n        <link>"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.Context : depth0)) != null ? stack1.MainUrl : stack1), depth0))
    + "</link>\r\n        <description>RSS feed</description>\r\n        <ttl>60</ttl>\r\n        \r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.Items : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </channel>\r\n</rss>\r\n\r\n\r\n";
},"useData":true});