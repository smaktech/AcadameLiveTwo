(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[89],{1820:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var s=a(4),i=a(25),r=a(136),n=a(27),c=a(407),l=a(1825),o=a(269),j=a(1681),d=a(0),x=["links","activeLast"];function p(e){var t,a=e.links,n=e.activeLast,j=void 0!==n&&n,p=Object(i.a)(e,x),b=null===(t=Object(r.last)(a))||void 0===t?void 0:t.name,m=a.map((function(e){return Object(d.jsx)(h,{link:e},e.name)})),v=a.map((function(e){return Object(d.jsx)("div",{children:e.name!==b?Object(d.jsx)(h,{link:e}):Object(d.jsx)(c.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:b})},e.name)}));return Object(d.jsx)(l.a,Object(s.a)(Object(s.a)({separator:Object(d.jsx)(o.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},p),{},{children:j?m:v}))}function h(e){var t=e.link,a=t.href,s=t.name,i=t.icon;return Object(d.jsxs)(j.a,{variant:"body2",component:n.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&Object(d.jsx)(o.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),s]},s)}},1821:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var s=a(4),i=a(25),r=a(136),n=a(269),c=a(407),l=a(1681),o=a(1820),j=a(0),d=["links","action","heading","moreLink","sx"];function x(e){var t=e.links,a=e.action,x=e.heading,p=e.moreLink,h=void 0===p?[]:p,b=e.sx,m=Object(i.a)(e,d);return Object(j.jsxs)(n.a,{sx:Object(s.a)({mb:5},b),children:[Object(j.jsxs)(n.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(n.a,{sx:{flexGrow:1},children:[Object(j.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:x}),Object(j.jsx)(o.a,Object(s.a)({links:t},m))]}),a&&Object(j.jsx)(n.a,{sx:{flexShrink:0},children:a})]}),Object(j.jsx)(n.a,{sx:{mt:2},children:Object(r.isString)(h)?Object(j.jsx)(l.a,{href:h,target:"_blank",rel:"noopener",variant:"body2",children:h}):h.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1824:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var s=a(4),i=a(98),r=a(1009),n=a(1826),c=a(269),l=a(407),o=a(0);function j(e){var t=e.title,a=e.sx,l=e.children;return Object(o.jsxs)(r.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(i.a)(e.palette.grey[500],.04)}},children:[t&&Object(o.jsx)(n.a,{title:t}),Object(o.jsx)(c.a,{sx:Object(s.a)({p:5,minHeight:180},a),children:l})]})}function d(e){var t=e.title;return Object(o.jsx)(l.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2774:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var s=a(12),i=a(68),r=a(269),n=a(1786),c=a(2022),l=a(1778),o=a(1844),j=a(47),d=a(671),x=a(687),p=a(41),h=a(683),b=a(1821),m=a(1824),v=a(0),O=Object(s.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function u(){var e=Object(i.a)();return Object(v.jsx)(d.a,{title:"Components: Avatar",children:Object(v.jsxs)(O,{children:[Object(v.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(n.a,{children:Object(v.jsx)(b.a,{heading:"Avatar",links:[{name:"Components",href:j.d.components},{name:"Avatar"}],moreLink:"https://mui.com/components/avatars"})})}),Object(v.jsx)(n.a,{children:Object(v.jsxs)(o.a,{columns:{xs:1,md:2},spacing:3,children:[Object(v.jsx)(m.a,{title:"Image avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[1,2,3,4,5].map((function(e,t){return Object(v.jsx)(x.a,{alt:"Remy Sharp",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_".concat(t+1,".jpg")},t)}))}),Object(v.jsxs)(m.a,{title:"Letter avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(v.jsx)(x.a,{children:"H"}),Object(v.jsx)(x.a,{color:"primary",children:"N"}),Object(v.jsx)(x.a,{color:"info",children:"OP"}),Object(v.jsx)(x.a,{color:"success",children:"CB"}),Object(v.jsx)(x.a,{color:"warning",children:"ZP"}),Object(v.jsx)(x.a,{color:"error",children:"OH"})]}),Object(v.jsxs)(m.a,{title:"Icon avatars",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(v.jsx)(x.a,{color:"primary",children:Object(v.jsx)(p.a,{icon:"eva:folder-add-outline",width:24,height:24})}),Object(v.jsx)(x.a,{color:"info",children:Object(v.jsx)(p.a,{icon:"eva:file-text-outline",width:24,height:24})}),Object(v.jsx)(x.a,{color:"success",children:Object(v.jsx)(p.a,{icon:"eva:bell-off-outline",width:24,height:24})})]}),Object(v.jsxs)(m.a,{title:"Variant",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(v.jsx)(x.a,{variant:"square",color:"primary",children:Object(v.jsx)(p.a,{icon:"eva:folder-add-outline",width:24,height:24})}),Object(v.jsx)(x.a,{variant:"rounded",color:"info",children:Object(v.jsx)(p.a,{icon:"eva:file-text-outline",width:24,height:24})})]}),Object(v.jsx)(m.a,{title:"Grouped",sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(v.jsxs)(c.a,{max:4,children:[Object(v.jsx)(x.a,{alt:"Remy Sharp",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg"}),Object(v.jsx)(x.a,{color:"info",children:"OP"}),Object(v.jsx)(x.a,{alt:"Cindy Baker",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg"}),Object(v.jsx)(x.a,{alt:"Agnes Walker",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_6.jpg"}),Object(v.jsx)(x.a,{alt:"Trevor Henderson",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg"}),Object(v.jsx)(x.a,{alt:"Trevor Henderson",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg"}),Object(v.jsx)(x.a,{alt:"Trevor Henderson",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg"})]})}),Object(v.jsxs)(m.a,{title:"With badge",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[Object(v.jsx)(l.a,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:Object(v.jsx)(x.a,{alt:"Travis Howard",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg",sx:{width:24,height:24,border:"solid 2px ".concat(e.palette.background.paper)}}),children:Object(v.jsx)(x.a,{alt:"Travis Howard",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg"})}),["online","away","busy","invisible"].map((function(e,t){return Object(v.jsxs)(r.a,{sx:{position:"relative"},children:[Object(v.jsx)(x.a,{alt:"Travis Howard",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_".concat(t+7,".jpg")}),Object(v.jsx)(h.a,{status:e,sx:{right:2,bottom:2,position:"absolute"}})]},e)}))]}),Object(v.jsx)(m.a,{title:"Sizes",sx:{display:"flex",alignItems:"center",justifyContent:"center","& > *":{mx:1}},children:[24,32,48,56,64,80,128].map((function(e,t){return Object(v.jsx)(x.a,{alt:"Travis Howard",src:"https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_".concat(t+4,".jpg"),sx:{width:e,height:e}},e)}))})]})})]})})}}}]);
//# sourceMappingURL=89.717eae44.chunk.js.map