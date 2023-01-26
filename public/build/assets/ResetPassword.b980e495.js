import{u as c,a as p,c as r,j as a,H as u}from"./app.ae1c3879.js";import{c as w}from"./index.0579b088.js";import{A as f}from"./AuthenticationCard.a0b299dd.js";import{I as o}from"./InputLabel.93ff7e42.js";import{P as h}from"./PrimaryButton.010b5f55.js";import{T as t,I as i}from"./TextInput.d387747c.js";import"./AuthenticationCardLogo.38a94c34.js";function y({token:m,email:n}){const d=c(),s=p({token:m,email:n,password:"",password_confirmation:""});function l(e){e.preventDefault(),s.post(d("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})}return r(f,{children:[a(u,{title:"Reset Password"}),r("form",{onSubmit:l,children:[r("div",{children:[a(o,{htmlFor:"email",children:"Email"}),a(t,{id:"email",type:"email",className:"mt-1 block w-full",value:s.data.email,onChange:e=>s.setData("email",e.currentTarget.value),required:!0,autoFocus:!0}),a(i,{className:"mt-2",message:s.errors.email})]}),r("div",{className:"mt-4",children:[a(o,{htmlFor:"password",children:"Password"}),a(t,{id:"password",type:"password",className:"mt-1 block w-full",value:s.data.password,onChange:e=>s.setData("password",e.currentTarget.value),required:!0,autoComplete:"new-password"}),a(i,{className:"mt-2",message:s.errors.password})]}),r("div",{className:"mt-4",children:[a(o,{htmlFor:"password_confirmation",children:"Confirm Password"}),a(t,{id:"password_confirmation",type:"password",className:"mt-1 block w-full",value:s.data.password_confirmation,onChange:e=>s.setData("password_confirmation",e.currentTarget.value),required:!0,autoComplete:"new-password"}),a(i,{className:"mt-2",message:s.errors.password_confirmation})]}),a("div",{className:"flex items-center justify-end mt-4",children:a(h,{className:w({"opacity-25":s.processing}),disabled:s.processing,children:"Reset Password"})})]})]})}export{y as default};