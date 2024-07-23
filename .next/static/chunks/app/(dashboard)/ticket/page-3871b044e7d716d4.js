(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{4765:function(e,t,r){Promise.resolve().then(r.bind(r,2706))},2706:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return y}});var a=r(7437),n=r(6780),s=r(4693),o=r(495),l=r(3102),i=r(7135),d=r(6294),c=r(6975),u=r(2265),f=r(7440);let m=u.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("textarea",{className:(0,f.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...n})});m.displayName="Textarea";var p=r(7651),h=r(7822),x=r(8472),g=r(8087),v=r(7776);let b=[{key:"id",label:"ticketId"},{key:"subject",label:"ticketSubject"},{key:"level",label:"ticketLevel"},{key:"reply_status",label:"ticketStatus"},{key:"created_at",label:"ticketCreate"},{key:"updated_at",label:"ticketUpdate"},{key:"action",label:"ticketAction"}];function y(){let e=(0,g.useTranslations)("Dashboard"),[t,r]=(0,u.useState)(),[f,y]=(0,u.useState)(""),[j,w]=(0,u.useState)(""),[N,k]=(0,u.useState)(""),{isLoggedIn:A,isAuthChecked:S,request:R}=(0,p.a)();(0,u.useEffect)(()=>{S&&A&&(null==R||R.get("user/ticket/fetch").then(e=>r(null==e?void 0:e.data.data)))},[S,A]);let C=t=>{let r=1==t.status?"destructive":"default",n=1==t.status?e("ticketStaus2"):1==t.reply_status?e("ticketStaus0"):e("ticketStaus1");return(0,a.jsx)(s.C,{variant:r,children:n})};return(0,a.jsx)("div",{className:"flex flex-col gap-4 lg:gap-6 lg:w-4/5 w-full",children:(0,a.jsxs)(c.iA,{className:"border rounded rounded-md p-10",children:[(0,a.jsxs)(c.xD,{children:[(0,a.jsx)("div",{className:"p-4 flex flex-col justify-end",children:(0,a.jsxs)(n.aR,{children:[(0,a.jsx)(n.vW,{asChild:!0,children:(0,a.jsx)(o.z,{children:e("ticketOpen")})}),(0,a.jsxs)(n._T,{children:[(0,a.jsx)(n.fY,{children:(0,a.jsx)(n.f$,{children:e("ticketOpen")})}),(0,a.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,a.jsx)(i._,{htmlFor:"ticketSubject",children:e("ticketSubject")}),(0,a.jsx)(l.I,{id:"ticketSubject",placeholder:e("ticketSubjectDesc"),value:f,onChange:e=>y(e.target.value)})]}),(0,a.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,a.jsx)(i._,{htmlFor:"ticketLevel",children:e("ticketLevel")}),(0,a.jsxs)(d.Ph,{value:j,onValueChange:w,children:[(0,a.jsx)(d.i4,{className:"w-full",children:(0,a.jsx)(d.ki,{placeholder:e("ticketLevelDesc")})}),(0,a.jsx)(d.Bw,{children:(0,a.jsxs)(d.DI,{children:[(0,a.jsx)(d.Ql,{value:"0",children:e("ticketLevel0")},0),(0,a.jsx)(d.Ql,{value:"1",children:e("ticketLevel1")},1),(0,a.jsx)(d.Ql,{value:"2",children:e("ticketLevel2")},2)]})})]})]}),(0,a.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,a.jsx)(i._,{htmlFor:"ticketMsg",children:e("ticketMsg")}),(0,a.jsx)(m,{placeholder:e("ticketMsgDesc"),id:"ticketMsg",value:N,onChange:e=>k(e.target.value)})]}),(0,a.jsxs)(n.xo,{children:[(0,a.jsx)(n.le,{children:e("ticketCancel")}),(0,a.jsx)(n.OL,{onClick:async()=>{try{await (null==R?void 0:R.post("user/ticket/save",{subject:f,level:j,message:N})),y(""),w(""),k(""),null==R||R.get("user/ticket/fetch").then(e=>r(null==e?void 0:e.data.data))}catch(t){if(x.Z.isAxiosError(t)){var e;let r=null===(e=t.response)||void 0===e?void 0:e.data;v.Am.error((null==r?void 0:r.errors)?Object.values(null==r?void 0:r.errors)[0]:null==r?void 0:r.message)}else v.Am.error(t.message)}},children:e("ticketConfirm")})]})]})]})}),(0,a.jsx)(c.SC,{children:b.map(t=>(0,a.jsx)(c.ss,{className:"text-center",children:e(t.label)},t.key))})]}),(0,a.jsx)(c.RM,{children:t?t.map(t=>(0,a.jsxs)(c.SC,{className:"text-center",children:[(0,a.jsx)(c.pj,{children:t.id}),(0,a.jsx)(c.pj,{className:"font-medium",children:(0,a.jsx)(o.z,{variant:"link",size:"sm",onClick:()=>{let e="ticket/".concat(t.id);window.open(e,"_blank","width=800,height=600,toolbar=no,menubar=no,scrollbars=no,resizable=yes,location=no,status=no")},children:t.subject})}),(0,a.jsx)(c.pj,{children:e("ticketLevel"+t.level)}),(0,a.jsx)(c.pj,{children:C(t)}),(0,a.jsx)(c.pj,{children:(0,h.Iq)(t.created_at,!0)}),(0,a.jsx)(c.pj,{children:(0,h.Iq)(t.updated_at,!0)}),(0,a.jsx)(c.pj,{children:(0,a.jsx)(o.z,{disabled:0!==t.status,variant:"link",className:"text-destructive",size:"sm",onClick:async()=>{try{r(null),await (null==R?void 0:R.post("user/ticket/close",{id:t.id}));let e=await (null==R?void 0:R.get("user/ticket/fetch"));r(null==e?void 0:e.data.data)}catch(e){console.log(e)}},children:e("ticketClose")})})]},t.trade_no)):null})]})})}},6780:function(e,t,r){"use strict";r.d(t,{OL:function(){return g},_T:function(){return f},aR:function(){return i},f$:function(){return h},fY:function(){return m},le:function(){return v},vW:function(){return d},xo:function(){return p},yT:function(){return x}});var a=r(7437),n=r(2265),s=r(6669),o=r(7440),l=r(495);let i=s.fC,d=s.xz,c=s.h_,u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.aV,{className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...n,ref:t})});u.displayName=s.aV.displayName;let f=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsxs)(c,{children:[(0,a.jsx)(u,{}),(0,a.jsx)(s.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...n})]})});f.displayName=s.VY.displayName;let m=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...r})};m.displayName="AlertDialogHeader";let p=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};p.displayName="AlertDialogFooter";let h=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold",r),...n})});h.displayName=s.Dx.displayName;let x=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...n})});x.displayName=s.dk.displayName;let g=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.aU,{ref:t,className:(0,o.cn)((0,l.d)(),r),...n})});g.displayName=s.aU.displayName;let v=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.$j,{ref:t,className:(0,o.cn)((0,l.d)({variant:"outline"}),"mt-2 sm:mt-0",r),...n})});v.displayName=s.$j.displayName},4693:function(e,t,r){"use strict";r.d(t,{C:function(){return l}});var a=r(7437);r(2265);var n=r(2218),s=r(7440);let o=(0,n.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function l(e){let{className:t,variant:r,...n}=e;return(0,a.jsx)("div",{className:(0,s.cn)(o({variant:r}),t),...n})}},495:function(e,t,r){"use strict";r.d(t,{d:function(){return i},z:function(){return d}});var a=r(7437),n=r(2265),s=r(1538),o=r(2218),l=r(7440);let i=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:o,asChild:d=!1,...c}=e,u=d?s.g7:"button";return(0,a.jsx)(u,{className:(0,l.cn)(i({variant:n,size:o,className:r})),ref:t,...c})});d.displayName="Button"},3102:function(e,t,r){"use strict";r.d(t,{I:function(){return o}});var a=r(7437),n=r(2265),s=r(7440);let o=n.forwardRef((e,t)=>{let{className:r,type:n,...o}=e;return(0,a.jsx)("input",{type:n,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...o})});o.displayName="Input"},7135:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var a=r(7437),n=r(2265),s=r(8364),o=r(2218),l=r(7440);let i=(0,o.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.f,{ref:t,className:(0,l.cn)(i(),r),...n})});d.displayName=s.f.displayName},6294:function(e,t,r){"use strict";r.d(t,{Bw:function(){return x},DI:function(){return u},Ph:function(){return c},Ql:function(){return g},i4:function(){return m},ki:function(){return f}});var a=r(7437),n=r(2265),s=r(3267),o=r(2421),l=r(4392),i=r(2468),d=r(7440);let c=s.fC,u=s.ZA,f=s.B4,m=n.forwardRef((e,t)=>{let{className:r,children:n,...l}=e;return(0,a.jsxs)(s.xz,{ref:t,className:(0,d.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",r),...l,children:[n,(0,a.jsx)(s.JO,{asChild:!0,children:(0,a.jsx)(o.Z,{className:"h-4 w-4 opacity-50"})})]})});m.displayName=s.xz.displayName;let p=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.u_,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...n,children:(0,a.jsx)(l.Z,{className:"h-4 w-4"})})});p.displayName=s.u_.displayName;let h=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.$G,{ref:t,className:(0,d.cn)("flex cursor-default items-center justify-center py-1",r),...n,children:(0,a.jsx)(o.Z,{className:"h-4 w-4"})})});h.displayName=s.$G.displayName;let x=n.forwardRef((e,t)=>{let{className:r,children:n,position:o="popper",...l}=e;return(0,a.jsx)(s.h_,{children:(0,a.jsxs)(s.VY,{ref:t,className:(0,d.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===o&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r),position:o,...l,children:[(0,a.jsx)(p,{}),(0,a.jsx)(s.l_,{className:(0,d.cn)("p-1","popper"===o&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),(0,a.jsx)(h,{})]})})});x.displayName=s.VY.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.__,{ref:t,className:(0,d.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",r),...n})}).displayName=s.__.displayName;let g=n.forwardRef((e,t)=>{let{className:r,children:n,...o}=e;return(0,a.jsxs)(s.ck,{ref:t,className:(0,d.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...o,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(s.wU,{children:(0,a.jsx)(i.Z,{className:"h-4 w-4"})})}),(0,a.jsx)(s.eT,{children:n})]})});g.displayName=s.ck.displayName,n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-muted",r),...n})}).displayName=s.Z0.displayName},6975:function(e,t,r){"use strict";r.d(t,{RM:function(){return i},SC:function(){return d},iA:function(){return o},pj:function(){return u},ss:function(){return c},xD:function(){return l}});var a=r(7437),n=r(2265),s=r(7440);let o=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",r),...n})})});o.displayName="Table";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",r),...n})});l.displayName="TableHeader";let i=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",r),...n})});i.displayName="TableBody",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",r),...n})}).displayName="TableFooter";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",r),...n})});d.displayName="TableRow";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("th",{ref:t,className:(0,s.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",r),...n})});c.displayName="TableHead";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("td",{ref:t,className:(0,s.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",r),...n})});u.displayName="TableCell",n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",r),...n})}).displayName="TableCaption"},7651:function(e,t,r){"use strict";r.d(t,{H:function(){return i},a:function(){return d}});var a=r(7437),n=r(2265),s=r(6463),o=r(8472);let l=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(!1),[d,c]=(0,n.useState)(!1),u=(0,s.useRouter)(),[f,m]=(0,n.useState)();(0,n.useEffect)(()=>{fetch("/config.json").then(e=>e.json()).then(e=>m(e)).catch(e=>console.error("Error fetching config:",e))},[]);let[p,h]=(0,n.useState)(),x=(0,n.useMemo)(()=>f?(console.log(f),o.Z.create({baseURL:"".concat(null==f?void 0:f.apiUrl,"api/v1/"),headers:{"Content-Type":"application/json"}})):null,[f]);(0,n.useEffect)(()=>{var e;document.title=null!==(e=null==f?void 0:f.title)&&void 0!==e?e:""},[f]),(0,n.useEffect)(()=>{if(!x)return;let e=async()=>{try{let e=await x.get("user/checkLogin");200===e.status&&e.data.data.is_login?i(!0):i(!1)}catch(e){i(!1)}finally{c(!0)}},t=async()=>{try{if(!f)return;let e=await x.get("guest/comm/config");200===e.status&&h(e.data.data)}catch(e){console.log(e)}},r=localStorage.getItem("authToken");r?(x.defaults.headers.common.Authorization=r,e()):c(!0),t()},[x]);let g=async(e,t)=>{try{if(!x)throw Error("Loading");let r=await x.post("passport/auth/login",{email:e,password:t}),a=r.data.data.auth_data;return localStorage.setItem("authToken",a),x.defaults.headers.common.Authorization=a,i(!0),u.push("/dashboard"),{success:!0,data:r.data.data}}catch(e){if(o.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},v=async(e,t,r,a,n)=>{if(!x)throw Error("Loading");try{let s=await x.post("passport/auth/register",{email:e,password:t,email_code:r,invite_code:a,recaptcha_data:n});return{success:!0,data:s.data.data}}catch(e){if(o.Z.isAxiosError(e)){var s;let t=null===(s=e.response)||void 0===s?void 0:s.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},b=async(e,t,r)=>{try{if(!x)throw Error("Loading");let a=await x.post("passport/auth/forget",{email:e,password:t,email_code:r});return{success:!0,data:a.data.data}}catch(e){if(o.Z.isAxiosError(e)){var a;let t=null===(a=e.response)||void 0===a?void 0:a.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},y=async(e,t)=>{try{if(!x)throw Error("Loading");let r=await x.post("user/changePassword",{old_password:e,new_password:t});return{success:!0,data:r.data.data}}catch(e){if(o.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},j=async(e,t)=>{try{if(!x)throw Error("Loading");let r=await x.post("passport/comm/sendEmailVerify",{email:e,recaptcha_data:t});return{success:!0,data:r.data.data}}catch(e){if(o.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}};return(0,a.jsx)(l.Provider,{value:{isLoggedIn:r,isAuthChecked:d,login:g,logout:()=>{if(!x)throw Error("Loading");localStorage.removeItem("authToken"),delete x.defaults.headers.common.Authorization,i(!1),u.push("/login")},register:v,reset:b,changePass:y,sendEmailVerify:j,config:f,webConfig:p,request:x},children:t})},d=()=>{let e=(0,n.useContext)(l);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},7822:function(e,t,r){"use strict";r.d(t,{Iq:function(){return s},OF:function(){return c},SF:function(){return n},Ze:function(){return d}});var a=r(5070);let n=(e,t,r)=>{let n=encodeURIComponent(t);switch(e){case"clash":return"clash://install-config?url=".concat(n,"&name=").concat(r);case"surge":return"surge:///install-config?url=".concat(n,"&name=").concat(r);case"loon":return"loon://import?sub=".concat(n,"&name=").concat(r);case"quanx":return"quantumult-x:///add-resource?remote-resource=".concat(encodeURI(JSON.stringify({server_remote:["".concat(n,", tag=").concat(r)]})));case"shadowrocket":return"shadowrocket://add/sub://".concat((0,a.cv)(n+"&flag=shadowrocket"),"?remark=").concat(r)}return""},s=(e,t)=>{let r=new Date(1e3*e),a=r.getFullYear(),n=String(r.getMonth()+1).padStart(2,"0"),s=String(r.getDate()).padStart(2,"0"),o="".concat(a,"/").concat(n,"/").concat(s);if(t){let e=String(r.getHours()).padStart(2,"0"),t=String(r.getMinutes()).padStart(2,"0"),a=String(r.getSeconds()).padStart(2,"0");o+=" ".concat(e,":").concat(t,":").concat(a)}return o},o=e=>{let t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}},l=(e,t,r)=>"#".concat((16777216+(e<<16)+(t<<8)+r).toString(16).slice(1)),i=(e,t)=>{let{r,g:a,b:n}=o(e);return l(Math.max(Math.min(r+t,255),0),Math.max(Math.min(a+t,255),0),Math.max(Math.min(n+t,255),0))},d=e=>i(e,-50),c=e=>{let t=0,r=0,a=0;4==e.length?(t="0x"+e[1]+e[1],r="0x"+e[2]+e[2],a="0x"+e[3]+e[3]):7==e.length&&(t="0x"+e[1]+e[2],r="0x"+e[3]+e[4],a="0x"+e[5]+e[6]);let n=Math.min(t/=255,r/=255,a/=255),s=Math.max(t,r,a),o=s-n,l=0,i=0,d=0;return(l=Math.round(60*(l=0==o?0:s==t?(r-a)/o%6:s==r?(a-t)/o+2:(t-r)/o+4)))<0&&(l+=360),d=(s+n)/2,l+" "+ +(100*(0==o?0:o/(1-Math.abs(2*d-1)))).toFixed(1)+"% "+(d=+(100*d).toFixed(1))+"%"}},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var a=r(4839),n=r(6164);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}},6669:function(e,t,r){"use strict";r.d(t,{$j:function(){return O},Dx:function(){return I},VY:function(){return F},aU:function(){return M},aV:function(){return T},dk:function(){return L},fC:function(){return D},h_:function(){return z},xz:function(){return E}});var a=r(2265),n=r(8324),s=r(1584),o=r(3304),l=r(8149),i=r(1538),d=r(7437),c="AlertDialog",[u,f]=(0,n.b)(c,[o.p8]),m=(0,o.p8)(),p=e=>{let{__scopeAlertDialog:t,...r}=e,a=m(t);return(0,d.jsx)(o.fC,{...a,...r,modal:!0})};p.displayName=c;var h=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,n=m(r);return(0,d.jsx)(o.xz,{...n,...a,ref:t})});h.displayName="AlertDialogTrigger";var x=e=>{let{__scopeAlertDialog:t,...r}=e,a=m(t);return(0,d.jsx)(o.h_,{...a,...r})};x.displayName="AlertDialogPortal";var g=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,n=m(r);return(0,d.jsx)(o.aV,{...n,...a,ref:t})});g.displayName="AlertDialogOverlay";var v="AlertDialogContent",[b,y]=u(v),j=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,children:n,...c}=e,u=m(r),f=a.useRef(null),p=(0,s.e)(t,f),h=a.useRef(null);return(0,d.jsx)(o.jm,{contentName:v,titleName:w,docsSlug:"alert-dialog",children:(0,d.jsx)(b,{scope:r,cancelRef:h,children:(0,d.jsxs)(o.VY,{role:"alertdialog",...u,...c,ref:p,onOpenAutoFocus:(0,l.M)(c.onOpenAutoFocus,e=>{var t;e.preventDefault(),null===(t=h.current)||void 0===t||t.focus({preventScroll:!0})}),onPointerDownOutside:e=>e.preventDefault(),onInteractOutside:e=>e.preventDefault(),children:[(0,d.jsx)(i.A4,{children:n}),(0,d.jsx)(_,{contentRef:f})]})})})});j.displayName=v;var w="AlertDialogTitle",N=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,n=m(r);return(0,d.jsx)(o.Dx,{...n,...a,ref:t})});N.displayName=w;var k="AlertDialogDescription",A=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,n=m(r);return(0,d.jsx)(o.dk,{...n,...a,ref:t})});A.displayName=k;var S=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,n=m(r);return(0,d.jsx)(o.x8,{...n,...a,ref:t})});S.displayName="AlertDialogAction";var R="AlertDialogCancel",C=a.forwardRef((e,t)=>{let{__scopeAlertDialog:r,...a}=e,{cancelRef:n}=y(R,r),l=m(r),i=(0,s.e)(t,n);return(0,d.jsx)(o.x8,{...l,...a,ref:i})});C.displayName=R;var _=e=>{let{contentRef:t}=e,r="`".concat(v,"` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the `").concat(v,"` by passing a `").concat(k,"` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an `id` and passing the same value to the `aria-describedby` prop in `").concat(v,"`. If the description is confusing or duplicative for sighted users, you can use the `@radix-ui/react-visually-hidden` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog");return a.useEffect(()=>{var e;document.getElementById(null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby"))||console.warn(r)},[r,t]),null},D=p,E=h,z=x,T=g,F=j,M=S,O=C,I=N,L=A},5070:function(e,t,r){"use strict";let a;r.d(t,{cv:function(){return v}});var n=r(6300).Buffer;let s="function"==typeof n;"function"==typeof TextDecoder&&new TextDecoder;let o="function"==typeof TextEncoder?new TextEncoder:void 0,l=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),i=(a={},l.forEach((e,t)=>a[e]=t),a),d=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,c=String.fromCharCode.bind(String);"function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array);let u=e=>e.replace(/=/g,"").replace(/[+\/]/g,e=>"+"==e?"-":"_"),f="function"==typeof btoa?e=>btoa(e):s?e=>n.from(e,"binary").toString("base64"):e=>{let t,r,a,n,s="",o=e.length%3;for(let o=0;o<e.length;){if((r=e.charCodeAt(o++))>255||(a=e.charCodeAt(o++))>255||(n=e.charCodeAt(o++))>255)throw TypeError("invalid character found");s+=l[(t=r<<16|a<<8|n)>>18&63]+l[t>>12&63]+l[t>>6&63]+l[63&t]}return o?s.slice(0,o-3)+"===".substring(o):s},m=s?e=>n.from(e).toString("base64"):e=>{let t=[];for(let r=0,a=e.length;r<a;r+=4096)t.push(c.apply(null,e.subarray(r,r+4096)));return f(t.join(""))},p=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?c(192|t>>>6)+c(128|63&t):c(224|t>>>12&15)+c(128|t>>>6&63)+c(128|63&t)}var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return c(240|t>>>18&7)+c(128|t>>>12&63)+c(128|t>>>6&63)+c(128|63&t)},h=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,x=e=>e.replace(h,p),g=s?e=>n.from(e,"utf8").toString("base64"):o?e=>m(o.encode(e)):e=>f(x(e)),v=(e,t=!1)=>t?u(g(e)):g(e);"function"==typeof atob||s||(e=>{if(e=e.replace(/\s+/g,""),!d.test(e))throw TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r="",a,n;for(let s=0;s<e.length;)t=i[e.charAt(s++)]<<18|i[e.charAt(s++)]<<12|(a=i[e.charAt(s++)])<<6|(n=i[e.charAt(s++)]),r+=64===a?c(t>>16&255):64===n?c(t>>16&255,t>>8&255):c(t>>16&255,t>>8&255,255&t);return r})}},function(e){e.O(0,[313,613,776,814,408,258,971,23,744],function(){return e(e.s=4765)}),_N_E=e.O()}]);