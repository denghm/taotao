import Widget from 'static/js/widget.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol';
import Star from   'widget/component/star/star';
import singledate from  'widget/component/singledate/singledate';
import commset from  'widget/component/productcommset/productcommset';
import formModel from 'model/formModel';
import CommType from 'widget/component/commtype/commtype';
import YearRate from 'widget/component/yearrate/yearrate';
import VerifyConfirm from 'widget/component/verifyconfirm/verifyconfirm';
import fundStrategy from 'widget/component/fundStrategy/fundStrategy';
import Util from 'widget/util/util';
import editor from 'widget/component/editor/editor';
import AlertDialog from "widget/classComponent/dialog/alert"
import citySelectDialog from "widget/classComponent/dialog/citySelectDialog"
import distributionWay from 'widget/component/distributionWay/distributionWay';
import CustomEle from "widget/component/customele/customele"
import foundStatus from "widget/component/foundStatus/foundStatus";
import proTerm from "widget/component/proTerm/proTerm"
import Soled from "widget/component/soled/soled"
import Hoster from "widget/component/hoster/hoster"
import Filter from 'widget/filter/distributorStatus'

let style = __inline('./editform.inline.less');
let tpl = __inline('./editform.tpl');

require.loadCss({
    name: 'admin-widget-editform-style',
    content: style
});

var editform = Widget.extend({ 

    init : function(data){

        this.data = data;
        this.vm = this.display(data ,tpl ,'vue');
        this.render();
        this.bind();
        Waves.attach('button', ['waves-light']);

    },
    processData :function(){
        this.saveUrl   = data.saveUrl;
        this.publicUrl = data.publicUrl;

    },
    render : function(){
        let me = this;
        if($('select[data-key="publisherFk"]')){
            let publisherList  = enums.publisherFk;
            let publisherArr   =  [];

            for(key in publisherList){
                let option = `<option value="${key}">${publisherList[key]}</option>`;
                publisherArr.push(option);
            }
            $('select[data-key="publisherFk"]').append(publisherArr);
        }

        /*基金净值&累计分红&固定利率*/
        if (me.data.item.establishStatus == 1 && me.data.item.fundGenreAFk == 500) {
            $(".yesterdayNet").removeClass('hidden');
            $(".sumNet").removeClass('hidden');
            $(".expectedArr").removeClass('hidden');
            $(".admin-widget-yearrate").css('display','none');
        }else{
            $(".yesterdayNet").addClass('hidden');
            $(".sumNet").addClass('hidden');
            $(".expectedArr").addClass('hidden');
            $(".admin-widget-yearrate").css('display','block');
        }

    },
    bind: function () {
        
        let me = this;
        let container = $(this.vm.$el);
        $('button[data-role="submit"]').on('click', function () {
            
        	let filters = Util.getInputFilters();
        	filters =  me.toNum(filters);
        	filters.productId = parseInt(_APP_HASH.id);
            
            // get star info
            if ($('.admin-widget-star').size()) {
                filters.arrRank = +$('.admin-widget-star').attr('data-value');
            }
            // get year rate info
            let yearRateContainer = container.find('.admin-widget-yearrate');
            if (yearRateContainer.size()) {
                let yearRateData     = Util.getYearRateData(yearRateContainer);
                filters.arrTypeFk    = yearRateData.arrTypeFk;
                filters.expectedArr  = yearRateData.expectedArr;
                filters.fixMin       = yearRateData.fixMin;
                filters.minArr       = yearRateData.minArr;
                filters.floatMax     = yearRateData.floatMax;
                filters.maxArr       = yearRateData.maxArr;
                filters.productLadderRates = yearRateData.productLadderRates
            }

            if(filters.isRiskRating === 2){
                filters.riskRating = '';
            }

            //alert(JSON.stringify(filters));
        	Util.getData(me.data.submitUrl,filters,"POST").then((res) => {
                if(res.msg === "success"){
                    window.location.href = '#main/product/maintenance';
                }
        	});
        	
        });

        $('button[data-role="save"]').on('click',function(){

            let dataRole = $(this).attr('data-role');
            if(dataRole == 'save' || dataRole == 'release') {

                let filters = {};
                let url  =  '';
                filters = Object.assign(filters, Util.getInputFilters());
                if(filters.name == "" || filters.name == undefined){
                    //todo 保存的时候产品名字不能为空
                    //return;
                }
                // get star info
                if ($('.admin-widget-star').size()) {
                    filters.arrRank = +$('.admin-widget-star').attr('data-value');
                }
                filters.categoryFk    = parseInt($(this).attr("pro"));
                filters.fundTypeFk    = parseInt(filters.fundTypeFk);
                filters.fundSubTypeFk = parseInt(filters.fundSubTypeFk);

                if($("input[data-key='maturities']").val() === '' 
                    || $("input[data-key='maturities']").val() === undefined){
                    filters.unitFkMaturities= '';
                }
                if($("input[data-key='offeringSize']").val() === '' 
                    || $("input[data-key='offeringSize']").val() === undefined){
                    filters.unitFkOfferingSize = '';
                }
                if($("input[data-key='startingPrice']").val() === '' 
                    || $("input[data-key='startingPrice']").val() === undefined){
                    filters.unitFkStartingPrice = '';
                }
                if($("input[data-key='increasement']").val() === '' 
                    || $("input[data-key='increasement']").val() === undefined ){
                    filters.unitFkIncreasement = '';
                }
                if($("input[data-key='issureScale']").val() === '' 
                    || $("input[data-key='issureScale']").val() === undefined){
                    filters.unitFkIssureScale = '';
                }
                let obj  = {
                    'product' : filters,
                }

                Util.getData(me.data.saveUrl,obj,'POST').then((res)=>{
                    //console.log(res);
                });
            }
           
        })

        $('button[data-role="cancel"]').on('click',function(){
        	window.location.href = '#main/product/maintenance';
        })

        // enable risk rating 
        container.on('click', '[data-key=isRiskRating]', function () {
            let on = container.find('[data-key=isRiskRating]:checked').val();
            let target = container.find('[data-key=riskRating]').parents('.input-wrapper');
            if (on === '2') {
                target.hide();
            } else {
                target.show();
            }
        });

        //init risk level
        setTimeout(() => {
            if (container.find('[data-key=isRiskRating]:checked').val() === '2') {
                container.find('[data-key=riskRating]').parents('.input-wrapper').hide();
            }
        });

        //成立状态-已成立
        $("select[data-key='establishStatus']").on('click',function(){
            if(me.data.item.fundGenreAFk == 500){
                if($(this).val() == 1){
                    $(".yesterdayNet").removeClass('hidden');
                    $(".sumNet").removeClass('hidden');
                    $(".expectedArr").removeClass('hidden');
                    $(".admin-widget-yearrate").css('display','none');
                }else{
                    $(".yesterdayNet").addClass('hidden');
                    $(".sumNet").addClass('hidden');
                    $(".expectedArr").addClass('hidden');
                    $(".admin-widget-yearrate").css('display','block');
                }
            }
        });

    },
    toNum : function (filters){
    	
    	var  isNumArr =['expectedArr','issureScale','offeringSize','selfDefinedProcess','startingPrice','unitFkStartingPrice'];

    	for (item in filters){
    		if($.inArray(item ,isNumArr) !== -1 ){
    			filters[item] = parseInt(filters[item]);
    		}
    	} 
    	
    	return filters;
    },
    methods:{
    	back : () => {
            window.history.back();
        }
    }
});

export default editform;