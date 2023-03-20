"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[1003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,c=m["".concat(o,".").concat(g)]||m[g]||d[g]||l;return n?a.createElement(c,s(s({ref:t},u),{},{components:n})):a.createElement(c,s({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"lang-expressions",title:"Expressions"},s=void 0,i={unversionedId:"language/basics/lang-expressions",id:"language/basics/lang-expressions",title:"Expressions",description:"Overview",source:"@site/docs/language/basics/lang-expressions.md",sourceDirName:"language/basics",slug:"/language/basics/lang-expressions",permalink:"/docs/language/basics/lang-expressions",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-expressions.md",tags:[],version:"current",frontMatter:{id:"lang-expressions",title:"Expressions"},sidebar:"QodlyScript",previous:{title:"Parameters",permalink:"/docs/language/basics/lang-parameters"},next:{title:"Shared objects and collections",permalink:"/docs/language/basics/lang-shared"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Expression types",id:"expression-types",level:2},{value:"Assignable vs non-assignable expressions",id:"assignable-vs-non-assignable-expressions",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Simply put, expressions return a value. In fact, when using the QodlyScript language, you use expressions all the time and tend to think of them only in terms of the value they represent. Expressions are also sometimes referred to as formulas."),(0,r.kt)("p",null,"Expressions are made up of almost all the other parts of the language: commands, operators, variables, entity attributes, object properties, collection elements. You use expressions to build statements (lines of code), which in turn are used to build methods. The language uses expressions wherever it needs a piece of data."),(0,r.kt)("p",null,'Expressions rarely "stand alone". There are several places in QodlyScript where an expression can be used by itself. It includes:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Formula API (apply formula, query with formula, order by formula)"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"EXECUTE FORMULA")," command"),(0,r.kt)("li",{parentName:"ul"},"Web forms, where an expression can be used as a data source for most of components"),(0,r.kt)("li",{parentName:"ul"},"Debugger where the value of expressions can be checked")),(0,r.kt)("h2",{id:"expression-types"},"Expression types"),(0,r.kt)("p",null,"You refer to an expression by the data type it returns. There are several expression types. The following table gives examples of each type of expression."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Expression"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"Hello"'),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The word Hello is a string constant, indicated by the double quotation marks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"Hello " + "there"'),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'Two strings, "Hello " and "there", are added together (concatenated) with the string concatenation operator (+). The string "Hello there" is returned.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"Mr. " + person.name'),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'Two strings are concatenated: the string "Mr. " and the current value of the name attribute in the person entity. If the attribute contains "Smith", the expression returns "Mr. Smith".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'Uppercase("smith")'),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"This expression uses ",(0,r.kt)("inlineCode",{parentName:"td"},"Uppercase"),', a command from the language, to convert the string "smith" to uppercase. It returns "SMITH".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a number constant, 4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4 * 2"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Two numbers, 4 and 2, are multiplied using the multiplication operator (*). The result is the number 8.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"!2023-01-25!"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a date constant for the date 1/25/2023 (January 25, 2023).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Current date+ 30"),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a date expression that uses the ",(0,r.kt)("inlineCode",{parentName:"td"},"Current date")," command to get today\u2019s date. It adds 30 days to today\u2019s date and returns the new date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"?8:05:30?"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a time constant that represents 8 hours, 5 minutes, and 30 seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"?2:03:04? + ?1:02:03?"),(0,r.kt)("td",{parentName:"tr",align:null},"Time"),(0,r.kt)("td",{parentName:"tr",align:null},"This expression adds two times together and returns the time 3:05:07.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"This command returns the Boolean value TRUE.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10 != 20"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},'This is a logical comparison between two numbers. The != sign means "is not equal to". Since 10 "is not equal to" 20, the expression returns TRUE.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"ABC" == "XYZ"'),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a logical comparison between two strings. They are not equal, so the expression returns FALSE.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"myPicture + 50"),(0,r.kt)("td",{parentName:"tr",align:null},"Picture"),(0,r.kt)("td",{parentName:"tr",align:null},"This expression takes the picture in myPicture, moves it 50 pixels to the right, and returns the resulting picture.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSON Parse(MyString)"),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a command that returns MyString as an object (if proper format)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JSON Parse(MyJSONArray)"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a command that returns MyJSONArray as a collection (if proper format)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Form.pageNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"Object property"),(0,r.kt)("td",{parentName:"tr",align:null},"An object property is an expression that can be of any supported type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Col","[5]"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection element"),(0,r.kt)("td",{parentName:"tr",align:null},"A collection element is an expression that can be of any supported type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"entitySel","[0]"),(0,r.kt)("td",{parentName:"tr",align:null},"Entity"),(0,r.kt)("td",{parentName:"tr",align:null},"A element of an ORDA entity selection is an expression of the entity type. This kind of expression is ",(0,r.kt)("strong",{parentName:"td"},"non-assignable"))))),(0,r.kt)("h2",{id:"assignable-vs-non-assignable-expressions"},"Assignable vs non-assignable expressions"),(0,r.kt)("p",null,'An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like ',(0,r.kt)("inlineCode",{parentName:"p"},"myButton"),". It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are ",(0,r.kt)("strong",{parentName:"p"},"non-assignable"),", which means that you cannot assign a value to them.\nIn QodlyScript, expressions can be ",(0,r.kt)("strong",{parentName:"p"},"assignable"),". An expression is assignable when it can be used on the left side of an assignation. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'//myVar variable is assignable, you can write:  \nmyVar="Hello" //assign "Hello" to myVar\n//Form.pageNumber is assignable, you can write:  \nForm.pageNumber=10 //assign 10 to Form.pageNumber\n//Form.pageTotal-Form.pageNumber is not assignable:\nForm.pageTotal-Form.pageNumber=10 //error, non-assignable\n')),(0,r.kt)("p",null,"In general, expressions that use an operator are non-assignable. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},'entity.firstName+" "+entity.lastName')," is not assignable."))}m.isMDXComponent=!0}}]);