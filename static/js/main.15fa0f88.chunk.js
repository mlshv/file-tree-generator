(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t,n){e.exports=n(253)},252:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var r=n(54),a=n(0),c=n.n(a),o=n(13),i=n.n(o),l=n(124),u=n(115),d=n(32),p=n(123),s=n.n(p);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m=function(e){return e.treeIndex},f=function(e,t,n,r){return c.a.createElement("input",{value:e.title,onChange:function(a){var c=a.target.value;t(Object(d.b)({treeData:n,path:r,getNodeKey:m,newNode:v({},e,{title:c})}))}})},b=function(e,t,n,r){var a=c.a.createElement("button",{key:"remove",onClick:function(){return t(Object(d.d)({treeData:n,path:r,getNodeKey:m}))}},"rm"),o=c.a.createElement("button",{onClick:function(){return t(Object(d.a)({treeData:n,parentKey:r[r.length-1],expandParent:!0,getNodeKey:m,newNode:{title:"",isDirectory:!0}}).treeData)}},"mkdir"),i=c.a.createElement("button",{onClick:function(){return t(Object(d.a)({treeData:n,parentKey:r[r.length-1],expandParent:!0,getNodeKey:m,newNode:{title:""}}).treeData)}},"touch");return e.isDirectory?[o,i,a]:[a]};var g=function(e){var t=e.value,n=e.onChange;return c.a.createElement("div",null,c.a.createElement(d.c,{isVirtualized:!1,treeData:t,onChange:n,theme:s.a,canNodeHaveChildren:function(e){return e.isDirectory},generateNodeProps:function(e){var r=e.node,a=e.path;return{icons:r.isDirectory?[r.expanded?"\ud83d\udcc2":"\ud83d\udcc1"]:["\ud83d\udcc4"],buttons:b(r,n,t,a),title:f(r,n,t,a)}}}),c.a.createElement("button",{onClick:function(){return n([].concat(Object(l.a)(t),[{title:"",isDirectory:!0}]))}},"mkdir"))};function y(e,t,n){return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;var a=arguments.length>3?arguments[3]:void 0;var c=arguments.length>4?arguments[4]:void 0;var o="";var i=0===r;t.forEach(function(l,u){var d=t.length>u+1,p=function(e,t,n,r){var a="";return e||(a+=t,a+=n?r?"\u251c\u2500 ":"\u251c\u2500\u2500 ":r?"\u2514\u2500 ":"\u2514\u2500\u2500 "),a}(i,n,d,c),s=function(e,t,n,r){var a=r?"  ":"   ",c=e||n?"":" ";return t+(n?"|":c)+(e?"":a)}(i,n,d,c);o+=p+function(e,t){return t?"".concat(e.isDirectory?"\ud83d\udcc2":"\ud83d\udcc4").concat(e.title):e.title}(l,a)+"\n",o+=e(l.children,s,r+1,a,c)});return o}(e,void 0,void 0,t,n)}var E=function(e){var t=e.value,n=e.withEmoji,r=e.isCompact;return c.a.createElement("pre",{style:{lineHeight:"1.2"}},y(t,n,r))};n(252);var j=document.getElementById("root");i.a.render(c.a.createElement(function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],o=c.a.useState(!1),i=Object(r.a)(o,2),l=i[0],u=i[1],d=c.a.useState([{title:"root",isDirectory:!0,expanded:!0,children:[{title:"hello",isDirectory:!0,expanded:!0,children:[{title:"bar.js"},{title:"baz.js"},{title:"hello2",isDirectory:!0,expanded:!0,children:[{title:"\u041c\u0430\u0440\u0443\u0441\u044f.jpg"}]}]},{title:"world.js"}]}]),p=Object(r.a)(d,2),s=p[0],h=p[1];return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"File tree generator"),c.a.createElement("p",{className:"description"},"Inspired by ",c.a.createElement("code",null,"tree"),"."),c.a.createElement("h2",null,"Structure"),c.a.createElement(g,{value:s,onChange:h}),c.a.createElement("h2",null,"Result"),c.a.createElement("label",{className:"option"},c.a.createElement("input",{type:"checkbox",checked:n,onChange:function(e){return a(e.target.checked)}}),"Emoji"),c.a.createElement("label",{className:"option"},c.a.createElement("input",{type:"checkbox",checked:l,onChange:function(e){return u(e.target.checked)}}),"Compact"),c.a.createElement(E,{value:s,withEmoji:n,isCompact:l}))},null),j)}},[[125,1,2]]]);
//# sourceMappingURL=main.15fa0f88.chunk.js.map