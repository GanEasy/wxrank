webpackJsonp([1],{"/2ar":function(t,e){},"/KFX":function(t,e,a){"use strict";function i(t){a("uCL5")}var s=a("AHJT"),n=a("Kby5"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},"0pd7":function(t,e,a){"use strict";var i=a("qK+J"),s=a.n(i),n=a("oboO"),r=a("gyMJ");e.a={name:"ArticleList",components:{InfiniteLoading:s.a,ListItem:n.a},props:["cate"],data:function(){return{articles:[],distance:200,page:0,showload:!1,rank:0,loading:!1}},mounted:function(){},methods:{refresh:function(){var t=this;return setTimeout(function(){t.articles=[],t.rank=0,t.$refs.infiniteLoading.stateChanger.reset()},50),!0},infiniteHandler:function(t){var e=this;e.loading||(this.articles.length>500?t.complete():setTimeout(function(){e.loading=!0;var a="/hot?limit=10&rank="+e.rank+"&tag="+e.cate;r.a.get(a,function(a,i){if(i&&i.length>0){for(var s=0;s<i.length;s++)e.articles.push(i[s]);e.rank=i[i.length-1].Rank,t.loaded(),e.page++}else t.complete();e.loading=!1})},200))}},watch:{articles:function(){},cate:function(){(parseInt(window.localStorage.getItem("__cate"))||0)!=parseInt(this.cate)&&(localStorage.setItem("__cate",this.cate),this.refresh())}}}},"4qE/":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Search",{attrs:{recommend:t.recommend,placeholder:"找不到公众号?"}}),t._v(" "),a("div",{staticClass:"weui-cells__title"},[t._v("自助服务")]),t._v(" "),a("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"servicepost"}}},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v("提交文章")])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"},[t._v("\r\n            分享文章\r\n        ")])]),t._v(" "),a("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"servicedelete"}}},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v("删除收录")])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"},[t._v("\r\n            移除收录\r\n        ")])]),t._v(" "),a("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"servicespread"}}},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v("文章推荐")])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"},[t._v("\r\n            互推\r\n        ")])]),t._v(" "),a("div",{staticClass:"weui-cells__title"},[t._v("相关")]),t._v(" "),a("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"feedbackmedia"}}},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v("收录")])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"})]),t._v(" "),a("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"feedbackother"}}},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v("排序")])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"})]),t._v(" "),a("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"feedbackother"}}},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v("推广")])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"})])],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},"6Vc0":function(t,e,a){"use strict";var i=a("gyMJ");e.a={name:"ListItem",props:["article"],data:function(){return{}},methods:{like:function(t){var e=this;e.showload=!0,i.a.get("/like/"+t.ID,function(a,i){t.Like=i.Like,e.showload=!1})},hate:function(t){var e=this;e.showload=!0,i.a.get("/hate/"+t.ID,function(a,i){t.Hate=i.Hate,e.showload=!1})}}}},"7i6S":function(t,e){},"8EAm":function(t,e,a){"use strict";var i=a("gyMJ"),s=a("NSTN");e.a={name:"app",data:function(){return{url:"",showSuccess:!1,showWarn:!1}},methods:{submit:function(t){var e=this;""!=e.url?(setTimeout(function(){e.posting=!1},200),e.posting=!0,i.a.post(e.url,function(t,a){"0"==a?alert("提交失败"):(""==e.url&&(e.showSuccess=!0),e.url="")})):e.showWarn=!0}},components:{"weui-textarea":s.a}}},"9AXx":function(t,e){},"9q/O":function(t,e,a){"use strict";var i=a("mvHQ"),s=a.n(i),n=a("tND7"),r=a("/KFX"),o=a("qK+J"),c=a.n(o),l=a("gyMJ");e.a={name:"indexP",components:{Search:r.a,InfiniteLoading:c.a,ArticleList:n.a},data:function(){return{articles:[],distance:200,page:0,showload:!1,rank:0,loading:!1,cate:0,err:"",recommend:!1}},mounted:function(){void 0!=this.$route.params.id?this.cate=this.$route.params.id:this.getCache()},methods:{getCache:function(){var t=(new Date).valueOf(),e=this.cate;(parseInt(window.localStorage.getItem("cache_time"+e))||0)>t?(this.articles=JSON.parse(window.localStorage.getItem("articles"+e))||[],this.rank=parseFloat(window.localStorage.getItem("rank"+e))||0,this.$refs.infiniteLoading.stateChanger.reset()):this.refresh()},setCache:function(){var t=this.cate,e=this.rank,a=this.articles,i=(new Date).valueOf();localStorage.setItem("articles"+t,s()(a)),localStorage.setItem("rank"+t,e),localStorage.setItem("cache_time"+t,i+18e5),localStorage.setItem("cate",t)},refresh:function(){var t=this;return setTimeout(function(){t.articles=[],t.rank=0,t.$refs.infiniteLoading.stateChanger.reset()},50),!0},infiniteHandler:function(t){var e=this;e.loading||(this.articles.length>500?t.complete():setTimeout(function(){e.loading=!0;var a="/hot?limit=10&rank="+e.rank+"&tag="+e.cate;l.a.get(a,function(a,i){if(i&&i.length>0){for(var s=0;s<i.length;s++)e.articles.push(i[s]);e.rank=i[i.length-1].Rank,t.loaded(),e.page++,e.setCache()}else t.complete();e.loading=!1})},200))}},watch:{cate:function(){this.getCache()},$route:function(t,e){void 0!=t.params.id?this.cate=t.params.id:this.cate=0}}}},AHJT:function(t,e,a){"use strict";var i=a("mvHQ"),s=a.n(i),n=a("gyMJ"),r=a("AVow");e.a={name:"indexP",props:{placeholder:{type:String,default:"搜索"},recommend:{type:Boolean,default:!0},recommendType:{type:String,default:"wxid"}},components:{WeuiSearch:r.a},data:function(){return{value:"",defaultResult:[]}},methods:{onSubmit:function(){console.log(this.value),this.$router.push({name:"search",query:{q:this.value}})},resultClick:function(t){console.log(t),window.alert("you click the result item: "+s()(t))},GetCate:function(){var t=this;n.a.get("/tags?type=cate",function(e,a){t.category=a})}},watch:{value:function(t){var e=this;this.recommend&&(""!=t?"wxid"==this.recommendType&&n.a.get("/searchtags?s="+t+"&limit=5",function(t,a){e.defaultResult=a}):e.defaultResult=[])}}}},AVow:function(t,e,a){"use strict";var i=a("Dv/R"),s=a("IJCT"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.a=r.exports},CSN7:function(t,e,a){"use strict";var i=a("jYDj"),s=a("mOt/"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.a=r.exports},DTFK:function(t,e,a){"use strict";e.a={name:"weui-textarea",props:{placeholder:String,showCounter:{type:Boolean,default:!1},rows:{type:[Number,String],default:3},maxLength:{type:[Number,String],default:200},value:String},data:function(){return{currentValue:this.value}},computed:{length:function(){return this.currentValue?this.currentValue.length:0}},mounted:function(){this.currentValue=this.value},watch:{currentValue:function(t){this.$emit("input",t)},value:function(t){this.maxLength&&this.value.length>this.maxLength&&(t=t.slice(0,this.maxLength)),this.currentValue=t}}}},DegP:function(t,e,a){"use strict";var i=a("8EAm"),s=a("P/Cu"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.a=r.exports},Djoo:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell "},[a("div",{staticClass:"weui-cell__bd"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"rextarea",staticClass:"weui-textarea",attrs:{placeholder:t.placeholder,rows:t.rows},domProps:{value:t.currentValue},on:{change:function(e){t.$emit("change",t.currentValue)},input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),t.showCounter?a("div",{staticClass:"weui-textarea-counter"},[a("span",[t._v(t._s(t.length))]),t._v("/"+t._s(t.maxLength))]):t._e()])])},s=[],n={render:i,staticRenderFns:s};e.a=n},"Dv/R":function(t,e,a){"use strict";var i=a("CSN7");e.a={name:"weui-search",components:{WeuiCell:i.a},props:{value:String,autofocus:Boolean,show:Boolean,placeholder:{type:String,default:"搜索"},cancelText:{type:String,default:"取消"},result:Array},data:function(){return{isActive:!1,currentValue:this.value}},mounted:function(){this.autofocus&&(this.$refs.searchInput.focus(),this.isActive=!0)},methods:{textClick:function(t){this.$refs.searchInput.focus(),this.isActive=!0},handleResultClick:function(t){this.searchCancel(),this.$router.push({name:"cate",params:{id:t.ID}})},searchClear:function(){this.currentValue="",this.$refs.searchInput.focus()},searchCancel:function(){this.currentValue="",this.isActive=!1}},filters:{filterCategory:function(t){var e="wxid";switch(t){case"wxid":e="";break;case"cate":return e="进入分类频道";case"area":e="进入区域频道";break;default:e="??"}return e}},watch:{currentValue:function(t){this.$emit("input",t)},value:function(t){this.currentValue=t}}}},EJg2:function(t,e,a){"use strict";function i(t){a("7i6S")}var s=a("kY1z"),n=a("d2QM"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);c.exports},FLfE:function(t,e){},G7FF:function(t,e,a){"use strict";function i(t){a("/2ar")}var s=a("SHlf"),n=a("hoji"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},HCTz:function(t,e,a){"use strict";var i=a("mvHQ"),s=a.n(i),n=a("gyMJ");e.a={props:{title:{type:String},backTo:{type:String,default:"/hot"}},data:function(){return{tag:[],tags:[],category:[],listCount:4,selectCategoryInShowList:!1,showCategory:[],hideCategory:[],showHideCategoryStatus:!1,swiperOption2:{pagination:".swiper-pagination",slidesPerView:6,initialSlide:6,paginationClickable:!0,spaceBetween:0}}},methods:{GetCate:function(){var t=this,e=(new Date).valueOf();this.cate;(parseInt(window.localStorage.getItem("cate_cache_time"))||0)>e?(t.category=JSON.parse(window.localStorage.getItem("all_category"))||[],"true"===window.localStorage.getItem("hide_category_status")&&(t.showHideCategoryStatus=!0),t.manageCategory()):n.a.get("/tags?type=cate",function(a,i){localStorage.setItem("all_category",s()(i)),localStorage.setItem("cate_cache_time",e+18e5),t.category=i,t.manageCategory()})},back:function(){this.$router.push(this.backTo)},manageCategory:function(){var t=this.category;"cate"==this.$route.name&&this.$route.params.id;for(var e=0;e<t.length;e++)e<this.listCount?this.showCategory.push(t[e]):this.hideCategory.push(t[e])}},watch:{showHideCategoryStatus:function(){localStorage.setItem("hide_category_status",this.showHideCategoryStatus)}},mounted:function(){this.GetCate()}}},IJCT:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-search-bar",class:{"weui-search-bar_focusing":t.isActive||t.currentValue}},[a("form",{staticClass:"weui-search-bar__form",on:{submit:function(e){e.preventDefault(),t.$emit("on-submit",t.value)}}},[a("div",{staticClass:"weui-search-bar__box"},[a("i",{staticClass:"weui-icon-search"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"searchInput",staticClass:"weui-search-bar__input",attrs:{placeholder:t.placeholder},domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),a("a",{staticClass:"weui-icon-clear",on:{click:t.searchClear}})]),t._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:!t.isActive,expression:"!isActive"}],staticClass:"weui-search-bar__label",on:{click:t.textClick}},[a("i",{staticClass:"weui-icon-search"}),t._v(" "),a("span",{domProps:{textContent:t._s(t.placeholder)}})])]),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"weui-search-bar__cancel-btn",domProps:{textContent:t._s(t.cancelText)},on:{click:t.searchCancel}})]),t._v(" "),t._t("default",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show||t.currentValue&&t.result.length>0,expression:"show || currentValue &&result.length>0"}],staticClass:"weui-cells searchbar-result"},t._l(t.result,function(e,i,s){return a("div",{key:i,staticClass:"weui-cell weui-cell_access",on:{click:function(a){t.handleResultClick(e)}}},[a("div",{staticClass:"weui-cell__bd weui-cell_primary"},[a("p",[t._v(t._s(e.Title))])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"},[t._v("\n            "+t._s(t._f("filterCategory")(e.Type))+"\n            \n          ")])])}))])],2)},s=[],n={render:i,staticRenderFns:s};e.a=n},Id5U:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header-tab"),t._v(" "),a("router-view"),t._v(" "),a("vm-back-top",{attrs:{bottom:90,timing:"ease"}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"rgba(0, 8, 255, 0.50)",d:"M511.5648 358.4a12.7616 12.7616 0 0 0-9.6 3.8784L355.584 512.9088a12.8 12.8 0 1 0 18.368 17.8432L499.2 401.856V729.6a12.8 12.8 0 0 0 25.6 0V400.512l120.768 126.8736a12.8 12.8 0 1 0 18.5472-17.6512l-140.288-147.3536a12.7744 12.7744 0 0 0-10.5472-3.9168 12.9536 12.9536 0 0 0-1.7152-0.0512zM512 1024C229.2352 1024 0 794.7648 0 512S229.2352 0 512 0s512 229.2352 512 512-229.2352 512-512 512zM320 320h384a12.8 12.8 0 0 0 0-25.6H320a12.8 12.8 0 0 0 0 25.6z"}})])])],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},Kby5:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("weui-search",{attrs:{result:t.defaultResult,placeholder:t.placeholder},on:{"result-click":t.resultClick,"on-submit":t.onSubmit},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},s=[],n={render:i,staticRenderFns:s};e.a=n},M93x:function(t,e,a){"use strict";function i(t){a("fhEW")}var s=a("xJD8"),n=a("Id5U"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("O694"),s=(a.n(i),a("v2ns")),n=(a.n(s),a("7+uW")),r=a("M93x"),o=a("YaEn"),c=a("mtWM"),l=a.n(c),u=a("Rf8U"),d=a.n(u),h=a("IPdH"),f=a.n(h),v=a("XcbY"),_=a.n(v),m=a("gyMJ");n.default.config.productionTip=!1;var p=a("fxnj");n.default.use(f.a,{name:"timeago",locale:"zh-CN",locales:{"zh-CN":["","","","%sh","%sd","%sw","%sm","%sy"]}}),n.default.use(d.a,l.a),n.default.component(_.a.name,_.a),o.a.beforeEach(function(t,e,a){a()}),o.a.afterEach(function(t,e){setTimeout(function(){m.a.get("/jssdk?url=http://readfollow.com"+t.path,function(e,a){p.config({debug:!1,appId:"wx267866e82ab809fc",timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage"]}),p.ready(function(){p.checkJsApi({jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage"]}),p.onMenuShareTimeline({title:"跟读，优质微信文章聚合平台",link:"http://readfollow.com"+t.path,imgUrl:"http://readfollow.com/logo.png"}),p.onMenuShareAppMessage({title:"跟读，微信优质文章聚合平台",desc:"阅读优质的微信文章，节省翻看订阅号的时间。",link:"http://readfollow.com"+t.path,imgUrl:"http://readfollow.com/logo.png"})})})},200)}),new n.default({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},NSTN:function(t,e,a){"use strict";var i=a("DTFK"),s=a("Djoo"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.a=r.exports},O694:function(t,e){},OQ2W:function(t,e){},"P/Cu":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showSuccess?a("div",[a("div",{staticClass:"weui-mask"}),t._v(" "),a("div",{staticClass:"weui-dialog"},[t._m(0),t._v(" "),a("div",{staticClass:"weui-dialog__bd"},[t._v("请耐心等候文章链接审核通过！")]),t._v(" "),a("div",{staticClass:"weui-dialog__ft"},[a("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:function(e){t.showSuccess=!1}}},[t._v("确定")])])])]):t._e(),t._v(" "),t.showWarn?a("div",[a("div",{staticClass:"weui-mask"}),t._v(" "),a("div",{staticClass:"weui-dialog"},[t._m(1),t._v(" "),a("div",{staticClass:"weui-dialog__bd"},[t._v("请检查分享的链接是否正常")]),t._v(" "),a("div",{staticClass:"weui-dialog__ft"},[a("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:function(e){t.showSuccess=!1}}},[t._v("确定")])])])]):t._e(),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"weui-cells__title"},[t._v("自助服务 > 分享公众号文章")]),t._v(" "),a("div",{staticClass:"weui-cells__title"},[t._v("请粘贴待分享文章链接地址")]),t._v(" "),a("weui-textarea",{attrs:{placeholder:"如果您有优质微信公众号文章要分享，请提交其文章链接，通过审核后将收录、展示。"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),t._m(2)],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-dialog__hd"},[a("strong",{staticClass:"weui-dialog__title"},[t._v("分享成功")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-dialog__hd"},[a("strong",{staticClass:"weui-dialog__title"},[t._v("分享失败")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-btn-area"},[a("button",{staticClass:"weui-btn weui-btn_primary",attrs:{type:"submit"}},[t._v("分享")])])}],n={render:i,staticRenderFns:s};e.a=n},SHlf:function(t,e,a){"use strict";var i=a("tND7"),s=a("AVow"),n=a("qK+J"),r=a.n(n),o=a("gyMJ");e.a={name:"indexP",components:{WeuiSearch:s.a,InfiniteLoading:r.a,ArticleList:i.a},data:function(){return{q:"",recommend:!1,articles:[],distance:200,page:0,showload:!1,rank:0,loading:!1,cate:0,err:"",defaultResult:[]}},mounted:function(){this.q=this.$route.query.q},methods:{onSubmit:function(){this.$router.push({name:"search",query:{q:this.q}})},refresh:function(){var t=this;return setTimeout(function(){t.articles=[],t.rank=0,t.$refs.infiniteLoading.stateChanger.reset()},50),!0},infiniteHandler:function(t){var e=this;e.loading||(this.articles.length>500?t.complete():setTimeout(function(){e.loading=!0;var a="/search?limit=10&rank="+e.rank+"&s="+e.q;o.a.get(a,function(a,i){if(i&&i.length>0){for(var s=0;s<i.length;s++)e.articles.push(i[s]);e.rank=i[i.length-1].Rank,t.loaded(),e.page++}else t.complete();e.loading=!1})},200))}},computed:{searchQurery:function(){return this.q},searchTips:function(){return"搜索"}},watch:{$route:function(t,e){this.q=this.$route.query.q,this.refresh()}}}},WKKX:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"quickMenu",staticClass:"quick-menu",style:t.quickMenuStyle},[t._l(t.menuCount,function(e){return a("div",{key:e,staticClass:"sub-menu",style:t.getSubMenu(e-1)},[a("a",{style:t.subMenuStyle,attrs:{href:t.menuUrlList[e-1],target:t.openNewTab},on:{mouseover:function(e){e.stopPropagation(),t.mouseEnterSubMenu(e)},mouseout:function(e){e.stopPropagation(),t.mouseOutSubMenu(e)}}},[t._v("\n          一\n        ")])])}),t._v(" "),a("div",{staticClass:"menu",style:t.menuStyle},[a("div",{staticClass:"core-menu",on:{click:t.toggleMenu}},[a("div",{staticClass:"bar"})])])],2)},s=[],n={render:i,staticRenderFns:s};e.a=n},YaEn:function(t,e,a){"use strict";var i=a("7+uW"),s=a("/ocq"),n=a("ZFc1"),r=a("G7FF"),o=(a("EJg2"),a("uJIk")),c=a("DegP");i.default.use(s.a),e.a=new s.a({mode:"history",linkExactActiveClass:"weui-bar__item_on",routes:[{path:"/",name:"home",redirect:"/hot"},{path:"/hot",name:"hot",component:n.a},{path:"/t/:id",name:"cate",component:n.a},{path:"/search",name:"search",component:r.a,props:function(t){return{query:t.query.q}}},{path:"/guide",name:"guide",component:o.a},{path:"/service/post",name:"servicepost",component:c.a}]})},ZFc1:function(t,e,a){"use strict";function i(t){a("uQ3o")}var s=a("9q/O"),n=a("jFX7"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},Zy5T:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-grids nav-grids"},[a("router-link",{staticClass:"weui-grid",attrs:{to:{name:"hot"}}},[a("p",{staticClass:"weui-grid__label"},[t._v("热门")])]),t._v(" "),t._l(t.showCategory,function(e){return a("router-link",{key:e.ID,staticClass:"weui-grid",attrs:{to:{name:"cate",params:{id:e.ID}}}},[a("p",{staticClass:"weui-grid__label"},[t._v(t._s(e.Title))])])}),t._v(" "),t.hideCategory.length>0?[a("div",{staticClass:"weui-grid",on:{click:function(e){t.showHideCategoryStatus=!t.showHideCategoryStatus}}},[a("p",{staticClass:"weui-grid__label"},[t._v("\r\n               "+t._s(t.showHideCategoryStatus?"<<":">>")+"\r\n               ")])])]:t._e(),t._v(" "),t.showHideCategoryStatus?t._l(t.hideCategory,function(e){return a("router-link",{key:e.ID,staticClass:"weui-grid",attrs:{to:{name:"cate",params:{id:e.ID}}}},[a("p",{staticClass:"weui-grid__label"},[t._v(t._s(e.Title))])])}):t._e()],2)])},s=[],n={render:i,staticRenderFns:s};e.a=n},a0Si:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel__bd"},t._l(t.articles,function(e){return a("div",{key:e.id,staticClass:"weui-media-box weui-media-box_appmsg"},[a("div",{staticClass:"weui-media-box__hd"},[a("a",{attrs:{href:e.URL}},[a("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.Cover}})])]),t._v(" "),a("div",{staticStyle:{width:"30px"}},[a("ul",{staticClass:"weui-media-box__info article-tags"},[a("li",{staticClass:"weui-media-box__info__meta"},[a("span",{on:{click:function(a){t.like(e)}}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"20.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"#cecece",d:"M509.927514 387.159081C517.168621 379.168894 527.507586 379.262447 534.709532 387.493244L805.278364 696.714765C813.036915 705.581679 826.514517 706.480186 835.381431 698.721636 844.248346 690.963085 845.146852 677.485483 837.388303 668.618569L566.819471 359.397045C542.819471 331.968474 502.692194 331.60538 478.31207 358.507586L197.525612 668.340919C189.61372 677.071283 190.277222 690.562496 199.007586 698.474389 207.737949 706.386281 221.229163 705.722778 229.141056 696.992414L509.927514 387.159081Z"}})])])]),t._v(" "),a("li",{staticClass:"weui-media-box__info__meta",staticStyle:{"font-size":"10px","text-align":"center",width:"30px",padding:"0"}},[t._v("\r\n                "+t._s(e.Like-e.Hate)+"\r\n              ")]),t._v(" "),a("li",{staticClass:"weui-media-box__info__meta"},[a("span",{on:{click:function(a){t.hate(e)}}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"20.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"#cecece",d:"M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.278364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z"}})])])])])]),t._v(" "),a("div",{staticClass:"weui-media-box__bd"},[a("a",{attrs:{href:e.URL}},[a("p",{staticClass:"weui-media-box__desc article-title"},[t._v(t._s(e.Title))])]),t._v(" "),a("ul",{staticClass:"weui-media-box__info article-tags"},[a("li",{staticClass:"weui-media-box__info__meta"},[a("router-link",{staticStyle:{color:"#cecece"},attrs:{to:{name:"cate",params:{id:e.MediaTagID}}}},[t._v(t._s(e.MediaTagTitle))])],1),t._v(" "),a("li",{staticClass:"weui-media-box__info__meta"},[a("timeago",{staticClass:"text-muted",attrs:{since:e.PubAt,locale:"zh-CN"}})],1)])])])}))])},s=[],n={render:i,staticRenderFns:s};e.a=n},d2QM:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel_access"},[a("List",{attrs:{cate:t.cate}})],1)])},s=[],n={render:i,staticRenderFns:s};e.a=n},"e9+u":function(t,e,a){"use strict";var i=a("woOf"),s=a.n(i);e.a={name:"quickMenu",props:{menuCount:{type:Number,required:!0,default:4},iconClass:{type:Array,required:!0},menuUrlList:{type:Array,required:!0},backgroundColor:{type:String,default:"#20babb"},color:{type:String,default:"#fff"},isOpenNewTab:{type:Boolean,default:!1},position:{type:String,default:"top-left"}},computed:{openNewTab:function(){return this.isOpenNewTab?"_blank":"_self"},quickMenuStyle:function(){var t={top:"30px"},e={bottom:"30px"},a={left:"30px"},i={right:"30px"},n=this.isTop?t:e;return s()(n,this.isLeft?a:i),s()(n,{transform:this.isLeft?"rotate(-180deg)":"rotate(180deg)"}),n},menuStyle:function(){return{backgroundColor:this.backgroundColor,color:this.color}},subMenuStyle:function(){return{backgroundColor:this.backgroundColor,color:this.color}},isTop:function(){return!!~this.position.toLowerCase().indexOf("top")},isLeft:function(){return!!~this.position.toLowerCase().indexOf("left")}},data:function(){return{menuSize:60,subMenu4:[[["0","-160"],["-80","-138.6"],["-138.6","-80"],["-160","0"]],[["0","-160"],["80","-138.6"],["138.6","-80"],["160","0"]],[["0","160"],["138.6","80"],["80","138.6"],["160","0"]],[["-160","0"],["-138.6","80"],["-80","138.6"],["0","160"]]],subMenu3:[[["-160","0"],["-113","-113"],["0","-160"]],[["0","-160"],["113","-113"],["160","0"]],[["0","160"],["113","113"],["160","0"]],[["-160","0"],["-113","113"],["0","160"]]],subMenu2:[[["-160","0"],["0","-160"]],[["0","-160"],["160","0"]],[["0","160"],["160","0"]],[["-160","0"],["0","160"]]]}},methods:{getSubMenu:function(t){var e=4===this.menuCount?this.subMenu4:3===this.menuCount?this.subMenu3:this.subMenu2;return e=this.isTop&&this.isLeft?e[2]:this.isTop&&!this.isLeft?e[1]:!this.isTop&&this.isLeft?e[3]:e[0],{top:e[t][0]+"px",left:e[t][1]+"px"}},toggleMenu:function(t){var e=this.$refs.quickMenu,a=this.$refs.icon;~e.className.indexOf(" active")?(e.className=e.className.replace(" active",""),a.forEach(function(t,e){t.className=t.className.replace(" menu-animate","")})):(e.className+=" active",a.forEach(function(t,e){t.className+=" menu-animate"}))},mouseEnterSubMenu:function(t){"A"===t.target.tagName?t.target.style.backgroundColor=this.lightenColor(this.backgroundColor,20):"I"===t.target.tagName&&(t.target.parentElement.style.backgroundColor=this.lightenColor(this.backgroundColor,20))},mouseOutSubMenu:function(t){"A"===t.target.tagName?t.target.style.backgroundColor=this.backgroundColor:"I"===t.target.tagName&&(t.target.parentElement.style.backgroundColor=this.backgroundColor)},lightenColor:function(t,e){var a=!1;"#"===t[0]&&(t=t.slice(1),a=!0);var i=parseInt(t,16),s=(i>>16)+e;s>255?s=255:s<0&&(s=0);var n=(i>>8&255)+e;n>255?n=255:n<0&&(n=0);var r=(255&i)+e;return r>255?r=255:r<0&&(r=0),(a?"#":"")+(r|n<<8|s<<16).toString(16)}}}},fhEW:function(t,e){},gyMJ:function(t,e,a){"use strict";var i=a("mtWM"),s=a.n(i);s.a.defaults.baseURL="http://api.readfollow.com",e.a={get:function(t,e){s.a.get(t).then(function(t){e(null,t.data)})},post:function(t,e){s.a.post("/post","url="+encodeURIComponent(t)).then(function(t){e(null,t.data)})}}},hF18:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-media-box weui-media-box_appmsg"},[a("div",{staticClass:"weui-media-box__hd"},[a("a",{attrs:{href:t.article.URL}},[a("img",{staticClass:"weui-media-box__thumb",attrs:{src:t.article.Cover}})])]),t._v(" "),a("div",{staticStyle:{width:"30px"}},[a("ul",{staticClass:"weui-media-box__info article-tags"},[a("li",{staticClass:"weui-media-box__info__meta"},[a("span",{on:{click:function(e){t.like(t.article)}}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"20.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"#cecece",d:"M509.927514 387.159081C517.168621 379.168894 527.507586 379.262447 534.709532 387.493244L805.278364 696.714765C813.036915 705.581679 826.514517 706.480186 835.381431 698.721636 844.248346 690.963085 845.146852 677.485483 837.388303 668.618569L566.819471 359.397045C542.819471 331.968474 502.692194 331.60538 478.31207 358.507586L197.525612 668.340919C189.61372 677.071283 190.277222 690.562496 199.007586 698.474389 207.737949 706.386281 221.229163 705.722778 229.141056 696.992414L509.927514 387.159081Z"}})])])]),t._v(" "),a("li",{staticClass:"weui-media-box__info__meta",staticStyle:{"font-size":"10px","text-align":"center",width:"30px",padding:"0"}},[t._v("\n          "+t._s(t.article.Like-t.article.Hate)+"\n        ")]),t._v(" "),a("li",{staticClass:"weui-media-box__info__meta"},[a("span",{on:{click:function(e){t.hate(t.article)}}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"20.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"#cecece",d:"M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.278364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z"}})])])])])]),t._v(" "),a("div",{staticClass:"weui-media-box__bd"},[a("a",{attrs:{href:t.article.URL}},[a("p",{staticClass:"weui-media-box__desc article-title"},[t._v(t._s(t.article.Title))])]),t._v(" "),a("ul",{staticClass:"weui-media-box__info article-tags"},[a("li",{staticClass:"weui-media-box__info__meta"},[a("router-link",{staticStyle:{color:"#cecece"},attrs:{to:{name:"cate",params:{id:t.article.MediaTagID}}}},[t._v(t._s(t.article.MediaTagTitle))])],1),t._v(" "),a("li",{staticClass:"weui-media-box__info__meta"},[a("timeago",{staticClass:"text-muted",attrs:{since:t.article.PubAt,locale:"zh-CN"}})],1)])])])},s=[],n={render:i,staticRenderFns:s};e.a=n},hoji:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel_access"},[a("weui-search",{attrs:{result:t.defaultResult},on:{"on-submit":t.onSubmit},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}}),t._v(" "),a("ArticleList",{attrs:{articles:t.articles}}),t._v(" "),a("infinite-loading",{ref:"infiniteLoading",attrs:{distance:t.distance},on:{infinite:t.infiniteHandler}},[a("div",{staticClass:"weui-loadmore",attrs:{slot:"spinner"},slot:"spinner"},[a("i",{staticClass:"weui-loading"})]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-results"},slot:"no-results"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("搜索不到内容!")])]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-more"},slot:"no-more"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("到底了!")])])])],1)])},s=[],n={render:i,staticRenderFns:s};e.a=n},jFX7:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel_access"},[a("Search",{attrs:{recommend:t.recommend}}),t._v(" "),a("ArticleList",{attrs:{articles:t.articles}}),t._v(" "),a("infinite-loading",{ref:"infiniteLoading",attrs:{distance:t.distance},on:{infinite:t.infiniteHandler}},[a("div",{staticClass:"weui-loadmore",attrs:{slot:"spinner"},slot:"spinner"},[a("i",{staticClass:"weui-loading"})]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-results"},slot:"no-results"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("载入失败!")])]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-more"},slot:"no-more"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("到底了!")])])])],1),t._v(" "),a("div",{staticClass:"refresh",on:{click:t.refresh}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"rgba(0, 8, 255, 0.50)",d:"M838.695385 374.153846A354.619077 354.619077 0 0 0 512 157.538462a354.461538 354.461538 0 1 0 0 708.923076 354.579692 354.579692 0 0 0 330.161231-225.20123 39.384615 39.384615 0 1 1 73.334154 28.750769A433.309538 433.309538 0 0 1 512 945.230769C272.738462 945.230769 78.769231 751.261538 78.769231 512S272.738462 78.769231 512 78.769231c144.423385 0 275.140923 71.286154 354.461538 183.965538V177.230769a39.384615 39.384615 0 0 1 78.769231 0v236.307693a39.266462 39.266462 0 0 1-39.384615 39.384615h-196.923077a39.384615 39.384615 0 0 1 0-78.769231h129.772308z"}})])])])},s=[],n={render:i,staticRenderFns:s};e.a=n},jYDj:function(t,e,a){"use strict";e.a={name:"weui-cell",props:{title:{type:[String,Number]},value:{type:[String,Number]},isLink:Boolean,to:String},computed:{href:function(){var t=this;if(this.to&&!this.added&&this.$router){var e=this.$router.match(this.to);return e.matched.length?(this.$nextTick(function(){t.added=!0,t.$el.addEventListener("click",t.handleClick)}),e.path):this.to}return this.to}},mounted:function(){},methods:{handleClick:function(t){t.preventDefault(),void 0!==this.href&&this.$router.push(this.href)}}}},jZaD:function(t,e){},kY1z:function(t,e,a){"use strict";var i=a("tcnj"),s=a("qK+J"),n=a.n(s),r=a("gyMJ");e.a={name:"cateP",components:{InfiniteLoading:n.a,List:i.a,cate:[]},data:function(){return{cate:0,tag:[]}},mounted:function(){this.cate=this.$route.params.id},methods:{GetTagInfo:function(){var t=this;r.a.get("/tag/"+t.cate,function(e,a){t.tag=a})}},watch:{$route:function(){this.cate=this.$route.params.id}}}},lV4F:function(t,e){},"mOt/":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.to?a("a",{staticClass:"weui-cell",class:{"weui-cell_access":t.isLink},attrs:{href:t.href}},[a("div",{staticClass:"weui-cell_hd"},[t._t("icon")],2),t._v(" "),a("div",{staticClass:"weui-cell__bd"},[t._t("bd",[a("p",{domProps:{innerHTML:t._s(t.title)}})])],2),t._v(" "),a("div",{staticClass:"weui-cell__ft"},[t._t("ft",[t._v(t._s(t.value))])],2)]):a("div",{staticClass:"weui-cell",class:{"weui-cell_access":t.isLink}},[a("div",{staticClass:"weui-cell_hd"},[t._t("icon")],2),t._v(" "),a("div",{staticClass:"weui-cell__bd"},[t._t("bd",[a("p",{domProps:{innerHTML:t._s(t.title)}})])],2),t._v(" "),a("div",{staticClass:"weui-cell__ft"},[t._t("ft",[t._v(t._s(t.value))])],2)])},s=[],n={render:i,staticRenderFns:s};e.a=n},oboO:function(t,e,a){"use strict";function i(t){a("lV4F")}var s=a("6Vc0"),n=a("hF18"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},p3ks:function(t,e,a){"use strict";function i(t){a("OQ2W")}var s=a("e9+u"),n=a("WKKX"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);c.exports},pViU:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showload?a("div",{attrs:{id:"loadingToast"}},[a("div",{staticClass:"weui-mask_transparent"}),t._v(" "),t._m(0)]):t._e(),t._v(" "),a("div",{staticClass:"weui-panel__bd"},t._l(t.articles,function(t){return a("ListItem",{key:t.id,attrs:{article:t}})})),t._v(" "),a("infinite-loading",{ref:"infiniteLoading",attrs:{distance:t.distance},on:{infinite:t.infiniteHandler}},[a("div",{staticClass:"weui-loadmore",attrs:{slot:"spinner"},slot:"spinner"},[a("i",{staticClass:"weui-loading"})]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-results"},slot:"no-results"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("加载不出内容!")])]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-more"},slot:"no-more"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("到底了!")])])]),t._v(" "),a("div",{staticClass:"refresh",on:{click:t.refresh}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"rgba(0, 8, 255, 0.50)",d:"M838.695385 374.153846A354.619077 354.619077 0 0 0 512 157.538462a354.461538 354.461538 0 1 0 0 708.923076 354.579692 354.579692 0 0 0 330.161231-225.20123 39.384615 39.384615 0 1 1 73.334154 28.750769A433.309538 433.309538 0 0 1 512 945.230769C272.738462 945.230769 78.769231 751.261538 78.769231 512S272.738462 78.769231 512 78.769231c144.423385 0 275.140923 71.286154 354.461538 183.965538V177.230769a39.384615 39.384615 0 0 1 78.769231 0v236.307693a39.266462 39.266462 0 0 1-39.384615 39.384615h-196.923077a39.384615 39.384615 0 0 1 0-78.769231h129.772308z"}})])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-toast"},[a("i",{staticClass:"weui-loading weui-icon_toast"})])}],n={render:i,staticRenderFns:s};e.a=n},sK4r:function(t,e,a){"use strict";var i=a("qK+J"),s=a.n(i),n=a("gyMJ");e.a={name:"ArticleList",components:{InfiniteLoading:s.a},props:["articles"],mounted:function(){},methods:{like:function(t){var e=this;e.showload=!0,n.a.get("/like/"+t.ID,function(a,i){t.Like=i.Like,e.showload=!1})},hate:function(t){var e=this;e.showload=!0,n.a.get("/hate/"+t.ID,function(a,i){t.Hate=i.Hate,e.showload=!1})}},watch:{articles:function(){}}}},tND7:function(t,e,a){"use strict";function i(t){a("jZaD")}var s=a("sK4r"),n=a("a0Si"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},tcnj:function(t,e,a){"use strict";function i(t){a("FLfE")}var s=a("0pd7"),n=a("pViU"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},teIl:function(t,e,a){"use strict";function i(t){a("9AXx")}var s=a("HCTz"),n=a("Zy5T"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},uCL5:function(t,e){},uJIk:function(t,e,a){"use strict";var i=a("vP82"),s=a("4qE/"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.a=r.exports},uQ3o:function(t,e){},v2ns:function(t,e){},vP82:function(t,e,a){"use strict";var i=a("gyMJ"),s=a("/KFX");e.a={name:"app",data:function(){return{url:"",recommend:!0}},methods:{submit:function(t){i.a.post(this.url,function(t,e){"0"==e?alert("收录失败"):alert("收录成功")})}},components:{Search:s.a}}},xJD8:function(t,e,a){"use strict";var i=a("teIl");a("p3ks");e.a={name:"app",components:{HeaderTab:i.a},data:function(){return{}},computed:{}}}},["NHnr"]);
//# sourceMappingURL=app.7d4d13e9d08e51cecb57.js.map