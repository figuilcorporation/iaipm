import{T as s}from"./Table.c2c739b6.js";import{C as l}from"./CustomLayout.417f6352.js";import{j as r}from"./app.1cc7bd76.js";import"./hoist-non-react-statics.cjs.7313caf3.js";import"./AppLayout.42fa2af9.js";import"./index.0579b088.js";import"./useTypedPage.035c5fb9.js";import"./transition.0dc79da7.js";const o=[{name:"\xC9tudiant",selector:e=>e.full_name,sortable:!0},{name:"Niveau",selector:e=>{var t,a;return e.registration&&((a=(t=e.registration)==null?void 0:t.level)==null?void 0:a.name)},sortable:!0},{name:"Email",selector:e=>e.email,sortable:!0},{name:"T\xE9l\xE9phone",selector:e=>e.phone,sortable:!0}],h=({students:e})=>r(l,{title:"Liste des \xE9tudiantss",renderHeader:()=>r("h2",{className:"font-semibold text-xl text-slate-800 leading-tight",children:"Liste des \xE9tudiants"}),children:r(s,{searchPlaceholder:"Rechercher par le nom, pr\xE9nom, matricule, sexe",data:e,columns:o,filters:["full_name","gender"]})});export{h as default};