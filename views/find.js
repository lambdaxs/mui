var view_find = {
	toptab:`<ul class="mui-table-view mui-grid-view">
				{{each list as value}}
					<li class="mui-table-view-cell mui-media mui-col-xs-6">
						<a href={{value.href}} class="mui-text-center">
							<img class="mui-media-object mui-pull-left" src={{value.image}} style="width: 30px;height: 30px;"/>
							<span class="mui-pull-left">{{value.title}}</span>
						</a>
                	</li>
				{{/each}}                                
            </ul>`,

	setting:`<ul class="mui-table-view">
				{{each list as value}}
				<li class="mui-table-view-cell mui-media">
					<a href={{value.href}} class="mui-navigate-right">
						<img class="mui-pull-left nlb-cell-image" src={{value.image}}>
						<span>{{value.title}}</span>										
					</a>
				</li>
				{{/each}}
			</ul>`
}
