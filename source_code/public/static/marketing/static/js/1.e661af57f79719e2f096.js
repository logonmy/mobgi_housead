webpackJsonp([1],{"0XyH":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),n=a.n(i),s=a("fZjL"),c=a.n(s),o=a("bOdI"),l=a.n(o),r={created:function(){this.account_id&&this.getAd_Campaigns(this.adCampaignsGet),this.getCommonEnum()},watch:{account_id:function(){this.getAd_Campaigns(this.adCampaignsGet)}},computed:{account_id:function(){return this.$store.getters.get_account_action.account_id}},data:function(){var t;return{visible:!1,checkBox:[{name:"必选项",disabled:!0,sub:{campaign_name:"计划名称",operation:"操作"}},{name:"属性",disabled:!1,sub:{campaign_type_name:"计划类型",product_type_name:"标的物类型",campaign_id:"计划ID",status:"状态",daily_budget:"限额",budget_reach_date:"限额到达日期",speed_mode_name:"速度模式",created_time:"创建时间",last_modified_time:"修改时间"}},{name:"效果",disabled:!1,sub:{impression:"曝光量",click:"点击量",ctr:"点击率",cpc:"点击均价(元)",conversion:"安装量(转化量)",clicktraderate:"安装率(转化率)",cpt:"安装(转化)均价(元)",cost:"花费(元)"}},{name:"APP转化效果",disabled:!1,sub:{download:"下载量",downloadrate:"下载率",app_installation:"安装量",cost_per_download:"下载均价",activation:"激活总量",activated_rate:"下载激活率",click_activated_rate:"点击激活率",activated_price:"激活均价(元)",register:"APP注册量",app_payment_count:"付费行为量",order_placement:"下单量",app_payment_amount:"付费总金额(分)",reservation:"表单预约量"}},{name:"社交",disabled:!1,sub:(t={follow:"关注量",like_or_comment:"点赞量"},l()(t,"like_or_comment","评论量"),l()(t,"share","转发量"),l()(t,"image_click","图片点击量"),t)}],checkList:[["campaign_name","operation"],["campaign_type_name","product_type_name","daily_budget"],["impression","click","ctr","cpc","cost"],["activation"],[]],originCheckList:[["campaign_name","operation"],["campaign_type_name","product_type_name","daily_budget"],["impression","click","ctr","cpc","cost"],["activation"],[]],isIndeterminate:[!1,!1,!1,!1,!1],checkBoxAll:[!0,!1,!1,!1,!1],multipleSelection:[],configured_status_command:"",configured_status_list:{},dialogVisible:!1,dialogVisibleText:"",adCampaignsGet:{page:1,page_size:20,campaign_id:"",configured_status:"",campaign_name:"",campaign_type:"",product_type:"",report:1,start_date:"",end_date:"",sort_field:"",sort_type:""},productTypeList:[{value:"",name:"标的物类型"}],campaignTypeList:[{value:"",label:"计划类型"}],loading:!0,pickerDate:[new Date,new Date],pickerOptions2:{shortcuts:[{text:"今天",onClick:function(t){var e=new Date,a=new Date;t.$emit("pick",[a,e])}},{text:"昨天",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()-864e5),a.setTime(a.getTime()-864e5),t.$emit("pick",[a,e])}},{text:"过去7天",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()-864e5),a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"过去30天",onClick:function(t){var e=new Date,a=new Date;e.setTime(e.getTime()-864e5),a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}}]},configured_status:[],configured_status_default:"",listData:[],sumData:[],page_info:{page:1,page_size:10,total_number:0,total_page:0}}},mounted:function(){},methods:{handleCheckAllChange:function(t){this.checkList[t]=this.checkBoxAll[t]?c()(this.checkBox[t].sub):[]},checkBoxCancel:function(){this.checkList=JSON.parse(n()(this.originCheckList)),this.visible=!1},checkBoxSubmit:function(){this.originCheckList=JSON.parse(n()(this.checkList)),this.visible=!1},checkItems:function(t){var e=this.checkList[1].concat(this.checkList[2]);return-1!==(e=(e=e.concat(this.checkList[3])).concat(this.checkList[4])).indexOf(t)},changeSort:function(t){t.order&&"custom"==t.column.sortable&&(this.adCampaignsGet.sort_field=t.prop,this.adCampaignsGet.sort_type=t.order,this.getAd_Campaigns(this.adCampaignsGet))},campaignsBatchChangeStatus:function(t){var e=this;t.account_id=this.account_id,this.$axios.get("/Admin/Marketing_Campaigns/batchChange",{params:t}).then(function(t){var a=t.data;0==a.code?(e.$message({type:"success",message:a.msg}),setTimeout(function(){e.getAd_Campaigns(e.adCampaignsGet)},500)):e.$message.error(a.msg)}).catch(function(t){e.$message("网络繁忙，请稍后再试！")})},handleBatchChangeStatus:function(){var t=this.multipleSelection,e=this.configured_status_command;if(e)if(t&&t.length>0){var a=[];for(var i in t)a.push(t[i].campaign_id);var n={ids:a,configured_status:e};this.campaignsBatchChangeStatus(n)}else this.$message("请选择批量修改状态的记录");else this.$message("请选择批量修改的状态")},handleCommand:function(t){this.configured_status_command=t},campaignsBatchDelete:function(t){var e=this;t.account_id=this.account_id,this.$axios.get("/Admin/Marketing_Campaigns/batchDelete",{params:t}).then(function(t){var a=t.data;0==a.code?(e.$message({type:"success",message:a.msg}),setTimeout(function(){e.getAd_Campaigns(e.adCampaignsGet)},500)):e.$message.error(a.msg)}).catch(function(t){e.$message("网络繁忙，请稍后再试！")})},handleListRemove:function(){var t=this,e=this.multipleSelection;if(e&&e.length>0){var a=[],i=!1;for(var n in e)if(a.push(e[n].campaign_id),"AD_STATUS_NORMAL"==e[n].configured_status){i=!0;break}if(i)return t.$message("只有暂停的活动才能被删除"),!1;this.$confirm("是否确认批量删除记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e={ids:a};t.campaignsBatchDelete(e)}).catch(function(){})}else t.$message("请选择需要删除的记录")},handleSelectionChange:function(t){this.multipleSelection=t},formatReachDate:function(t,e){return 0==t.budget_reach_date?"---":t.budget_reach_date},unitConversion:function(t,e){return t.daily_budget/100},handleGetAdgroups:function(t){this.$router.push("/advertising/adGroup/sub/"+t)},handleEditClick:function(t){this.$router.push("/advertising/campaign/edit/"+t)},handleCopyClick:function(t){this.$router.push("/advertising/campaign/copy/"+t)},handleListCampaignNameChange:function(t){var e=t.bid_amount,a=this;this.$prompt("请输入推广计划名称","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[^/\\'\&]+$/,inputErrorMessage:"请输入有效值"}).then(function(i){var n=i.value;a.setCampaignsUpdate(t,"campaign_name",n,e),t.campaign_name=n}).catch(function(){})},handleListDailyBudgetChange:function(t){var e=t.daily_budget/100,a=this;this.$prompt("请输入日限额(元 / 天)","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^([1-9]\d*)+(.\d{1,2})?$|^0\.\d{1,2}$/,inputErrorMessage:"请输入有效值"}).then(function(i){var n=i.value;n-e>=50||e-n>=50?(a.setCampaignsUpdate(t,"daily_budget",n,100*e),t.daily_budget=100*n):a.$message.error("每次修改幅度不能低于50元")}).catch(function(){})},exportExcel:function(){var t=this.adCampaignsGet;window.location.href="/Admin/Marketing_Campaigns/export?page="+t.page+"&page_size="+t.page_size+"&campaign_id="+t.campaign_id+"&configured_status="+t.configured_status+"&campaign_name="+t.campaign_name+"&start_date="+t.start_date+"&end_date="+t.end_date+"&account_id="+this.account_id},getCommonEnum:function(){var t=this;this.$axios.get("/Admin/Marketing_Common/getEnum",{}).then(function(e){var a=e.data;if(0==a.code){t.configured_status_list=a.data.AD_STATUS;var i=a.data.AD_STATUS;t.configured_status.push({value:"",label:"所有状态"});for(var n in i){(s=new Object).value=n,s.label=i[n],t.configured_status.push(s)}for(var n in a.data.PRODUCT_TYPE){(s=new Object).value=n,s.name=a.data.PRODUCT_TYPE[n].name,t.productTypeList.push(s)}for(var n in a.data.CAMPAIGN_TYPE){var s;(s=new Object).value=n,s.label=a.data.CAMPAIGN_TYPE[n].name,t.campaignTypeList.push(s)}}}).catch(function(t){console.log(t)})},changeConfiguredStatus:function(t){this.adCampaignsGet.configured_status=t},changeCampaign_name:function(t){this.adCampaignsGet.campaign_name=t},pickerDateChange:function(){var t=new Date(this.pickerDate[0]),e=new Date(this.pickerDate[1]);this.adCampaignsGet.start_date=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),this.adCampaignsGet.end_date=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),this.getAd_Campaigns(this.adCampaignsGet)},handleListStatusChange:function(t){var e=t.configured_status;"AD_STATUS_NORMAL"===t.configured_status?t.configured_status="AD_STATUS_SUSPEND":t.configured_status="AD_STATUS_NORMAL";var a=this;this.$axios.get("/Admin/Marketing_Campaigns/update",{params:{account_id:this.account_id,campaign_id:t.campaign_id,configured_status:t.configured_status}}).then(function(i){var n=i.data;0!=n.code&&(a.$message.error(n.msg),t.configured_status=e)}).catch(function(i){a.$message("网络繁忙，请稍后再试！"),t.configured_status=e})},handleSizeChange:function(t){this.adCampaignsGet.page_size=t,this.getAd_Campaigns(this.adCampaignsGet)},handleCurrentChange:function(t){this.adCampaignsGet.page=t,this.getAd_Campaigns(this.adCampaignsGet)},setCampaignsUpdate:function(t,e,a,i){var n=this,s=new Object;s.campaign_id=t.campaign_id,s[e]=a,s.account_id=this.account_id,this.$axios.get("/Admin/Marketing_Campaigns/update",{params:s}).then(function(a){var s=a.data;0!=s.code&&(n.$message.error(s.msg),t[e]=i)}).catch(function(a){n.$message("网络繁忙，请稍后再试！"),t[e]=i})},getList:function(){this.adCampaignsGet.page=1,this.getAd_Campaigns(this.adCampaignsGet)},getAd_Campaigns:function(t){var e=this;e.loading=!0,t.account_id=this.account_id,this.$axios.get("/Admin/Marketing_Campaigns/get",{params:t}).then(function(t){var a=t.data;0==a.code&&(a.data.list||a.data.page_info)&&(e.listData=a.data.list,e.sumData=a.data.sum,console.log(e.sumData),e.page_info=a.data.page_info),e.loading=!1}).catch(function(t){e.$message("网络繁忙，请稍后再试！"),e.loading=!1})},getSummaries:function(t){var e=this.checkList[0].concat(this.checkList[1]),a=t.columns,i=t.data,n=[],s=[];return a.forEach(function(t,a){if(s[t.property]=a,1!==a){if(-1===e.indexOf(t.property)){var c=i.map(function(e){return Number(e[t.property])});c.every(function(t){return isNaN(t)})?n[a]="":n[a]=c.reduce(function(t,e){var a=Number(e);return isNaN(a)?t:t+e},0)}}else n[a]="总计"}),n[s.ctr]=this.sumData.ctr,n[s.cpc]=this.sumData.cpc,n[s.clicktraderate]=this.sumData.clicktraderate,n[s.cpt]=this.sumData.cpt,n[s.activated_price]=this.sumData.activated_price,n}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"template-container"},[a("div",{staticClass:"template-item-wrap"},[a("div",{staticClass:"temp-item-inlineblock"},[a("el-date-picker",{attrs:{type:"daterange",align:"left","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions2},on:{change:t.pickerDateChange},model:{value:t.pickerDate,callback:function(e){t.pickerDate=e},expression:"pickerDate"}})],1),t._v(" "),a("div",{staticClass:"temp-item-inlineblock"},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"推广计划类型"},model:{value:t.adCampaignsGet.campaign_type,callback:function(e){t.$set(t.adCampaignsGet,"campaign_type",e)},expression:"adCampaignsGet.campaign_type"}},t._l(t.campaignTypeList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{staticClass:"temp-item-inlineblock"},[a("el-select",{attrs:{placeholder:"标的物类型"},model:{value:t.adCampaignsGet.product_type,callback:function(e){t.$set(t.adCampaignsGet,"product_type",e)},expression:"adCampaignsGet.product_type"}},t._l(t.productTypeList,function(t){return a("el-option",{key:t.value,attrs:{label:t.name,value:t.value}})}))],1),t._v(" "),a("div",{staticClass:"temp-item-inlineblock"},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},on:{change:t.changeConfiguredStatus},model:{value:t.configured_status_default,callback:function(e){t.configured_status_default=e},expression:"configured_status_default"}},t._l(t.configured_status,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{staticClass:"temp-item-inlineblock"},[a("el-input",{attrs:{placeholder:"请输入计划名查询"},on:{change:t.changeCampaign_name}})],1),t._v(" "),a("div",{staticClass:"temp-item-inlineblock"},[a("el-button",{attrs:{type:"primary"},on:{click:t.getList}},[t._v("查询")])],1),t._v(" "),a("div",{staticClass:"temp-item-inlineblock"},[a("el-button",{attrs:{type:"primary"},on:{click:t.exportExcel}},[t._v("导出为excel")])],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"temp-item-block"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleListRemove}},[t._v("删除")]),t._v(" "),a("el-dropdown",{attrs:{"split-button":"",type:"primary"},on:{click:t.handleBatchChangeStatus,command:t.handleCommand}},[t._v("\n        修改状态\n        "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.configured_status_list,function(e,i){return a("el-dropdown-item",{key:i,attrs:{command:i}},[t._v(t._s(e))])}))],1),t._v(" "),a("el-popover",{ref:"popover",attrs:{placement:"bottom-start","visible-arrow":"false",width:"660"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("div",{staticClass:"nav-pop"},[a("div",{staticClass:"datepop"},[a("div",{staticClass:"selectarea"},[a("form",{attrs:{onsubmit:"return false;",action:"return false;"}},[a("ul",{staticClass:"select-classify clearfix",attrs:{id:"select-classify"}},t._l(t.checkBox,function(e,i){return a("li",{staticClass:"classify-item require",attrs:{disabled:!0===e.disabled}},[a("div",{staticClass:"tit"},[a("strong",[a("el-checkbox",{attrs:{indeterminate:t.isIndeterminate[i],disabled:!0===e.disabled},on:{change:function(e){t.handleCheckAllChange(i)}},model:{value:t.checkBoxAll[i],callback:function(e){t.$set(t.checkBoxAll,i,e)},expression:"checkBoxAll[checkKey]"}},[t._v(t._s(e.name))])],1)]),t._v(" "),a("ul",{staticClass:"checkitem clearfix"},[a("el-checkbox-group",{model:{value:t.checkList[i],callback:function(e){t.$set(t.checkList,i,e)},expression:"checkList[checkKey]"}},t._l(e.sub,function(i,n){return a("li",{staticClass:"checkitem-li"},[a("el-checkbox",{attrs:{label:n,disabled:!0===e.disabled}},[t._v(t._s(i))])],1)}))],1)])}))])])])]),t._v(" "),a("div",{staticStyle:{"text-align":"right","margin-top":"10px"}},[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:t.checkBoxCancel}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.checkBoxSubmit}},[t._v("确定")])],1)]),t._v(" "),a("el-button",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}]},[t._v("自定义列")])],1)]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"table-wrap"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"show-overflow-tooltip":"","summary-method":t.getSummaries,"show-summary":"",data:t.listData},on:{"selection-change":t.handleSelectionChange,"sort-change":t.changeSort}},[a("el-table-column",{attrs:{type:"selection"}}),t._v(" "),a("el-table-column",{attrs:{prop:"campaign_name",label:"计划名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px",color:"#2b7ed1",cursor:"pointer"},on:{click:function(a){t.handleGetAdgroups(e.row.campaign_id)}}},[t._v(t._s(e.row.campaign_name))]),t._v(" "),a("i",{staticClass:"el-icon-edit",on:{click:function(a){t.handleListCampaignNameChange(e.row)}}})]}}])}),t._v(" "),t.checkItems("campaign_type_name")?a("el-table-column",{attrs:{prop:"campaign_type_name",label:"计划类型",sortable:""}}):t._e(),t._v(" "),t.checkItems("campaign_id")?a("el-table-column",{attrs:{prop:"campaign_id",label:"ID",sortable:""}}):t._e(),t._v(" "),t._l(t.checkBox[2].sub,function(e,i){return t.checkItems(i)?a("el-table-column",{key:i,attrs:{prop:i,label:e,sortable:"custom"}}):t._e()}),t._v(" "),t._l(t.checkBox[3].sub,function(e,i){return t.checkItems(i)?a("el-table-column",{key:i,attrs:{prop:i,label:e,sortable:"custom"}}):t._e()}),t._v(" "),t._l(t.checkBox[4].sub,function(e,i){return t.checkItems(i)?a("el-table-column",{key:i,attrs:{prop:i,label:e,sortable:"custom"}}):t._e()}),t._v(" "),t.checkItems("daily_budget")?a("el-table-column",{key:"daily_budget",attrs:{label:"日限额(元/天)"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row.daily_budget/100))]),t._v(" "),a("i",{staticClass:"el-icon-edit",on:{click:function(a){t.handleListDailyBudgetChange(e.row)}}})]}}])}):t._e(),t._v(" "),t.checkItems("budget_reach_date")?a("el-table-column",{attrs:{prop:"budget_reach_date",label:"日限额到达日期",formatter:t.formatReachDate,sortable:""}}):t._e(),t._v(" "),t.checkItems("speed_mode_name")?a("el-table-column",{attrs:{prop:"speed_mode_name",label:"速度模式",sortable:""}}):t._e(),t._v(" "),t.checkItems("product_type_name")?a("el-table-column",{attrs:{prop:"product_type_name",label:"标的物类型"}}):t._e(),t._v(" "),t.checkItems("created_time")?a("el-table-column",{attrs:{prop:"created_time",label:"创建时间",sortable:""}}):t._e(),t._v(" "),t.checkItems("last_modified_time")?a("el-table-column",{attrs:{prop:"last_modified_time",label:"修改时间",sortable:""}}):t._e(),t._v(" "),a("el-table-column",{attrs:{prop:"configured_status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#999"},on:{change:function(a){t.handleListStatusChange(e.row)}},model:{value:"AD_STATUS_NORMAL"===e.row.configured_status,callback:function(a){t.$set(e.row,"configured_status === 'AD_STATUS_NORMAL' ? true : false",a)},expression:"scope.row.configured_status === 'AD_STATUS_NORMAL' ? true : false"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleEditClick(e.row.campaign_id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleCopyClick(e.row.campaign_id)}}},[t._v("复制")])]}}])})],2),t._v(" "),t.page_info.total_number>0?a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.page_info.page,"page-sizes":[20,50,100],total:t.page_info.total_number,"page-size":t.page_info.page_size,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"temp-item-inlineblock temp-item-right"},[e("a",{staticClass:"new-plan",attrs:{href:"/marketing/#/advertising/campaign/new"}},[this._v("新建计划")])])}]};var d=a("VU/8")(r,u,!1,function(t){a("UThJ")},"data-v-af73643c",null);e.default=d.exports},Cdx3:function(t,e,a){var i=a("sB3e"),n=a("lktj");a("uqUo")("keys",function(){return function(t){return n(i(t))}})},UThJ:function(t,e){},fZjL:function(t,e,a){t.exports={default:a("jFbC"),__esModule:!0}},jFbC:function(t,e,a){a("Cdx3"),t.exports=a("FeBl").Object.keys},uqUo:function(t,e,a){var i=a("kM2E"),n=a("FeBl"),s=a("S82l");t.exports=function(t,e){var a=(n.Object||{})[t]||Object[t],c={};c[t]=e(a),i(i.S+i.F*s(function(){a(1)}),"Object",c)}}});
//# sourceMappingURL=1.e661af57f79719e2f096.js.map