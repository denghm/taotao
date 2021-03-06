import Widget from 'static/js/widget.js';
import table from 'widget/module/table/table.js';
import dateControl from 'widget/classComponent/datecontrol/datecontrol.js';
import cityselect from 'widget/component/cityselect/cityselect.js';
import dialog from 'widget/classComponent/dialog/dialog.js';

let style = __inline('./searchfilter.inline.less');
let tpl = __inline('./searchfilter.tpl');

require.loadCss({
    name: 'admin-widget-searchfilter-style',
    content: style
});

var searchfilter = Widget.extend({ 
    init : function(data){
        //展示数据
        this.vm = this.display(data ,tpl ,'vue');

        this.bind();
    },
    bind: function () {
        $(this.vm.$el).on('click', '.option-item', function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    },
    methods:{
    }
});

export default searchfilter;