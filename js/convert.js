//var points = [new BMap.Point(116.3786889372559,39.90762965106183),
//                new BMap.Point(116.38632786853032,39.90795884517671),
//                new BMap.Point(116.39534009082035,39.907432133833574),
//                new BMap.Point(116.40624058825688,39.90789300648029)                  
//  ];
//
//  //地图初始化
//  var bm = new BMap.Map("allmap");
//  bm.centerAndZoom(new BMap.Point(116.378688937,39.9076296510), 15);
//
//  //坐标转换完之后的回调函数
//  translateCallback = function (data){      
//    if(data.status === 0) {
//      for (var i = 0; i < data.points.length; i++) {
//          bm.addOverlay(new BMap.Marker(data.points[i]));
//          bm.setCenter(data.points[i]);          	
//      }
//    }
//  }
//  setTimeout(function(){
//      var convertor = new BMap.Convertor();
//      convertor.translate(points, 1, 5, translateCallback)
//  }, 1000);