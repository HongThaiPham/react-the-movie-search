(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(4),l=a.n(o),i=(a(11),function(e){return c.a.createElement("header",{className:"App-header"},c.a.createElement("h2",null,e.text))}),s=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),o=a[0],l=a[1];return c.a.createElement("form",{className:"search"},c.a.createElement("input",{value:o,onChange:function(e){l(e.target.value)},type:"text"}),c.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(o),l("")},type:"submit",value:"SEARCH"}))},u=function(e){var t=e.movie,a="N/A"===t.Poster?"https://picsum.photos/200/300":t.Poster;return c.a.createElement("div",{className:"movie"},c.a.createElement("h2",null,t.Title),c.a.createElement("div",null,c.a.createElement("img",{width:"200",alt:"The movie titled: ".concat(t.Title),src:a})),c.a.createElement("p",null,"(",t.Year,")"))},E=a(2),m={loading:!0,movies:[],errorMessage:null},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIES_REQUEST":return Object(E.a)({},e,{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return Object(E.a)({},e,{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return Object(E.a)({},e,{loading:!1,errorMessage:t.error});default:return e}},S="https://omdbapi.com/?s=man&apikey=19f6c48c";var d=document.getElementById("root");l.a.render(c.a.createElement(function(){var e=Object(r.useReducer)(p,m),t=Object(n.a)(e,2),a=t[0],o=t[1];Object(r.useEffect)(function(){fetch(S).then(function(e){return e.json()}).then(function(e){o({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search})})},[]);var l=a.movies,E=a.errorMessage,d=a.loading;return c.a.createElement("div",{className:"App"},c.a.createElement(i,{text:"THE MOVIE SEARCH WITH REACT HOOK"}),c.a.createElement(s,{search:function(e){o({type:"SEARCH_MOVIES_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=19f6c48c")).then(function(e){return e.json()}).then(function(e){"True"===e.Response?o({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search}):o({type:"SEARCH_MOVIES_FAILURE",payload:e.Error})})}}),c.a.createElement("p",{className:"App-intro"},"Sharing a few of our favourite movies"),c.a.createElement("div",{className:"movies"},d&&!E?c.a.createElement("span",null,"loading ..."):E?c.a.createElement("div",{className:"errorMessage"},E):l.map(function(e,t){return c.a.createElement(u,{movie:e,key:"".concat(t,"=").concat(e.Title)})})))},null),d)},5:function(e,t,a){e.exports=a(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.473c3e84.chunk.js.map