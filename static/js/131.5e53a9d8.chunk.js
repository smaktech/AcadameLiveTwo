(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[131],{1837:function(e,t,a){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.substr(1)}a.d(t,"a",(function(){return r}))},1997:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(22),i=a(1688),n=a(1837);function s(e){return Object(n.a)(e.toLowerCase())}function c(e,t){return void 0===t&&(t={}),Object(i.a)(e,Object(r.a)({delimiter:" ",transform:s},t))}},2867:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var r=a(10),i=a(1997),n=a(27),s=a(12),c=a(1806),l=a(407),o=a(1681),d=a(1786),u=a(269),j=a(1678),m=a(105),b=a(169),h=a(47),p=a(671),x=a(145),f=a(349),O=a(4),g=a(8),v=a.n(g),y=a(15),w=a(3),N=a(194),S=a(1),k=a(193),C=a(243),q=a(1002),T=a(1771),L=a(1799),W=a(1796),B=a(1682),I=a(1818),P=a(415),A=a(41),E=a(78),F=a(0);function z(){var e=Object(m.a)().register,t=Object(P.a)(),a=Object(k.b)(),r=a.enqueueSnackbar,i=a.closeSnackbar,n=Object(S.useState)(!1),s=Object(w.a)(n,2),c=s[0],l=s[1],o=N.f().shape({firstName:N.h().min(2,"Too Short!").max(50,"Too Long!").required("First name required"),lastName:N.h().min(2,"Too Short!").max(50,"Too Long!").required("Last name required"),email:N.h().email("Email must be a valid email address").required("Email is required"),password:N.h().required("Password is required")}),d=Object(C.d)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:o,onSubmit:function(){var a=Object(y.a)(v.a.mark((function a(n,s){var c,l;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=s.setErrors,l=s.setSubmitting,a.prev=1,a.next=4,e(n.email,n.password,n.firstName,n.lastName);case 4:r("Register success",{variant:"success",action:function(e){return Object(F.jsx)(E.c,{size:"small",onClick:function(){return i(e)},children:Object(F.jsx)(A.a,{icon:"eva:close-fill"})})}}),t.current&&l(!1),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0),t.current&&(c({afterSubmit:a.t0.message}),l(!1));case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e,t){return a.apply(this,arguments)}}()}),u=d.errors,j=d.touched,b=d.handleSubmit,h=d.isSubmitting,p=d.getFieldProps;return Object(F.jsx)(C.b,{value:d,children:Object(F.jsx)(C.a,{autoComplete:"off",noValidate:!0,onSubmit:b,children:Object(F.jsxs)(q.a,{spacing:3,children:[u.afterSubmit&&Object(F.jsx)(T.a,{severity:"error",children:u.afterSubmit}),Object(F.jsxs)(q.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(F.jsx)(L.a,Object(O.a)(Object(O.a)({fullWidth:!0,label:"First name"},p("firstName")),{},{error:Boolean(j.firstName&&u.firstName),helperText:j.firstName&&u.firstName})),Object(F.jsx)(L.a,Object(O.a)(Object(O.a)({fullWidth:!0,label:"Last name"},p("lastName")),{},{error:Boolean(j.lastName&&u.lastName),helperText:j.lastName&&u.lastName}))]}),Object(F.jsx)(L.a,Object(O.a)(Object(O.a)({fullWidth:!0,autoComplete:"username",type:"email",label:"Email address"},p("email")),{},{error:Boolean(j.email&&u.email),helperText:j.email&&u.email})),Object(F.jsx)(L.a,Object(O.a)(Object(O.a)({fullWidth:!0,autoComplete:"current-password",type:c?"text":"password",label:"Password"},p("password")),{},{InputProps:{endAdornment:Object(F.jsx)(W.a,{position:"end",children:Object(F.jsx)(B.a,{edge:"end",onClick:function(){return l((function(e){return!e}))},children:Object(F.jsx)(A.a,{icon:c?"eva:eye-fill":"eva:eye-off-fill"})})})},error:Boolean(j.password&&u.password),helperText:j.password&&u.password})),Object(F.jsx)(I.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:h,children:"Register"})]})})})}var M=a(901),R=Object(s.a)("div")((function(e){var t=e.theme;return Object(r.a)({},t.breakpoints.up("md"),{display:"flex"})})),D=Object(s.a)("header")((function(e){var t=e.theme;return Object(r.a)({top:0,zIndex:9,lineHeight:0,width:"100%",display:"flex",alignItems:"center",position:"absolute",padding:t.spacing(3),justifyContent:"space-between"},t.breakpoints.up("md"),{alignItems:"flex-start",padding:t.spacing(7,5,0,7)})})),G=Object(s.a)(c.a)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),H=Object(s.a)("div")((function(e){return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function J(){var e=Object(m.a)().method,t=Object(b.a)("up","sm"),a=Object(b.a)("up","md");return Object(F.jsx)(p.a,{title:"Register",children:Object(F.jsxs)(R,{children:[Object(F.jsxs)(D,{children:[Object(F.jsx)(x.a,{}),t&&Object(F.jsxs)(l.a,{variant:"body2",sx:{mt:{md:-2}},children:["Already have an account?"," ",Object(F.jsx)(o.a,{variant:"subtitle2",component:n.b,to:h.a.login,children:"Login"})]})]}),a&&Object(F.jsxs)(G,{children:[Object(F.jsx)(l.a,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Manage the job more effectively with Minimal"}),Object(F.jsx)(f.a,{alt:"register",src:"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_register.png"})]}),Object(F.jsx)(d.a,{children:Object(F.jsxs)(H,{children:[Object(F.jsxs)(u.a,{sx:{mb:5,display:"flex",alignItems:"center"},children:[Object(F.jsxs)(u.a,{sx:{flexGrow:1},children:[Object(F.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:"Get started absolutely free."}),Object(F.jsx)(l.a,{sx:{color:"text.secondary"},children:"Free forever. No credit card needed."})]}),Object(F.jsx)(j.a,{title:Object(i.a)(e),children:Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(f.a,{disabledEffect:!0,src:"https://minimal-assets-api.vercel.app/assets/icons/auth/ic_".concat(e,".png"),sx:{width:32,height:32}})})})]}),"firebase"===e&&Object(F.jsx)(M.a,{}),Object(F.jsx)(z,{}),Object(F.jsxs)(l.a,{variant:"body2",align:"center",sx:{color:"text.secondary",mt:3},children:["By registering, I agree to Minimal\xa0",Object(F.jsx)(o.a,{underline:"always",color:"text.primary",href:"#",children:"Terms of Service"}),"and",Object(F.jsx)(o.a,{underline:"always",color:"text.primary",href:"#",children:"Privacy Policy"}),"."]}),!t&&Object(F.jsxs)(l.a,{variant:"body2",sx:{mt:3,textAlign:"center"},children:["Already have an account?"," ",Object(F.jsx)(o.a,{variant:"subtitle2",to:h.a.login,component:n.b,children:"Login"})]})]})})]})})}}}]);
//# sourceMappingURL=131.5e53a9d8.chunk.js.map