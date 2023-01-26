import{u as c,a as l,c as r,F as i,j as e}from"./app.5809d7a7.js";import{u}from"./useTypedPage.83c2603d.js";import{A as p}from"./ActionMessage.6e578789.js";import{F as d}from"./FormSection.820f9092.js";import{T as f,I as h}from"./TextInput.502150cd.js";import{I as t}from"./InputLabel.69bc5a36.js";import{P as v}from"./PrimaryButton.0f55ee33.js";import{c as g}from"./index.0579b088.js";import"./transition.be6244da.js";import"./SectionTitle.df98a8cb.js";function A(){const o=c(),s=u(),a=l({name:""});function m(){a.post(o("teams.store"),{errorBag:"createTeam",preserveScroll:!0})}return r(d,{onSubmit:m,title:"Team Details",description:"Create a new team to collaborate with others on projects.",renderActions:()=>r(i,{children:[e(p,{on:a.recentlySuccessful,className:"mr-3",children:"Saved."}),e(v,{className:g({"opacity-25":a.processing}),disabled:a.processing,children:"Save"})]}),children:[r("div",{className:"col-span-6",children:[e(t,{value:"Team Owner"}),r("div",{className:"flex items-center mt-2",children:[e("img",{className:"w-12 h-12 rounded-full object-cover",src:s.props.user.profile_photo_url,alt:s.props.user.username}),r("div",{className:"ml-4 leading-tight",children:[e("div",{children:s.props.user.username}),e("div",{className:"text-slate-700 text-sm",children:s.props.user.username})]})]})]}),r("div",{className:"col-span-6 sm:col-span-4",children:[e(t,{htmlFor:"name",value:"Team Name"}),e(f,{id:"name",type:"text",className:"mt-1 block w-full",value:a.data.name,onChange:n=>a.setData("name",n.currentTarget.value),autoFocus:!0}),e(h,{message:a.errors.name,className:"mt-2"})]})]})}export{A as default};