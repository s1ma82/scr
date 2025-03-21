import{Q as Ye,K as Ze,r as n,a3 as qe,ae as Je,af as eo,ag as L,U as oo,ah as to,ai as he,aj as ro,ak as po,j as l,Z as ge,a5 as j,X,al as no,am as be,an as so,$ as we,a0 as ao,a7 as G,a8 as xe,ao as Te}from"./index-Bikxwdcm.js";import{B as io}from"./index-B3OGdCLe.js";const lo="_input_1ephu_1",co="_input_btn_1ephu_12",uo="_file_1ephu_29",K={input:lo,input_btn:co,file:uo};function mo(t){return Ze("MuiTooltip",t)}const r=Ye("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function fo(t){return Math.round(t*1e5)/1e5}const ho=t=>{const{classes:e,disableInteractive:p,arrow:c,touch:y,placement:u}=t,C={popper:["popper",!p&&"popperInteractive",c&&"popperArrow"],tooltip:["tooltip",c&&"tooltipArrow",y&&"touch",`tooltipPlacement${we(u.split("-")[0])}`],arrow:["arrow"]};return ao(C,mo,e)},go=X(be,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,e)=>{const{ownerState:p}=t;return[e.popper,!p.disableInteractive&&e.popperInteractive,p.arrow&&e.popperArrow,!p.open&&e.popperClose]}})(G(({theme:t})=>({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:e})=>!e.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:e})=>!e,style:{pointerEvents:"none"}},{props:({ownerState:e})=>e.arrow,style:{[`&[data-popper-placement*="bottom"] .${r.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${r.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${r.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${r.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="right"] .${r.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="right"] .${r.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!e.isRtl,style:{[`&[data-popper-placement*="left"] .${r.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:e})=>e.arrow&&!!e.isRtl,style:{[`&[data-popper-placement*="left"] .${r.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),To=X("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,e)=>{const{ownerState:p}=t;return[e.tooltip,p.touch&&e.touch,p.arrow&&e.tooltipArrow,e[`tooltipPlacement${we(p.placement.split("-")[0])}`]]}})(G(({theme:t})=>({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:xe(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[`.${r.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${r.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${r.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${r.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:e})=>e.arrow,style:{position:"relative",margin:0}},{props:({ownerState:e})=>e.touch,style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${fo(16/14)}em`,fontWeight:t.typography.fontWeightRegular}},{props:({ownerState:e})=>!e.isRtl,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:e})=>!e.isRtl&&e.touch,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:e})=>!!e.isRtl,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:e})=>!!e.isRtl&&e.touch,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${r.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:e})=>e.touch,style:{[`.${r.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),yo=X("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,e)=>e.arrow})(G(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:xe(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let F=!1;const ye=new so;let $={x:0,y:0};function _(t,e){return(p,...c)=>{e&&e(p,...c),t(p,...c)}}const bo=n.forwardRef(function(e,p){const c=qe({props:e,name:"MuiTooltip"}),{arrow:y=!1,children:u,classes:C,components:g={},componentsProps:M={},describeChild:Re=!1,disableFocusListener:ve=!1,disableHoverListener:Q=!1,disableInteractive:$e=!1,disableTouchListener:Ce=!1,enterDelay:Y=100,enterNextDelay:Z=0,enterTouchDelay:Me=700,followCursor:A=!1,id:Oe,leaveDelay:q=0,leaveTouchDelay:Se=1500,onClose:J,onOpen:ee,open:Pe,placement:oe="bottom",PopperComponent:te,PopperProps:m={},slotProps:f={},slots:Ee={},title:b,TransitionComponent:ke,TransitionProps:Ie,...re}=c,h=n.isValidElement(u)?u:l.jsx("span",{children:u}),pe=Je(),Le=eo(),[w,ne]=n.useState(),[B,je]=n.useState(null),O=n.useRef(!1),N=$e||A,se=L(),W=L(),S=L(),ae=L(),[Fe,ie]=oo({controlled:Pe,default:!1,name:"Tooltip",state:"open"});let d=Fe;const U=to(Oe),x=n.useRef(),P=he(()=>{x.current!==void 0&&(document.body.style.WebkitUserSelect=x.current,x.current=void 0),ae.clear()});n.useEffect(()=>P,[P]);const le=o=>{ye.clear(),F=!0,ie(!0),ee&&!d&&ee(o)},E=he(o=>{ye.start(800+q,()=>{F=!1}),ie(!1),J&&d&&J(o),se.start(pe.transitions.duration.shortest,()=>{O.current=!1})}),k=o=>{O.current&&o.type!=="touchstart"||(w&&w.removeAttribute("title"),W.clear(),S.clear(),Y||F&&Z?W.start(F?Z:Y,()=>{le(o)}):le(o))},D=o=>{W.clear(),S.start(q,()=>{E(o)})},[,ce]=n.useState(!1),ue=o=>{Te(o.target)||(ce(!1),D(o))},de=o=>{w||ne(o.currentTarget),Te(o.target)&&(ce(!0),k(o))},me=o=>{O.current=!0;const i=h.props;i.onTouchStart&&i.onTouchStart(o)},_e=o=>{me(o),S.clear(),se.clear(),P(),x.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ae.start(Me,()=>{document.body.style.WebkitUserSelect=x.current,k(o)})},Ae=o=>{h.props.onTouchEnd&&h.props.onTouchEnd(o),P(),S.start(Se,()=>{E(o)})};n.useEffect(()=>{if(!d)return;function o(i){i.key==="Escape"&&E(i)}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[E,d]);const Be=ro(po(h),ne,p);!b&&b!==0&&(d=!1);const z=n.useRef(),Ne=o=>{const i=h.props;i.onMouseMove&&i.onMouseMove(o),$={x:o.clientX,y:o.clientY},z.current&&z.current.update()},R={},V=typeof b=="string";Re?(R.title=!d&&V&&!Q?b:null,R["aria-describedby"]=d?U:null):(R["aria-label"]=V?b:null,R["aria-labelledby"]=d&&!V?U:null);const s={...R,...re,...h.props,className:ge(re.className,h.props.className),onTouchStart:me,ref:Be,...A?{onMouseMove:Ne}:{}},v={};Ce||(s.onTouchStart=_e,s.onTouchEnd=Ae),Q||(s.onMouseOver=_(k,s.onMouseOver),s.onMouseLeave=_(D,s.onMouseLeave),N||(v.onMouseOver=k,v.onMouseLeave=D)),ve||(s.onFocus=_(de,s.onFocus),s.onBlur=_(ue,s.onBlur),N||(v.onFocus=de,v.onBlur=ue));const T={...c,isRtl:Le,arrow:y,disableInteractive:N,placement:oe,PopperComponentProp:te,touch:O.current},a=typeof f.popper=="function"?f.popper(T):f.popper,We=n.useMemo(()=>{var i,fe;let o=[{name:"arrow",enabled:!!B,options:{element:B,padding:4}}];return(i=m.popperOptions)!=null&&i.modifiers&&(o=o.concat(m.popperOptions.modifiers)),(fe=a==null?void 0:a.popperOptions)!=null&&fe.modifiers&&(o=o.concat(a.popperOptions.modifiers)),{...m.popperOptions,...a==null?void 0:a.popperOptions,modifiers:o}},[B,m.popperOptions,a==null?void 0:a.popperOptions]),H=ho(T),Ue=typeof f.transition=="function"?f.transition(T):f.transition,I={slots:{popper:g.Popper,transition:g.Transition??ke,tooltip:g.Tooltip,arrow:g.Arrow,...Ee},slotProps:{arrow:f.arrow??M.arrow,popper:{...m,...a??M.popper},tooltip:f.tooltip??M.tooltip,transition:{...Ie,...Ue??M.transition}}},[De,ze]=j("popper",{elementType:go,externalForwardedProps:I,ownerState:T,className:ge(H.popper,m==null?void 0:m.className)}),[Ve,He]=j("transition",{elementType:no,externalForwardedProps:I,ownerState:T}),[Ke,Xe]=j("tooltip",{elementType:To,className:H.tooltip,externalForwardedProps:I,ownerState:T}),[Ge,Qe]=j("arrow",{elementType:yo,className:H.arrow,externalForwardedProps:I,ownerState:T,ref:je});return l.jsxs(n.Fragment,{children:[n.cloneElement(h,s),l.jsx(De,{as:te??be,placement:oe,anchorEl:A?{getBoundingClientRect:()=>({top:$.y,left:$.x,right:$.x,bottom:$.y,width:0,height:0})}:w,popperRef:z,open:w?d:!1,id:U,transition:!0,...v,...ze,popperOptions:We,children:({TransitionProps:o})=>l.jsx(Ve,{timeout:pe.transitions.duration.shorter,...o,...He,children:l.jsxs(Ke,{...Xe,children:[b,y?l.jsx(Ge,{...Qe}):null]})})})]})}),Ro=({className:t,type:e,title:p,children:c,...y})=>{const u=n.useRef(null),C=()=>{u.current&&u.current.click()},g=l.jsxs(l.Fragment,{children:[e==="file"?l.jsx(io,{onClick:C,className:`${K.input_btn} ${t}`,children:c}):null,l.jsx("input",{ref:u,type:e,className:`${K.input} ${e==="file"?"":t} ${e?K[e]:""}`,...y})]});return p?l.jsx(bo,{title:p,children:g}):g};export{Ro as I,bo as T};
