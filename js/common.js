
(function(){
	var ua = navigator.userAgent.toLowerCase();
	var sys = ua.match(/html5plus/);
	if (sys != 'html5plus') {
		mui.openWindow = function openWindow(param,target,options) {
			var url = param.url;			
			if(param.target == '_blank'){
				window.open(url);
			}else{
				var data = param.data;
				if(data) {
					url += '?';
					for (var key in data){
						if (data[key] instanceof Object || data[key] instanceof Array){
							//将数组和对象转为json
							url = url+key+'='+JSON.stringify(data[key])+'&';	
						}else {
							url = url+key+'='+data[key]+'&';	
						}					
					}
					url = url.slice(0,-1);
				}
				window.location.href = url;
			}
		}
	}
})();



var nlb = {
	params:function (name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     	var r = window.location.search.substr(1).match(reg);
     	if(r!=null){
     		var paramValue = unescape(r[2]);
     		var startStr = paramValue.charAt(0);
     		var endStr = paramValue.charAt(paramValue.length-1);
     		if ((startStr === '[' || startStr === '{') &&(endStr === ']' || endStr === '}')){
     			return JSON.parse(paramValue);
     		}
     		return  unescape(r[2]);
     	}
     	return null;
	}
};
