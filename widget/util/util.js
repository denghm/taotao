import AlertDialog from 'widget/classComponent/dialog/alert'

var util = {
    cameCase: (str) => {
        return str.replace(/(\w)/,function(v){return v.toUpperCase()});
    },
    flatData: function (data, prefixKey = '') {
        let res = {};
        for(let i in data) {
            if (data.hasOwnProperty(i)) {
                if (typeof data[i] === 'object') {
                    let tmp = $.extend(true, {}, data[i]);
                    res = $.extend(true, res, this.flatData(tmp, i));
                } else if (typeof data[i] !== 'function') {
                    res[prefixKey + this.cameCase(i)] = data[i];
                }
            }
        }

        return res;
    },
    getData :(url,param,methods) => {
 
        return new Promise(function(resolve, reject){
            var xhr = $.ajax({
                type: methods,
                url:  url ,
                dataType: 'json',
                contentType : 'application/json;charset=UTF-8',
                data: JSON.stringify(param),
                timeout : 10000,
                cache: false,
                success: function (ret) {
                    if(ret.msg === 'success'){
                        resolve(ret);
                    }

                    if(ret){
                        resolve(ret);
                    }  
                },
                error: function (ret) {
                    console.log('fail');
                    reject();
                }
            });
        });
    },
    getCommTypeData: (el)=> {
        // param `el` is the commType wrapper jQuery element
        let data = {};
        let validator = el.attr('data-validate');
        data.commissionTypeFk = +el.find('.commissionTypeFk').val();
        if (validator === 'required' && data.commissionTypeFk === -1) {
            return false;
        }
        data.baseCommission = null;
        data.productCommissionList = null;
        if (data.commissionTypeFk === 10) {
            data.baseCommission = +el.find('.baseCommission').val();
        } else if (data.commissionTypeFk === 20) {
            data.productCommissionList = JSON.parse(el.find('.admin-widget-laddercomm textarea').val());
        }
        return data;
    },
    getYearRateData: (el)=> {
        // param `el` is the commType wrapper jQuery element
        let data = {};
        
        data.arrTypeFk = +el.find('.arrTypeFk').val();
        data.expectedArr = null;
        data.fixMin = null;
        data.minArr = null;
        data.floatMax = null;
        data.maxArr = null;
        data.productLadderRates = null;
        if (data.arrTypeFk === 10) {
            data.expectedArr = el.find('.expectedArr').val();
        } else if (data.arrTypeFk === 20) {
            if (el.find('.fixMin').val()) {
                data.fixMin = 1;
                data.minArr = +el.find('.minArr').val();
            } else {
                data.fixMin = 0;
            }
            if (el.find('.floatMax').val()) {
                data.floatMax = 1;
                data.maxArr = +el.find('.maxArr').val();
            } else {
                data.floatMax = 0;
            }
        } else if (data.arrTypeFk === 30 || data.arrTypeFk === 40) {
            data.productLadderRates = JSON.parse(el.find('.admin-widget-laddercomm textarea').val());
        }
        return data;
    },
    getInputFilters: () => {

        let inputCollections = $('.panel-body').find('[data-key]');
        let data = {};
        for (let i = 0, len = inputCollections.length; i < len; i++) {
            let val = '';
            let ele = $(inputCollections[i]);
            let key = ele.attr('data-key');
            let isNum = ele.attr('is-num');

            if(isNum){
                val = parseInt(ele.attr('data-values')) || parseInt(ele.val());
            }else{
                val = ele.attr('data-values') || ele.val();
            }
            
            if (key && val) {
                data[key] = val;
            }
        }
        return data;
    },
    startPriceValidate: (layer) => {
        let Dict = {
            '1100': 1,
            '1200': 10000,
            '1300': 100000000
        };
        let startingPrice = +$('[data-key=startingPrice]', layer).val();
        let offeringSize = +$('[data-key=offeringSize]', layer).val();

        let startingPriceUint = $('[data-key=unitFkStartingPrice]', layer).val();
        let offeringSizeUint = $('[data-key=unitFkOfferingSize]', layer).val();

        if (offeringSize * Dict[offeringSizeUint] <= startingPrice * Dict[startingPriceUint]) {
            return false;
        } else {
            return true;
        }
    },
    validate: (layer) => {
        let valid = true;
        layer.find('.tips').remove();
        let eles = layer.find('[data-valide]');
        eles.toArray().forEach((item) => {
            item = $(item);
            let validter = item.attr('data-valide');
            validter = String.prototype.split.call(validter, ',');
            validter = validter.map((item) => {
                return item.trim();
            })
            let parentNode = item.parents('.input-wrapper');
            if ($.inArray('required', validter) > -1) {
                parentNode.find('.tips').remove();
                if (item.val() === '') {
                    valid = false;
                    parentNode.append(`<p class="tips">${item.attr('data-des')}必填</p>`);
                } else if (item.attr('data-reg')) {
                    // let reg = new RegExp(item.attr('data-reg'));
                    // if (!reg.test(item.val())) {
                    //     valid = false;
                    //     parentNode.append(`<p class="tips">${item.attr('data-des')}${item.attr('data-regerror')}</p>`);
                    // }
                }
            }

        });
        let commissionType = $(".commissionTypeFk").val();
        if(commissionType == "-1"){
            valid = false;
        }
        if (valid === false) {
            AlertDialog.show('填写不完整或填写有误，请检查');
        }

        return valid;
    },

    getCustomElement: (el) => {
        let output = el.find('.output').val();
        return JSON.parse(output);
    },
    processData: (data) => {
        let toString = (val) => {
            return val === null ? undefined : '' + val;
        }
        let toNumber = (val) => {
            return val === null ? undefined : +val;
        }
        return {
            name               :  data.product.name,
            fundGenreAFk       :  toString(data.product.fundGenreAFk), 
            fundGenreBFk       :  toString(data.product.fundGenreBFk), 
            fundTypeFk         :  toString(data.product.fundTypeFk), 
            fundSubTypeFk      :  toString(data.product.fundSubTypeFk),
            publisherFk        :  toString(data.product.publisherFk),
            custodianParty     :  toString(data.product.custodianParty),
            fundManager        :  data.product.fundManager,
            fundManagerCompany :  data.product.fundManagerCompany,
            fundCustodianCharges: data.product.fundCustodianCharges,
            serviceTel         :  data.product.serviceTel,
            maturities         :  data.product.maturities,
            unitFkMaturities   :  toString(data.product.unitFkMaturities),
            startingPrice      :  data.product.startingPrice,
            unitFkStartingPrice:  toString(data.product.unitFkStartingPrice),
            increasement       :  data.product.increasement,
            unitFkIncreasement :  data.product.unitFkIncreasement,
            subscribeFee       :  data.product.subscribeFee,
            managementCost     :  data.product.managementCost,
            redeemFee          :  data.product.redeemFee,
            reward             :  data.product.reward,
            closeTime          :  data.product.closeTime,
            openDayDesc        :  data.product.openDayDesc,
            //币种
            currencies         :  data.product.currencies,

            issureScale        :  toString(data.product.issureScale),
            arrTypeFk          :  toString(data.product.arrTypeFk),
            offeringSize       :  toString(data.product.offeringSize),
            expectedArr        : toString(data.product.expectedArr),
            selfDefinedProcess : toString(data.product.selfDefinedProcess),
            establishStatus    : toString(data.product.establishStatus),
            riskRating         : toString(data.product.riskRating),
            salesStatusFk      : toString(data.product.salesStatusFk),
            unitFkIssureScale  : toString(data.product.unitFkIssureScale), 
            unitFkOfferingSize : toString(data.product.unitFkOfferingSize),
            unitFkOfferingSize : toString(data.product.unitFkOfferingSize),
            commissionTypeFk   : toString(data.product.commissionTypeFk),
            baseCommission     : toString(data.product.baseCommission),
            industryTypeFk     : toString(data.product.industryTypeFk),
            custodianType      : toString(data.product.custodianType),
            distributionWayFk  : toString(data.product.distributionWayFk),
            currencies         : toString(data.product.currencies),
            arrRank            : toNumber(data.product.arrRank),
            collarCast         : data.product.collarCast,
            collarCastNumber   : data.product.collarCastNumber,
            equity : data.product.equity,
            fullName: data.publisher.fullName,
            telephone: data.publisher.telephone,
            address: data.publisher.address,

        }
    }
};

module.exports = util;