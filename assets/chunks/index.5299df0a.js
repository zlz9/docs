import{_ as U,f as y,h as u,r as d,o as r,c as h,b as e,a as _,D as p,x as a,E as q,m as x,v as z,G as P,F as S,u as N,d as V,t as C,H as Q,I as R}from"../app.2fbb945e.js";const v=c=>(Q("data-v-f837ed58"),c=c(),R(),c),W={class:"z-search"},X=v(()=>e("svg",{t:"1676443423033",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2749",width:"32",height:"32"},[e("path",{d:"M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z",fill:"#bfbfbf","p-id":"2750"})],-1)),Y=[X],Z=v(()=>e("svg",{t:"1676428221436",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2753",width:"20",height:"20"},[e("path",{d:"M423.477333 938.666667S45.045333 855.424 214.186667 442.282667c0 0 38.4 45.909333 33.12 68 0 0 30.101333-104.277333 95.072-166.570667C398.165333 290.186667 454.848 139.712 402.570667 85.333333c0 0 258.933333 54.378667 287.754666 326.378667 0 0 33.12-86.666667 101.12-95.232 0 0-20.906667 47.616 0 119.04 0 0 214.485333 367.146667-155.157333 491.242667 0 0 110.805333-125.813333-124.181333-341.717334 0 0-55.402667 115.626667-88.533334 156.373334-0.096 0.106667-92.522667 103.722667-0.096 197.248z",fill:"#d81e06","p-id":"2754"})],-1)),e6={class:"z-search-history"},t6={class:"z-search-head"},s6=v(()=>e("div",{class:"z-search-title"},[e("strong",null,"历史"),V("   "),e("svg",{t:"1676463008786",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2816",width:"20",height:"20"},[e("path",{d:"M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m42.666667-486.869333V298.538667C554.666667 275.328 535.552 256 512 256c-23.722667 0-42.666667 19.029333-42.666667 42.538667v256.256a41.984 41.984 0 0 0 12.202667 29.866666l121.258667 121.258667a42.368 42.368 0 0 0 60.032-0.298667 42.666667 42.666667 0 0 0 0.298666-60.032L554.666667 537.130667z",fill:"#d81e06","p-id":"2817"})])],-1)),o6={class:"z-search-clear"},l6={class:"z-search-box"},a6={class:"z-search-item"},i6={class:"z-search-top"},c6={class:"z-top-head"},n6=v(()=>e("div",{class:"z-top-title"},[e("div",null,[e("strong",null," 热门")]),e("svg",{t:"1676436440355",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7170",width:"25",height:"23"},[e("path",{d:"M423.477333 938.666667S45.045333 855.424 214.186667 442.282667c0 0 38.4 45.909333 33.12 68 0 0 30.101333-104.277333 95.072-166.570667C398.165333 290.186667 454.848 139.712 402.570667 85.333333c0 0 258.933333 54.378667 287.754666 326.378667 0 0 33.12-86.666667 101.12-95.232 0 0-20.906667 47.616 0 119.04 0 0 214.485333 367.146667-155.157333 491.242667 0 0 110.805333-125.813333-124.181333-341.717334 0 0-55.402667 115.626667-88.533334 156.373334-0.096 0.106667-92.522667 103.722667-0.096 197.248z",fill:"#d81e06","p-id":"7171","z-search-item":""})])],-1)),d6={class:"z-top-box"},r6={class:"z-top-item"},h6={style:{width:"30px"}},_6=["onClick"],p6={name:"zSearch"},u6=Object.assign(p6,{props:{listData:{type:Array,default:[]},hotList:{type:Array,default:[]}},emits:["search","checkTitle"],setup(c,{emit:k}){const D=c;let M=y(["success","warning","danger"]),f=u("");const t=u(""),g=u(!1);let o=y([]),s=y(JSON.parse(localStorage.getItem("historyList"))||[]);console.log(s);let n=u(0);const O=()=>{g.value=!0},J=()=>{g.value=!1},{listData:m,hotList:T}=D;f.value=m[n.value],setInterval(()=>{f.value=m[n.value],n.value!==m.length?n.value++:n.value=0},5e3);const I=()=>{t.value!==""&&(k("search",t.value),A(),s.includes(t.value)||s.unshift(t.value),t.value="")},A=()=>{if(!s.includes(t.value))o.unshift(t.value),localStorage.setItem("historyList",JSON.stringify(o));else{let i=o.indexOf(t.value);o.splice(i,1),o.unshift(t.value),localStorage.setItem("historyList",JSON.stringify(o))}},F=i=>{s.splice(i,1),localStorage.setItem("historyList",JSON.stringify(s))},K=()=>{o=[],s=[],localStorage.removeItem("historyList")},L=i=>{k("checkTitle",i)};return(i,b)=>{const $=d("el-input"),E=d("el-button"),H=d("el-tooltip"),j=d("el-tag"),G=d("el-card");return r(),h(S,null,[e("div",{class:"z-search-shadow",onClick:J}),e("div",W,[_($,{placeholder:a(f),modelValue:t.value,"onUpdate:modelValue":b[0]||(b[0]=l=>t.value=l),onFocus:O,onKeyup:q(I,["enter"])},{suffix:p(()=>[e("div",{onClick:I},Y)]),prefix:p(()=>[Z]),_:1},8,["placeholder","modelValue","onKeyup"]),x(_(G,{shadow:"always"},{default:p(()=>[x(e("div",e6,[e("div",t6,[s6,e("div",o6,[_(H,{class:"box-item",effect:"dark",content:"删除全部",placement:"top"},{default:p(()=>[_(E,{type:"danger",icon:a(P),circle:"",onClick:K},null,8,["icon"])]),_:1})])]),x(e("div",l6,[(r(!0),h(S,null,N(a(s),(l,w)=>(r(),h("div",a6,[_(j,{onClick:B=>L(l),class:"mx-1",closable:"",onClose:B=>F(w),type:a(M)[Math.round(Math.random()*4)]},{default:p(()=>[V(C(l),1)]),_:2},1032,["onClick","onClose","type"])]))),256))],512),[[z,a(s).length]])],512),[[z,a(s).length]]),e("div",i6,[e("div",c6,[n6,e("div",d6,[(r(!0),h(S,null,N(a(T),(l,w)=>(r(),h("div",r6,[e("div",h6,C(w+1),1),e("div",{onClick:B=>L(l)},C(l),9,_6)]))),256))])])])]),_:1},512),[[z,g.value]])])],64)}}}),f6=U(u6,[["__scopeId","data-v-f837ed58"]]);export{f6 as default};
