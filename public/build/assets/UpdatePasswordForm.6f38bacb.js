import{u as i,a as w,r as m,c as o,F as f,j as r}from"./app.5809d7a7.js";import{c as g}from"./index.0579b088.js";import{A as h}from"./ActionMessage.6e578789.js";import{F as _}from"./FormSection.820f9092.js";import{T as e,I as t}from"./TextInput.502150cd.js";import{I as n}from"./InputLabel.69bc5a36.js";import{P as N}from"./PrimaryButton.0f55ee33.js";import"./transition.be6244da.js";import"./SectionTitle.df98a8cb.js";function R(){const l=i(),s=w({current_password:"",password:"",password_confirmation:""}),c=m.exports.useRef(null),d=m.exports.useRef(null);function u(){s.put(l("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{var a,p;s.errors.password&&(s.reset("password","password_confirmation"),(a=c.current)==null||a.focus()),s.errors.current_password&&(s.reset("current_password"),(p=d.current)==null||p.focus())}})}return o(_,{onSubmit:u,title:"Update Password",description:"Ensure your account is using a long, random password to stay secure.",renderActions:()=>o(f,{children:[r(h,{on:s.recentlySuccessful,className:"mr-3",children:"Saved."}),r(N,{className:g({"opacity-25":s.processing}),disabled:s.processing,children:"Save"})]}),children:[o("div",{className:"col-span-6 sm:col-span-4",children:[r(n,{htmlFor:"current_password",children:"Current Password"}),r(e,{id:"current_password",type:"password",className:"mt-1 block w-full",ref:d,value:s.data.current_password,onChange:a=>s.setData("current_password",a.currentTarget.value),autoComplete:"current-password"}),r(t,{message:s.errors.current_password,className:"mt-2"})]}),o("div",{className:"col-span-6 sm:col-span-4",children:[r(n,{htmlFor:"password",children:"New Password"}),r(e,{id:"password",type:"password",className:"mt-1 block w-full",value:s.data.password,onChange:a=>s.setData("password",a.currentTarget.value),autoComplete:"new-password",ref:c}),r(t,{message:s.errors.password,className:"mt-2"})]}),o("div",{className:"col-span-6 sm:col-span-4",children:[r(n,{htmlFor:"password_confirmation",children:"Confirm Password"}),r(e,{id:"password_confirmation",type:"password",className:"mt-1 block w-full",value:s.data.password_confirmation,onChange:a=>s.setData("password_confirmation",a.currentTarget.value),autoComplete:"new-password"}),r(t,{message:s.errors.password_confirmation,className:"mt-2"})]})]})}export{R as default};