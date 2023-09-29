import{r as i,j as r}from"./react-9c5c79a9.js";import{c as W}from"./react-dom-f76e703d.js";import{L as b,H as Y}from"./react-router-dom-4acbd2d9.js";import{c as S,a as C,b as K}from"./@reduxjs-a9bd0a2e.js";import{a as X,i as E}from"./axios-ce212671.js";import{u as G,a as Q,P as Z}from"./react-redux-eefa6884.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./react-is-a192e302.js";import{c as j}from"./classnames-c4d2d772.js";import{B as ee,a as te,b as se,R as re}from"./react-icons-79e8378e.js";import{A as oe,m as ae}from"./framer-motion-b1f0824c.js";import{d as ne,e as ce}from"./react-router-15b1d2d3.js";import"./call-bind-c386ab47.js";import"./get-intrinsic-bd2830fd.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./scheduler-765c72db.js";import"./@remix-run-06a34d2a.js";import"./immer-41fd5235.js";import"./redux-76ec1fc4.js";import"./@babel-19a2e885.js";import"./redux-thunk-ef899f4c.js";import"./use-sync-external-store-772ab098.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();const y=e=>{const t=localStorage.getItem(e);try{if(t!==null)return JSON.parse(t)}catch(s){return console.log(s),!1}},m=(e,t)=>{localStorage.setItem(e,t)},T="auth",P="user",F="bankCard",O="favorites",B=X.create({baseURL:"https://reacttesthotelback-production.up.railway.app/"}),H={getHotels:async({location:e,checkInDate:t,countDays:s,sortByPrice:n,sortByStars:o},{dispatch:a,rejectWithValue:c})=>{var d;try{return(await B.get(`hotels/${e}&${t}&${s}&${n}/${o}`)).data}catch(u){if(E(u)){const l=((d=u.response)==null?void 0:d.data.message)||u.message;return a(I(l)),c(u)}}},getHotelById:async({id:e,checkInDate:t,countDays:s},{dispatch:n,rejectWithValue:o})=>{var a;try{return(await B.get(`hotels/byId/${e}&${t}&${s}`)).data}catch(c){if(E(c)){const d=((a=c.response)==null?void 0:a.data.message)||c.message;return n(I(d)),o(c)}}}},v=S("hotels/fetchAllHotels",H.getHotels),x=S("hotels/fetchHotelById",H.getHotelById),ie=e=>{const t=e.getFullYear(),s=e.getMonth()<10?"0"+e.getMonth():e.getMonth(),n=e.getDate()<10?"0"+e.getDate():e.getDate();return`${t}-${s}-${n}`},le=()=>{const e=new Date,t=new Date(e.getFullYear(),e.getMonth()+1,e.getDate());return ie(t)},Lt=e=>{if(e==="")return"ошибка параметров";const[t,s,n]=e.split(/-/);return`${n} ${["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"][+s-1]} ${t}`},de=500,he=5e4,ue={location:"Москва",checkInDate:le(),countDays:1,sortByStars:[],sortByPrice:[de,he],isLoading:!1,error:"",sortType:[{title:"Рейтинг",type:"stars",desc:!0},{title:"Цена",type:"priceAvg",desc:!0}],hotels:[],hotelById:null,favorites:y(O)||[]},U=C({name:"hotels",initialState:ue,reducers:{setSearchParams:(e,t)=>{e.location=t.payload.location,e.checkInDate=t.payload.checkInDate,e.countDays=+t.payload.countDays,e.sortByPrice=t.payload.sortByPrice.map(Number),t.payload.sortByStars&&(e.sortByStars=t.payload.sortByStars.map(Number))},setSearchForm:(e,t)=>{e.location=t.payload.location,e.checkInDate=t.payload.checkInDate,e.countDays=t.payload.countDays},setSortByStars:(e,t)=>{e.sortByStars=e.sortByStars.find(s=>s===t.payload)?e.sortByStars.filter(s=>s!==t.payload):[...e.sortByStars,t.payload]},setSortByPrice:(e,t)=>{e.sortByPrice=t.payload},changeFavorites:(e,t)=>{e.favorites=e.favorites.find(s=>s._id===t.payload._id)?e.favorites.filter(s=>s._id!==t.payload._id):[...e.favorites,t.payload]},sortFavorites:(e,t)=>{e.favorites.sort((s,n)=>t.payload.desc?n[t.payload.type]-s[t.payload.type]:s[t.payload.type]-n[t.payload.type]),e.sortType.map(s=>s.type===t.payload.type?s.desc=!s.desc:"")},setErrorNotification:(e,t)=>{e.error=t.payload}},extraReducers:e=>{e.addCase(v.fulfilled,(t,s)=>{t.hotels=s.payload,t.isLoading=!1}),e.addCase(v.pending,t=>{t.isLoading=!0,t.error=""}),e.addCase(v.rejected,t=>{t.isLoading=!1,t.hotels=[]}),e.addCase(x.fulfilled,(t,s)=>{t.hotelById=s.payload,t.isLoading=!1}),e.addCase(x.pending,t=>{t.isLoading=!0,t.error=""}),e.addCase(x.rejected,t=>{t.isLoading=!1})}}),$t=e=>e.hotels.location,Ct=e=>e.hotels.checkInDate,Tt=e=>e.hotels.countDays,Pt=e=>e.hotels.sortByStars,Ft=e=>e.hotels.sortByPrice,Ot=e=>e.hotels.isLoading,pe=e=>e.hotels.error,Ht=e=>e.hotels.sortType,Ut=e=>e.hotels.hotels,Vt=e=>e.hotels.hotelById,_e=e=>e.hotels.favorites,{setSearchParams:Mt,setSearchForm:zt,setSortByStars:qt,setSortByPrice:Jt,changeFavorites:Wt,sortFavorites:Yt,setErrorNotification:I}=U.actions,me=U.reducer,A=e=>async({email:t,password:s},{dispatch:n,rejectWithValue:o})=>{var a;try{return(await B.post(e,{email:t,password:s})).data}catch(c){if(E(c)){const d=((a=c.response)==null?void 0:a.data.message)||c.message;return n(Se(d)),o(c)}}},V={doAuthorization:A("auth/login"),doRegistr:A("auth/register")},R=S("auth/fetchAuth",V.doAuthorization),N=S("auth/fetchRegistr",V.doRegistr),ye={isAuth:y(T),user:y(P),bankCard:y(F),error:""},M=C({name:"auth",initialState:ye,reducers:{setAuth:(e,t)=>{e.isAuth=t.payload},setEmail:(e,t)=>{e.user={...e.user,email:t.payload}},setBankCard:(e,t)=>{e.bankCard=t.payload},setErrorNotification:(e,t)=>{e.error=t.payload}},extraReducers:e=>{e.addCase(R.fulfilled,(t,s)=>{t.isAuth=!0,t.user=s.payload}),e.addCase(R.pending,t=>{t.error=""}),e.addCase(N.fulfilled,(t,s)=>{t.isAuth=!0,t.user=s.payload}),e.addCase(N.pending,t=>{t.error=""})}}),fe=e=>e.auth.isAuth,Kt=e=>e.auth.user,Xt=e=>e.auth.bankCard,Gt=e=>e.auth.error,{setAuth:ge,setEmail:Qt,setBankCard:Zt,setErrorNotification:Se}=M.actions,ve=M.reducer,p=K({reducer:{hotels:me,auth:ve}});p.subscribe(()=>{const e=p.getState().auth.user,t=p.getState().auth.isAuth,s=p.getState().auth.bankCard,n=p.getState().hotels.favorites;m(T,String(t)),m(P,JSON.stringify(e)),m(F,JSON.stringify(s)),m(O,JSON.stringify(n))});const xe=e=>{const t=document.querySelector(":root");["text","theme","bg"].forEach(n=>{t&&t.style.setProperty(`--${n}-color-default`,`var(--${n}-color-${e?"dark":"white"})`)})},ke={isDark:!1},z=i.createContext(ke),we=({children:e,...t})=>{const s=y("isDark"),[n,o]=i.useState(s?!!s:!1);i.useEffect(()=>{xe(n)},[n]);const a=()=>{o(c=>!c),m("isDark",`${!n}`)};return r.jsx(z.Provider,{value:{isDark:n,changeIsDark:a},...t,children:e})},Ee="modulepreload",Be=function(e){return"/ReactTestHotelFront/"+e},L={},f=function(t,s,n){if(!s||s.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(s.map(a=>{if(a=Be(a),a in L)return;L[a]=!0;const c=a.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const g=o[_];if(g.href===a&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${d}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":Ee,c||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),c)return new Promise((_,g)=>{l.addEventListener("load",_),l.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a})},je=G,D=Q,q="/hotels/:searchParams?",De="/:id/:checkInDate/:countDays",J="/favorites",be="/*",Ie=i.lazy(()=>f(()=>import("./index-b5ac96db.js"),["assets/index-b5ac96db.js","assets/react-9c5c79a9.js","assets/call-bind-c386ab47.js","assets/get-intrinsic-bd2830fd.js","assets/has-symbols-e8f3ca0e.js","assets/has-proto-f7d0b240.js","assets/function-bind-22e7ee79.js","assets/has-26d28e02.js","assets/qs-e885f494.js","assets/side-channel-77beb9d3.js","assets/object-inspect-61557bd5.js","assets/classnames-c4d2d772.js","assets/HotelGroup-c2e3c9c7.js","assets/react-router-dom-4acbd2d9.js","assets/react-router-15b1d2d3.js","assets/@remix-run-06a34d2a.js","assets/UiButton-2f7611ec.js","assets/framer-motion-b1f0824c.js","assets/UiButton-ddbff60f.css","assets/react-icons-79e8378e.js","assets/react-content-loader-c1e51403.js","assets/HotelGroup-60b5689e.css","assets/yup-59d59ebb.js","assets/property-expr-38205fa5.js","assets/tiny-case-d0726479.js","assets/toposort-c0aaf0c3.js","assets/formik-4a8e0c7a.js","assets/deepmerge-15f827de.js","assets/lodash-es-87d1a1d5.js","assets/react-fast-compare-22d988de.js","assets/tiny-warning-c932d744.js","assets/hoist-non-react-statics-3f8ebaa8.js","assets/minoru-4fba79f4.js","assets/UiFormInput-3583f9d3.js","assets/UiFormInput-9eeab60d.css","assets/UiCheckBox-b0f9b9b1.js","assets/UiCheckBox-de660cca.css","assets/react-slider-45eef0b7.js","assets/@babel-19a2e885.js","assets/react-dom-f76e703d.js","assets/scheduler-765c72db.js","assets/@reduxjs-a9bd0a2e.js","assets/immer-41fd5235.js","assets/redux-76ec1fc4.js","assets/redux-thunk-ef899f4c.js","assets/axios-ce212671.js","assets/react-redux-eefa6884.js","assets/react-is-a192e302.js","assets/use-sync-external-store-772ab098.js","assets/index-eff7abf0.css"])),Ae=i.lazy(()=>f(()=>import("./index-af72423f.js"),["assets/index-af72423f.js","assets/react-9c5c79a9.js","assets/call-bind-c386ab47.js","assets/get-intrinsic-bd2830fd.js","assets/has-symbols-e8f3ca0e.js","assets/has-proto-f7d0b240.js","assets/function-bind-22e7ee79.js","assets/has-26d28e02.js","assets/classnames-c4d2d772.js","assets/mask-js-5890106f.js","assets/UiButton-2f7611ec.js","assets/framer-motion-b1f0824c.js","assets/UiButton-ddbff60f.css","assets/UiCheckBox-b0f9b9b1.js","assets/UiCheckBox-de660cca.css","assets/react-router-15b1d2d3.js","assets/@remix-run-06a34d2a.js","assets/react-dom-f76e703d.js","assets/scheduler-765c72db.js","assets/react-router-dom-4acbd2d9.js","assets/@reduxjs-a9bd0a2e.js","assets/immer-41fd5235.js","assets/redux-76ec1fc4.js","assets/@babel-19a2e885.js","assets/redux-thunk-ef899f4c.js","assets/axios-ce212671.js","assets/react-redux-eefa6884.js","assets/hoist-non-react-statics-3f8ebaa8.js","assets/react-is-a192e302.js","assets/use-sync-external-store-772ab098.js","assets/react-icons-79e8378e.js","assets/index-9a963a77.css"])),Re=i.lazy(()=>f(()=>import("./index-06618268.js"),["assets/index-06618268.js","assets/react-9c5c79a9.js","assets/call-bind-c386ab47.js","assets/get-intrinsic-bd2830fd.js","assets/has-symbols-e8f3ca0e.js","assets/has-proto-f7d0b240.js","assets/function-bind-22e7ee79.js","assets/has-26d28e02.js","assets/classnames-c4d2d772.js","assets/framer-motion-b1f0824c.js","assets/HotelGroup-c2e3c9c7.js","assets/react-router-dom-4acbd2d9.js","assets/react-router-15b1d2d3.js","assets/@remix-run-06a34d2a.js","assets/UiButton-2f7611ec.js","assets/UiButton-ddbff60f.css","assets/react-icons-79e8378e.js","assets/react-content-loader-c1e51403.js","assets/HotelGroup-60b5689e.css","assets/react-dom-f76e703d.js","assets/scheduler-765c72db.js","assets/@reduxjs-a9bd0a2e.js","assets/immer-41fd5235.js","assets/redux-76ec1fc4.js","assets/@babel-19a2e885.js","assets/redux-thunk-ef899f4c.js","assets/axios-ce212671.js","assets/react-redux-eefa6884.js","assets/hoist-non-react-statics-3f8ebaa8.js","assets/react-is-a192e302.js","assets/use-sync-external-store-772ab098.js","assets/index-00f8cf81.css"])),Ne=i.lazy(()=>f(()=>import("./index-a74ffe61.js"),["assets/index-a74ffe61.js","assets/react-9c5c79a9.js","assets/call-bind-c386ab47.js","assets/get-intrinsic-bd2830fd.js","assets/has-symbols-e8f3ca0e.js","assets/has-proto-f7d0b240.js","assets/function-bind-22e7ee79.js","assets/has-26d28e02.js","assets/classnames-c4d2d772.js","assets/UiButton-2f7611ec.js","assets/framer-motion-b1f0824c.js","assets/UiButton-ddbff60f.css","assets/react-router-15b1d2d3.js","assets/@remix-run-06a34d2a.js","assets/index-56339630.css"])),Le=[{path:q,element:Ie},{path:De,element:Ae},{path:J,element:Re},{path:be,element:Ne}],$e=()=>i.useContext(z),Ce="_wrapper_1tvmr_1",Te="_wrapper__heart_1tvmr_7",Pe="_wrapper__heart_active_1tvmr_13",k={wrapper:Ce,wrapper__heart:Te,wrapper__heart_active:Pe},Fe=({onClick:e,isActive:t})=>r.jsx("button",{className:k.wrapper,children:r.jsx(ee,{onClick:e,className:j(k.wrapper__heart,t&&k.wrapper__heart_active)})}),Oe="_header_53iif_1",He="_header__title_53iif_9",Ue="_header__buttons_53iif_16",Ve="_header__count_53iif_20",Me="_header__link_53iif_33",ze="_header__icon_53iif_33",qe="_header__exit_53iif_51",h={header:Oe,header__title:He,header__buttons:Ue,header__count:Ve,header__link:Me,header__icon:ze,header__exit:qe},Je=()=>{const e=D(_e),t=$e(),s=je(),n=()=>{s(ge(!1))},o=i.useMemo(()=>q.substring(0,7),[]);return r.jsxs("header",{className:h.header,children:[r.jsx("div",{children:r.jsx(b,{className:h.header__title,to:o,children:"Simple Hotel Check"})}),r.jsxs("div",{className:h.header__buttons,children:[r.jsxs(b,{to:J,className:h.header__link,children:[r.jsx(Fe,{isActive:!0,onClick:()=>console.log()}),r.jsx("div",{className:h.header__count,children:e.length})]}),r.jsx("button",{className:h.header__icon,onClick:t.changeIsDark,children:t.isDark?r.jsx(te,{}):r.jsx(se,{})}),r.jsxs("button",{className:h.header__exit,onClick:n,children:[r.jsx("span",{children:"Выйти"}),r.jsx(re,{style:{color:"#41522E"}})]})]})]})},We="_wrapper_d7h2x_1",Ye={wrapper:We},Ke=({message:e})=>r.jsx("div",{className:j(Ye.wrapper),children:r.jsx("h3",{children:e})}),Xe=({error:e})=>{const[t,s]=i.useState(!!e);return i.useEffect(()=>{s(!!e),setTimeout(()=>{s(!1)},3e3)},[e]),r.jsx(r.Fragment,{children:r.jsx(oe,{children:t&&r.jsx(ae.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:r.jsx(Ke,{message:e})},"FetchWithError")})})},Ge="_wrapper_1kh4o_1",Qe={wrapper:Ge},Ze=({children:e})=>{const t=D(pe);return r.jsxs("div",{className:Qe.wrapper,children:[r.jsx(Je,{}),e,r.jsx(Xe,{error:t})]})},et="/ReactTestHotelFront/assets/loader-black-0962e58b.svg",$="/ReactTestHotelFront/assets/loader-white-14ecb893.svg",tt="/ReactTestHotelFront/assets/loader-blue-be271500.svg",st="_wrapper_vnsg6_1",rt="_loader_vnsg6_9",ot="_shadow_vnsg6_14",w={wrapper:st,loader:rt,shadow:ot},at=({theme:e="white",isShadow:t=!0,classes:s})=>{const[n,o]=i.useState("");return i.useEffect(()=>{switch(e){case"black":o(et);break;case"white":o($);break;case"blue":o(tt);break;default:o($);break}},[e]),r.jsx("div",{className:w.wrapper,children:r.jsx("img",{src:n,alt:"loader",className:j(w.loader,t&&w.shadow,s)})})},nt=i.lazy(()=>f(()=>import("./index-1d5aff16.js"),["assets/index-1d5aff16.js","assets/react-9c5c79a9.js","assets/call-bind-c386ab47.js","assets/get-intrinsic-bd2830fd.js","assets/has-symbols-e8f3ca0e.js","assets/has-proto-f7d0b240.js","assets/function-bind-22e7ee79.js","assets/has-26d28e02.js","assets/yup-59d59ebb.js","assets/property-expr-38205fa5.js","assets/tiny-case-d0726479.js","assets/toposort-c0aaf0c3.js","assets/formik-4a8e0c7a.js","assets/deepmerge-15f827de.js","assets/lodash-es-87d1a1d5.js","assets/react-fast-compare-22d988de.js","assets/tiny-warning-c932d744.js","assets/hoist-non-react-statics-3f8ebaa8.js","assets/minoru-4fba79f4.js","assets/react-router-dom-4acbd2d9.js","assets/react-router-15b1d2d3.js","assets/@remix-run-06a34d2a.js","assets/classnames-c4d2d772.js","assets/UiFormInput-3583f9d3.js","assets/framer-motion-b1f0824c.js","assets/UiFormInput-9eeab60d.css","assets/react-dom-f76e703d.js","assets/scheduler-765c72db.js","assets/@reduxjs-a9bd0a2e.js","assets/immer-41fd5235.js","assets/redux-76ec1fc4.js","assets/@babel-19a2e885.js","assets/redux-thunk-ef899f4c.js","assets/axios-ce212671.js","assets/react-redux-eefa6884.js","assets/react-is-a192e302.js","assets/use-sync-external-store-772ab098.js","assets/react-icons-79e8378e.js","assets/index-4a4f96b5.css"])),ct=()=>{const e=D(fe);return r.jsx("div",{className:"App",children:r.jsx(ne,{children:Le.map((t,s)=>r.jsx(ce,{path:t.path,element:r.jsx(i.Suspense,{fallback:r.jsx(at,{theme:"black",isShadow:!1}),children:e?r.jsx(Ze,{children:r.jsx(t.element,{})}):r.jsx(nt,{})})},s))})})};W.createRoot(document.getElementById("root")).render(r.jsx(Y,{children:r.jsx(Z,{store:p,children:r.jsx(we,{children:r.jsx(ct,{})})})}));export{Ht as A,Yt as B,Wt as C,Ot as D,Xe as F,q as H,de as M,Fe as U,fe as a,je as b,N as c,Ct as d,Gt as e,R as f,Tt as g,Pt as h,qt as i,Ft as j,he as k,$t as l,Jt as m,Lt as n,Ut as o,Mt as p,v as q,Kt as r,zt as s,Xt as t,D as u,Qt as v,Zt as w,Vt as x,x as y,_e as z};
