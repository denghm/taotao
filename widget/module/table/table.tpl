<div class="asset-widget-table ">

    <div class="table-loading">
        
    </div>
	<!-- <div class="row table-page-option">
		<div class="col-sm-6">
			<div class="dataTables_length" id="tp_length">
				<label>
					<span>每页</span>  
					<select name="tp_length" aria-controls="tp" class="form-control page-select">
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="100">100</option>
						<option value="200">200</option>
					</select> 
					<span>条记录</span>
				</label>
			</div>
		</div>
	</div> -->

	<table class="table table-hover table-bordered table-responsive dataTable no-footer" style="width: 100%;" role="grid" aria-describedby="tp_info">                
		<thead>
			<tr role="row" >
				<template  v-for="item in tables">
					<th width="{{item.width}}" class="{{item.classList}} table-item" rowspan="1" colspan="1" aria-label="{{item.name}}" data-key="{{item.key}}">{{item.name}}</th>
				</template>
			</tr>
		</thead>
        <tbody>
    		<template v-for="item in items">
				<tr role="row">
					<template v-for="(i,t) in tables">
                        <td v-if="t.type === 'nomal'" v-bind:class = "{'operator ': t.key ==='operater'}">{{item[t.key]}}</td>
                        <td v-if="t.type === 'time'">{{item[t.key] | datetime}}</td>
						<td v-if="t.type === 'productCategory'">{{ item[t.key] | productCategory}}</td>
                        <td v-if="t.type === 'applyState'">{{ item[t.key] | applyState}}</td>
                        <td v-if="t.type === 'operater'" class = "operator">
                            <a href="{{item.operaterUrl}} ">
                                {{item[t.key]}}
                            </a>
                        </td>
	        		</template>
	        	</tr>
		</template>
        </tbody>
    </table>	

    <div class="row">
    	<div class="col-sm-5">
    		<div class="dataTables_info" id="tp_info" role="status" aria-live="polite">第 1 页 ( 总共 154 页，1,538条记录 )</div>
    	</div>
    	<div class="col-sm-7">
    		<div class="dataTables_paginate paging_full_numbers" id="tp_paginate">
    			<ul class="pagination">
    				<li class="paginate_button first disabled" id="tp_first">
    					<a href="#" aria-controls="tp" data-dt-idx="0" tabindex="0">首页</a>
    				</li>
    				<li class="paginate_button previous disabled" id="tp_previous">
    					<a href="#" aria-controls="tp" data-dt-idx="1" tabindex="0">«</a>
    				</li>
    				<li class="paginate_button active">
    					<a href="#" aria-controls="tp" data-dt-idx="2" tabindex="0">1</a>
    				</li>
    				<li class="paginate_button ">
    					<a href="#" aria-controls="tp" data-dt-idx="3" tabindex="0">2</a>
    				</li>
    				<li class="paginate_button ">
    					<a href="#" aria-controls="tp" data-dt-idx="4" tabindex="0">3</a>
    				</li>
    				<li class="paginate_button ">
    					<a href="#" aria-controls="tp" data-dt-idx="5" tabindex="0">4</a>
    				</li>
    				<li class="paginate_button ">
    					<a href="#" aria-controls="tp" data-dt-idx="6" tabindex="0">5</a>
    				</li>
    				<li class="paginate_button disabled" id="tp_ellipsis">
    					<a href="#" aria-controls="tp" data-dt-idx="7" tabindex="0">…</a>
    				</li>
    				<li class="paginate_button ">
    					<a href="#" aria-controls="tp" data-dt-idx="8" tabindex="0">154
    					</a>
    				</li>
    				<li class="paginate_button next" id="tp_next">
    					<a href="#" aria-controls="tp" data-dt-idx="9" tabindex="0">»</a>
    				</li>
    				<li class="paginate_button last" id="tp_last">
    					<a href="#" aria-controls="tp" data-dt-idx="10" tabindex="0">尾页</a>
    				</li>
    			</ul>
    		</div>
    	</div>
    </div>
</div>