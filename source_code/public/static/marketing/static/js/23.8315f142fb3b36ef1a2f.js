webpackJsonp([23],{AdpF:function(t,e){},DVuu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={created:function(){var t=this.$route.params||{};t.hasOwnProperty("id")?this.getAccount(t.id):this.$router.push("/setting/accountmanage")},data:function(){return{form:{id:0,account_id:"",account_name:"",qq:""}}},mounted:function(){},methods:{onCancel:function(){this.$router.push("/setting/accountmanage")},onSubmit:function(){var t=this.form,e=this;this.$axios.get("/Admin/Marketing_Account/edit",{params:t}).then(function(t){var a=t.data;0==a.code?(e.$message({type:"success",message:a.msg}),setTimeout(function(){e.$router.push("/setting/accountmanage")},500)):e.$message.error(a.msg)}).catch(function(t){e.$message("网络繁忙，请稍后再试！"),console.log(t)})},getAccount:function(t){var e=this;this.$axios.get("/Admin/Marketing_Account/get",{params:{id:t}}).then(function(a){var n=a.data;0==n.code?n.data[0]?(e.form.id=t,e.form.account_id=n.data[0].account_id,e.form.account_name=n.data[0].account_name,e.form.qq=n.data[0].qq):e.$message("账号不存在"):e.$message(n.msg)}).catch(function(t){e.$message("网络繁忙，请稍后再试！"),console.log(t)})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"template-container"},[a("div",{staticClass:"template-container-title"},[t._v("账号编辑")]),t._v(" "),a("el-form",{ref:"form",attrs:{model:t.form,inline:!0,"label-width":"100px"}},[a("div",{staticClass:"temp-item-block"},[a("div",{staticClass:"temp-item-main"},[a("el-form-item",{attrs:{label:"账号名称"}},[a("el-input",{attrs:{clearable:""},model:{value:t.form.account_name,callback:function(e){t.$set(t.form,"account_name",e)},expression:"form.account_name"}})],1),t._v(" "),a("div",[a("el-form-item",{attrs:{label:"QQ"}},[a("el-input",{attrs:{clearable:""},model:{value:t.form.qq,callback:function(e){t.$set(t.form,"qq",e)},expression:"form.qq"}})],1)],1),t._v(" "),a("div",[a("el-form-item",{attrs:{label:"广点通账户ID"}},[a("el-input",{attrs:{disabled:!0},model:{value:t.form.account_id,callback:function(e){t.$set(t.form,"account_id",e)},expression:"form.account_id"}})],1)],1)],1)]),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确认修改")]),t._v(" "),a("el-button",{on:{click:t.onCancel}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(n,o,!1,function(t){a("AdpF")},"data-v-30c56b14",null);e.default=c.exports}});
//# sourceMappingURL=23.8315f142fb3b36ef1a2f.js.map