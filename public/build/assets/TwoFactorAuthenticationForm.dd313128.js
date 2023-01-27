import{u as Q,r as i,c as r,j as e,i as h,b as j,a as L,d as A}from"./app.1cc7bd76.js";import{c as y}from"./index.0579b088.js";import{A as Y}from"./Modal.0960dcb5.js";import{D as T}from"./DialogModal.c2dfb583.js";import{T as I,I as D}from"./TextInput.9249771e.js";import{P as F}from"./PrimaryButton.bea87d9e.js";import{S as b}from"./SecondaryButton.872d87b2.js";import{D as q}from"./DangerButton.b6a8ac9e.js";import{I as H}from"./InputLabel.9e7c825a.js";import"./SectionTitle.b8b52102.js";import"./transition.0dc79da7.js";function m({title:C="Confirm Password",content:N="For your security, please confirm your password to continue.",button:c="Confirm",onConfirm:p,children:l}){const f=Q(),[x,w]=i.exports.useState(!1),[o,d]=i.exports.useState({password:"",error:"",processing:!1}),t=i.exports.useRef(null);function g(){h.get(f("password.confirmation")).then(s=>{s.data.confirmed?p():(w(!0),setTimeout(()=>{var a;return(a=t.current)==null?void 0:a.focus()},250))})}function v(){d({...o,processing:!0}),h.post(f("password.confirm"),{password:o.password}).then(()=>{u(),setTimeout(()=>p(),250)}).catch(s=>{var a;d({...o,processing:!1,error:s.response.data.errors.password[0]}),(a=t.current)==null||a.focus()})}function u(){w(!1),d({processing:!1,password:"",error:""})}return r("span",{children:[e("span",{onClick:g,children:l}),r(T,{isOpen:x,onClose:u,children:[r(T.Content,{title:C,children:[N,r("div",{className:"mt-4",children:[e(I,{type:"password",className:"mt-1 block w-3/4",placeholder:"Password",value:o.password,onChange:s=>d({...o,password:s.currentTarget.value})}),e(D,{message:o.error,className:"mt-2"})]})]}),r(T.Footer,{children:[e(b,{onClick:u,children:"Cancel"}),e(F,{className:y("ml-2",{"opacity-25":o.processing}),onClick:v,disabled:o.processing,children:c})]})]})]})}function te({requiresConfirmation:C}){var R,k;const N=j(),[c,p]=i.exports.useState(!1),[l,f]=i.exports.useState(!1),[x,w]=i.exports.useState(null),[o,d]=i.exports.useState([]),[t,g]=i.exports.useState(!1),[v,u]=i.exports.useState(null),s=L({code:""}),a=!c&&((k=(R=N.props)==null?void 0:R.user)==null?void 0:k.two_factor_enabled);function _(){p(!0),A.Inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess(){return Promise.all([B(),K(),S()])},onFinish(){p(!1),g(C)}})}function K(){return h.get("/user/two-factor-secret-key").then(n=>{u(n.data.secretKey)})}function M(){s.post("/user/confirmed-two-factor-authentication",{preserveScroll:!0,preserveState:!0,errorBag:"confirmTwoFactorAuthentication",onSuccess:()=>{g(!1),w(null),u(null)}})}function B(){return h.get("/user/two-factor-qr-code").then(n=>{w(n.data.svg)})}function S(){return h.get("/user/two-factor-recovery-codes").then(n=>{d(n.data)})}function E(){h.post("/user/two-factor-recovery-codes").then(()=>{S()})}function P(){f(!0),A.Inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess(){f(!1),g(!1)}})}return r(Y,{title:"Two Factor Authentication",description:"Add additional security to your account using two factor authentication.",children:[(()=>a&&!t?e("h3",{className:"text-lg font-medium text-slate-900",children:"You have enabled two factor authentication."}):t?e("h3",{className:"text-lg font-medium text-slate-900",children:"Finish enabling two factor authentication."}):e("h3",{className:"text-lg font-medium text-slate-900",children:"You have not enabled two factor authentication."}))(),e("div",{className:"mt-3 max-w-xl text-sm text-slate-600",children:e("p",{children:"When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application."})}),a||t?r("div",{children:[x?r("div",{children:[e("div",{className:"mt-4 max-w-xl text-sm text-slate-600",children:t?e("p",{className:"font-semibold",children:"To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code."}):e("p",{children:"Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key."})}),e("div",{className:"mt-4",dangerouslySetInnerHTML:{__html:x||""}}),v&&e("div",{className:"mt-4 max-w-xl text-sm text-slate-600",children:r("p",{className:"font-semibold",children:["Setup Key:"," ",e("span",{dangerouslySetInnerHTML:{__html:v||""}})]})}),t&&r("div",{className:"mt-4",children:[e(H,{htmlFor:"code",value:"Code"}),e(I,{id:"code",type:"text",name:"code",className:"block mt-1 w-1/2",inputMode:"numeric",autoFocus:!0,autoComplete:"one-time-code",value:s.data.code,onChange:n=>s.setData("code",n.currentTarget.value)}),e(D,{message:s.errors.code,className:"mt-2"})]})]}):null,o.length>0&&!t?r("div",{children:[e("div",{className:"mt-4 max-w-xl text-sm text-slate-600",children:e("p",{className:"font-semibold",children:"Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost."})}),e("div",{className:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-slate-100 rounded-lg",children:o.map(n=>e("div",{children:n},n))})]}):null]}):null,e("div",{className:"mt-5",children:a||t?r("div",{children:[t?e(m,{onConfirm:M,children:e(F,{className:y("mr-3",{"opacity-25":c}),disabled:c,children:"Confirm"})}):null,o.length>0&&!t?e(m,{onConfirm:E,children:e(b,{className:"mr-3",children:"Regenerate Recovery Codes"})}):null,o.length===0&&!t?e(m,{onConfirm:S,children:e(b,{className:"mr-3",children:"Show Recovery Codes"})}):null,t?e(m,{onConfirm:P,children:e(b,{className:y("mr-3",{"opacity-25":l}),disabled:l,children:"Cancel"})}):e(m,{onConfirm:P,children:e(q,{className:y({"opacity-25":l}),disabled:l,children:"Disable"})})]}):e("div",{children:e(m,{onConfirm:_,children:e(F,{type:"button",className:y({"opacity-25":c}),disabled:c,children:"Enable"})})})})]})}export{te as default};