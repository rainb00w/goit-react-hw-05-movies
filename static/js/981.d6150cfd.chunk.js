"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[981],{7589:function(t,n,e){e.d(n,{IR:function(){return f},Np:function(){return s},VR:function(){return o},kP:function(){return a},ns:function(){return i}});var r=e(4569),u="?api_key=ad8c6c4dd7f8a685c9c739255442ccd5",c=e.n(r)().create({baseURL:"https://api.themoviedb.org/3/"});function o(){return c("trending/movie/day".concat(u,"&page=1")).then((function(t){if(!(t.status>=200&&t.status<300))throw Error(t.statusText);return t}))}function a(t){return c("search/movie".concat(u,"&query=").concat(t,"&page=1")).then((function(t){if(!(t.status>=200&&t.status<300))throw Error(t.statusText);return t}))}function s(t){return c("movie/".concat(t).concat(u,"&language=en-US")).then((function(t){if(!(t.status>=200&&t.status<300))throw Error(t.statusText);return t}))}function i(t){return c("/movie/".concat(t,"/credits").concat(u)).then((function(t){if(!(t.status>=200&&t.status<300))throw Error(t.statusText);return t}))}function f(t){return c("/movie/".concat(t,"/reviews").concat(u,"&language=en-US&page=1")).then((function(t){if(!(t.status>=200&&t.status<300))throw Error(t.statusText);return t}))}},5981:function(t,n,e){e.r(n);var r=e(885),u=e(2791),c=e(6871),o=e(501),a=e(7589),s=e(184);n.default=function(){var t=(0,u.useState)(null),n=(0,r.Z)(t,2),e=n[0],i=n[1],f=(0,c.TH)();return(0,u.useEffect)((function(){a.VR().then((function(t){return i(t.data.results)})).catch((function(t){return console.log(t)}))}),[]),(0,s.jsx)(s.Fragment,{children:e&&e.map((function(t){return(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"/movies/".concat(t.id),state:{from:f},children:t.title})},t.id)}))})}}}]);
//# sourceMappingURL=981.d6150cfd.chunk.js.map