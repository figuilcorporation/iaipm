import{u as c,r as f,a as u,c as o,j as e}from"./app.5809d7a7.js";import{A as p}from"./Modal.2b7a9f21.js";import{C as n}from"./ConfirmationModal.1b454cea.js";import{D as r}from"./DangerButton.bd089c92.js";import{S as h}from"./SecondaryButton.d40411a6.js";import{c as y}from"./index.0579b088.js";import"./SectionTitle.df98a8cb.js";import"./transition.be6244da.js";function S({team:i}){const s=c(),[l,t]=f.exports.useState(!1),a=u({});function m(){t(!0)}function d(){a.delete(s("teams.destroy",[i]),{errorBag:"deleteTeam"})}return o(p,{title:"Delete Team",description:"Permanently delete this team.",children:[e("div",{className:"max-w-xl text-sm text-slate-600",children:"Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain."}),e("div",{className:"mt-5",children:e(r,{onClick:m,children:"Delete Team"})}),o(n,{isOpen:l,onClose:()=>t(!1),children:[e(n.Content,{title:"Delete Team",children:"Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted."}),o(n.Footer,{children:[e(h,{onClick:()=>t(!1),children:"Cancel"}),e(r,{onClick:d,className:y("ml-2",{"opacity-25":a.processing}),disabled:a.processing,children:"Delete Team"})]})]})]})}export{S as default};