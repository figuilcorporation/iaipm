import{u as i,a as n,c as a,j as r,H as m}from"./app.e07d7c49.js";import{c}from"./index.0579b088.js";import{A as u}from"./AuthenticationCard.b5807b77.js";import{T as d,I as l}from"./TextInput.fbd1d8a9.js";import{I as p}from"./InputLabel.05559824.js";import{P as f}from"./PrimaryButton.3d18492a.js";import"./AuthenticationCardLogo.6758a81c.js";function y(){const o=i(),s=n({password:""});function t(e){e.preventDefault(),s.post(o("password.confirm"),{onFinish:()=>s.reset()})}return a(u,{children:[r(m,{title:"Secure Area"}),r("div",{className:"mb-4 text-sm text-slate-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:t,children:[a("div",{children:[r(p,{htmlFor:"password",children:"Password"}),r(d,{id:"password",type:"password",className:"mt-1 block w-full",value:s.data.password,onChange:e=>s.setData("password",e.currentTarget.value),required:!0,autoComplete:"current-password",autoFocus:!0}),r(l,{className:"mt-2",message:s.errors.password})]}),r("div",{className:"flex justify-end mt-4",children:r(f,{className:c("ml-4",{"opacity-25":s.processing}),disabled:s.processing,children:"Confirm"})})]})]})}export{y as default};
