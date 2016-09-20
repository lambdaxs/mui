/**
 * Created by xiaos on 16/9/19.
 */
var view_tabbar;
view_tabbar = {
    tabbar: `{{each list as value}}
                {{if value.isIndex}}
                <a class="mui-tab-item mui-active" href={{value.href}}>
                {{else}}
                <a class="mui-tab-item" href={{value.href}}>
                {{/if}}
                <span class="mui-icon {{value.icon}}"></span>
                    <span class="mui-tab-label">{{value.name}}</span>
                </a>
             {{/each}}`

};
