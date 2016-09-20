var view_mine = {
	profit:`<div class="mui-card-header nlb-rm-header-line nlb-mine-num">
                    {{title}}
                </div>
                <div class="mui-card-content nlb-num nlb-mine-num">
                    ￥{{moneyNum}}
                </div>
                <div class="mui-card-footer nlb-rm-header-line mui-pull-right">
                    <a href="#" class="nlb-mine-num">
                        总收益{{totalNum}}元<span class="mui-icon mui-icon-arrowright"></span>
                    </a>
                </div>`,

	setting:`<ul class="mui-table-view">
				{{each list as value}}
					<li class="mui-table-view-cell mui-media">
						<a href={{value.href}} class="mui-navigate-right">
							<img class="mui-pull-left nlb-cell-image" src={{value.image}}>
							<div class="mui-media-body">
								{{value.title}}
							</div>
						</a>
					</li>
				{{/each}}
			</ul>`
};
			
