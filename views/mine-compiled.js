"use strict";

var view_mine = {
	profit: "<div class=\"mui-card-header nlb-rm-header-line nlb-mine-num\">\n                    {{title}}\n                </div>\n                <div class=\"mui-card-content nlb-num nlb-mine-num\">\n                    ￥{{moneyNum}}\n                </div>\n                <div class=\"mui-card-footer nlb-rm-header-line mui-pull-right\">\n                    <a href=\"#\" class=\"nlb-mine-num\">\n                        总收益{{totalNum}}元<span class=\"mui-icon mui-icon-arrowright\"></span>\n                    </a>\n                </div>",

	setting: "<ul class=\"mui-table-view\">\n\t\t\t\t{{each list as value}}\n\t\t\t\t\t<li class=\"mui-table-view-cell mui-media\">\n\t\t\t\t\t\t<a href={{value.href}} class=\"mui-navigate-right\">\n\t\t\t\t\t\t\t<img class=\"mui-pull-left nlb-cell-image\" src={{value.image}}>\n\t\t\t\t\t\t\t<div class=\"mui-media-body\">\n\t\t\t\t\t\t\t\t{{value.title}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t{{/each}}\n\t\t\t</ul>"
};

//# sourceMappingURL=mine-compiled.js.map