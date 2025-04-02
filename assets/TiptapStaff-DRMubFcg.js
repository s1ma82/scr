import{a0 as E,l as kt,r as de,u as Tt,m as Nt,K as Lt,j as g,a1 as Ot,a2 as ne,N as Ut,t as It,g as Rt,A as et,a as Pt,Q as Mt,G as Bt}from"./index-BYT0V1gO.js";import{E as Wt}from"./Edit-BXfskQEj.js";import{E as qt}from"./EditOff-DZC3g9ZT.js";import{u as $t,s as J,S as Ht}from"./SaveAs-B3kR1vHY.js";import{B as Kt}from"./index-BYWxSTIH.js";import{I as Te,T as ue}from"./Tooltip-Dkvm1Azr.js";import{g as Jt,F as Gt,S as zt}from"./getToolbarItems-DVLZice8.js";import{A as Qt}from"./index-DilHGBfU.js";import"./Add-DfPP2A7M.js";import"./NoteAdd-BSkyQwFr.js";var _e=e=>e.type==="checkbox",ce=e=>e instanceof Date,$=e=>e==null;const ct=e=>typeof e=="object";var N=e=>!$(e)&&!Array.isArray(e)&&ct(e)&&!ce(e),dt=e=>N(e)&&e.target?_e(e.target)?e.target.checked:e.target.value:e,Yt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ft=(e,s)=>e.has(Yt(s)),Xt=e=>{const s=e.constructor&&e.constructor.prototype;return N(s)&&s.hasOwnProperty("isPrototypeOf")},Re=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function G(e){let s;const t=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Re&&(e instanceof Blob||a))&&(t||N(e)))if(s=t?[]:{},!t&&!Xt(e))s=e;else for(const n in e)e.hasOwnProperty(n)&&(s[n]=G(e[n]));else return e;return s}var we=e=>Array.isArray(e)?e.filter(Boolean):[],T=e=>e===void 0,f=(e,s,t)=>{if(!s||!N(e))return t;const a=we(s.split(/[,[\].]+?/)).reduce((n,o)=>$(n)?n:n[o],e);return T(a)||a===e?T(e[s])?t:e[s]:a},X=e=>typeof e=="boolean",Pe=e=>/^\w*$/.test(e),yt=e=>we(e.replace(/["|']|\]/g,"").split(/\.|\[/)),j=(e,s,t)=>{let a=-1;const n=Pe(s)?[s]:yt(s),o=n.length,c=o-1;for(;++a<o;){const h=n[a];let p=t;if(a!==c){const C=e[h];p=N(C)||Array.isArray(C)?C:isNaN(+n[a+1])?{}:[]}if(h==="__proto__"||h==="constructor"||h==="prototype")return;e[h]=p,e=e[h]}return e};const Ve={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},te={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ie={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Zt=E.createContext(null),Me=()=>E.useContext(Zt);var ht=(e,s,t,a=!0)=>{const n={defaultValues:s._defaultValues};for(const o in e)Object.defineProperty(n,o,{get:()=>{const c=o;return s._proxyFormState[c]!==te.all&&(s._proxyFormState[c]=!a||te.all),t&&(t[c]=!0),e[c]}});return n},z=e=>N(e)&&!Object.keys(e).length,gt=(e,s,t,a)=>{t(e);const{name:n,...o}=e;return z(o)||Object.keys(o).length>=Object.keys(s).length||Object.keys(o).find(c=>s[c]===(!a||te.all))},be=e=>Array.isArray(e)?e:[e],mt=(e,s,t)=>!e||!s||e===s||be(e).some(a=>a&&(t?a===s:a.startsWith(s)||s.startsWith(a)));function Be(e){const s=E.useRef(e);s.current=e,E.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}function er(e){const s=Me(),{control:t=s.control,disabled:a,name:n,exact:o}=e||{},[c,h]=E.useState(t._formState),p=E.useRef(!0),C=E.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1}),A=E.useRef(n);return A.current=n,Be({disabled:a,next:x=>p.current&&mt(A.current,x.name,o)&&gt(x,C.current,t._updateFormState)&&h({...t._formState,...x}),subject:t._subjects.state}),E.useEffect(()=>(p.current=!0,C.current.isValid&&t._updateValid(!0),()=>{p.current=!1}),[t]),E.useMemo(()=>ht(c,t,C.current,!1),[c,t])}var se=e=>typeof e=="string",vt=(e,s,t,a,n)=>se(e)?(a&&s.watch.add(e),f(t,e,n)):Array.isArray(e)?e.map(o=>(a&&s.watch.add(o),f(t,o))):(a&&(s.watchAll=!0),t);function tr(e){const s=Me(),{control:t=s.control,name:a,defaultValue:n,disabled:o,exact:c}=e||{},h=E.useRef(a);h.current=a,Be({disabled:o,subject:t._subjects.values,next:A=>{mt(h.current,A.name,c)&&C(G(vt(h.current,t._names,A.values||t._formValues,!1,n)))}});const[p,C]=E.useState(t._getWatch(a,n));return E.useEffect(()=>t._removeUnmounted()),p}function rr(e){const s=Me(),{name:t,disabled:a,control:n=s.control,shouldUnregister:o}=e,c=ft(n._names.array,t),h=tr({control:n,name:t,defaultValue:f(n._formValues,t,f(n._defaultValues,t,e.defaultValue)),exact:!0}),p=er({control:n,name:t,exact:!0}),C=E.useRef(n.register(t,{...e.rules,value:h,...X(e.disabled)?{disabled:e.disabled}:{}})),A=E.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!f(p.errors,t)},isDirty:{enumerable:!0,get:()=>!!f(p.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!f(p.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!f(p.validatingFields,t)},error:{enumerable:!0,get:()=>f(p.errors,t)}}),[p,t]),x=E.useMemo(()=>({name:t,value:h,...X(a)||p.disabled?{disabled:p.disabled||a}:{},onChange:U=>C.current.onChange({target:{value:dt(U),name:t},type:Ve.CHANGE}),onBlur:()=>C.current.onBlur({target:{value:f(n._formValues,t),name:t},type:Ve.BLUR}),ref:U=>{const H=f(n._fields,t);H&&U&&(H._f.ref={focus:()=>U.focus(),select:()=>U.select(),setCustomValidity:I=>U.setCustomValidity(I),reportValidity:()=>U.reportValidity()})}}),[t,n._formValues,a,p.disabled,h,n._fields]);return E.useEffect(()=>{const U=n._options.shouldUnregister||o,H=(I,D)=>{const B=f(n._fields,I);B&&B._f&&(B._f.mount=D)};if(H(t,!0),U){const I=G(f(n._options.defaultValues,t));j(n._defaultValues,t,I),T(f(n._formValues,t))&&j(n._formValues,t,I)}return!c&&n.register(t),()=>{(c?U&&!n._state.action:U)?n.unregister(t):H(t,!1)}},[t,n,c,o]),E.useEffect(()=>{n._updateDisabledField({disabled:a,fields:n._fields,name:t})},[a,t,n]),E.useMemo(()=>({field:x,formState:p,fieldState:A}),[x,p,A])}const le=e=>e.render(rr(e));var sr=(e,s,t,a,n)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:n||!0}}:{},tt=e=>({isOnSubmit:!e||e===te.onSubmit,isOnBlur:e===te.onBlur,isOnChange:e===te.onChange,isOnAll:e===te.all,isOnTouch:e===te.onTouched}),rt=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const xe=(e,s,t,a)=>{for(const n of t||Object.keys(e)){const o=f(e,n);if(o){const{_f:c,...h}=o;if(c){if(c.refs&&c.refs[0]&&s(c.refs[0],n)&&!a)return!0;if(c.ref&&s(c.ref,c.name)&&!a)return!0;if(xe(h,s))break}else if(N(h)&&xe(h,s))break}}};var ir=(e,s,t)=>{const a=be(f(e,t));return j(a,"root",s[t]),j(e,t,a),e},We=e=>e.type==="file",re=e=>typeof e=="function",Ae=e=>{if(!Re)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},Fe=e=>se(e),qe=e=>e.type==="radio",Se=e=>e instanceof RegExp;const st={value:!1,isValid:!1},it={value:!0,isValid:!0};var bt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!T(e[0].attributes.value)?T(e[0].value)||e[0].value===""?it:{value:e[0].value,isValid:!0}:it:st}return st};const at={isValid:!1,value:null};var xt=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,at):at;function nt(e,s,t="validate"){if(Fe(e)||Array.isArray(e)&&e.every(Fe)||X(e)&&!e)return{type:t,message:Fe(e)?e:"",ref:s}}var fe=e=>N(e)&&!Se(e)?e:{value:e,message:""},lt=async(e,s,t,a,n,o)=>{const{ref:c,refs:h,required:p,maxLength:C,minLength:A,min:x,max:U,pattern:H,validate:I,name:D,valueAsNumber:B,mount:W}=e._f,V=f(t,D);if(!W||s.has(D))return{};const Z=h?h[0]:c,Q=F=>{n&&Z.reportValidity&&(Z.setCustomValidity(X(F)?"":F||""),Z.reportValidity())},S={},m=qe(c),v=_e(c),k=m||v,K=(B||We(c))&&T(c.value)&&T(V)||Ae(c)&&c.value===""||V===""||Array.isArray(V)&&!V.length,R=sr.bind(null,D,a,S),pe=(F,w,L,q=ie.maxLength,ee=ie.minLength)=>{const Y=F?w:L;S[D]={type:F?q:ee,message:Y,ref:c,...R(F?q:ee,Y)}};if(o?!Array.isArray(V)||!V.length:p&&(!k&&(K||$(V))||X(V)&&!V||v&&!bt(h).isValid||m&&!xt(h).isValid)){const{value:F,message:w}=Fe(p)?{value:!!p,message:p}:fe(p);if(F&&(S[D]={type:ie.required,message:w,ref:Z,...R(ie.required,w)},!a))return Q(w),S}if(!K&&(!$(x)||!$(U))){let F,w;const L=fe(U),q=fe(x);if(!$(V)&&!isNaN(V)){const ee=c.valueAsNumber||V&&+V;$(L.value)||(F=ee>L.value),$(q.value)||(w=ee<q.value)}else{const ee=c.valueAsDate||new Date(V),Y=ge=>new Date(new Date().toDateString()+" "+ge),ye=c.type=="time",he=c.type=="week";se(L.value)&&V&&(F=ye?Y(V)>Y(L.value):he?V>L.value:ee>new Date(L.value)),se(q.value)&&V&&(w=ye?Y(V)<Y(q.value):he?V<q.value:ee<new Date(q.value))}if((F||w)&&(pe(!!F,L.message,q.message,ie.max,ie.min),!a))return Q(S[D].message),S}if((C||A)&&!K&&(se(V)||o&&Array.isArray(V))){const F=fe(C),w=fe(A),L=!$(F.value)&&V.length>+F.value,q=!$(w.value)&&V.length<+w.value;if((L||q)&&(pe(L,F.message,w.message),!a))return Q(S[D].message),S}if(H&&!K&&se(V)){const{value:F,message:w}=fe(H);if(Se(F)&&!V.match(F)&&(S[D]={type:ie.pattern,message:w,ref:c,...R(ie.pattern,w)},!a))return Q(w),S}if(I){if(re(I)){const F=await I(V,t),w=nt(F,Z);if(w&&(S[D]={...w,...R(ie.validate,w.message)},!a))return Q(w.message),S}else if(N(I)){let F={};for(const w in I){if(!z(F)&&!a)break;const L=nt(await I[w](V,t),Z,w);L&&(F={...L,...R(w,L.message)},Q(L.message),a&&(S[D]=F))}if(!z(F)&&(S[D]={ref:Z,...F},!a))return S}}return Q(!0),S};function ar(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=T(e)?a++:e[s[a++]];return e}function nr(e){for(const s in e)if(e.hasOwnProperty(s)&&!T(e[s]))return!1;return!0}function O(e,s){const t=Array.isArray(s)?s:Pe(s)?[s]:yt(s),a=t.length===1?e:ar(e,t),n=t.length-1,o=t[n];return a&&delete a[o],n!==0&&(N(a)&&z(a)||Array.isArray(a)&&nr(a))&&O(e,t.slice(0,-1)),e}var Ne=()=>{let e=[];return{get observers(){return e},next:n=>{for(const o of e)o.next&&o.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(o=>o!==n)}}),unsubscribe:()=>{e=[]}}},Ie=e=>$(e)||!ct(e);function oe(e,s){if(Ie(e)||Ie(s))return e===s;if(ce(e)&&ce(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const n of t){const o=e[n];if(!a.includes(n))return!1;if(n!=="ref"){const c=s[n];if(ce(o)&&ce(c)||N(o)&&N(c)||Array.isArray(o)&&Array.isArray(c)?!oe(o,c):o!==c)return!1}}return!0}var _t=e=>e.type==="select-multiple",lr=e=>qe(e)||_e(e),Le=e=>Ae(e)&&e.isConnected,pt=e=>{for(const s in e)if(re(e[s]))return!0;return!1};function De(e,s={}){const t=Array.isArray(e);if(N(e)||t)for(const a in e)Array.isArray(e[a])||N(e[a])&&!pt(e[a])?(s[a]=Array.isArray(e[a])?[]:{},De(e[a],s[a])):$(e[a])||(s[a]=!0);return s}function Ft(e,s,t){const a=Array.isArray(e);if(N(e)||a)for(const n in e)Array.isArray(e[n])||N(e[n])&&!pt(e[n])?T(s)||Ie(t[n])?t[n]=Array.isArray(e[n])?De(e[n],[]):{...De(e[n])}:Ft(e[n],$(s)?{}:s[n],t[n]):t[n]=!oe(e[n],s[n]);return t}var me=(e,s)=>Ft(e,s,De(s)),Vt=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>T(e)?e:s?e===""?NaN:e&&+e:t&&se(e)?new Date(e):a?a(e):e;function Oe(e){const s=e.ref;return We(s)?s.files:qe(s)?xt(e.refs).value:_t(s)?[...s.selectedOptions].map(({value:t})=>t):_e(s)?bt(e.refs).value:Vt(T(s.value)?e.ref.value:s.value,e)}var or=(e,s,t,a)=>{const n={};for(const o of e){const c=f(s,o);c&&j(n,o,c._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:a}},ve=e=>T(e)?e:Se(e)?e.source:N(e)?Se(e.value)?e.value.source:e.value:e;const ot="AsyncFunction";var ur=e=>!!e&&!!e.validate&&!!(re(e.validate)&&e.validate.constructor.name===ot||N(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===ot)),cr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ut(e,s,t){const a=f(e,t);if(a||Pe(t))return{error:a,name:t};const n=t.split(".");for(;n.length;){const o=n.join("."),c=f(s,o),h=f(e,o);if(c&&!Array.isArray(c)&&t!==o)return{name:t};if(h&&h.type)return{name:o,error:h};n.pop()}return{name:t}}var dr=(e,s,t,a,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(s||e):(t?a.isOnBlur:n.isOnBlur)?!e:(t?a.isOnChange:n.isOnChange)?e:!0,fr=(e,s)=>!we(f(e,s)).length&&O(e,s);const yr={mode:te.onSubmit,reValidateMode:te.onChange,shouldFocusError:!0};function hr(e={}){let s={...yr,...e},t={submitCount:0,isDirty:!1,isLoading:re(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},n=N(s.defaultValues)||N(s.values)?G(s.defaultValues||s.values)||{}:{},o=s.shouldUnregister?{}:G(n),c={action:!1,mount:!1,watch:!1},h={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},p,C=0;const A={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:Ne(),array:Ne(),state:Ne()},U=tt(s.mode),H=tt(s.reValidateMode),I=s.criteriaMode===te.all,D=r=>i=>{clearTimeout(C),C=setTimeout(r,i)},B=async r=>{if(!s.disabled&&(A.isValid||r)){const i=s.resolver?z((await k()).errors):await R(a,!0);i!==t.isValid&&x.state.next({isValid:i})}},W=(r,i)=>{!s.disabled&&(A.isValidating||A.validatingFields)&&((r||Array.from(h.mount)).forEach(l=>{l&&(i?j(t.validatingFields,l,i):O(t.validatingFields,l))}),x.state.next({validatingFields:t.validatingFields,isValidating:!z(t.validatingFields)}))},V=(r,i=[],l,y,d=!0,u=!0)=>{if(y&&l&&!s.disabled){if(c.action=!0,u&&Array.isArray(f(a,r))){const b=l(f(a,r),y.argA,y.argB);d&&j(a,r,b)}if(u&&Array.isArray(f(t.errors,r))){const b=l(f(t.errors,r),y.argA,y.argB);d&&j(t.errors,r,b),fr(t.errors,r)}if(A.touchedFields&&u&&Array.isArray(f(t.touchedFields,r))){const b=l(f(t.touchedFields,r),y.argA,y.argB);d&&j(t.touchedFields,r,b)}A.dirtyFields&&(t.dirtyFields=me(n,o)),x.state.next({name:r,isDirty:F(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else j(o,r,i)},Z=(r,i)=>{j(t.errors,r,i),x.state.next({errors:t.errors})},Q=r=>{t.errors=r,x.state.next({errors:t.errors,isValid:!1})},S=(r,i,l,y)=>{const d=f(a,r);if(d){const u=f(o,r,T(l)?f(n,r):l);T(u)||y&&y.defaultChecked||i?j(o,r,i?u:Oe(d._f)):q(r,u),c.mount&&B()}},m=(r,i,l,y,d)=>{let u=!1,b=!1;const _={name:r};if(!s.disabled){const P=!!(f(a,r)&&f(a,r)._f&&f(a,r)._f.disabled);if(!l||y){A.isDirty&&(b=t.isDirty,t.isDirty=_.isDirty=F(),u=b!==_.isDirty);const M=P||oe(f(n,r),i);b=!!(!P&&f(t.dirtyFields,r)),M||P?O(t.dirtyFields,r):j(t.dirtyFields,r,!0),_.dirtyFields=t.dirtyFields,u=u||A.dirtyFields&&b!==!M}if(l){const M=f(t.touchedFields,r);M||(j(t.touchedFields,r,l),_.touchedFields=t.touchedFields,u=u||A.touchedFields&&M!==l)}u&&d&&x.state.next(_)}return u?_:{}},v=(r,i,l,y)=>{const d=f(t.errors,r),u=A.isValid&&X(i)&&t.isValid!==i;if(s.delayError&&l?(p=D(()=>Z(r,l)),p(s.delayError)):(clearTimeout(C),p=null,l?j(t.errors,r,l):O(t.errors,r)),(l?!oe(d,l):d)||!z(y)||u){const b={...y,...u&&X(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...b},x.state.next(b)}},k=async r=>{W(r,!0);const i=await s.resolver(o,s.context,or(r||h.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return W(r),i},K=async r=>{const{errors:i}=await k(r);if(r)for(const l of r){const y=f(i,l);y?j(t.errors,l,y):O(t.errors,l)}else t.errors=i;return i},R=async(r,i,l={valid:!0})=>{for(const y in r){const d=r[y];if(d){const{_f:u,...b}=d;if(u){const _=h.array.has(u.name),P=d._f&&ur(d._f);P&&A.validatingFields&&W([y],!0);const M=await lt(d,h.disabled,o,I,s.shouldUseNativeValidation&&!i,_);if(P&&A.validatingFields&&W([y]),M[u.name]&&(l.valid=!1,i))break;!i&&(f(M,u.name)?_?ir(t.errors,M,u.name):j(t.errors,u.name,M[u.name]):O(t.errors,u.name))}!z(b)&&await R(b,i,l)}}return l.valid},pe=()=>{for(const r of h.unMount){const i=f(a,r);i&&(i._f.refs?i._f.refs.every(l=>!Le(l)):!Le(i._f.ref))&&Ee(r)}h.unMount=new Set},F=(r,i)=>!s.disabled&&(r&&i&&j(o,r,i),!oe($e(),n)),w=(r,i,l)=>vt(r,h,{...c.mount?o:T(i)?n:se(r)?{[r]:i}:i},l,i),L=r=>we(f(c.mount?o:n,r,s.shouldUnregister?f(n,r,[]):[])),q=(r,i,l={})=>{const y=f(a,r);let d=i;if(y){const u=y._f;u&&(!u.disabled&&j(o,r,Vt(i,u)),d=Ae(u.ref)&&$(i)?"":i,_t(u.ref)?[...u.ref.options].forEach(b=>b.selected=d.includes(b.value)):u.refs?_e(u.ref)?u.refs.length>1?u.refs.forEach(b=>(!b.defaultChecked||!b.disabled)&&(b.checked=Array.isArray(d)?!!d.find(_=>_===b.value):d===b.value)):u.refs[0]&&(u.refs[0].checked=!!d):u.refs.forEach(b=>b.checked=b.value===d):We(u.ref)?u.ref.value="":(u.ref.value=d,u.ref.type||x.values.next({name:r,values:{...o}})))}(l.shouldDirty||l.shouldTouch)&&m(r,d,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ge(r)},ee=(r,i,l)=>{for(const y in i){const d=i[y],u=`${r}.${y}`,b=f(a,u);(h.array.has(r)||N(d)||b&&!b._f)&&!ce(d)?ee(u,d,l):q(u,d,l)}},Y=(r,i,l={})=>{const y=f(a,r),d=h.array.has(r),u=G(i);j(o,r,u),d?(x.array.next({name:r,values:{...o}}),(A.isDirty||A.dirtyFields)&&l.shouldDirty&&x.state.next({name:r,dirtyFields:me(n,o),isDirty:F(r,u)})):y&&!y._f&&!$(u)?ee(r,u,l):q(r,u,l),rt(r,h)&&x.state.next({...t}),x.values.next({name:c.mount?r:void 0,values:{...o}})},ye=async r=>{c.mount=!0;const i=r.target;let l=i.name,y=!0;const d=f(a,l),u=()=>i.type?Oe(d._f):dt(r),b=_=>{y=Number.isNaN(_)||ce(_)&&isNaN(_.getTime())||oe(_,f(o,l,_))};if(d){let _,P;const M=u(),ae=r.type===Ve.BLUR||r.type===Ve.FOCUS_OUT,Et=!cr(d._f)&&!s.resolver&&!f(t.errors,l)&&!d._f.deps||dr(ae,f(t.touchedFields,l),t.isSubmitted,H,U),Ce=rt(l,h,ae);j(o,l,M),ae?(d._f.onBlur&&d._f.onBlur(r),p&&p(0)):d._f.onChange&&d._f.onChange(r);const ke=m(l,M,ae,!1),jt=!z(ke)||Ce;if(!ae&&x.values.next({name:l,type:r.type,values:{...o}}),Et)return A.isValid&&(s.mode==="onBlur"&&ae?B():ae||B()),jt&&x.state.next({name:l,...Ce?{}:ke});if(!ae&&Ce&&x.state.next({...t}),s.resolver){const{errors:Xe}=await k([l]);if(b(M),y){const Ct=ut(t.errors,a,l),Ze=ut(Xe,a,Ct.name||l);_=Ze.error,l=Ze.name,P=z(Xe)}}else W([l],!0),_=(await lt(d,h.disabled,o,I,s.shouldUseNativeValidation))[l],W([l]),b(M),y&&(_?P=!1:A.isValid&&(P=await R(a,!0)));y&&(d._f.deps&&ge(d._f.deps),v(l,P,_,ke))}},he=(r,i)=>{if(f(t.errors,i)&&r.focus)return r.focus(),1},ge=async(r,i={})=>{let l,y;const d=be(r);if(s.resolver){const u=await K(T(r)?r:d);l=z(u),y=r?!d.some(b=>f(u,b)):l}else r?(y=(await Promise.all(d.map(async u=>{const b=f(a,u);return await R(b&&b._f?{[u]:b}:b)}))).every(Boolean),!(!y&&!t.isValid)&&B()):y=l=await R(a);return x.state.next({...!se(r)||A.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors}),i.shouldFocus&&!y&&xe(a,he,r?d:h.mount),y},$e=r=>{const i={...c.mount?o:n};return T(r)?i:se(r)?f(i,r):r.map(l=>f(i,l))},He=(r,i)=>({invalid:!!f((i||t).errors,r),isDirty:!!f((i||t).dirtyFields,r),error:f((i||t).errors,r),isValidating:!!f(t.validatingFields,r),isTouched:!!f((i||t).touchedFields,r)}),At=r=>{r&&be(r).forEach(i=>O(t.errors,i)),x.state.next({errors:r?t.errors:{}})},Ke=(r,i,l)=>{const y=(f(a,r,{_f:{}})._f||{}).ref,d=f(t.errors,r)||{},{ref:u,message:b,type:_,...P}=d;j(t.errors,r,{...P,...i,ref:y}),x.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},St=(r,i)=>re(r)?x.values.subscribe({next:l=>r(w(void 0,i),l)}):w(r,i,!0),Ee=(r,i={})=>{for(const l of r?be(r):h.mount)h.mount.delete(l),h.array.delete(l),i.keepValue||(O(a,l),O(o,l)),!i.keepError&&O(t.errors,l),!i.keepDirty&&O(t.dirtyFields,l),!i.keepTouched&&O(t.touchedFields,l),!i.keepIsValidating&&O(t.validatingFields,l),!s.shouldUnregister&&!i.keepDefaultValue&&O(n,l);x.values.next({values:{...o}}),x.state.next({...t,...i.keepDirty?{isDirty:F()}:{}}),!i.keepIsValid&&B()},Je=({disabled:r,name:i,field:l,fields:y})=>{(X(r)&&c.mount||r||h.disabled.has(i))&&(r?h.disabled.add(i):h.disabled.delete(i),m(i,Oe(l?l._f:f(y,i)._f),!1,!1,!0))},je=(r,i={})=>{let l=f(a,r);const y=X(i.disabled)||X(s.disabled);return j(a,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...i}}),h.mount.add(r),l?Je({field:l,disabled:X(i.disabled)?i.disabled:s.disabled,name:r}):S(r,!0,i.value),{...y?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:ve(i.min),max:ve(i.max),minLength:ve(i.minLength),maxLength:ve(i.maxLength),pattern:ve(i.pattern)}:{},name:r,onChange:ye,onBlur:ye,ref:d=>{if(d){je(r,i),l=f(a,r);const u=T(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,b=lr(u),_=l._f.refs||[];if(b?_.find(P=>P===u):u===l._f.ref)return;j(a,r,{_f:{...l._f,...b?{refs:[..._.filter(Le),u,...Array.isArray(f(n,r))?[{}]:[]],ref:{type:u.type,name:r}}:{ref:u}}}),S(r,!1,void 0,u)}else l=f(a,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(ft(h.array,r)&&c.action)&&h.unMount.add(r)}}},Ge=()=>s.shouldFocusError&&xe(a,he,h.mount),Dt=r=>{X(r)&&(x.state.next({disabled:r}),xe(a,(i,l)=>{const y=f(a,l);y&&(i.disabled=y._f.disabled||r,Array.isArray(y._f.refs)&&y._f.refs.forEach(d=>{d.disabled=y._f.disabled||r}))},0,!1))},ze=(r,i)=>async l=>{let y;l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let d=G(o);if(h.disabled.size)for(const u of h.disabled)j(d,u,void 0);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:u,values:b}=await k();t.errors=u,d=b}else await R(a);if(O(t.errors,"root"),z(t.errors)){x.state.next({errors:{}});try{await r(d,l)}catch(u){y=u}}else i&&await i({...t.errors},l),Ge(),setTimeout(Ge);if(x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:z(t.errors)&&!y,submitCount:t.submitCount+1,errors:t.errors}),y)throw y},wt=(r,i={})=>{f(a,r)&&(T(i.defaultValue)?Y(r,G(f(n,r))):(Y(r,i.defaultValue),j(n,r,G(i.defaultValue))),i.keepTouched||O(t.touchedFields,r),i.keepDirty||(O(t.dirtyFields,r),t.isDirty=i.defaultValue?F(r,G(f(n,r))):F()),i.keepError||(O(t.errors,r),A.isValid&&B()),x.state.next({...t}))},Qe=(r,i={})=>{const l=r?G(r):n,y=G(l),d=z(r),u=d?n:y;if(i.keepDefaultValues||(n=l),!i.keepValues){if(i.keepDirtyValues){const b=new Set([...h.mount,...Object.keys(me(n,o))]);for(const _ of Array.from(b))f(t.dirtyFields,_)?j(u,_,f(o,_)):Y(_,f(u,_))}else{if(Re&&T(r))for(const b of h.mount){const _=f(a,b);if(_&&_._f){const P=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(Ae(P)){const M=P.closest("form");if(M){M.reset();break}}}}a={}}o=s.shouldUnregister?i.keepDefaultValues?G(n):{}:G(u),x.array.next({values:{...u}}),x.values.next({values:{...u}})}h={mount:i.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},c.mount=!A.isValid||!!i.keepIsValid||!!i.keepDirtyValues,c.watch=!!s.shouldUnregister,x.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:d?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!oe(r,n)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:d?{}:i.keepDirtyValues?i.keepDefaultValues&&o?me(n,o):t.dirtyFields:i.keepDefaultValues&&r?me(n,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},Ye=(r,i)=>Qe(re(r)?r(o):r,i);return{control:{register:je,unregister:Ee,getFieldState:He,handleSubmit:ze,setError:Ke,_executeSchema:k,_getWatch:w,_getDirty:F,_updateValid:B,_removeUnmounted:pe,_updateFieldArray:V,_updateDisabledField:Je,_getFieldArray:L,_reset:Qe,_resetDefaultValues:()=>re(s.defaultValues)&&s.defaultValues().then(r=>{Ye(r,s.resetOptions),x.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:Dt,_subjects:x,_proxyFormState:A,_setErrors:Q,get _fields(){return a},get _formValues(){return o},get _state(){return c},set _state(r){c=r},get _defaultValues(){return n},get _names(){return h},set _names(r){h=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ge,register:je,handleSubmit:ze,watch:St,setValue:Y,getValues:$e,reset:Ye,resetField:wt,clearErrors:At,unregister:Ee,setError:Ke,setFocus:(r,i={})=>{const l=f(a,r),y=l&&l._f;if(y){const d=y.refs?y.refs[0]:y.ref;d.focus&&(d.focus(),i.shouldSelect&&re(d.select)&&d.select())}},getFieldState:He}}function gr(e={}){const s=E.useRef(void 0),t=E.useRef(void 0),[a,n]=E.useState({isDirty:!1,isValidating:!1,isLoading:re(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:re(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...hr(e),formState:a});const o=s.current.control;return o._options=e,Be({subject:o._subjects.state,next:c=>{gt(c,o._proxyFormState,o._updateFormState,!0)&&n({...o._formState})}}),E.useEffect(()=>o._disableForm(e.disabled),[o,e.disabled]),E.useEffect(()=>{if(o._proxyFormState.isDirty){const c=o._getDirty();c!==a.isDirty&&o._subjects.state.next({isDirty:c})}},[o,a.isDirty]),E.useEffect(()=>{e.values&&!oe(e.values,t.current)?(o._reset(e.values,o._options.resetOptions),t.current=e.values,n(c=>({...c}))):o._resetDefaultValues()},[e.values,o]),E.useEffect(()=>{e.errors&&o._setErrors(e.errors)},[e.errors,o]),E.useEffect(()=>{o._state.mount||(o._updateValid(),o._state.mount=!0),o._state.watch&&(o._state.watch=!1,o._subjects.state.next({...o._formState})),o._removeUnmounted()}),E.useEffect(()=>{e.shouldUnregister&&o._subjects.values.next({values:o._getWatch()})},[e.shouldUnregister,o]),s.current.formState=ht(a,o),s.current}var mr={API_URL:"https://scr.opolo.me/api"};const Ue={type:"doc",content:[]},Cr=()=>{const{id:e}=kt(),[s,t]=de.useState(!1),{focusedArticles:a}=Tt(m=>m.catalogs),n=Nt(),[o,c]=$t({name:"",avatar:""}),[h,p]=de.useState(Ue),[C,A]=de.useState(!0),{control:x,handleSubmit:U,reset:H,watch:I,formState:{errors:D}}=gr({defaultValues:{position:"",education:"",specialty:"",qualification:"",certification:"",experienceCollege:"",experienceTotal:"",experiencePedagogical:""}}),B=`employeeDraft_${e}`,W=Lt({extensions:It,content:h||Ue,editable:C,onUpdate:({editor:m})=>{const v=m.getJSON();p(v),t(!0)},editorProps:{handleKeyDown(m,v){return v.ctrlKey&&v.key==="Enter"?(m.dispatch(m.state.tr.insertText(`
`)),v.preventDefault(),!0):!1}}});de.useEffect(()=>{(async()=>{const v=localStorage.getItem(B);if(v){const{subContent:k,content:K}=JSON.parse(v);if(!o&&!h){console.log(v),c("",k),W&&W.commands.setContent(K.about),p(K.about),H(K||{}),t(!0);return}}if(e)try{const k=a.find(R=>R.id===e);if(k&&W){console.log("article,",k);const R=await Rt(k.content);p(R.about),W.commands.setContent(R.about),c("",{name:k.title,avatar:k.avatar}),H(R||{});return}const K=await et.getArticle(e);console.log("Подгрузка с сервера: ",K),n(Pt(K))}catch(k){console.error("Ошибка при загрузке данных:",k),p(Ue)}})()},[e,a,H]);const V=I();de.useEffect(()=>{if(s){const m={subContent:{name:o("name"),avatar:o("avatar")},content:{...V,about:h}};localStorage.setItem(B,JSON.stringify(m))}},[o,h,V,s]),de.useEffect(()=>{const m=v=>{s&&(v.preventDefault(),v.returnValue="")};return window.addEventListener("beforeunload",m),()=>window.removeEventListener("beforeunload",m)},[s]);const Z=async m=>{const v=m.target.files[0];if(!v)return;const k=await Mt(v);k&&(c("avatar",k),t(!0))},Q=async m=>{if(!e)return;const v={id:e,title:o("name"),avatar:o("avatar"),content:{...m,about:h}};try{const k=await et.saveArticle(v);t(!1),Bt()}catch(k){console.error("Ошибка при сохранении:",k)}};if(!W)return;const S=Jt({editor:W,styles:J});return g.jsxs("form",{onSubmit:U(Q),className:J.tiptapeditor,children:[g.jsx(Te,{name:"name",className:J.name,placeholder:"Название статьи",onChange:m=>c(m.currentTarget.name,m.currentTarget.value),value:o("name")}),g.jsx("div",{className:J.avatar_container,children:g.jsx(ue,{title:"Нажмите, чтобы сменить аватар",children:g.jsx("div",{className:J.avatar,children:g.jsx(Qt,{type:"editor",onChange:Z,src:`${mr.API_URL}/files/${o("avatar")}`,alt:o("name")})})})}),g.jsx(Ot,{fullWidth:!0,margin:"normal",children:g.jsx(le,{name:"position",control:x,render:({field:m})=>{var v;return g.jsx(ne,{...m,label:"Должность",fullWidth:!0,margin:"normal",error:!!D.position,helperText:(v=D.education)==null?void 0:v.message})}})}),g.jsxs("h3",{children:["Образование ",g.jsx("small",{children:"(учебное заведение, год его окончания)"})]}),g.jsx(le,{name:"education",control:x,render:({field:m})=>{var v;return g.jsx(ne,{...m,label:"Образование",fullWidth:!0,margin:"normal",error:!!D.education,helperText:(v=D.education)==null?void 0:v.message})}}),g.jsx("h3",{children:"Специальность, квалификация по диплому"}),g.jsx(le,{name:"specialty",control:x,render:({field:m})=>{var v;return g.jsx(ne,{...m,label:"Специальность",fullWidth:!0,margin:"normal",error:!!D.specialty,helperText:(v=D.specialty)==null?void 0:v.message})}}),g.jsxs("h4",{children:["Прохождение аттестации ",g.jsx("small",{children:"(год, пед. звание, категория)"})]}),g.jsx(le,{name:"qualification",control:x,render:({field:m})=>{var v;return g.jsx(ne,{...m,label:"Аттестация",fullWidth:!0,margin:"normal",error:!!D.qualification,helperText:(v=D.qualification)==null?void 0:v.message})}}),g.jsxs("h4",{children:["Повышение квалификации, стажировка ",g.jsx("small",{children:"(уч. заведение, год)"})]}),g.jsx(le,{name:"certification",control:x,render:({field:m})=>{var v;return g.jsx(ne,{...m,label:"Повышение квалификации",fullWidth:!0,margin:"normal",error:!!D.certification,helperText:(v=D.certification)==null?void 0:v.message})}}),g.jsx("h4",{children:"Стаж"}),g.jsx(le,{name:"experienceTotal",control:x,render:({field:m})=>{var v;return g.jsx(ne,{...m,label:"Общий стаж",fullWidth:!0,margin:"normal",error:!!D.experienceTotal,helperText:(v=D.experienceTotal)==null?void 0:v.message})}}),g.jsx(le,{name:"experienceCollege",control:x,render:({field:m})=>{var v;return g.jsx(ne,{...m,label:"Стаж в колледже",fullWidth:!0,margin:"normal",error:!!D.experienceCollege,helperText:(v=D.experienceCollege)==null?void 0:v.message})}}),g.jsx(le,{name:"experiencePedagogical",control:x,render:({field:m})=>{var v;return g.jsx(ne,{...m,label:"Педагогический стаж",fullWidth:!0,margin:"normal",error:!!D.experiencePedagogical,helperText:(v=D.experiencePedagogical)==null?void 0:v.message})}}),g.jsx("h3",{children:"О себе"}),g.jsxs("div",{className:J.toolbar,children:[g.jsx("div",{className:J.toolbar_section,children:S.slice(0,2).map((m,v)=>g.jsx(ue,{title:m.name,children:g.jsx("button",{...m})},v))},"section-1"),g.jsx("div",{className:J.toolbar_section,children:S.slice(2,5).map((m,v)=>g.jsx(ue,{title:m.name,children:g.jsx("button",{...m})},`${v}#1`))},"section-2"),g.jsx("div",{className:J.toolbar_section,children:S.slice(5,8).map((m,v)=>g.jsx(ue,{title:m.name,children:g.jsx("button",{...m})},`${v}#2`))},"section-3"),g.jsxs("div",{className:J.toolbar_section,children:[S.slice(8,9).map((m,v)=>g.jsx(ue,{title:m.name,children:g.jsx("button",{...m})},`${v}#3`)),g.jsx(Te,{className:S[9].className,title:S[9].name,onChange:S[9].onChange,type:"file",children:S[9].children}),g.jsx(Te,{className:S[10].className,title:S[10].name,onChange:S[10].onChange,type:"file",children:S[10].children})]},"section-4"),g.jsx("div",{className:J.toolbar_section,children:S.slice(11,15).map((m,v)=>g.jsx(ue,{title:m.name,children:g.jsx("button",{...m})},`${v}#4`))},"section-5"),g.jsx("div",{className:J.toolbar_section,children:g.jsx(ue,{title:"режим редактирования",children:g.jsx(Gt,{control:g.jsx(zt,{checked:C,onChange:()=>A(!C)}),label:C?g.jsx(Wt,{}):g.jsx(qt,{})})})},"section-6")]}),g.jsx(Ut,{editor:W,className:"tiptap_content"}),g.jsx("div",{className:J.toolbar,children:g.jsxs(Kt,{onClick:Q,className:J.submit_menu__item,children:[g.jsx(Ht,{})," Сохранить изменения"]})})]})};export{Cr as default};
