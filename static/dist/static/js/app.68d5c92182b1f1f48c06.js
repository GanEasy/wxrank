webpackJsonp([0],{"+0iw":function(t,e,a){"use strict";var i=a("L9TO");e.a={name:"app",data:function(){return{url:""}},methods:{submit:function(t){i.a.post(this.url,function(t,e){"0"==e?alert("收录失败"):alert("收录成功")})}},components:{}}},"+p9J":function(t,e,a){"use strict";e.a={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},"07PK":function(t,e,a){"use strict";e.a={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vussssse.js App"}}}},"43Yh":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showload?a("div",{attrs:{id:"loadingToast"}},[a("div",{staticClass:"weui-mask_transparent"}),t._v(" "),t._m(0)]):t._e(),t._v(" "),a("div",{staticClass:"weui-panel__bd"},t._l(t.articles,function(e){return a("a",{key:e.id,staticClass:"weui-media-box weui-media-box_appmsg",on:{click:function(a){t.cliLink(e)}}},[a("div",{staticClass:"weui-media-box__hd"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.Cover,expression:"article.Cover"}],staticClass:"weui-media-box__thumb"})]),t._v(" "),a("div",{staticClass:"weui-media-box__bd"},[a("h4",{staticClass:"weui-media-box__title"},[t._v(t._s(e.Title))]),t._v(" "),a("p",{staticClass:"weui-media-box__desc"},[t._v(t._s(e.Intro))])])])})),t._v(" "),a("infinite-loading",{ref:"infiniteLoading",attrs:{distance:t.distance},on:{infinite:t.infiniteHandler}},[a("div",{staticClass:"weui-loadmore",attrs:{slot:"spinner"},slot:"spinner"},[a("i",{staticClass:"weui-loading"})]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-results"},slot:"no-results"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("暂无数据!")])]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-more"},slot:"no-more"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("无法加载更多数据!")])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-toast"},[a("i",{staticClass:"weui-loading weui-icon_toast"})])}],n={render:i,staticRenderFns:s};e.a=n},"6zux":function(t,e){},"7gaP":function(t,e){},"7oBO":function(t,e,a){"use strict";var i="undefined"!=typeof window;i&&(window.Swiper=a("gsqX")),e.a={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var a in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(a)&&t.options[a]&&(e=!0,t.defaultSwiperClasses[a]=t.options[a]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},BhUp:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel weui-panel_access"},[a("div",{staticClass:"weui-panel__hd"},[t._v("文博最新文章")]),t._v(" "),a("div",{staticClass:"weui-panel__bd"},t._l(t.articles,function(e){return a("div",{key:e.id,staticClass:"weui-media-box weui-media-box_appmsg"},[a("div",{staticClass:"weui-media-box__hd"},[a("a",{attrs:{href:[e.URL]},on:{click:function(a){t.cliLink(e)}}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.Cover,expression:"article.Cover"}],staticClass:"weui-media-box__thumb"})])]),t._v(" "),a("div",{staticClass:"weui-media-box__bd"},[a("h4",{staticClass:"weui-media-box__title"},[t._v(t._s(e.Title))]),t._v(" "),a("p",{staticClass:"weui-media-box__desc"},[t._v(t._s(e.Intro))])])])})),t._v(" "),a("infinite-loading",{ref:"infiniteLoading",attrs:{distance:t.distance},on:{infinite:t.infiniteHandler}},[a("div",{staticClass:"weui-loadmore",attrs:{slot:"spinner"},slot:"spinner"},[a("i",{staticClass:"weui-loading"}),t._v(" "),a("span",{staticClass:"weui-loadmore__tips"},[t._v("正在加载")])]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-results"},slot:"no-results"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("暂无数据")])]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-more"},slot:"no-more"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("到底啦！")])])])],1)])},s=[],n={render:i,staticRenderFns:s};e.a=n},D2dJ:function(t,e){},EJg2:function(t,e,a){"use strict";function i(t){a("EwHv")}var s=a("kY1z"),n=a("hWwf"),r=a("VU/8"),o=i,l=r(s.a,n.a,!1,o,null,null);e.a=l.exports},EwHv:function(t,e){},GpVm:function(t,e,a){"use strict";var i=a("+0iw"),s=a("glPH"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.a=r.exports},GrW9:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel weui-panel_access"},[a("div",{staticClass:"weui-panel__hd"},[a("span",[t._v("\r\n      跟读微信文章\r\n    ")]),t._v(" "),a("label",{staticClass:"weui-agree",attrs:{for:"weuiAgree"}},[a("router-link",{staticClass:"weui-agree__text",attrs:{to:{name:"tags"}}},[t._v("全部分类 ")])],1)]),t._v(" "),a("ArticleList",{attrs:{cate:t.cate}})],1)])},s=[],n={render:i,staticRenderFns:s};e.a=n},HCTz:function(t,e,a){"use strict";e.a={props:{title:{type:String},backTo:{type:String,default:"/"}},methods:{back:function(){this.$router.push(this.backTo)}}}},L9Rs:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],n={render:i,staticRenderFns:s};e.a=n},L9TO:function(t,e,a){"use strict";var i=a("mtWM"),s=a.n(i);s.a.defaults.baseURL="http://api.readfollow.com",e.a={getNew:function(t,e){s.a.get(t).then(function(t){e(null,t.data)})},view:function(t,e){s.a.get("/view/"+t).then(function(t){e(null,t.data)})},post:function(t,e){s.a.post("/post","url="+encodeURIComponent(t)).then(function(t){e(null,t.data)})}}},LB3p:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},s=[],n={render:i,staticRenderFns:s};e.a=n},M93x:function(t,e,a){"use strict";function i(t){a("7gaP")}var s=a("xJD8"),n=a("fEeB"),r=a("VU/8"),o=i,l=r(s.a,n.a,!1,o,null,null);e.a=l.exports},"N+zL":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("+p9J"),s=a("LB3p"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.default=r.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("O694"),s=(a.n(i),a("v2ns")),n=(a.n(s),a("7+uW")),r=a("M93x"),o=a("YaEn"),l=a("mtWM"),c=a.n(l),u=a("Rf8U"),d=a.n(u),p=a("cTzj"),v=a.n(p),f=a("IPdH"),_=a.n(f);n.a.config.productionTip=!1;var m=a("F3EI");n.a.use(_.a,{name:"timeago",locale:"zh-CN",locales:{"zh-CN":a("gkDd")}}),n.a.use(d.a,c.a),n.a.use(v.a),n.a.use(m),o.a.beforeEach(function(t,e,a){var i=localStorage.getItem("__to")||"";t.path!=e.path&&i!=t.path&&(localStorage.removeItem("articles"),localStorage.removeItem("page")),localStorage.setItem("__to",t.path),a()}),new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},O694:function(t,e){},PRh6:function(t,e,a){t.exports=a.p+"static/img/xiaohuihuiwx.142d153.jpg"},SP0A:function(t,e){},UOlw:function(t,e,a){"use strict";var i=a("tND7"),s=a("qK+J"),n=a.n(s);a("L9TO");e.a={name:"indexP",components:{InfiniteLoading:n.a,ArticleList:i.a},data:function(){return{cate:0}},mounted:function(){},methods:{},watch:{}}},YaEn:function(t,e,a){"use strict";var i=a("7+uW"),s=a("/ocq"),n=(a("gORT"),a("j7e0")),r=a("e9i9"),o=a("GpVm"),l=a("EJg2"),c=a("scQb");i.a.use(s.a),e.a=new s.a({linkExactActiveClass:"weui-bar__item_on",routes:[{path:"/",name:"home",component:n.a},{path:"/new",component:r.a},{path:"/post",component:o.a},{path:"/tags",name:"tags",component:c.a},{path:"/cate/:id",name:"cate",component:l.a}]})},azJr:function(t,e){},c4y1:function(t,e,a){"use strict";var i=a("qK+J"),s=a.n(i),n=a("L9TO");e.a={name:"indexP",components:{InfiniteLoading:s.a},data:function(){return{tags:[],category:[]}},mounted:function(){setTimeout(function(){},200),this.GetCate()},methods:{GetCate:function(){var t=this;n.a.getNew("/tags?type=cate",function(e,a){t.category=a})}}}},e9i9:function(t,e,a){"use strict";var i=a("wl1v"),s=a("BhUp"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.a=r.exports},fEeB:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header-tab"),t._v(" "),a("router-view")],1)},s=[],n={render:i,staticRenderFns:s};e.a=n},gORT:function(t,e,a){"use strict";function i(t){a("6zux")}var s=a("07PK"),n=a("L9Rs"),r=a("VU/8"),o=i,l=r(s.a,n.a,!1,o,"data-v-f34be2ce",null);l.exports},gkDd:function(t,e){t.exports=["刚刚","%s 秒前","%s 分钟前","%s 小时前","%s 天前","%s 周前","%s 月前","%s 年前"]},glPH:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-9 order-md-1  text-md-left pr-md-5"},[a("br"),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[a("h3",[t._v("手动提交")]),a("br"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("微信文章地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"url",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"请粘贴微信文章链接地址"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("请粘贴微信文章地址，我们系统将会进行验证和收录.")])]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("提交")]),t._v(" "),a("br"),t._v(" "),a("br")])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:" mx-auto col-md-3 order-md-2"},[i("br"),t._v(" "),i("h3",[t._v("通过微信号分享")]),t._v(" "),i("p"),t._v(" "),i("br"),t._v(" "),i("div",{staticClass:"card"},[i("div",{staticClass:"card-body"},[i("h4",{staticClass:"card-title"},[t._v("小灰灰(机器人)")]),t._v(" "),i("img",{staticClass:"card-img",attrs:{src:a("PRh6"),alt:"小灰灰微信"}}),t._v(" "),i("p",{staticClass:"card-text"},[t._v("如果您有更多的文章要分享，可以添加我们的微信，把要分享文章发送给我们！")])])])])}],n={render:i,staticRenderFns:s};e.a=n},hWwf:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel weui-panel_access"},[a("div",{staticClass:"weui-panel__hd"},[a("span",[t._v("跟读微信文章")]),t._v(" "),a("label",{staticClass:"weui-agree",attrs:{for:"weuiAgree"}},[a("router-link",{staticClass:"weui-agree__text",attrs:{to:{name:"tags"}}},[t._v(t._s(t.tag.Title)+" ")])],1)]),t._v(" "),a("ArticleList",{attrs:{cate:t.cate}})],1)])},s=[],n={render:i,staticRenderFns:s};e.a=n},j7e0:function(t,e,a){"use strict";function i(t){a("SP0A")}var s=a("UOlw"),n=a("GrW9"),r=a("VU/8"),o=i,l=r(s.a,n.a,!1,o,null,null);e.a=l.exports},jtOJ:function(t,e){},kY1z:function(t,e,a){"use strict";var i=a("tND7"),s=a("qK+J"),n=a.n(s),r=a("L9TO");e.a={name:"cateP",components:{InfiniteLoading:n.a,ArticleList:i.a,cate:[]},data:function(){return{cate:0,tag:[]}},mounted:function(){this.cate=this.$route.params.id,this.GetTagInfo()},methods:{GetTagInfo:function(){var t=this;r.a.getNew("/tag/"+t.cate,function(e,a){t.tag=a})}}}},m8hl:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},s=[],n={render:i,staticRenderFns:s};e.a=n},mz9q:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),a("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},s=[],n={render:i,staticRenderFns:s};e.a=n},pYmz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7oBO"),s=a("mz9q"),n=a("VU/8"),r=n(i.a,s.a,!1,null,null,null);e.default=r.exports},sK4r:function(t,e,a){"use strict";var i=a("mvHQ"),s=a.n(i),n=a("qK+J"),r=a.n(n),o=a("L9TO");e.a={name:"ArticleList",components:{InfiniteLoading:r.a},props:["cate"],data:function(){return{articles:[],distance:200,page:0,showload:!1}},mounted:function(){this.articles=JSON.parse(window.localStorage.getItem("articles"))||[],this.page=parseInt(window.localStorage.getItem("page"))||0},methods:{cliLink:function(t){var e=this;e.showload=!0,setTimeout(function(){e.showload=!1,window.location.href=t.URL},200),o.a.view(t.ID,function(t,e){})},refresh:function(){var t=this;return setTimeout(function(){t.articles=[],t.page=0,t.$refs.infiniteLoading.stateChanger.reset()},50),!0},infiniteHandler:function(t){if(this.articles.length>500)t.complete();else{var e="/article?limit=10&offset="+10*this.page+"&tag="+this.cate,a=this;setTimeout(function(){o.a.getNew(e,function(e,i){if(i.length>0){for(var s=0;s<i.length;s++)a.articles.push(i[s]);t.loaded(),a.page++}else t.complete()})},200)}}},watch:{articles:function(){localStorage.setItem("articles",s()(this.articles)),localStorage.setItem("page",this.page)}}}},scQb:function(t,e,a){"use strict";function i(t){a("azJr")}var s=a("c4y1"),n=a("zgXX"),r=a("VU/8"),o=i,l=r(s.a,n.a,!1,o,null,null);e.a=l.exports},tND7:function(t,e,a){"use strict";function i(t){a("D2dJ")}var s=a("sK4r"),n=a("43Yh"),r=a("VU/8"),o=i,l=r(s.a,n.a,!1,o,null,null);e.a=l.exports},teIl:function(t,e,a){"use strict";function i(t){a("jtOJ")}var s=a("HCTz"),n=a("m8hl"),r=a("VU/8"),o=i,l=r(s.a,n.a,!1,o,null,null);e.a=l.exports},v2ns:function(t,e){},wl1v:function(t,e,a){"use strict";var i=a("mvHQ"),s=a.n(i),n=a("qK+J"),r=a.n(n),o=a("L9TO");e.a={name:"indexP",components:{InfiniteLoading:r.a},data:function(){return{articles:[],distance:0,page:0}},mounted:function(){this.articles=JSON.parse(window.localStorage.getItem("new_articles"))||[],this.page=parseInt(window.localStorage.getItem("new_page"))||0},methods:{cliLink:function(t){return console.log(t),!1},like:function(t){o.a.like(t.ID,function(e,a){t.Like=a.Like})},hate:function(t){o.a.hate(t.ID,function(e,a){t.Hate=a.Hate})},infiniteHandler:function(t){if(this.articles.length>20)t.complete();else{var e="/new?limit=5&offset="+5*this.page,a=this;o.a.getNew(e,function(e,i){if(i.length>0){for(var s=0;s<i.length;s++)a.articles.push(i[s]);t.loaded(),a.page++}else t.complete()})}}},watch:{articles:function(){localStorage.setItem("new_articles",s()(this.articles)),localStorage.setItem("new_page",this.page)}}}},xJD8:function(t,e,a){"use strict";var i=a("teIl");e.a={name:"app",components:{HeaderTab:i.a}}},zgXX:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-cells__title"},[t._v("分类列表")]),t._v(" "),a("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"home"}}},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v("全部")])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"})]),t._v(" "),t._l(t.category,function(e){return a("router-link",{key:e.ID,staticClass:"weui-cell weui-cell_access",attrs:{to:{name:"cate",params:{id:e.ID}}}},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v(t._s(e.Title))])]),t._v(" "),a("div",{staticClass:"weui-cell__ft"})])})],2)},s=[],n={render:i,staticRenderFns:s};e.a=n}},["NHnr"]);
//# sourceMappingURL=app.68d5c92182b1f1f48c06.js.map