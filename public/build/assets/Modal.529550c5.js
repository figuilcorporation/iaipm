import{S as He}from"./SectionTitle.e707dc63.js";import{R as m,r as u,e as Be,j as h,c as xe,f as je}from"./app.e07d7c49.js";import{c as Ue}from"./index.0579b088.js";import{a as G,s as B,e as re,u as A,b as ne,C as $,$ as P,o as y,y as T,p as _e,t as oe,f as Ee,T as We,S as fe,c as Ye,d as pe,m as Ge,J as X}from"./transition.b689e62c.js";var me;let qe=0;function ve(){return++qe}let M=(me=m.useId)!=null?me:function(){let e=G(),[t,r]=m.useState(e?ve:null);return B(()=>{t===null&&r(ve())},[t]),t!=null?""+t:void 0};function le(e){return re?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let K=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var S=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(S||{}),be=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(be||{}),Ve=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ve||{});function ze(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(K)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var ye=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ye||{});function Xe(e,t=0){var r;return e===((r=le(e))==null?void 0:r.body)?!1:A(t,{[0](){return e.matches(K)},[1](){let n=e;for(;n!==null;){if(n.matches(K))return!0;n=n.parentElement}return!1}})}function R(e){e==null||e.focus({preventScroll:!0})}let Je=["textarea","input"].join(",");function Ke(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Je))!=null?r:!1}function Qe(e,t=r=>r){return e.slice().sort((r,n)=>{let o=t(r),a=t(n);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function _(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?r?Qe(e):e:ze(e);o.length>0&&(l=l.filter(p=>!o.includes(p))),n=n!=null?n:a.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(n))-1;if(t&4)return Math.max(0,l.indexOf(n))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},s=0,f=l.length,v;do{if(s>=f||s+f<=0)return 0;let p=d+s;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}v=l[p],v==null||v.focus(c),s+=i}while(v!==a.activeElement);return t&6&&Ke(v)&&v.select(),v.hasAttribute("tabindex")||v.setAttribute("tabindex","0"),2}function J(e,t,r){let n=ne(t);u.exports.useEffect(()=>{function o(a){n.current(a)}return document.addEventListener(e,o,r),()=>document.removeEventListener(e,o,r)},[e,r])}function Ze(e,t,r=!0){let n=u.exports.useRef(!1);u.exports.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function o(l,i){if(!n.current||l.defaultPrevented)return;let d=function s(f){return typeof f=="function"?s(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),c=i(l);if(c!==null&&!!c.getRootNode().contains(c)){for(let s of d){if(s===null)continue;let f=s instanceof HTMLElement?s:s.current;if(f!=null&&f.contains(c)||l.composed&&l.composedPath().includes(f))return}return!Xe(c,ye.Loose)&&c.tabIndex!==-1&&l.preventDefault(),t(l,c)}}let a=u.exports.useRef(null);J("mousedown",l=>{var i,d;n.current&&(a.current=((d=(i=l.composedPath)==null?void 0:i.call(l))==null?void 0:d[0])||l.target)},!0),J("click",l=>{!a.current||(o(l,()=>a.current),a.current=null)},!0),J("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function et(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=(t==null?void 0:t.getAttribute("disabled"))==="";return n&&tt(r)?!1:n}function tt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let rt="div";var W=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(W||{});let Q=$(function(e,t){let{features:r=1,...n}=e,o={ref:t,"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return P({ourProps:o,theirProps:n,slot:{},defaultTag:rt,name:"Hidden"})});var $e=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))($e||{});function Pe(e,t){let r=u.exports.useRef([]),n=y(e);u.exports.useEffect(()=>{let o=[...r.current];for(let[a,l]of t.entries())if(r.current[a]!==l){let i=n(t,o);return r.current=t,i}},[n,...t])}function nt(e,t,r){let n=ne(t);u.exports.useEffect(()=>{function o(a){n.current(a)}return window.addEventListener(e,o,r),()=>window.removeEventListener(e,o,r)},[e,r])}var H=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(H||{});function ot(){let e=u.exports.useRef(0);return nt("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function q(...e){return u.exports.useMemo(()=>le(...e),[...e])}function ae(e,t,r,n){let o=ne(r);u.exports.useEffect(()=>{e=e!=null?e:window;function a(l){o.current(l)}return e.addEventListener(t,a,n),()=>e.removeEventListener(t,a,n)},[e,t,n])}let lt="div";var Te=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Te||{});let I=Object.assign($(function(e,t){let r=u.exports.useRef(null),n=T(r,t),{initialFocus:o,containers:a,features:l=30,...i}=e;G()||(l=1);let d=q(r);at({ownerDocument:d},Boolean(l&16));let c=it({ownerDocument:d,container:r,initialFocus:o},Boolean(l&2));ut({ownerDocument:d,container:r,containers:a,previousActiveElement:c},Boolean(l&8));let s=ot(),f=y(w=>{let x=r.current;!x||(F=>F())(()=>{A(s.current,{[H.Forwards]:()=>_(x,S.First,{skipElements:[w.relatedTarget]}),[H.Backwards]:()=>_(x,S.Last,{skipElements:[w.relatedTarget]})})})}),v=_e(),p=u.exports.useRef(!1),O={ref:n,onKeyDown(w){w.key=="Tab"&&(p.current=!0,v.requestAnimationFrame(()=>{p.current=!1}))},onBlur(w){let x=new Set(a==null?void 0:a.current);x.add(r);let F=w.relatedTarget;!F||F.dataset.headlessuiFocusGuard!=="true"&&(Fe(x,F)||(p.current?_(r.current,A(s.current,{[H.Forwards]:()=>S.Next,[H.Backwards]:()=>S.Previous})|S.WrapAround,{relativeTo:w.target}):w.target instanceof HTMLElement&&R(w.target)))}};return m.createElement(m.Fragment,null,Boolean(l&4)&&m.createElement(Q,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:W.Focusable}),P({ourProps:O,theirProps:i,defaultTag:lt,name:"FocusTrap"}),Boolean(l&4)&&m.createElement(Q,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:W.Focusable}))}),{features:Te});function at({ownerDocument:e},t){let r=u.exports.useRef(null);ae(e==null?void 0:e.defaultView,"focusout",o=>{!t||r.current||(r.current=o.target)},!0),Pe(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&R(r.current),r.current=null)},[t]);let n=u.exports.useRef(!1);u.exports.useEffect(()=>(n.current=!1,()=>{n.current=!0,oe(()=>{!n.current||(R(r.current),r.current=null)})}),[])}function it({ownerDocument:e,container:t,initialFocus:r},n){let o=u.exports.useRef(null),a=Ee();return Pe(()=>{if(!n)return;let l=t.current;!l||oe(()=>{if(!a.current)return;let i=e==null?void 0:e.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===i){o.current=i;return}}else if(l.contains(i)){o.current=i;return}r!=null&&r.current?R(r.current):_(l,S.First)===be.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[n]),o}function ut({ownerDocument:e,container:t,containers:r,previousActiveElement:n},o){let a=Ee();ae(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let i=new Set(r==null?void 0:r.current);i.add(t);let d=n.current;if(!d)return;let c=l.target;c&&c instanceof HTMLElement?Fe(i,c)?(n.current=c,R(c)):(l.preventDefault(),l.stopPropagation(),R(d)):R(n.current)},!0)}function Fe(e,t){var r;for(let n of e)if((r=n.current)!=null&&r.contains(t))return!0;return!1}let C=new Set,D=new Map;function ge(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function he(e){let t=D.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function st(e,t=!0){B(()=>{if(!t||!e.current)return;let r=e.current,n=le(r);if(n){C.add(r);for(let o of D.keys())o.contains(r)&&(he(o),D.delete(o));return n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let a of C)if(o.contains(a))return;C.size===1&&(D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),ge(o))}}),()=>{if(C.delete(r),C.size>0)n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!D.has(o)){for(let a of C)if(o.contains(a))return;D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),ge(o)}});else for(let o of D.keys())he(o),D.delete(o)}}},[t])}let De=u.exports.createContext(!1);function ct(){return u.exports.useContext(De)}function Z(e){return m.createElement(De.Provider,{value:e.force},e.children)}function dt(e){let t=ct(),r=u.exports.useContext(Se),n=q(e),[o,a]=u.exports.useState(()=>{if(!t&&r!==null||re)return null;let l=n==null?void 0:n.getElementById("headlessui-portal-root");if(l)return l;if(n===null)return null;let i=n.createElement("div");return i.setAttribute("id","headlessui-portal-root"),n.body.appendChild(i)});return u.exports.useEffect(()=>{o!==null&&(n!=null&&n.body.contains(o)||n==null||n.body.appendChild(o))},[o,n]),u.exports.useEffect(()=>{t||r!==null&&a(r.current)},[r,a,t]),o}let ft=u.exports.Fragment,pt=$(function(e,t){let r=e,n=u.exports.useRef(null),o=T(We(s=>{n.current=s}),t),a=q(n),l=dt(n),[i]=u.exports.useState(()=>{var s;return re?null:(s=a==null?void 0:a.createElement("div"))!=null?s:null}),d=G(),c=u.exports.useRef(!1);return B(()=>{if(c.current=!1,!(!l||!i))return l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i)),()=>{c.current=!0,oe(()=>{var s;!c.current||!l||!i||(l.removeChild(i),l.childNodes.length<=0&&((s=l.parentElement)==null||s.removeChild(l)))})}},[l,i]),d?!l||!i?null:Be.exports.createPortal(P({ourProps:{ref:o},theirProps:r,defaultTag:ft,name:"Portal"}),i):null}),mt=u.exports.Fragment,Se=u.exports.createContext(null),vt=$(function(e,t){let{target:r,...n}=e,o={ref:T(t)};return h(Se.Provider,{value:r,children:P({ourProps:o,theirProps:n,defaultTag:mt,name:"Popover.Group"})})}),ee=Object.assign(pt,{Group:vt}),Ae=u.exports.createContext(null);function Re(){let e=u.exports.useContext(Ae);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Re),t}return e}function gt(){let[e,t]=u.exports.useState([]);return[e.length>0?e.join(" "):void 0,u.exports.useMemo(()=>function(r){let n=y(a=>(t(l=>[...l,a]),()=>t(l=>{let i=l.slice(),d=i.indexOf(a);return d!==-1&&i.splice(d,1),i}))),o=u.exports.useMemo(()=>({register:n,slot:r.slot,name:r.name,props:r.props}),[n,r.slot,r.name,r.props]);return m.createElement(Ae.Provider,{value:o},r.children)},[t])]}let ht="p",wt=$(function(e,t){let r=M(),{id:n=`headlessui-description-${r}`,...o}=e,a=Re(),l=T(t);B(()=>a.register(n),[n,a.register]);let i={ref:l,...a.props,id:n};return P({ourProps:i,theirProps:o,slot:a.slot||{},defaultTag:ht,name:a.name||"Description"})}),ie=u.exports.createContext(()=>{});ie.displayName="StackContext";var te=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(te||{});function xt(){return u.exports.useContext(ie)}function Et({children:e,onUpdate:t,type:r,element:n,enabled:o}){let a=xt(),l=y((...i)=>{t==null||t(...i),a(...i)});return B(()=>{let i=o===void 0||o===!0;return i&&l(0,r,n),()=>{i&&l(1,r,n)}},[l,r,n,o]),m.createElement(ie.Provider,{value:l},e)}function bt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(yt||{}),$t=(e=>(e[e.SetTitleId=0]="SetTitleId",e))($t||{});let Pt={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},Y=u.exports.createContext(null);Y.displayName="DialogContext";function j(e){let t=u.exports.useContext(Y);if(t===null){let r=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,j),r}return t}function Tt(e,t,r=()=>[document.body]){u.exports.useEffect(()=>{var n;if(!t||!e)return;let o=Ge(),a=window.pageYOffset;function l(c,s,f){let v=c.style.getPropertyValue(s);return Object.assign(c.style,{[s]:f}),o.add(()=>{Object.assign(c.style,{[s]:v})})}let i=e.documentElement,d=((n=e.defaultView)!=null?n:window).innerWidth-i.clientWidth;if(l(i,"overflow","hidden"),d>0){let c=i.clientWidth-i.offsetWidth,s=d-c;l(i,"paddingRight",`${s}px`)}if(bt()){l(e.body,"marginTop",`-${a}px`),window.scrollTo(0,0);let c=null;o.addEventListener(e,"click",s=>{if(s.target instanceof HTMLElement)try{let f=s.target.closest("a");if(!f)return;let{hash:v}=new URL(f.href),p=e.querySelector(v);p&&!r().some(O=>O.contains(p))&&(c=p)}catch{}},!0),o.addEventListener(e,"touchmove",s=>{s.target instanceof HTMLElement&&!r().some(f=>f.contains(s.target))&&s.preventDefault()},{passive:!1}),o.add(()=>{window.scrollTo(0,window.pageYOffset+a),c&&c.isConnected&&(c.scrollIntoView({block:"nearest"}),c=null)})}return o.dispose},[e,t])}function Ft(e,t){return A(t.type,Pt,e,t)}let Dt="div",St=fe.RenderStrategy|fe.Static,At=$(function(e,t){let r=M(),{id:n=`headlessui-dialog-${r}`,open:o,onClose:a,initialFocus:l,__demoMode:i=!1,...d}=e,[c,s]=u.exports.useState(0),f=Ye();o===void 0&&f!==null&&(o=A(f,{[pe.Open]:!0,[pe.Closed]:!1}));let v=u.exports.useRef(new Set),p=u.exports.useRef(null),O=T(p,t),w=u.exports.useRef(null),x=q(p),F=e.hasOwnProperty("open")||f!==null,ue=e.hasOwnProperty("onClose");if(!F&&!ue)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!F)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ue)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let E=o?0:1,[L,Le]=u.exports.useReducer(Ft,{titleId:null,descriptionId:null,panelRef:u.exports.createRef()}),N=y(()=>a(!1)),se=y(g=>Le({type:0,id:g})),V=G()?i?!1:E===0:!1,U=c>1,Ne=u.exports.useContext(Y)!==null,ke=U?"parent":"leaf";st(p,U?V:!1);let ce=y(()=>{var g,k;return[...Array.from((g=x==null?void 0:x.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?g:[]).filter(b=>!(!(b instanceof HTMLElement)||b.contains(w.current)||L.panelRef.current&&b.contains(L.panelRef.current))),(k=L.panelRef.current)!=null?k:p.current]});Ze(()=>ce(),N,V&&!U),ae(x==null?void 0:x.defaultView,"keydown",g=>{g.defaultPrevented||g.key===$e.Escape&&E===0&&(U||(g.preventDefault(),g.stopPropagation(),N()))}),Tt(x,E===0&&!Ne,ce),u.exports.useEffect(()=>{if(E!==0||!p.current)return;let g=new IntersectionObserver(k=>{for(let b of k)b.boundingClientRect.x===0&&b.boundingClientRect.y===0&&b.boundingClientRect.width===0&&b.boundingClientRect.height===0&&N()});return g.observe(p.current),()=>g.disconnect()},[E,p,N]);let[Ce,Me]=gt(),Oe=u.exports.useMemo(()=>[{dialogState:E,close:N,setTitleId:se},L],[E,L,N,se]),de=u.exports.useMemo(()=>({open:E===0}),[E]),Ie={ref:O,id:n,role:"dialog","aria-modal":E===0?!0:void 0,"aria-labelledby":L.titleId,"aria-describedby":Ce};return m.createElement(Et,{type:"Dialog",enabled:E===0,element:p,onUpdate:y((g,k,b)=>{k==="Dialog"&&A(g,{[te.Add](){v.current.add(b),s(z=>z+1)},[te.Remove](){v.current.add(b),s(z=>z-1)}})})},m.createElement(Z,{force:!0},m.createElement(ee,null,m.createElement(Y.Provider,{value:Oe},m.createElement(ee.Group,{target:p},m.createElement(Z,{force:!1},m.createElement(Me,{slot:de,name:"Dialog.Description"},h(I,{initialFocus:l,containers:v,features:V?A(ke,{parent:I.features.RestoreFocus,leaf:I.features.All&~I.features.FocusLock}):I.features.None,children:P({ourProps:Ie,theirProps:d,slot:de,defaultTag:Dt,features:St,visible:E===0,name:"Dialog"})}))))))),m.createElement(Q,{features:W.Hidden,ref:w}))}),Rt="div",Lt=$(function(e,t){let r=M(),{id:n=`headlessui-dialog-overlay-${r}`,...o}=e,[{dialogState:a,close:l}]=j("Dialog.Overlay"),i=T(t),d=y(s=>{if(s.target===s.currentTarget){if(et(s.currentTarget))return s.preventDefault();s.preventDefault(),s.stopPropagation(),l()}}),c=u.exports.useMemo(()=>({open:a===0}),[a]);return P({ourProps:{ref:i,id:n,"aria-hidden":!0,onClick:d},theirProps:o,slot:c,defaultTag:Rt,name:"Dialog.Overlay"})}),Nt="div",kt=$(function(e,t){let r=M(),{id:n=`headlessui-dialog-backdrop-${r}`,...o}=e,[{dialogState:a},l]=j("Dialog.Backdrop"),i=T(t);u.exports.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let d=u.exports.useMemo(()=>({open:a===0}),[a]);return h(Z,{force:!0,children:h(ee,{children:P({ourProps:{ref:i,id:n,"aria-hidden":!0},theirProps:o,slot:d,defaultTag:Nt,name:"Dialog.Backdrop"})})})}),Ct="div",Mt=$(function(e,t){let r=M(),{id:n=`headlessui-dialog-panel-${r}`,...o}=e,[{dialogState:a},l]=j("Dialog.Panel"),i=T(t,l.panelRef),d=u.exports.useMemo(()=>({open:a===0}),[a]),c=y(s=>{s.stopPropagation()});return P({ourProps:{ref:i,id:n,onClick:c},theirProps:o,slot:d,defaultTag:Ct,name:"Dialog.Panel"})}),Ot="h2",It=$(function(e,t){let r=M(),{id:n=`headlessui-dialog-title-${r}`,...o}=e,[{dialogState:a,setTitleId:l}]=j("Dialog.Title"),i=T(t);u.exports.useEffect(()=>(l(n),()=>l(null)),[n,l]);let d=u.exports.useMemo(()=>({open:a===0}),[a]);return P({ourProps:{ref:i,id:n},theirProps:o,slot:d,defaultTag:Ot,name:"Dialog.Title"})}),we=Object.assign(At,{Backdrop:kt,Panel:Mt,Overlay:Lt,Title:It,Description:wt});function _t({title:e,description:t,children:r}){return xe("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:[h(He,{title:e,description:t}),h("div",{className:"mt-5 md:mt-0 md:col-span-2",children:h("div",{className:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg",children:r})})]})}function Wt({isOpen:e,onClose:t,maxWidth:r="2xl",children:n}){const o={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[r];return typeof window>"u"?null:je.createPortal(h(X.Root,{show:e,as:m.Fragment,children:h(we,{as:"div",static:!0,className:"fixed z-10 inset-0 overflow-y-auto",open:e,onClose:t,children:xe("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[h(X.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:h(we.Overlay,{className:"fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity"})}),h("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200B"}),h(X.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:h("div",{className:Ue("inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full",o),children:n})})]})})}),document.body)}export{_t as A,Wt as M};
