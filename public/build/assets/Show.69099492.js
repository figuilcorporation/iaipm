import o from"./DeleteTeamForm.128ddfd0.js";import a from"./TeamMemberManager.dcfb2c69.js";import p from"./UpdateTeamNameForm.d545ea92.js";import{S as l}from"./SectionBorder.b25c6701.js";import{A as s}from"./AppLayout.7518bf0e.js";import{j as m,c as e,F as n}from"./app.9358082c.js";import"./Modal.4610b35a.js";import"./SectionTitle.07fd502b.js";import"./index.0579b088.js";import"./transition.0fdee8b2.js";import"./ConfirmationModal.a506a9b4.js";import"./DangerButton.7ece74dd.js";import"./SecondaryButton.4830e97b.js";import"./useTypedPage.db8be66d.js";import"./ActionMessage.dc4f58bc.js";import"./DialogModal.0bf617cc.js";import"./FormSection.1b31c292.js";import"./TextInput.111922b6.js";import"./InputLabel.6bc08a6a.js";import"./PrimaryButton.39fac1a9.js";function H({team:r,availableRoles:i,permissions:t}){return m(s,{title:"Team Settings",renderHeader:()=>m("h2",{className:"font-semibold text-xl text-slate-800 leading-tight",children:"Team Settings"}),children:m("div",{children:e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[m(p,{team:r,permissions:t}),m("div",{className:"mt-10 sm:mt-0",children:m(a,{team:r,availableRoles:i,userPermissions:t})}),t.canDeleteTeam&&!r.personal_team?e(n,{children:[m(l,{}),m("div",{className:"mt-10 sm:mt-0",children:m(o,{team:r})})]}):null]})})})}export{H as default};
