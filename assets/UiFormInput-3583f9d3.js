import{j as n}from"./react-9c5c79a9.js";import{c}from"./classnames-c4d2d772.js";import{m as u}from"./framer-motion-b1f0824c.js";const m="_wrapper_zjy9e_1",b="_wrapper__button_zjy9e_4",w="_wrapper__button_disabled_zjy9e_19",a={wrapper:m,wrapper__button:b,wrapper__button_disabled:w},f=({disabled:r,title:t})=>{const e=r?"":{scale:1.02};return n.jsx(u.div,{className:a.wrapper,whileHover:e,children:n.jsx("button",{type:"submit",disabled:r,className:c(a.wrapper__button,r&&a.wrapper__button_disabled),children:t})})},d="_container_1q76q_1",j="_container__label_1q76q_8",q="_container__input_1q76q_15",x="_container__errors_1q76q_24",h="_container__error_1q76q_24",_={container:d,container__label:j,container__input:q,container__errors:x,container__error:h},z=({name:r,type:t,title:e,onChange:i,onBlur:p,value:l,errors:o,touched:s})=>n.jsxs("div",{className:_.container,children:[n.jsx("label",{className:c(_.container__label,s&&o&&_.container__errors),htmlFor:r,children:e}),n.jsx("input",{id:r,name:r,type:t,className:_.container__input,value:l,onChange:i,onBlur:p}),s&&o&&n.jsx("div",{className:_.container__error,children:o})]});export{z as U,f as a};