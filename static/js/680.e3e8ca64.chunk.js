"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{938:function(e,t,i){i.d(t,{Z:function(){return o}});var n=i(689),r=i(87),s="BackBtn_movie_goback_btn__GYAh9",a=i(184),o=function(){var e,t=null!==(e=(0,n.TH)().state.from)&&void 0!==e?e:"/";return(0,a.jsx)(r.rU,{to:t,className:s,children:"Go back"})}},10:function(e,t,i){i.d(t,{Z:function(){return o}});var n=i(938),r="Error_header_error__8xhVO",s="Error_description_error__n-HWJ",a=i(184),o=function(e){var t=e.message;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{}),(0,a.jsx)("h2",{className:r,children:"Opps something went wrong! Try reloading the page"}),(0,a.jsx)("p",{className:s,children:t})]})}},762:function(e,t,i){i.d(t,{Z:function(){return _}});var n={container:"MovieList_container__sSMe5",movie_list:"MovieList_movie_list__IWl2j",movie_title:"MovieList_movie_title__6L8Eg"},r="MovieItem_movie_item__oWbsm",s="MovieItem_movie_img__JWv8I",a="MovieItem_movie_link__c59zy",o="MovieItem_movie_title__waPE3",c=i(689),l=i(87),m=i(184),u=function(e){var t=e.title,i=e.id,n=e.img,u=(0,c.TH)().pathname;return(0,m.jsx)("li",{className:r,children:(0,m.jsxs)(l.rU,{className:a,to:"/movies/".concat(i),state:{from:u},children:[(0,m.jsx)("img",{className:s,src:"https://image.tmdb.org/t/p/w500"+n,alt:t,loading:"lazy"}),(0,m.jsx)("p",{className:o,children:t})]})})},_=function(e){var t=e.movies,i=e.page,r=Boolean(t.length),s="home"===i?"This is popular movie list in the day:":"This is movie list according to your search:";return(0,m.jsxs)("div",{className:n.container,children:[r&&(0,m.jsx)("h1",{className:n.movite_title,children:s}),(0,m.jsx)("ul",{className:n.movie_list,children:t.map((function(e){var t=e.title,i=e.id,n=e.poster_path;return(0,m.jsx)(u,{title:t,id:i,img:n},i)}))})]})}},680:function(e,t,i){i.r(t);var n=i(861),r=i(439),s=i(757),a=i.n(s),o=i(762),c=i(10),l=i(791),m=i(694),u=i(784),_=i(227),v=i(830),h=i(184);t.default=function(){var e=(0,l.useState)(v.Z.IDLE),t=(0,r.Z)(e,2),i=t[0],s=t[1],d=(0,l.useState)([]),f=(0,r.Z)(d,2),p=f[0],E=f[1];return(0,l.useEffect)((function(){p&&s(v.Z.RESOLVED)}),[p]),(0,l.useEffect)((function(){var e=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(v.Z.PENDING),e.prev=1,e.next=4,(0,_._L)();case 4:t=e.sent,E(t),s(v.Z.RESOLVED),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),m.Notify.failure("Failed to load list of popular movies..."),s(v.Z.REJECTED);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();p.length||e()}),[p.length,E]),(0,h.jsxs)(h.Fragment,{children:[i===v.Z.RESOLVED&&(0,h.jsx)(o.Z,{movies:p,page:"home"}),i===v.Z.PENDING&&(0,h.jsx)(u.Z,{}),i===v.Z.REJECTED&&(0,h.jsx)(c.Z,{message:"Load failed trend movies"})]})}},830:function(e,t){t.Z={IDLE:"idle",PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"}}}]);
//# sourceMappingURL=680.e3e8ca64.chunk.js.map