export default {
	'proName'  		:  { key :'name' ,name : '产品名称', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入产品简称',validate:{isrequire : true} },
	'fundStrategy'	:  {type : 'fundStrategy'},
	'fundType' 		:  { key :'fundGenreAFk' ,name : '基金类型', wrapperClass : 'col-md-4 prn ' ,  brd : true, type : 'select', 
				   		options : ['证券','股权','风险投资','混合型','其他权益','类固收私募基金','私募股权基金','契约型基金'] ,value : [500,510,520,530,540,550,560,570],isNum : 1 ,validate:{isrequire : true}},
	'fundTypeUnit' 	:  { key :'fundGenreBFk' ,name : '', wrapperClass : 'col-md-2 pln ' , bln: true,   type : 'select', 
						options : ['契约','公司','有限合伙'] ,validate: {isrequire : true},value : [700,710,720] , isNum : 1},	
    'distributor' 	:  { key :'publisherFk' ,name : '发行公司', wrapperClass : 'col-md-6' ,   type : 'select', validate:{isrequire : true},isNum : 1},
 	'hoster'  		:  { key :'custodianType' ,name : '托管方', wrapperClass : 'col-md-6' ,   type : 'select', 
						options : ['无','托管劵商','托管银行','第三方支付存管'],validate: {isrequire : true},value : [10,20,30,40] , isNum : 1},
 	'fundLeader' 	:  { key :'fundManager' ,name : '基金经理', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入基金经理',validate: {isrequire : false}},
 	'fundManager' 	:  { key :'fundManagerCompany', name : '基金管理人', wrapperClass : 'col-md-6' , type : 'input' ,placeholder : '请输入基金管理人',validate: {isrequire : false}},
 	'trusteeFee' 	:  { key :'fundCustodianCharges' ,name : '托管费', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入基金经理',validate: {isrequire : false}},
 	'phone' 		:  { key :'serviceTel', name : '联系电话', wrapperClass : 'col-md-6' , type : 'input' ,placeholder : '请输入联系电话',validate: {isrequire : false}},					
 	'foundStatus' 	:  { key :'establishStatus' ,name : '成立状态', wrapperClass : 'col-md-6' ,   type : 'select', 
					    options : ['募集中','已成立','募集失败'],value : [0,1,2] , isNum : 1,validate: {isrequire : false}},
 	'proStatus' 	:  { key :'salesStatusFk' ,name : '产品状态', wrapperClass : 'col-md-6' ,   type : 'select', 
					    options : ['在售','预售','售罄','已结束','执行中','募集失败'],value : [10,20,30,60,70,80] , isNum : 1,validate: {isrequire : false}},
	'executeState' 	:  { key :'executeState' ,name : '执行中', wrapperClass : 'col-md-6' ,  type : 'radios',radios : [{'name': '已结束','isChecked' : 'checked'},{'name' : '执行中'} ],validate: {isrequire : true}},
	'distriSize' 	:  { key :'issureScale' ,name : '发行规模', wrapperClass : 'col-md-4 prn ' ,  brd : true, type : 'input', placeholder:'请输入发行规模',validate: {isrequire : false}},
	'unitFkOfferingSize':  { key :'unitFkOfferingSize' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['元','万元','亿元'],value : [1100,1200,1300] , isNum : 1,validate: {isrequire : false}},
	'unitFkIssureScale' :  { key :'unitFkIssureScale' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['元','万元','亿元'],value : [1100,1200,1300] , isNum : 1,validate: {isrequire : false}},
	'unitFkStartingPrice' 	:  { key :'unitFkStartingPrice' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['元','万元','亿元'],value : [1100,1200,1300] , isNum : 1,validate: {isrequire : false}},
	'unitFkIncreasement' 	:  { key :'unitFkIncreasement' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['元','万元','亿元'],value : [1100,1200,1300] , isNum : 1,validate: {isrequire : false}},

	'moneyUnit' 	:  { key :'unitFkIncreasement' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['万元','元','亿元'],validate: {isrequire : false}},

	'saleSize' 		:  { key :'offeringSize' , reg: '^\d+\.?\d*$', regError: '需要为数字', name : '可销售份额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入可销售份额',validate: {isrequire : true}}, 				 
 	'proTerm' 		:  { key :'maturities' ,name : '产品期限', wrapperClass : 'col-md-4 prn' ,   brd : true,  type : 'input',placeholder : '请输入产品期限' , options : ['无'],validate: {isrequire : true}},
 	'unitFkMaturities' 	    :  { key :'unitFkMaturities' ,name : '', wrapperClass : 'col-md-2 pln' ,   type : 'select', bln: true, 
					    options : ['天','自然月','自然季','自然年','非固定期限（不赎回则一直持有）','无', '不限期（前台投资人自选期限）'],value : [2100,2200,2300,2400,-3,-2,-1] , isNum : 1,validate: {isrequire : false} },
 	'distriDate' 	:  { key :'dateRelease' ,name : '发行日期', wrapperClass : 'col-md-6 ' ,  type : 'singledate',validate: {isrequire : false}},
 	'purchaseAmount':  { key :'startingPrice', reg: '^\d+\.?\d*$', regError: '需要为数字',  name : '起购金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入起购金额',validate: {isrequire : true}},
 	'increasingAmount':{ key :'increasement' , reg: '^\d+\.?\d*$', regError: '需要为数字',  name : '递增金额', wrapperClass : 'col-md-4 prn',brd : true, type : 'input',placeholder : '请输入递增金额',validate: {isrequire : true}},
 	'subscriptionFee' :{ key :'subscribeFee' ,name : '认购费', wrapperClass : 'col-md-6' ,   type : 'input', placeholder : "请输入认购费"},
	'ManageFee' 	: { key :'managementCost' ,name : '管理费', wrapperClass : 'col-md-6' ,   type : 'input', placeholder : "请输入管理费"},
 	'redemptionFee' : { key :'redeemFee' ,name : '赎回费', wrapperClass : 'col-md-6' ,   type : 'input', placeholder : "请输入赎回费"},
	'compensationPay':{ key :'reward' ,name : '业绩报酬', wrapperClass : 'col-md-6' ,   type : 'input', placeholder : "请输入业绩报酬"},
 	'closedTime' 	: { key :'closeTime' ,name : '封闭期', wrapperClass : 'col-md-6' ,   type : 'input', placeholder : "请输入封闭期"},
	'openDay'		: { key :'openDayDesc' ,name : '开放日', wrapperClass : 'col-md-6' ,   type : 'singledate', placeholder : "请输入开放日"},
 	'moneyType' 	: { key :'currencies' ,name : '币种', wrapperClass : 'col-md-6' ,   type : 'select', options : ['人民币','美元','港币','其他'],value : [10,20,30,40] , isNum : 1},
	'riskRant' 		: { key :'riskRating' ,name : '风险等级', wrapperClass : 'col-md-6' ,   type : 'select', options : ['高风险','中风险','低风险'],value : [30,20,10] , isNum : 1},
 	'incomeRant' 	: { key :'arrRank' ,name : '收益评级', wrapperClass : 'col-md-6' ,   type : 'star'},
 	
 	'yearIncome' 	: { key :'arrTypeFk' ,name : '年化收益率', wrapperClass : 'col-md-6' ,   type : 'select', options : ['不选择','固定','浮动','固定阶梯','浮动阶梯']},
 	
 	'industryTypeFk': { key :'industryTypeFk' ,name : '信托类型', wrapperClass : 'col-md-6' ,   type : 'select', 
					   options : ['政信类','金融类','基础设施','工商企业','房地产','其他'], value: ['10', '20', '30', '40', '50', '60'], validate: {isrequire : true}},
 	'buyBegintime'	: { key :'startDatePurchase' ,name : '购买起始日', wrapperClass : 'col-md-6' ,   type : 'singledate', placeholder : "请选择购买起始日"},
	'buyEndTime'	: { key :'endDatePurchase' ,name : '购买截止日', wrapperClass : 'col-md-6' ,   type : 'singledate', placeholder : "请选择购买截止日"},
 	'staticUnit'	: (unit) => ({key :'' ,name : unit, wrapperClass : 'col-md-2 pln', type : 'text', bln: true}),
 	'interestRate' 	: { key :'expectedArr', name : '利率', wrapperClass : 'col-md-6' , type : 'input', placeholder : '', unit: '%'},					
 	'soled'			: { key :'selfDefinedProcess', name : '已销售份额', wrapperClass : 'col-md-6' , type : 'input', placeholder : '', unit: '元', isrequire: true},
 	'star'			: { key :'arrRank', name : '收益评级', wrapperClass : 'col-md-6' , type : 'star'},
 	
 	'proFoundDay'   : { key :'productName', name : '产品成立日期', wrapperClass : 'col-md-6' , type : 'time'},
 	'distirName'    : { key :'name' ,name : '名称', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商名称' ,validate: {isrequire : true}},
 	'distirPhone'   : { key :'telephone' ,name : '发行商固定电话', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商固定电话',validate: {isrequire : true}},
 	'distirFullName'   : { key :'fullName' ,name : '发行商全称', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商全称',validate: {isrequire : true}},
 	'distirAddr'   : { key :'address' ,name : '发行商地址', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商地址',validate: {isrequire : true}},
 	
 	'personnelPolicy' : { key :'orderNumber' ,name : '人员策略', wrapperClass : 'col-md-6' ,   type : 'radios',radios : [{'name': '员工' },{'name' : '直销员','isChecked' : 'checked' } ] },
 	'salesPolicy'  : { key :'orderNumber' ,name : '直销员策略', wrapperClass : 'col-md-6' ,   type : 'select', 
					   options : ['全部','按团队发布']},
 	'employeePolicy'  : { key :'orderNumber' ,name : '员工策略', wrapperClass : 'col-md-6 none' ,   type : 'select', 
					   options : ['全部']},
 	'comComputePolicy' : { key :'orderNumber' ,name : '佣金计算规则', wrapperClass : 'col-md-6' ,   type : 'radios',radios : [{'name': '直接佣金','isChecked' : 'checked'},{'name' : '月度业绩' } ] },
 	'commissionTypeFk'      : { key :'orderNumber' ,name : '佣金类型', wrapperClass : 'col-md-6' ,   type : 'select', 
					   options : ['未设置','固定佣金','阶梯佣金'] ,validate: {isrequire : true}},
 	'comConfirmType'     : { key :'orderNumber' ,name : '佣金确认方式', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入发行商地址'},

 	// 佣金设置，逻辑关系比较复杂，使用单独的vue组件
 	'productCommSet': {type: 'product-commset'},
 	// 年收益率设置，逻辑关系比较复杂，使用单独的vue组件
 	'yearRate': {type: 'year-rate'},
 	'verifyConfirm': {type: 'verify-confirm'},
 	'incomeDistriType' : { key :'distributionWayFk' ,name : '收益分配方式', wrapperClass : 'col-md-6' ,   type : 'select', 
					   options : ['到期一次性还本付息','按期付息，到期还本'], value: [90, 130]},
	'incomeDistirCycle' : { key :'orderNumber' ,name : '收益分配方式', wrapperClass : 'col-md-4 prn' ,   type : 'select', 
					   options : ['按月','按季度','按年','按周','按天','按半年']},
	'incomeDistirUnit' : { key :'orderNumber' ,name : '每', wrapperClass : 'col-md-2 pln' ,   type : 'input'},				   
  	'incomeComputeDay' : { key :'orderNumber' ,name : '收益计算日期', wrapperClass : 'col-md-6' ,   type : 'radios',radios : [{'name': '固定日期','isChecked' : 'checked',key : 'fixedDay'},{'name' : '按日成交' ,key : 'closeDay'},{'name' : '成立日',key : 'foundDay' }  ] },
 	'fixedDay' 	:  { key :'orderNumber' ,name : '固定日期', wrapperClass : 'col-md-6 fixedDay incomeComputeDay' ,  type : 'singledate', placeholder:'请输入发行规模',validate: {isrequire : true}},
 	'closeDay' 	:  { key :'orderNumber' ,name : '按日成交', wrapperClass : 'col-md-6 none closeDay incomeComputeDay' ,  type : 'singledate', placeholder:'请输入发行规模',validate: {isrequire : true}},
 	'foundDay' 	:  { key :'dateEstablished' ,name : '成立日', wrapperClass : 'col-md-6 none foundDay incomeComputeDay' ,  type : 'singledate', placeholder:'请输入发行规模',validate: {isrequire : true}},
 	'investModeFk' : { key :'investModeFk' ,name : '收益方式', wrapperClass : 'col-md-6' ,   type : 'select', 
					   options : ['信托贷款','股权投资','权益投资','证券投资','组合运用','其他投资','量化对冲投资','结构化投资','海外投资'],
					   value : [10,20,30,40,50,60,70,80,90] , isNum : 1 }, 
	'investManager' : { key :'investManager' ,name : '投资经理', wrapperClass : 'col-md-6' ,   type : 'input',placeholder : '请输入投资经理'},
 	'isRiskRating'  : { key :'isRiskRating' ,name : '是否启用风险等级', wrapperClass : 'col-md-4' ,   type : 'radios',radios : [{'name': '启用' ,'isChecked' : 'checked'  },{'name' : '关闭'} ] },
 	'proLocation'   : { key :'locationFk' ,name : '项目所在地', wrapperClass : 'col-md-6' ,   type : 'area', placeholder : '', validate: {isrequire : true}, placeholder: '请添加项目所在地'},
 	'proDistriLocation'   : { key :'locationFk' ,name : '产品发行地', wrapperClass : 'col-md-6' ,   type : 'area', placeholder : '请输入投资经理'},
 	'financeAmount'  : { key :'issureScale' ,name : '融资金额', wrapperClass : 'col-md-4 prn ' ,  brd : true, type : 'input', placeholder:'请输入融资金额'},
 	'stockRight'     : { key :'equity' ,name : '股权', wrapperClass : 'col-md-6' ,  brd : true, type : 'input', placeholder:'请输入股权',validate: {isrequire : true ,isNumber : true},unit: '%'},
 	'collarCast'     : { key :'collarCast' ,name : '领投人', wrapperClass : 'col-md-6' ,  brd : true, type : 'input', placeholder:'请输入领投人',validate: {isrequire : true}}, 
 	'collarCastNumber' : { key :'collarCastNumber' ,name : '身份证号', wrapperClass : 'col-md-6' ,  brd : true, type : 'input', placeholder:'请输入身份证号'}, 
 	'collarCastDesc'  : {type: 'editor'},
 	'commissionType'   :  { type: 'CommType' },
 	'baseInput'  : (opts = {}) => ({ key :opts.key ,name : opts.name || '', readonly: opts.readonly || false, wrapperClass : 'col-md-6', type : 'input', value: opts.value || ''}),
 }
