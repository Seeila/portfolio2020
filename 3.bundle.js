(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{114:function(e,t,n){"use strict";n.r(t);var a=n(23),i=n.n(a),r=n(29),o=n.n(r),l=n(10),s=n.n(l),c=n(0),m=n.n(c),p=n(2),d=n.n(p),u=n(1),h=n(12),f=n(31),g=function(e){return m.a.createElement(f.a,{href:e.url,"aria-label":e.ariaLabel,target:"_blank",rel:"noreferrer"})};g.prototype={url:d.a.string.isRequired,ariaLabel:d.a.string.isRequired};var b=g,w=Object(u.f)(["0%{transform:translateY(0);}60%{transform:translateY(calc(-100% + ((100vw / 12 * 7 - 8rem) * 0.56)));}80%{transform:translateY(calc(-100% + ((100vw / 12 * 7 - 8rem) * 0.56)));}90%{transform:translateY(0);}100%{transform:translateY(0);}"]),y=Object(u.f)(["0%{transform:translateY(0);}60%{transform:translateY(calc(-100% + (1920px / 12 * 5 * 0.56) - 4rem));}80%{transform:translateY(calc(-100% + (1920px / 12 * 5 * 0.56) - 4rem));}90%{transform:translateY(0);}100%{transform:translateY(0);}"]),v=Object(u.f)(["0%{transform:translateY(0);}60%{transform:translateY(calc(-100% + ((100vw * 0.65 - 4rem) * 0.56)));}80%{transform:translateY(calc(-100% + ((100vw * 0.65 - 4rem) * 0.56)));}90%{transform:translateY(0);}100%{transform:translateY(0);}"]),x=Object(u.f)(["0%{transform:translateY(0);}60%{transform:translateY(calc(-100% + 250px * 1.5));}80%{transform:translateY(calc(-100% + 250px * 1.5));}90%{transform:translateY(0);}100%{transform:translateY(0);}"]),j=u.e.div.withConfig({displayName:"MovingImgWithBgstyles__BgContainer"})(["width:",';position:relative;&::before{content:"";width:100%;height:100%;position:absolute;top:1.25rem;left:1.25rem;background:',";transition:all 0.25s ease-in-out;z-index:-1;}"],(function(e){return e.isMobile?"250px":"100%"}),(function(e){return e.theme.color.primary})),C=u.e.div.withConfig({displayName:"MovingImgWithBgstyles__ImgContainer"})(["width:100%;padding-top:",";position:relative;overflow:hidden;"],(function(e){return e.isMobile?"150%":"56%"})),_=u.e.img.withConfig({displayName:"MovingImgWithBgstyles__Img"})(["width:calc(100% - 1.25rem);height:auto;position:absolute;top:0;left:0;bottom:auto;display:block;transform-origin:top center;animation:"," "," linear infinite;animation-play-state:",";@media (min-width:",") and (orientation:landscape){animation:"," 10s linear infinite;animation-play-state:",";}@media (min-width:",") and (orientation:landscape){animation:"," 10s linear infinite;animation-play-state:",";}"],(function(e){return e.isMobile?x:v}),(function(e){return e.isMobile?"12s":"10s"}),(function(e){return e.isActive?"running":"paused"}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.isMobile?x:w}),(function(e){return e.isActive?"running":"paused"}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return e.isMobile?x:y}),(function(e){return e.isActive?"running":"paused"})),E=function(e){return m.a.createElement(j,{className:e.className,isMobile:e.isMobile},m.a.createElement(C,{isMobile:e.isMobile},m.a.createElement(_,{src:e.imgSrc,alt:e.imgAlt,isActive:e.isActive,isMobile:e.isMobile})))};E.prototype={imgSrc:d.a.string.isRequired,imgAlt:d.a.string};var k=E,N=n(39),L=Object(u.e)(N.a).withConfig({displayName:"ProjectSliderStyles__ProjectSliderStyles"})(['margin:auto;position:relative;&::before{content:"";width:50vw;height:100%;position:absolute;top:50%;left:50%;background:',";transform:translate(0,-50%);}.slider-wrapper{overflow:visible;}.carousel-slider{.control-arrow{height:1.5rem;position:absolute;bottom:0.5rem;left:calc(50vw - 6.5rem);&.control-next{left:calc(50vw - 3.5rem);}}}@media (min-width:",') and (orientation:landscape){&::before{content:"";width:100%;height:60vh;position:absolute;top:50vh;left:40%;background:',";transform:translate(0,-50%);}&.carousel-root{height:100vh;}.carousel-slider{height:100vh;padding:0 2rem;display:flex;align-items:center;.control-arrow{height:1.5rem;position:absolute;top:calc(50% - 1.5rem);left:0.5rem;transform-origin:center;transform:rotate(90deg);&.control-next{top:calc(50% + 1.5rem);left:0.5rem;}}}}@media (min-width:",') and (orientation:landscape){&::before{content:"";width:80%;height:0;padding-top:80%;}}'],(function(e){return e.theme.color.primaryLight}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.theme.color.primaryLight}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")})),Y=u.e.div.withConfig({displayName:"ProjectSliderStyles__Slide"})(["height:45vh;min-height:550px;padding:2rem 2rem 3rem;display:flex;justify-content:center;align-items:center;@media (min-width:",") and (orientation:landscape){height:55vh;}"],(function(e){return"".concat(e.theme.bp.desktops,"px")})),M=function(e){var t=e.photos,n=e.theme,a=(e.projectId,Object(h.b)()),i=Object(c.useContext)(u.a),r=Object(c.useState)(0),o=s()(r,2),l=o[0],p=o[1],d={infiniteLoop:!0,centerMode:!0,centerSlidePercentage:65,axis:a<i.bp.desktops||a<window.innerHeight?"horizontal":"vertical",onChange:function(e){l!==e&&p(e)},swipeable:!0,emulateTouch:!1};return m.a.createElement(L,{additionalSettings:d,colors:n},t&&t.map((function(e,t){return m.a.createElement(Y,{key:"photo".concat(t),index:t},m.a.createElement(k,{imgSrc:"".concat(e.src),imgAlt:e.alt,isActive:t==l,isMobile:e.isMobile}),m.a.createElement(b,{url:e.url,ariaLabel:"Visit ".concat(e.alt),srOnly:!0}))})))};M.prototype={photos:d.a.object.isRequired,theme:d.a.object.isRequired};var S=M,O=n(13),P=function(e){return m.a.createElement("svg",{viewBox:"0 0 13 13",xmlns:"http://www.w3.org/2000/svg",className:e.className},m.a.createElement("g",{transform:"matrix(1,0,0,1,-141.207,-5226.83)"},m.a.createElement("g",{transform:"matrix(1,0,0,2.9122,-6119.92,4622.49)"},m.a.createElement("g",{transform:"matrix(1,0,0,0.343383,6119.92,-1587.29)"},m.a.createElement("path",{d:"M149.672,5234.29L142.274,5234.29C141.685,5234.29 141.207,5233.81 141.207,5233.22L141.207,5233.04C141.207,5232.45 141.685,5231.97 142.274,5231.97L149.735,5231.97L146.088,5228.85C145.641,5228.47 145.589,5227.79 145.971,5227.35L146.092,5227.2C146.475,5226.76 147.149,5226.7 147.596,5227.09L153.325,5231.99C153.458,5232.05 153.58,5232.14 153.681,5232.26L153.802,5232.4C153.976,5232.61 154.06,5232.86 154.058,5233.1C154.06,5233.35 153.976,5233.6 153.802,5233.8L153.681,5233.94C153.58,5234.06 153.458,5234.15 153.325,5234.22L147.596,5239.12C147.149,5239.5 146.475,5239.45 146.092,5239L145.971,5238.86C145.589,5238.41 145.641,5237.74 146.088,5237.36L149.672,5234.29Z",fill:e.color})))))};P.prototype={colors:d.a.object.isRequired};var D=P,A=u.e.div.withConfig({displayName:"ImgWithBgstyle__ImgContainer"})(['width:calc(100% - 1.25rem);position:relative;&::before{content:"";width:calc(100%);height:100%;position:absolute;top:1.25rem;left:1.25rem;background:',";transition:all 0.25s ease-in-out;z-index:-1;}"],(function(e){return e.theme.color.primary})),I=u.e.img.withConfig({displayName:"ImgWithBgstyle__Img"})(["width:100%;"]);I.prototype={imgSrc:d.a.string.isRequired,imgAlt:d.a.string};var R=function(e){return m.a.createElement(A,{className:e.className},m.a.createElement(I,{src:e.imgSrc,alt:e.imgAlt}))},q=u.e.main.withConfig({displayName:"ProjectDetailsstyles__Main"})(["width:100%;max-width:",";margin:auto;padding:0 1rem;@media (min-width:","){padding:0 0 5rem;}@media (min-width:",") and (orientation:landscape){padding:0;display:flex;}"],(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")})),z=Object(u.e)(O.a).withConfig({displayName:"ProjectDetailsstyles__ProjectTitle"})(["margin:5rem 0 0.5rem;padding:0.5rem 0.25rem;line-height:0.8;@media (min-width:","){margin-top:10rem;}@media (min-width:",") and (orientation:portrait){font-size:",";}@media (min-width:",") and (orientation:landscape){margin-top:7rem;font-size:",";}@media (min-width:",") and (orientation:landscape){font-size:",";}"],(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.title.length>=4?"clamp(2.4rem, 8vw, 5.5rem)":"clamp(4rem, 15.5vw, 11.5rem); "}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return e.title.length>=4?"clamp(2.4rem, 8vw, 5.5rem)":"clamp(4rem, 15.5vw, 8rem); "}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")}),(function(e){return e.title.length>=4?"clamp(2.4rem, 8vw, 5.5rem)":"clamp(4rem, 15.5vw, 11.5rem); "})),B=u.e.h3.withConfig({displayName:"ProjectDetailsstyles__CatTitle"})(["margin-top:1.5rem;font-family:",";font-size:1.125rem;font-weight:500;"],(function(e){return e.theme.font.poppins})),W=u.e.p.withConfig({displayName:"ProjectDetailsstyles__CatDescription"})(["max-width:40ch;font-size:0.875rem;"]),T=u.e.li.withConfig({displayName:"ProjectDetailsstyles__ListItem"})(["max-width:40ch;margin-bottom:0.5rem;font-size:0.875rem;"]),F=u.e.a.withConfig({displayName:"ProjectDetailsstyles__Link"})(["margin-top:1.5rem;display:inline-block;color:",";"],(function(e){return e.theme.color.primary})),J=Object(u.e)(D).withConfig({displayName:"ProjectDetailsstyles__Arrow"})(["width:0.75rem;margin-left:0.75rem;transform:translateX(0);transition:transform 0.25s ease-in-out;",":hover &{transform:translateX(50%);}"],F),V=Object(u.e)(R).withConfig({displayName:"ProjectDetailsstyles__Img"})(["width:100%;padding:0;"]),X=u.e.section.withConfig({displayName:"ProjectDetailsstyles__LeftSection"})(["@media (min-width:","){padding:0 1rem;}@media (min-width:",") and (orientation:landscape){min-height:100vh;padding:0 1rem 3rem;flex-basis:33.333%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;}@media (min-width:",") and (orientation:landscape){margin:0 8.3333%;flex-basis:33.333%;}@media (min-width:",") and (orientation:landscape){margin:0 0 0 16.666%;flex-basis:33.333%;}"],(function(e){return"".concat(e.theme.bp.tablets,"px")}),(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.bp.largeDesktops,"px")}),(function(e){return"".concat(e.theme.container,"px")})),H=u.e.section.withConfig({displayName:"ProjectDetailsstyles__RightSection"})(["margin-top:2.65rem;@media (min-width:",") and (orientation:landscape){margin-top:0;position:fixed;width:calc(100% / 12 * 7);top:0;right:0;bottom:0;}@media (min-width:",") and (orientation:landscape){margin-top:0;width:",";left:50%;right:auto;}"],(function(e){return"".concat(e.theme.bp.desktops,"px")}),(function(e){return"".concat(e.theme.container,"px")}),(function(e){return"calc(".concat(e.theme.container,"px / 12 * 5)")})),Z=u.e.div.withConfig({displayName:"ProjectDetailsstyles__FlexContainer"})(["@media (min-width:",") and (orientation:portrait){display:flex;}"],(function(e){return"".concat(e.theme.bp.tablets,"px")})),G=u.e.div.withConfig({displayName:"ProjectDetailsstyles__FlexChilds"})(["padding-right:1rem;flex-basis:50%;"]),K=function(e){var t=e.project,n={color:{primary:t.colors.primary,primaryLight:t.colors.primaryLight}},a=Object(c.useContext)(u.a),i=Object(h.b)();return m.a.createElement(u.b,{theme:n},m.a.createElement(q,null,m.a.createElement(X,null,m.a.createElement(z,{title:t.name}),m.a.createElement(Z,null,m.a.createElement(G,null,m.a.createElement(B,null,"Year :"),m.a.createElement(W,null,t.year),m.a.createElement(B,null,"Client :"),m.a.createElement(W,null,t.client),m.a.createElement(B,null,"Technologies :"),m.a.createElement(W,null,t.technologies.map((function(e,n){return n==t.technologies.length-1?e:"".concat(e,", ")})))),m.a.createElement(G,null,m.a.createElement(B,null,"Challenges :"),m.a.createElement("ul",null," ",t.challenges.map((function(e,t){return m.a.createElement(T,{key:"challenge-".concat(t)},e)}))))),m.a.createElement(F,{href:t.url,target:"_blank",rel:"noreferrer"},"Visit ".concat(t.name,"'s website")," ",m.a.createElement(J,{color:t.colors.primary}))),m.a.createElement(H,null,i<a.bp.tablets&&m.a.createElement(V,{imgSrc:" ".concat(t.photos.project[0].src),imgAlt:""}),i>=a.bp.tablets&&m.a.createElement(S,{photos:t.photos.project,theme:n,projectId:t.id}))))};K.prototype={project:d.a.object.isRequired};var Q=K,U=n(38),$=function(e){var t=e.match.params.id,n=Object(c.useState)(null),a=s()(n,2),r=a[0],l=a[1],p=Object(c.useState)(!0),d=s()(p,2),u=d[0],h=d[1];return Object(c.useEffect)((function(){function e(){return(e=o()(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=U.find((function(e){return e.id==t})),e.next=3,l(n||{});case 3:h(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),u?m.a.createElement("h1",null,"Loading"):m.a.createElement(Q,{project:r})};$.prototype={match:d.a.shape({params:d.a.shape({id:d.a.string.isRequired})})};t.default=$}}]);
//# sourceMappingURL=3.bundle.js.map