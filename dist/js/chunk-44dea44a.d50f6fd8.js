(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44dea44a"],{"057f":function(e,t,r){var a=r("fc6a"),o=r("241c").f,n={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return o(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==n.call(e)?l(e):o(a(e))}},"3d14":function(e,t,r){},5319:function(e,t,r){"use strict";var a=r("d784"),o=r("825a"),n=r("7b0b"),s=r("50c4"),l=r("a691"),i=r("1d80"),u=r("8aa5"),c=r("14c3"),p=Math.max,d=Math.min,f=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var h=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=a.REPLACE_KEEPS_$0,w=h?"$":"$0";return[function(r,a){var o=i(this),n=void 0==r?void 0:r[e];return void 0!==n?n.call(r,o,a):t.call(String(o),r,a)},function(e,a){if(!h&&v||"string"===typeof a&&-1===a.indexOf(w)){var n=r(t,e,this,a);if(n.done)return n.value}var i=o(e),f=String(this),m="function"===typeof a;m||(a=String(a));var b=i.global;if(b){var k=i.unicode;i.lastIndex=0}var x=[];while(1){var F=c(i,f);if(null===F)break;if(x.push(F),!b)break;var O=String(F[0]);""===O&&(i.lastIndex=u(f,s(i.lastIndex),k))}for(var S="",$=0,I=0;I<x.length;I++){F=x[I];for(var _=String(F[0]),j=p(d(l(F.index),f.length),0),q=[],P=1;P<F.length;P++)q.push(g(F[P]));var R=F.groups;if(m){var T=[_].concat(q,j,f);void 0!==R&&T.push(R);var N=String(a.apply(void 0,T))}else N=y(_,f,j,q,R,a);j>=$&&(S+=f.slice($,j)+N,$=j+_.length)}return S+f.slice($)}];function y(e,r,a,o,s,l){var i=a+e.length,u=o.length,c=b;return void 0!==s&&(s=n(s),c=m),t.call(l,c,(function(t,n){var l;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(i);case"<":l=s[n.slice(1,-1)];break;default:var c=+n;if(0===c)return t;if(c>u){var p=f(c/10);return 0===p?t:p<=u?void 0===o[p-1]?n.charAt(1):o[p-1]+n.charAt(1):t}l=o[c-1]}return void 0===l?"":l}))}}))},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var a=r("ade3");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},"66a9":function(e,t,r){"use strict";var a=r("3d14"),o=r.n(a);o.a},"72f5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[e._v(" 基本信息 "),r("el-button",{staticStyle:{float:"right"},attrs:{type:"info",size:"small"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")])],1),r("div",[r("el-form",{ref:"formRef",staticClass:"demo-ruleForm",attrs:{model:e.Form,rules:e.rule,"label-width":"200px"}},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"负责人",required:"",prop:"peoId"}},[r("el-select",{attrs:{filterable:"",placeholder:"请输入内容"},model:{value:e.Form.peoId,callback:function(t){e.$set(e.Form,"peoId",t)},expression:"Form.peoId"}},e._l(e.Options,(function(e){return r("el-option",{key:e.id,attrs:{label:e.teaName,value:e.teaId}})})),1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"著作名称",required:"",prop:"wrName"}},[r("el-input",{model:{value:e.Form.wrName,callback:function(t){e.$set(e.Form,"wrName",t)},expression:"Form.wrName"}})],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[1==this.istea?r("el-form-item",{attrs:{label:"所属单位",prop:"crBelongDept",required:""}},[r("el-input",{model:{value:e.Form.belongDept,callback:function(t){e.$set(e.Form,"belongDept",t)},expression:"Form.belongDept"}})],1):r("el-form-item",{attrs:{label:"所属学院",prop:"crBelongDept"}},[r("el-input",{model:{value:e.Form.belongDept,callback:function(t){e.$set(e.Form,"belongDept",t)},expression:"Form.belongDept"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"出版单位",required:"",prop:"wrPublishUnit"}},[r("el-input",{model:{value:e.Form.wrPublishUnit,callback:function(t){e.$set(e.Form,"wrPublishUnit",t)},expression:"Form.wrPublishUnit"}})],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"出版时间",required:"",prop:"wrPublishTime"}},[r("el-input",{model:{value:e.Form.wrPublishTime,callback:function(t){e.$set(e.Form,"wrPublishTime",t)},expression:"Form.wrPublishTime"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"出版地",required:"",prop:"wrPublishPlace"}},[r("el-select",{model:{value:e.Form.wrPublishPlace,callback:function(t){e.$set(e.Form,"wrPublishPlace",t)},expression:"Form.wrPublishPlace"}},[r("el-option",{attrs:{label:"国内",value:"国内"}}),r("el-option",{attrs:{label:"国外",value:"国外"}})],1)],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"著作类别",required:"",prop:"wrType"}},[r("el-select",{model:{value:e.Form.wrType,callback:function(t){e.$set(e.Form,"wrType",t)},expression:"Form.wrType"}},[r("el-option",{attrs:{label:"工具书",value:"工具书"}}),r("el-option",{attrs:{label:"专著",value:"专著"}}),r("el-option",{attrs:{label:"编著",value:"编著"}}),r("el-option",{attrs:{label:"译著",value:"译著"}}),r("el-option",{attrs:{label:"教材",value:"教材"}}),r("el-option",{attrs:{label:"皮书/发展报告",value:"皮书/发展报告"}}),r("el-option",{attrs:{label:"科普读物",value:"科普读物"}})],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"学科门类",required:"",prop:"subjectCategory"}},[r("el-select",{model:{value:e.Form.subjectCategory,callback:function(t){e.$set(e.Form,"subjectCategory",t)},expression:"Form.subjectCategory"}},[r("el-option",{attrs:{label:"科技类",value:"科技类"}}),r("el-option",{attrs:{label:"社科类",value:"社科类"}})],1)],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"一级学科",required:"",prop:"firstLevelDiscipline"}},[r("el-input",{model:{value:e.Form.firstLevelDiscipline,callback:function(t){e.$set(e.Form,"firstLevelDiscipline",t)},expression:"Form.firstLevelDiscipline"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"项目来源",required:"",prop:"projectSource"}},[r("el-input",{model:{value:e.Form.projectSource,callback:function(t){e.$set(e.Form,"projectSource",t)},expression:"Form.projectSource"}})],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"字数：（单位：万字）",required:"",prop:"wordCount"}},[r("el-input",{model:{value:e.Form.wordCount,callback:function(t){e.$set(e.Form,"wordCount",t)},expression:"Form.wordCount"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"是否译成外文",required:"",prop:"isTranslation"}},[r("el-select",{model:{value:e.Form.isTranslation,callback:function(t){e.$set(e.Form,"isTranslation",t)},expression:"Form.isTranslation"}},[r("el-option",{attrs:{label:"是",value:"是"}}),r("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"学校署名",required:"",prop:"schoolSignature"}},[r("el-select",{model:{value:e.Form.schoolSignature,callback:function(t){e.$set(e.Form,"schoolSignature",t)},expression:"Form.schoolSignature"}},[r("el-option",{attrs:{label:"第一单位",value:"第一单位"}}),r("el-option",{attrs:{label:"非第一单位",value:"非第一单位"}})],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"语种",required:"",prop:"wrLanguage"}},[r("el-select",{model:{value:e.Form.wrLanguage,callback:function(t){e.$set(e.Form,"wrLanguage",t)},expression:"Form.wrLanguage"}},[r("el-option",{attrs:{label:"中文",value:"中文"}}),r("el-option",{attrs:{label:"英语",value:"英语"}}),r("el-option",{attrs:{label:"俄语",value:"俄语"}}),r("el-option",{attrs:{label:"葡萄牙语",value:"葡萄牙语"}}),r("el-option",{attrs:{label:"波兰语",value:"波兰语"}}),r("el-option",{attrs:{label:"拉丁语",value:"拉丁语"}}),r("el-option",{attrs:{label:"朝鲜语",value:"朝鲜语"}}),r("el-option",{attrs:{label:"日语",value:"日语"}}),r("el-option",{attrs:{label:"希伯来语",value:"希伯来语"}}),r("el-option",{attrs:{label:"意大利语",value:"意大利语"}}),r("el-option",{attrs:{label:"匈牙利语",value:"匈牙利语"}}),r("el-option",{attrs:{label:"法语",value:"法语"}}),r("el-option",{attrs:{label:"西班牙语",value:"西班牙语"}}),r("el-option",{attrs:{label:"德语",value:"德语"}}),r("el-option",{attrs:{label:"阿拉伯语",value:"阿拉伯语"}}),r("el-option",{attrs:{label:"其他",value:"其他"}})],1)],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"ISSN号",required:"",prop:"issnNumber"}},[r("el-input",{model:{value:e.Form.issnNumber,callback:function(t){e.$set(e.Form,"issnNumber",t)},expression:"Form.issnNumber"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"CIP号",required:"",prop:"cipNumber"}},[r("el-input",{model:{value:e.Form.cipNumber,callback:function(t){e.$set(e.Form,"cipNumber",t)},expression:"Form.cipNumber"}})],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"出版社级别",prop:"publisherLevel"}},[r("el-select",{model:{value:e.Form.publisherLevel,callback:function(t){e.$set(e.Form,"publisherLevel",t)},expression:"Form.publisherLevel"}},[r("el-option",{attrs:{label:"一级",value:"一级"}}),r("el-option",{attrs:{label:"二级",value:"二级"}}),r("el-option",{attrs:{label:"三级",value:"三级"}}),r("el-option",{attrs:{label:"其他",value:"其他"}})],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"简介",prop:"wrIntro"}},[r("el-input",{model:{value:e.Form.wrIntro,callback:function(t){e.$set(e.Form,"wrIntro",t)},expression:"Form.wrIntro"}})],1)],1)],1)],1)],1)]),r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[e._v(" 作者信息 "),r("span",[r("el-tooltip",{attrs:{effect:"dark",content:"新增",placement:"right",enterable:!1}},[e.is_authority.is_user_add?r("el-button",{staticClass:"add",attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.authAdd}},[e._v("点击增加")]):e._e()],1)],1)]),r("div",[r("el-table",{attrs:{data:e.authForm,border:"",stripe:""}},[r("el-table-column",{attrs:{prop:"authorType",label:"作者类型",align:"center",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-select",{model:{value:t.row.authorType,callback:function(r){e.$set(t.row,"authorType",r)},expression:"scope.row.authorType"}},[r("el-option",{attrs:{label:"本校老师",value:"本校老师"}}),r("el-option",{attrs:{label:"本校学生",value:"本校学生"}}),r("el-option",{attrs:{label:"外校人员",value:"外校人员"}})],1)]}}])}),r("el-table-column",{attrs:{prop:"authorName",label:"* 作者姓名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.authorName,callback:function(r){e.$set(t.row,"authorName",r)},expression:"scope.row.authorName"}})]}}])}),r("el-table-column",{attrs:{width:"150",prop:"authorId",label:"作者编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.authorId,callback:function(r){e.$set(t.row,"authorId",r)},expression:"scope.row.authorId"}})]}}])}),r("el-table-column",{attrs:{width:"80",prop:"authorSex",label:"性别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.authorSex,callback:function(r){e.$set(t.row,"authorSex",r)},expression:"scope.row.authorSex"}})]}}])}),r("el-table-column",{attrs:{prop:"authorEducation",label:"学历",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-select",{attrs:{placeholder:"请选择学历"},model:{value:t.row.authorEducation,callback:function(r){e.$set(t.row,"authorEducation",r)},expression:"scope.row.authorEducation"}},[r("el-option",{attrs:{label:"博士研究生",value:"博士研究生"}}),r("el-option",{attrs:{label:"硕士研究生",value:"硕士研究生"}}),r("el-option",{attrs:{label:"本科",value:"本科"}}),r("el-option",{attrs:{label:"专科",value:"专科"}}),r("el-option",{attrs:{label:"高中及其以下",value:"高中及其以下"}}),r("el-option",{attrs:{label:"其他",value:"其他"}})],1)]}}])}),r("el-table-column",{attrs:{width:"100",prop:"signingOrder",label:"* 署名顺序",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:e.authForm[t.$index].signingOrder,callback:function(r){e.$set(e.authForm[t.$index],"signingOrder",r)},expression:"authForm[scope.$index].signingOrder"}})]}}])}),r("el-table-column",{attrs:{prop:"authorRole ",label:"承担角色",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.authorRole,callback:function(r){e.$set(t.row,"authorRole",r)},expression:"scope.row.authorRole   "}})]}}])}),1==this.istea?r("el-table-column",{attrs:{prop:"authorTitle",label:"职称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.authorTitle,callback:function(r){e.$set(t.row,"authorTitle",r)},expression:"scope.row.authorTitle"}})]}}],null,!1,2381796476)}):e._e(),r("el-table-column",{attrs:{prop:"authorWorkUnit",label:"工作单位",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.authorWorkUnit,callback:function(r){e.$set(t.row,"authorWorkUnit",r)},expression:"scope.row.authorWorkUnit"}})]}}])}),r("el-table-column",{attrs:{prop:"contributionRate",label:"参编字数（单位：万字）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-input",{model:{value:t.row.charactersNumber,callback:function(r){e.$set(t.row,"charactersNumber",r)},expression:"scope.row.charactersNumber"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"120px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.is_authority.is_user_del?r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start",enterable:!1}},[r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.delAuthRow(t,e.authForm)}}})],1):e._e()]}}])})],1)],1),r("el-button",{staticClass:"save",attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("保存 ")])],1),r("el-card",[r("div",{attrs:{slot:"header"},slot:"header"},[e._v(" 附件信息 "),r("el-upload",{staticClass:"upload-demo",attrs:{"file-list":e.fileList,action:"http://www.dayanhulian.com:8001/matter/fileoss/uploadOssFile",multiple:"",headers:e.config,"on-success":e.saveUrl,"before-upload":e.beforeUpload,accept:".jsp,.png"}},[r("el-button",{attrs:{icon:"el-icon-upload2",size:"small",type:"primary"}},[e._v("点击上传")]),r("span",{staticClass:"el-uploaddTip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件")])],1)],1),r("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("img",{attrs:{width:"100%",src:e.photoView}})]),this.Id?r("div",[r("el-table",{attrs:{data:e.accessory,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"附件",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("img",{staticStyle:{width:"80px",height:"80px"},attrs:{src:t.row.url,alt:""},on:{click:function(r){return e.photo(t.row)}}})]}}],null,!1,2862317287)}),r("el-table-column",{attrs:{label:"操作",width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"预览",placement:"top-start",enterable:!1}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini"},on:{click:function(r){return e.photo(t.row)}}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"下载",placement:"top",enterable:!1}},[r("a",{attrs:{href:t.row.url}},[r("el-button",{staticClass:"download",attrs:{type:"primary",icon:"el-icon-download",size:"mini"}})],1)]),e.is_authority.is_user_del?r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top-start",enterable:!1}},[r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.delAccessory(t,e.accessory)}}})],1):e._e()]}}],null,!1,307279188)})],1)],1):e._e()],1)],1)},o=[],n=(r("c975"),r("a434"),r("ac1f"),r("5319"),r("1276"),r("96cf"),r("1da1")),s=r("5530"),l=r("2f62"),i={data:function(){return{is_authority:{is_user_del:!1,is_user_upt:!1,is_user_add:!1,is_user_add_role:!1},rule:{peoId:[{required:!0,message:"该项不能为空",trigger:"blur"}],wrName:[{required:!0,message:"该项不能为空",trigger:"blur"}],crBelongDept:[{required:!0,message:"该项不能为空",trigger:"blur"}],wrPublishUnit:[{required:!0,message:"该项不能为空",trigger:"blur"}],wrPublishTime:[{required:!0,message:"该项不能为空",trigger:"blur"}],wrPublishPlace:[{required:!0,message:"该项不能为空",trigger:"blur"}],wrType:[{required:!0,message:"该项不能为空",trigger:"blur"}],subjectCategory:[{required:!0,message:"该项不能为空",trigger:"blur"}],firstLevelDiscipline:[{required:!0,message:"该项不能为空",trigger:"blur"}],projectSource:[{required:!0,message:"该项不能为空",trigger:"blur"}],wordCount:[{required:!0,message:"该项不能为空",trigger:"blur"}],isTranslation:[{required:!0,message:"该项不能为空",trigger:"blur"}],schoolSignature:[{required:!0,message:"该项不能为空",trigger:"blur"}],wrLanguage:[{required:!0,message:"该项不能为空",trigger:"blur"}],issnNumber:[{required:!0,message:"该项不能为空",trigger:"blur"}],cipNumber:[{required:!0,message:"该项不能为空",trigger:"blur"}],publisherLevel:[{required:!0,message:"该项不能为空",trigger:"blur"}],financialAccount:[{required:!0,message:"该项不能为空",trigger:"blur"}],supportingExpenses:[{required:!0,message:"该项不能为空",trigger:"blur"}],seltFinancing:[{required:!0,message:"该项不能为空",trigger:"blur"}],specialFunds:[{required:!0,message:"该项不能为空",trigger:"blur"}]},dialogVisible:!1,fileList:[],accessory:[],Options:[],Form:{},authForm:[],List:[],istea:this.$route.query.istea,token:window.sessionStorage.getItem("token"),Id:this.$route.query.id,newAddId:void 0,photoView:""}},computed:Object(s["a"])(Object(s["a"])({},Object(l["b"])(["btus"])),{},{config:function(){return{Token:this.token}}}),created:function(){this.isAuthority(),this.getDetail(),this.getTreeselect()},methods:{isAuthority:function(){var e=this.btus.split(",");for(var t in this.is_authority)-1!=e.indexOf(t)&&(this.is_authority[t]=!0)},photo:function(e){this.dialogVisible=!0,this.photoView=e.url},beforeUpload:function(e){if(this.Id||this.newAddId){console.log(e.type);var t="image/png"===e.type||"image/jpeg"===e.type;return t||this.$message.error("请上传 JPG或者PNG 格式!"),t}return this.$message.error("请先保存作者信息!"),!1},saveUrl:function(e,t,r){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a.$http.post("/accessoriesList/saveOrUpdateAccessoriesList",{proId:a.Id||a.newAddId,url:e.data.url}),a.getDetail();case 2:case"end":return t.stop()}}),t)})))()},authAdd:function(){this.authForm.splice(this.authForm.length,0,{authorEducation:"",authorId:"",authorName:"",authorSex:"",authorTitle:"",authorType:"",authorWorkUnit:null,contributionRate:"",id:"",wrId:this.$route.query.id,signingOrder:1})},delAccessory:function(e,t){var r=this,a=e.row.id.split(",");console.log(a),this.$confirm("确认要删除吗?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.$http.delete("/accessoriesList/removeByIdAccessoriesList/"+a);case 2:r.getDetail();case 3:case"end":return e.stop()}}),e)})))).then((function(){r.$message({showClose:!0,message:"删除成功",type:"success"})}))},delAuthRow:function(e,t){var r=this;if(e.row.id){var a=e.row.id.split(",");console.log(a),this.$confirm("确认要删除吗?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.$http.delete("/worksResultsAuthorInfo/removeByIdWorksResultsAuthorInfos",{data:a});case 2:r.getDetail(),r.Form=[];case 4:case"end":return e.stop()}}),e)})))).then((function(){r.$message({showClose:!0,message:"删除成功",type:"success"})}))}else t.splice(e.$index,1)},getTreeselect:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a,o,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.istea=e.$route.query.istea,e.$route.query.id,1!=e.istea){t.next=12;break}return t.next=5,e.$http.post("/teaBaseInfo/queryTeaBaseInfoList",{page:{current:1,size:999}});case 5:if(r=t.sent,a=r.data,e.Options=a.data.dataList.records,2e4==a.code){t.next=10;break}return t.abrupt("return",e.$message.error(a.message));case 10:t.next=22;break;case 12:if(0!=e.istea){t.next=22;break}return t.next=15,e.$http.post("/studentInfo/queryStudentInfoList",{page:{current:1,size:999}});case 15:if(o=t.sent,n=o.data,s=n.data.dataList.records,s=JSON.parse(JSON.stringify(s).replace(/stuId/g,"teaId")),e.Options=JSON.parse(JSON.stringify(s).replace(/stuName/g,"teaName")),2e4==n.code){t.next=22;break}return t.abrupt("return",e.$message.error(n.message));case 22:case"end":return t.stop()}}),t)})))()},getDetail:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.Id){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.get("/worksResultsInfo/getByIdWorksResultsInfo/"+e.Id);case 4:if(r=t.sent,a=r.data,2e4==a.code){t.next=8;break}return t.abrupt("return",e.$message.error(a.message));case 8:e.Form=a.data.entity,console.log(e.Form),e.getAutherinfo(),e.getAccessory();case 12:case"end":return t.stop()}}),t)})))()},getAccessory:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/accessoriesList/getByIdAccessoriesList/"+e.Form.id);case 2:if(r=t.sent,a=r.data,2e4==a.code){t.next=6;break}return t.abrupt("return",e.$message.error(a.message));case 6:e.accessory=a.data.entity,console.log(e.accessory);case 8:case"end":return t.stop()}}),t)})))()},getAutherinfo:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/worksResultsAuthorInfo/queryWorksResultsAuthorInfoList/"+e.Form.id);case 2:if(r=t.sent,a=r.data,2e4==a.code){t.next=6;break}return t.abrupt("return",e.$message.error(a.message));case 6:e.authForm=a.data.dataList,console.log(e.authForm);case 8:case"end":return t.stop()}}),t)})))()},submitForm:function(){var e=this;1==this.istea?this.Form.isStu=1:0==this.istea&&(this.Form.isStu=0),this.$refs.formRef.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o,n,s,l,i,u,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=43;break}a=0;case 2:if(!(a<e.authForm.length)){t.next=8;break}if(e.authForm[a].authorName&&e.authForm[a].signingOrder){t.next=5;break}return t.abrupt("return",e.$message.error("请输入作者姓名和作者署名"));case 5:a++,t.next=2;break;case 8:return t.next=10,e.$http.post("/worksResultsInfo/saveOrUpdateWorksResultsInfo",e.Form);case 10:if(e.Id||1!=e.istea){t.next=18;break}return t.next=13,e.$http.post("/worksResultsInfo/queryTeaWorksResultsInfoList",{page:{current:1,size:999}});case 13:o=t.sent,n=o.data,e.newAddId=n.data.dataList.records.pop().id,t.next=24;break;case 18:if(e.Id||0!=e.istea){t.next=24;break}return t.next=21,e.$http.post("/worksResultsInfo/queryStuWorksResultsInfoList",{page:{current:1,size:999}});case 21:s=t.sent,l=s.data,e.newAddId=l.data.dataList.records.pop().id;case 24:i=0;case 25:if(!(i<e.authForm.length)){t.next=34;break}return e.Id||(e.authForm[i].wrId=e.newAddId,e.authForm[i].signingOrder=1),t.next=29,e.$http.post("/worksResultsAuthorInfo/saveOrUpdateWorksResultsAuthorInfo",e.authForm[i]);case 29:u=t.sent,c=u.data;case 31:i++,t.next=25;break;case 34:if(c){t.next=36;break}return t.abrupt("return",e.$message.error("请填写作者信息!"));case 36:if(2e4==c.code){t.next=40;break}return t.abrupt("return",e.$message.error(c.message));case 40:return t.abrupt("return",e.$message.success(c.message));case 43:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},u=i,c=(r("66a9"),r("2877")),p=Object(c["a"])(u,a,o,!1,null,"6ab35322",null);t["default"]=p.exports},"746f":function(e,t,r){var a=r("428f"),o=r("5135"),n=r("e538"),s=r("9bf2").f;e.exports=function(e){var t=a.Symbol||(a.Symbol={});o(t,e)||s(t,e,{value:n.f(e)})}},a434:function(e,t,r){"use strict";var a=r("23e7"),o=r("23cb"),n=r("a691"),s=r("50c4"),l=r("7b0b"),i=r("65f0"),u=r("8418"),c=r("1dde"),p=r("ae40"),d=c("splice"),f=p("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,b=Math.min,g=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d||!f},{splice:function(e,t){var r,a,c,p,d,f,v=l(this),w=s(v.length),y=o(e,w),k=arguments.length;if(0===k?r=a=0:1===k?(r=0,a=w-y):(r=k-2,a=b(m(n(t),0),w-y)),w+r-a>g)throw TypeError(h);for(c=i(v,a),p=0;p<a;p++)d=y+p,d in v&&u(c,p,v[d]);if(c.length=a,r<a){for(p=y;p<w-a;p++)d=p+a,f=p+r,d in v?v[f]=v[d]:delete v[f];for(p=w;p>w-a+r;p--)delete v[p-1]}else if(r>a)for(p=w-a;p>y;p--)d=p+a-1,f=p+r-1,d in v?v[f]=v[d]:delete v[f];for(p=0;p<r;p++)v[p+y]=arguments[p+2];return v.length=w-a+r,c}})},a4d3:function(e,t,r){"use strict";var a=r("23e7"),o=r("da84"),n=r("d066"),s=r("c430"),l=r("83ab"),i=r("4930"),u=r("fdbf"),c=r("d039"),p=r("5135"),d=r("e8b5"),f=r("861d"),m=r("825a"),b=r("7b0b"),g=r("fc6a"),h=r("c04e"),v=r("5c6c"),w=r("7c73"),y=r("df75"),k=r("241c"),x=r("057f"),F=r("7418"),O=r("06cf"),S=r("9bf2"),$=r("d1e7"),I=r("9112"),_=r("6eeb"),j=r("5692"),q=r("f772"),P=r("d012"),R=r("90e3"),T=r("b622"),N=r("e538"),A=r("746f"),L=r("d44e"),C=r("69f3"),D=r("b727").forEach,E=q("hidden"),U="Symbol",B="prototype",W=T("toPrimitive"),z=C.set,J=C.getterFor(U),V=Object[B],M=o.Symbol,G=n("JSON","stringify"),K=O.f,Q=S.f,X=x.f,H=$.f,Y=j("symbols"),Z=j("op-symbols"),ee=j("string-to-symbol-registry"),te=j("symbol-to-string-registry"),re=j("wks"),ae=o.QObject,oe=!ae||!ae[B]||!ae[B].findChild,ne=l&&c((function(){return 7!=w(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(e,t,r){var a=K(V,t);a&&delete V[t],Q(e,t,r),a&&e!==V&&Q(V,t,a)}:Q,se=function(e,t){var r=Y[e]=w(M[B]);return z(r,{type:U,tag:e,description:t}),l||(r.description=t),r},le=u?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof M},ie=function(e,t,r){e===V&&ie(Z,t,r),m(e);var a=h(t,!0);return m(r),p(Y,a)?(r.enumerable?(p(e,E)&&e[E][a]&&(e[E][a]=!1),r=w(r,{enumerable:v(0,!1)})):(p(e,E)||Q(e,E,v(1,{})),e[E][a]=!0),ne(e,a,r)):Q(e,a,r)},ue=function(e,t){m(e);var r=g(t),a=y(r).concat(me(r));return D(a,(function(t){l&&!pe.call(r,t)||ie(e,t,r[t])})),e},ce=function(e,t){return void 0===t?w(e):ue(w(e),t)},pe=function(e){var t=h(e,!0),r=H.call(this,t);return!(this===V&&p(Y,t)&&!p(Z,t))&&(!(r||!p(this,t)||!p(Y,t)||p(this,E)&&this[E][t])||r)},de=function(e,t){var r=g(e),a=h(t,!0);if(r!==V||!p(Y,a)||p(Z,a)){var o=K(r,a);return!o||!p(Y,a)||p(r,E)&&r[E][a]||(o.enumerable=!0),o}},fe=function(e){var t=X(g(e)),r=[];return D(t,(function(e){p(Y,e)||p(P,e)||r.push(e)})),r},me=function(e){var t=e===V,r=X(t?Z:g(e)),a=[];return D(r,(function(e){!p(Y,e)||t&&!p(V,e)||a.push(Y[e])})),a};if(i||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=R(e),r=function(e){this===V&&r.call(Z,e),p(this,E)&&p(this[E],t)&&(this[E][t]=!1),ne(this,t,v(1,e))};return l&&oe&&ne(V,t,{configurable:!0,set:r}),se(t,e)},_(M[B],"toString",(function(){return J(this).tag})),_(M,"withoutSetter",(function(e){return se(R(e),e)})),$.f=pe,S.f=ie,O.f=de,k.f=x.f=fe,F.f=me,N.f=function(e){return se(T(e),e)},l&&(Q(M[B],"description",{configurable:!0,get:function(){return J(this).description}}),s||_(V,"propertyIsEnumerable",pe,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!i,sham:!i},{Symbol:M}),D(y(re),(function(e){A(e)})),a({target:U,stat:!0,forced:!i},{for:function(e){var t=String(e);if(p(ee,t))return ee[t];var r=M(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!le(e))throw TypeError(e+" is not a symbol");if(p(te,e))return te[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),a({target:"Object",stat:!0,forced:!i,sham:!l},{create:ce,defineProperty:ie,defineProperties:ue,getOwnPropertyDescriptor:de}),a({target:"Object",stat:!0,forced:!i},{getOwnPropertyNames:fe,getOwnPropertySymbols:me}),a({target:"Object",stat:!0,forced:c((function(){F.f(1)}))},{getOwnPropertySymbols:function(e){return F.f(b(e))}}),G){var be=!i||c((function(){var e=M();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}));a({target:"JSON",stat:!0,forced:be},{stringify:function(e,t,r){var a,o=[e],n=1;while(arguments.length>n)o.push(arguments[n++]);if(a=t,(f(t)||void 0!==e)&&!le(e))return d(t)||(t=function(e,t){if("function"==typeof a&&(t=a.call(this,e,t)),!le(t))return t}),o[1]=t,G.apply(null,o)}})}M[B][W]||I(M[B],W,M[B].valueOf),L(M,U),P[E]=!0},b64b:function(e,t,r){var a=r("23e7"),o=r("7b0b"),n=r("df75"),s=r("d039"),l=s((function(){n(1)}));a({target:"Object",stat:!0,forced:l},{keys:function(e){return n(o(e))}})},c975:function(e,t,r){"use strict";var a=r("23e7"),o=r("4d64").indexOf,n=r("a640"),s=r("ae40"),l=[].indexOf,i=!!l&&1/[1].indexOf(1,-0)<0,u=n("indexOf"),c=s("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:i||!u||!c},{indexOf:function(e){return i?l.apply(this,arguments)||0:o(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,r){var a=r("23e7"),o=r("83ab"),n=r("56ef"),s=r("fc6a"),l=r("06cf"),i=r("8418");a({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,r,a=s(e),o=l.f,u=n(a),c={},p=0;while(u.length>p)r=o(a,t=u[p++]),void 0!==r&&i(c,t,r);return c}})},e439:function(e,t,r){var a=r("23e7"),o=r("d039"),n=r("fc6a"),s=r("06cf").f,l=r("83ab"),i=o((function(){s(1)})),u=!l||i;a({target:"Object",stat:!0,forced:u,sham:!l},{getOwnPropertyDescriptor:function(e,t){return s(n(e),t)}})},e538:function(e,t,r){var a=r("b622");t.f=a}}]);
//# sourceMappingURL=chunk-44dea44a.d50f6fd8.js.map