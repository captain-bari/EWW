(this.webpackJsonppersonal=this.webpackJsonppersonal||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/pizza.30f58bf2.png"},112:function(e,t,a){e.exports=a.p+"static/media/kulcha.abe71eab.png"},113:function(e,t,a){e.exports=a.p+"static/media/patty.1c92bf39.png"},114:function(e,t,a){e.exports=a.p+"static/media/sex.0edd6228.png"},115:function(e,t,a){e.exports=a.p+"static/media/sting.73e84093.png"},116:function(e,t,a){e.exports=a.p+"static/media/golgappe.951255e7.png"},120:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(17),r=a.n(c),o=(a(77),a(15)),i=(a(78),a(79),a(6)),s=a(40),u=a.n(s);a(61),a(110);u.a.initializeApp({apiKey:"AIzaSyCY44NmMaX-1m-ziUHuyOR26D0OJAc927c",authDomain:"personal-38ff2.firebaseapp.com",databaseURL:"https://personal-38ff2.firebaseio.com",projectId:"personal-38ff2",storageBucket:"personal-38ff2.appspot.com",messagingSenderId:"1052030309142",appId:"1:1052030309142:web:c910b04497ce69dd1a3637",measurementId:"G-YDW2FCR93G"});var m=function(){Object(n.useEffect)((function(){}),[]);return l.a.createElement("center",null,l.a.createElement(i.g,{className:"mx-auto"},l.a.createElement(i.x,null,l.a.createElement(i.e,{md:"6"},l.a.createElement(i.c,null,l.a.createElement("div",{className:"header pt-3 peach-gradient"},l.a.createElement(i.x,{className:"d-flex justify-content-center"},l.a.createElement("h3",{className:"white-text mb-3 pt-3 font-weight-bold"},"Log in"))),l.a.createElement(i.d,{className:"mx-4 mt-4"},l.a.createElement(i.n,{label:"Your email",group:!0,type:"text",validate:!0,id:"loginemail"}),l.a.createElement(i.n,{label:"Your password",group:!0,type:"password",validate:!0,id:"loginpassword",containerClass:"mb-0"}),l.a.createElement("p",{className:"font-small grey-text d-flex justify-content-end"},"Forgot",l.a.createElement("a",{onClick:function(){var e=document.getElementById("loginemail").value;u.a.auth().sendPasswordResetEmail(e).then((function(e){alert("Email sent")})).catch((function(e){alert(e.message)}))},href:"#!",className:"dark-grey-text ml-1 font-weight-bold"},"Password?")),l.a.createElement(i.x,{className:"d-flex align-items-center mb-4 mt-5"},l.a.createElement(i.e,{md:"5",className:"d-flex align-items-start"},l.a.createElement("div",{className:"text-center"},l.a.createElement(i.b,{onClick:function(){var e=document.getElementById("loginemail").value,t=document.getElementById("loginpassword").value;u.a.auth().signInWithEmailAndPassword(e,t).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))},color:"grey",rounded:!0,type:"button",className:"z-depth-1a"},"Log in"))),l.a.createElement(i.e,{md:"7",className:"d-flex justify-content-end"},l.a.createElement("p",{className:"font-small grey-text mt-3"},"Don't have an account?",l.a.createElement("a",{onClick:function(){alert("Currently Not Accepting any applications NO POLY")},href:"#!",className:"dark-grey-text ml-1 font-weight-bold"},"Sign up"))))))))))},d=a(32),p=a(33),E=a(36),g=a(35),f=a(24),h=a(11),b=a(7),y=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],i=!0,s=[],m=u.a.firestore();return m.settings({timestampsInSnapshots:!0}),m.collection("Projects").get().then((function(e){for(var t=e.docs.map((function(e){return e.data()})),a=0;a<t.length;a++)s.push(t[a]);i&&r(s)})),console.log(c),console.log(c.length),c.length>1&&(i=!1),l.a.createElement("div",{id:"list"},l.a.createElement("br",null),c.map((function(e,t){return l.a.createElement("div",null,l.a.createElement(b.a,{border:"success",bg:"light"},l.a.createElement(b.a.Header,null,e.Name),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Text,null,e.Code))),l.a.createElement("br",null))})))},v=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2);a[0],a[1];return l.a.createElement("div",null,l.a.createElement(b.a,{className:"text-center"},l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Text,null,l.a.createElement(i.g,null,l.a.createElement(i.o,{material:!0,containerClassName:"mb-3 mt-0",hint:"Title",id:"pname"}),l.a.createElement(i.o,{material:!0,className:"mb-0",hint:"Details",type:"textarea",id:"code"}))),l.a.createElement(i.b,{rounded:!0,outline:!0,color:"success",onClick:function(){var e=document.getElementById("pname").value,t=document.getElementById("code").value;if(""!==e&&""!==t){var a=u.a.firestore();a.settings({timestampsInSnapshots:!0}),a.collection("Projects").add({Name:e,Code:t}).then((function(e){alert("Rule added")})).catch((function(e){alert(e.message)}))}else alert("Fill both Title and rule")}},"Add Rule"))),l.a.createElement(y,null))},k=(l.a.Component,a(45)),x=function(e){return l.a.createElement("div",null,l.a.createElement(k.a,{variant:"success"},l.a.createElement(k.a.Heading,null,"Welcome Sugar"),l.a.createElement("hr",null),l.a.createElement("p",{className:"mb-0"},"Send nudes (T=T)")))},C=a(70),w=a(26),j=function(e){var t=Object(n.useState)(0),c=Object(o.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)(0),m=Object(o.a)(s,2),d=m[0],p=m[1],E=Object(n.useState)(0),g=Object(o.a)(E,2),f=g[0],h=g[1],y=Object(n.useState)(0),v=Object(o.a)(y,2),k=v[0],x=v[1],j=Object(n.useState)(0),O=Object(o.a)(j,2),S=O[0],I=O[1],N=Object(n.useState)(0),T=Object(o.a)(N,2),z=T[0],B=T[1],A=u.a.firestore();return A.settings({timestampsInSnapshots:!0}),A.collection("Counts").get().then((function(e){var t=e.docs.map((function(e){return Object(C.a)({id:e.id},e.data())}));for(var a in t)"pizza"===t[a].id&&i(t[a].count),"kulcha"===t[a].id&&p(t[a].count),"patty"===t[a].id&&h(t[a].count),"sex"===t[a].id&&x(t[a].count),"sting"===t[a].id&&B(t[a].count),"golgappe"===t[a].id&&I(t[a].count)})),l.a.createElement("div",{id:"count",style:{textAlign:"center",alignItems:"center",display:"inline-block"}},l.a.createElement("br",null),l.a.createElement(b.a,{style:{width:"18rem"}},l.a.createElement(b.a.Img,{variant:"top",src:a(111)}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Pizza : ",r),l.a.createElement(b.a.Text,null,"Ye aajkal kem ho gya hai, but it has its own place. Jab kya khaen samajh ni aata tab pizza yaad aata hai."),l.a.createElement(w.a,{variant:"primary",onClick:function(){return A.collection("Counts").doc("pizza").update({count:r+1}).then((function(){i(r+1)})).catch((function(e){alert("Error updating pizza count: ",e)}))}},"Increase Count"))),l.a.createElement("br",null),l.a.createElement(b.a,{style:{width:"18rem"}},l.a.createElement(b.a.Img,{variant:"top",src:a(112)}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Kulcha : ",d," "),l.a.createElement(b.a.Text,null,"GoTo food when we broke, even so very tasty makkhan maar ke. Almost sab redi try kerli apan ne eski toh."),l.a.createElement(w.a,{variant:"primary",onClick:function(){return A.collection("Counts").doc("kulcha").update({count:d+1}).then((function(){p(d+1)})).catch((function(e){alert("Error updating kulcha count: ",e)}))}},"Increase Count"))),l.a.createElement("br",null),l.a.createElement(b.a,{style:{width:"18rem"}},l.a.createElement(b.a.Img,{variant:"top",src:a(113)}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Patty : ",f),l.a.createElement(b.a.Text,null,"Deepak paaji zindabad. Canada jake kholiyo ye business."),l.a.createElement(w.a,{variant:"primary",onClick:function(){return A.collection("Counts").doc("patty").update({count:f+1}).then((function(){h(f+1)})).catch((function(e){alert("Error updating patty count: ",e)}))}},"Increase Count"))),l.a.createElement("br",null),l.a.createElement(b.a,{style:{width:"18rem"}},l.a.createElement(b.a.Img,{variant:"top",src:a(114)}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Sex : ",k),l.a.createElement(b.a.Text,null,"Sex is cool and good for health okay. Never say that only thing in relationship please, Yes we do alot of sex so what",l.a.createElement("br",null)," xD , :P xoxo lick lick yummy"),l.a.createElement(w.a,{variant:"primary",onClick:function(){return A.collection("Counts").doc("sex").update({count:k+1}).then((function(){x(k+1)})).catch((function(e){alert("Error updating Sex count: ",e)}))}},"Increase Count"))),l.a.createElement("br",null),l.a.createElement(b.a,{style:{width:"18rem"}},l.a.createElement(b.a.Img,{variant:"top",src:a(115)}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Sting : ",z),l.a.createElement(b.a.Text,null,"Alag hi nasha hai bhai eeska. kiase btaen kyn tujhko chaheen."),l.a.createElement(w.a,{variant:"primary",onClick:function(){return A.collection("Counts").doc("sting").update({count:z+1}).then((function(){B(z+1)})).catch((function(e){alert("Error updating Sting count: ",e)}))}},"Increase Count"))),l.a.createElement("br",null),l.a.createElement(b.a,{style:{width:"18rem"}},l.a.createElement(b.a.Img,{variant:"top",src:a(116)}),l.a.createElement(b.a.Body,null,l.a.createElement(b.a.Title,null,"Gol Gappe : ",S),l.a.createElement(b.a.Text,null,"Soooji ke gol gappe. First dish we tried this year (new year EVE ik same thing just stfu please, and add +1 to sex also while calcuating cuz same thing)",l.a.createElement("br",null)," -_-"),l.a.createElement(w.a,{variant:"primary",onClick:function(){return A.collection("Counts").doc("golgappe").update({count:S+1}).then((function(){I(S+1)})).catch((function(e){alert("Error updating Gol gappe count: ",e)}))}},"Increase Count"))),l.a.createElement("br",null))},O=function(e){Object(E.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={isOpen:!1,msg:!0,countpage:!1,rulepage:!0},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen,msg:!1})},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(f.a,null,l.a.createElement(i.r,{color:"default-color",dark:!0,expand:"md"},l.a.createElement(i.s,null,l.a.createElement("strong",{className:"white-text"},"EWW Cringy")),l.a.createElement(i.u,{onClick:this.toggleCollapse}),l.a.createElement(i.f,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},l.a.createElement(i.t,{left:!0},l.a.createElement(i.p,{active:this.state.rulepage},l.a.createElement(i.q,{to:"/EWW",onClick:function(){e.setState({countpage:!1,rulepage:!0}),e.toggleCollapse()}},"Rules")),l.a.createElement(i.p,{active:this.state.countpage},l.a.createElement(i.q,{to:"/EWW",onClick:function(){e.setState({countpage:!0,rulepage:!1}),e.toggleCollapse()}},"Count")),l.a.createElement(i.p,null,l.a.createElement(i.q,{to:"/EWW",onClick:function(){return alert("TO-DO not implimented yet")}},"Current Address")),l.a.createElement(i.p,null)),l.a.createElement(i.t,{right:!0},l.a.createElement(i.p,null,l.a.createElement(i.h,null,l.a.createElement(i.k,{nav:!0,caret:!0},l.a.createElement(i.l,{icon:"user"})),l.a.createElement(i.j,{className:"dropdown-default"},l.a.createElement(i.i,null,"Sign Out")))),l.a.createElement(i.p,null,l.a.createElement(i.q,{className:"waves-effect waves-light",to:"#!"},l.a.createElement(i.l,{fab:!0,icon:"twitter"}))),l.a.createElement(i.p,null,l.a.createElement(i.q,{className:"waves-effect waves-light",to:"#!"},l.a.createElement(i.l,{fab:!0,icon:"google-plus-g"}))))))),this.state.rulepage&&l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement(v,null)),this.state.countpage&&l.a.createElement("div",null,l.a.createElement(j,null)))}}]),a}(n.Component);var S=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){u.a.auth().onAuthStateChanged((function(e){if(e){c(!0),console.log(e.email);var t=new Date,a="Last Sync: "+t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+" @ "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();console.log(a);var n=u.a.firestore();n.settings({timestampsInSnapshots:!0}),n.collection(e.email).add({Date:a}).then((function(e){console.log(e)})).catch((function(e){alert(e.message)}))}else c(!1)}))}),[]),l.a.createElement("div",{className:"App"},a?l.a.createElement(O,null):l.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(117),a(118),a(119);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(120)},77:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},79:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.4edd4aff.chunk.js.map