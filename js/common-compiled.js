'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function () {
  var ua = navigator.userAgent.toLowerCase();
  var sys = ua.match(/html5plus/);
  if (sys != 'html5plus') {
    mui.openWindow = function openWindow(param, target, options) {
      var url = param.url;
      if (param.target == '_blank') {
        window.open(url);
      } else {
        var data = param.data;
        if (data) {
          url += '?';
          for (var key in data) {
            if (data[key] instanceof Object || data[key] instanceof Array) {
              //将数组和对象转为json
              url = url + key + '=' + JSON.stringify(data[key]) + '&';
            } else {
              url = url + key + '=' + data[key] + '&';
            }
          }
          url = url.slice(0, -1);
        }
        window.location.href = url;
      }
    };
  }
})();

var nlb = {
  params: function params(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      var paramValue = decodeURI(r[2]);
      var startStr = paramValue.charAt(0);
      var endStr = paramValue.charAt(paramValue.length - 1);
      if ((startStr === '[' || startStr === '{') && (endStr === ']' || endStr === '}')) {
        return JSON.parse(paramValue);
      }
      return decodeURI(r[2]);
    }
    return null;
  },
  css: function css() {
    var obj = arguments[0],
        options = arguments[1]; //获得函数的参数,第一个参数是dom对象。
    if (!!obj == false || typeof options == 'undefined') return null;
    if (typeof options == 'string') return document.defaultView.getComputedStyle(obj, null)[options];
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == 'object') {
      for (var i in options) {
        obj.style[i] = options[i]; //设置css样式
      }
    }
  },
  fillView: function fillView(contentId, viewTemplate, data) {
    if (!template) {
      console.log('需要引入template库');
    } else {
      document.getElementById(contentId).innerHTML = template.compile(viewTemplate)(data);
    }
  }
};

//# sourceMappingURL=common-compiled.js.map