import o from"./DeleteTeamForm.478adf4e.js";import a from"./TeamMemberManager.ddffad2b.js";import p from"./UpdateTeamNameForm.e8dfd05b.js";import{S as l}from"./SectionBorder.122d0149.js";import{A as s}from"./AppLayout.425db654.js";import{j as m,c as e,F as n}from"./app.ae1c3879.js";import"./Modal.04af281a.js";import"./SectionTitle.2e67c65e.js";import"./index.0579b088.js";import"./transition.71154e30.js";import"./ConfirmationModal.9edfe935.js";import"./DangerButton.2ada149e.js";import"./SecondaryButton.2c0b96a0.js";import"./useTypedPage.dc4de3ad.js";import"./ActionMessage.16bf7af4.js";import"./DialogModal.85fa689f.js";import"./FormSection.294a9d49.js";import"./TextInput.d387747c.js";import"./InputLabel.93ff7e42.js";import"./PrimaryButton.010b5f55.js";function H({team:r,availableRoles:i,permissions:t}){return m(s,{title:"Team Settings",renderHeader:()=>m("h2",{className:"font-semibold text-xl text-slate-800 leading-tight",children:"Team Settings"}),children:m("div",{children:e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[m(p,{team:r,permissions:t}),m("div",{className:"mt-10 sm:mt-0",children:m(a,{team:r,availableRoles:i,userPermissions:t})}),t.canDeleteTeam&&!r.personal_team?e(n,{children:[m(l,{}),m("div",{className:"mt-10 sm:mt-0",children:m(o,{team:r})})]}):null]})})})}export{H as default};