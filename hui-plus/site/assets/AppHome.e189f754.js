import{n as f,c as r,q as d,v as g,i as y,u as C}from"./index.f18fa747.js";import"./vendor.42ad9076.js";var x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-home"},[e("div",{staticClass:"logo"},[e("h1",{staticClass:"varlet-home__title"},[e("img",{staticClass:"varlet-home__image",attrs:{src:t.logo}}),e("span",[t._v(t._s(t.title))])]),e("h2",{staticClass:"varlet-home__desc"},[t._v(t._s(t.description[t.lang]))])]),t._l(t.components,function(o){return e("var-site-cell",{directives:[{name:"ripple",rawName:"v-ripple"}],key:o.doc,nativeOn:{click:function(s){return t.toComponent(o)}},scopedSlots:t._u([{key:"extra",fn:function(){return[e("var-site-icon",{attrs:{name:"chevron-right",size:"14"}})]},proxy:!0},{key:"default",fn:function(){return[t._v(" "+t._s(o.text[t.lang])+" ")]},proxy:!0}],null,!0)})})],2)},w=[];const k={name:"AppHome",data:()=>{var t,a,e,o,s,n,i,l,c,_,p,u,m;return{title:(a=(t=r)==null?void 0:t.title)!=null?a:"",logo:(o=(e=r)==null?void 0:e.logo)!=null?o:"",description:(i=(n=(s=r)==null?void 0:s.mobile)==null?void 0:n.title)!=null?i:{},menu:(_=(c=(l=r)==null?void 0:l.pc)==null?void 0:c.menu)!=null?_:[],components:((m=(u=(p=r)==null?void 0:p.pc)==null?void 0:u.menu)!=null?m:[]).filter(h=>h.type===2),lang:"zh-CN",platform:"mobile"}},created(){d(this,t=>{this.lang=t}),g(this,t=>{this.platform=t})},methods:{toComponent(t){var a;console.log(t),this.$router.push({path:`/${t.doc}`,query:{language:this.lang,platform:this.platform,replace:t.doc}}),!y()&&C()&&((a=window.top)==null||a.scrollToMenu(t.doc))}}},v={};var $=f(k,x,w,!1,z,"081a5c24",null,null);function z(t){for(let a in v)this[a]=v[a]}var b=function(){return $.exports}();export{b as default};
