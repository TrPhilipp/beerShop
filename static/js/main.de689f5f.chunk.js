(this["webpackJsonpbeer-shop"]=this["webpackJsonpbeer-shop"]||[]).push([[0],{20:function(e,t,n){e.exports={column:"Column_column__neguW",column__item:"Column_column__item__25jZl",column__btn:"Column_column__btn__1L5KE",btn__beer:"Column_btn__beer__zbCzY",btn__basket:"Column_btn__basket__30Uxz"}},22:function(e,t,n){e.exports={App:"App_App__ZNfHp",content__btn:"App_content__btn__2AxPm",search__wrapper:"App_search__wrapper__1xUMI"}},24:function(e,t,n){e.exports={nav:"Nav_nav__2u_bp",nav__link:"Nav_nav__link__2dGy0"}},28:function(e,t,n){e.exports={beer:"Beer_beer__3-8-7",beer__name:"Beer_beer__name__3YgdQ",beer__btn:"Beer_beer__btn__uc0Q4"}},33:function(e,t,n){e.exports={header:"Header_header__1p84I",header__name:"Header_header__name__1qSiy"}},45:function(e,t,n){e.exports={loader:"Loader_loader__3ecB3",spin:"Loader_spin__17RkS"}},46:function(e,t,n){e.exports={search:"Search_search__zpill"}},47:function(e,t,n){e.exports={catalog:"BeerCatalog_catalog__1Rvw9"}},78:function(e,t,n){"use strict";n.r(t);n(0);var a=n(14),c=n.n(a),r=n(5),s=n(18),o=n(4),b=n(22),i=n.n(b),l=n(3),u=function(){return Object(l.jsx)("h2",{children:"Hey, hey, hey"})},j=n(17),O=n.n(j),d=n(26),p=n(42),m=n(43),_=n(44),h=n.n(_),f=function(){function e(){Object(p.a)(this,e)}return Object(m.a)(e,null,[{key:"getAllBeer",value:function(){var e=Object(d.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.punkapi.com/v2/beers?per_page=80");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),x="GET_ALL_BEER",v="RESHUFFLE_COLUMN",g="RESHUFFLE_COLUMNS",y="ADD_ALL",N="REMOVE_ALL",k="FILTER_BEER",E="SET_LOAD",L="SET_CURRENT_BEER",B="SET_BEER",R="SET_READY",C=function(e){return{type:B,payload:e}},I=function(e){return{type:g,payload:e}},A=function(){return{type:E}},w=function(){return{type:R}},S=function(e){return{type:L,payload:e}},H=n(45),T=n.n(H),D=function(){return Object(l.jsx)("div",{className:T.a.loader})},F=n(46),U=n.n(F),P=function(){var e=Object(r.d)((function(e){return e.beer.columns})).beer,t=Object(r.c)();return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",{className:U.a.search,placeholder:"Search",onChange:function(n){if(e.items.length){var a=n.target.value;t(function(e){return{type:k,payload:e}}(a))}}})})},z=n(13),M=n(2),Y=n(19),G=n(6),J=n(16),Q="beer",V="Add all",Z="Remove all",q="#436e6d",K="#69c2c0",W=n(28),X=n.n(W),$=function(e){var t=e.item,n=e.index,a=e.columnId,c=Object(r.d)((function(e){return e.beer})).columns,s=Object(r.c)();return Object(l.jsx)(J.b,{draggableId:t.name,index:n,children:function(e,r){return Object(l.jsxs)("div",Object(M.a)(Object(M.a)(Object(M.a)({className:X.a.beer,ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{style:Object(M.a)({backgroundColor:r.isDragging?q:K},e.draggableProps.style),children:[Object(l.jsx)("span",{className:X.a.beer__name,children:t.name}),Object(l.jsx)("button",{className:X.a.beer__btn,onClick:function(){return function(e,t){var n,a=Object.values(c).filter((function(t){return t.name!==e}))[0],r=Object(G.a)(c[e].items),o=Object(G.a)(a.items),b=r.splice(t,1),i=Object(Y.a)(b,1)[0];o.push(i);var l=Object(M.a)(Object(M.a)({},c),{},(n={},Object(z.a)(n,c[e].name,Object(M.a)(Object(M.a)({},c[e]),{},{items:r})),Object(z.a)(n,a.name,Object(M.a)(Object(M.a)({},a),{},{items:o})),n));s(S(l.beer.items)),s(I(l)),e===Q&&s(C(1))}(a,n)},children:Object(l.jsx)("i",{className:a===Q?"fas fa-shopping-cart":"fas fa-trash"})})]}))}},t.id)},ee=n(20),te=n.n(ee),ne=function(e){var t=e.columnId,n=e.column,a=Object(r.c)(),c=[te.a.column__btn,te.a["btn__".concat(t)]],s=function(e){a(e!==Q?{type:N}:{type:y})},o=function(e){t===Q&&function(e){return(e.target.scrollTop+e.target.clientHeight)/e.target.scrollHeight>.75}(e)&&a(C(10))};return Object(l.jsxs)("div",{className:te.a.column,children:[Object(l.jsx)("button",{disabled:!n.items.length,className:c.join(" "),onClick:function(){return s(t)},children:t===Q?V:Z}),Object(l.jsx)("div",{className:te.a.column__wrapper,children:Object(l.jsx)(J.c,{droppableId:t,children:function(e,a){return Object(l.jsxs)("div",Object(M.a)(Object(M.a)({onScroll:o,className:te.a.column__item,style:{background:a.isDraggingOver?"lightblue":"lightgrey"},ref:e.innerRef},e.droppableProps),{},{children:[n.items.map((function(e,n){return Object(l.jsx)($,{item:e,index:n,columnId:t},e.id)})),e.placeholder]}))}})})]},t)},ae=n(47),ce=n.n(ae),re=function(){var e=Object(r.d)((function(e){return e.beer})).columns,t=Object(r.c)(),n=function(e,n){if(e.destination){var a=e.source,c=e.destination;if(a.droppableId!==c.droppableId){var r,s=n[a.droppableId],o=n[c.droppableId],b=Object(G.a)(s.items),i=Object(G.a)(o.items),l=b.splice(a.index,1),u=Object(Y.a)(l,1)[0];i.splice(c.index,0,u);var j=Object(M.a)(Object(M.a)({},n),{},(r={},Object(z.a)(r,a.droppableId,Object(M.a)(Object(M.a)({},s),{},{items:b})),Object(z.a)(r,c.droppableId,Object(M.a)(Object(M.a)({},o),{},{items:i})),r));return t(S(j.beer.items)),void t(I(j))}var O=n[a.droppableId],d=a.droppableId,p=Object(G.a)(O.items),m=p.splice(a.index,1),_=Object(Y.a)(m,1)[0];p.splice(c.index,0,_);var h=Object(M.a)(Object(M.a)({},O),{},{items:p});t(function(e,t){return{type:v,payload:{columnName:e,column:t}}}(d,h))}};return Object(l.jsx)("div",{className:ce.a.catalog,children:Object(l.jsx)(J.a,{onDragEnd:function(t){return n(t,e)},children:Object.entries(e).map((function(e){var t=Object(Y.a)(e,2),n=t[0],a=t[1];return Object(l.jsx)(ne,{columnId:n,column:a},n)}))})})},se=function(){var e=Object(r.d)((function(e){return e.app})),t=e.isLoading,n=e.isReady,a=Object(r.c)(),c=function(){a(function(){var e=Object(d.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(A()),e.next=4,f.getAllBeer();case 4:n=e.sent,t({type:x,payload:n}),t(C(20)),t(A()),t(w()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())};return t?Object(l.jsx)(D,{}):Object(l.jsx)("div",{className:"content",children:n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:i.a.search__wrapper,children:Object(l.jsx)(P,{})}),Object(l.jsx)(re,{})]}):Object(l.jsx)("button",{className:i.a.content__btn,onClick:function(){return c()},children:"Load catalog"})})},oe=function(){return Object(l.jsx)("h2",{children:"Very interested information about our shop"})},be=n(24),ie=n.n(be),le="/",ue="/catalog",je="/about",Oe=function(){return Object(l.jsxs)("div",{className:ie.a.nav,children:[Object(l.jsx)(s.b,{className:ie.a.nav__link,to:le,children:"Home"}),Object(l.jsx)(s.b,{className:ie.a.nav__link,to:ue,children:"Catalog"}),Object(l.jsx)(s.b,{className:ie.a.nav__link,to:je,children:"About"})]})},de=n(33),pe=n.n(de),me=function(){return Object(l.jsxs)("div",{className:pe.a.header,children:[Object(l.jsx)("div",{className:pe.a.header__name,children:"Shop name"}),Object(l.jsx)(Oe,{})]})},_e=function(){return Object(l.jsxs)(s.a,{children:[Object(l.jsx)(me,{}),Object(l.jsx)("div",{className:i.a.App,children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/catalog",component:se,exact:!0}),Object(l.jsx)(o.a,{path:"/about",component:oe,exact:!0}),Object(l.jsx)(o.a,{path:"/",component:u})]})})]})},he=n(11),fe=n(48),xe={columns:{beer:{name:"beer",items:[]},basket:{name:"basket",items:[]}},allBeer:[],currentBeer:[]};function ve(e,t){return e.name.toLowerCase().includes(t.toLowerCase())}var ge={isLoading:!1,isReady:!1},ye=Object(he.c)({beer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(M.a)(Object(M.a)({},e),{},{allBeer:Object(G.a)(t.payload)});case B:var n=e.allBeer.splice(0,t.payload);return Object(M.a)(Object(M.a)({},e),{},{columns:Object(M.a)(Object(M.a)({},e.columns),{},{beer:Object(M.a)(Object(M.a)({},e.columns.beer),{},{items:[].concat(Object(G.a)(e.columns.beer.items),Object(G.a)(n))})}),currentBeer:[].concat(Object(G.a)(e.currentBeer),Object(G.a)(n))});case v:return Object(M.a)(Object(M.a)({},e),{},{columns:Object(M.a)(Object(M.a)({},e.columns),{},Object(z.a)({},t.payload.columnName,Object(M.a)({},t.payload.column)))});case g:return Object(M.a)(Object(M.a)({},e),{},{columns:Object(M.a)({},t.payload)});case y:return Object(M.a)(Object(M.a)({},e),{},{columns:{beer:Object(M.a)(Object(M.a)({},e.columns.beer),{},{items:[]}),basket:Object(M.a)(Object(M.a)({},e.columns.basket),{},{items:[].concat(Object(G.a)(e.columns.basket.items),Object(G.a)(e.columns.beer.items))})}});case N:return Object(M.a)(Object(M.a)({},e),{},{columns:{beer:Object(M.a)(Object(M.a)({},e.columns.beer),{},{items:[].concat(Object(G.a)(e.columns.beer.items),Object(G.a)(e.columns.basket.items))}),basket:Object(M.a)(Object(M.a)({},e.columns.basket),{},{items:[]})}});case k:return Object(M.a)(Object(M.a)({},e),{},{columns:Object(M.a)(Object(M.a)({},e.columns),{},{beer:Object(M.a)(Object(M.a)({},e.columns.beer),{},{items:e.currentBeer.filter((function(e){return ve(e,t.payload)}))})})});case L:return Object(M.a)(Object(M.a)({},e),{},{currentBeer:Object(G.a)(t.payload)});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(M.a)(Object(M.a)({},e),{},{isLoading:!e.isLoading});case R:return Object(M.a)(Object(M.a)({},e),{},{isReady:!0});default:return e}}}),Ne=Object(he.e)(ye,Object(he.d)(Object(he.a)(fe.a)));c.a.render(Object(l.jsx)(r.a,{store:Ne,children:Object(l.jsx)(_e,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.de689f5f.chunk.js.map