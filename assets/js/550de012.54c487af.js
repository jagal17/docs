"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[6570],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=d(a),k=r,g=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2343:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={id:"lang-date",title:"Date"},i=void 0,o={unversionedId:"concepts/lang-date",id:"concepts/lang-date",title:"Date",description:"A Date type attribute, variable or expression can be in the range of 1/1/100 to 12/31/32,767.",source:"@site/docs/concepts/lang-date.md",sourceDirName:"concepts",slug:"/concepts/lang-date",permalink:"/docs/concepts/lang-date",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/concepts/lang-date.md",tags:[],version:"current",frontMatter:{id:"lang-date",title:"Date"},sidebar:"QodlyScript",previous:{title:"Boolean",permalink:"/docs/concepts/lang-boolean"},next:{title:"Number",permalink:"/docs/concepts/lang-number"}},p={},d=[{value:"Date literals",id:"date-literals",level:2},{value:"Date operators",id:"date-operators",level:2}],m={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A Date type attribute, variable or expression can be in the range of 1/1/100 to 12/31/32,767."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In Qodly, a date can be stored in two data types:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"a date type, expressed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"yyyy-mm-dd")," format, for example '2023-12-05'"),(0,r.kt)("li",{parentName:"ul"},"an ISO date format string, expressed in the following format: 'yyyy-mm-ddThh:mm:ss.sssZ' (e.g., \"2023-12-05T23:00:00.000Z\" for december 5, 2023 in the Central European Timezone). ",(0,r.kt)("inlineCode",{parentName:"li"},"sss")," represents the milliseconds and can be between 0 to 999. ")),(0,r.kt)("p",{parentName:"admonition"},"You can select the data type for a Date attribute in your model. This page describes the handling of the ",(0,r.kt)("strong",{parentName:"p"},"date type"),".")),(0,r.kt)("h2",{id:"date-literals"},"Date literals"),(0,r.kt)("p",null,"A date literal constant is enclosed by exclamation marks (!\u2026!). A date must be structured using the ISO format (!YYYY-MM-DD!). Here are some examples of date constants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"!1976-01-01!\n!2004-09-29!\n!2023-12-31!\n")),(0,r.kt)("p",null,"A null date is specified by ",(0,r.kt)("em",{parentName:"p"},"!00-00-00!"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Qodly accepts two-digit years to be entered. A two-digit year is assumed to be in the 20th or 21st century based on whether it is greater or less than 30, unless this default setting has been changed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SET DEFAULT CENTURY")," command.")),(0,r.kt)("h2",{id:"date-operators"},"Date operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns"),(0,r.kt)("th",{parentName:"tr",align:null},"Expression"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date difference"),(0,r.kt)("td",{parentName:"tr",align:null},"Date \u2013 Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20! - !2023-01-01!"),(0,r.kt)("td",{parentName:"tr",align:null},"19")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day addition"),(0,r.kt)("td",{parentName:"tr",align:null},"Date + Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20! + 9"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-29!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day subtraction"),(0,r.kt)("td",{parentName:"tr",align:null},"Date \u2013 Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20! - 9"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-11!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Equality"),(0,r.kt)("td",{parentName:"tr",align:null},"Date == Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-01! == !2023-01-01!"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20! == !2023-01-01!"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Inequality"),(0,r.kt)("td",{parentName:"tr",align:null},"Date != Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20! != !2023-01-01!"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20! != !2023-01-20!"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,r.kt)("td",{parentName:"tr",align:null},"Date > Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20! > !2023-01-01!"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20! > !2023-01-20!"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than"),(0,r.kt)("td",{parentName:"tr",align:null},"Date < Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-01! < !2023-01-20!"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20! < !2023-01-20!"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"Date >= Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20! >=!2023-01-01!"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-01!>=!2023-01-20!"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"Date <= Date"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-01!<=!2023-01-20!"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-20!<=!2023-01-01!"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))))}u.isMDXComponent=!0}}]);