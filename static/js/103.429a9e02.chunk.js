(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[103],{1820:function(e,c,n){"use strict";n.d(c,"a",(function(){return h}));var t=n(4),a=n(25),i=n(136),r=n(27),s=n(407),j=n(1825),l=n(269),o=n(1681),d=n(0),x=["links","activeLast"];function h(e){var c,n=e.links,r=e.activeLast,o=void 0!==r&&r,h=Object(a.a)(e,x),O=null===(c=Object(i.last)(n))||void 0===c?void 0:c.name,u=n.map((function(e){return Object(d.jsx)(b,{link:e},e.name)})),m=n.map((function(e){return Object(d.jsx)("div",{children:e.name!==O?Object(d.jsx)(b,{link:e}):Object(d.jsx)(s.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:O})},e.name)}));return Object(d.jsx)(j.a,Object(t.a)(Object(t.a)({separator:Object(d.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},h),{},{children:o?u:m}))}function b(e){var c=e.link,n=c.href,t=c.name,a=c.icon;return Object(d.jsxs)(o.a,{variant:"body2",component:r.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&Object(d.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),t]},t)}},1821:function(e,c,n){"use strict";n.d(c,"a",(function(){return x}));var t=n(4),a=n(25),i=n(136),r=n(269),s=n(407),j=n(1681),l=n(1820),o=n(0),d=["links","action","heading","moreLink","sx"];function x(e){var c=e.links,n=e.action,x=e.heading,h=e.moreLink,b=void 0===h?[]:h,O=e.sx,u=Object(a.a)(e,d);return Object(o.jsxs)(r.a,{sx:Object(t.a)({mb:5},O),children:[Object(o.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(o.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(o.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:x}),Object(o.jsx)(l.a,Object(t.a)({links:c},u))]}),n&&Object(o.jsx)(r.a,{sx:{flexShrink:0},children:n})]}),Object(o.jsx)(r.a,{sx:{mt:2},children:Object(i.isString)(b)?Object(o.jsx)(j.a,{href:b,target:"_blank",rel:"noopener",variant:"body2",children:b}):b.map((function(e){return Object(o.jsx)(j.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1824:function(e,c,n){"use strict";n.d(c,"a",(function(){return o})),n.d(c,"b",(function(){return d}));var t=n(4),a=n(98),i=n(1009),r=n(1826),s=n(269),j=n(407),l=n(0);function o(e){var c=e.title,n=e.sx,j=e.children;return Object(l.jsxs)(i.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(a.a)(e.palette.grey[500],.04)}},children:[c&&Object(l.jsx)(r.a,{title:c}),Object(l.jsx)(s.a,{sx:Object(t.a)({p:5,minHeight:180},n),children:j})]})}function d(e){var c=e.title;return Object(l.jsx)(j.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:c})}},2847:function(e,c,n){"use strict";n.r(c),n.d(c,"default",(function(){return J}));var t=n(3),a=n(1),i=n(12),r=n(269),s=n(1786),j=n(1815),l=n(1969),o=n(1970),d=n(1993),x=n(47),h=n(671),b=n(1821),O=n(544),u=n(1844),m=n(1818),v=n(41),g=n(1824),f=n(0),p={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function w(){return Object(f.jsxs)(u.a,{columns:2,spacing:3,children:[Object(f.jsxs)(g.a,{title:"Base",sx:p,children:[Object(f.jsx)(O.a,{color:"inherit",children:"Default"}),Object(f.jsx)(O.a,{color:"secondary",children:"Secondary"}),Object(f.jsx)(O.a,{children:"Primary"}),Object(f.jsx)(O.a,{disabled:!0,children:"Disabled"}),Object(f.jsx)(O.a,{children:"Link"})]}),Object(f.jsxs)(g.a,{title:"Adding Colors",sx:p,children:[Object(f.jsx)(O.a,{color:"inherit",children:"Default"}),Object(f.jsx)(O.a,{children:"Primary"}),Object(f.jsx)(O.a,{color:"secondary",children:"Secondary"}),Object(f.jsx)(O.a,{color:"info",children:"Info"}),Object(f.jsx)(O.a,{color:"success",children:"Success"}),Object(f.jsx)(O.a,{color:"warning",children:"Warning"}),Object(f.jsx)(O.a,{color:"error",children:"Error"})]}),Object(f.jsxs)(g.a,{title:"With Icon & Loading",sx:p,children:[Object(f.jsx)(O.a,{color:"error",startIcon:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"}),children:"Icon Left"}),Object(f.jsx)(O.a,{color:"error",endIcon:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"}),children:"Icon Right"}),Object(f.jsx)(m.a,{loading:!0,children:"Submit"}),Object(f.jsx)(m.a,{loading:!0,loadingIndicator:"Loading...",children:"Fetch data"}),Object(f.jsx)(m.a,{loading:!0,loadingPosition:"start",startIcon:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"}),children:"Save"})]}),Object(f.jsxs)(g.a,{title:"Size",sx:p,children:[Object(f.jsx)(O.a,{color:"info",size:"small",children:"Small"}),Object(f.jsx)(O.a,{color:"info",children:"Medium"}),Object(f.jsx)(O.a,{color:"info",size:"large",children:"Large"})]})]})}var T=n(1682),y={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function S(){return Object(f.jsxs)(u.a,{columns:3,spacing:3,children:[Object(f.jsxs)(g.a,{title:"Base",sx:y,children:[Object(f.jsx)(T.a,{color:"inherit",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{color:"primary",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{color:"secondary",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{disabled:!0,children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})})]}),Object(f.jsxs)(g.a,{title:"Adding Colors",sx:y,children:[Object(f.jsx)(T.a,{color:"inherit",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{color:"primary",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{color:"secondary",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{color:"info",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{color:"success",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{color:"warning",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{color:"error",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"})})]}),Object(f.jsxs)(g.a,{title:"Size",sx:y,children:[Object(f.jsx)(T.a,{size:"small",color:"info",children:Object(f.jsx)(v.a,{fontSize:"inherit",icon:"ic:round-access-alarm"})}),Object(f.jsx)(T.a,{color:"info",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:20,height:20})}),Object(f.jsx)(T.a,{color:"info",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(T.a,{color:"info",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:32,height:32})})]})]})}var I=n(2890),k={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function C(){return Object(f.jsxs)(u.a,{columns:2,spacing:3,children:[Object(f.jsxs)(g.a,{title:"Base",sx:k,children:[Object(f.jsxs)(I.a,{color:"inherit",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"contained",color:"inherit",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"text",color:"inherit",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"contained",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"text",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{disabled:!0,children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{disabled:!0,variant:"contained",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{disabled:!0,variant:"text",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]})]}),Object(f.jsxs)(g.a,{title:"Adding Colors",sx:k,children:[Object(f.jsxs)(I.a,{variant:"contained",color:"inherit",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"contained",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"contained",color:"secondary",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"contained",color:"info",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"contained",color:"success",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"contained",color:"warning",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"contained",color:"error",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"outlined",color:"inherit",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"outlined",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"outlined",color:"secondary",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"outlined",color:"info",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"outlined",color:"success",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"outlined",color:"warning",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"outlined",color:"error",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"text",color:"inherit",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"text",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"text",color:"secondary",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"text",color:"info",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"text",color:"success",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"text",color:"warning",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"text",color:"error",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]})]}),Object(f.jsxs)(g.a,{title:"Size",sx:k,children:[Object(f.jsxs)(I.a,{size:"small",variant:"contained",color:"info",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{variant:"contained",color:"info",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{size:"large",variant:"contained",color:"info",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]})]}),Object(f.jsxs)(g.a,{title:"Orientation",sx:k,children:[Object(f.jsxs)(I.a,{orientation:"vertical",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{orientation:"vertical",variant:"contained",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]}),Object(f.jsxs)(I.a,{orientation:"vertical",variant:"text",children:[Object(f.jsx)(O.a,{children:"One"}),Object(f.jsx)(O.a,{children:"Two"}),Object(f.jsx)(O.a,{children:"Three"})]})]})]})}var z=n(2879),L=n(2721),B={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"},"& svg":{width:24,height:24}};function W(){var e=Object(a.useState)("left"),c=Object(t.a)(e,2),n=c[0],i=c[1],r=Object(a.useState)((function(){return["bold","italic"]})),s=Object(t.a)(r,2),j=s[0],l=s[1],o=Object(a.useState)("list"),d=Object(t.a)(o,2),x=d[0],h=d[1],b=Object(a.useState)(!1),O=Object(t.a)(b,2),m=O[0],p=O[1],w=function(e,c){i(c)},T=function(e,c){h(c)};return Object(f.jsxs)(u.a,{columns:3,spacing:3,children:[Object(f.jsx)(g.a,{title:"Exclusive selection",sx:B,children:Object(f.jsxs)(z.a,{value:n,exclusive:!0,onChange:w,children:[Object(f.jsx)(L.a,{value:"left",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-left"})}),Object(f.jsx)(L.a,{value:"center",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-center"})}),Object(f.jsx)(L.a,{value:"right",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-right"})}),Object(f.jsx)(L.a,{value:"justify",disabled:!0,children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-justify"})})]})}),Object(f.jsx)(g.a,{title:"Multiple selection",sx:B,children:Object(f.jsxs)(z.a,{value:j,onChange:function(e,c){l(c)},children:[Object(f.jsx)(L.a,{value:"bold",children:Object(f.jsx)(v.a,{icon:"ic:round-format-bold"})}),Object(f.jsx)(L.a,{value:"italic",children:Object(f.jsx)(v.a,{icon:"ic:round-format-italic"})}),Object(f.jsx)(L.a,{value:"underlined",children:Object(f.jsx)(v.a,{icon:"ic:round-format-underlined"})}),Object(f.jsxs)(L.a,{value:"color",disabled:!0,children:[Object(f.jsx)(v.a,{icon:"ic:baseline-format-color-fill"}),Object(f.jsx)(v.a,{icon:"ic:baseline-arrow-drop-down"})]})]})}),Object(f.jsxs)(g.a,{title:"Exclusive selection",sx:B,children:[Object(f.jsxs)(z.a,{size:"small",value:n,exclusive:!0,onChange:w,children:[Object(f.jsx)(L.a,{value:"left",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-left"})}),Object(f.jsx)(L.a,{value:"center",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-center"})}),Object(f.jsx)(L.a,{value:"right",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-right"})}),Object(f.jsx)(L.a,{value:"justify",disabled:!0,children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-justify"})})]}),Object(f.jsxs)(z.a,{size:"medium",value:n,exclusive:!0,onChange:w,children:[Object(f.jsx)(L.a,{value:"left",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-left"})}),Object(f.jsx)(L.a,{value:"center",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-center"})}),Object(f.jsx)(L.a,{value:"right",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-right"})}),Object(f.jsx)(L.a,{value:"justify",disabled:!0,children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-justify"})})]}),Object(f.jsxs)(z.a,{size:"large",value:n,exclusive:!0,onChange:w,children:[Object(f.jsx)(L.a,{value:"left",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-left"})}),Object(f.jsx)(L.a,{value:"center",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-center"})}),Object(f.jsx)(L.a,{value:"right",children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-right"})}),Object(f.jsx)(L.a,{value:"justify",disabled:!0,children:Object(f.jsx)(v.a,{icon:"ic:round-format-align-justify"})})]})]}),Object(f.jsxs)(g.a,{title:"Vertical & Standalone buttons",sx:B,children:[Object(f.jsxs)(z.a,{orientation:"vertical",value:x,exclusive:!0,onChange:T,children:[Object(f.jsx)(L.a,{value:"list",children:Object(f.jsx)(v.a,{icon:"ic:round-view-list"})}),Object(f.jsx)(L.a,{value:"module",children:Object(f.jsx)(v.a,{icon:"ic:round-view-module"})}),Object(f.jsx)(L.a,{value:"quilt",children:Object(f.jsx)(v.a,{icon:"ic:round-view-quilt"})})]}),Object(f.jsx)(L.a,{value:"check",selected:m,onChange:function(){p(!m)},children:Object(f.jsx)(v.a,{icon:"eva:checkmark-fill"})})]}),Object(f.jsxs)(g.a,{title:"Colors",sx:B,children:[Object(f.jsxs)(z.a,{color:"primary",orientation:"vertical",value:x,exclusive:!0,onChange:T,children:[Object(f.jsx)(L.a,{value:"list",children:Object(f.jsx)(v.a,{icon:"ic:round-view-list"})}),Object(f.jsx)(L.a,{value:"module",children:Object(f.jsx)(v.a,{icon:"ic:round-view-module"})}),Object(f.jsx)(L.a,{value:"quilt",children:Object(f.jsx)(v.a,{icon:"ic:round-view-quilt"})})]}),Object(f.jsxs)(z.a,{orientation:"vertical",color:"info",value:x,exclusive:!0,onChange:T,children:[Object(f.jsx)(L.a,{value:"list",children:Object(f.jsx)(v.a,{icon:"ic:round-view-list"})}),Object(f.jsx)(L.a,{value:"module",children:Object(f.jsx)(v.a,{icon:"ic:round-view-module"})}),Object(f.jsx)(L.a,{value:"quilt",children:Object(f.jsx)(v.a,{icon:"ic:round-view-quilt"})})]}),Object(f.jsx)(L.a,{color:"primary",value:"check",selected:m,onChange:function(){p(!m)},children:Object(f.jsx)(v.a,{icon:"eva:checkmark-fill"})}),Object(f.jsx)(L.a,{color:"info",value:"check",selected:m,onChange:function(){p(!m)},children:Object(f.jsx)(v.a,{icon:"eva:checkmark-fill"})})]})]})}var D={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function P(){return Object(f.jsxs)(u.a,{columns:2,spacing:3,children:[Object(f.jsxs)(g.a,{title:"Base",sx:D,children:[Object(f.jsx)(O.a,{variant:"outlined",color:"inherit",children:"Default"}),Object(f.jsx)(O.a,{variant:"outlined",children:"Primary"}),Object(f.jsx)(O.a,{variant:"outlined",color:"secondary",children:"Secondary"}),Object(f.jsx)(O.a,{variant:"outlined",disabled:!0,children:"Disabled"}),Object(f.jsx)(O.a,{variant:"outlined",children:"Link"})]}),Object(f.jsxs)(g.a,{title:"Adding Colors",sx:D,children:[Object(f.jsx)(O.a,{variant:"outlined",color:"inherit",children:"Default"}),Object(f.jsx)(O.a,{variant:"outlined",children:"Primary"}),Object(f.jsx)(O.a,{variant:"outlined",color:"secondary",children:"Secondary"}),Object(f.jsx)(O.a,{variant:"outlined",color:"info",children:"Info"}),Object(f.jsx)(O.a,{variant:"outlined",color:"success",children:"Success"}),Object(f.jsx)(O.a,{variant:"outlined",color:"warning",children:"Warning"}),Object(f.jsx)(O.a,{variant:"outlined",color:"error",children:"Error"})]}),Object(f.jsxs)(g.a,{title:"With Icon & Loading",sx:D,children:[Object(f.jsx)(O.a,{variant:"outlined",color:"error",startIcon:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"}),children:"Icon Left"}),Object(f.jsx)(O.a,{variant:"outlined",color:"error",endIcon:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"}),children:"Icon Right"}),Object(f.jsx)(m.a,{loading:!0,variant:"outlined",children:"Submit"}),Object(f.jsx)(m.a,{loading:!0,loadingIndicator:"Loading...",variant:"outlined",children:"Fetch data"}),Object(f.jsx)(m.a,{loading:!0,loadingPosition:"start",startIcon:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"}),variant:"outlined",children:"Save"})]}),Object(f.jsxs)(g.a,{title:"Size",sx:D,children:[Object(f.jsx)(O.a,{variant:"outlined",color:"info",size:"small",children:"Small"}),Object(f.jsx)(O.a,{variant:"outlined",color:"info",children:"Medium"}),Object(f.jsx)(O.a,{variant:"outlined",color:"info",size:"large",children:"Large"})]})]})}var A={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:"8px !important"}};function q(){return Object(f.jsxs)(u.a,{columns:2,spacing:3,children:[Object(f.jsxs)(g.a,{title:"Base",sx:A,children:[Object(f.jsx)(O.a,{variant:"contained",color:"inherit",children:"Default"}),Object(f.jsx)(O.a,{variant:"contained",children:"Primary"}),Object(f.jsx)(O.a,{variant:"contained",color:"secondary",children:"Secondary"}),Object(f.jsx)(O.a,{variant:"contained",disabled:!0,children:"Disabled"}),Object(f.jsx)(O.a,{variant:"contained",children:"Link"})]}),Object(f.jsxs)(g.a,{title:"Adding Colors",sx:A,children:[Object(f.jsx)(O.a,{variant:"contained",color:"inherit",children:"Default"}),Object(f.jsx)(O.a,{variant:"contained",children:"Primary"}),Object(f.jsx)(O.a,{variant:"contained",color:"secondary",children:"Secondary"}),Object(f.jsx)(O.a,{variant:"contained",color:"info",children:"Info"}),Object(f.jsx)(O.a,{variant:"contained",color:"success",children:"Success"}),Object(f.jsx)(O.a,{variant:"contained",color:"warning",children:"Warning"}),Object(f.jsx)(O.a,{variant:"contained",color:"error",children:"Error"})]}),Object(f.jsxs)(g.a,{title:"With Icon & Loading",sx:A,children:[Object(f.jsx)(O.a,{variant:"contained",color:"error",startIcon:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"}),children:"Icon Left"}),Object(f.jsx)(O.a,{variant:"contained",color:"error",endIcon:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"}),children:"Icon Right"}),Object(f.jsx)(m.a,{loading:!0,variant:"contained",children:"Submit"}),Object(f.jsx)(m.a,{loading:!0,loadingIndicator:"Loading...",variant:"contained",children:"Fetch data"}),Object(f.jsx)(m.a,{loading:!0,loadingPosition:"start",startIcon:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm"}),variant:"contained",children:"Save"})]}),Object(f.jsxs)(g.a,{title:"Size",sx:A,children:[Object(f.jsx)(O.a,{variant:"contained",color:"info",size:"small",children:"Small"}),Object(f.jsx)(O.a,{variant:"contained",color:"info",children:"Medium"}),Object(f.jsx)(O.a,{variant:"contained",color:"info",size:"large",children:"Large"})]})]})}var E=n(1792),R=n(78),M={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function F(){return Object(f.jsxs)(u.a,{columns:2,spacing:3,children:[Object(f.jsxs)(g.a,{title:"Base",sx:M,children:[Object(f.jsx)(E.a,{color:"default",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(E.a,{children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(E.a,{color:"secondary",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(E.a,{disabled:!0,children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsxs)(E.a,{color:"default",variant:"extended",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Default"]}),Object(f.jsxs)(E.a,{variant:"extended",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Primary"]}),Object(f.jsxs)(E.a,{disabled:!0,variant:"extended",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Disabled"]})]}),Object(f.jsxs)(g.a,{title:"Adding Colors",sx:M,children:[Object(f.jsx)(R.b,{color:"default",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(R.b,{children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(R.b,{color:"secondary",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(R.b,{color:"info",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(R.b,{color:"success",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(R.b,{color:"warning",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(R.b,{color:"error",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsxs)(R.b,{variant:"extended",color:"default",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Default"]}),Object(f.jsxs)(R.b,{variant:"extended",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Primary"]}),Object(f.jsxs)(R.b,{variant:"extended",color:"secondary",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Secondary"]}),Object(f.jsxs)(R.b,{variant:"extended",color:"info",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Info"]}),Object(f.jsxs)(R.b,{variant:"extended",color:"success",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Success"]}),Object(f.jsxs)(R.b,{variant:"extended",color:"warning",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Warning"]}),Object(f.jsxs)(R.b,{variant:"extended",color:"error",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Error"]})]}),Object(f.jsxs)(g.a,{title:"Size",sx:M,children:[Object(f.jsx)(R.b,{color:"info",size:"small",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(R.b,{color:"info",size:"medium",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsx)(R.b,{color:"info",children:Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24})}),Object(f.jsxs)(R.b,{variant:"extended",size:"small",color:"info",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Small"]}),Object(f.jsxs)(R.b,{variant:"extended",size:"medium",color:"info",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Medium"]}),Object(f.jsxs)(R.b,{variant:"extended",color:"info",children:[Object(f.jsx)(v.a,{icon:"ic:round-access-alarm",width:24,height:24}),"Large"]})]})]})}var G=[{name:"Contained Buttons",component:Object(f.jsx)(q,{})},{name:"Outlined Buttons",component:Object(f.jsx)(P,{})},{name:"TextButtons",component:Object(f.jsx)(w,{})},{name:"Icon Buttons",component:Object(f.jsx)(S,{})},{name:"Floating Action Button",component:Object(f.jsx)(F,{})},{name:"Button Groups",component:Object(f.jsx)(C,{})},{name:"Toggle Buttons",component:Object(f.jsx)(W,{})}],H=Object(i.a)("div")((function(e){var c=e.theme;return{paddingTop:c.spacing(11),paddingBottom:c.spacing(15)}}));function J(){var e=Object(a.useState)("1"),c=Object(t.a)(e,2),n=c[0],i=c[1];return Object(f.jsx)(h.a,{title:"Components: Buttons",children:Object(f.jsxs)(H,{children:[Object(f.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(f.jsx)(s.a,{children:Object(f.jsx)(b.a,{heading:"Buttons",links:[{name:"Components",href:x.d.components},{name:"Buttons"}],moreLink:["https://mui.com/components/buttons","https://mui.com/components/button-group","https://mui.com/components/floating-action-button","https://mui.com/components/toggle-button"]})})}),Object(f.jsx)(s.a,{children:Object(f.jsxs)(l.a,{value:n,children:[Object(f.jsx)(o.a,{onChange:function(e,c){i(c)},children:G.map((function(e,c){return Object(f.jsx)(j.a,{disableRipple:!0,label:e.name,value:String(c+1)},e.name)}))}),G.map((function(e,c){return Object(f.jsx)(d.a,{value:String(c+1),sx:{mt:5},children:e.component},e.name)}))]})})]})})}}}]);
//# sourceMappingURL=103.429a9e02.chunk.js.map