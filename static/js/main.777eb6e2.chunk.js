(this["webpackJsonpinterview-box"]=this["webpackJsonpinterview-box"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),s=n(16),r=n.n(s),a=(n(22),n(11)),c=n(2),l=(n(23),n(24),n(7)),d=n(0),u=function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("div",{className:"card-header",children:[Object(d.jsxs)("h3",{children:[e.curExp.exprience," yrs"]}),Object(d.jsxs)("h3",{children:[e.curExp.role," "]})]}),Object(d.jsx)(l.b,{to:"/"+e.curExp.id,children:Object(d.jsx)("img",{src:e.curExp.imgUrl})})]},e.curExp.ind)},p=function(e){return Object(d.jsx)("div",{className:"container",children:e.allCards.expList.map((function(e,t){return Object(d.jsx)(u,{curExp:e},t)}))})},h=function(e){return Object(d.jsx)(p,{allCards:e.allPosts})},m=n(9),f=(n(34),function(e){var t=m.expList[e.id];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"post-header",children:[Object(d.jsxs)("div",{children:[t.exprience," yrs"]}),Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:t.website,target:"_black",children:t.company})}),Object(d.jsx)("div",{children:t.role})]}),Object(d.jsx)("ol",{children:t.rounds.map((function(e,t){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:["Round ",t+1,": "]}),Object(d.jsx)("ol",{children:e.questions.map((function(e){return Object(d.jsx)("div",{className:"post-ques",children:e})}))})]})}))})]})}),g=function(e){var t=Object(c.f)();return Object(d.jsx)(f,{id:t.postId})},b=(n(35),function(e){var t=Object(o.useRef)(""),n=Object(o.useState)(""),i=Object(a.a)(n,2),s=i[0],r=i[1];return Object(o.useEffect)((function(){var t=setTimeout((function(){e.filterPosts(s)}),500);return function(){clearTimeout(t)}}),[s]),Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("h2",{children:"Interview Box"})}),Object(d.jsx)(c.a,{path:"/",exact:!0,children:Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{class:"fa fa-search searchIcon"}),Object(d.jsx)("input",{placeholder:"search",type:"search",onChange:function(e){r(e.target.value)},ref:t,value:t.current.value})]})})]})}),j=(n(36),function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("h5",{class:"copyright",children:"Copyright \xa9 2021 by Ashutosh & Jai"}),Object(d.jsxs)("h5",{children:[" ",Object(d.jsx)("a",{href:"https://forms.gle/M1WiEanmjFxmouD38",target:"_blank",children:"Contribute!"})]})]})});var x=function(){var e=Object(o.useState)(m),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{filterPosts:function(e){if(""!=(e=e.toLocaleLowerCase())){var t=m.expList.filter((function(t){return t.company.toLocaleLowerCase().includes(e)||t.role.toLocaleLowerCase().includes(e)||t.exprience.includes(e)}));i({expList:t})}else i({expList:m.expList})}}),Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{path:"/",exact:!0,children:Object(d.jsx)(h,{allPosts:n})}),Object(d.jsx)(c.a,{path:"/:postId",children:Object(d.jsx)(g,{})})]}),Object(d.jsx)(j,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),o(e),i(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(x,{})})}),document.getElementById("root")),y()},9:function(e){e.exports=JSON.parse('{"expList":[{"id":0,"company":"Razarpay","role":"Frontend","exprience":"2","website":"https://razorpay.com/","rounds":[{"questions":["Add greet Method in String prototype.","Implement flatten method without using closure.","How browsers load a Webpage i.e crital rendering path.","Higher order components in react.","Why react over others?","Why redux is helpful and its alternative.","Css positioning.","Difference between Defer and Async used for including scripts in HTML.","What problems does promise solves?","Differnece between css display properties => None, opacity: 0 and visibility: none."]},{"questions":["Implement auto complete search box like google search using API, Implement debouncing as well."]}],"Additional comments":"Interview panel can be more helpfull, interactive and should have empathy with the candidate.","imgUrl":"resources/images/razarpay.png"},{"id":1,"company":"Nykaa","role":"Frontend","exprience":"3","website":"https://nykaa.com/","rounds":[{"questions":["Write a react componenet for Button.All the buttons have same padding, font-size. Font-color may vary depending on button variant","output:\\n for (var i = 0; i < 5; i++) {\\nsetTimeout(function() { console.log(i); }, i * 100 );\\n}\\n","output:\\n var x = { foo : 1};\\n var output = (function(){\\n delete x.foo;\\n return x.foo;\\n })();\\n console.log(output);\\n","Output:\\n var Employee = {\\n company: \'xyz\'\\n }\\n var emp1 = Object.create(Employee);\\n delete emp1.company;\\n console.log(emp1.company);\\n","Output\\n(function(){\\n  var a = b = 3;\\n })();\\n console.log(\'a defined? \' + (typeof a !== \'undefined\'));\\n console.log(\'b defined? \' + (typeof b !== \'undefined\'));\\n","Write a function : mul(4)(3)(4)"]}],"Additional comments":"late interview feedback","imgUrl":"resources/images/nykaa.png"},{"id":2,"company":"Ixigo","role":"Frontend","exprience":"3","website":"https://ixigo.com/","rounds":[{"questions":["Given a nested object, get the num of obj elements ?","write setInterval\u2019s polyfill using setTimeout.","Create a method \'divide\' which can take N number of arguments and can be called M times until being called without any arguments \\n divide(1,2....N arguments)[(1,2,3,4,....N)...M times]()\\n e.g : divide(1000)(10)() // => 100 \\n","What are some Web Performance optimization tehniques ?"]}],"Additional comments":"Nice Experience","imgUrl":"resources/images/ixigo.png"},{"id":3,"company":"Syfe","role":"Frontend","exprience":"2.5","website":"https://syfe.com/","rounds":[{"questions":["Given an array [\u201c123f\u201d, \u201c1dsa12\u201d, \u201c1212ds\u201d, \u201c65fd\u201d, \u201csadfa\u201d, \u201casdasd\u201d] consider digits only and give result array containing numbers only in optimal way [123, 112, 1212, 65] .","How does a promise work ?","Write polyfill for promises ?","What is Asyn await ?","Output: \\n(function() {\\n     console.log(1);\\n    setTimeout(function(){console.log(2)}, 1000);\\n    setTimeout(function(){console.log(3)}, 0);\\n     console.log(4);\\n })();\\n"]},{"questions":["What is HTTP2 ?","What is CORS ?","Given a deep nested object. Write a function to check how deeply is it nested?","Write a program to reverse String in place ignoring digits : \'abc12sdsf3sfds3\' -> \'cba12fsds3sdfs\' (reverse in place, delimeted by number)."]}],"Additional comments":"Offer was expected but no closure given","imgUrl":"resources/images/syfe.png"},{"id":4,"company":"Airtel","role":"Frontend","exprience":"3","website":"https://airtel.com/","rounds":[{"questions":["Write a Balanced parentheses check program","What are different ways to Ways to optimise react apps ?","When do components rerender ?","Write function for String permutations ?"]}],"Additional comments":"React part was very deep and difficult","imgUrl":"resources/images/airtel.png"},{"id":5,"company":"Hackerrank","role":"Frontend","exprience":"2","website":"https://hackerrank.com/","rounds":[{"questions":["Implement a react Editor Wrapper component and store data in local storage. Rerender the component when user Types some new text.","Implement Conditional Rendering of some component based on some given conditions.","Implement Flex boxes with left and right most box with no margin or padding."]},{"questions":["Current work and processes used.","What is the most difficult project you have worked on?","What is the Tech stack you are currently working on.","Why do you want to join Hackerrank."]},{"questions":["Lets say you have a list of Tasks and we want to run these tasks one after the other. Suppose we want to have start, stop and resume functionality. Implement a scheduler.","What are some design patterns you have worked on ?","Lets say in an online editor when you are writing code in a specific language say java. Some Specific words like int gets highlighted. How do you make sure only this part of the DOM elements colour gets updated and other things don\'t rerender?"]}],"Additional comments":"Interviews were well organized and all people were very helpfull","imgUrl":"resources/images/hackerrank.png"},{"id":6,"company":"Postman","role":"Fullstack","exprience":"1","website":"https://postman.com/","rounds":[{"questions":["What is the current Tech Stack you are working on","How can we optimise a website.","How to design a scalable website","What is the most challenging project ypu have worked on?","Why do you want to join postman?"]},{"questions":["How does the web works?","How to know if the response is JSON or HTML from server","Explain Event loop.","How Will implement search engine like google.","Why React , How is it better?"]}],"Additional comments":"Not much","imgUrl":"resources/images/postman.png"},{"id":7,"company":"Olx","role":"Frontend","exprience":"3","website":"https://olx.com/","rounds":[{"questions":["Print all the permutation of a string.","Take an input field. When you type in the input field it should do an API call. To simulate API calls you can use the setTimeout function. On each keystroke you are doing api call, you have to optimize,  \u201ccalling API call\u201d. You will do an API call if the time difference between keystrokes is more than 300ms.","Arrange 3 Divs in such a way that each div should be horizontally and vertically middle to each other.","Explain event bubbling and capturing.","Explain event loop.","What are some of the new ES6 features introduced."]}],"Additional comments":"Expected a callback","imgUrl":"resources/images/olx.png"},{"id":8,"company":"pocketpills","role":"Frontend","exprience":"2","website":"https://pocketpills.com/","rounds":[{"questions":["Find the number of subarrays having sum as 0.","Find the arear of intersection of two rectangles given thier vertex coordinate."]},{"questions":["Write Reduce polyfill.","Write a function sum(1)(2)(3)() which gives a output of 6 in this case."]}],"Additional comments":"No feedback Given!","imgUrl":"resources/images/pocketpills.png"}]}')}},[[37,1,2]]]);
//# sourceMappingURL=main.777eb6e2.chunk.js.map