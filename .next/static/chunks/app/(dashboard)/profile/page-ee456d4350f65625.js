(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{2666:function(e,t,r){Promise.resolve().then(r.bind(r,6066))},6066:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var a=r(7437),s=r(6780),l=r(495),n=r(6013),o=r(3102),i=r(7135),d=r(2265),c=r(9646),u=r(7440);let f=d.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(c.fC,{className:(0,u.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",r),...s,ref:t,children:(0,a.jsx)(c.bU,{className:(0,u.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});f.displayName=c.fC.displayName;var m=r(7651),p=r(7822),x=r(8087),h=r(7138),g=r(7776);function v(){var e,t,r;let c=(0,x.useTranslations)("Dashboard"),{changePass:u,logout:v,isLoggedIn:j,isAuthChecked:w,request:b}=(0,m.a)();(0,d.useEffect)(()=>{w&&j&&(null==b||b.get("user/getSubscribe").then(e=>S(null==e?void 0:e.data.data)),null==b||b.get("user/info").then(e=>N(null==e?void 0:e.data.data)),null==b||b.get("user/comm/config").then(e=>_(null==e?void 0:e.data.data)))},[w,j]);let[y,N]=(0,d.useState)(),[k,S]=(0,d.useState)(),[C,_]=(0,d.useState)(),[E,T]=(0,d.useState)({password1:"",password2:"",password3:""}),[R,P]=(0,d.useState)("");return y&&k&&C?(0,a.jsxs)("div",{className:"flex flex-col gap-4 lg:gap-6 lg:w-4/5 w-full",children:[(0,a.jsxs)(n.Zb,{children:[(0,a.jsxs)(n.Ol,{children:[(0,a.jsx)(n.ll,{children:"".concat(c("profileWelcome")).concat(null==y?void 0:y.email)}),(0,a.jsx)(n.SZ,{children:"".concat(c("profileCreateAt")).concat((0,p.Iq)(null!==(e=null==y?void 0:y.created_at)&&void 0!==e?e:0))})]}),(0,a.jsxs)(n.aY,{className:"flex flex-row justify-start w-full items-end",children:[(0,a.jsx)("p",{className:"text-6xl",children:((null!==(t=null==y?void 0:y.balance)&&void 0!==t?t:0)/100).toFixed(2)}),(0,a.jsx)("p",{className:"text-2xl font-semibold",children:null!==(r=null==C?void 0:C.currency)&&void 0!==r?r:"   "})]}),(0,a.jsx)(n.eW,{children:(0,a.jsx)("p",{children:c("profileBalanceDesc")})})]}),(null==C?void 0:C.telegram_discuss_link)?(0,a.jsx)(n.Zb,{children:(0,a.jsxs)(n.aY,{className:"flex flex-row justify-between items-center p-4",children:[c("cardTelegramGroup"),(0,a.jsx)(l.z,{onClick:()=>{window.open(null==C?void 0:C.telegram_discuss_link,"_blank")},children:c("profileTelegramJoin")})]})}):null,(null==C?void 0:C.is_telegram)===1?(0,a.jsx)(n.Zb,{children:(0,a.jsxs)(n.aY,{className:"flex flex-row justify-between items-center p-4",children:[c("cardTelegram"),(0,a.jsxs)(s.aR,{children:[(0,a.jsx)(s.vW,{asChild:!0,children:(0,a.jsx)(l.z,{disabled:null==y?void 0:y.telegram_id,onClick:async()=>{try{let e=await (null==b?void 0:b.get("user/telegram/getBotInfo"));P(null==e?void 0:e.data.data.username)}catch(e){g.Am.error(c("profileTelegramErr"))}},children:(null==y?void 0:y.telegram_id)?c("profileTelegramAlready"):c("profileTelegramStart")})}),(0,a.jsxs)(s._T,{children:[(0,a.jsxs)(s.fY,{children:[(0,a.jsx)(s.f$,{children:c("cardTelegram")}),(0,a.jsx)(s.yT,{})]}),(0,a.jsxs)("p",{children:[c("profileTelegram1"),c("profileTelegram1Desc"),(0,a.jsx)(h.default,{href:"https://t.me/".concat(R),target:"_blank",children:"@".concat(R)})]}),(0,a.jsxs)("p",{children:[c("profileTelegram2"),c("profileTelegram2Desc")]}),(0,a.jsxs)("p",{className:"text-pink-500 text-sm",children:["/bind ",null==k?void 0:k.subscribe_url]}),(0,a.jsx)(s.xo,{children:(0,a.jsx)(s.OL,{children:c("profileTelegramOK")})})]})]})]})}):null,(0,a.jsx)(n.Zb,{children:(0,a.jsxs)(n.aY,{className:"flex flex-row justify-between items-center p-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)("p",{className:"text-md",children:c("profileEmailExpire")}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:c("profileEmailExpireDesc")})]}),(0,a.jsx)(f,{checked:(null==y?void 0:y.remind_expire)==1,onCheckedChange:async e=>{await (null==b?void 0:b.post("user/update",{remind_expire:e?1:0}));let t=await (null==b?void 0:b.get("user/info"));N(null==t?void 0:t.data.data)}})]})}),(0,a.jsx)(n.Zb,{children:(0,a.jsxs)(n.aY,{className:"flex flex-row justify-between items-center p-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)("p",{className:"text-md",children:c("profileEmailTraffic")}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:c("profileEmailTrafficDesc")})]}),(0,a.jsx)(f,{checked:(null==y?void 0:y.remind_traffic)==1,onCheckedChange:async e=>{await (null==b?void 0:b.post("user/update",{remind_traffic:e?1:0}));let t=await (null==b?void 0:b.get("user/info"));N(null==t?void 0:t.data.data)}})]})}),(0,a.jsx)(n.Zb,{children:(0,a.jsxs)(n.aY,{className:"flex flex-row justify-between items-center p-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)("p",{className:"text-md",children:c("cardChangePass")}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:c("profilePassDesc")})]}),(0,a.jsxs)(s.aR,{children:[(0,a.jsx)(s.vW,{asChild:!0,children:(0,a.jsx)(l.z,{variant:"outline",children:c("profilePassButton")})}),(0,a.jsxs)(s._T,{children:[(0,a.jsxs)(s.fY,{children:[(0,a.jsx)(s.f$,{children:c("profilePassTitle")}),(0,a.jsx)(s.yT,{})]}),(0,a.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,a.jsx)(i._,{htmlFor:"profilePass1",children:c("profilePass1")}),(0,a.jsx)(o.I,{type:"password",id:"profilePass1",placeholder:c("profilePass1Desc"),value:E.password1,onChange:e=>T({...E,password1:e.target.value})})]}),(0,a.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,a.jsx)(i._,{htmlFor:"profilePass2",children:c("profilePass2")}),(0,a.jsx)(o.I,{type:"password",id:"profilePass2",placeholder:c("profilePass2Desc"),value:E.password2,onChange:e=>T({...E,password2:e.target.value})})]}),(0,a.jsxs)("div",{className:"grid w-full items-center gap-1.5",children:[(0,a.jsx)(i._,{htmlFor:"profilePass3",children:c("profilePass3")}),(0,a.jsx)(o.I,{type:"password",id:"profilePass3",placeholder:c("profilePass3Desc"),value:E.password3,onChange:e=>T({...E,password3:e.target.value})})]}),(0,a.jsxs)(s.xo,{children:[(0,a.jsx)(s.le,{children:c("profilePassCancel")}),(0,a.jsx)(s.OL,{onClick:async()=>{try{if(E.password2!==E.password3)throw Error(c("passwordNotSame"));let e=await u(E.password1,E.password2);if(!(null==e?void 0:e.success))throw Error(e.data);N(null),v()}catch(e){g.Am.error(e)}},children:c("profilePassConfirm")})]})]})]})]})}),(0,a.jsx)(n.Zb,{children:(0,a.jsxs)(n.aY,{className:"flex flex-row justify-between items-center p-4",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)("p",{className:"text-md",children:c("cardResetSub")}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:c("profileSubDesc")})]}),(0,a.jsxs)(s.aR,{children:[(0,a.jsx)(s.vW,{asChild:!0,children:(0,a.jsx)(l.z,{variant:"destructive",children:c("profileSubButton")})}),(0,a.jsxs)(s._T,{children:[(0,a.jsxs)(s.fY,{children:[(0,a.jsx)(s.f$,{children:c("profileModalTitle")}),(0,a.jsx)(s.yT,{children:c("profileModalBody")})]}),(0,a.jsxs)(s.xo,{children:[(0,a.jsx)(s.le,{children:c("profileModalCancel")}),(0,a.jsx)(s.OL,{onClick:async()=>{try{await (null==b?void 0:b.get("/api?scheme=user/resetSecurity"));let e=await (null==b?void 0:b.get("user/getSubscribe"));S(null==e?void 0:e.data.data),g.Am.success(c("profileSubReset"))}catch(e){g.Am.error(e)}},children:c("profileModalConfirm")})]})]})]})]})})]}):null}},6780:function(e,t,r){"use strict";r.d(t,{OL:function(){return g},_T:function(){return f},aR:function(){return i},f$:function(){return x},fY:function(){return m},le:function(){return v},vW:function(){return d},xo:function(){return p},yT:function(){return h}});var a=r(7437),s=r(2265),l=r(6669),n=r(7440),o=r(495);let i=l.fC,d=l.xz,c=l.h_,u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(l.aV,{className:(0,n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...s,ref:t})});u.displayName=l.aV.displayName;let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsxs)(c,{children:[(0,a.jsx)(u,{}),(0,a.jsx)(l.VY,{ref:t,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...s})]})});f.displayName=l.VY.displayName;let m=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,n.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...r})};m.displayName="AlertDialogHeader";let p=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:(0,n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};p.displayName="AlertDialogFooter";let x=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(l.Dx,{ref:t,className:(0,n.cn)("text-lg font-semibold",r),...s})});x.displayName=l.Dx.displayName;let h=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(l.dk,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",r),...s})});h.displayName=l.dk.displayName;let g=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(l.aU,{ref:t,className:(0,n.cn)((0,o.d)(),r),...s})});g.displayName=l.aU.displayName;let v=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(l.$j,{ref:t,className:(0,n.cn)((0,o.d)({variant:"outline"}),"mt-2 sm:mt-0",r),...s})});v.displayName=l.$j.displayName},495:function(e,t,r){"use strict";r.d(t,{d:function(){return i},z:function(){return d}});var a=r(7437),s=r(2265),l=r(1538),n=r(2218),o=r(7440);let i=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:n,asChild:d=!1,...c}=e,u=d?l.g7:"button";return(0,a.jsx)(u,{className:(0,o.cn)(i({variant:s,size:n,className:r})),ref:t,...c})});d.displayName="Button"},6013:function(e,t,r){"use strict";r.d(t,{Ol:function(){return o},SZ:function(){return d},Zb:function(){return n},aY:function(){return c},eW:function(){return u},ll:function(){return i}});var a=r(7437),s=r(2265),l=r(7440);let n=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});n.displayName="Card";let o=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",r),...s})});o.displayName="CardHeader";let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("h3",{ref:t,className:(0,l.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})});i.displayName="CardTitle";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("p",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",r),...s})});d.displayName="CardDescription";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",r),...s})});c.displayName="CardContent";let u=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",r),...s})});u.displayName="CardFooter"},3102:function(e,t,r){"use strict";r.d(t,{I:function(){return n}});var a=r(7437),s=r(2265),l=r(7440);let n=s.forwardRef((e,t)=>{let{className:r,type:s,...n}=e;return(0,a.jsx)("input",{type:s,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...n})});n.displayName="Input"},7135:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var a=r(7437),s=r(2265),l=r(8364),n=r(2218),o=r(7440);let i=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(l.f,{ref:t,className:(0,o.cn)(i(),r),...s})});d.displayName=l.f.displayName},7651:function(e,t,r){"use strict";r.d(t,{H:function(){return i},a:function(){return d}});var a=r(7437),s=r(2265),l=r(6463),n=r(8472);let o=(0,s.createContext)(void 0),i=e=>{let{children:t}=e,[r,i]=(0,s.useState)(!1),[d,c]=(0,s.useState)(!1),u=(0,l.useRouter)(),[f,m]=(0,s.useState)();(0,s.useEffect)(()=>{fetch("/config.json").then(e=>e.json()).then(e=>m(e)).catch(e=>console.error("Error fetching config:",e))},[]);let[p,x]=(0,s.useState)(),h=(0,s.useMemo)(()=>f?(console.log(f),n.Z.create({baseURL:"".concat(null==f?void 0:f.apiUrl,"api/v1/"),headers:{"Content-Type":"application/json"}})):null,[f]);(0,s.useEffect)(()=>{var e;document.title=null!==(e=null==f?void 0:f.title)&&void 0!==e?e:""},[f]),(0,s.useEffect)(()=>{if(!h)return;let e=async()=>{try{let e=await h.get("user/checkLogin");200===e.status&&e.data.data.is_login?i(!0):i(!1)}catch(e){i(!1)}finally{c(!0)}},t=async()=>{try{if(!f)return;let e=await h.get("guest/comm/config");200===e.status&&x(e.data.data)}catch(e){console.log(e)}},r=localStorage.getItem("authToken");r?(h.defaults.headers.common.Authorization=r,e()):c(!0),t()},[h]);let g=async(e,t)=>{try{if(!h)throw Error("Loading");let r=await h.post("passport/auth/login",{email:e,password:t}),a=r.data.data.auth_data;return localStorage.setItem("authToken",a),h.defaults.headers.common.Authorization=a,i(!0),u.push("/dashboard"),{success:!0,data:r.data.data}}catch(e){if(n.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},v=async(e,t,r,a,s)=>{if(!h)throw Error("Loading");try{let l=await h.post("passport/auth/register",{email:e,password:t,email_code:r,invite_code:a,recaptcha_data:s});return{success:!0,data:l.data.data}}catch(e){if(n.Z.isAxiosError(e)){var l;let t=null===(l=e.response)||void 0===l?void 0:l.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},j=async(e,t,r)=>{try{if(!h)throw Error("Loading");let a=await h.post("passport/auth/forget",{email:e,password:t,email_code:r});return{success:!0,data:a.data.data}}catch(e){if(n.Z.isAxiosError(e)){var a;let t=null===(a=e.response)||void 0===a?void 0:a.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},w=async(e,t)=>{try{if(!h)throw Error("Loading");let r=await h.post("user/changePassword",{old_password:e,new_password:t});return{success:!0,data:r.data.data}}catch(e){if(n.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}},b=async(e,t)=>{try{if(!h)throw Error("Loading");let r=await h.post("passport/comm/sendEmailVerify",{email:e,recaptcha_data:t});return{success:!0,data:r.data.data}}catch(e){if(n.Z.isAxiosError(e)){var r;let t=null===(r=e.response)||void 0===r?void 0:r.data;throw(null==t?void 0:t.errors)?Object.values(null==t?void 0:t.errors)[0]:null==t?void 0:t.message}throw e}};return(0,a.jsx)(o.Provider,{value:{isLoggedIn:r,isAuthChecked:d,login:g,logout:()=>{if(!h)throw Error("Loading");localStorage.removeItem("authToken"),delete h.defaults.headers.common.Authorization,i(!1),u.push("/login")},register:v,reset:j,changePass:w,sendEmailVerify:b,config:f,webConfig:p,request:h},children:t})},d=()=>{let e=(0,s.useContext)(o);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},7822:function(e,t,r){"use strict";r.d(t,{Iq:function(){return l},OF:function(){return u},SF:function(){return s},Ze:function(){return c}});var a=r(5070);let s=(e,t,r)=>{let s=encodeURIComponent(t);switch(e){case"clash":return"clash://install-config?url=".concat(s,"&name=").concat(r);case"surge":return"surge:///install-config?url=".concat(s,"&name=").concat(r);case"loon":return"loon://import?sub=".concat(s,"&name=").concat(r);case"quanx":return"quantumult-x:///add-resource?remote-resource=".concat(encodeURI(JSON.stringify({server_remote:["".concat(s,", tag=").concat(r)]})));case"shadowrocket":return"shadowrocket://add/sub://".concat((0,a.cv)(s+"&flag=shadowrocket"),"?remark=").concat(r)}return""},l=(e,t)=>{let r=new Date(1e3*e),a=r.getFullYear(),s=String(r.getMonth()+1).padStart(2,"0"),l=String(r.getDate()).padStart(2,"0"),n="".concat(a,"/").concat(s,"/").concat(l);if(t){let e=String(r.getHours()).padStart(2,"0"),t=String(r.getMinutes()).padStart(2,"0"),a=String(r.getSeconds()).padStart(2,"0");n+=" ".concat(e,":").concat(t,":").concat(a)}return n},n=e=>{let t=parseInt(e.slice(1),16);return{r:t>>16&255,g:t>>8&255,b:255&t}},o=(e,t,r)=>"#".concat((16777216+(e<<16)+(t<<8)+r).toString(16).slice(1)),i=e=>{let{r:t,g:r,b:a}=n(e);return(299*t+587*r+114*a)/1e3<128},d=(e,t)=>{let{r,g:a,b:s}=n(e);return i(e)?o(255-r,255-a,255-s):o(Math.min(255,Math.max(0,r+t)),Math.min(255,Math.max(0,a+t)),Math.min(255,Math.max(0,s+t)))},c=e=>d(e,30),u=e=>{let t=0,r=0,a=0;4==e.length?(t="0x"+e[1]+e[1],r="0x"+e[2]+e[2],a="0x"+e[3]+e[3]):7==e.length&&(t="0x"+e[1]+e[2],r="0x"+e[3]+e[4],a="0x"+e[5]+e[6]);let s=Math.min(t/=255,r/=255,a/=255),l=Math.max(t,r,a),n=l-s,o=0,i=0,d=0;return(o=Math.round(60*(o=0==n?0:l==t?(r-a)/n%6:l==r?(a-t)/n+2:(t-r)/n+4)))<0&&(o+=360),d=(l+s)/2,o+" "+ +(100*(0==n?0:n/(1-Math.abs(2*d-1)))).toFixed(1)+"% "+(d=+(100*d).toFixed(1))+"%"}},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var a=r(4839),s=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}}},function(e){e.O(0,[313,613,776,814,138,159,971,23,744],function(){return e(e.s=2666)}),_N_E=e.O()}]);