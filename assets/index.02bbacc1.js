import{g as L}from"./greetUtil.0b1c6807.js";import{e as R,f as g,g as U,i as _,o as E,c as v,j as l,k as i,a as e,t as n,m as C,n as c,F as A,l as D,s as M,x as T,y as q,z as P,_ as X}from"./index.e4ce814e.js";import{s as $}from"./request.9c690564.js";import{g as J}from"./userUtil.2a89dae5.js";import"./cookieUtil.c9429606.js";const F="jinrishici-token";function O(t,a){return window.localStorage&&window.localStorage.getItem(F)?G(t,a,window.localStorage.getItem(F)):W(t,a)}function W(t,a){return k(function(u){window.localStorage.setItem(F,u.token),t(u)},a,"https://v2.jinrishici.com/one.json?client=npm-sdk/1.0")}function G(t,a,d){return d=d,k(t,a,"https://v2.jinrishici.com/one.json?client=npm-sdk/1.0&X-User-Token="+encodeURIComponent(d))}function k(t,a,d){var u=new XMLHttpRequest;u.open("get",d),u.withCredentials=!0,u.send(),u.onreadystatechange=function(){if(u.readyState===4){var o=JSON.parse(u.responseText);o.status==="success"?t(o):a?a(o):console.error("\u4ECA\u65E5\u8BD7\u8BCDAPI\u52A0\u8F7D\u5931\u8D25\uFF0C\u9519\u8BEF\u539F\u56E0\uFF1A"+o.errMessage)}}}const f=t=>(T("data-v-10216369"),t=t(),q(),t),K={class:"index"},Q={class:"grid-content dashboardStyle"},Y={class:"dashboard"},Z={class:"greet"},H={class:"name"},ee={class:"content"},oe={class:"left"},te={class:"countAll count"},se={class:"num"},ne={class:"countDaily count"},ce={class:"num"},ae={class:"countWeekly count"},ue={class:"num"},le={class:"sota count"},ie={class:"sotaName"},re={class:"num"},de={class:"right"},_e=f(()=>e("div",{class:"tip"},"\u653E\u677E\u4E00\u523B\uFF1A",-1)),me={class:"poem"},pe={class:"sentence"},fe={class:"from"},he={class:"projectProgress"},ge=f(()=>e("div",{style:{"margin-bottom":"10px"}},"\u5F53\u524D\u9879\u76EE\u8FDB\u5EA6\uFF1A",-1)),Ee={class:"grid-content"},ve=f(()=>e("div",{class:"title"},"\u9879\u76EE\u901A\u77E5",-1)),Ce={class:"grid-content"},Fe=f(()=>e("div",{class:"title"},"\u9879\u76EE\u8FDB\u5EA6",-1)),Be=R({__name:"index",setup(t){const a=[{content:"\u5DE5\u5177\u5B8C\u5584",timestamp:"now",size:"large",color:"#C0280f",icon:P},{content:"\u521D\u7248\u5B9E\u73B0",timestamp:"2022-12",color:"#0bbd87",size:"normal"},{content:"\u5DE5\u5177\u89C4\u5212",timestamp:"2022-11",color:"#0bbd87",size:"normal"},{content:"\u9879\u76EE\u5F00\u7AEF",timestamp:"2022-10",size:"normal"}],d=[{color:"#f56c6c",percentage:10},{color:"#f58c6c",percentage:20},{color:"#f5ab6c",percentage:30},{color:"#f5cb6c",percentage:40},{color:"#e5f56c",percentage:50},{color:"#c5f56c",percentage:60},{color:"#a5f56c",percentage:70},{color:"#85f56c",percentage:80},{color:"#65f56c",percentage:90},{color:"#5cb87a",percentage:100}],u=[{title:"\u4E0B\u4E00\u5468\u9884\u8BA1\u5F00\u5C55\u7684\u4EFB\u52A1",content:"\u5B8C\u6210\u9884\u8BA1\u6807\u6CE8\u4EFB\u52A1"}],o=g({all:0,week:0,day:0,progress:0,best:"",sota:{name:"",count:0}}),p=g({content:"",from:""}),B=g("1"),x=r=>{console.log(666)},b=()=>{$.get("/dashboard").then(r=>{o.value=r.data;let m=o.value.best.split(":");o.value.sota={name:m[0],count:m[1]==null?0:parseInt(m[1])}})};return U(()=>{O(r=>{p.value.content=`\u201C${r.data.content}\u201D`,p.value.from=r.data.origin.author+"\xB7"+r.data.origin.title},r=>{console.log(r)}),b()}),(r,m)=>{const S=_("el-progress"),h=_("el-col"),y=_("el-icon"),I=_("el-collapse-item"),z=_("el-collapse"),N=_("el-timeline-item"),j=_("el-timeline"),V=_("el-row");return E(),v("div",K,[l(V,{gutter:20},{default:i(()=>[l(h,{span:24},{default:i(()=>[e("div",Q,[e("div",Y,[e("div",Z,[e("span",H,n(C(J)()),1),c(n(C(L)("")),1)]),e("div",ee,[e("div",oe,[e("div",te,[c("\u7D2F\u79EF\u8D21\u732E\u6807\u6CE8"),e("span",se,n(o.value.all),1),c("\u6761\u6570\u636E")]),e("div",ne,[c("\u4ECA\u65E5\u8D21\u732E\u6807\u6CE8"),e("span",ce,n(o.value.day),1),c("\u6761\u6570\u636E ")]),e("div",ae,[c("\u672C\u5468\u8D21\u732E\u6807\u6CE8"),e("span",ue,n(o.value.week),1),c("\u6761\u6570\u636E ")]),e("div",le,[c("\u4ECA\u65E5\u6700\u4F73\uFF1A"),e("span",ie,n(o.value.sota.name),1),c(" ,\u76EE\u524D\u6807\u6CE8"),e("span",re,n(o.value.sota.count==null?0:o.value.sota.count),1),c("\u6761\u6570\u636E ")])]),e("div",de,[_e,e("div",me,[e("div",pe,n(p.value.content),1),e("div",fe,"\u2014\u2014"+n(p.value.from),1)])])]),e("div",he,[ge,l(S,{"stroke-width":10,percentage:o.value.progress,color:d},null,8,["percentage"])])])])]),_:1}),l(h,{span:14},{default:i(()=>[e("div",Ee,[ve,l(z,{modelValue:B.value,"onUpdate:modelValue":m[0]||(m[0]=s=>B.value=s),accordion:""},{default:i(()=>[(E(),v(A,null,D(u,s=>l(I,{name:s.title},{title:i(()=>[c(n(s.title)+" ",1),l(y,{class:"header-icon",onClick:w=>x(s)},{default:i(()=>[l(C(M))]),_:2},1032,["onClick"])]),default:i(()=>[e("div",null,n(s.content),1)]),_:2},1032,["name"])),64))]),_:1},8,["modelValue"])])]),_:1}),l(h,{span:10},{default:i(()=>[e("div",Ce,[Fe,l(j,null,{default:i(()=>[(E(),v(A,null,D(a,(s,w)=>l(N,{key:w,icon:s.icon,color:s.color,size:s.size,timestamp:s.timestamp},{default:i(()=>[c(n(s.content),1)]),_:2},1032,["icon","color","size","timestamp"])),64))]),_:1})])]),_:1})]),_:1})])}}});const be=X(Be,[["__scopeId","data-v-10216369"]]);export{be as default};
