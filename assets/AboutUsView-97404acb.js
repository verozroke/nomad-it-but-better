import{d,j as m,o as c,f as b,w as l,b as t,n,g as i,_ as r,p as h,h as f,c as u,t as v,r as y,F as w,e as I,m as T}from"./index-e0e10b2f.js";const $={class:"hero__overlay"},A={class:"hero__container"},j={class:"hero__title"},k=d({__name:"TeamHero",setup(e){function s(a){const o=document.getElementById(a);o==null||o.scrollIntoView({behavior:"smooth",block:"start"})}return(a,o)=>{const _=m("v-btn"),p=m("v-parallax");return c(),b(p,{src:"https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80",class:"hero"},{default:l(()=>[t("div",$,[t("div",A,[t("div",j,[n("Добро пожаловать в Nomad IT "),i(_,{onClick:o[0]||(o[0]=g=>s("team-about-us")),variant:"outlined"},{default:l(()=>[n("Читать далее")]),_:1})])])])]),_:1})}}});const B=r(k,[["__scopeId","data-v-1172edbc"]]),x=e=>(h("data-v-c8a3ba27"),e=e(),f(),e),D={class:"about-us__overlay"},V={class:"about-us__container"},H=x(()=>t("div",{class:"about-us__title"},"О нас:",-1)),S=x(()=>t("div",{class:"about-us__text"},[n(" Добро пожаловать в команду инновационных разработчиков и дизайнеров! "),t("br"),n(" Мы занимаемся разработкой разнообразных IT-продуктов, включая веб-сайты, ботов, макеты и обучающие курсы. "),t("br"),t("br"),n(" Впервую очередь мы заинтересованы в реализации ваших замечательных идей! ")],-1)),U=d({__name:"TeamAboutUs",setup(e){function s(a){const o=document.getElementById(a);o==null||o.scrollIntoView({behavior:"smooth",block:"start"})}return(a,o)=>{const _=m("v-btn"),p=m("v-parallax");return c(),b(p,{id:"team-about-us",src:"https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",class:"about-us"},{default:l(()=>[t("div",D,[t("div",V,[H,S,i(_,{onClick:o[0]||(o[0]=g=>s("team-list")),variant:"outlined"},{default:l(()=>[n("Далее")]),_:1})])])]),_:1})}}});const F=r(U,[["__scopeId","data-v-c8a3ba27"]]),M={class:"item"},C={class:"item__card"},G={class:"item__image"},L=["src"],N={class:"item__name"},E={class:"item__title"},q=d({__name:"TeamItem",props:{name:String,occupation:String,src:String},setup(e){return(s,a)=>(c(),u("div",M,[t("div",C,[t("div",G,[t("img",{src:e.src,alt:""},null,8,L)]),t("div",N,v(e.name),1)]),t("div",E,v(e.occupation),1)]))}});const W=r(q,[["__scopeId","data-v-6876a92e"]]),Y={class:"list"},z=d({__name:"TeamList",setup(e){const s=y([{id:1,name:"Асхат",src:"/nomad-it-but-better/team-photos/askhat.jpg",occupation:"Full-stack Разработчик"},{id:2,name:"Владислав",src:"/nomad-it-but-better/team-photos/vlad.jpg",occupation:"Full-stack Разработчик"},{id:3,name:"Сабыржан",src:"/nomad-it-but-better/team-photos/sabyr.jpg",occupation:"Full-stack Разработчик"},{id:4,name:"Маулен",src:"/nomad-it-but-better/team-photos/maulen.jpg",occupation:"Frontend Разработчик"},{id:5,name:"Алим",src:"/nomad-it-but-better/team-photos/alim.jpg",occupation:"UI/UX Дизайнер"},{id:6,name:"Ыдырыс",src:"/nomad-it-but-better/team-photos/idris.jpg",occupation:"Backend Разработчик"},{id:7,name:"Александр",src:"/nomad-it-but-better/team-photos/sanya.jpg",occupation:"Frontend Разработчик"},{id:8,name:"Дарина",src:"/nomad-it-but-better/team-photos/darina.jfif",occupation:"Backend Разработчица"},{id:9,name:"Абай",src:"/nomad-it-but-better/team-photos/abaz.jpg",occupation:"Сис. Админ"}]);return(a,o)=>(c(),u("div",Y,[(c(!0),u(w,null,I(s.value,_=>(c(),b(W,{key:_.id,name:_.name,occupation:_.occupation,src:_.src},null,8,["name","occupation","src"]))),128))]))}});const X=r(z,[["__scopeId","data-v-fa8b28ba"]]),J=e=>(h("data-v-73f5438e"),e=e(),f(),e),K={class:"team"},O={class:"team__container"},P=J(()=>t("div",{class:"team__title"},"Команда",-1)),Q=d({__name:"AboutTeam",setup(e){return(s,a)=>(c(),u("div",K,[t("div",O,[P,i(X)])]))}});const R=r(Q,[["__scopeId","data-v-73f5438e"]]),Z={class:"team"},tt=d({__name:"AboutUsView",setup(e){return T(()=>{window.scrollTo(0,0)}),(s,a)=>(c(),u("div",Z,[i(B),i(F),i(R)]))}});const ot=r(tt,[["__scopeId","data-v-6f7f013e"]]);export{ot as default};
