export default {
	'commissionType'   :  { key :'orderNumber' ,name : '佣金类型', wrapperClass : 'col-md-5  ' ,type : 'select', 
				   		options : ['未设置','固定佣金','阶梯佣金'] },
 	'consignmentTime'  : { key :'productName', name : '申请代销时间', wrapperClass : 'col-md-5' , type : 'time'},
 	'uploadContract'   : { key :'productName', name : '上传合同影印件', wrapperClass : 'col-md-5' , type : 'button' ,value : '添加图片' ,icon : 'addImg'},
 	'appProName'  :   { key :'productName', name : '申请代销产品名称',value : '小众赢1号', wrapperClass : 'col-md-2' , type : 'text'},
 	'appDistri'  :   { key :'productName', name : '申请分销商',value : '祺鲲', wrapperClass : 'col-md-2' , type : 'text'},
 	'appTime'  :   { key :'productName', name : '申请代销时间',value : '2016-10-08至2016-12-10', wrapperClass : 'col-md-2' , type : 'text'},
 	'appAmount'  :   { key :'productName', name : '申请代销额度',value : '200万', wrapperClass : 'col-md-2' , type : 'text'},
 	'commissionTypeText'  :   { key :'productName', name : '佣金类型',value : '固定佣金 佣金比例:2%', wrapperClass : 'col-md-2' , type : 'text'},
 	'distriCompany'  :   { key :'productName', name : '发行公司',value : '固定佣金 佣金比例:2%', wrapperClass : 'col-md-2' , type : 'text'},
 	'distriTime'  :   { key :'productName', name : '代销时间',value : '2016-10-08至2016-12-10', wrapperClass : 'col-md-2' , type : 'text'},
 	'distriAmount'  :   { key :'productName', name : '代销额度',value : '200万', wrapperClass : 'col-md-2' , type : 'text'},
 	'contractCopy'  :   { key :'productName', name : '电子合同影印件', wrapperClass : 'col-md-5 left-right' , type : 'img',src: 'static/img/default_user.jpg'},
 	'distriName'  :   { selfStyle: {paddingLeft: '50px'}, key :'productName', name : '分销方名称',value : '创宁金融', wrapperClass : 'col-md-2' , type : 'text'},
 	'padNum'  :   { selfStyle: {paddingLeft: '50px'}, key :'productName', name : 'pad数',value : '20', wrapperClass : 'col-md-2' , type : 'text'},
 	'distriLogo'  :   { selfStyle: {paddingLeft: '50px'}, key :'productName',  wrapperClass : 'col-md-5' , type : 'img',src: 'static/img/default_user.jpg'},
 	'IdCardPositive'  :   { key :'productName',  name : '身份正面照' ,selfStyle: {paddingLeft: '50px'}, wrapperClass : 'col-md-5 up-down' , type : 'img',src: 'static/img/default_user.jpg'},
 	'IdCardNegative'  :   { key :'productName', name : '身份负面照' , wrapperClass : 'col-md-5 up-down' , type : 'img',src: 'static/img/default_user.jpg'},
  	'payType'  :   { key :'productName', name : '支付方式',value : '银行转账凭证', selfStyle: {paddingLeft: '50px'}, wrapperClass : 'col-md-2' , type : 'text'},
 	'transferCertificate'  :   { key :'productName', name : '转账凭证' , selfStyle: {paddingLeft: '50px'}, wrapperClass : 'col-md-5 up-down' , type : 'img',src: 'static/img/default_user.jpg'},
 	'transferCertificate'  :   { key :'productName', name : '转账凭证' , selfStyle: {paddingLeft: '50px'}, wrapperClass : 'col-md-5 up-down' , type : 'img',src: 'static/img/default_user.jpg'},
 	'transferCertificate'  :   { key :'productName', name : '转账凭证' , selfStyle: {paddingLeft: '50px'}, wrapperClass : 'col-md-5 up-down' , type : 'img',src: 'static/img/default_user.jpg'},
 	'transferCertificate'  :   { key :'productName', name : '转账凭证' , selfStyle: {paddingLeft: '50px'}, wrapperClass : 'col-md-5 up-down' , type : 'img',src: 'static/img/default_user.jpg'},
 	'transferCertificate'  :   { key :'productName', name : '转账凭证' , selfStyle: {paddingLeft: '50px'}, wrapperClass : 'col-md-5 up-down' , type : 'img',src: 'static/img/default_user.jpg'},


 	'baseText'  : (name, value, key = '') => ({ key :key, name : name , value: value, selfStyle: {paddingLeft: '50px', textAlign: 'left'}, wrapperClass : 'col-md-4 up-down' , type : 'text'}),
 	'textList'  : (textArr) => ({  textArr : textArr ,selfStyle: {paddingLeft: '50px', textAlign: 'left'}, wrapperClass : 'col-md-6' , type : 'textList'}),
 }
