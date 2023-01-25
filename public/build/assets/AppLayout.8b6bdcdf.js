import{j as e,r as b,b as j,c as r,I as x,u as T,H as C,F as N,d as k}from"./app.e07d7c49.js";import{c}from"./index.0579b088.js";import{u as M}from"./useTypedPage.d7e4e977.js";import{J as S}from"./transition.b689e62c.js";function _(i){return e("img",{src:"/IAIPM/Logo.png",alt:"Figuil",className:"h-[80px]"})}function P(){var l,d;const[i,o]=b.exports.useState(!0),{props:a}=j(),t=((l=a.jetstream.flash)==null?void 0:l.bannerStyle)||"success",s=((d=a.jetstream.flash)==null?void 0:d.banner)||"";return e("div",{children:i&&s?e("div",{className:c({"bg-blue-500":t=="success","bg-red-700":t=="danger"}),children:e("div",{className:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8",children:r("div",{className:"flex items-center justify-between flex-wrap",children:[r("div",{className:"w-0 flex-1 flex items-center min-w-0",children:[e("span",{className:c("flex p-2 rounded-lg",{"bg-blue-600":t=="success","bg-red-600":t=="danger"}),children:(()=>{switch(t){case"success":return e("svg",{className:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})});case"danger":return e("svg",{className:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})});default:return null}})()}),e("p",{className:"ml-3 font-medium text-sm text-white truncate",children:s})]}),e("div",{className:"flex-shrink-0 sm:ml-3",children:e("button",{type:"button",className:c("-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-blue-600 focus:bg-blue-600":t=="success","hover:bg-red-600 focus:bg-red-600":t=="danger"}),"aria-label":"Dismiss",onClick:m=>{m.preventDefault(),o(!1)},children:e("svg",{className:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})})]})})}):null})}function y({align:i="right",width:o="48",contentClasses:a="py-1 bg-white",renderTrigger:t,children:s}){const[l,d]=b.exports.useState(!1),m={48:"w-48"}[o.toString()],f=(()=>i==="left"?"origin-top-left left-0":i==="right"?"origin-top-right right-0":"origin-top")();return r("div",{className:"relative",children:[e("div",{onClick:()=>d(!l),children:t()}),e("div",{className:"fixed inset-0 z-40",style:{display:l?"block":"none"},onClick:()=>d(!1)}),e(S,{show:l,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",className:"relative z-50",children:e("div",{className:c("absolute mt-2 rounded-md shadow-lg",m,f),onClick:()=>d(!1),children:e("div",{className:c("rounded-md ring-1 ring-black ring-opacity-5",a),children:s})})})]})}function h({as:i,href:o,children:a}){return e("div",{children:(()=>{switch(i){case"button":return e("button",{type:"submit",className:"block w-full px-4 py-2 text-sm leading-5 text-slate-700 text-left hover:bg-slate-100 focus:outline-none focus:bg-slate-100 transition",children:a});case"a":return e("a",{href:o,className:"block px-4 py-2 text-sm leading-5 text-slate-700 hover:bg-slate-100 focus:outline-none focus:bg-slate-100 transition",children:a});default:return e(x,{href:o||"",className:"block px-4 py-2 text-sm leading-5 text-slate-700 hover:bg-slate-100 focus:outline-none focus:bg-slate-100 transition",children:a})}})()})}function L({active:i,href:o,children:a}){return e(x,{href:o,className:i?"inline-flex items-center px-1 pt-1 border-b-2 border-blue-400 text-sm font-medium leading-5 text-slate-900 focus:outline-none focus:border-blue-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-slate-500 hover:text-slate-700 hover:border-slate-300 focus:outline-none focus:text-slate-700 focus:border-slate-300 transition",children:a})}function u({active:i,href:o,children:a,...t}){const s=i?"block pl-3 pr-4 py-2 border-l-4 border-blue-400 text-base font-medium text-blue-700 bg-blue-50 focus:outline-none focus:text-blue-800 focus:bg-blue-100 focus:border-blue-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:text-slate-800 focus:bg-slate-50 focus:border-slate-300 transition";return e("div",{children:"as"in t&&t.as==="button"?e("button",{className:c("w-full text-left",s),children:a}):e(x,{href:o||"",className:s,children:a})})}function B({title:i,renderHeader:o,children:a}){var v,g,w;const t=M(),s=T(),[l,d]=b.exports.useState(!1);function m(n,p){n.preventDefault(),k.Inertia.put(s("current-team.update"),{team_id:p.id},{preserveState:!1})}function f(n){n.preventDefault(),k.Inertia.post(s("logout"))}return r("div",{children:[e(C,{title:i}),e(P,{}),r("div",{className:"min-h-screen bg-slate-100",children:[r("nav",{className:"bg-white border-b border-slate-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:r("div",{className:"flex justify-between h-16",children:[r("div",{className:"flex",children:[e("div",{className:"flex-shrink-0 flex items-center",children:e(x,{href:s("dashboard"),children:e(_,{className:"block h-9 w-auto"})})}),r("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[e(L,{href:s("dashboard"),active:s().current("dashboard"),children:"Dashboard"}),t.props.can.access_students&&e(L,{href:s("students.index"),active:s().current("students.index"),children:"\xC9tudiants"})]})]}),r("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:[e("div",{className:"ml-3 relative",children:t.props.jetstream.hasTeamFeatures?e(y,{align:"right",width:"60",renderTrigger:()=>{var n;return e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-slate-500 bg-white hover:bg-slate-50 hover:text-slate-700 focus:outline-none focus:bg-slate-50 active:bg-slate-50 transition",children:[(n=t.props.user.current_team)==null?void 0:n.name,e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})},children:e("div",{className:"w-60",children:t.props.jetstream.hasTeamFeatures?r(N,{children:[e("div",{className:"block px-4 py-2 text-xs text-slate-400",children:"Manage Team"}),e(h,{href:s("teams.show",[t.props.user.current_team]),children:"Team Settings"}),t.props.jetstream.canCreateTeams?e(h,{href:s("teams.create"),children:"Create New Team"}):null,e("div",{className:"border-t border-slate-100"}),e("div",{className:"block px-4 py-2 text-xs text-slate-400",children:"Switch Teams"}),(v=t.props.user.all_teams)==null?void 0:v.map(n=>e("form",{onSubmit:p=>m(p,n),children:e(h,{as:"button",children:r("div",{className:"flex items-center",children:[n.id==t.props.user.current_team_id&&e("svg",{className:"mr-2 h-5 w-5 text-green-400",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",stroke:"currentColor",viewBox:"0 0 24 24",children:e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("div",{children:n.name})]})})},n.id))]}):null})}):null}),e("div",{className:"ml-3 relative",children:r(y,{align:"right",width:"48",renderTrigger:()=>t.props.jetstream.managesProfilePhotos?e("button",{className:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-slate-300 transition",children:e("img",{className:"h-8 w-8 rounded-full object-cover",src:t.props.user.profile_photo_url,alt:t.props.user.username})}):e("span",{className:"inline-flex rounded-md",children:r("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-slate-500 bg-white hover:text-slate-700 focus:outline-none transition",children:[t.props.user.username,e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})}),children:[e("div",{className:"block px-4 py-2 text-xs text-slate-400",children:"Manage Account"}),e(h,{href:s("profile.show"),children:"Profile"}),t.props.jetstream.hasApiFeatures?e(h,{href:s("api-tokens.index"),children:"API Tokens"}):null,e("div",{className:"border-t border-slate-100"}),e("form",{onSubmit:f,children:e(h,{as:"button",children:"Log Out"})})]})})]}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>d(!l),className:"inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:bg-slate-100 focus:text-slate-500 transition",children:r("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:c({hidden:l,"inline-flex":!l}),strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:c({hidden:!l,"inline-flex":l}),strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),r("div",{className:c("sm:hidden",{block:l,hidden:!l}),children:[r("div",{className:"pt-2 pb-3 space-y-1",children:[e(u,{href:s("dashboard"),active:s().current("dashboard"),children:"Dashboard"}),t.props.can.access_students&&e(u,{href:s("students.index"),active:s().current("students.index"),children:"\xC9tudiants"})]}),r("div",{className:"pt-4 pb-1 border-t border-slate-200",children:[r("div",{className:"flex items-center px-4",children:[t.props.jetstream.managesProfilePhotos?e("div",{className:"flex-shrink-0 mr-3",children:e("img",{className:"h-10 w-10 rounded-full object-cover",src:t.props.user.profile_photo_url,alt:t.props.user.username})}):null,r("div",{children:[e("div",{className:"font-medium text-base text-slate-800",children:t.props.user.username}),e("div",{className:"font-medium text-sm text-slate-500",children:t.props.user.email})]})]}),r("div",{className:"mt-3 space-y-1",children:[e(u,{href:s("profile.show"),active:s().current("profile.show"),children:"Profile"}),t.props.jetstream.hasApiFeatures?e(u,{href:s("api-tokens.index"),active:s().current("api-tokens.index"),children:"API Tokens"}):null,e("form",{method:"POST",onSubmit:f,children:e(u,{as:"button",children:"Log Out"})}),t.props.jetstream.hasTeamFeatures?r(N,{children:[e("div",{className:"border-t border-slate-200"}),e("div",{className:"block px-4 py-2 text-xs text-slate-400",children:"Manage Team"}),e(u,{href:s("teams.show",[t.props.user.current_team]),active:s().current("teams.show"),children:"Team Settings"}),t.props.jetstream.canCreateTeams?e(u,{href:s("teams.create"),active:s().current("teams.create"),children:"Create New Team"}):null,e("div",{className:"border-t border-slate-200"}),e("div",{className:"block px-4 py-2 text-xs text-slate-400",children:"Switch Teams"}),(w=(g=t.props.user)==null?void 0:g.all_teams)==null?void 0:w.map(n=>e("form",{onSubmit:p=>m(p,n),children:e(u,{as:"button",children:r("div",{className:"flex items-center",children:[n.id==t.props.user.current_team_id&&e("svg",{className:"mr-2 h-5 w-5 text-green-400",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",stroke:"currentColor",viewBox:"0 0 24 24",children:e("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),e("div",{children:n.name})]})})},n.id))]}):null]})]})]})]}),o?e("header",{className:"bg-white shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:o()})}):null,e("main",{children:a})]})]})}export{B as A};
