(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{631:function(e,a,n){"use strict";n.r(a);n(39),n(40);var l={data:function(){return{loading:!1,tableData:[{name:"张三",sex:"male",phone:13222222222},{name:"李四",sex:"female",phone:13222222222},{name:"王二",sex:"male",phone:13222222222},{name:"麻子",sex:"female",phone:13222222222}],searchData:{},configTable:{stripe:!0,labelWidth:"auto",resetBtn:!1,selectionChange:function(e){return console.log(e)},column:[{type:"selection"},{label:"名称",name:"name"},{label:"性别",name:"sex",dic:[{label:"全部",value:""},{label:"男",value:"male"},{label:"女",value:"female"}]},{label:"手机",name:"phone",formatter:function(e,a,n,l){return"+86 "+n}}]}}},methods:{getTableList:function(){},toggleSelection:function(){for(var e=this,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];n.forEach((function(a){e.$refs.xTable.toggleRowSelection(a)}))},clearSelection:function(){this.$refs.xTable.clearSelection()}}},t=n(2),o=Object(t.a)(l,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("el-button",{on:{click:function(a){return e.toggleSelection(e.tableData[0],e.tableData[2])}}},[e._v("切换张三和王二选中状态")]),e._v(" "),n("el-button",{on:{click:e.clearSelection}},[e._v("取消选择")]),e._v(" "),n("x-table",{ref:"xTable",attrs:{config:e.configTable,data:e.tableData,load:e.getTableList},model:{value:e.searchData,callback:function(a){e.searchData=a},expression:"searchData"}})],1)}),[],!1,null,"219df0d0",null);a.default=o.exports}}]);