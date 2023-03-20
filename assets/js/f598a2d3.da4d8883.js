"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[7897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=o,h=d["".concat(i,".").concat(p)]||d[p]||u[p]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=n(7462),o=(n(7294),n(3905));const l={id:"lang-methods",title:"Methods"},r=void 0,s={unversionedId:"language/basics/lang-methods",id:"language/basics/lang-methods",title:"Methods",description:"A method is basically a piece of code that executes one or several action(s). Qodly provides a large number of built-in methods (i.e. commands) but also lets you create your own user methods. In this section, we describe user methods.",source:"@site/docs/language/basics/lang-methods.md",sourceDirName:"language/basics",slug:"/language/basics/lang-methods",permalink:"/docs/language/basics/lang-methods",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/language/basics/lang-methods.md",tags:[],version:"current",frontMatter:{id:"lang-methods",title:"Methods"},sidebar:"QodlyScript",previous:{title:"Operators",permalink:"/docs/language/basics/lang-operators"},next:{title:"Parameters",permalink:"/docs/language/basics/lang-parameters"}},i={},m=[{value:"Defining and Calling Methods",id:"defining-and-calling-methods",level:2},{value:"Writing Method Code",id:"writing-method-code",level:2},{value:"Code on several lines",id:"code-on-several-lines",level:3},{value:"Comments",id:"comments",level:3},{value:"Single line comments (<code>//comment</code>)",id:"single-line-comments-comment",level:4},{value:"Inline or multiline comments (<code>/*comment*/</code>)",id:"inline-or-multiline-comments-comment",level:4},{value:"Methods as Object Formulas",id:"methods-as-object-formulas",level:2},{value:"Recursive Methods",id:"recursive-methods",level:2},{value:"Process Methods",id:"process-methods",level:2}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A method is basically a piece of code that executes one or several action(s). Qodly provides a large number of built-in methods (i.e. ",(0,o.kt)("strong",{parentName:"p"},"commands"),") but also lets you create your own user methods. In this section, we describe user methods."),(0,o.kt)("h2",{id:"defining-and-calling-methods"},"Defining and Calling Methods"),(0,o.kt)("p",null,"You give a method a ",(0,o.kt)("a",{parentName:"p",href:"identifiers.md#methods"},"name")," that usually identifies what it does, and this name is used to call the method wherever it is needed. "),(0,o.kt)("p",null,"Once a method is created, it becomes part of the language of the project. "),(0,o.kt)("p",null,"A method is executed when its name is called, with or without ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/basics/lang-parameters"},"parameters"),", by another code. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'//methodA\n//methodA calls methodB with one parameter\nvar t : Text\nt=methodB("world") //t == "hello world"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'//methodB\n#DECLARE (param : Text)\nreturn ("hello " + param)\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Qodly Studio allows executing methods from the Explorer to test them.")),(0,o.kt)("h2",{id:"writing-method-code"},"Writing Method Code"),(0,o.kt)("p",null,"A method can contain any code to execute any custom actions. "),(0,o.kt)("p",null,"A user method is composed of statements. A statement performs an action, and may be simple or complex. Each statement usually consists of one line in the method (if necessary, it can however be split using the ",(0,o.kt)("inlineCode",{parentName:"p"},"\\")," character, see below). "),(0,o.kt)("p",null,"The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.  "),(0,o.kt)("h3",{id:"code-on-several-lines"},"Code on several lines"),(0,o.kt)("p",null,"You can write a single statement on several lines by terminating each line of the statement with a trailing backslash ",(0,o.kt)("inlineCode",{parentName:"p"},"\\")," character. The QodlyScript language will consider all the lines at once. For example, both the following statements are equivalent:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'str=String("hello world!")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'str=String("hello"+\\\n" world"+\\\n+"!")\n')),(0,o.kt)("h3",{id:"comments"},"Comments"),(0,o.kt)("p",null,"Comments are inactive lines of code. These lines are not interpreted by the QodlyScript language and are not executed when the code is called. "),(0,o.kt)("p",null,"There are two ways to create comments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"//")," for single line comments"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/*...*/")," for inline or multiline commnents.")),(0,o.kt)("p",null,"Both styles of comments can be used simultaneously. "),(0,o.kt)("h4",{id:"single-line-comments-comment"},"Single line comments (",(0,o.kt)("inlineCode",{parentName:"h4"},"//comment"),")"),(0,o.kt)("p",null,"Insert ",(0,o.kt)("inlineCode",{parentName:"p"},"//")," at the beginning of a line or after a statement to add a single line comment. Example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"//This is a comment\nfor($vCounter,1,100) //Starting loop\n  //comment\n  //comment\n  //comment\nend for\n")),(0,o.kt)("h4",{id:"inline-or-multiline-comments-comment"},"Inline or multiline comments (",(0,o.kt)("inlineCode",{parentName:"h4"},"/*comment*/"),")"),(0,o.kt)("p",null,"Surround contents with ",(0,o.kt)("inlineCode",{parentName:"p"},"/*")," ... ",(0,o.kt)("inlineCode",{parentName:"p"},"*/")," characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with ",(0,o.kt)("inlineCode",{parentName:"p"},"/*")," and end with ",(0,o.kt)("inlineCode",{parentName:"p"},"*/"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inline comments")," can be inserted anywhere in the code. Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"for /* inline comment */ ($vCounter,1,100)\n    ...\nend for\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multiline comment blocks")," allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the QodlyScript code editor supports block collapsing). Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"for ($vCounter,1,100)\n/*\ncomments  \n    /* \n    other comments\n    */\n*/\n...\nend for\n")),(0,o.kt)("h2",{id:"methods-as-object-formulas"},"Methods as Object Formulas"),(0,o.kt)("p",null,"You can encapsulate your methods in ",(0,o.kt)("strong",{parentName:"p"},"formula")," objects and call them from your objects."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Formula")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Formula from string")," commands allow you to create formula objects that you can encapsulate in object properties. It allows you to implement custom object methods."),(0,o.kt)("p",null,"To execute a method stored in an object property, use the ",(0,o.kt)("strong",{parentName:"p"},"()")," operator after the property name. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"//three_days_later\nreturn (Current date+3)\n")),(0,o.kt)("p",null,"Then ",(0,o.kt)("inlineCode",{parentName:"p"},"three_days_later")," can be encapsulated in any object and called:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'var o : Object\no=New object("threeDays";Formula(three_days_later))\no.threeDays() //returns the date in three days\n')),(0,o.kt)("p",null,"Syntax with brackets is also supported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'o["threeDays"]() //returns the date in three days\n')),(0,o.kt)("p",null,"You can also ",(0,o.kt)("a",{parentName:"p",href:"parameters.md"},"pass parameters")," to your formula when you call it by using special variables ",(0,o.kt)("inlineCode",{parentName:"p"},"$1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$2"),"\u2026 ",(0,o.kt)("inlineCode",{parentName:"p"},"$N"),". They will be received in their sequence order in the formula code. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"$0")," in the formula code to return a value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'//fullName method\nvar $0,$1,$2 : Text\n$0=$1+" "+$2\n')),(0,o.kt)("p",null,"Encapsulate ",(0,o.kt)("inlineCode",{parentName:"p"},"fullName")," in an object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'var o : Object\no=New object("full_name",Formula(fullName))\nresult=o.full_name("John";"Smith") \n//result = "John Smith"\n//equivalent to result=fullName("param1";"param2")\n')),(0,o.kt)("p",null,"Combined with the ",(0,o.kt)("inlineCode",{parentName:"p"},"This"),"function, such object methods allow writing powerful generic code. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'//fullName2 method\nvar $0 : Text\n$0=This.firstName+" "+This.lastName\n')),(0,o.kt)("p",null,"Then the method acts like a new, calculated attribute that can be added to other attributes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'var o : Object\no=New object("firstName","Jim","lastName","Wesson")\no.fullName=Formula(fullName2) //add the method  \n\nresult=o.fullName() \n//result = "Jim Wesson"\n')),(0,o.kt)("p",null,"Note that, even if it does not have parameters, an object method to be executed must be called with ",(0,o.kt)("inlineCode",{parentName:"p"},"()")," parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},"o=f.message //returns the formula object in o\n")),(0,o.kt)("h2",{id:"recursive-methods"},"Recursive Methods"),(0,o.kt)("p",null,"Methods can call themselves. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The method A may call the method B which may call A, so A will call B again and so on."),(0,o.kt)("li",{parentName:"ul"},"A method can call itself.")),(0,o.kt)("p",null,"This is called recursion. The Qodly language fully supports recursion."),(0,o.kt)("p",null,"Process Methods\nA process method is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with Start a New Process property is also the process method for the newly started process."),(0,o.kt)("h2",{id:"process-methods"},"Process Methods"),(0,o.kt)("p",null,"A process method is a method that is called when a process is started with the ",(0,o.kt)("inlineCode",{parentName:"p"},"New process")," command for example. The process lasts only as long as the process method continues to execute, except if it is a Worker process."))}d.isMDXComponent=!0}}]);