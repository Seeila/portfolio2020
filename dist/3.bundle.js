(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{93:function(e,t,n){"use strict";n.r(t);var i=n(29),a=n.n(i),r=n(36),o=n.n(r),c=n(7),s=n.n(c),l=n(0),m=n.n(l),p=n(2),d=n.n(p),u=n(15),h=n.n(u),f=n(1),g=n(24),y=n(26),b=n(37),w=n(38),v=f.e.div.withConfig({displayName:"MovingImgWithBgstyles__BgContainer"})(["width:",';position:relative;&::before{content:"";width:calc(100% - 1.25rem);height:100%;position:absolute;top:1.25rem;left:1.25rem;background:',";transition:all 0.25s ease-in-out;z-index:-1;}"],(function(e){return e.isMobile?"250px":"100%"}),(function(e){return e.theme.color.primary})),j=f.e.div.withConfig({displayName:"MovingImgWithBgstyles__PlaceHolder"})(["width:calc(100% - 1.25rem);height:100%;position:absolute;top:0;filter:blur(5px);overflow:hidden;transition:opacity 0.15s ease-in;"]),x=f.e.div.withConfig({displayName:"MovingImgWithBgstyles__ImgContainer"})(["width:100%;padding-top:",";position:relative;overflow:hidden;.lazy-load-image-background{width:calc(100% - 1.25rem);height:auto;position:absolute;top:0;left:0;bottom:auto;display:block;transform-origin:top center;&.lazy-load-image-loaded{animation:"," "," linear infinite;animation-play-state:",";animation-delay:1s;& + ","{opacity:0;}}@media (min-width:",") and (orientation:landscape){&.lazy-load-image-loaded{animation:"," 10s linear infinite;animation-play-state:",";animation-delay:1s;}}@media (min-width:",") and (orientation:landscape){&.lazy-load-image-loaded{animation:"," 10s linear infinite;animation-play-state:",";animation-delay:1s;}}}"],(function(e){return e.isMobile?"150%":"56%"}),(function(e){return e.isMobile?w.d:w.e}),(function(e){return e.isMobile?"12s":"10s"}),(function(e){return e.isActive?"running":"paused"}),j,(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.isMobile?w.d:w.c}),(function(e){return e.isActive?"running":"paused"}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return e.isMobile?w.d:w.f}),(function(e){return e.isActive?"running":"paused"})),k=(n(65),function(e){return m.a.createElement(v,{className:e.className,isMobile:e.isMobile,key:e.imgSrc},m.a.createElement(x,{isMobile:e.isMobile,isActive:e.isActive},m.a.createElement(b.LazyLoadImage,{src:"./img/".concat(e.imgSrc),alt:e.imgAlt,effect:"blur"}),m.a.createElement(j,null,m.a.createElement("img",{src:"./img/".concat(e.imgLazy),alt:""}))))});k.propTypes={imgSrc:d.a.string.isRequired,imgLazy:d.a.string.isRequired,imgAlt:d.a.string,isMobile:d.a.bool.isRequired,isActive:d.a.bool.isRequired};var E=k,O=n(6),_=n(49),C=n(96),N=Object(f.e)(_.a).withConfig({displayName:"ProjectSliderStyles__ProjectSliderStyles"})(["margin:auto;position:relative;",' &::before{content:"";width:50vw;height:100%;position:absolute;top:50%;left:50%;background:',";transform:translate(100%,-50%);transition:",";transition-delay:0.25s;.project-enter-done &{transform:translate(0,-50%);transition:",";transition-delay:0.25s;}}.slider-wrapper{overflow:visible;}.carousel-slider{overflow:visible;.control-arrow{position:absolute;bottom:0;left:calc(50vw - 7.5rem);z-index:100;&.control-next{left:calc(50vw - 4.5rem);}}}@media (min-width:",') and (orientation:landscape){&::before{content:"";width:100%;height:60vh;position:absolute;top:50vh;left:40%;background:',";transform:translate(0,-50%);}&.carousel-root{height:100vh;}.carousel-slider{height:100vh;padding:0 0 0 2rem;display:flex;align-items:center;overflow:hidden;.control-arrow{height:1.5rem;position:absolute;top:calc(50% - 1.5rem);left:0.5rem;transform-origin:center;transform:rotate(90deg);&.control-next{top:calc(50% + 1.5rem);left:0.5rem;}}}}@media (min-width:",') and (orientation:landscape){&::before{content:"";width:80%;height:0;padding-top:80%;}}'],C.b,(function(e){return e.theme.color.primaryLight}),(function(e){return"transform 0.5s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"transform 0.5s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.theme.color.primaryLight}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")})),P=f.e.div.withConfig({displayName:"ProjectSliderStyles__Slide"})(["height:45vh;min-height:550px;padding:2rem 2rem 3rem;display:flex;justify-content:center;align-items:center;@media (min-width:",") and (orientation:landscape){height:55vh;padding:2rem 0 3rem 2rem;}"],(function(e){return"".concat(e.theme.bp.desktops,"px")})),L=function(e){var t=e.photos,n=e.theme,i=e.projectId,a=Object(g.b)(),r=Object(l.useContext)(f.a),o=Object(l.useState)(null),c=s()(o,2),p=c[0],d=c[1],u={infiniteLoop:!0,centerMode:!0,centerSlidePercentage:65,axis:a<r.bp.desktops||a<window.innerHeight?"horizontal":"vertical",onChange:function(e){p!==e&&d(e)},swipeable:!0,emulateTouch:!1};return m.a.createElement(O.a,{type:"slider"},m.a.createElement(N,{additionalSettings:u,colors:n},t&&t.map((function(e,t){return m.a.createElement(P,{key:"photo".concat(t),index:t},m.a.createElement(E,{imgSrc:"".concat(i,"/").concat(e.src),imgLazy:"".concat(i,"/").concat(e.lazy),imgAlt:e.alt,isActive:t==p,isMobile:e.isMobile}),e.url&&m.a.createElement(y.a,{externalLink:!0,url:e.url,ariaLabel:"Visit ".concat(e.alt),srOnly:!0}))}))))};L.propTypes={photos:d.a.array.isRequired,theme:d.a.object.isRequired,projectId:d.a.string.isRequired};var R=L,S=n(20),z=n(25),q=n(97),I=function(e){return m.a.createElement("svg",{viewBox:"0 0 13 13",xmlns:"http://www.w3.org/2000/svg",className:e.className},m.a.createElement("g",{transform:"matrix(1,0,0,1,-141.207,-5226.83)"},m.a.createElement("g",{transform:"matrix(1,0,0,2.9122,-6119.92,4622.49)"},m.a.createElement("g",{transform:"matrix(1,0,0,0.343383,6119.92,-1587.29)"},m.a.createElement("path",{d:"M149.672,5234.29L142.274,5234.29C141.685,5234.29 141.207,5233.81 141.207,5233.22L141.207,5233.04C141.207,5232.45 141.685,5231.97 142.274,5231.97L149.735,5231.97L146.088,5228.85C145.641,5228.47 145.589,5227.79 145.971,5227.35L146.092,5227.2C146.475,5226.76 147.149,5226.7 147.596,5227.09L153.325,5231.99C153.458,5232.05 153.58,5232.14 153.681,5232.26L153.802,5232.4C153.976,5232.61 154.06,5232.86 154.058,5233.1C154.06,5233.35 153.976,5233.6 153.802,5233.8L153.681,5233.94C153.58,5234.06 153.458,5234.15 153.325,5234.22L147.596,5239.12C147.149,5239.5 146.475,5239.45 146.092,5239L145.971,5238.86C145.589,5238.41 145.641,5237.74 146.088,5237.36L149.672,5234.29Z",fill:e.color})))))};I.propTypes={color:d.a.string.isRequired};var T=I,D=n(8),M=Object(f.d)(["display:flex;color:",";"],(function(e){return e.theme.color.primary})),A=Object(f.e)(D.b).withConfig({displayName:"ArrowLinkStyles__LinkTag"})(["",""],M),X=f.e.a.withConfig({displayName:"ArrowLinkStyles__ExternalLinkTag"})(["",""],M),B=Object(f.e)(T).withConfig({displayName:"ArrowLinkStyles__ArrowIcon"})(["width:0.75rem;margin:",";order:",";transform:",";transition:transform 0.25s ease-in-out;",":hover &{transform:",";}"],(function(e){return e.isReversed?"0 0.75rem 0 0":"0 0 0 0.75rem"}),(function(e){return e.isReversed?-1:1}),(function(e){return e.isReversed?"translateX(0) scaleX(-1)":"translateX(0)"}),A,(function(e){return e.isReversed?"translateX(-50%) scaleX(-1)":"translateX(50%)"})),H=function(e){return e.externalLink?m.a.createElement(X,{href:e.url,target:"_blank",rel:"noreferrer",className:e.className},e.linkText,m.a.createElement(B,{color:e.color,isReversed:e.isReversed})):m.a.createElement(A,{to:{pathname:e.url,state:{prevHash:location.hash}},className:e.className},e.linkText,m.a.createElement(B,{color:e.color,isReversed:e.isReversed}))};H.proptypes={externalLink:d.a.bool,isReversed:d.a.bool,url:d.a.string.isRequired,linkText:d.a.string.isRequired,color:d.a.string.isRequired};var W=H,Y=f.e.section.withConfig({displayName:"ProjectNavstyles__ProjectsNavigation"})(["padding-top:4.75rem;display:flex;font-family:",";font-size:1rem;font-weight:400;@media (min-width:","){padding-top:3rem;}@media (min-width:",") and (orientation:landscape){padding-top:calc(50vh - 5.3rem);display:block;}"],(function(e){return e.theme.font.poppins}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")})),F=Object(f.e)(D.b).withConfig({displayName:"ProjectNavstyles__NavLink"})(["padding:0 1rem 1rem;position:relative;flex:1;display:flex;flex-direction:column;align-items:center;color:",";&:first-of-type{border-right:2px solid ",";}@media (min-width:","){padding:0 1rem;}@media (min-width:",") and (orientation:landscape){padding:1rem;display:block;& > span{display:block;}& > span,&::after,&:first-of-type::before{",'}&::after,&:first-of-type::before{content:"";width:100%;height:2px;position:absolute;display:block;background:',";}&::after{bottom:0;left:0;}&:first-of-type::before{top:0;left:0;transition-delay:0s;}&:first-of-type{border-right:none;& > span{transition-delay:0.1s;}&::after{transition-delay:0.15s;}}&:last-of-type{& > span{transition-delay:0.2s;}&::after{transition-delay:0.25s;}}}"],(function(e){return e.theme.color.dark}),(function(e){return e.theme.color.primary}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),C.a,(function(e){return e.theme.color.primary})),J=f.e.span.withConfig({displayName:"ProjectNavstyles__LegendSpan"})(["display:block;color:",";font-size:0.75rem;"],(function(e){return e.theme.color.primary})),V=f.e.span.withConfig({displayName:"ProjectNavstyles__LinkText"})(["color:inherit;"]),Z=function(e){var t=e.prevProject,n=e.nextProject,i=e.className,a=e.clickHandler;return m.a.createElement(Y,{className:i},t&&m.a.createElement(F,{to:{pathname:"/project/".concat(t.id),state:{prevHash:location.hash}},onClick:function(e){return a(e,"/project/".concat(t.id))},"aria-label":"See ".concat(t.name,"'s details")},m.a.createElement("span",null,m.a.createElement(J,null,"Previous project:"),m.a.createElement(V,null,t.name))),n&&m.a.createElement(F,{to:{pathname:"/project/".concat(n.id),state:{prevHash:location.hash}},onClick:function(e){return a(e,"/project/".concat(n.id))},"aria-label":"See ".concat(n.name,"'s details")},m.a.createElement("span",null,m.a.createElement(J,null,"Next project:"),m.a.createElement(V,null,n.name))))};Z.propTypes={prevProject:d.a.oneOfType([d.a.object.isRequired,d.a.oneOf([null]).isRequired]),nextProject:d.a.oneOfType([d.a.object.isRequired,d.a.oneOf([null]).isRequired])};var G=Z,K=f.e.main.withConfig({displayName:"ProjectDetailsstyles__Main"})(["width:100%;max-width:",";margin:auto;.error-slider{height:100%;max-width:none;position:relative;top:auto;left:auto;transform:none;}@media (min-width:","){padding:0 0 2rem;}@media (min-width:",") and (orientation:landscape){padding:0;display:flex;}"],(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")})),Q=Object(f.e)(z.a).withConfig({displayName:"ProjectDetailsstyles__ProjectTitle"})(["margin:5rem 0 0.5rem;line-height:0.8;font-size:3.2rem;&::after{transform:translateX(-100%);transition:",";}.title-span{padding:0.5rem 0.25rem;opacity:0;transition:",";transition-delay:0.12s;}.project-enter-done &{&::after{transform:translateX(100%);transition:",";}.title-span{opacity:1;transition:",";transition-delay:0.45s;}}@media (min-width:","){font-size:8rem;margin-top:10rem;.title-span{padding:1.25rem 0.5rem 0.5rem;}}@media (min-width:",") and (orientation:portrait){font-size:",";.title-span{padding:1rem 0.5rem 0.5rem;}}@media (min-width:",") and (orientation:landscape){margin-top:0;font-size:",";.title-span{padding:1rem 0.5rem 0.5rem;}}@media (min-width:",") and (orientation:landscape){font-size:",";}"],(function(e){return"transform 0.6s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"opacity 0.1s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"transform 1s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"opacity 0.1s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.title.length>=4?"8vw":"11.5"}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.title.length>=4?"4.5rem":"8rem"}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")}),(function(e){return e.title.length>=4?"4.75rem":"11.5rem"})),U=f.e.h3.withConfig({displayName:"ProjectDetailsstyles__CatTitle"})(["margin-top:1.5rem;font-family:",";font-size:1.125rem;font-weight:500;"],(function(e){return e.theme.font.poppins})),$=f.e.p.withConfig({displayName:"ProjectDetailsstyles__CatDescription"})(["max-width:40ch;font-size:0.875rem;"]),ee=f.e.li.withConfig({displayName:"ProjectDetailsstyles__ListItem"})(["max-width:40ch;margin-bottom:0.5rem;font-size:0.875rem;"]),te=Object(f.e)(W).withConfig({displayName:"ProjectDetailsstyles__Link"})(["margin-top:1.5rem;display:block;",""],C.b),ne=Object(f.e)(q.a).withConfig({displayName:"ProjectDetailsstyles__Img"})(["width:100%;padding:0;",""],C.b),ie=f.e.section.withConfig({displayName:"ProjectDetailsstyles__LeftSection"})(["padding:0 1rem;@media (min-width:",") and (orientation:landscape){min-height:100vh;padding:5rem 1rem 3rem 2rem;margin:0 8.3333%;flex-basis:33.333%;display:flex;flex-direction:column;justify-content:center;}@media (min-width:",") and (orientation:landscape){padding:3rem 1rem 3rem;margin:0 16.666%;flex-basis:33.333%;}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")})),ae=f.e.section.withConfig({displayName:"ProjectDetailsstyles__RightSection"})(["margin-top:2.65rem;padding:0 1rem 1.5rem;overflow:hidden;@media (min-width:",") and (orientation:landscape){margin-top:0;position:fixed;width:50%;top:0;right:0;bottom:0;overflow:hidden;}@media (min-width:",") and (orientation:landscape){margin-top:0;width:",";left:50%;right:auto;}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"calc(".concat(e.theme.container,"px / 12 * 5)")})),re=f.e.div.withConfig({displayName:"ProjectDetailsstyles__FlexContainer"})([""," @media (min-width:",") and (orientation:portrait){display:flex;}"],C.b,(function(e){return"".concat(e.theme.bp.tablets,"px")})),oe=f.e.div.withConfig({displayName:"ProjectDetailsstyles__FlexChilds"})(["padding-right:1rem;flex-basis:50%;"]),ce=Object(f.e)(G).withConfig({displayName:"ProjectDetailsstyles__ProjectNavigation"})(["@media (min-width:",") and (orientation:landscape){width:calc(100% / 12);position:fixed;top:0;left:0;bottom:0;}@media (min-width:",") and (orientation:landscape){width:",";left:",";}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"calc(".concat(e.theme.container,"px / 12)")}),(function(e){return"calc(50vw - ".concat(e.theme.container,"px / 2)")}));function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(e){var t=Object(l.useContext)(f.a),n=Object(l.useState)(!0),i=s()(n,2),r=i[0],c=i[1],p=e.project,d=e.nextProject,u=e.prevProject,h=e.history,y=le({},t,{color:le({},t.color,{primary:p.colors.primary,primaryLight:p.colors.primaryLight})});function b(){return(b=o()(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,c(!1);case 3:window.scrollTo({top:0,behavior:"smooth"}),window.setTimeout((function(){h.push(n),c(!0)}),750);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=Object(g.b)();return m.a.createElement(O.a,{type:"layout"},m.a.createElement(f.b,{theme:y},m.a.createElement(S.a,{classNames:"project",timeout:{enter:750,exit:750},appear:!0,enter:!0,exit:!0,in:r},m.a.createElement(K,null,m.a.createElement(ie,null,m.a.createElement(Q,{title:p.name}),m.a.createElement(re,null,m.a.createElement(oe,null,m.a.createElement(U,null,"Year :"),m.a.createElement($,null,p.year),m.a.createElement(U,null,"Client :"),m.a.createElement($,null,p.client),m.a.createElement(U,null,"Technologies :"),m.a.createElement($,null,p.technologies.map((function(e,t){return t==p.technologies.length-1?e:"".concat(e,", ")})))),m.a.createElement(oe,null,m.a.createElement(U,null,"Challenges :"),m.a.createElement("ul",null," ",p.challenges.map((function(e,t){return m.a.createElement(ee,{key:"challenge-".concat(t)},e)}))))),p.url&&m.a.createElement(te,{url:p.url,linkText:"Visit ".concat(p.name,"'s website"),externalLink:!0,color:y.color.primary})),m.a.createElement(ae,null,w<t.bp.tablets&&m.a.createElement(ne,{imgSrc:"".concat(p.id,"/").concat(p.photos.project[0].src),imgLazy:"".concat(p.id,"/").concat(p.photos.project[0].lazy),imgAlt:""}),w>=t.bp.tablets&&m.a.createElement(R,{photos:p.photos.project,theme:y,projectId:p.id})),m.a.createElement(ce,{prevProject:u,nextProject:d,clickHandler:function(e,t){return b.apply(this,arguments)}})))))};me.propTypes={project:d.a.shape({id:d.a.string.isRequired,name:d.a.string.isRequired,year:d.a.string.isRequired,client:d.a.string.isRequired,technologies:d.a.array.isRequired,challenges:d.a.array.isRequired,url:d.a.string,photos:d.a.shape({project:d.a.array.isRequired})}),prevProject:d.a.object.isRequired,nextProject:d.a.object.isRequired,history:d.a.shape({push:d.a.func.isRequired})};var pe=me,de=n(48),ue=function(e){var t=Object(l.useState)(null),n=s()(t,2),i=n[0],r=n[1],c=Object(l.useState)(!0),p=s()(c,2),d=p[0],u=p[1],h=Object(l.useRef)(null),f=Object(l.useRef)(null),g=e.match.params.id;return Object(l.useEffect)((function(){function e(){return(e=o()(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=de.find((function(e){return e.id==g})),n=de.findIndex((function(e){return e.id==g})),h.current=n&&n>0?de[n-1]:0==n?de[de.length-1]:null,(n||0==n)&&n<de.length-1?f.current=de[n+1]:n&&n==de.length-1?f.current=de[0]:f.current=null,e.next=6,r(t||{});case 6:u(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[g]),d?m.a.createElement("h1",null,"Loading"):m.a.createElement(O.a,{type:"route"},m.a.createElement(pe,{project:i,nextProject:f.current,prevProject:h.current,history:e.history}))};ue.propTypes={match:d.a.shape({params:d.a.shape({id:d.a.string.isRequired})}),history:d.a.object.isRequired};t.default=ue},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var i=n(1),a=Object(i.d)(["transform:translateY(5rem);opacity:0;transition:",";.load-enter-done &,.change-route-enter-done &,.project-enter-done &{transform:translateY(0);opacity:1;transition:",";}"],(function(e){return"all 0.75s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"all 0.75s ".concat(e.theme.animations.easeInOut,";")})),r=Object(i.d)(["transform:translateX(-5rem);opacity:0;transition:",";.change-route-enter-done &,.project-enter-done &{transform:translateX(0);opacity:1;transition:",";}"],(function(e){return"all 0.75s ".concat(e.theme.animations.easeInOut,";")}),(function(e){return"all 0.75s ".concat(e.theme.animations.easeInOut,";")}))},97:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(2),o=n.n(r),c=n(1),s=n(37),l=c.e.div.withConfig({displayName:"ImgWithBgstyle__PlaceHolder"})(["width:100%;transition:opacity 0.25s ease-in;"]),m=Object(c.e)(s.LazyLoadImage).withConfig({displayName:"ImgWithBgstyle__Img"})(["width:100%;opacity:0;"]),p=c.e.div.withConfig({displayName:"ImgWithBgstyle__ImgContainer"})(['width:calc(100% - 1.25rem);min-height:250px;position:relative;&::before{content:"";width:calc(100%);height:100%;position:absolute;top:1.25rem;left:1.25rem;background:',";transition:all 0.25s ease-in-out;z-index:-1;}.lazy-load-image-background{min-height:100%;&.lazy-load-image-loaded{& + ","{opacity:0;}","{opacity:1;}}}"],(function(e){return e.theme.color.primary}),l,m),d=(n(65),function(e){return a.a.createElement(p,{className:e.className,key:e.imgSrc},a.a.createElement(m,{src:"./img/".concat(e.imgSrc),alt:e.imgAlt,placeholderSrc:"./img/".concat(e.imgLazy)}))});d.propTypes={imgSrc:o.a.string.isRequired,imgLazy:o.a.string.isRequired,imgAlt:o.a.string};t.a=d}}]);
//# sourceMappingURL=3.bundle.js.map