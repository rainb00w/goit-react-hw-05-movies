"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[517],{4518:function(t,e,n){n.d(e,{IR:function(){return l},Np:function(){return o},VR:function(){return a},kP:function(){return c},ns:function(){return u}});var r=n(4569),s="?api_key=ad8c6c4dd7f8a685c9c739255442ccd5",i=n.n(r)().create({baseURL:"https://api.themoviedb.org/3/"});function a(){return i("trending/movie/day".concat(s,"&page=1")).then((function(t){if(!(t.status>=200&&t.status<300))throw Error(t.statusText);return t}))}function c(t){return i("search/movie".concat(s,"&query=").concat(t,"&page=1")).then((function(t){if(!(t.status>=200&&t.status<300))throw Error(t.statusText);return t}))}function o(t){return i("movie/".concat(t).concat(s,"&language=en-US")).then((function(t){if(!(t.status>=200&&t.status<300))throw Error(t.statusText);return t}))}function u(t){return i("/movie/".concat(t,"/credits").concat(s)).then((function(t){if(!(t.status>=200&&t.status<300))throw Error(t.statusText);return t}))}function l(t){return i("/movie/".concat(t,"/reviews").concat(s,"&language=en-US&page=1")).then((function(t){if(!(t.status>=200&&t.status<300))throw Error(t.statusText);return t}))}},951:function(t,e,n){n.r(e);var r=n(885),s=n(2791),i=n(6871),a=n(501),c=n(4518),o=n(451),u=n(184);e.default=function(){var t,e,n=(0,s.useState)(null),l=(0,r.Z)(n,2),d=l[0],h=l[1],f=(0,s.useState)(null),v=(0,r.Z)(f,2),m=v[0],x=v[1],p=(0,i.UO)().itemId,j=(0,i.TH)();console.log(d),(0,s.useEffect)((function(){d||c.Np(p).then((function(t){return h(t.data)})).catch((function(t){console.log(t),x(t)}))}),[p,d]);var g=null!==(t=null===j||void 0===j||null===(e=j.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/";return(0,u.jsxs)("div",{className:o.Z.homeList,children:[(0,u.jsx)("div",{children:(0,u.jsx)(a.rU,{to:g,className:o.Z.btnStyle,children:"<- Go Back"})}),(0,u.jsxs)("div",{className:o.Z.movieInfo,children:[m&&(0,u.jsx)("div",{children:"There are no such movie !"}),d&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("img",{alt:"Movie Poster",src:"https://image.tmdb.org/t/p/w500/".concat(d.poster_path),width:"200px"}),(0,u.jsxs)("div",{className:o.Z.movieTextInfo,children:[(0,u.jsxs)("h3",{children:[d.title," (",d.release_date.substring(0,4),")"]}),(0,u.jsxs)("p",{children:["User score: ",10*d.vote_average," %"]}),(0,u.jsx)("h4",{children:"Overview"}),(0,u.jsx)("p",{children:d.overview}),(0,u.jsx)("h4",{children:"Genres"}),d.genres.map((function(t){return"".concat(t.name,"  ")}))]})]})]}),(0,u.jsxs)("div",{className:o.Z.additionalInfo,children:[(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"Cast",state:{from:g},className:o.Z.movieLinks,children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"Reviews",state:{from:g},className:o.Z.movieLinks,children:"Reviews"})})]}),(0,u.jsx)(i.j3,{})]})}}}]);
//# sourceMappingURL=517.1a18c47d.chunk.js.map