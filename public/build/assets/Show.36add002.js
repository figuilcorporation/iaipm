import o from"./DeleteTeamForm.af6f8483.js";import a from"./TeamMemberManager.56723eba.js";import p from"./UpdateTeamNameForm.0faaa689.js";import{S as l}from"./SectionBorder.ca93bb5f.js";import{A as s}from"./AppLayout.8b6bdcdf.js";import{j as m,c as e,F as n}from"./app.e07d7c49.js";import"./Modal.529550c5.js";import"./SectionTitle.e707dc63.js";import"./index.0579b088.js";import"./transition.b689e62c.js";import"./ConfirmationModal.df99e074.js";import"./DangerButton.25e5e1e7.js";import"./SecondaryButton.ac36dd0a.js";import"./useTypedPage.d7e4e977.js";import"./ActionMessage.8f1e26c5.js";import"./DialogModal.4f392ac4.js";import"./FormSection.16e3203a.js";import"./TextInput.fbd1d8a9.js";import"./InputLabel.05559824.js";import"./PrimaryButton.3d18492a.js";function H({team:r,availableRoles:i,permissions:t}){return m(s,{title:"Team Settings",renderHeader:()=>m("h2",{className:"font-semibold text-xl text-slate-800 leading-tight",children:"Team Settings"}),children:m("div",{children:e("div",{className:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8",children:[m(p,{team:r,permissions:t}),m("div",{className:"mt-10 sm:mt-0",children:m(a,{team:r,availableRoles:i,userPermissions:t})}),t.canDeleteTeam&&!r.personal_team?e(n,{children:[m(l,{}),m("div",{className:"mt-10 sm:mt-0",children:m(o,{team:r})})]}):null]})})})}export{H as default};
