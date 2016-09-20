"use strict";

/**
 * Created by xiaos on 16/9/19.
 */
var view_tabbar;
view_tabbar = {
    tabbar: "{{each list as value}}\n                {{if value.isIndex}}\n                <a class=\"mui-tab-item mui-active\" href={{value.href}}>\n                {{else}}\n                <a class=\"mui-tab-item\" href={{value.href}}>\n                {{/if}}\n                <span class=\"mui-icon {{value.icon}}\"></span>\n                    <span class=\"mui-tab-label\">{{value.name}}</span>\n                </a>\n             {{/each}}"

};

//# sourceMappingURL=tabbar-compiled.js.map