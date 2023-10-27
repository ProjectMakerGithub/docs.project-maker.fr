"use strict";(self.webpackChunkproject_maker_documentation=self.webpackChunkproject_maker_documentation||[]).push([[6103],{5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(7294),o=n(6010),i=n(833),l=n(5281),r=n(9460),c=n(9058),s=n(390),m=n(7462),u=n(5999),d=n(2244);function f(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function g(){const{assets:e,metadata:t}=(0,r.C)(),{title:n,description:o,date:l,tags:c,authors:s,frontMatter:m}=t,{keywords:u}=m,d=e.image??m.image;return a.createElement(i.d,{title:n,description:o,keywords:u,image:d},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:l}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var v=n(9407);function p(e){let{sidebar:t,children:n}=e;const{metadata:o,toc:i}=(0,r.C)(),{nextItem:l,prevItem:m,frontMatter:u}=o,{hide_table_of_contents:d,toc_min_heading_level:g,toc_max_heading_level:p}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&i.length>0?a.createElement(v.Z,{toc:i,minHeadingLevel:g,maxHeadingLevel:p}):void 0},a.createElement(s.Z,null,n),(l||m)&&a.createElement(f,{nextItem:l,prevItem:m}))}function E(e){const t=e.content;return a.createElement(r.n,{content:e.content,isBlogPostPage:!0},a.createElement(i.FG,{className:(0,o.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},a.createElement(g,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},3743:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),o=n(7294),i=n(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):a.push(o)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,o.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,o.useRef)(void 0),n=m();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let o=t;o<=n;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=s(r,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===m)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?o.createElement("ul",{className:i?void 0:n},t.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const f=o.memo(d);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...g}=e;const v=(0,i.L)(),p=m??v.tableOfContents.minHeadingLevel,E=d??v.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>r({toc:l(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:E});return u((0,o.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:E}}),[c,s,p,E])),o.createElement(f,(0,a.Z)({toc:h,className:n,linkClassName:c},g))}},9407:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),i=n(6010),l=n(3743);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return o.createElement("div",{className:(0,i.Z)(r.tableOfContents,"thin-scrollbar",t)},o.createElement(l.Z,(0,a.Z)({},n,{linkClassName:c,linkActiveClassName:s})))}},2053:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),o=n(7294),i=n(3612),l=n(7814),r=n(9417),c=n(3024);function s(e){const{type:t}=e;return"nouvellesfonctionnalites"===t?o.createElement(i.Z,(0,a.Z)({title:"Nouvelles fonctionnalit\xe9s",icon:o.createElement(l.G,{icon:r.r8p})},e)):"ameliorations"===t?o.createElement(i.Z,(0,a.Z)({title:"Am\xe9liorations",icon:o.createElement(l.G,{icon:r.FPD})},e)):"correctionsbugs"===t?o.createElement(i.Z,(0,a.Z)({title:"Corrections de bugs",icon:o.createElement(l.G,{icon:r.QLU})},e)):"misesajoursecurite"===t?o.createElement(i.Z,(0,a.Z)({title:"Mises \xe0 jour de s\xe9curit\xe9",icon:o.createElement(l.G,{icon:r.U7t})},e)):"changementsmajeurs"===t?o.createElement(i.Z,(0,a.Z)({title:"Changements majeurs",icon:o.createElement(l.G,{icon:r.RLE})},e)):"modificationsui"===t?o.createElement(i.Z,(0,a.Z)({title:"Modifications de l'interface utilisateur (UI)",icon:o.createElement(l.G,{icon:r.tc$})},e)):"amelioreperformances"===t?o.createElement(i.Z,(0,a.Z)({title:"Am\xe9liorations de performance",icon:o.createElement(l.G,{icon:r.HLz})},e)):"compatibilite"===t?o.createElement(i.Z,(0,a.Z)({title:"Compatibilit\xe9",icon:o.createElement(l.G,{icon:r.f8k})},e)):"documentation"===t?o.createElement(i.Z,(0,a.Z)({title:"Documentation",icon:o.createElement(l.G,{icon:r.FL8})},e)):"retraits"===t?o.createElement(i.Z,(0,a.Z)({title:"Retraits",icon:o.createElement(l.G,{icon:r.uMC})},e)):"ajouts"===t?o.createElement(i.Z,(0,a.Z)({title:"Ajouts",icon:o.createElement(l.G,{icon:r.KtF})},e)):"changementsmineurs"===t?o.createElement(i.Z,(0,a.Z)({title:"Changements mineurs",icon:o.createElement(l.G,{icon:r.UJf})},e)):"versionnote"===t?o.createElement(i.Z,(0,a.Z)({title:"Notes de version",icon:o.createElement(l.G,{icon:r.sqG})},e)):"discord"===t?o.createElement(i.Z,(0,a.Z)({title:"Discord",icon:o.createElement(l.G,{icon:c.omb})},e)):o.createElement(i.Z,e)}},1769:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var a=n(8614),o=n(7814),i=n(3636),l=n(3024),r=n(9417);i.vI.add(l.vnX,r.mRB);const c={...a.Z,icon:o.G}}}]);