/**
 * main Control extend Class Contorl; 
 * pageStucture mainly composed by {form} and {table} control
 * 
 * @author xuyihan@bravowhale.com
 * @date 2016.8.2
**/
import Control from 'static/js/controller.js';
import mainPageStructure  from 'config/pageStructure.js';

/**
 * mainPage own css
 */
var style = __inline('/static/css/page/main-page.inline.less');

require.loadCss({
    name: 'asset-main-page-style',
    content: style
});

/**
 * page consists of widgets
 * @type {Object}
 */
var widgets  = {

    header: 
        { widget: 'header',data: { username : 'yaweiyihan'},container: '.header-box' },
    topbanner : 
        { widget: 'topbanner', data: {},container: '.form-wrapper' },
    addform : 
        { widget: 'distriform', data: {},container: '.form-wrapper' },
    menu : 
        { widget: 'menu', container: '.menu-box' },
    backtotop : 
        { widget: 'backtotop', container: '.form-wrapper'},
    footer : 
        { widget: 'footer', container: '.footer-box'},
};


class distriControl extends Control{

    constructor(data){
        super(data);
    }
    /**
     * data from router
     * @param  {object} data
     * @return void
     */
    init(data){
        var me = this;
        this.widgets = this.createPageStructure(mainPageStructure, widgets);

        /**
         * has no data ,can render directly
         */
        me.getViews([widgets.header,widgets.backtotop,widgets.footer]);
        /**
         * render with widget's own data
         */
        me.getViews([widgets.menu],menusConfig);
        me.getViews([widgets.topbanner],data.topbanner);
        me.getViews([widgets.addform],data);


        // me.getModel('table',(model) => {
            
        //     model.getData(formData.url,formData.param).then((res) => {
        //         me.getViews([me.widgets.table], $.extend(res,formData));
        //     });
        // });

        listener.trigger('page', 'loaded', {info: 'load success'});
    }
}

export default distriControl;