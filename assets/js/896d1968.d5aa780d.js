"use strict";(self.webpackChunkqodly=self.webpackChunkqodly||[]).push([[5534],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(n),g=r,N=d["".concat(u,".").concat(g)]||d[g]||m[g]||l;return n?a.createElement(N,i(i({ref:e},p),{},{components:n})):a.createElement(N,i({ref:e},p))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},976:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={id:"lang-number",title:"Number"},i=void 0,o={unversionedId:"concepts/lang-number",id:"concepts/lang-number",title:"Number",description:"Number is a generic term that stands for:",source:"@site/docs/concepts/lang-number.md",sourceDirName:"concepts",slug:"/concepts/lang-number",permalink:"/docs/concepts/lang-number",draft:!1,editUrl:"https://github.com/docQodly/docs/edit/main/docs/concepts/lang-number.md",tags:[],version:"current",frontMatter:{id:"lang-number",title:"Number"},sidebar:"QodlyScript",previous:{title:"Date",permalink:"/docs/concepts/lang-date"},next:{title:"Operators",permalink:"/docs/concepts/lang-operators"}},u={},s=[{value:"Number literals",id:"number-literals",level:2},{value:"Number operators",id:"number-operators",level:2},{value:"Precedence",id:"precedence",level:3},{value:"Bitwise operators",id:"bitwise-operators",level:2},{value:"Notes",id:"notes",level:4},{value:"Examples",id:"examples",level:3}],p={toc:s};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Number is a generic term that stands for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Real variable or expression. The range for the Real data type is \xb11.7e\xb1308 (13 significant digits)."),(0,r.kt)("li",{parentName:"ul"},"Integer attribute, variable or expression. The range for the Integer data type (4-byte Long integer) is -2^31..(2^31)-1.")),(0,r.kt)("p",null,"You can assign any number data type to another; Qodly does the conversion, truncating or rounding if necessary. However, when values are out of range, the conversion will not return a valid value. You can mix number data types in expressions."),(0,r.kt)("h2",{id:"number-literals"},"Number literals"),(0,r.kt)("p",null,"A numeric literal constant is written as a real number with a period (.) as decimal separator. Here are some examples of numeric constants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"27\n123.76\n0.0076\n")),(0,r.kt)("p",null,"Negative numbers are specified with the minus sign (-). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"-27\n-123.76\n-0.0076\n")),(0,r.kt)("h2",{id:"number-operators"},"Number operators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns"),(0,r.kt)("th",{parentName:"tr",align:null},"Expression"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Addition"),(0,r.kt)("td",{parentName:"tr",align:null},"Number + Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"2 + 3"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subtraction"),(0,r.kt)("td",{parentName:"tr",align:null},"Number - Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"3 \u2013 2"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multiplication"),(0,r.kt)("td",{parentName:"tr",align:null},"Number * Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"5 * 2"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Division"),(0,r.kt)("td",{parentName:"tr",align:null},"Number / Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"5 / 2"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Longint division"),(0,r.kt)("td",{parentName:"tr",align:null},"Number \\ Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \\ 2"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Modulo"),(0,r.kt)("td",{parentName:"tr",align:null},"Number % Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"5 % 2"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Exponentiation"),(0,r.kt)("td",{parentName:"tr",align:null},"Number ^ Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"2 ^ 3"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Equality"),(0,r.kt)("td",{parentName:"tr",align:null},"Number == Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"10 == 10"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"10 == 11"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Inequality"),(0,r.kt)("td",{parentName:"tr",align:null},"Number != Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"10 != 11"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"10 != 10"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,r.kt)("td",{parentName:"tr",align:null},"Number > Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"11 > 10"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"10 > 11"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than"),(0,r.kt)("td",{parentName:"tr",align:null},"Number < Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"10 < 11"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"11 < 10"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Greater than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"Number >= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"11 >= 10"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"10 >= 11"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Less than or equal to"),(0,r.kt)("td",{parentName:"tr",align:null},"Number <= Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"10 <= 11"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"11 <= 10"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("p",null,"The modulo operator % divides the first number by the second number and returns a whole number remainder. Here are some examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"10 % 2 returns 0 because 10 is evenly divided by 2."),(0,r.kt)("li",{parentName:"ul"},"10 % 3 returns 1 because the remainder is 1."),(0,r.kt)("li",{parentName:"ul"},"10.5 % 2 returns 0 because the remainder is not a whole number.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The modulo operator % returns significant values with numbers that are in the Integer range (from minus 2^31 to 2^31 minus one). To calculate the modulo with numbers outside of this range, use the ",(0,r.kt)("inlineCode",{parentName:"li"},"Mod")," command."),(0,r.kt)("li",{parentName:"ul"},"The longint division operator \\ returns significant values with integer numbers only."))),(0,r.kt)("h3",{id:"precedence"},"Precedence"),(0,r.kt)("p",null,"The order in which an expression is evaluated is called precedence. Qodly has a strict left-to-right precedence, in which algebraic order is not observed. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," 3+4*5\n")),(0,r.kt)("p",null,"returns 35, because the expression is evaluated as 3 + 4, yielding 7, which is then multiplied by 5, with the final result of 35."),(0,r.kt)("p",null,"To override the left-to-right precedence, you MUST use parentheses. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"}," 3+(4*5)\n")),(0,r.kt)("p",null,"returns 23 because the expression (4 * 5) is evaluated first, because of the parentheses. The result is 20, which is then added to 3 for the final result of 23."),(0,r.kt)("p",null,"Parentheses can be nested inside other sets of parentheses. Be sure that each left parenthesis has a matching right parenthesis to ensure proper evaluation of expressions. Lack of, or incorrect use of parentheses can cause unexpected results or invalid expressions. Furthermore, if you intend to compile your applications, you must have matching parentheses\u2014the compiler detects a missing parenthesis as a syntax error."),(0,r.kt)("h2",{id:"bitwise-operators"},"Bitwise operators"),(0,r.kt)("p",null,"The bitwise operators operates on ",(0,r.kt)("strong",{parentName:"p"},"Long Integer")," expressions or values. If you pass a Real value to a bitwise operator, Qodly evaluates the value as a Long Integer value before calculating the expression that uses the bitwise operator."),(0,r.kt)("p",null,"While using the bitwise operators, you must think about a Long Integer value as an array of 32 bits. The bits are numbered from 0 to 31, from right to left."),(0,r.kt)("p",null,"Because each bit can equal 0 or 1, you can also think about a Long Integer value as a value where you can store 32 Boolean values. A bit equal to 1 means ",(0,r.kt)("strong",{parentName:"p"},"True")," and a bit equal to 0 means ",(0,r.kt)("strong",{parentName:"p"},"False"),"."),(0,r.kt)("p",null,"An expression that uses a bitwise operator returns a Long Integer value, except for the Bit Test operator, where the expression returns a Boolean value. The following table lists the bitwise operators and their syntax:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise AND"),(0,r.kt)("td",{parentName:"tr",align:null},"&"),(0,r.kt)("td",{parentName:"tr",align:null},"Long & Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise OR (inclusive)"),(0,r.kt)("td",{parentName:"tr",align:null},"|"),(0,r.kt)("td",{parentName:"tr",align:null},"Long ","|"," Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise OR (exclusive)"),(0,r.kt)("td",{parentName:"tr",align:null},"^","|"),(0,r.kt)("td",{parentName:"tr",align:null},"Long ^","|"," Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Long")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Left Bit Shift"),(0,r.kt)("td",{parentName:"tr",align:null},"<<"),(0,r.kt)("td",{parentName:"tr",align:null},"Long << Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Long (see note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Right Bit Shift"),(0,r.kt)("td",{parentName:"tr",align:null},">>"),(0,r.kt)("td",{parentName:"tr",align:null},"Long >> Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Long (see note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bit Set"),(0,r.kt)("td",{parentName:"tr",align:null},"?+"),(0,r.kt)("td",{parentName:"tr",align:null},"Long ?+ Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Long (see note 2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bit Clear"),(0,r.kt)("td",{parentName:"tr",align:null},"?-"),(0,r.kt)("td",{parentName:"tr",align:null},"Long ?- Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Long (see note 2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bit Test"),(0,r.kt)("td",{parentName:"tr",align:null},"??"),(0,r.kt)("td",{parentName:"tr",align:null},"Long ?? Long"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean (see note 2)")))),(0,r.kt)("h4",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For the ",(0,r.kt)("inlineCode",{parentName:"li"},"Left Bit Shift")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Right Bit Shift")," operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Therefore, this second operand should be between 0 and 31. Note however, that shifting by 0 returns an unchanged value and shifting by more than 31 bits returns 0x00000000 because all the bits are lost. If you pass another value as second operand, the result is non-significant."),(0,r.kt)("li",{parentName:"ol"},"For the ",(0,r.kt)("inlineCode",{parentName:"li"},"Bit Set"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Bit Clear")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Bit Test")," operations , the second operand indicates the number of the bit on which to act. Therefore, this second operand must be between 0 and 31; otherwise, the result of the expression is non-significant.")),(0,r.kt)("p",null,"The following table lists the bitwise operators and their effects:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise AND"),(0,r.kt)("td",{parentName:"tr",align:null},"Each resulting bit is the logical AND of the bits in the two operands. Here is the logical AND table:",(0,r.kt)("li",null,"1 & 1 --\x3e 1"),(0,r.kt)("li",null,"0 & 1 --\x3e 0"),(0,r.kt)("li",null,"1 & 0 --\x3e 0"),(0,r.kt)("li",null,"0 & 0 --\x3e 0"),"In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise OR (inclusive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:",(0,r.kt)("li",null,"1 ","|"," 1 --\x3e 1"),(0,r.kt)("li",null,"0 ","|"," 1 --\x3e 1"),(0,r.kt)("li",null,"1 ","|"," 0 --\x3e 1"),(0,r.kt)("li",null,"0 ","|"," 0 --\x3e 0"),"In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise OR (exclusive)"),(0,r.kt)("td",{parentName:"tr",align:null},"Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:",(0,r.kt)("li",null,"1 \\^","|"," 1 --\x3e 0"),(0,r.kt)("li",null,"0 \\^","|"," 1 --\x3e 1"),(0,r.kt)("li",null,"1 \\^","|"," 0 --\x3e 1"),(0,r.kt)("li",null,"0 \\^","|"," 0 --\x3e 0"),"In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Left Bit Shift"),(0,r.kt)("td",{parentName:"tr",align:null},"The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. The bits on the left are lost and the new bits on the right are set to 0. ",(0,r.kt)("strong",{parentName:"td"},"Note:")," Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Right Bit Shift"),(0,r.kt)("td",{parentName:"tr",align:null},"The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.",(0,r.kt)("strong",{parentName:"td"},"Note:")," Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bit Set"),(0,r.kt)("td",{parentName:"tr",align:null},"The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. The other bits are left unchanged.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bit Clear"),(0,r.kt)("td",{parentName:"tr",align:null},"The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. The other bits are left unchanged.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bit Test"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Returns False if, in the first operand, the bit whose number is indicated by the second operand is equal to 0.")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise AND"),(0,r.kt)("td",{parentName:"tr",align:null},"0x0000FFFF & 0xFF00FF00"),(0,r.kt)("td",{parentName:"tr",align:null},"0x0000FF00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise OR (inclusive)"),(0,r.kt)("td",{parentName:"tr",align:null},"0x0000FFFF ","|"," 0xFF00FF00"),(0,r.kt)("td",{parentName:"tr",align:null},"0xFF00FFFF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bitwise OR (exclusive)"),(0,r.kt)("td",{parentName:"tr",align:null},"0x0000FFFF \\^","|"," 0xFF00FF00"),(0,r.kt)("td",{parentName:"tr",align:null},"0xFF0000FF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Left Bit Shift"),(0,r.kt)("td",{parentName:"tr",align:null},"0x0000FFFF << 8"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00FFFF00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Right Bit Shift"),(0,r.kt)("td",{parentName:"tr",align:null},"0x0000FFFF >> 8"),(0,r.kt)("td",{parentName:"tr",align:null},"0x000000FF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bit Set"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00000000 ?+ 16"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00010000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bit Clear"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00010000 ?- 16"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bit Test"),(0,r.kt)("td",{parentName:"tr",align:null},"0x00010000 ?? 16"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))))}d.isMDXComponent=!0}}]);