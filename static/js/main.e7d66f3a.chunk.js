(this["webpackJsonpbeer-shop"]=this["webpackJsonpbeer-shop"]||[]).push([[0],{48:function(e,t,c){},50:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);c(0);var n=c(14),a=c.n(n),r=c(7),s=c(18),b=c(4),o=(c(48),c(3)),i=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Hey, hey, hey"})})},l=c(13),j=c(2),u=c(19),O=c(5),d=c(16),m=(c(50),c(17)),p=c.n(m),f=c(24),h=c(37),x=c(38),v=c(39),g=c.n(v),y=function(){function e(){Object(h.a)(this,e)}return Object(x.a)(e,null,[{key:"getAllBeer",value:function(){var e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.punkapi.com/v2/beers?per_page=80");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),_="GET_ALL_BEER",E="RESHUFFLE_COLUMN",N="RESHUFFLE_COLUMNS",k="ADD_ALL",L="REMOVE_ALL",R="FILTER_BEER",I="SET_LOAD",B="SET_CURRENT_BEER",w="SET_BEER",C="SET_READY",A=function(e){return{type:w,payload:e}},S=function(e){return{type:N,payload:e}},T=function(){return{type:I}},D=function(){return{type:C}},H=function(e){return{type:B,payload:e}},F=function(e){var t=e.item,c=e.index,n=e.columnId,a=Object(r.d)((function(e){return e.beer})).columns,s=Object(r.c)();return Object(o.jsx)(d.b,{draggableId:t.name,index:c,children:function(e,r){return Object(o.jsxs)("div",Object(j.a)(Object(j.a)(Object(j.a)({className:"beer",ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{style:Object(j.a)({backgroundColor:r.isDragging?"#436e6d":"#69c2c0"},e.draggableProps.style),children:[Object(o.jsx)("span",{className:"beer__name",children:t.name}),Object(o.jsx)("button",{className:"beer__btn",onClick:function(){return function(e,t){var c,n=Object.values(a).filter((function(t){return t.name!==e}))[0],r=Object(O.a)(a[e].items),b=Object(O.a)(n.items),o=r.splice(t,1),i=Object(u.a)(o,1)[0];b.push(i);var d=Object(j.a)(Object(j.a)({},a),{},(c={},Object(l.a)(c,a[e].name,Object(j.a)(Object(j.a)({},a[e]),{},{items:r})),Object(l.a)(c,n.name,Object(j.a)(Object(j.a)({},n),{},{items:b})),c));s(H(d.beer.items)),s(S(d)),"beer"===e&&s(A(1))}(n,c)},children:Object(o.jsx)("i",{className:"beer"===n?"fas fa-shopping-cart":"fas fa-trash"})})]}))}},t.id)},U=(c(70),function(e){var t=e.columnId,c=e.column,n=Object(r.c)(),a=function(e){n("beer"===e?{type:k}:{type:L})},s=function(e){(e.target.scrollTop+e.target.clientHeight)/e.target.scrollHeight>.75&&n(A(10))};return Object(o.jsxs)("div",{className:"column",children:[Object(o.jsx)("button",{disabled:!c.items.length,className:"column__btn btn__".concat(t),onClick:function(){return a(t)},children:"beer"===t?"Add all":"Remove all"}),Object(o.jsx)("div",{className:"column__wrapper",children:Object(o.jsx)(d.c,{droppableId:t,children:function(e,n){return Object(o.jsxs)("div",Object(j.a)(Object(j.a)({onScroll:s,className:"column__item",style:{background:n.isDraggingOver?"lightblue":"lightgrey"},ref:e.innerRef},e.droppableProps),{},{children:[c.items.map((function(e,c){return Object(o.jsx)(F,{item:e,index:c,columnId:t},e.id)})),e.placeholder]}))}})})]},t)}),P=(c(71),function(){return Object(o.jsx)("div",{className:"loader"})}),M=function(){var e=Object(r.d)((function(e){return e.beer})).columns,t=Object(r.d)((function(e){return e.app})),c=t.isLoading,n=t.isReady,a=Object(r.c)(),s=function(e,t){if(e.destination){var c=e.source,n=e.destination;if(c.droppableId!==n.droppableId){var r,s=t[c.droppableId],b=t[n.droppableId],o=Object(O.a)(s.items),i=Object(O.a)(b.items),d=o.splice(c.index,1),m=Object(u.a)(d,1)[0];i.splice(n.index,0,m);var p=Object(j.a)(Object(j.a)({},t),{},(r={},Object(l.a)(r,c.droppableId,Object(j.a)(Object(j.a)({},s),{},{items:o})),Object(l.a)(r,n.droppableId,Object(j.a)(Object(j.a)({},b),{},{items:i})),r));a(H(p.beer.items)),a(S(p))}else{var f=t[c.droppableId],h=c.droppableId,x=Object(O.a)(f.items),v=x.splice(c.index,1),g=Object(u.a)(v,1)[0];x.splice(n.index,0,g);var y=Object(j.a)(Object(j.a)({},f),{},{items:x});a(function(e,t){return{type:E,payload:{columnName:e,column:t}}}(h,y))}}},b=function(){a(function(){var e=Object(f.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(T()),e.next=4,y.getAllBeer();case 4:c=e.sent,t({type:_,payload:c}),t(A(20)),t(T()),t(D()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())};return c?Object(o.jsx)(P,{}):Object(o.jsx)("div",{className:"content",children:n?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("input",{className:"content__search",placeholder:"Search",onChange:function(e){var t=e.target.value;a(function(e){return{type:R,payload:e}}(t))}}),Object(o.jsx)("div",{className:"catalog",children:Object(o.jsx)(d.a,{onDragEnd:function(t){return s(t,e)},children:Object.entries(e).map((function(e){var t=Object(u.a)(e,2),c=t[0],n=t[1];return Object(o.jsx)(U,{columnId:c,column:n},c)}))})})]}):Object(o.jsx)("button",{className:"content__btn",onClick:function(){return b()},children:"Load catalog"})})},J=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Very interested information about our shop"})})},V=(c(72),c(73),function(){return Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsx)(s.b,{className:"nav__link",to:"/",children:"Home"}),Object(o.jsx)(s.b,{className:"nav__link",to:"/catalog",children:"Catalog"}),Object(o.jsx)(s.b,{className:"nav__link",to:"/about",children:"About"})]})}),G=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{className:"header__name",children:"Shop name"}),Object(o.jsx)(V,{})]})},Y=function(){return Object(o.jsxs)(s.a,{children:[Object(o.jsx)(G,{}),Object(o.jsxs)(b.d,{children:[Object(o.jsx)(b.b,{path:"/",component:i,exact:!0}),Object(o.jsx)(b.b,{path:"/catalog",component:M,exact:!0}),Object(o.jsx)(b.b,{path:"/about",component:J,exact:!0}),Object(o.jsx)(b.a,{to:"/"})]})]})},q=c(11),z=c(40),K={columns:{beer:{name:"beer",items:[]},basket:{name:"basket",items:[]}},allBeer:[],currentBeer:[]},Q={isLoading:!1,isReady:!1},W=Object(q.c)({beer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(j.a)(Object(j.a)({},e),{},{allBeer:Object(O.a)(t.payload)});case w:var c=e.allBeer.splice(0,t.payload);return Object(j.a)(Object(j.a)({},e),{},{columns:Object(j.a)(Object(j.a)({},e.columns),{},{beer:Object(j.a)(Object(j.a)({},e.columns.beer),{},{items:[].concat(Object(O.a)(e.columns.beer.items),Object(O.a)(c))})}),currentBeer:[].concat(Object(O.a)(e.currentBeer),Object(O.a)(c))});case E:return Object(j.a)(Object(j.a)({},e),{},{columns:Object(j.a)(Object(j.a)({},e.columns),{},Object(l.a)({},t.payload.columnName,Object(j.a)({},t.payload.column)))});case N:return Object(j.a)(Object(j.a)({},e),{},{columns:Object(j.a)({},t.payload)});case k:return Object(j.a)(Object(j.a)({},e),{},{columns:{beer:Object(j.a)(Object(j.a)({},e.columns.beer),{},{items:[]}),basket:Object(j.a)(Object(j.a)({},e.columns.basket),{},{items:[].concat(Object(O.a)(e.columns.basket.items),Object(O.a)(e.columns.beer.items))})}});case L:return Object(j.a)(Object(j.a)({},e),{},{columns:{beer:Object(j.a)(Object(j.a)({},e.columns.beer),{},{items:[].concat(Object(O.a)(e.columns.beer.items),Object(O.a)(e.columns.basket.items))}),basket:Object(j.a)(Object(j.a)({},e.columns.basket),{},{items:[]})}});case R:return Object(j.a)(Object(j.a)({},e),{},{columns:Object(j.a)(Object(j.a)({},e.columns),{},{beer:Object(j.a)(Object(j.a)({},e.columns.beer),{},{items:e.currentBeer.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())}))})})});case B:return Object(j.a)(Object(j.a)({},e),{},{currentBeer:Object(O.a)(t.payload)});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!e.isLoading});case C:return Object(j.a)(Object(j.a)({},e),{},{isReady:!0});default:return e}}}),X=Object(q.e)(W,Object(q.d)(Object(q.a)(z.a)));a.a.render(Object(o.jsx)(r.a,{store:X,children:Object(o.jsx)(Y,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.e7d66f3a.chunk.js.map