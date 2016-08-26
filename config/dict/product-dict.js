export default {
	'proName'  		:  { key :'orderNumber' ,name : '产品名称', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入产品简称',isrequire : true},
	'fundType' 		:  { key :'orderNumber' ,name : '基金类型', wrapperClass : 'col-md-4 prn ' ,  brd : true, type : 'select', 
				   		options : ['证券','股票','风险投资','混合型','其他权益','类固收私募基金','私募股权基金','契约型基金'] ,isrequire : true},
	'fundTypeUnit' 	:  { key :'orderNumber' ,name : '', wrapperClass : 'col-md-1 pln ' , bln: true,   type : 'select', 
						options : ['契约','公司','有限合伙'] ,isrequire : true},	
	'fundStrategy' 	:  { key :'orderNumber' ,name : '基金策略', wrapperClass : 'col-md-5' ,   type : 'select', 
						options : ['股票策略','期货策略','债券策略','其他策略'],isrequire : true},
	'secondStrategy':  { key :'orderNumber' ,name : '二级策略', wrapperClass : 'col-md-5' ,   type : 'select', 
						options : ['股票多头','股票多空','股票量化','行业策略','套利策略','事件驱动','复合策略'],isrequire : true},								  		   
    'distributor' 	:  { key :'orderNumber' ,name : '发行公司', wrapperClass : 'col-md-5' ,   type : 'select', 
						options : ['发行商A','发行商B','发行商C','新增发行商'],isrequire : true},
 	'hoster'  		:  { key :'orderNumber' ,name : '托管方', wrapperClass : 'col-md-5' ,   type : 'select', 
						options : ['无','托管劵商','托管银行','第三方支付存管'],isrequire : true},
 	'fundLeader' 	:  { key :'orderNumber' ,name : '基金经理', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入基金经理'},
 	'fundManager' 	:  { key :'productName', name : '基金管理人', wrapperClass : 'col-md-5' , type : 'input' ,placeholder : '请输入基金管理人'},
 	'trusteeFee' 	:  { key :'orderNumber' ,name : '托管费', wrapperClass : 'col-md-5' ,   type : 'input',placeholder : '请输入基金经理'},
 	'phone' 		:  { key :'productName', name : '联系电话', wrapperClass : 'col-md-5' , type : 'input' ,placeholder : '请输入联系电话'},					
 	'foundStatus' 	:  { key :'orderNumber' ,name : '成立状态', wrapperClass : 'col-md-5' ,   type : 'select', 
					    options : ['募集中','股票多空','股票量化','行业策略','套利策略','事件驱动','复合策略'],isrequire : true},
 	'proStatus' 	:  { key :'orderNumber' ,name : '产品状态', wrapperClass : 'col-md-5' ,   type : 'select', 
					    options : ['预售','在售','售罄'],isrequire : true},
	'distriSize' 	:  { key :'orderNumber' ,name : '发行规模', wrapperClass : 'col-md-4 prn ' ,  brd : true, type : 'input', placeholder:'请输入发行规模',isrequire : true},
	'moneyUnit' 	:  { key :'orderNumber' ,name : '', wrapperClass : 'col-md-1 pln' ,   type : 'select', bln: true, 
					    options : ['万元','千元','百元','元']},
	'saleSize' 		:  { key :'orderNumber' ,name : '可销售份额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'}, 				 
 	'proTerm' 		:  { key :'orderNumber' ,name : '产品期限', wrapperClass : 'col-md-5' ,   type : 'select',placeholder : '请输入发行规模' ,
				  		options : ['无'],isrequire : true},
 	'distriDate' 	:  { key :'orderNumber' ,name : '发行日期', wrapperClass : 'col-md-5 ' ,  type : 'input', placeholder:'请输入发行规模',isrequire : true},
 	'purchaseAmount':  { key :'orderNumber' ,name : '起购金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'},
 	'increasingAmount':{ key :'orderNumber' ,name : '递增金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入发行规模'},
 	'subscriptionFee' :{ key :'orderNumber' ,name : '认购费', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
	'ManageFee' 	: { key :'orderNumber' ,name : '管理费', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入管理费"},
 	'redemptionFee' : { key :'orderNumber' ,name : '赎回费', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
	'compensationPay':{ key :'orderNumber' ,name : '业绩报酬', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
 	'closedTime' 	: { key :'orderNumber' ,name : '封闭期', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
	'openDay'		: { key :'orderNumber' ,name : '开放日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
 	'moneyType' 	: { key :'orderNumber' ,name : '币种', wrapperClass : 'col-md-5' ,   type : 'select', options : ['人民币','美元','英镑']},
	'riskRant' 		: { key :'orderNumber' ,name : '风险等级', wrapperClass : 'col-md-5' ,   type : 'select', options : ['高风险','美元','英镑']},
 	'incomeRant' 	: { key :'orderNumber' ,name : '收益评级', wrapperClass : 'col-md-5' ,   type : 'star'},
 	'yearIncome' 	: { key :'orderNumber' ,name : '年化收益率', wrapperClass : 'col-md-5' ,   type : 'select', options : ['请选择','美元','英镑']},
 	'trustType' 	: { key :'orderNumber' ,name : '信托类型', wrapperClass : 'col-md-5' ,   type : 'select', 
					   options : ['政信类','金融类','基础设施','工商企业','房地产','其他'],isrequire : true},
 	'distriArea' 	: { key :'orderNumber' ,name : '产品发行地', wrapperClass : 'col-md-5' ,   type : 'select', 
					   options : ['发行商A','发行商B','发行商C','新增发行商'],isrequire : true},
 	'buyBegintime'	: { key :'orderNumber' ,name : '购买起始日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入认购费"},
	'buyEndTime'	: { key :'orderNumber' ,name : '购买截止日', wrapperClass : 'col-md-5' ,   type : 'input', placeholer : "请输入管理费"},
 	'staticUnit'	: (unit) => ({key :'' ,name : unit, wrapperClass : 'col-md-1 pln', type : 'text', bln: true}),
 	'interestRate' 	: { key :'productName', name : '利率', wrapperClass : 'col-md-5' , type : 'input', placeholder : '', unit: '%'},					
 	'soled'			: { key :'productName', name : '已销售份额', wrapperClass : 'col-md-5' , type : 'input', placeholder : '', unit: '元', isrequire: true},
 	'star'			: { key :'productName', name : '收益评级', wrapperClass : 'col-md-5' , type : 'star'},
 	
 	'proFoundDay'   : { key :'productName', name : '产品成立日期', wrapperClass : 'col-md-5' , type : 'time'},
 	'distirName'   : { key :'orderNumber' ,name : '名称', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商名称'},
 	'distirPhone'   : { key :'orderNumber' ,name : '发行商固定电话', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商固定电话'},
 	'distirFullName'   : { key :'orderNumber' ,name : '发行商全称', wrapperClass : 'col-md-12' ,   type : 'input',placeholder : '请输入发行商全称'},
 	'distirAddr'   : { key :'orderNumber' ,name : '发行商地址', wrapperClass : 'col-md-12' ,   type : 'input',placeholder : '请输入发行商地址'},
 }
