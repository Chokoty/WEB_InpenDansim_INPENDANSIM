(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-05543a4a":"ee5368e6","chunk-2d0a3361":"efe26a64","chunk-2d0f0d8f":"966ecb20","chunk-2d0f0e03":"f07e437e","chunk-2d21b4ca":"a3568f66"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-05543a4a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-05543a4a":"fec980aa","chunk-2d0a3361":"31d6cfe0","chunk-2d0f0d8f":"31d6cfe0","chunk-2d0f0e03":"31d6cfe0","chunk-2d21b4ca":"31d6cfe0"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/WEB_InpenDansim_INPENDANSIM/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.showNav?n("Navigation"):e._e(),n("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigation"},[n("router-link",{attrs:{to:"/"}},[e._v("인편단심")]),n("div",[n("router-link",{attrs:{to:"/write/mail"}},[e._v("편지 쓰기")]),n("router-link",{attrs:{to:"/mypage"}},[e._v("마이페이지")]),e.loggedIn?n("button",{on:{click:e.handleLogOut}},[e._v("Log-Out")]):n("router-link",{attrs:{to:"/login"}},[e._v("Log-In")])],1)],1)},u=[],c=(n("b64b"),n("5530")),s=n("2f62"),l={computed:Object(c["a"])(Object(c["a"])({},Object(s["b"])(["userProfile"])),{},{loggedIn:function(){return Object.keys(this.userProfile).length>0}}),methods:{handleLogOut:function(){this.$store.dispatch("logout")}}},f=l,d=(n("858f"),n("2877")),p=Object(d["a"])(f,i,u,!1,null,"63ec8fce",null),h=p.exports,m={components:{Navigation:h},computed:{showNav:function(){return!0}}},g=m,v=(n("034f"),Object(d["a"])(g,a,o,!1,null,null,null)),b=v.exports,w=(n("45fc"),n("d3b7"),n("8c4f")),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("router-link",{attrs:{to:"/write/mail"}},[e._v("인편쓰러가기")]),n("router-link",{attrs:{to:"/write/rolling"}},[e._v("롤링페이퍼 쓰러가기")])],1)},y=[],P={data:function(){return{searchKeyword:"",news:"test"}}},O=P,_=Object(d["a"])(O,k,y,!1,null,null,null),j=_.exports,E=n("59ca"),x=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyD3FRUN06mMD-L73bs94oy7st67EhJSxaw",authDomain:"inpen-dansim.firebaseapp.com",databaseURL:"https://inpen-dansim.firebaseio.com",projectId:"inpen-dansim",storageBucket:"inpen-dansim.appspot.com",messagingSenderId:"568175520459",appId:"1:568175520459:web:ef8e5c399a9707720f094e",measurementId:"G-EKB4MK33PW"});E["initializeApp"](x);var I=E["firestore"](),S=E["auth"](),N=I.collection("users");r["a"].use(w["a"]);var R=[{path:"/",name:"Home",component:j},{path:"/login",name:"LogIn",component:function(){return n.e("chunk-2d0f0e03").then(n.bind(null,"9ddf"))}},{path:"/write/mail",name:"WriteMail",component:function(){return n.e("chunk-05543a4a").then(n.bind(null,"1a33"))}},{path:"/write/rolling",name:"WriteRolling",component:function(){return n.e("chunk-2d21b4ca").then(n.bind(null,"bed5"))}},{path:"/write/send",name:"Send",component:function(){return n.e("chunk-2d0f0d8f").then(n.bind(null,"9db0"))}},{path:"/rollingpaper/",name:"RollingPaper",component:function(){return n.e("chunk-2d0a3361").then(n.bind(null,"00e0"))}}],A=new w["a"]({mode:"history",base:"/WEB_InpenDansim_INPENDANSIM/",routes:R});A.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requiresAuth}));r&&!S.currentUser?n("/login"):n()}));var L=A,U=(n("b0c0"),n("96cf"),n("1da1"));r["a"].use(s["a"]);var C,D=new s["a"].Store({state:{userProfile:{}},mutations:{setUserProfile:function(e,t){e.userProfile=t},setPerformingRequest:function(e,t){e.performingRequest=t}},actions:{login:function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,S.signInWithEmailAndPassword(t.email,t.password);case 3:a=n.sent,o=a.user,r("fetchUserProfile",o);case 6:case"end":return n.stop()}}),n)})))()},signup:function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,S.createUserWithEmailAndPassword(t.email,t.password);case 3:return a=n.sent,o=a.user,n.next=7,N.doc(o.uid).set({name:t.name});case 7:r("fetchUserProfile",o);case 8:case"end":return n.stop()}}),n)})))()},fetchUserProfile:function(e,t){return Object(U["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,N.doc(t.uid).get();case 3:a=n.sent,r("setUserProfile",a.data()),"/login"===L.currentRoute.path&&L.push("/");case 6:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(U["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,S.signOut();case 3:n("setUserProfile",{}),L.push("/login");case 5:case"end":return t.stop()}}),t)})))()}}}),M=D;r["a"].config.productionTip=!1,S.onAuthStateChanged((function(e){C||(C=new r["a"]({router:L,store:M,render:function(e){return e(b)}}).$mount("#app")),e&&M.dispatch("fetchUserProfile",e)}))},"858f":function(e,t,n){"use strict";var r=n("872d"),a=n.n(r);a.a},"85ec":function(e,t,n){},"872d":function(e,t,n){}});
//# sourceMappingURL=app.7b8f1e46.js.map