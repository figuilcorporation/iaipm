import{u as f,r as c,a as y,c as r,j as t}from"./app.e07d7c49.js";import{c as w}from"./index.0579b088.js";import{A as h}from"./Modal.529550c5.js";import{D as i}from"./DangerButton.25e5e1e7.js";import{D as n}from"./DialogModal.4f392ac4.js";import{T as D,I as g}from"./TextInput.fbd1d8a9.js";import{S as x}from"./SecondaryButton.ac36dd0a.js";import"./SectionTitle.e707dc63.js";import"./transition.b689e62c.js";function T(){const u=f(),[d,a]=c.exports.useState(!1),e=y({password:""}),l=c.exports.useRef(null);function m(){a(!0),setTimeout(()=>{var o;return(o=l.current)==null?void 0:o.focus()},250)}function p(){e.delete(u("current-user.destroy"),{preserveScroll:!0,onSuccess:()=>s(),onError:()=>{var o;return(o=l.current)==null?void 0:o.focus()},onFinish:()=>e.reset()})}function s(){a(!1),e.reset()}return r(h,{title:"Delete Account",description:"Permanently delete your account.",children:[t("div",{className:"max-w-xl text-sm text-slate-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."}),t("div",{className:"mt-5",children:t(i,{onClick:m,children:"Delete Account"})}),r(n,{isOpen:d,onClose:s,children:[r(n.Content,{title:"Delete Account",children:["Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.",r("div",{className:"mt-4",children:[t(D,{type:"password",className:"mt-1 block w-3/4",placeholder:"Password",value:e.data.password,onChange:o=>e.setData("password",o.currentTarget.value)}),t(g,{message:e.errors.password,className:"mt-2"})]})]}),r(n.Footer,{children:[t(x,{onClick:s,children:"Cancel"}),t(i,{onClick:p,className:w("ml-2",{"opacity-25":e.processing}),disabled:e.processing,children:"Delete Account"})]})]})]})}export{T as default};
