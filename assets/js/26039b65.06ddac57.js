"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5462],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),u=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(i.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(i,".").concat(c)]||d[c]||s[c]||l;return a?n.createElement(k,o(o({ref:e},m),{},{components:a})):n.createElement(k,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[d]="string"==typeof t?t:r,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2495:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={id:"lang-boolean",title:"Boolean"},o=void 0,p={unversionedId:"concepts/lang-boolean",id:"concepts/lang-boolean",title:"Boolean",description:"A boolean attribute, variable or expression can be either true or false.",source:"@site/docs/concepts/lang-boolean.md",sourceDirName:"concepts",slug:"/concepts/lang-boolean",permalink:"/docs/concepts/lang-boolean",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/concepts/lang-boolean.md",tags:[],version:"current",frontMatter:{id:"lang-boolean",title:"Boolean"},sidebar:"QodlyScript",previous:{title:"Data types",permalink:"/docs/concepts/lang-data-types"},next:{title:"Date",permalink:"/docs/concepts/lang-date"}},i={},u=[{value:"Boolean functions",id:"boolean-functions",level:2},{value:"Example",id:"example",level:3},{value:"Logical operators",id:"logical-operators",level:2}],m={toc:u};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A boolean attribute, variable or expression can be either ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("h2",{id:"boolean-functions"},"Boolean functions"),(0,r.kt)("p",null,"QuodlyScript provides the Boolean functions ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Not"),"."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"This example sets a boolean variable based on the value of a numeric variable. It returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"myBoolean")," if the ",(0,r.kt)("inlineCode",{parentName:"p"},"myVar")," value is set to 1 and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"var myBoolean : Boolean\nvar myVar : Integer\nif(myVar==1)\n    myBoolean=True //myBoolean is set to True\nelse\n    myBoolean=False //myBoolean is set to False\nend if\n")),(0,r.kt)("p",null,"This example can be simplified into one line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"myBoolean=(myButton==1)\n")),(0,r.kt)("h2",{id:"logical-operators"},"Logical operators"),(0,r.kt)("p",null,"QodlyScript supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns true if both expressions are true. A logical OR returns true if at least one of the expressions is true. The following table shows the logical operators:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns"),(0,r.kt)("th",{parentName:"tr",align:null},"Expression"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AND"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean & Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'("A" == "A") & (15 != 3)'),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'("A" == "B") & (15 != 3)'),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'("A" == "B") & (15 == 3)'),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OR"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean  ","|"," Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'("A" == "A") ',"|"," (15 != 3)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'("A" == "B") ',"|","  (15 != 3)"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'("A" == "B") ',"|","  (15 == 3)"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("p",null,"The following is the truth table for the AND logical operator:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Expr1"),(0,r.kt)("th",{parentName:"tr",align:null},"Expr2"),(0,r.kt)("th",{parentName:"tr",align:null},"Expr1 & Expr2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("p",null,"The following is the truth table for the OR logical operator:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Expr1"),(0,r.kt)("th",{parentName:"tr",align:null},"Expr2"),(0,r.kt)("th",{parentName:"tr",align:null},"Expr1 ","|"," Expr2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you need to calculate the exclusive disjunction between ",(0,r.kt)("em",{parentName:"p"},"Expr1")," and ",(0,r.kt)("em",{parentName:"p"},"Expr2"),", evaluate:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In boolean contexts, the QuodlyScript language also supports ",(0,r.kt)("a",{parentName:"p",href:"operators.md#short-circuit-operators"},"short-circuit operators")," (",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"||"),") and the ",(0,r.kt)("a",{parentName:"p",href:"operators.md#truthy-and-falsy"},"truthy and falsy")," concept. ")))}d.isMDXComponent=!0}}]);