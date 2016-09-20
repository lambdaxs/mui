"use strict";

var view_find = {
	toptab: "<ul class=\"mui-table-view mui-grid-view\">\n\t\t\t\t{{each list as value}}\n\t\t\t\t\t<li class=\"mui-table-view-cell mui-media mui-col-xs-6\">\n\t\t\t\t\t\t<a href={{value.href}} class=\"mui-text-center\">\n\t\t\t\t\t\t\t<img class=\"mui-media-object mui-pull-left\" src={{value.image}} style=\"width: 30px;height: 30px;\"/>\n\t\t\t\t\t\t\t<span class=\"mui-pull-left\">{{value.title}}</span>\n\t\t\t\t\t\t</a>\n                \t</li>\n\t\t\t\t{{/each}}                                \n            </ul>",

	setting: "<ul class=\"mui-table-view\">\n\t\t\t\t{{each list as value}}\n\t\t\t\t<li class=\"mui-table-view-cell mui-media\">\n\t\t\t\t\t<a href={{value.href}} class=\"mui-navigate-right\">\n\t\t\t\t\t\t<img class=\"mui-pull-left nlb-cell-image\" src={{value.image}}>\n\t\t\t\t\t\t<span>{{value.title}}</span>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t{{/each}}\n\t\t\t</ul>"
};

//# sourceMappingURL=find-compiled.js.map