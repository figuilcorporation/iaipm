import{r as c,u as N,a as x,c as t,j as e,H as g,I as _}from"./app.1cc7bd76.js";import{c as w}from"./index.0579b088.js";import{u as b}from"./useTypedPage.035c5fb9.js";import{A as C}from"./AuthenticationCard.21deb111.js";import{C as y}from"./Checkbox.6ebe023c.js";import{I as r}from"./InputLabel.9e7c825a.js";import{P as F}from"./PrimaryButton.bea87d9e.js";import{T as m,I as l}from"./TextInput.9249771e.js";import{C as h}from"./CustomSelect.1045261a.js";import"./AuthenticationCardLogo.a2b2bb4a.js";import"./hoist-non-react-statics.cjs.7313caf3.js";function M(n){const u=b(),[d,p]=c.exports.useState({label:n.levels[0].name,value:n.levels[0].id}),[o,f]=c.exports.useState([]),i=N(),a=x({first_name:"",level_id:n.levels[0].id,last_name:"",username:"",email:"",phone:"",password:"",password_confirmation:"",terms:!1,interest_ids:[0]});c.exports.useEffect(()=>{a.setData("level_id",d.value)},[d]),c.exports.useEffect(()=>{o&&a.setData("interest_ids",Array.from(o,s=>s.value))},[o]);function v(s){s.preventDefault(),a.post(i("register"),{onFinish:()=>a.reset("password","password_confirmation")})}return t(C,{children:[e(g,{title:"Register"}),t("form",{onSubmit:v,children:[t("div",{className:"mb-3",children:[t(r,{htmlFor:"first_name",children:["Nom ",e("small",{className:"text-red-500",children:"*"})]}),e(m,{id:"first_name",type:"text",className:"mt-1 block w-full",value:a.data.first_name,onChange:s=>a.setData("first_name",s.currentTarget.value),required:!0,autoFocus:!0,autoComplete:"first_name"}),e(l,{className:"mt-2",message:a.errors.first_name})]}),t("div",{className:"mb-3",children:[e(r,{htmlFor:"last_name",children:"Pr\xE9nom"}),e(m,{id:"last_name",type:"text",className:"mt-1 block w-full",value:a.data.last_name,onChange:s=>a.setData("last_name",s.currentTarget.value),required:!0,autoFocus:!0,autoComplete:"last_name"}),e(l,{className:"mt-2",message:a.errors.last_name})]}),t("div",{className:"mb-3",children:[t(r,{htmlFor:"username",children:["Nom d'utilisateur ",e("small",{className:"text-red-500",children:"*"})]}),e(m,{id:"username",type:"text",className:"mt-1 block w-full",value:a.data.username,onChange:s=>a.setData("username",s.currentTarget.value),required:!0,autoFocus:!0}),e(l,{className:"mt-2",message:a.errors.username})]}),t("div",{className:"mb-3",children:[t(r,{htmlFor:"email",children:["Email ",e("small",{className:"text-red-500",children:"*"})]}),e(m,{id:"email",type:"email",className:"mt-1 block w-full",value:a.data.email,onChange:s=>a.setData("email",s.currentTarget.value),required:!0}),e(l,{className:"mt-2",message:a.errors.email})]}),t("div",{className:"mb-3",children:[t(r,{htmlFor:"phone",children:["T\xE9l\xE9phone ",e("small",{className:"text-red-500",children:"*"})]}),e(m,{id:"phone",type:"text",className:"mt-1 block w-full",value:a.data.phone,onChange:s=>a.setData("phone",s.currentTarget.value),required:!0,autoFocus:!0,autoComplete:"phone"}),e(l,{className:"mt-2",message:a.errors.phone})]}),e("div",{className:"mb-3",children:e(h,{label:"Niveau",required:!0,selectData:n.levels,errors:a.errors,defaultValue:d,name:"level_id",onChange:p})}),e("div",{className:"mb-3",children:e(h,{closeMenuOnSelect:!1,label:"Centre(s) d'int\xE9r\xEAt(s)",isMulti:!0,selectData:u.props.interestAreas,placeholder:"Centre(s) d'int\xE9r\xEAt(s)",errors:a.errors,defaultValue:o,name:"level_ids",onChange:f})}),t("div",{className:"mt-3",children:[t(r,{htmlFor:"password",children:["Password ",e("small",{className:"text-red-500",children:"*"})]}),e(m,{id:"password",type:"password",className:"mt-1 block w-full",value:a.data.password,onChange:s=>a.setData("password",s.currentTarget.value),required:!0,autoComplete:"new-password"}),e(l,{className:"mt-2",message:a.errors.password})]}),t("div",{className:"mt-3",children:[t(r,{htmlFor:"password_confirmation",children:["Confirm Password ",e("small",{className:"text-red-500",children:"*"})]}),e(m,{id:"password_confirmation",type:"password",className:"mt-1 block w-full",value:a.data.password_confirmation,onChange:s=>a.setData("password_confirmation",s.currentTarget.value),required:!0,autoComplete:"new-password"}),e(l,{className:"mt-2",message:a.errors.password_confirmation})]}),u.props.jetstream.hasTermsAndPrivacyPolicyFeature&&e("div",{className:"mt-3",children:t(r,{htmlFor:"terms",children:[t("div",{className:"flex items-center",children:[e(y,{name:"terms",id:"terms",checked:a.data.terms,onChange:s=>a.setData("terms",s.currentTarget.checked),required:!0}),t("div",{className:"ml-2",children:["I agree to the",e("a",{target:"_blank",href:i("terms.show"),className:"underline text-sm text-slate-600 hover:text-slate-900",children:"Terms of Service"}),"and",e("a",{target:"_blank",href:i("policy.show"),className:"underline text-sm text-slate-600 hover:text-slate-900",children:"Privacy Policy"})]})]}),e(l,{className:"mt-2",message:a.errors.terms})]})}),t("div",{className:"flex items-center justify-end mt-3",children:[e(_,{href:i("login"),className:"underline text-sm text-slate-600 hover:text-slate-900",children:"D\xE9j\xE0 inscrit?"}),e(F,{className:w("ml-4",{"opacity-25":a.processing}),disabled:a.processing,children:"M'inscrire"})]})]})]})}export{M as default};
