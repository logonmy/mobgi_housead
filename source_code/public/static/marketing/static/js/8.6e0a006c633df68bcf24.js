webpackJsonp([8],{iqsU:function(a,t){},pXQ5:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={created:function(){},watch:{account_id:function(){this.getParams(),this.getReport(this.adsParams)}},computed:{account_id:function(){return this.$store.getters.get_account_action.account_id}},data:function(){return{adsParams:{page:1,page_size:10,type:"1",date_type:"1",campaign_id:"",adgroup_id:"",product_id:"",ad_id:"",start_date:"",end_date:""},defaults:{campaignMap:[],adgroupMap:[],productMap:[],adMap:[]},loading:!0,loadingAdgroup:!1,loadingAd:!1,loadingCampaign:!1,listData:[],page_info:{},pickerDate:[],tableBanner:[],adCampaignsParams:{page:1,page_size:100,campaign_id:"",configured_status:"",campaign_name:"",start_date:"",end_date:""},adGroupParams:{page:1,page_size:100,adgroup_id:"",configured_status:"",adgroup_name:"",start_date:"",end_date:""},adParams:{page:1,page_size:100,ad_id:"",configured_status:"",ad_name:"",start_date:"",end_date:""},pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(a){var t=new Date,e=new Date;e.setTime(e.getTime()-6048e5),a.$emit("pick",[e,t])}},{text:"最近一个月",onClick:function(a){var t=new Date,e=new Date;e.setTime(e.getTime()-2592e6),a.$emit("pick",[e,t])}},{text:"最近三个月",onClick:function(a){var t=new Date,e=new Date;e.setTime(e.getTime()-7776e6),a.$emit("pick",[e,t])}}]},type:[{value:"1",label:"效果"},{value:"2",label:"APP转化效果"}],date_type:[{value:"1",label:"天"},{value:"2",label:"小时"}]}},methods:{formatterSystemStatus:function(a,t){return this.system_status[a.system_status]},unitConversion:function(a,t){return a.cost/100},searchList:function(){this.getReport(this.adsParams)},handleSizeChange:function(a){this.adsParams.page_size=a,this.getReport(this.adsParams)},handleCurrentChange:function(a){this.adsParams.page=a,this.getReport(this.adsParams)},pickerDateChange:function(){var a=new Date(this.pickerDate[0]),t=new Date(this.pickerDate[1]);this.adsParams.start_date=a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate(),this.adsParams.end_date=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()},getReport:function(a){a.account_id=this.account_id;var t=this;this.$axios.get("/Admin/Marketing_Report/getData",{params:a}).then(function(a){t.loading=!1;var e=a.data;0==e.code?(e.data.list||e.data.page_info)&&(t.tableBanner=e.data.table_banner,t.listData=e.data.data,t.page_info=e.data.page_info):t.$message(e.msg)}).catch(function(a){t.$message("网络繁忙，请稍后再试！"),t.loading=!1})},getParams:function(){var a=this;this.$axios.get("/Admin/Marketing_Report/getParams",{params:{account_id:this.account_id}}).then(function(t){a.loading=!1;var e=t.data;a.defaults.campaignMap=e.data.campaignMap,a.defaults.productMap=e.data.productMap,a.defaults.adgroupMap=e.data.adGroupMap,a.defaults.adMap=e.data.adsMap,a.pickerDate=e.data.dateRange,a.adsParams.start_date=e.data.dateRange[0],a.adsParams.end_date=e.data.dateRange[1]}).catch(function(t){a.$message("网络繁忙，请稍后再试！"),a.loading=!1})},remoteCampaign:function(a){var t=this;this.loadingCampaign=!0,setTimeout(function(){t.adCampaignsParams.campaign_name=a,t.getAdCampaigns(t.adCampaignsParams)},300)},getAdCampaigns:function(a){a.account_id=this.account_id;var t=this;this.$axios.get("/Admin/Marketing_Campaigns/get",{params:a}).then(function(a){var e=a.data;0==e.code?(e.data.list||e.data.page_info)&&(t.defaults.campaignMap=e.data.list,t.loadingCampaign=!1):(t.$message(e.msg),t.loadingCampaign=!1)}).catch(function(a){t.$message("网络繁忙，请稍后再试！"),t.loadingCampaign=!1})},remoteAdgroup:function(a){var t=this;this.loadingAdgroup=!0,setTimeout(function(){t.adGroupParams.adgroup_name=a,t.getAdGroups(t.adGroupParams)},300)},getAdGroups:function(a){a.account_id=this.account_id;var t=this;this.$axios.get("/Admin/Marketing_Adgroups/get",{params:a}).then(function(a){var e=a.data;0==e.code?(e.data.list||e.data.page_info)&&(t.defaults.adgroupMap=e.data.list,t.loadingAdgroup=!1):(t.$message(e.msg),t.loadingAdgroup=!1)}).catch(function(a){t.$message("网络繁忙，请稍后再试！"),t.loadingAdgroup=!1})},remoteAd:function(a){var t=this;this.loadingAd=!0,setTimeout(function(){t.adParams.ad_name=a,t.getAd(t.adParams)},300)},getAd:function(a){a.account_id=this.account_id;var t=this;this.$axios.get("/Admin/Marketing_Ads/get",{params:a}).then(function(a){var e=a.data;0==e.code?(e.data.list||e.data.page_info)&&(t.defaults.adMap=e.data.list,t.loadingAd=!1):(t.$message(e.msg),t.loadingAd=!1)}).catch(function(a){t.$message("网络繁忙，请稍后再试！"),t.loadingAd=!1})},exportExcel:function(a){var t,e,i="",s={worksheet:"sheet1",table:i+=this.$refs.export.$vnode.elm.children[3].innerHTML};window.location.href="data:application/vnd.ms-excel;base64,"+(e=s,t='<html><head><meta charset="UTF-8"></head><body><table border="1">{table}</table></body></html>'.replace(/{(\w+)}/g,function(a,t){return e[t]}),window.btoa(unescape(encodeURIComponent(t)))),a.stopPropagation()}}},s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"template-container"},[e("div",{staticClass:"template-item-wrap",staticStyle:{height:"50px"}},[e("div",{staticClass:"temp-item-leftblock"},[e("el-date-picker",{attrs:{type:"daterange",align:"left","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":a.pickerOptions2},on:{change:a.pickerDateChange},model:{value:a.pickerDate,callback:function(t){a.pickerDate=t},expression:"pickerDate"}})],1),a._v(" "),e("div",{staticClass:"temp-item-leftblock"},[e("el-select",{staticStyle:{width:"180px"},attrs:{filterable:""},model:{value:a.adsParams.type,callback:function(t){a.$set(a.adsParams,"type",t)},expression:"adsParams.type"}},a._l(a.type,function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}))],1),a._v(" "),e("div",{staticClass:"temp-item-leftblock"},[e("el-button",{attrs:{type:"primary"},on:{click:a.exportExcel}},[a._v("导出为excel")])],1)]),a._v(" "),e("div",{staticClass:"template-item-wrap"},[e("div",{staticClass:"temp-item-inlineblock"},[e("el-select",{staticStyle:{width:"180px"},attrs:{filterable:""},model:{value:a.adsParams.date_type,callback:function(t){a.$set(a.adsParams,"date_type",t)},expression:"adsParams.date_type"}},a._l(a.date_type,function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}))],1),a._v(" "),e("div",{staticClass:"temp-item-inlineblock"},[e("el-select",{staticStyle:{width:"350px"},attrs:{placeholder:"请选择推广计划",filterable:"",multiple:"",remote:"","collapse-tags":"","remote-method":a.remoteCampaign,loading:a.loadingCampaign},model:{value:a.adsParams.campaign_id,callback:function(t){a.$set(a.adsParams,"campaign_id",t)},expression:"adsParams.campaign_id"}},a._l(a.defaults.campaignMap,function(a){return e("el-option",{key:a.campaign_id,attrs:{label:a.campaign_name,value:a.campaign_id}})}))],1),a._v(" "),e("div",{staticClass:"temp-item-inlineblock"},[e("el-select",{staticStyle:{width:"350px"},attrs:{placeholder:"请选择广告组",filterable:"",multiple:"",remote:"","collapse-tags":"","remote-method":a.remoteAdgroup,loading:a.loadingAdgroup},model:{value:a.adsParams.adgroup_id,callback:function(t){a.$set(a.adsParams,"adgroup_id",t)},expression:"adsParams.adgroup_id"}},a._l(a.defaults.adgroupMap,function(a){return e("el-option",{key:a.adgroup_id,attrs:{label:a.adgroup_name,value:a.adgroup_id}})}))],1),a._v(" "),e("div",{staticClass:"temp-item-inlineblock"},[e("el-select",{staticStyle:{width:"350px"},attrs:{placeholder:"请选择广告",filterable:"",multiple:"",remote:"","collapse-tags":"","remote-method":a.remoteAd,loading:a.loadingAd},model:{value:a.adsParams.ad_id,callback:function(t){a.$set(a.adsParams,"ad_id",t)},expression:"adsParams.ad_id"}},a._l(a.defaults.adMap,function(a){return e("el-option",{key:a.ad_id,attrs:{label:a.ad_name,value:a.ad_id}})}))],1),a._v(" "),e("div",{staticClass:"temp-item-inlineblock"},[e("el-select",{staticStyle:{width:"350px"},attrs:{placeholder:"请选择标的物",filterable:"",multiple:"","collapse-tags":""},model:{value:a.adsParams.product_id,callback:function(t){a.$set(a.adsParams,"product_id",t)},expression:"adsParams.product_id"}},a._l(a.defaults.productMap,function(a){return e("el-option",{key:a.product_refs_id,attrs:{label:a.product_name,value:a.product_refs_id}})}))],1),a._v(" "),e("div",{staticClass:"temp-item-inlineblock"},[e("el-button",{attrs:{type:"primary"},on:{click:a.searchList}},[a._v("查询")])],1)]),a._v(" "),a._m(0),a._v(" "),e("div",{staticClass:"table-wrap"},[a.tableBanner?e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}],ref:"export",staticStyle:{width:"100%"},attrs:{id:"export",data:a.listData,"default-sort":{prop:"date",order:"descending"}}},a._l(a.tableBanner,function(t,i){return e("tr",{key:i},[e("el-table-column","cost"==i?{attrs:{prop:i,label:t,formatter:a.unitConversion,sortable:""}}:"date"==i?{attrs:{fixed:!0,prop:i,label:t,sortable:""}}:{attrs:{prop:i,label:t,sortable:""}})],1)})):a._e(),a._v(" "),a.page_info.total_number>0?e("div",{staticClass:"table-pagination"},[e("el-pagination",{attrs:{background:"","current-page":a.page_info.page,"page-sizes":[10,20,30,40],"page-size":a.page_info.total_page,layout:"total, sizes, prev, pager, next, jumper",total:a.page_info.total_number},on:{"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1):a._e()],1)])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"tip"},[t("p",[this._v("效果详情")])])}]};var n=e("VU/8")(i,s,!1,function(a){e("iqsU")},"data-v-2290b0de",null);t.default=n.exports}});
//# sourceMappingURL=8.6e0a006c633df68bcf24.js.map