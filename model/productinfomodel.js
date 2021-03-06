/**
 * tableModel Model for get Table Datas 
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
 *
**/

import Model from 'static/js/model.js'
// import TableData from 'test/data/distributManage'
var url = require('admin:widget/util/url.js');

class ProductInfoModel extends Model{

    /**
     * @param  {String} url
     * @param  {Object} param
     * @return {void}
     */
    getData(url, param) {
        var me = this;
        //url = window.Config.host + url + param.id;
         url = Config.host + url +  param.id;
        return new Promise(function(resolve, reject){
            // test data
            // resolve(TableData);
            // return;
            var xhr = $.ajax({
                type: 'GET',
                url:  url ,
                dataType: 'json',
                // contentType : 'application/json;charset=UTF-8',
                // data: JSON.stringify(param),
                // data: param,
                timeout : 10000,
                cache: true,
                success: function (ret) {
                    if(ret.msg === 'success'){
                        resolve(ret);
                    }
                },
                error: function (ret) {
                    console.log('fail');
                    reject();
                }
            });
        });
    }
}

module.exports = ProductInfoModel;