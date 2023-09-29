import{j as e,r as i}from"./react-9c5c79a9.js";import{q as N}from"./qs-e885f494.js";import{c as _}from"./classnames-c4d2d772.js";import{u as p,l as B,d as H,g as P,b as d,s as T,h as $,i as U,j as E,M as z,k as M,m as O,n as L,o as V,p as W,H as X,q as G}from"./index-17fceb8d.js";import{U as J,H as q,u as K}from"./HotelGroup-83739889.js";import{c as Q,a as C,b as Y}from"./yup-59d59ebb.js";import{u as Z}from"./formik-4a8e0c7a.js";import{i as ee}from"./minoru-4fba79f4.js";import{U as g,a as re}from"./UiFormInput-3583f9d3.js";import{U as se}from"./UiCheckBox-b0f9b9b1.js";import{u as te}from"./react-slider-45eef0b7.js";import{m as u,A as ae}from"./framer-motion-b1f0824c.js";import{L as oe}from"./react-icons-79e8378e.js";import{g as ce,a as ne}from"./react-router-15b1d2d3.js";import"./call-bind-c386ab47.js";import"./get-intrinsic-bd2830fd.js";import"./has-symbols-e8f3ca0e.js";import"./has-proto-f7d0b240.js";import"./function-bind-22e7ee79.js";import"./has-26d28e02.js";import"./side-channel-77beb9d3.js";import"./object-inspect-61557bd5.js";import"./react-dom-f76e703d.js";import"./scheduler-765c72db.js";import"./react-router-dom-4acbd2d9.js";import"./@remix-run-06a34d2a.js";import"./@reduxjs-a9bd0a2e.js";import"./immer-41fd5235.js";import"./redux-76ec1fc4.js";import"./@babel-19a2e885.js";import"./redux-thunk-ef899f4c.js";import"./axios-ce212671.js";import"./react-redux-eefa6884.js";import"./hoist-non-react-statics-3f8ebaa8.js";import"./react-is-a192e302.js";import"./use-sync-external-store-772ab098.js";import"./UiButton-2f7611ec.js";import"./react-content-loader-c1e51403.js";import"./property-expr-38205fa5.js";import"./tiny-case-d0726479.js";import"./toposort-c0aaf0c3.js";import"./deepmerge-15f827de.js";import"./lodash-es-87d1a1d5.js";import"./react-fast-compare-22d988de.js";import"./tiny-warning-c932d744.js";const pe=()=>{const s=p(B),a=p(H),t=p(P),c=d(),o=n=>{c(T(n))},r=Z({initialValues:{location:s,checkInDate:a,countDays:t},enableReinitialize:!0,validationSchema:Q().shape({location:C().required("*поле обязательно"),checkInDate:C().required("*поле обязательно"),countDays:Y().min(1,"*минимальное значение - 1").typeError("*поле должно содержать только цифры").required("*поле обязательно")}),onSubmit:o});return e.jsxs("form",{onSubmit:r.handleSubmit,className:"block",children:[e.jsx(g,{name:"location",title:"Локация",type:"string",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.location,errors:r.errors.location,touched:r.touched.location}),e.jsx(g,{name:"checkInDate",type:"date",title:"Дата заселения",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.checkInDate,errors:r.errors.checkInDate,touched:r.touched.checkInDate}),e.jsx(g,{name:"countDays",type:"number",title:"Количество дней",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.countDays,errors:r.errors.countDays,touched:r.touched.countDays}),e.jsx(re,{title:"Найти",disabled:!ee(r.errors)})]})},ie="_wrapper__flex_1g14o_2",le="_wrapper__label_1g14o_6",I={wrapper__flex:ie,wrapper__customСheckbox:"_wrapper__customСheckbox_1g14o_6",wrapper__label:le},_e=()=>{const s=p($),a=d(),t=o=>{a(U(o))},c=[...new Array(5)].map((o,r)=>e.jsx("div",{className:I.wrapper__flex,children:e.jsx(se,{id:`div${r}`,checked:s.includes(5-r),onChange:()=>t(5-r),className:I.wrapper__customСheckbox,label:e.jsx(J,{stars:5-r})})},r));return e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Количество звезд"}),c]})};const me=()=>{const s=p(E),[a,t]=i.useState(s),c=d();i.useEffect(()=>{t(s)},[s]);const o=n=>{c(O(n))},r=n=>{t(n),o(n)};return e.jsxs("div",{className:"block",children:[e.jsx("h3",{children:"Цена за 1 ночь"}),e.jsxs("div",{children:[e.jsx("input",{className:_("slider__value","slider__left"),type:"number",value:a[0],onChange:n=>r([Number(n.target.value),s[1]])}),e.jsx("input",{className:_("slider__value","slider__right"),type:"number",value:a[1],onChange:n=>r([s[0],Number(n.target.value)])})]}),e.jsx(te,{className:"slider",onAfterChange:o,onChange:t,value:a,min:z,max:M})]})},ue="_wrapper_1rkzd_1",de={wrapper:ue},D=()=>e.jsxs("div",{className:de.wrapper,children:[e.jsx(pe,{}),e.jsx(_e,{}),e.jsx(me,{})]}),j="/ReactTestHotelFront/assets/carouselImg1-98a7278a.png",y="/ReactTestHotelFront/assets/carouselimg2-d3758693.png",b="/ReactTestHotelFront/assets/carouselimg3-32214e64.png",he="_carousel_1m0km_1",we="_carousel__inner_1m0km_7",xe="_carousel__item_1m0km_10",f={carousel:he,carousel__inner:we,carousel__item:xe},ge=()=>{const[s,a]=i.useState(0),t=i.useRef(null);i.useEffect(()=>{t.current&&a(t.current.scrollWidth-t.current.offsetWidth)},[]);const c=[j,y,b,j,y,b,j,y,b];return e.jsx(u.div,{ref:t,className:f.carousel,whileTap:"grabbing",children:e.jsx(u.div,{drag:"x",dragConstraints:{right:0,left:-s},className:f.carousel__inner,children:c.map((o,r)=>e.jsx(u.div,{className:f.carousel__item,children:e.jsx("img",{src:o})},r))})})},je="_wrapper_pgi8p_1",ye="_wrapper__title_pgi8p_7",be="_wrapper__name_pgi8p_12",fe="_wrapper__symbol_pgi8p_20",Se="_wrapper__date_pgi8p_23",ve="_wrapper__carousel_pgi8p_28",l={wrapper:je,wrapper__title:ye,wrapper__name:be,wrapper__symbol:fe,wrapper__date:Se,wrapper__carousel:ve},ke=({location:s,checkInDate:a,hotels:t})=>e.jsxs("div",{className:_("block",l.wrapper),children:[e.jsxs("div",{className:l.wrapper__title,children:[e.jsxs("div",{className:l.wrapper__name,children:[e.jsx("div",{children:"Отели"}),e.jsx("div",{className:l.wrapper__symbol,children:">"}),e.jsx("div",{children:s})]}),e.jsx("div",{className:l.wrapper__date,children:L(a)})]}),e.jsx("div",{className:l.wrapper__carousel,children:e.jsx(ge,{})}),e.jsx(q,{hotels:t,empty:"Нет подходящих отелей"})]}),Ne="_wrapper__button_y9uyz_1",Ce="_wrapper__settingIcon_y9uyz_8",Ie="_wrapper__container_y9uyz_13",De="_wrapper__block_y9uyz_22",m={wrapper__button:Ne,wrapper__settingIcon:Ce,wrapper__container:Ie,wrapper__block:De},Be=({component:s})=>{const[a,t]=i.useState(!1),c=()=>{t(o=>!o)};return e.jsxs("div",{className:m.wrapper,children:[e.jsx("button",{className:_("block",m.wrapper__button),onClick:c,children:e.jsx(oe,{className:m.wrapper__settingIcon})}),e.jsx(ae,{children:a&&e.jsx("div",{className:m.wrapper__container,onClick:c,children:e.jsx(u.div,{initial:{x:-300,opacity:0},animate:{x:0,opacity:1},exit:{x:300,opacity:0},className:_("block",m.wrapper__block),onClick:o=>o.stopPropagation(),children:s},"PopupMenu")})})]})},He="_wrapper_g8cqb_1",Pe="_wrapper__container_g8cqb_10",$e="_wrapper__group_g8cqb_17",S={wrapper:He,wrapper__container:Pe,wrapper__group:$e},Ee=()=>{const s=p(B),a=p(H),t=p(P),c=p($),o=p(E),r=p(V),[n,v]=i.useState(!1),{searchParams:h}=ce(),k=ne(),w=d(),{isScreenMd:A,isScreenXl:F}=K();return i.useEffect(()=>{if(h){const x=N.parse(h);w(W(x)),v(!0)}},[]),i.useEffect(()=>{const x=N.stringify({location:s,checkInDate:a,countDays:t,sortByStars:c,sortByPrice:o}),R=X.replace(":searchParams?",x);k(R)},[s,a,t,c,o,k]),i.useEffect(()=>{(!h||n)&&(w(G({location:s,checkInDate:a,countDays:t,sortByStars:c,sortByPrice:o})),v(!0))},[s,a,t,c,o,n,w]),e.jsx("div",{className:S.wrapper,children:e.jsxs("div",{className:S.wrapper__container,children:[F?e.jsx(D,{}):e.jsx(Be,{component:e.jsx(D,{})}),A?e.jsx(ke,{location:s,checkInDate:a,hotels:r}):e.jsx("div",{className:_("block",S.wrapper__group),children:e.jsx(q,{hotels:r,empty:"Нет подходящих отелей"})})]})})},Nr=Ee;export{Nr as default};