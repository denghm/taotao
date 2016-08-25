window.menusConfig = {
	menus: [
		{
			key: '2',
			url: '', 
			classStyle:'icon-briefcase', 
			name:' 产品管理',
			level2List: [
				{ name:'产品维护', url:'product/maintenance' },
				{ name:'发行商管理', url:'distributors/maintenance' }
			]
		}, 
		{
			key: '3',
			url: '', 
			classStyle:'icon-credit-card', 
			name:'分销管理',
			level2List: [
				{ name:'分销签约管理', url:'distribut/maintenance' },
			]
		},
		{
			key: '4',
			url: '', 
			classStyle:'icon-calendar', 
			name:'报表管理',
			level2List: [
				{ name:'分销产品销售报表', url:'sales/salesquota/portal' },
				{ name:'产品进度状态表', url:'sales/salesquota/portal' },
			]
		}
	]
}