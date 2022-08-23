import{c as s,n as C,a as T,l as $,o as m,s as _,w as k,q as M,i as o,u as l,_ as P,d as S,I as L,C as B,R as z,B as R}from"./index.f18fa747.js";import{g as r,a as u,V as h}from"./vendor.42ad9076.js";var E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"site-mobile"},[t("header",[t("var-site-app-bar",{staticClass:"app-bar",attrs:{"title-position":"left",title:e.bigCamelizeComponentName},scopedSlots:e._u([{key:"left",fn:function(){return[e.showBackIcon?t("var-site-button",{attrs:{text:"",round:"",color:"transparent","text-color":"#fff"},on:{click:e.back}},[t("var-site-icon",{staticStyle:{"margin-top":"1px"},attrs:{name:"chevron-left",size:28}})],1):e._e(),!e.showBackIcon&&e.github?t("var-site-button",{staticStyle:{"margin-left":"2px"},attrs:{text:"",round:"",color:"transparent","text-color":"#fff"},on:{click:e.toGithub}},[t("var-site-icon",{staticStyle:{"margin-top":"1px"},attrs:{name:"github",size:28}})],1):e._e()]},proxy:!0},{key:"right",fn:function(){return[e.darkMode?t("var-site-button",{style:{transform:e.languages?"translateX(2px)":"translateX(-4px)"},attrs:{text:"",round:"",color:"transparent","text-color":"#fff"},on:{click:e.toggleTheme}},[t("var-site-icon",{attrs:{size:"24px",color:"#fff",name:e.currentThemes==="themes"?"white-balance-sunny":"weather-night"}})],1):e._e(),e.languages?t("var-site-button",{staticStyle:{"padding-right":"6px"},attrs:{text:"",color:"transparent","text-color":"#fff"},on:{click:function(i){i.stopPropagation(),e.showMenu=!0}}},[t("var-site-icon",{attrs:{name:"translate",size:24}}),t("var-site-icon",{attrs:{name:"chevron-down",size:22}})],1):e._e()]},proxy:!0}])})],1),t("div",{staticClass:"router-view__block"},[t("router-view")],1),t("transition",{attrs:{name:"site-menu"}},[e.showMenu?t("div",{staticClass:"settings var-site-elevation--3"},e._l(e.nonEmptyLanguages,function(i,n){return t("var-site-cell",{directives:[{name:"ripple",rawName:"v-ripple"}],key:n,staticClass:"mobile-language-cell",class:[e.language===n&&"mobile-language-cell--active"],nativeOn:{click:function(g){return e.changeLanguage(n)}}},[e._v(" "+e._s(i)+" ")])}),1):e._e()])],1)},I=[];const f=r(s,"themesKey"),A={data:()=>({language:"",languages:r(s,"mobile.header.i18n"),showMenu:!1,redirect:r(s,"mobile.redirect",""),currentThemes:T(f),bigCamelizeComponentName:"",showBackIcon:!1,github:r(s,"mobile.header.github"),darkMode:r(s,"mobile.header.darkMode")}),computed:{nonEmptyLanguages(){return $(this.languages)}},watch:{"$route.path"(e){const a=m(e.slice(1)),t=m(this.redirect.slice(1));this.bigCamelizeComponentName=a===t?"":a,this.showBackIcon=a!==t}},created(e){this.language=e,window.toggleTheme=this.toggleTheme,_(s,this.currentThemes),window.postMessage(this.getThemesMessage(),"*"),document.body.addEventListener("click",()=>{this.showMenu=!1}),k(this,(a,t)=>{t==="pc"&&this.setCurrentThemes(a)}),M(this,a=>{this.language=a})},methods:{changeLanguage(e){this.language=e,this.showMenu=!1,window.location.href=`./mobile.html#${this.$route.path}?language=${this.language}&replace=${this.$route.query.replace}`,!o()&&l()&&window.top.scrollToMenu(this.redirect.slice(1))},setCurrentThemes(e){this.currentThemes=e,_(s,this.currentThemes),window.localStorage.setItem(f,this.currentThemes)},toggleTheme(){this.setCurrentThemes(this.currentThemes==="darkThemes"?"themes":"darkThemes"),window.postMessage(this.getThemesMessage(),"*"),!o()&&l()&&window.top.postMessage(this.getThemesMessage(),"*")},getThemesMessage(){return{action:"themesChange",from:"mobile",data:this.currentThemes}},back(){var e;window.location.href=`./mobile.html#${this.redirect}?language=${this.language}&replace=${this.redirect.slice(1)}`,!o()&&l()&&((e=window.top)==null||e.scrollToMenu(this.redirect.slice(1)))},toGithub(){var e;l()&&!o()?(e=window.top)==null||e.open(this.github):window.location.href=this.github}}},v={};var N=C(A,E,I,!1,V,null,null,null);function V(e){for(let a in v)this[a]=v[a]}var q=function(){return N.exports}(),p=[];const w=u.prototype.replace;u.prototype.replace=function(a,t,i){return t||i?w.call(this,a,t,i):w.call(this,a).catch(n=>n)};h.use(u);const b=r(s,"mobile.redirect"),F=r(s,"defaultLanguage");b&&p.push({path:"*",redirect:b});p.push({path:"/home",component:()=>P(()=>import("./AppHome.e189f754.js"),["assets/AppHome.e189f754.js","assets/AppHome.989e36f3.css","assets/index.f18fa747.js","assets/index.e35251ef.css","assets/vendor.42ad9076.js"])});const x=new u({scrollBehavior:()=>({x:0,y:0}),routes:p});x.beforeEach((e,a,t)=>{var d;const i=(d=e.query.language)!=null?d:F,n=e.path,g=e.query.replace;if(!o()&&!l()){window.location.href=`./#/${i}${n}`;return}!o()&&l()&&window.top.onMobileRouteChange(n,i,g),window._hmt&&e.path&&window._hmt.push(["_trackPageview",`/#${e.fullPath}`]),t()});function G(e){return["left","center","right"].includes(e)}const K={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:G},elevation:{type:Boolean,default:!0}};var O=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"var-site-app-bar",class:{"var-site-elevation--3":e.elevation},style:{background:e.color,color:e.textColor}},[t("div",{staticClass:"var-site-app-bar__left"},[e._t("left"),e.titlePosition==="left"?t("div",{staticClass:"var-site-app-bar__title",style:{paddingLeft:e.paddingLeft}},[e._t("default",function(){return[e._v(e._s(e.title))]})],2):e._e()],2),e.titlePosition==="center"?t("div",{staticClass:"var-site-app-bar__title"},[e._t("default",function(){return[e._v(e._s(e.title))]})],2):e._e(),t("div",{staticClass:"var-site-app-bar__right"},[e.titlePosition==="right"?t("div",{staticClass:"var-site-app-bar__title",style:{paddingRight:e.paddingRight}},[e._t("default",function(){return[e._v(e._s(e.title))]})],2):e._e(),e._t("right")],2)])},X=[];const j=S({name:"VarSiteAppBar",props:K,data:()=>({paddingLeft:0,paddingRight:0}),methods:{computePadding(){this.paddingLeft=this.hasSlots("left")?0:void 0,this.paddingRight=this.hasSlots("right")?0:void 0}},mounted(){this.computePadding()},updated(){this.computePadding()}}),y={};var D=C(j,O,X,!1,H,null,null,null);function H(e){for(let a in y)this[a]=y[a]}var c=function(){return D.exports}();c.install=function(e){e.component(c.name,c)};h.use(L).use(c).use(B).use(z).use(R);new h({router:x,render:e=>e(q)}).$mount("#app");