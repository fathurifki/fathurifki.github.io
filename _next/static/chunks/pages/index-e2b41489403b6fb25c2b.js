_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),o=t.n(r),c=t("HaE+"),a=t("nKUr"),i=t("YFqc"),s=t.n(i),u=t("vRNQ"),l=t.n(u),f=t("aE0B"),d=function(){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Avatar"}),Object(a.jsx)("th",{children:"Id"}),Object(a.jsx)("th",{children:"Name"})]})},p=function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:e.user.avatar_url,style:{maxWidth:"10rem"}})}),Object(a.jsx)("td",{children:Object(a.jsx)(s.a,{as:"user-info/login/".concat(e.user.login),href:"/user-info?id=".concat(e.user.id,"&login=").concat(e.user.login),children:Object(a.jsx)("a",{children:e.user.id})})}),Object(a.jsx)("td",{children:Object(a.jsx)("span",{children:e.user.login})})]})},h=function(e){return Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsx)(d,{})}),Object(a.jsx)("tbody",{children:e.users.map((function(e){return Object(a.jsx)(p,{user:e},e.id)}))})]})},v=function(e){var n=e.users;return Object(a.jsxs)("div",{className:l.a.container,children:[Object(a.jsx)("p",{children:"Hello Next.Js"}),Object(a.jsx)(h,{users:n}),Object(a.jsx)(s.a,{href:"/user-info",children:Object(a.jsx)("a",{children:"Navigate to user info page"})})]})};v.getInitialProps=Object(c.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.b)();case 2:return n=e.sent,e.abrupt("return",{users:n});case 4:case"end":return e.stop()}}),e)})));n.default=v},"HaE+":function(e,n,t){"use strict";function r(e,n,t,r,o,c,a){try{var i=e[c](a),s=i.value}catch(u){return void t(u)}i.done?n(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,c){var a=e.apply(n,t);function i(e){r(a,o,c,i,s,"next",e)}function s(e){r(a,o,c,i,s,"throw",e)}i(void 0)}))}}t.d(n,"a",(function(){return o}))},YFqc:function(e,n,t){e.exports=t("cTJO")},aE0B:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return u}));var r=t("o0o1"),o=t.n(r),c=t("HaE+"),a="".concat("https://api.github.com","/orgs/lemoncode/members"),i="".concat("https://api.github.com","/users"),s=function(){var e=Object(c.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,console.log("data",t),e.abrupt("return",t.map((function(e){return{id:e.id,login:e.login,avatar_url:e.avatar_url}})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(o.a.mark((function e(n){var t,r,c,a,s,u,l,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,c=r.id,a=r.login,s=r.avatar_url,u=r.name,l=r.company,f=r.followers,e.abrupt("return",{id:c,login:a,avatar_url:s,name:u,company:l,followers:f});case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),i=t("nOHt"),s=t("vNVm"),u={};function l(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,j=e.shallow,b=e.scroll,_=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var m=c.Children.only(h),x=m&&"object"===typeof m&&m.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),O=r(g,2),w=O[0],y=O[1],E=c.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);(0,c.useEffect)((function(){var e=y&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof _?_:t&&t.locale,o=u[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,y,_,n,t]);var H={ref:E,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,d,p,v,j,b,_)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};return(e.passHref||"a"===m.type&&!("href"in m.props))&&(H.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof _?_:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(m,H)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,o=(0,c.useRef)(),u=(0,c.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,c.useEffect)((function(){i||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var c=t("q1tI"),a=o(t("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map},vRNQ:function(e,n,t){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}}},[["/EDR",0,2,1,3]]]);