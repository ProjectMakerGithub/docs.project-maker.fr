"use strict";(self.webpackChunkdocs_project_maker_fr=self.webpackChunkdocs_project_maker_fr||[]).push([[8780],{3509:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var i=n(4848),r=n(8453);const t={sidebar_position:2,description:"Bien d\xe9buter avec son bot Discord"},l="Cr\xe9e son site",d={id:"guide/website/create_website",title:"Cr\xe9e son site",description:"Bien d\xe9buter avec son bot Discord",source:"@site/docs/guide/website/create_website.md",sourceDirName:"guide/website",slug:"/guide/website/create_website",permalink:"/docs/guide/website/create_website",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Bien d\xe9buter avec son bot Discord"},sidebar:"guideSidebar",previous:{title:"Premier pas",permalink:"/docs/guide/website/intro"},next:{title:"Serveur Local",permalink:"/docs/guide/website/localhost"}},c={},o=[{value:"La structure du site HTML CSS JS",id:"la-structure-du-site-html-css-js",level:3},{value:"La premi\xe8re page",id:"la-premi\xe8re-page",level:2},{value:"HTML : baliser votre site",id:"html--baliser-votre-site",level:3},{value:"CSS : Ajouter du style \xe0 votre site",id:"css--ajouter-du-style-\xe0-votre-site",level:3},{value:"JavaScript : Ajouter de l&#39;interactivit\xe9 \xe0 votre site",id:"javascript--ajouter-de-linteractivit\xe9-\xe0-votre-site",level:3},{value:"Exemples de Templates",id:"exemples-de-templates",level:3},{value:"Tutoriels",id:"tutoriels",level:3}];function a(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"cr\xe9e-son-site",children:"Cr\xe9e son site"}),"\n",(0,i.jsx)(s.p,{children:"Passons \xe0 la cr\xe9ation de notre site web !"}),"\n",(0,i.jsx)(s.admonition,{type:"caution",children:(0,i.jsx)(s.p,{children:"Pour commencer, nous n'utiliserons pas notre serveur local (vu dans les pr\xe9requis)."})}),"\n",(0,i.jsx)(s.h3,{id:"la-structure-du-site-html-css-js",children:"La structure du site HTML CSS JS"}),"\n",(0,i.jsx)(s.p,{children:"L'arborescence de dossiers que vous avez cr\xe9\xe9e est un excellent point de d\xe9part pour la construction d'un site web simple utilisant HTML, CSS et JavaScript. Cette structure organis\xe9e vous aidera \xe0 garder vos fichiers bien rang\xe9s et faciles \xe0 g\xe9rer. Voici un aper\xe7u d\xe9taill\xe9 de chaque \xe9l\xe9ment dans cette arborescence :"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"my-website\n\u251c\u2500\u2500 index.html\n\u251c\u2500\u2500 styles\n\u2502   \u2514\u2500\u2500 style.css\n\u251c\u2500\u2500 scripts\n\u2502   \u2514\u2500\u2500 app.js\n\u251c\u2500\u2500 assets\n\u2502   \u251c\u2500\u2500 img\n\u2502   \u2502   \u251c\u2500\u2500 logo.png\n\u2502   \u2502   \u2514\u2500\u2500 background.jpg\n\u2502   \u251c\u2500\u2500 favicon\n\u2502   \u2502   \u2514\u2500\u2500 favicon.icon\n\u2502   \u251c\u2500\u2500 svg\n\u2502   \u2502   \u2514\u2500\u2500 icon.svg\n\u2502   \u2514\u2500\u2500 video\n\u2502       \u2514\u2500\u2500 ma_super_video.mp4\n\u2514\u2500\u2500 about.html\n"})}),"\n",(0,i.jsx)(s.p,{children:"Explication de chaque dossier et fichier :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"my-website/"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"C'est le dossier principal de votre projet, appel\xe9 commun\xe9ment la racine du site."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"index.html"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"C'est la page d'accueil de votre site web."}),"\n",(0,i.jsx)(s.li,{children:"Elle contient la structure HTML de base de votre site."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"styles/"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ce dossier contient tous les fichiers CSS qui d\xe9finissent le style visuel de votre site."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"styles/style.css"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"C'est le fichier principal de styles pour votre site."}),"\n",(0,i.jsx)(s.li,{children:"Vous pouvez d\xe9finir les r\xe8gles de style CSS ici pour personnaliser l'apparence de votre site."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"scripts/"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ce dossier contient tous les fichiers JavaScript utilis\xe9s pour ajouter de l'interactivit\xe9 \xe0 votre site."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"scripts/app.js"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"C'est le fichier principal o\xf9 vous pouvez \xe9crire vos scripts JavaScript."}),"\n",(0,i.jsx)(s.li,{children:"Vous pouvez ajouter des fonctionnalit\xe9s interactives et dynamiques \xe0 votre site ici."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"assets/"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ce dossier contient tous les fichiers multim\xe9dias et ressources utilis\xe9s sur votre site."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"assets/img/"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ce sous-dossier contient toutes les images utilis\xe9es sur votre site, telles que des logos, des images de fond, etc."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"assets/favicon/"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ce sous-dossier contient le favicon de votre site, qui est l'ic\xf4ne affich\xe9e dans l'onglet du navigateur."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"assets/svg/"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ce sous-dossier peut contenir des fichiers SVG (scalable vector graphics) utilis\xe9s pour les ic\xf4nes et autres \xe9l\xe9ments graphiques."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"assets/video/"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Ce sous-dossier contient des fichiers vid\xe9o que vous pouvez int\xe9grer \xe0 votre site."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"about.html"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'C\'est une autre page HTML de votre site, par exemple, une page "\xc0 propos".'}),"\n",(0,i.jsx)(s.li,{children:"Vous pouvez cr\xe9er plusieurs pages HTML pour diff\xe9rentes sections de votre site."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"En suivant cette structure d'arborescence, vous pouvez commencer \xe0 d\xe9velopper votre site web de mani\xe8re organis\xe9e et efficace. Vous pouvez ajouter davantage de dossiers ou de fichiers en fonction de la complexit\xe9 de votre projet, mais cette base vous aidera \xe0 d\xe9marrer sans confusion."}),"\n",(0,i.jsx)(s.h2,{id:"la-premi\xe8re-page",children:"La premi\xe8re page"}),"\n",(0,i.jsx)(s.h3,{id:"html--baliser-votre-site",children:"HTML : baliser votre site"}),"\n",(0,i.jsx)(s.p,{children:'Commencez par cr\xe9er un fichier "index.html" dans Visual Studio Code :'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:"html:5\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:n(9468).A+"",width:"677",height:"94"})}),"\n",(0,i.jsx)(s.p,{children:'Appuyez sur "Entrer", et cette structure sera cr\xe9\xe9e :'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n\xa0 \xa0 <meta charset="UTF-8">\n\xa0 \xa0 <meta name="viewport" content="width=device-width, initial-scale=1.0">\n\xa0 \xa0 <title>Document</title>\n</head>\n\n<body>\n\n</body>\n\n</html>\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Cela constitue la base d'une page HTML. Vous pouvez d\xe9sormais commencer \xe0 ajouter du contenu \xe0 l'int\xe9rieur des balises ",(0,i.jsx)(s.code,{children:"<body>"})," pour construire votre site web."]}),"\n",(0,i.jsx)(s.p,{children:"les balises HTML sont les \xe9l\xe9ments de base qui structurent et d\xe9finissent le contenu d'une page web. Chaque balise a une fonction sp\xe9cifique et peut contenir d'autres balises ou du texte. Voici quelques balises HTML couramment utilis\xe9es, ainsi que leurs fonctions :"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<html>"})," : Cette balise englobe tout le contenu HTML de la page. Elle indique au navigateur que le document est \xe9crit en HTML. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/html",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<head>"})," : Cette balise contient des m\xe9tadonn\xe9es sur la page, telles que le titre de la page, les liens vers les fichiers de style et de script, etc. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/head",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<meta>"})," : Utilis\xe9e dans la section ",(0,i.jsx)(s.code,{children:"<head>"})," pour sp\xe9cifier des m\xe9tadonn\xe9es comme l'encodage du caract\xe8re et les informations de la vue du port. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/meta",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<title>"})," : D\xe9finit le titre de la page, qui est affich\xe9 dans l'onglet du navigateur. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/title",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<link>"})," : Utilis\xe9 pour lier des fichiers externes tels que des feuilles de style CSS. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/link",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<script>"})," : Utilis\xe9 pour lier des scripts JavaScript ou d'autres fichiers de script. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/script",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<body>"})," : Contient le contenu visible de la page, y compris le texte, les images, les vid\xe9os, etc."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<h1>"}),", ",(0,i.jsx)(s.code,{children:"<h2>"}),", ",(0,i.jsx)(s.code,{children:"<h3>"}),", ... ",(0,i.jsx)(s.code,{children:"<h6>"})," : Balises de titre (niveaux de titres), utilis\xe9es pour hi\xe9rarchiser et structurer le texte. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/Heading_Elements",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<p>"})," : Balise de paragraphe, utilis\xe9e pour afficher des paragraphes de texte. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/p",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<a>"})," : Balise de lien, utilis\xe9e pour cr\xe9er des liens vers d'autres pages ou ressources. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/a",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<img>"})," : Balise d'image, utilis\xe9e pour ins\xe9rer des images dans la page. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/img",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<ul>"})," : Balise de liste non ordonn\xe9e, utilis\xe9e pour cr\xe9er des listes \xe0 puces. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/ul",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<ol>"})," : Balise de liste ordonn\xe9e, utilis\xe9e pour cr\xe9er des listes num\xe9rot\xe9es. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/ol",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<li>"})," : Balise d'\xe9l\xe9ment de liste, utilis\xe9e \xe0 l'int\xe9rieur de ",(0,i.jsx)(s.code,{children:"<ul>"})," ou ",(0,i.jsx)(s.code,{children:"<ol>"})," pour d\xe9finir chaque \xe9l\xe9ment de la liste. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/li",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<div>"})," : Utilis\xe9e pour diviser la page en sections ou conteneurs, souvent utilis\xe9s pour appliquer des styles ou des scripts \xe0 un groupe d'\xe9l\xe9ments. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/div",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<span>"})," : Utilis\xe9e pour appliquer des styles ou des scripts \xe0 une partie sp\xe9cifique du texte. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/span",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<form>"})," : Utilis\xe9e pour cr\xe9er des formulaires interactifs permettant aux utilisateurs d'entrer des donn\xe9es. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/form",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<input>"})," : Balise utilis\xe9e dans les formulaires pour permettre \xe0 l'utilisateur de saisir des donn\xe9es. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/input",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<textarea>"})," : Balise de zone de texte, utilis\xe9e pour saisir du texte sur plusieurs lignes. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/textarea",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<button>"})," : Balise de bouton, utilis\xe9e pour cr\xe9er des boutons interactifs. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/button",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<iframe>"})," : Balise utilis\xe9e pour incorporer d'autres pages web ou contenus dans une page. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/iframe",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<br>"})," : Balise de saut de ligne, utilis\xe9e pour ins\xe9rer un saut de ligne simple. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/br",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<hr>"})," : Balise de s\xe9paration horizontale, utilis\xe9e pour ins\xe9rer une ligne de s\xe9paration. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/hr",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<strong>"})," : Balise de texte en gras. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/strong",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<em>"})," : Balise de texte en italique. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/em",children:"Plus d'info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"<blockquote>"})," : Balise pour les citations longues ou les blocs de texte. ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/HTML/Element/blockquote",children:"Plus d'info"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Ces balises constituent une petite s\xe9lection des \xe9l\xe9ments HTML couramment utilis\xe9s. Chacune d'entre elles joue un r\xf4le sp\xe9cifique dans la structuration, le formatage et l'interactivit\xe9 d'une page web."}),"\n",(0,i.jsx)(s.p,{children:"Passons maintenant \xe0 l'ajout de styles \xe0 notre site web en utilisant CSS (Cascading Style Sheets). Les styles CSS permettent de d\xe9finir l'apparence visuelle de votre site, en contr\xf4lant les couleurs, les polices, la mise en page et bien plus encore. Voici comment fonctionne le CSS et comment vous pouvez l'int\xe9grer dans votre projet :"}),"\n",(0,i.jsx)(s.h3,{id:"css--ajouter-du-style-\xe0-votre-site",children:"CSS : Ajouter du style \xe0 votre site"}),"\n",(0,i.jsx)(s.p,{children:"Les feuilles de style en cascade (CSS) sont utilis\xe9es pour contr\xf4ler la pr\xe9sentation visuelle des \xe9l\xe9ments HTML sur votre site web. Vous pouvez d\xe9finir les styles dans des fichiers s\xe9par\xe9s, ce qui permet de s\xe9parer la structure du contenu (HTML) de la pr\xe9sentation visuelle (CSS). Voici comment cela fonctionne :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Cr\xe9ation du fichier de style"}),' : Dans le dossier "styles" de votre projet, vous avez un fichier nomm\xe9 "style.css". C\'est ici que vous allez d\xe9finir tous vos styles.']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Lier le fichier de style \xe0 la page HTML"})," : Dans la balise ",(0,i.jsx)(s.code,{children:"<head>"}),' de votre fichier "index.html", vous pouvez ajouter un lien vers votre fichier CSS. Utilisez la balise ',(0,i.jsx)(s.code,{children:"<link>"})," comme ceci :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<link rel="stylesheet" href="styles/style.css">\n'})}),"\n",(0,i.jsx)(s.p,{children:"Cela permet \xe0 votre page HTML d'acc\xe9der au fichier de style CSS et d'appliquer les r\xe8gles de style d\xe9finies."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\xc9crire des r\xe8gles de style"}),' : Dans le fichier "style.css", vous pouvez d\xe9finir des s\xe9lecteurs (les \xe9l\xe9ments HTML auxquels vous voulez appliquer le style) et des propri\xe9t\xe9s (les aspects du style que vous voulez d\xe9finir, comme la couleur, la taille de la police, etc.). Voici un exemple simple :']}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-css",children:"body {\n    font-family: Arial, sans-serif;\n    background-color: #f0f0f0;\n}\n\nh1 {\n    color: blue;\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Dans cet exemple, toutes les balises ",(0,i.jsx)(s.code,{children:"<h1>"})," auront un texte de couleur bleue, et le corps de la page aura une police Arial et un arri\xe8re-plan gris clair."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Appliquer le style"})," : Une fois que vous avez \xe9crit vos r\xe8gles de style dans le fichier CSS, elles seront automatiquement appliqu\xe9es aux \xe9l\xe9ments correspondants dans votre page HTML. Par exemple, toutes les balises ",(0,i.jsx)(s.code,{children:"<h1>"})," auront maintenant une couleur bleue."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"CSS offre une grande flexibilit\xe9 pour personnaliser l'apparence de votre site. Vous pouvez cibler des \xe9l\xe9ments sp\xe9cifiques, des classes ou des IDs pour appliquer des styles uniques. Il existe \xe9galement des propri\xe9t\xe9s de mise en page qui vous permettent de contr\xf4ler la position et la disposition des \xe9l\xe9ments sur la page."}),"\n",(0,i.jsx)(s.p,{children:"En suivant cette approche, vous pouvez cr\xe9er des designs attrayants et coh\xe9rents pour votre site web tout en maintenant une s\xe9paration claire entre la structure HTML et la pr\xe9sentation visuelle CSS."}),"\n",(0,i.jsxs)(s.p,{children:["Pour en savoir plus sur CSS et ses propri\xe9t\xe9s, consultez les ressources sur ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/CSS",children:"MDN CSS"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Bien s\xfbr, passons \xe0 l'ajout de l'interactivit\xe9 \xe0 votre site web en utilisant JavaScript (JS). JavaScript est un langage de programmation de scripts utilis\xe9 pour ajouter des fonctionnalit\xe9s dynamiques \xe0 vos pages web. Voici comment vous pouvez int\xe9grer JavaScript dans votre projet :"}),"\n",(0,i.jsx)(s.h3,{id:"javascript--ajouter-de-linteractivit\xe9-\xe0-votre-site",children:"JavaScript : Ajouter de l'interactivit\xe9 \xe0 votre site"}),"\n",(0,i.jsx)(s.p,{children:"JavaScript est utilis\xe9 pour rendre votre site web interactif en permettant aux utilisateurs d'effectuer des actions, de r\xe9pondre \xe0 des \xe9v\xe9nements et de manipuler le contenu en temps r\xe9el. Voici comment l'int\xe9grer \xe0 votre projet :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Cr\xe9ation du fichier de script"}),' : Dans le dossier "scripts" de votre projet, vous avez un fichier nomm\xe9 "app.js". C\'est ici que vous allez \xe9crire votre code JavaScript.']}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Lier le fichier de script \xe0 la page HTML"})," : Dans la balise ",(0,i.jsx)(s.code,{children:"<head>"}),' de votre fichier "index.html", vous pouvez ajouter un lien vers votre fichier JavaScript. Utilisez la balise ',(0,i.jsx)(s.code,{children:"<script>"})," comme ceci :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<button id="my-button"></button>\n<script src="scripts/app.js"><\/script>\n'})}),"\n",(0,i.jsx)(s.p,{children:"Cela permet \xe0 votre page HTML d'acc\xe9der au fichier de script JavaScript et d'ex\xe9cuter le code qu'il contient."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"\xc9crire des scripts JavaScript"}),' : Dans le fichier "app.js", vous pouvez \xe9crire des scripts qui r\xe9agissent aux \xe9v\xe9nements, manipulent le contenu de la page et effectuent des calculs. Voici un exemple simple :']}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"// S\xe9lectionnez un \xe9l\xe9ment par son ID et changez son texte au clic\nconst myButton = document.getElementById('my-button');\nmyButton.addEventListener('click', () => {\n    myButton.textContent = 'Clic effectu\xe9 !';\n});\n\n// Calculez et affichez la somme de deux nombres\nconst num1 = 5;\nconst num2 = 10;\nconst sum = num1 + num2;\nconsole.log('La somme est :', sum);\n"})}),"\n",(0,i.jsx)(s.p,{children:"Dans cet exemple, lorsque l'utilisateur clique sur le bouton avec l'ID \"my-button\", le texte du bouton change pour indiquer que le clic a \xe9t\xe9 effectu\xe9. Ensuite, le script calcule la somme de deux nombres et l'affiche dans la console du navigateur."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Int\xe9grer des scripts dans la page"})," : Vous pouvez \xe9galement int\xe9grer des scripts directement dans la page HTML en utilisant des balises ",(0,i.jsx)(s.code,{children:"<script>"})," :"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'<button id="my-button"></button>\n\n<script>\n    // Votre code JavaScript ici\n<\/script>\n'})}),"\n",(0,i.jsx)(s.p,{children:'Cependant, il est recommand\xe9 d\'utiliser des fichiers de script externes (comme "app.js") pour maintenir une s\xe9paration claire entre le contenu HTML et le code JavaScript.'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"JavaScript offre une grande flexibilit\xe9 pour ajouter des fonctionnalit\xe9s interactives \xe0 votre site. Vous pouvez r\xe9agir aux clics, aux soumissions de formulaire, aux mouvements de souris et bien plus encore. Vous pouvez \xe9galement manipuler le contenu HTML, modifier les styles, interagir avec des API externes et g\xe9rer des animations."}),"\n",(0,i.jsxs)(s.p,{children:["Pour en savoir plus sur JavaScript et ses fonctionnalit\xe9s, consultez les ressources sur ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript",children:"MDN JavaScript"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"exemples-de-templates",children:"Exemples de Templates"}),"\n",(0,i.jsx)(s.p,{children:"Voici quelques liens vers des exemples de templates de sites web que vous pouvez utiliser comme point de d\xe9part pour votre projet :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://example-template.com/simple-elegant",children:"Template Simple et \xc9l\xe9gant"})," : Un template minimaliste avec un design \xe9l\xe9gant, parfait pour une page de portfolio."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://example-template.com/modern-blog",children:"Template Blog Moderne"})," : Un template pour un blog moderne avec des mises en page vari\xe9es et une typographie accrocheuse."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://example-template.com/company-homepage",children:"Template Page d'Accueil d'Entreprise"})," : Un template professionnel pour la page d'accueil d'une entreprise, mettant en avant ses services et son \xe9quipe."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"tutoriels",children:"Tutoriels"}),"\n",(0,i.jsx)(s.p,{children:"Voici quelques tutoriels fictifs pour vous aider \xe0 apprendre les bases du d\xe9veloppement web :"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://example-tutorial.com/html-beginners",children:"Tutoriel HTML pour D\xe9butants"})," : Apprenez les bases de HTML, des balises aux \xe9l\xe9ments de structure, en cr\xe9ant une page simple."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://example-tutorial.com/css-intro",children:"CSS : Introduction aux Styles"})," : D\xe9couvrez comment ajouter du style \xe0 votre site web avec CSS, en personnalisant les couleurs, les polices et la mise en page."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://example-tutorial.com/js-buttons",children:"JavaScript Interactif : Boutons Cliquables"})," : Explorez les fondamentaux de JavaScript en cr\xe9ant des boutons interactifs qui changent le texte lorsqu'ils sont cliqu\xe9s."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://example-tutorial.com/css-grid-gallery",children:"Cr\xe9ation d'une Galerie d'Images avec CSS Grid"})," : Apprenez \xe0 utiliser CSS Grid pour cr\xe9er une mise en page de galerie d'images moderne et r\xe9active."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://example-tutorial.com/contact-form",children:"Formulaire de Contact HTML avec Validation"})," : Cr\xe9ez un formulaire de contact en HTML avec des champs de saisie et une validation simple en JavaScript."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Ces liens sont fictifs, mais ils illustrent comment vous pourriez trouver des ressources en ligne pour apprendre et explorer davantage le d\xe9veloppement web. N'h\xe9sitez pas \xe0 rechercher des exemples de templates et des tutoriels r\xe9els sur des sites tels que ",(0,i.jsx)(s.a,{href:"https://www.codecademy.com/",children:"Codecademy"}),", ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/",children:"MDN Web Docs"}),", ",(0,i.jsx)(s.a,{href:"https://www.w3schools.com/",children:"W3Schools"}),", et ",(0,i.jsx)(s.a,{href:"https://css-tricks.com/",children:"CSS-Tricks"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},9468:(e,s,n)=>{n.d(s,{A:()=>i});const i="data:image/png;base64,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"},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var i=n(6540);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);