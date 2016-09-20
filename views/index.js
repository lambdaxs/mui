var view_index = {
	banner:`<div class="mui-slider">
				<div class="mui-slider-group mui-slider-loop">
					<div class="mui-slider-item mui-slider-item-duplicate"><a href={{list[count-1].href}}><img src={{list[count-1].src}} /></a></div>
					{{each list as value}}					
						<div class="mui-slider-item"><a href={{value.href}}><img src={{value.src}} /></a></div>					
					{{/each}}
					<div class="mui-slider-item mui-slider-item-duplicate"><a href={{list[0].href}}><img src={{list[0].src}} /></a></div>							   
				</div>
			</div>`,

	toptab:`<ul class="mui-table-view mui-grid-9 mui-grid-view">
				{{each list as value}}
				<li class="mui-table-view-cell mui-media mui-col-xs-3">
					<a href={{value.href}}>
						<img src={{value.image}} style="width: 100%;"/>					
						<div class="mui-media-body">{{value.name}}</div>
					</a>			
				</li>
				{{/each}}
			</ul>`,

	product:`{{each list as value}}
				<div class="mui-card nlb-main-product">					
					<div class="mui-card-header nlb-rm-header-line">
						<div class="mui-media-body">
							{{value.areaName}}<span class="mui-badge mui-badge-primary">{{value.title}}</span>	
						</div>				
					</div>
					<!--内容区-->
					<div class="mui-card-content">
						<div class="mui-media-body mui-text-center">
							<p class="nlb-num nlb-home-num">{{value.ratio}}</p>
							<p>{{value.ratioDesc}}</p>
						</div>			
					</div>					
					<div class="mui-card-footer">
						<p>{{value.desc}}</p>
						<a href="test.html" extra-info="0111"><span class="nlb-show-detail">查看详情</span></a>
					</div>
				</div>
			{{/each}}`,
			
	dataView:`<div class="mui-card" style="background-image: url(images/databg.jpeg);background-size: cover;background-repeat: no-repeat;">
				<div class="mui-card-header nlb-rm-header-line">
					<div class="mui-media-body mui-text-center">
							<img src="images/flag1.png" style="width: 15px;height: 15px;"/>
							<span style="margin-left: 3px;">{{title}}</span>
					</div>
				</div>
				<div class="mui-card-content mui-text-center">
					<p class="nlb-data-title">{{moneyDesc}}</p>
					<div class="mui-media-body">
						<p class="nlb-data-num">{{moneyNum}}</p>
					</div>
					<p class="nlb-data-title">{{userDesc}}</p>
					<div class="mui-media-body">
						<p class="nlb-data-num">{{userNum}}</p> 
					</div>
				</div>
				<div class="mui-card-footer">
					<p>{{desc}}</p>
				</div>
			</div>`
};