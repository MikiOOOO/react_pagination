(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,c,a){"use strict";a.r(c);var t=a(4),n=a.n(t),r=a(3),i=a(1);a(9);var l=a(0),s=function(e){var c=e.total,a=e.perPage,t=e.currentPage,n=e.onPageChange,r=Math.ceil(c/a),i=function(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}(1,c).map((function(e){return"Item ".concat(e)})),s=new Array(r).fill(0).map((function(e,c){return c+1})),o=1===t,j=t===r,d=(t-1)*a,u=t*a;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("ul",{className:"pagination",children:[Object(l.jsx)("li",{className:"page-item ".concat(o&&"disabled"),children:Object(l.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":o,onClick:function(){return!o&&n(t-1)},children:"\xab"})}),s.map((function(e){return Object(l.jsx)("li",{className:"page-item ".concat(t===e&&"active"),children:Object(l.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},e)})),Object(l.jsx)("li",{className:"page-item ".concat(j&&"disabled"),children:Object(l.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":j,onClick:function(){return!j&&n(t+1)},children:"\xbb"})})]}),Object(l.jsx)("ul",{children:i.slice(d,u).map((function(e){return Object(l.jsx)("li",{"data-cy":"item",children:e})}))})]})},o=function(){var e=Object(i.useState)(1),c=Object(r.a)(e,2),a=c[0],t=c[1],n=Object(i.useState)(5),o=Object(r.a)(n,2),j=o[0],d=o[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Items with Pagination"}),Object(l.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(a," (items ").concat(function(){var e=a*j-j,c=e+j>42?42:e+j;return"".concat(e+1," - ").concat(c)}()," of ").concat(42,")")}),Object(l.jsxs)("div",{className:"form-group row",children:[Object(l.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(l.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:j,onChange:function(e){var c;+(c=e.target.value)!==j&&(d(+c),t(1))},children:[Object(l.jsx)("option",{value:"3",children:"3"}),Object(l.jsx)("option",{value:"5",children:"5"}),Object(l.jsx)("option",{value:"10",children:"10"}),Object(l.jsx)("option",{value:"20",children:"20"})]})}),Object(l.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(l.jsx)(s,{total:42,perPage:j,currentPage:a,onPageChange:function(e){t(e)}})]})};n.a.render(Object(l.jsx)(o,{}),document.getElementById("root"))},9:function(e,c,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.ca7b24c7.chunk.js.map