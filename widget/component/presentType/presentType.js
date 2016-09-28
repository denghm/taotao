import editor from 'widget/component/editor/editor';
import singledate from  'widget/component/singledate/singledate';

let style = __inline('./presentType.inline.less');
let tpl = __inline('./presentType.tpl');

require.loadCss({
    name: 'admin-widget-presentType-style',
    content: style
});

export default Vue.component('presenttype', {
 	template: tpl,
 	props: {
 		disable        : {default: false},
 		introductionType : {default : '0'},
 		intrtype: {default: ''},
 		panelname : {default : ''},
 		imgatttype: {default: ''},
 		videoatttype : {default : ''},
 		richatttype : {default : ''},
 		relateatttype: {default : ''},
 	},
 	data: () => ({
 		
 	}),
 	computed : {
 		
 	}
});