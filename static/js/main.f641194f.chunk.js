(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(15),r=a.n(c),o=(a(68),a(26)),s=(a(69),a(70),a(6)),m=a(37),i=a.n(m);a(57),a(101);i.a.initializeApp({apiKey:"AIzaSyCY44NmMaX-1m-ziUHuyOR26D0OJAc927c",authDomain:"personal-38ff2.firebaseapp.com",databaseURL:"https://personal-38ff2.firebaseio.com",projectId:"personal-38ff2",storageBucket:"personal-38ff2.appspot.com",messagingSenderId:"1052030309142",appId:"1:1052030309142:web:c910b04497ce69dd1a3637",measurementId:"G-YDW2FCR93G"});var u=function(){Object(n.useEffect)((function(){}),[]);return l.a.createElement("center",null,l.a.createElement(s.g,{className:"mx-auto"},l.a.createElement(s.x,null,l.a.createElement(s.e,{md:"6"},l.a.createElement(s.c,null,l.a.createElement("div",{className:"header pt-3 peach-gradient"},l.a.createElement(s.x,{className:"d-flex justify-content-center"},l.a.createElement("h3",{className:"white-text mb-3 pt-3 font-weight-bold"},"Log in"))),l.a.createElement(s.d,{className:"mx-4 mt-4"},l.a.createElement(s.n,{label:"Your email",group:!0,type:"text",validate:!0,id:"loginemail"}),l.a.createElement(s.n,{label:"Your password",group:!0,type:"password",validate:!0,id:"loginpassword",containerClass:"mb-0"}),l.a.createElement("p",{className:"font-small grey-text d-flex justify-content-end"},"Forgot",l.a.createElement("a",{onClick:function(){var e=document.getElementById("loginemail").value;i.a.auth().sendPasswordResetEmail(e).then((function(e){alert("Email sent")})).catch((function(e){alert(e.message)}))},href:"#!",className:"dark-grey-text ml-1 font-weight-bold"},"Password?")),l.a.createElement(s.x,{className:"d-flex align-items-center mb-4 mt-5"},l.a.createElement(s.e,{md:"5",className:"d-flex align-items-start"},l.a.createElement("div",{className:"text-center"},l.a.createElement(s.b,{onClick:function(){var e=document.getElementById("loginemail").value,t=document.getElementById("loginpassword").value;i.a.auth().signInWithEmailAndPassword(e,t).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},color:"grey",rounded:!0,type:"button",className:"z-depth-1a"},"Log in"))),l.a.createElement(s.e,{md:"7",className:"d-flex justify-content-end"},l.a.createElement("p",{className:"font-small grey-text mt-3"},"Don't have an account?",l.a.createElement("a",{onClick:function(){alert("Currently Not Accepting any applications NO POLY")},href:"#!",className:"dark-grey-text ml-1 font-weight-bold"},"Sign up"))))))))))},d=a(31),E=a(32),p=a(34),f=a(33),g=a(23),h=a(10),v=a(18),b=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],s=!0,m=[],u=i.a.firestore();return u.settings({timestampsInSnapshots:!0}),u.collection("Projects").get().then((function(e){for(var t=e.docs.map((function(e){return e.data()})),a=0;a<t.length;a++)m.push(t[a]);s&&r(m)})),console.log(c),console.log(c.length),c.length>1&&(s=!1),l.a.createElement("div",{id:"list"},l.a.createElement("br",null),c.map((function(e,t){return l.a.createElement("div",null,l.a.createElement(v.a,{border:"success",bg:"light"},l.a.createElement(v.a.Header,null,e.Name),l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Text,null,e.Code))),l.a.createElement("br",null))})))},w=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2);a[0],a[1];return l.a.createElement("div",null,l.a.createElement(v.a,{className:"text-center"},l.a.createElement(v.a.Body,null,l.a.createElement(v.a.Text,null,l.a.createElement(s.g,null,l.a.createElement(s.o,{material:!0,containerClassName:"mb-3 mt-0",hint:"Title",id:"pname"}),l.a.createElement(s.o,{material:!0,className:"mb-0",hint:"Details",type:"textarea",id:"code"}))),l.a.createElement(s.b,{rounded:!0,outline:!0,color:"success",onClick:function(){var e=document.getElementById("pname").value,t=document.getElementById("code").value,a=i.a.firestore();a.settings({timestampsInSnapshots:!0}),a.collection("Projects").add({Name:e,Code:t}).then((function(e){alert("Rule added")})).catch((function(e){alert(e.message)}))}},"Add Rule"))),l.a.createElement(b,null))},y=(l.a.Component,a(42)),N=function(e){return l.a.createElement("div",null,l.a.createElement(y.a,{variant:"success"},l.a.createElement(y.a.Heading,null,"Welcome Sugar"),l.a.createElement("hr",null),l.a.createElement("p",{className:"mb-0"},"Send nudes (T=T)")))},x=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={isOpen:!1,msg:!0},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen,msg:!1})},e}return Object(E.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g.a,null,l.a.createElement(s.r,{color:"default-color",dark:!0,expand:"md"},l.a.createElement(s.s,null,l.a.createElement("strong",{className:"white-text"},"EWW Cringy")),l.a.createElement(s.u,{onClick:this.toggleCollapse}),l.a.createElement(s.f,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},l.a.createElement(s.t,{left:!0},l.a.createElement(s.p,{active:!0},l.a.createElement(s.q,{to:"/add"},"Add Rules")),l.a.createElement(s.p,null,l.a.createElement(s.q,{to:"/show"},"Show Rules")),l.a.createElement(s.p,null,l.a.createElement(s.q,{to:"#!"},"Pricing")),l.a.createElement(s.p,null)),l.a.createElement(s.t,{right:!0},l.a.createElement(s.p,null,l.a.createElement(s.h,null,l.a.createElement(s.k,{nav:!0,caret:!0},l.a.createElement(s.l,{icon:"user"})),l.a.createElement(s.j,{className:"dropdown-default"},l.a.createElement(s.i,null,"Sign Out")))),l.a.createElement(s.p,null,l.a.createElement(s.q,{className:"waves-effect waves-light",to:"#!"},l.a.createElement(s.l,{fab:!0,icon:"twitter"}))),l.a.createElement(s.p,null,l.a.createElement(s.q,{className:"waves-effect waves-light",to:"#!"},l.a.createElement(s.l,{fab:!0,icon:"google-plus-g"}))))))),l.a.createElement(N,null),l.a.createElement(w,null))}}]),a}(n.Component);var O=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){i.a.auth().onAuthStateChanged((function(e){c(!!e)}))}),[]),l.a.createElement("div",{className:"App"},a?l.a.createElement(x,null):l.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(102),a(103),a(104);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},63:function(e,t,a){e.exports=a(105)},68:function(e,t,a){},69:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},70:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.f641194f.chunk.js.map