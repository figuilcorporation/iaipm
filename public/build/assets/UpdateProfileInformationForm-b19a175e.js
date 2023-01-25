import{P as j,r as f,c as w,w as a,o as d,f as r,d as S,a as l,b as o,q as p,v,G as B,j as h,e as _,u as t,s as E,n as A,x as F}from"./app-b26d8951.js";import{_ as R}from"./ActionMessage-eae1b865.js";import{_ as z}from"./FormSection-bb484bbc.js";import{a as g,_ as V}from"./TextInput-f07d1db6.js";import{_ as k}from"./InputLabel-f6a01551.js";import{_ as D}from"./PrimaryButton-bf22b968.js";import{_ as C}from"./SecondaryButton-2b260d03.js";import"./SectionTitle-befb549f.js";import"./_plugin-vue_export-helper-c27b6911.js";const L={key:0,class:"col-span-6 sm:col-span-4"},T={class:"mt-2"},q=["src","alt"],G={class:"mt-2"},J={class:"col-span-6 sm:col-span-4"},M={class:"col-span-6 sm:col-span-4"},O={key:0},Y={class:"text-sm mt-2"},H={class:"mt-2 font-medium text-sm text-green-600"},ae={__name:"UpdateProfileInformationForm",props:{user:Object},setup(c){const y=c,e=j({_method:"PUT",name:y.user.name,email:y.user.email,photo:null}),b=f(null),m=f(null),n=f(null),$=()=>{n.value&&(e.photo=n.value.files[0]),e.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>P()})},x=()=>{b.value=!0},I=()=>{n.value.click()},N=()=>{const s=n.value.files[0];if(!s)return;const i=new FileReader;i.onload=u=>{m.value=u.target.result},i.readAsDataURL(s)},U=()=>{F.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{m.value=null,P()}})},P=()=>{var s;(s=n.value)!=null&&s.value&&(n.value.value=null)};return(s,i)=>(d(),w(z,{onSubmitted:$},{title:a(()=>[r(" Profile Information ")]),description:a(()=>[r(" Update your account's profile information and email address. ")]),form:a(()=>[s.$page.props.jetstream.managesProfilePhotos?(d(),S("div",L,[l("input",{ref_key:"photoInput",ref:n,type:"file",class:"hidden",onChange:N},null,544),o(k,{for:"photo",value:"Photo"}),p(l("div",T,[l("img",{src:c.user.profile_photo_url,alt:c.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,q)],512),[[v,!m.value]]),p(l("div",G,[l("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:B("background-image: url('"+m.value+"');")},null,4)],512),[[v,m.value]]),o(C,{class:"mt-2 mr-2",type:"button",onClick:h(I,["prevent"])},{default:a(()=>[r(" Select A New Photo ")]),_:1},8,["onClick"]),c.user.profile_photo_path?(d(),w(C,{key:0,type:"button",class:"mt-2",onClick:h(U,["prevent"])},{default:a(()=>[r(" Remove Photo ")]),_:1},8,["onClick"])):_("",!0),o(g,{message:t(e).errors.photo,class:"mt-2"},null,8,["message"])])):_("",!0),l("div",J,[o(k,{for:"name",value:"Name"}),o(V,{id:"name",modelValue:t(e).name,"onUpdate:modelValue":i[0]||(i[0]=u=>t(e).name=u),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),o(g,{message:t(e).errors.name,class:"mt-2"},null,8,["message"])]),l("div",M,[o(k,{for:"email",value:"Email"}),o(V,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":i[1]||(i[1]=u=>t(e).email=u),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),o(g,{message:t(e).errors.email,class:"mt-2"},null,8,["message"]),s.$page.props.jetstream.hasEmailVerification&&c.user.email_verified_at===null?(d(),S("div",O,[l("p",Y,[r(" Your email address is unverified. "),o(t(E),{href:s.route("verification.send"),method:"post",as:"button",class:"underline text-gray-600 hover:text-gray-900",onClick:h(x,["prevent"])},{default:a(()=>[r(" Click here to re-send the verification email. ")]),_:1},8,["href","onClick"])]),p(l("div",H," A new verification link has been sent to your email address. ",512),[[v,b.value]])])):_("",!0)])]),actions:a(()=>[o(R,{on:t(e).recentlySuccessful,class:"mr-3"},{default:a(()=>[r(" Saved. ")]),_:1},8,["on"]),o(D,{class:A({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:a(()=>[r(" Save ")]),_:1},8,["class","disabled"])]),_:1}))}};export{ae as default};
