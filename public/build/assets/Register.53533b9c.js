import{r as c,u as N,a as x,c as t,j as a,H as g,I as _}from"./app.ae1c3879.js";import{c as w}from"./index.0579b088.js";import{u as b}from"./useTypedPage.dc4de3ad.js";import{A as C}from"./AuthenticationCard.a0b299dd.js";import{C as y}from"./Checkbox.0e73718e.js";import{I as r}from"./InputLabel.93ff7e42.js";import{P as F}from"./PrimaryButton.010b5f55.js";import{T as m,I as l}from"./TextInput.d387747c.js";import{C as h}from"./CustomSelect.b614ff5e.js";import"./AuthenticationCardLogo.38a94c34.js";import"./hoist-non-react-statics.cjs.7313caf3.js";function M(o){const u=b(),[d,p]=c.exports.useState({label:o.levels[0].name,value:o.levels[0].id}),[n,f]=c.exports.useState([]),i=N(),e=x({first_name:"",level_id:o.levels[0].id,last_name:"",username:"",email:"",phone:"",password:"",password_confirmation:"",terms:!1,interest_ids:[0]});c.exports.useEffect(()=>{e.setData("level_id",d.value)},[d]),c.exports.useEffect(()=>{n&&e.setData("interest_ids",Array.from(n,s=>s.value))},[n]);function v(s){s.preventDefault(),console.log(e.data),e.post(i("register"),{onFinish:()=>e.reset("password","password_confirmation")})}return t(C,{children:[a(g,{title:"Register"}),t("form",{onSubmit:v,children:[t("div",{className:"mb-3",children:[t(r,{htmlFor:"first_name",children:["Nom ",a("small",{className:"text-red-500",children:"*"})]}),a(m,{id:"first_name",type:"text",className:"mt-1 block w-full",value:e.data.first_name,onChange:s=>e.setData("first_name",s.currentTarget.value),required:!0,autoFocus:!0,autoComplete:"first_name"}),a(l,{className:"mt-2",message:e.errors.first_name})]}),t("div",{className:"mb-3",children:[a(r,{htmlFor:"last_name",children:"Pr\xE9nom"}),a(m,{id:"last_name",type:"text",className:"mt-1 block w-full",value:e.data.last_name,onChange:s=>e.setData("last_name",s.currentTarget.value),required:!0,autoFocus:!0,autoComplete:"last_name"}),a(l,{className:"mt-2",message:e.errors.last_name})]}),t("div",{className:"mb-3",children:[t(r,{htmlFor:"username",children:["Nom d'utilisateur ",a("small",{className:"text-red-500",children:"*"})]}),a(m,{id:"username",type:"text",className:"mt-1 block w-full",value:e.data.username,onChange:s=>e.setData("username",s.currentTarget.value),required:!0,autoFocus:!0}),a(l,{className:"mt-2",message:e.errors.username})]}),t("div",{className:"mb-3",children:[t(r,{htmlFor:"email",children:["Email ",a("small",{className:"text-red-500",children:"*"})]}),a(m,{id:"email",type:"email",className:"mt-1 block w-full",value:e.data.email,onChange:s=>e.setData("email",s.currentTarget.value),required:!0}),a(l,{className:"mt-2",message:e.errors.email})]}),t("div",{className:"mb-3",children:[t(r,{htmlFor:"phone",children:["T\xE9l\xE9phone ",a("small",{className:"text-red-500",children:"*"})]}),a(m,{id:"phone",type:"text",className:"mt-1 block w-full",value:e.data.phone,onChange:s=>e.setData("phone",s.currentTarget.value),required:!0,autoFocus:!0,autoComplete:"phone"}),a(l,{className:"mt-2",message:e.errors.phone})]}),a("div",{className:"mb-3",children:a(h,{label:"Niveau",required:!0,selectData:o.levels,errors:e.errors,defaultValue:d,name:"level_id",onChange:p})}),a("div",{className:"mb-3",children:a(h,{closeMenuOnSelect:!1,label:"Centre(s) d'int\xE9r\xEAt(s)",isMulti:!0,selectData:u.props.interestAreas,placeholder:"Centre(s) d'int\xE9r\xEAt(s)",errors:e.errors,defaultValue:n,name:"level_ids",onChange:f})}),t("div",{className:"mt-3",children:[t(r,{htmlFor:"password",children:["Password ",a("small",{className:"text-red-500",children:"*"})]}),a(m,{id:"password",type:"password",className:"mt-1 block w-full",value:e.data.password,onChange:s=>e.setData("password",s.currentTarget.value),required:!0,autoComplete:"new-password"}),a(l,{className:"mt-2",message:e.errors.password})]}),t("div",{className:"mt-3",children:[t(r,{htmlFor:"password_confirmation",children:["Confirm Password ",a("small",{className:"text-red-500",children:"*"})]}),a(m,{id:"password_confirmation",type:"password",className:"mt-1 block w-full",value:e.data.password_confirmation,onChange:s=>e.setData("password_confirmation",s.currentTarget.value),required:!0,autoComplete:"new-password"}),a(l,{className:"mt-2",message:e.errors.password_confirmation})]}),u.props.jetstream.hasTermsAndPrivacyPolicyFeature&&a("div",{className:"mt-3",children:t(r,{htmlFor:"terms",children:[t("div",{className:"flex items-center",children:[a(y,{name:"terms",id:"terms",checked:e.data.terms,onChange:s=>e.setData("terms",s.currentTarget.checked),required:!0}),t("div",{className:"ml-2",children:["I agree to the",a("a",{target:"_blank",href:i("terms.show"),className:"underline text-sm text-slate-600 hover:text-slate-900",children:"Terms of Service"}),"and",a("a",{target:"_blank",href:i("policy.show"),className:"underline text-sm text-slate-600 hover:text-slate-900",children:"Privacy Policy"})]})]}),a(l,{className:"mt-2",message:e.errors.terms})]})}),t("div",{className:"flex items-center justify-end mt-3",children:[a(_,{href:i("login"),className:"underline text-sm text-slate-600 hover:text-slate-900",children:"D\xE9j\xE0 inscrit?"}),a(F,{className:w("ml-4",{"opacity-25":e.processing}),disabled:e.processing,children:"M'inscrire"})]})]})]})}export{M as default};