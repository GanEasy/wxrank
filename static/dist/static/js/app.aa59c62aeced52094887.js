webpackJsonp([0],{"+0iw":function(t,e,a){"use strict";var i=a("L9TO");e.a={name:"app",data:function(){return{url:""}},methods:{submit:function(t){i.a.post(this.url,function(t,e){"0"==e?alert("收录失败"):alert("收录成功")})}},components:{}}},"+p9J":function(t,e,a){"use strict";e.a={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},"/Cwh":function(t,e){},"07PK":function(t,e,a){"use strict";e.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vussssse.js App"}}}},"3CnE":function(t,e){},"6zux":function(t,e){},"7oBO":function(t,e,a){"use strict";var i="undefined"!=typeof window;i&&(window.Swiper=a("gsqX")),e.a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var a in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(a)&&t.options[a]&&(e=!0,t.defaultSwiperClasses[a]=t.options[a]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},"9q/O":function(t,e,a){"use strict";var i=a("UbqW"),s=a("qK+J"),n=a.n(s);a("L9TO");e.a={name:"indexP",components:{InfiniteLoading:n.a,ArticleList:i.a},data:function(){return{cate:0}},mounted:function(){},methods:{},watch:{cate:function(){console.log(this.cate)}}}},"Dc+z":function(t,e){},EJg2:function(t,e,a){"use strict";function i(t){a("Penv")}var s=a("kY1z"),n=a("Y/co"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},GpVm:function(t,e,a){"use strict";var i=a("+0iw"),s=a("glPH"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.a=r.exports},HCTz:function(t,e,a){"use strict";var i=a("L9TO");e.a={props:{title:{type:String},backTo:{type:String,default:"/hot"}},data:function(){return{tags:[],category:[]}},methods:{GetCate:function(){var t=this;i.a.get("/tags?type=cate",function(e,a){t.category=a})},back:function(){this.$router.push(this.backTo)}},mounted:function(){this.GetCate()}}},JAge:function(t,e){},L9Rs:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],n={render:i,staticRenderFns:s};e.a=n},L9TO:function(t,e,a){"use strict";var i=a("mtWM"),s=a.n(i);s.a.defaults.baseURL="http://api.readfollow.com",e.a={getNew:function(t,e){s.a.get(t).then(function(t){e(null,t.data)})},view:function(t,e){s.a.get("/view/"+t).then(function(t){e(null,t.data)})},get:function(t,e){s.a.get(t).then(function(t){e(null,t.data)})},post:function(t,e){s.a.post("/post","url="+encodeURIComponent(t)).then(function(t){e(null,t.data)})}}},LB3p:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},s=[],n={render:i,staticRenderFns:s};e.a=n},"M/Lt":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel__hd"},[a("div",{staticClass:"weui-flex navber"},[a("router-link",{staticClass:"weui-flex__item",attrs:{to:{name:"hot"}}},[t._v("\r\n            热门\r\n          ")]),t._v(" "),t._l(t.category,function(e){return a("router-link",{key:e.ID,staticClass:"weui-flex__item",attrs:{to:{name:"cate",params:{id:e.ID}}}},[t._v("\r\n             "+t._s(e.Title)+"\r\n          ")])})],2)])])},s=[],n={render:i,staticRenderFns:s};e.a=n},M93x:function(t,e,a){"use strict";function i(t){a("sgUW")}var s=a("xJD8"),n=a("pyK6"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},"N+zL":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("+p9J"),s=a("LB3p"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.default=r.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("O694"),s=(a.n(i),a("v2ns")),n=(a.n(s),a("7+uW")),r=a("M93x"),o=a("YaEn"),c=a("mtWM"),l=a.n(c),u=a("Rf8U"),d=a.n(u),v=a("cTzj"),f=a.n(v),p=a("IPdH"),_=a.n(p),m=a("XcbY"),h=a.n(m);n.default.config.productionTip=!1;var w=a("F3EI");n.default.use(_.a,{name:"timeago",locale:"zh-CN",locales:{"zh-CN":a("gkDd")}}),n.default.use(d.a,l.a),n.default.use(f.a),n.default.component(h.a.name,h.a),n.default.use(w),o.a.beforeEach(function(t,e,a){var i=localStorage.getItem("__to")||"";t.path!=e.path&&i!=t.path&&(localStorage.removeItem("articles"),localStorage.removeItem("rank")),localStorage.setItem("__to",t.path),a()}),new n.default({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},O694:function(t,e){},PRh6:function(t,e,a){t.exports=a.p+"static/img/xiaohuihuiwx.142d153.jpg"},Penv:function(t,e){},QWye:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{ref:"swiper",attrs:{options:t.swiperOption}},[a("swiper-slide",{staticClass:"menu"},[t._v("Menu slide")]),t._v(" "),a("swiper-slide",{staticClass:"content"},[t._v("\r\n    \r\n    Content slide\r\n  ")])],1),t._v(" "),a("div",{staticClass:"weui-panel weui-panel_access"},[a("div",{staticClass:"weui-panel__hd"},[t._v("文博最新文章")]),t._v(" "),a("div",{staticClass:"weui-panel__bd"},t._l(t.articles,function(e){return a("div",{key:e.id,staticClass:"weui-media-box weui-media-box_appmsg"},[a("div",{staticClass:"weui-media-box__hd"},[a("a",{attrs:{href:[e.URL]},on:{click:function(a){t.cliLink(e)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.Cover,expression:"article.Cover"}],staticClass:"weui-media-box__thumb"})])]),t._v(" "),a("div",{staticClass:"weui-media-box__bd"},[a("h4",{staticClass:"weui-media-box__title"},[t._v(t._s(e.Title))]),t._v(" "),a("p",{staticClass:"weui-media-box__desc"},[t._v(t._s(e.Intro))])])])})),t._v(" "),a("infinite-loading",{ref:"infiniteLoading",attrs:{distance:t.distance},on:{infinite:t.infiniteHandler}},[a("div",{staticClass:"weui-loadmore",attrs:{slot:"spinner"},slot:"spinner"},[a("i",{staticClass:"weui-loading"}),t._v(" "),a("span",{staticClass:"weui-loadmore__tips"},[t._v("正在加载")])]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-results"},slot:"no-results"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("暂无数据")])]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-more"},slot:"no-more"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("到底啦！")])])])],1)],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},QyGC:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showload?a("div",{attrs:{id:"loadingToast"}},[a("div",{staticClass:"weui-mask_transparent"}),t._v(" "),t._m(0)]):t._e(),t._v(" "),a("div",{staticClass:"weui-panel__bd"},t._l(t.articles,function(e){return a("a",{key:e.id,staticClass:"weui-media-box weui-media-box_appmsg",on:{click:function(a){t.cliLink(e)}}},[a("div",{staticClass:"weui-media-box__hd"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.Cover,expression:"article.Cover"}],staticClass:"weui-media-box__thumb"})]),t._v(" "),a("div",{staticClass:"weui-media-box__bd"},[a("p",{staticClass:"weui-media-box__desc article-title"},[t._v(t._s(e.Title))]),t._v(" "),a("ul",{staticClass:"weui-media-box__info article-tags"},[a("li",{staticClass:"weui-media-box__info__meta"},[t._v(t._s(e.Media.AppName))]),t._v(" "),a("li",{staticClass:"weui-media-box__info__meta"},[a("timeago",{staticClass:"text-muted",attrs:{since:e.PubAt,locale:"zh-CN"}})],1)])])])})),t._v(" "),a("infinite-loading",{ref:"infiniteLoading",attrs:{distance:t.distance},on:{infinite:t.infiniteHandler}},[a("div",{staticClass:"weui-loadmore",attrs:{slot:"spinner"},slot:"spinner"},[a("i",{staticClass:"weui-loading"})]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-results"},slot:"no-results"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("暂无数据!")])]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-more"},slot:"no-more"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("无法加载更多数据!")])])]),t._v(" "),a("div",{staticClass:"refresh",on:{click:t.refresh}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"rgba(0, 8, 255, 0.57)",d:"M958.174805 481.820654c-1.017166-35.661198-5.421476-91.061972-32.872688-144.119375L774.270309 509.142929l125.009132 0c0.002047 0.827855 0.00307 1.650593 0.00307 2.51017 0 213.726709-173.881213 387.607922-387.607922 387.607922-213.727733 0-387.608945-173.881213-387.608945-387.607922 0-210.105229 181.584662-387.608945 396.521942-387.608945 39.323611 0 78.106916 5.861498 115.27442 17.421788l17.693987-56.888661c-42.902112-13.343913-87.639013-20.10899-132.968407-20.10899-60.358693 0-119.340015 11.80486-175.303608 35.0861-54.135968 22.520923-102.939487 54.68139-145.05263 95.588055-42.355667 41.141002-75.673493 88.934518-99.028411 142.051273-24.360827 55.404867-36.713156 114.100688-36.713156 174.459381 0 119.447463 46.515407 231.745085 130.977054 316.207755C279.929504 912.322501 392.227126 958.837908 511.674589 958.837908c119.447463 0 231.745085-46.515407 316.207755-130.977054s130.977054-196.760293 130.977054-316.207755C958.859397 499.757165 958.672132 490.187205 958.174805 481.820654z"}})])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-toast"},[a("i",{staticClass:"weui-loading weui-icon_toast"})])}],n={render:i,staticRenderFns:s};e.a=n},TGEz:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel weui-panel_access"},[a("ArticleList",{attrs:{cate:t.cate}})],1)])},s=[],n={render:i,staticRenderFns:s};e.a=n},UOlw:function(t,e,a){"use strict";var i=a("UbqW"),s=a("qK+J"),n=a.n(s);a("L9TO");e.a={name:"indexP",components:{InfiniteLoading:n.a,ArticleList:i.a},data:function(){return{cate:0}},mounted:function(){},methods:{},watch:{cate:function(){console.log(this.cate)}}}},UbqW:function(t,e,a){"use strict";function i(t){a("3CnE")}var s=a("vEfN"),n=a("QyGC"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},"Y/co":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel weui-panel_access"},[a("ArticleList",{attrs:{cate:t.cate}})],1)])},s=[],n={render:i,staticRenderFns:s};e.a=n},YaEn:function(t,e,a){"use strict";var i=a("7+uW"),s=a("/ocq"),n=(a("gORT"),a("j7e0"),a("ZFc1")),r=a("e9i9"),o=a("GpVm"),c=a("EJg2"),l=a("scQb");i.default.use(s.a),e.a=new s.a({mode:"history",linkExactActiveClass:"weui-bar__item_on",routes:[{path:"/",name:"home",redirect:"/hot"},{path:"/hot",name:"hot",component:n.a},{path:"/new",component:r.a},{path:"/post",component:o.a},{path:"/tags",name:"tags",component:l.a},{path:"/cate/:id",name:"cate",component:c.a}]})},ZFc1:function(t,e,a){"use strict";function i(t){a("/Cwh")}var s=a("9q/O"),n=a("TGEz"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},azJr:function(t,e){},c4y1:function(t,e,a){"use strict";var i=a("qK+J"),s=a.n(i),n=a("L9TO");e.a={name:"indexP",components:{InfiniteLoading:s.a},data:function(){return{tags:[],category:[]}},mounted:function(){setTimeout(function(){},200),this.GetCate()},methods:{GetCate:function(){var t=this;n.a.getNew("/tags?type=cate",function(e,a){t.category=a})}}}},e9i9:function(t,e,a){"use strict";function i(t){a("Dc+z")}var s=a("wl1v"),n=a("QWye"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,"data-v-a6c7c404",null);e.a=c.exports},gORT:function(t,e,a){"use strict";function i(t){a("6zux")}var s=a("07PK"),n=a("L9Rs"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,"data-v-f34be2ce",null);c.exports},gkDd:function(t,e){t.exports=["刚刚","%s 秒前","%s 分钟前","%s 小时前","%s 天前","%s 周前","%s 月前","%s 年前"]},glPH:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-9 order-md-1  text-md-left pr-md-5"},[a("br"),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[a("h3",[t._v("手动提交")]),a("br"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("微信文章地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"url",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"请粘贴微信文章链接地址"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("请粘贴微信文章地址，我们系统将会进行验证和收录.")])]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("提交")]),t._v(" "),a("br"),t._v(" "),a("br")])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:" mx-auto col-md-3 order-md-2"},[i("br"),t._v(" "),i("h3",[t._v("通过微信号分享")]),t._v(" "),i("p"),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[t._v("小灰灰(机器人)")]),t._v(" "),i("img",{staticClass:"card-img",attrs:{src:a("PRh6"),alt:"小灰灰微信"}}),t._v(" "),i("p",{staticClass:"card-text"},[t._v("如果您有更多的文章要分享，可以添加我们的微信，把要分享文章发送给我们！")])])])])}],n={render:i,staticRenderFns:s};e.a=n},j7e0:function(t,e,a){"use strict";function i(t){a("sAWF")}var s=a("UOlw"),n=a("kIBa"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);c.exports},kIBa:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel weui-panel_access"},[a("div",{staticClass:"weui-panel__hd"},[a("span",[t._v("\r\n      跟读微信文章\r\n    ")]),t._v(" "),a("label",{staticClass:"weui-agree",attrs:{for:"weuiAgree"}},[a("router-link",{staticClass:"weui-agree__text",attrs:{to:{name:"tags"}}},[t._v("全部分类 ")])],1)]),t._v(" "),a("ArticleList",{attrs:{cate:t.cate}})],1)])},s=[],n={render:i,staticRenderFns:s};e.a=n},kY1z:function(t,e,a){"use strict";var i=a("UbqW"),s=a("qK+J"),n=a.n(s),r=a("L9TO");e.a={name:"cateP",components:{InfiniteLoading:n.a,ArticleList:i.a,cate:[]},data:function(){return{cate:0,tag:[]}},mounted:function(){this.cate=this.$route.params.id},methods:{GetTagInfo:function(){var t=this;r.a.getNew("/tag/"+t.cate,function(e,a){t.tag=a})}},watch:{cate:function(){},$route:function(){this.cate=this.$route.params.id}}}},mz9q:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),a("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},s=[],n={render:i,staticRenderFns:s};e.a=n},pYmz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7oBO"),s=a("mz9q"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.default=r.exports},pyK6:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header-tab"),t._v(" "),a("router-view"),t._v(" "),a("vm-back-top",{attrs:{bottom:20,timing:"ease"}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"rgba(0, 8, 255, 0.57)",d:"M936.3 667.6L823.1 780.7 512 469.6 200.9 780.7 87.7 667.6 512 243.3l424.3 424.3z"}})])])],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},sAWF:function(t,e){},scQb:function(t,e,a){"use strict";function i(t){a("azJr")}var s=a("c4y1"),n=a("zgXX"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},sgUW:function(t,e){},teIl:function(t,e,a){"use strict";function i(t){a("JAge")}var s=a("HCTz"),n=a("M/Lt"),r=a("VU/8"),o=i,c=r(s.a,n.a,!1,o,null,null);e.a=c.exports},v2ns:function(t,e){},vEfN:function(t,e,a){"use strict";var i=a("mvHQ"),s=a.n(i),n=a("qK+J"),r=a.n(n),o=a("L9TO");e.a={name:"ArticleList",components:{InfiniteLoading:r.a},props:["cate"],data:function(){return{articles:[],distance:200,page:0,showload:!1,rank:0}},mounted:function(){this.articles=JSON.parse(window.localStorage.getItem("articles"))||[],this.rank=parseFloat(window.localStorage.getItem("rank"))||0},methods:{cliLink:function(t){var e=this;e.showload=!0,setTimeout(function(){e.showload=!1,window.location.href=t.URL},200),o.a.view(t.ID,function(t,e){})},refresh:function(){var t=this;return setTimeout(function(){t.articles=[],t.rank=0,t.$refs.infiniteLoading.stateChanger.reset()},50),!0},infiniteHandler:function(t){if(this.articles.length>500)t.complete();else{var e=this,a="/hot?limit=10&rank="+e.rank+"&tag="+this.cate;setTimeout(function(){o.a.get(a,function(a,i){if(i.length>0){for(var s=0;s<i.length;s++)e.articles.push(i[s]);e.rank=i[i.length-1].Rank,t.loaded(),e.page++}else t.complete()})},200)}}},watch:{articles:function(){localStorage.setItem("articles",s()(this.articles)),localStorage.setItem("rank",this.rank)},cate:function(){(parseInt(window.localStorage.getItem("__cate"))||0)!=parseInt(this.cate)&&(localStorage.setItem("__cate",this.cate),this.refresh())}}}},wl1v:function(t,e,a){"use strict";var i=a("mvHQ"),s=a.n(i),n=a("qK+J"),r=a.n(n),o=a("L9TO");e.a={name:"indexP",components:{InfiniteLoading:r.a},data:function(){return{articles:[],distance:0,page:0}},mounted:function(){this.articles=JSON.parse(window.localStorage.getItem("new_articles"))||[],this.page=parseInt(window.localStorage.getItem("new_page"))||0},methods:{cliLink:function(t){return console.log(t),!1},like:function(t){o.a.like(t.ID,function(e,a){t.Like=a.Like})},hate:function(t){o.a.hate(t.ID,function(e,a){t.Hate=a.Hate})},infiniteHandler:function(t){if(this.articles.length>20)t.complete();else{var e="/new?limit=5&offset="+5*this.page,a=this;o.a.getNew(e,function(e,i){if(i.length>0){for(var s=0;s<i.length;s++)a.articles.push(i[s]);t.loaded(),a.page++}else t.complete()})}}},watch:{articles:function(){localStorage.setItem("new_articles",s()(this.articles)),localStorage.setItem("new_page",this.page)}}}},xJD8:function(t,e,a){"use strict";var i=a("teIl");e.a={name:"app",components:{HeaderTab:i.a}}},zgXX:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-cells__title"},[t._v("分类列表")]),t._v(" "),a("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"home"}}},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v("全部")])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"})]),t._v(" "),t._l(t.category,function(e){return a("router-link",{key:e.ID,staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"cate",params:{id:e.ID}}}},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v(t._s(e.Title))])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"})])})],2)},s=[],n={render:i,staticRenderFns:s};e.a=n}},["NHnr"]);
//# sourceMappingURL=app.aa59c62aeced52094887.js.map