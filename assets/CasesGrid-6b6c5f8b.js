import{d as v,f as C,o as t,c as r,a as i,t as y,g as m,w as h,j as k,_ as u,r as c,F as l,h as o,n as g,i as _}from"./index-76f4a8f9.js";const f={class:"block"},b={class:"block-overlay"},B={class:"overlay-title"},x={href:"#",target:"_blank"},G=["src"],N=v({__name:"CasesCell",props:{title:String,src:String},setup(d){return(n,a)=>{const s=C("v-btn");return t(),r("div",f,[i("div",b,[i("div",B,y(d.title),1),i("a",x,[m(s,{variant:"outlined",class:"overlay-button"},{default:h(()=>[k("Перейти")]),_:1})])]),i("img",{src:d.src,alt:"Gallery Photo"},null,8,G)])}}});const p=u(N,[["__scopeId","data-v-5aa5e934"]]),S={class:"blocks"},A=v({__name:"CasesGrid",props:{type:{}},setup(d){const n=c([{id:11,title:"Приложение iSecurity для МЧС РК",src:"/grid/dev/6.png"},{id:1,title:"Дизайн PAP",src:"/grid/design/1.png"},{id:2,title:"Дизайн Мастер Голд",src:"/grid/design/2.png"},{id:3,title:"Дизайн демонтажных услуг",src:"/grid/design/3.png"},{id:4,title:"Дизайн StarTarget",src:"/grid/design/4.png"},{id:5,title:"Дизайн Сберстрой",src:"/grid/design/5.png"},{id:6,title:"Дизайн Профессионального Менеджера Татьяны",src:"/grid/design/6.png"},{id:7,title:"Design Republic",src:"/grid/design/7.png"},{id:8,title:"Intelsib",src:"/grid/design/8.png"},{id:9,title:"TravelBreeze",src:"/grid/design/9.png"},{id:10,title:"Globamba",src:"/grid/design/10.png"},{id:12,title:"Nomad Duken",src:"/grid/dev/1.png"}]),a=c([{id:2,title:"Crew Central Asia 2023",src:"/grid/dev/2.png"},{id:3,title:"Сайт-визитка визажистки",src:"/grid/dev/3.png"},{id:4,title:"Симулятор шелвинга для компании Apple City Corp.",src:"/grid/dev/4.png"},{id:5,title:"Гайдлайн Курсы Маркетинга для компании Apple City Corp.",src:"/grid/dev/5.png"}]);return(s,V)=>(t(),r("div",S,[s.type==="design"?(t(!0),r(l,{key:0},o(n.value,e=>(t(),_(p,{title:e.title,key:e.id,src:e.src},null,8,["title","src"]))),128)):g("",!0),s.type==="dev"?(t(!0),r(l,{key:1},o(a.value,e=>(t(),_(p,{key:e.id,title:e.title,src:e.src},null,8,["title","src"]))),128)):g("",!0)]))}});const D=u(A,[["__scopeId","data-v-41424d42"]]);export{D as C};