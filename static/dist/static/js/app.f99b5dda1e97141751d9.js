webpackJsonp([1],{"/xnH":function(t,e){},"0pd7":function(t,e,a){"use strict";var i=a("mvHQ"),n=a.n(i),s=a("qK+J"),r=a.n(s),o=a("oboO"),c=a("gyMJ");e.a={name:"ArticleList",components:{InfiniteLoading:r.a,ListItem:o.a},props:["cate"],data:function(){return{articles:[],distance:200,page:0,showload:!1,rank:0,loading:!1}},mounted:function(){this.articles=JSON.parse(window.localStorage.getItem("articles"))||[],this.rank=parseFloat(window.localStorage.getItem("rank"))||0},methods:{refresh:function(){var t=this;return setTimeout(function(){t.articles=[],t.rank=0,t.$refs.infiniteLoading.stateChanger.reset()},50),!0},infiniteHandler:function(t){var e=this;if(!e.loading)if(this.articles.length>500)t.complete();else{e.loading=!0;var a="/hot?limit=10&rank="+e.rank+"&tag="+this.cate;c.a.get(a,function(a,i){if(i.length>0){for(var n=0;n<i.length;n++)e.articles.push(i[n]);e.rank=i[i.length-1].Rank,t.loaded(),e.page++}else t.complete();e.loading=!1})}}},watch:{articles:function(){localStorage.setItem("articles",n()(this.articles)),localStorage.setItem("rank",this.rank)},cate:function(){(parseInt(window.localStorage.getItem("__cate"))||0)!=parseInt(this.cate)&&(localStorage.setItem("__cate",this.cate),this.refresh())}}}},"6B6M":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-media-box weui-media-box_appmsg"},[a("div",{staticClass:"weui-media-box__bd"},[a("a",{attrs:{href:t.article.URL}},[a("p",{staticClass:"weui-media-box__desc article-title"},[t._v(t._s(t.article.Title))])]),t._v(" "),a("ul",{staticClass:"weui-media-box__info article-tags"},[a("li",{staticClass:"weui-media-box__info__meta"},[t._v(t._s(t.article.Media.AppName))]),t._v(" "),a("li",{staticClass:"weui-media-box__info__meta"},[a("timeago",{staticClass:"text-muted",attrs:{since:t.article.PubAt,locale:"zh-CN"}})],1)])]),t._v(" "),a("div",{staticStyle:{width:"30px"}},[a("ul",{staticClass:"weui-media-box__info article-tags"},[a("li",{staticClass:"weui-media-box__info__meta"},[a("span",{on:{click:function(e){t.like(t.article)}}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"20.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"#cecece",d:"M509.927514 387.159081C517.168621 379.168894 527.507586 379.262447 534.709532 387.493244L805.278364 696.714765C813.036915 705.581679 826.514517 706.480186 835.381431 698.721636 844.248346 690.963085 845.146852 677.485483 837.388303 668.618569L566.819471 359.397045C542.819471 331.968474 502.692194 331.60538 478.31207 358.507586L197.525612 668.340919C189.61372 677.071283 190.277222 690.562496 199.007586 698.474389 207.737949 706.386281 221.229163 705.722778 229.141056 696.992414L509.927514 387.159081Z"}})])])]),t._v(" "),a("li",{staticClass:"weui-media-box__info__meta",staticStyle:{"font-size":"10px","text-align":"center",width:"30px",padding:"0"}},[t._v("\n          "+t._s(t.article.Like-t.article.Hate)+"\n        ")]),t._v(" "),a("li",{staticClass:"weui-media-box__info__meta"},[a("span",{on:{click:function(e){t.hate(t.article)}}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"20.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"#cecece",d:"M478.31207 644.159081C502.692194 671.061286 542.819471 670.698193 566.819471 643.269621L837.388303 334.048098C845.146852 325.181184 844.248346 311.703582 835.381431 303.94503 826.514517 296.186481 813.036915 297.084988 805.278364 305.951902L534.709532 615.173423C527.507586 623.40422 517.168621 623.497773 509.927514 615.507586L229.141056 305.674253C221.229163 296.943889 207.737949 296.280386 199.007586 304.192277 190.277222 312.104171 189.61372 325.595383 197.525612 334.325747L478.31207 644.159081Z"}})])])])])]),t._v(" "),a("div",{staticClass:"weui-media-box__hd"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.article.Cover,expression:"article.Cover"}],staticClass:"weui-media-box__thumb"})])])},n=[],s={render:i,staticRenderFns:n};e.a=s},"6Vc0":function(t,e,a){"use strict";var i=a("gyMJ");e.a={name:"ListItem",props:["article"],data:function(){return{}},methods:{like:function(t){var e=this;e.showload=!0,i.a.get("/like/"+t.ID,function(a,i){t.Like=i.Like,e.showload=!1})},hate:function(t){var e=this;e.showload=!0,i.a.get("/hate/"+t.ID,function(a,i){t.Hate=i.Hate,e.showload=!1})}}}},"8EAm":function(t,e,a){"use strict";var i=a("gyMJ"),n=a("NSTN");e.a={name:"app",data:function(){return{url:"",showSuccess:!1,showWarn:!1}},methods:{submit:function(t){var e=this;""!=e.url?(setTimeout(function(){e.posting=!1},200),e.posting=!0,i.a.post(e.url,function(t,a){"0"==a?alert("提交失败"):(""==e.url&&(e.showSuccess=!0),e.url="")})):e.showWarn=!0}},components:{"weui-textarea":n.a}}},"9q/O":function(t,e,a){"use strict";var i=a("tcnj"),n=a("qK+J"),s=a.n(n);e.a={name:"indexP",components:{InfiniteLoading:s.a,List:i.a},data:function(){return{cate:0}},mounted:function(){},methods:{},watch:{cate:function(){console.log(this.cate)}}}},CEdF:function(t,e){},DTFK:function(t,e,a){"use strict";e.a={name:"weui-textarea",props:{placeholder:String,showCounter:{type:Boolean,default:!1},rows:{type:[Number,String],default:3},maxLength:{type:[Number,String],default:200},value:String},data:function(){return{currentValue:this.value}},computed:{length:function(){return this.currentValue?this.currentValue.length:0}},mounted:function(){this.currentValue=this.value},watch:{currentValue:function(t){this.$emit("input",t)},value:function(t){this.maxLength&&this.value.length>this.maxLength&&(t=t.slice(0,this.maxLength)),this.currentValue=t}}}},DegP:function(t,e,a){"use strict";var i=a("8EAm"),n=a("P/Cu"),s=a("VU/8"),r=s(i.a,n.a,!1,null,null,null);e.a=r.exports},Djoo:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell "},[a("div",{staticClass:"weui-cell__bd"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"rextarea",staticClass:"weui-textarea",attrs:{placeholder:t.placeholder,rows:t.rows},domProps:{value:t.currentValue},on:{change:function(e){t.$emit("change",t.currentValue)},input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),t.showCounter?a("div",{staticClass:"weui-textarea-counter"},[a("span",[t._v(t._s(t.length))]),t._v("/"+t._s(t.maxLength))]):t._e()])])},n=[],s={render:i,staticRenderFns:n};e.a=s},Dzrq:function(t,e){},EJg2:function(t,e,a){"use strict";function i(t){a("/xnH")}var n=a("kY1z"),s=a("oQnW"),r=a("VU/8"),o=i,c=r(n.a,s.a,!1,o,null,null);e.a=c.exports},HCTz:function(t,e,a){"use strict";var i=a("gyMJ");e.a={props:{title:{type:String},backTo:{type:String,default:"/hot"}},data:function(){return{tags:[],category:[],swiperOption2:{pagination:".swiper-pagination",slidesPerView:6,initialSlide:6,paginationClickable:!0,spaceBetween:0}}},methods:{GetCate:function(){var t=this;i.a.get("/tags?type=cate",function(e,a){t.category=a})},back:function(){this.$router.push(this.backTo)}},mounted:function(){this.GetCate()}}},Jvkn:function(t,e){},M93x:function(t,e,a){"use strict";function i(t){a("Dzrq")}var n=a("xJD8"),s=a("fLVc"),r=a("VU/8"),o=i,c=r(n.a,s.a,!1,o,null,null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("O694"),n=(a.n(i),a("v2ns")),s=(a.n(n),a("7+uW")),r=a("M93x"),o=a("YaEn"),c=a("mtWM"),l=a.n(c),u=a("Rf8U"),d=a.n(u),_=a("cTzj"),v=a.n(_),f=a("IPdH"),h=a.n(f),m=a("XcbY"),p=a.n(m);a("gyMJ");s.default.config.productionTip=!1,s.default.use(h.a,{name:"timeago",locale:"zh-CN",locales:{"zh-CN":["","","","%sh","%sd","%sw","%sm","%sy"]}}),s.default.use(d.a,l.a),s.default.use(v.a),s.default.component(p.a.name,p.a),o.a.beforeEach(function(t,e,a){var i=localStorage.getItem("__to")||"";t.path!=e.path&&i!=t.path&&(localStorage.removeItem("articles"),localStorage.removeItem("rank")),localStorage.setItem("__to",t.path),a()}),new s.default({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},NSTN:function(t,e,a){"use strict";var i=a("DTFK"),n=a("Djoo"),s=a("VU/8"),r=s(i.a,n.a,!1,null,null,null);e.a=r.exports},O694:function(t,e){},"P/Cu":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showSuccess?a("div",[a("div",{staticClass:"weui-mask"}),t._v(" "),a("div",{staticClass:"weui-dialog"},[t._m(0),t._v(" "),a("div",{staticClass:"weui-dialog__bd"},[t._v("请耐心等候文章链接审核通过！")]),t._v(" "),a("div",{staticClass:"weui-dialog__ft"},[a("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:function(e){t.showSuccess=!1}}},[t._v("确定")])])])]):t._e(),t._v(" "),t.showWarn?a("div",[a("div",{staticClass:"weui-mask"}),t._v(" "),a("div",{staticClass:"weui-dialog"},[t._m(1),t._v(" "),a("div",{staticClass:"weui-dialog__bd"},[t._v("请检查分享的链接是否正常")]),t._v(" "),a("div",{staticClass:"weui-dialog__ft"},[a("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:function(e){t.showSuccess=!1}}},[t._v("确定")])])])]):t._e(),t._v(" "),a("form",{on:{submit:function(e){e.preventDefault(),t.submit(e)}}},[a("div",{staticClass:"weui-cells__title"},[t._v("自助服务 > 分享公众号文章")]),t._v(" "),a("div",{staticClass:"weui-cells__title"},[t._v("请粘贴待分享文章链接地址")]),t._v(" "),a("weui-textarea",{attrs:{placeholder:"如果您有优质微信公众号文章要分享，请提交其文章链接，通过审核后将收录、展示。"},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),t._v(" "),t._m(2)],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-dialog__hd"},[a("strong",{staticClass:"weui-dialog__title"},[t._v("分享成功")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-dialog__hd"},[a("strong",{staticClass:"weui-dialog__title"},[t._v("分享失败")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-btn-area"},[a("button",{staticClass:"weui-btn weui-btn_primary",attrs:{type:"submit"}},[t._v("分享")])])}],s={render:i,staticRenderFns:n};e.a=s},SIL2:function(t,e){},SIi5:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel_access"},[a("List",{attrs:{cate:t.cate}})],1)])},n=[],s={render:i,staticRenderFns:n};e.a=s},SdWN:function(t,e){},VkO8:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel__hd hd_no_boder"},[a("div",{staticClass:"weui-flex navber"},[a("router-link",{staticClass:"weui-flex__item",attrs:{to:{name:"hot"}}},[t._v("\r\n            热门\r\n          ")]),t._v(" "),t._l(t.category,function(e){return a("router-link",{key:e.ID,staticClass:"weui-flex__item",attrs:{to:{name:"cate",params:{id:e.ID}}}},[t._v("\r\n             "+t._s(e.Title)+"\r\n          ")])})],2)])])},n=[],s={render:i,staticRenderFns:n};e.a=s},YaEn:function(t,e,a){"use strict";var i=a("7+uW"),n=a("/ocq"),s=a("ZFc1"),r=a("EJg2"),o=a("DegP");i.default.use(n.a),e.a=new n.a({mode:"history",linkExactActiveClass:"weui-bar__item_on",routes:[{path:"/",name:"home",redirect:"/hot"},{path:"/hot",name:"hot",component:s.a},{path:"/t/:id",name:"cate",component:r.a},{path:"/service/post",name:"servicepost",component:o.a}]})},ZFc1:function(t,e,a){"use strict";function i(t){a("Jvkn")}var n=a("9q/O"),s=a("SIi5"),r=a("VU/8"),o=i,c=r(n.a,s.a,!1,o,null,null);e.a=c.exports},"f/Fd":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showload?a("div",{attrs:{id:"loadingToast"}},[a("div",{staticClass:"weui-mask_transparent"}),t._v(" "),t._m(0)]):t._e(),t._v(" "),a("div",{staticClass:"weui-panel__bd"},t._l(t.articles,function(t){return a("ListItem",{key:t.id,attrs:{article:t}})})),t._v(" "),a("infinite-loading",{ref:"infiniteLoading",attrs:{distance:t.distance},on:{infinite:t.infiniteHandler}},[a("div",{staticClass:"weui-loadmore",attrs:{slot:"spinner"},slot:"spinner"},[a("i",{staticClass:"weui-loading"})]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-results"},slot:"no-results"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("暂无数据!")])]),t._v(" "),a("div",{staticClass:"weui-loadmore weui-loadmore_line",attrs:{slot:"no-more"},slot:"no-more"},[a("span",{staticClass:"weui-loadmore__tips"},[t._v("无法加载更多数据!")])])]),t._v(" "),a("div",{staticClass:"refresh",on:{click:t.refresh}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"rgba(0, 8, 255, 0.50)",d:"M838.695385 374.153846A354.619077 354.619077 0 0 0 512 157.538462a354.461538 354.461538 0 1 0 0 708.923076 354.579692 354.579692 0 0 0 330.161231-225.20123 39.384615 39.384615 0 1 1 73.334154 28.750769A433.309538 433.309538 0 0 1 512 945.230769C272.738462 945.230769 78.769231 751.261538 78.769231 512S272.738462 78.769231 512 78.769231c144.423385 0 275.140923 71.286154 354.461538 183.965538V177.230769a39.384615 39.384615 0 0 1 78.769231 0v236.307693a39.266462 39.266462 0 0 1-39.384615 39.384615h-196.923077a39.384615 39.384615 0 0 1 0-78.769231h129.772308z"}})])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-toast"},[a("i",{staticClass:"weui-loading weui-icon_toast"})])}],s={render:i,staticRenderFns:n};e.a=s},fLVc:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header-tab"),t._v(" "),a("router-view"),t._v(" "),a("vm-back-top",{attrs:{bottom:90,timing:"ease"}},[a("svg",{staticClass:"icon",attrs:{width:"30px",height:"30.00px",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{fill:"rgba(0, 8, 255, 0.50)",d:"M511.5648 358.4a12.7616 12.7616 0 0 0-9.6 3.8784L355.584 512.9088a12.8 12.8 0 1 0 18.368 17.8432L499.2 401.856V729.6a12.8 12.8 0 0 0 25.6 0V400.512l120.768 126.8736a12.8 12.8 0 1 0 18.5472-17.6512l-140.288-147.3536a12.7744 12.7744 0 0 0-10.5472-3.9168 12.9536 12.9536 0 0 0-1.7152-0.0512zM512 1024C229.2352 1024 0 794.7648 0 512S229.2352 0 512 0s512 229.2352 512 512-229.2352 512-512 512zM320 320h384a12.8 12.8 0 0 0 0-25.6H320a12.8 12.8 0 0 0 0 25.6z"}})])])],1)},n=[],s={render:i,staticRenderFns:n};e.a=s},gyMJ:function(t,e,a){"use strict";var i=a("mtWM"),n=a.n(i);n.a.defaults.baseURL="http://api.readfollow.com",e.a={get:function(t,e){n.a.get(t).then(function(t){e(null,t.data)})},post:function(t,e){n.a.post("/post","url="+encodeURIComponent(t)).then(function(t){e(null,t.data)})}}},kY1z:function(t,e,a){"use strict";var i=a("tcnj"),n=a("qK+J"),s=a.n(n),r=a("gyMJ");e.a={name:"cateP",components:{InfiniteLoading:s.a,List:i.a,cate:[]},data:function(){return{cate:0,tag:[]}},mounted:function(){this.cate=this.$route.params.id},methods:{GetTagInfo:function(){var t=this;r.a.get("/tag/"+t.cate,function(e,a){t.tag=a})}},watch:{cate:function(){console.log("cate::",this.cate)},$route:function(){this.cate=this.$route.params.id}}}},oQnW:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"weui-panel_access"},[a("List",{attrs:{cate:t.cate}})],1)])},n=[],s={render:i,staticRenderFns:n};e.a=s},oboO:function(t,e,a){"use strict";function i(t){a("CEdF")}var n=a("6Vc0"),s=a("6B6M"),r=a("VU/8"),o=i,c=r(n.a,s.a,!1,o,null,null);e.a=c.exports},tcnj:function(t,e,a){"use strict";function i(t){a("SIL2")}var n=a("0pd7"),s=a("f/Fd"),r=a("VU/8"),o=i,c=r(n.a,s.a,!1,o,null,null);e.a=c.exports},teIl:function(t,e,a){"use strict";function i(t){a("SdWN")}var n=a("HCTz"),s=a("VkO8"),r=a("VU/8"),o=i,c=r(n.a,s.a,!1,o,null,null);e.a=c.exports},v2ns:function(t,e){},xJD8:function(t,e,a){"use strict";var i=a("teIl");e.a={name:"app",components:{HeaderTab:i.a}}}},["NHnr"]);
//# sourceMappingURL=app.f99b5dda1e97141751d9.js.map