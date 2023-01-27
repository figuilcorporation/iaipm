import{j as e,c as l,F as u}from"./app.9f32e429.js";import{A as N}from"./AppLayout.083cd0bc.js";import"./index.0579b088.js";import"./useTypedPage.3c366cc1.js";import"./transition.9e2ccc81.js";function g({className:a}){return e("img",{src:"/IAIPM/Logo.png",alt:"Figuil",className:"h-[80px]"})}function b(a){var s,i,d,r,n,c,m,o,h;return e("div",{children:l("div",{className:"p-6 sm:px-10 bg-white border-b border-slate-200",children:[e("div",{children:e(g,{className:"block h-12 w-auto"})}),l("div",{className:"",children:[l("h3",{className:"mt-8 text-2xl",children:["Salut ",l("span",{className:"font-bold ",children:[a.user.full_name,","]})]}),e("p",{className:"text-slate-500",children:"Bienvenue dans le tableau de bord de IAIPM Parrainage"})]}),l("div",{className:"mt-6",children:[((s=a.student.registration)==null?void 0:s.mentor)&&l(u,{children:[e("h5",{className:"text-slate-900 mb-3 text-2xl font-bold",children:"Votre Parrain"}),e("p",{className:"border-b my-2 w-full"}),e("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-6",children:l("div",{className:"p-3 rounded-md border shadow-md",children:[e("h4",{className:"text-xl md:text-2xl text-slate-900 mb-1 font-medium capitalize",children:(d=(i=a.student.registration)==null?void 0:i.mentor)==null?void 0:d.full_name}),e("div",{className:"",children:l("ul",{children:[l("li",{children:["Niveau :"," ",e("span",{className:"text-slate-900",children:(n=(r=a.student.registration)==null?void 0:r.mentor)==null?void 0:n.registration.level.name})]}),l("li",{children:["Telephone :"," ",e("span",{className:"text-slate-900",children:(m=(c=a.student.registration)==null?void 0:c.mentor)==null?void 0:m.registration.student.phone})]}),l("li",{children:["Adresse Email :"," ",e("span",{className:"text-slate-900",children:(h=(o=a.student.registration)==null?void 0:o.mentor)==null?void 0:h.registration.student.email})]})]})})]})})]}),a.godsons.length>0&&l(u,{children:[e("h5",{className:"text-slate-900 mb-3 mt-10 text-2xl font-bold",children:"Vos Filleuls"}),e("p",{className:"border-b my-2 w-full"}),e("div",{className:"grid grid-cols-2 md:grid-cols-2 gap-6",children:a.godsons.map(t=>{var x;return l("div",{className:"p-3 rounded-md border shadow-md",children:[e("h4",{className:"text-xl md:text-2xl text-slate-900 mb-1 font-medium capitalize",children:t.full_name}),e("div",{className:"",children:l("ul",{children:[l("li",{children:["Niveau :"," ",e("span",{className:"text-slate-900",children:(x=t.registration)==null?void 0:x.level.name})]}),l("li",{children:["Telephone :"," ",e("span",{className:"text-slate-900",children:t.phone})]}),l("li",{children:["Adresse Email :"," ",e("span",{className:"text-slate-900",children:t.email})]})]})})]},t.id)})})]})]})]})})}function y(a){return e(N,{title:"Dashboard",renderHeader:()=>e("h2",{className:"font-semibold text-xl text-slate-800 leading-tight",children:"Tableau de bord"}),children:e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-xl sm:rounded-lg",children:e(b,{...a})})})})})}export{y as default};