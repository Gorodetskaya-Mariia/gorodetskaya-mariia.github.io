(function(e){function t(t){for(var a,n,r=t[0],c=t[1],l=t[2],d=0,u=[];d<r.length;d++)n=r[d],i[n]&&u.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},i={app:0},o=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var p=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("app-header"),s("div",{staticClass:"main"},[s("router-view")],1)],1)},o=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("div",{staticClass:"container"},[s("nav",[s("ul",{staticClass:"nav"},[s("router-link",{staticClass:"nav__link nav__link--home",attrs:{to:"/",tag:"li","active-class":"active",exact:""}},[s("a",[e._v("Home")])]),s("router-link",{staticClass:"nav__link",attrs:{to:"/about",tag:"li","active-class":"active"}},[s("a",[e._v("About")])]),s("router-link",{staticClass:"nav__link",attrs:{to:"/projects",tag:"li","active-class":"active"}},[s("a",[e._v("Projects")])])],1)])])])},r=[],c={data:function(){return{isDark:!1}}},l=c,p=s("2877"),d=Object(p["a"])(l,n,r,!1,null,null,null),u=d.exports,m={name:"app",components:{appHeader:u},created:function(){this.$store.dispatch("initProjects")}},h=m,g=Object(p["a"])(h,i,o,!1,null,null,null),v=g.exports,f=s("8c4f"),_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container container--home"},[s("div",{staticClass:"content"},[s("h1",[e._v(e._s(e.msg1))]),s("p",[e._v(e._s(e.msg2))])])])},b=[],j={data:function(){return{msg1:"I'm Mariia",msg2:"a frontend developer"}}},y=j,w=Object(p["a"])(y,_,b,!1,null,null,null),k=w.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container container--about"},[s("h2",[e._v("About me")]),s("img",{staticClass:"picture",attrs:{src:"img/foto.jpg",width:"100",height:"100",alt:"«My foto»"}}),e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),s("app-footer")],1)},C=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"about_section"},[s("h3",[e._v("Skills")]),s("div",{staticClass:"section_content"},[s("p",[e._v("HTML, CSS, Javascript, jQuery, Vuejs, Responsive Web Design, CSS-SVG Animations, Clipping in CSS and SVG, Bootstrap")]),s("p",[s("b",[e._v("Build Tools:")]),e._v(" Sass, Less, Gulp, Webpack\n      ")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"about_section"},[s("h3",[e._v("Education")]),s("div",{staticClass:"section_wrapper"},[s("div",{staticClass:"section_content"},[s("p",{staticClass:"content_education"},[s("b",[e._v("«Applied Mathematics and Informatics» «Chelyabinsk State University»")])]),s("i",[e._v("Sep, 2005 - June, 2009")]),s("p",[e._v("Bachelor Degree of Applied Mathematics and Computer Science")])]),s("div",{staticClass:"section_content"},[s("p",{staticClass:"content_education"},[s("b",[e._v("«Applied Mathematics and Informatics» «Chelyabinsk State University»")])]),s("i",[e._v("Sep, 2009 - June, 2011")]),s("p",[e._v("Master Degree of Applied Mathematics and Computer Science")])]),s("div",{staticClass:"section_content"},[s("p",{staticClass:"content_education"},[s("b",[e._v("«Accounting, Analysis and Audit» «Chelyabinsk State University»")])]),s("i",[e._v("Sep, 2009 - June, 2012")]),s("p",[e._v("Master Degree of «Accounting, Analysis and Audit»")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"about_section"},[s("h3",[e._v("Experience")]),s("div",{staticClass:"section_wrapper"},[s("div",{staticClass:"section_content"},[s("p",{staticClass:"content_education"},[s("a",{attrs:{href:"https://tommy-gun.pro/",target:"_blank"}},[s("b",[e._v("«TOMMY-GUN»")])]),e._v("\n              Chelyabinsk\n        ")]),s("i",[e._v("July, 2018 - Oct, 2018")])]),s("div",{staticClass:"section_content"},[s("p",{staticClass:"content_education"},[s("a",{attrs:{href:"https://art.su/",target:"_blank"}},[s("b",[e._v("«Eyetronic»")])]),e._v("\n              Saint Petersburg\n        ")]),s("i",[e._v("Nov, 2018 - Sep, 2019")])]),s("div",{staticClass:"section_content"},[s("p",{staticClass:"content_education"},[s("b",[e._v("What is done")])]),s("ul",{staticClass:"content_list"},[s("li",[e._v("three Landing Pages (Responsive Web Design)")]),s("li",[e._v("have developed mobile and tablet versions for two projects (desktop first). Every project contains about 20 pages.")]),s("li",[e._v("have modified more 30 sections of projects (redesign)")]),s("li",[e._v("optimization of code")])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"about_section"},[s("h3",[e._v("Courses")]),s("div",{staticClass:"section_content"},[s("p",[s("b",[e._v("HTML Academy:")]),e._v(" HTML/CSS Level 1 and Level 2\n      ")]),s("p",[s("b",[e._v("Dmitry Lavrik:")]),e._v(" Javascript for a frontend developer\n      ")]),s("p",[s("b",[e._v("Maximilian Schwarzmuller:")]),e._v(" Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)\n      ")]),s("p",[s("b",[e._v("Mosh Hamedani:")]),e._v(" Object-oriented Programming in JavaScript\n      ")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"about_section"},[s("h3",[e._v("Languages")]),s("div",{staticClass:"section_content"},[s("p",[s("b",[e._v("English proficiency:")]),e._v(" CEFR Level - B2. I have an IELTS Certificate: L 5.5, R 7.5, W 6, S 6.5.\n      ")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"about_section"},[s("h3",[e._v("eBooks")]),s("div",{staticClass:"section_content"},[s("p",[e._v("\n        LearnJavascript\n        "),s("u",[e._v("by Ilya Kantor")])]),s("p",[e._v("\n        CSS Secrets\n        "),s("u",[e._v("by Lea Verou")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"about_section"},[s("h3",[e._v("Next goal")]),s("div",{staticClass:"section_content"},[s("p",[e._v("\n        to complete \"You Don't Know JS\" book's series\n        "),s("u",[e._v("by Kyle Simpson")])])])])}],x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",[s("div",{staticClass:"container"},[s("ul",{staticClass:"contacts"},[s("li",{staticClass:"contacts__item"},[s("svg",{staticClass:"icon icon--map-marker"},[s("use",{attrs:{"xlink:href":"#location","xmlns:xlink":"http://www.w3.org/1999/xlink"}})]),e._v("\n          Saint Petersburg")]),s("li",{staticClass:"contacts__item"},[s("a",{attrs:{href:"mailto:1907mss@gmail.com"}},[s("svg",{staticClass:"icon icon--email"},[s("use",{attrs:{"xlink:href":"#email","xmlns:xlink":"http://www.w3.org/1999/xlink"}})]),e._v("\n            1907mss@gmail.com")])]),s("li",{staticClass:"contacts__item"},[s("a",{attrs:{href:"javascript:void(0);"}},[s("svg",{staticClass:"icon icon--skype"},[s("use",{attrs:{"xlink:href":"#skype","xmlns:xlink":"http://www.w3.org/1999/xlink"}})]),e._v("\n            1907mss")])]),s("li",{staticClass:"contacts__item contacts__item--github"},[s("a",{attrs:{href:"https://github.com/Gorodetskaya-Mariia",target:"_blank"}},[s("svg",{staticClass:"icon icon--github"},[s("use",{attrs:{"xlink:href":"#github","xmlns:xlink":"http://www.w3.org/1999/xlink"}})])])]),s("li",{staticClass:"contacts__item contacts__item--linkedin"},[s("a",{attrs:{href:"https://www.linkedin.com/in/mariia-gorodetskaya-31a9ab174/",target:"_blank"}},[s("svg",{staticClass:"icon icon--linkedin"},[s("use",{attrs:{"xlink:href":"#linkedin","xmlns:xlink":"http://www.w3.org/1999/xlink"}})])])])])])])},M=[],P={},E=Object(p["a"])(P,x,M,!1,null,null,null),T=E.exports,O={components:{appFooter:T}},L=O,A=Object(p["a"])(L,S,C,!1,null,null,null),G=A.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e._m(0),s("transition",{attrs:{name:"slide",mode:"out-in"}},[s("div",{staticClass:"projects"},e._l(e.projects,function(e,t){return s("app-project",{key:t,attrs:{project:e}})}),1)])],1)},I=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",{staticClass:"projects__title"},[e._v("My projects"),s("br"),e._v(" from last to first")])}],D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"project__item"},[s("img",{staticClass:"project__image",attrs:{src:e.project.image,alt:"Project's image"}}),s("div",{staticClass:"project__desc"},[s("h3",[e._v(e._s(e.project.name))]),s("a",{staticClass:"project__link",on:{click:e.viewProject}},[e._v("View more")])])])},J=[],R=(s("7f7f"),{props:["project"],methods:{viewProject:function(){var e={projectId:this.project.id,projectName:this.project.name};this.$store.dispatch("viewProject",e),this.$router.push(this.project.url)}}}),$=R,H=Object(p["a"])($,D,J,!1,null,null,null),B=H.exports,W={components:{appProject:B},computed:{projects:function(){return this.$store.getters.projects}}},U=W,z=Object(p["a"])(U,V,I,!1,null,null,null),F=z.exports,N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.projects,function(e,t){return s("app-project",{key:t,attrs:{project:e}})}),1)},Y=[],q=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),K=s("2f62"),Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container project-page"},[s("div",{staticClass:"project__link-wrapper"},[s("router-link",{staticClass:"project__link",attrs:{to:"/projects",tag:"a","active-class":"active"}},[e._v("Back")])],1),s("a",{staticClass:"project__link project__link--name project__link--mobile",attrs:{href:e.project.link,target:"_blank"}},[e._v(e._s(e.project.name))]),s("a",{staticClass:"project__link project__link--github project__link--mobile",attrs:{href:e.project.github,target:"_blank"}},[e._v("View on GitHub")]),s("div",{staticClass:"project__image"},[s("img",{attrs:{src:e.project.image,srcset:e.project.image2,alt:"Project's image"}})]),s("div",{staticClass:"project__info"},[s("a",{staticClass:"project__link project__link--name",attrs:{href:e.project.link,target:"_blank"}},[e._v(e._s(e.project.name))]),s("a",{staticClass:"project__link project__link--github",attrs:{href:e.project.github,target:"_blank"}},[e._v("View on GitHub")]),s("h4",[e._v("Technology stack and techniques used in project:")]),s("p",[e._v(e._s(e.project.stacks))]),e.project.lib?s("h4",[e._v("Libraries:")]):e._e(),s("p",[e._v(e._s(e.project.lib))]),s("h4",[e._v("Pages implemented:")]),s("p",[e._v(e._s(e.project.pages))])]),s("div",{staticClass:"project__overview"},[s("h4",[e._v("Project overview")]),s("ul",[s("li",[e._v(e._s(e.project.desc1))]),s("li",[e._v(e._s(e.project.desc2))]),s("li",[e._v(e._s(e.project.desc3))]),s("li",[e._v(e._s(e.project.desc4))]),e.project.desc5?s("li",[e._v(e._s(e.project.desc5))]):e._e(),e.project.desc6?s("li",[e._v(e._s(e.project.desc6))]):e._e(),e.project.desc7?s("li",[e._v(e._s(e.project.desc7))]):e._e(),e.project.desc8?s("li",[e._v(e._s(e.project.desc8))]):e._e(),e.project.desc9?s("li",[e._v(e._s(e.project.desc9))]):e._e(),e.project.desc10?s("li",[e._v(e._s(e.project.desc10))]):e._e(),e.project.desc11?s("li",[e._v(e._s(e.project.desc11))]):e._e(),e.project.desc12?s("li",[e._v(e._s(e.project.desc12))]):e._e()])])])},X=[],Z={props:["project"]},ee=Z,te=Object(p["a"])(ee,Q,X,!1,null,null,null),se=te.exports;function ae(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function ie(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?ae(s,!0).forEach(function(t){Object(q["a"])(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ae(s).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}var oe={computed:ie({},Object(K["b"])({projects:"projectSingle"})),components:{appProject:se}},ne=oe,re=Object(p["a"])(ne,N,Y,!1,null,null,null),ce=re.exports;a["a"].use(f["a"]);var le=new f["a"]({mode:"history",base:"/",routes:[{path:"/",component:k},{path:"/about",component:G},{path:"/projects",component:F},{path:"/stock-trader",component:ce},{path:"/mi-music",component:ce},{path:"/mishka",component:ce},{path:"/sedona",component:ce},{path:"/nerds",component:ce},{path:"/barbershop",component:ce},{path:"/project",component:ce}]}),pe=[{id:1,name:"The Stock Trader (a vuejs project)",url:"/stock-trader",image:"/img/img-stock-trader.jpg",image2:"/src/images/img-stock-trader@2x.jpg 2x",info:"",link:"https://vuejs-project-stock-trader.herokuapp.com/",stacks:"Vue Router, Vuex, Vue Resource and Firebase, Javascript, Animation for Route transitions, Responsive Web Design approach, CSS Flexbox Layout",pages:"Home page, Stocks, Portfolio",desc1:"Vue Router was installed for setting up routes. The project has three routes: to home page, to the portfolio and to the stocks page.",desc2:"Vuex: two modules were created, one for the Portfolio and one for Stocks. Each of these modules has its own state. There is nothing in a global state ( store.js ) because the stocks which are available were mapped to the stocks module (store/modules/stocks.js). The funds belong to the portfolio (store/modules/portfolio.js).",desc3:"Vue Resource is used to send requests to Firebase for fetching (GET Requests) and Saving Data (PUT Requests). So, you may «Save» and «Load» your data.",desc4:"Animation was used for animating the transition between routes. The router view is wrapped by transition with name «slide». Two classes were used to set up animations: «slide-enter-active» and «slide-leave-active».",desc5:"Price of every stock on «Stocks» and «Portfolio» pages can be updated by clicking on a button «End Day». It is achieved by a function which randomizes prices. They will be updated on «Stocks» and «Portfolio» pages immediately.",github:"https://github.com/Gorodetskaya-Mariia/The-Stock-Trader"},{id:2,name:"MI-Music",url:"/mi-music",image:"/img/img-mi-music.jpg",image2:"/img/img-mi-music@2x.jpg 2x",info:"",link:"https://gorodetskaya-mariia.github.io/MI-Music/build/",stacks:"HTML5, CSS3, Javascript, Gulp, Sass (mixins, nesting, variables), CSS and SVG Animations, Clipping in CSS and SVG, BEM methodology, Various PostCSS plugins, Responsive Web Design approach, CSS Grid Layout, «Smart» Iframe, Form validation",pages:"Home page",desc1:"CSS Animations were used for a beautiful animation not only buttons, but also social icons, menu items, input labels («Sign Up» section).",desc2:"SVG Animation of a button for opening and closing a menu is achieved by changing the stroke-dasharray parameter using keyframes so the paths of svg transform.",desc3:"Clip-path CSS property was used not only to create different edge angles butting up against one another in sections like «Header» and «Being Social», but also to create decorative circles.",desc4:"The SVG «clipPath» element helps to use the «path» element as a clipping path. The paths of SVG were wrapped into «clipPath» with «id». The id was used to connect SVG and a section where I want to use «clipPath» (sections «Live Dates» and «News»).",desc5:"SVG «text» can be displayed using a custom font. It was used to display a name of one album «Alone» in the section «Listen to MIMUSIC». The width of the text was set to be the same as the width of the image, using the textLength attribute, and positioned the text using the x and y coordinates.",desc6:"When you leaf through posts from social media («Being Social») or click on titles of news («News») you can see animations which were achieved through adding classes with different animations to active elements.",desc7:"«Smart» Iframe is a method which was used to add videos from «youtube». Videos are not located on page, only urls to them in a tag «a». So, by clicking on every image in a section «Listen to MIMUSIC» an «iframe» is created in DOM with url which was stored in the tag «a».",desc8:"Simple validation in «Sign Up» section was done by small script and properties of tags from HTML5.",desc9:"CSS Grid Layout was used to display popular songs in the section «Listen to MIMUSIC».",desc10:"Responsive Web Design is achieved through flexboxes, grids and media expressions.",desc11:"About Gulp taskrunner: A local Browsersync server with auto-refresh is used for developing process. Gulp is subscribed to changes in *.js / *.sass / *.html files and if any of them changes, it launches pipe tasks that perform optimizations, transpile from .sass to .css, minify and concatenate scripts and style sheets. In the prod .css styles, the necessary vendor prefixes are automatically applied.",desc12:'A loading attribute of «img» was used to avoid loading offscreen images on the page. The loading attribute allows a browser to defer loading offscreen images until users scroll near them. If loading is not supported, a fallback («vanilla-lazyload» - a lazy loading library) is loaded and initiated it. An attribute loading="lazy" is a way to indicate to «vanilla-lazyload» which images should be lazily-loaded.',github:"https://github.com/Gorodetskaya-Mariia/MI-Music"},{id:3,name:"Mishka",url:"/mishka",image:"/img/img-mishka.jpg",image2:"/img/img-mishka@2x.jpg 2x",link:"https://gorodetskaya-mariia.github.io/mishka/",stacks:"HTML5, CSS3, Javascript, Gulp, Sass (mixins, nesting, variables), CSS and SVG Animations, BEM methodology, Various PostCSS plugins, Responsive Web Design approach, CSS Flexbox Layout",lib:"Swiper.js, Lingumania.js",pages:"Main page, Catalog, Custom knitting",desc1:"You can find a modal window to choose a size of products by clicking on button «Order» on main page.",desc2:"CSS Animations were used for beautiful animations not only of buttons, but also backgrounds of titles on every page and a mobile menu.",desc3:"SVG Animations were used to animate a button for opening and closing a mobile menu.",desc4:"Swiper.js library was chosen to implement a slider of reviews (section «Reviews» on main page).",desc5:"Lingumania.js library was chosen to localize website. A simple JSON was added with translations.The website is available in two languages (Russian and English).",desc6:"Responsive Web Design is achieved through flexboxes and media expressions. Every image is a responsive image — image that works well on devices with widely differing screen sizes and resolutions. This way the browser can choose the image that best fits the current view and device. I used tag «picture» to add more flexibility when specifying image resources.",desc7:"A map in contacts section on main page is an interactive Google Map.",desc8:"About Gulp taskrunner: A local Browsersync server with auto-refresh is used for developing process. Gulp is subscribed to changes in *.js / *.sass / *.html files and if any of them changes, it launches pipe tasks that perform optimizations, transpile from .sass to .css, minify and concatenate scripts and style sheets. In the prod .css styles, the necessary vendor prefixes are automatically applied.",github:"https://github.com/Gorodetskaya-Mariia/mishka"},{id:4,name:"Sedona",url:"/sedona",image:"/img/img-sedona.jpg",image2:"/img/img-sedona@2x.jpg 2x",link:"https://gorodetskaya-mariia.github.io/Sedona/",stacks:"HTML5, CSS3, Javascript, SVG Animations, Parallax effect, BEM methodology, Static Web Design, CSS Flexbox Layout",lib:"noUiSlider.js, Datepicker.js",pages:"Main page, Hotels",desc1:"You can find a modal window to fill a form for searching a hotel by clicking on button «Search a hotel in Sedona» on main page.",desc2:"noUiSlider.js library was chosen to implement choosing of cost on «Hotels» page.",desc3:"Datepicker.js library was chosen to pick date in the modal window.",desc4:"The parallax effect is achieved by shifting the image along the Y axis when scrolling the page, which is inversely proportional to the position of the scrollbar and the set value of the data attribute.",desc5:"SVG Animation of icons in features section is achieved by setting the stroke-dasharray property and changing the stroke-dashoffset parameter using keyframes so the path of SVG is redrawn.",desc6:"A map in contacts section on main page is an interactive Google Map.",github:"https://github.com/Gorodetskaya-Mariia/Sedona"},{id:5,name:"Nerds",url:"/nerds",image:"/img/img-nerds.jpg",image2:"/img/img-nerds@2x.jpg 2x",link:"https://gorodetskaya-mariia.github.io/Nerds/",stacks:"HTML5, CSS3, Javascript, functionality, Form validation, CSS Animations, BEM methodology, Static Web Design, CSS Flexbox Layout",lib:"Swiper.js, noUiSlider.js",pages:"Main page, Catalog",desc1:"You can find a modal window to send a message (a comment) by clicking on button «Write us» in contacts section on every page.",desc2:"Simple validation in the modal window was done by small script and properties of tags from HTML5.",desc3:"Swiper.js library was chosen to implement a slider of advantages on main page.",desc4:"noUiSlider.js library was chosen to implement choosing of cost on «Catalog» page.",desc5:"CSS Animations were used for beautiful animations not only of buttons, but also for displaying more information about products on «Catalog» page.",desc6:"A map in contacts section on main page is an interactive Google Map.",desc7:"You can find links to other my projects in a section before «Contacts» on main page.",github:"https://github.com/Gorodetskaya-Mariia/Nerds"},{id:6,name:"Barbershop",url:"/barbershop",image:"/img/img-barbershop.jpg",image2:"/img/img-barbershop@2x.jpg 2x",link:"https://gorodetskaya-mariia.github.io/Barbershop/",stacks:"HTML5, CSS3, Javascript, BEM methodology, Static Web Design, Flexbox",pages:"Main page, Stock, Catalog, Catalog item",desc1:"You can find a modal window to log in by clicking on button «Log in» in header on every page.",desc2:"The next modal window will be shown by clicking on button «Way to get to» in contacts section on main page.",desc3:"CSS Animations were used for an animation modal windows.",desc4:"A map in a modal window is an interactive Google Map.",github:"https://github.com/Gorodetskaya-Mariia/Barbershop"}],de={projects:[]},ue={SET_PROJECTS:function(e,t){e.projects=t}},me={viewProject:function(e,t){var s=e.commit;s("VIEW_PROJECT",t)},initProjects:function(e){var t=e.commit;t("SET_PROJECTS",pe)}},he={projects:function(e){return e.projects}},ge={state:de,mutations:ue,actions:me,getters:he},ve=(s("b54a"),s("7514"),s("6d67"),{projects:[]}),fe={VIEW_PROJECT:function(e,t){var s=t.projectId,a=t.projectName;e.projects=[],e.projects.push({id:s,name:a})},SET_PROJECT:function(e,t){e.projects=t}},_e={initProject:function(e){var t=e.commit;t("SET_PROJECT",projects)}},be={projectSingle:function(e,t){return e.projects.map(function(e){var s=t.projects.find(function(t){return t.id==e.id});return{id:e.id,name:e.name,image:s.image,image2:s.image2,stacks:s.stacks,lib:s.lib,pages:s.pages,desc1:s.desc1,desc2:s.desc2,desc3:s.desc3,desc4:s.desc4,desc5:s.desc5,desc6:s.desc6,desc7:s.desc7,desc8:s.desc8,desc9:s.desc9,desc10:s.desc10,desc11:s.desc11,desc12:s.desc12,link:s.link,github:s.github}})}},je={state:ve,mutations:fe,actions:_e,getters:be};a["a"].use(K["a"]);var ye=new K["a"].Store({modules:{projects:ge,projectPage:je}});a["a"].config.productionTip=!1,new a["a"]({router:le,store:ye,render:function(e){return e(v)}}).$mount("#app");var we=document.querySelector("body");le.beforeEach(function(e,t,s){"/"==e.path?we.classList.add("home"):we.classList.remove("home"),s()}),function(){var e=window.location.pathname;"/"==e?(we.classList.add("home"),console.log("yes")):(we.classList.remove("home"),console.log("no"))}()}});
//# sourceMappingURL=app.64233f05.js.map