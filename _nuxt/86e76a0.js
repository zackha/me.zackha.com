(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{283:function(t,e,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(121).default)("5c645f9a",content,!0,{sourceMap:!1})},285:function(t,e,r){"use strict";r(283)},286:function(t,e,r){var n=r(120)((function(i){return i[1]}));n.push([t.i,'.pane,.scrollable-pane{position:relative}.pane{height:370px;overflow-x:hidden;overflow-y:scroll}.scrollable-pane:after,.scrollable-pane:before{content:"";height:50px;opacity:1;position:absolute;transition:.5s ease;width:100%;z-index:10}.scrollable-pane:before{background:linear-gradient(0deg,hsla(0,0%,100%,0),#f2f2f2 90%);margin-top:-1px;top:0}.scrollable-pane:after{background:linear-gradient(180deg,hsla(0,0%,100%,0),#f2f2f2 90%);bottom:0;margin-bottom:-1px}.bottom.scrollable-pane:after,.top.scrollable-pane:before{height:0}.bottom .arrow-down,.top .arrow-up{opacity:0}.project{display:flex}.project img{border-radius:6px;box-shadow:0 0 5px -2px rgba(0,0,0,.19);height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.image-wrapper{margin:5px;width:100%}.mb{margin-bottom:11px}.description{display:flex;flex-wrap:wrap;padding:.75rem;width:100%}.projectname{font-size:14px;font-weight:400;line-height:1;margin:0 0 .625rem}.detail{height:75px}.visit{align-self:flex-end}.arrow-down,.arrow-up{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxMCIgZmlsbD0iI0JBQkFCQSI+PHBhdGggZD0ibTQuNTc4IDguNTcxIDQuOTk2LTUgMS40MjcgMS40MjgtNC45OTYgNXpNMCA0LjA0MWg5LjA4M3YyLjAySDB6bTQuNTc4LTIuNjEyTDYuMDA1LjAwMWw0Ljk5NiA1LTEuNDI3IDEuNDI4eiIvPjwvc3ZnPg==);background-repeat:no-repeat;background-size:11px;height:10px;position:absolute;right:50%;transition:.5s ease;width:11px}.arrow-down{bottom:-15px;transform:rotate(90deg)}.arrow-up{top:-15px;transform:rotate(-90deg)}::-webkit-scrollbar{width:8px}::-webkit-scrollbar-track{border-radius:7px}::-webkit-scrollbar-thumb{background:#d5d5d5;border-radius:7px}::-webkit-scrollbar-thumb:hover{background:#c5c5c5}',""]),n.locals={},t.exports=n},294:function(t,e,r){"use strict";r.r(e);var n={mounted:function(){var t=document.querySelector(".pane"),e=document.querySelector(".pane .scrollable"),r=document.querySelector(".scrollable-pane");t&&e&&r&&t.addEventListener("scroll",(function(){var n=t.scrollTop,o=n<50,c=n>=50&&n<e.scrollHeight-t.offsetHeight-50;r.classList.toggle("top",o),r.classList.toggle("middle",c),r.classList.toggle("bottom",!o&&!c)}))}},o=(r(285),r(37)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"scrollable-pane top"},[e("div",{staticClass:"arrow-up"}),t._v(" "),e("div",{staticClass:"pane"},[e("div",{staticClass:"projects scrollable"},[e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"https://dashboard.8design.io",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/8design.jpg"}})],1)]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"https://giris.reklamyap.app",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/reklamyap-web.jpg"}})],1)]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"https://apps.apple.com/mn/app/reklam-yap/id6470991003",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/reklamyap-app.jpg"}})],1)]),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"https://madewithai.netlify.app",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/madewithai.jpg"}})],1)]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"https://nuxtcommerce.netlify.app",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/nuxtcommerce.png"}})],1)]),t._v(" "),t._m(4)]),t._v(" "),e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"https://retrocommerce.vercel.app",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/retrocommerce.png"}})],1)]),t._v(" "),t._m(5)]),t._v(" "),e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"/images/woonuxt-bg.png",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/woonuxt.png"}})],1)]),t._v(" "),t._m(6)]),t._v(" "),e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"/images/reybul-bg.png",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/reybul.png"}})],1)]),t._v(" "),t._m(7)]),t._v(" "),e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"/images/zackha.jpg",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/zackha.jpg"}})],1)]),t._v(" "),t._m(8)]),t._v(" "),e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"https://github.com/zackha/woocommerce-admin/",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/github.png"}})],1)]),t._v(" "),t._m(9)]),t._v(" "),e("div",{staticClass:"project mb"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"https://github.com/zackha/supaAuth/",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/supaAuth.png"}})],1)]),t._v(" "),t._m(10)]),t._v(" "),e("div",{staticClass:"project"},[e("div",{staticClass:"image-wrapper"},[e("a",{attrs:{href:"https://github.com/zackha/ra-data-woocommerce/",target:"_blank"}},[e("nuxt-img",{attrs:{format:"webp",width:"300",src:"/images/github.png"}})],1)]),t._v(" "),t._m(11)])])]),t._v(" "),e("div",{staticClass:"arrow-down"})])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("8Design.io")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            A todo management system cloned from the breeew platform,\n            developed using the Nuxt3 framework.\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://dashboard.8design.io"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("Reklam Yap - Web")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            A Nuxt3 app that allows supermarkets to create advertisements for\n            their weekly discounts in brochure, social media, and video\n            formats.\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://giris.reklamyap.app"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("Reklam Yap - App")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            A React Native app that allows supermarkets to create\n            advertisements for their weekly discounts in brochure, social\n            media, and video formats.\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://apps.apple.com/mn/app/reklam-yap/id6470991003"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("Made With AI")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            A project written using Nuxt3 and the GitHub REST API to\n            automatically send invitation emails for joining a GitHub\n            organization.\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://madewithai.netlify.app"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("NuxtCommerce")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            An open-source, dynamic e-commerce solution powered by Nuxt 3 and\n            GraphQL, headless storefront replacement for Woocommerce.\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://nuxtcommerce.netlify.app"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("retroCommerce")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            An open-source, dynamic e-commerce solution powered by Nuxt 3 and\n            GraphQL, headless storefront replacement for Woocommerce.\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://retrocommerce.vercel.app"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("woonuxt.com")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            Developed by\n            "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://github.com/scottyzen"}},[t._v("@scottyzen")]),t._v("\n            using Nuxt, GraphQL and WooCommerce, and I'm continuing to develop\n            the second interface demo.\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://demo2-woonuxt.netlify.app/product/patterned-wrap-skirt/"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("reybul.com")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            Furniture Corporate Website developed using only HTML and CSS\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://reybul.com/"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("zackha.com")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            My personal website has been developed using Nuxt2.\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://zackha.com/"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("woocommerce-admin")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            An alternative open source woocommerce admin panel developed with\n            "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://github.com/marmelab/react-admin"}},[t._v("React Admin")])]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://github.com/zackha/woocommerce-admin/"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("supaAuth")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            A\n            "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://nuxt.com/"}},[t._v("Nuxt3")]),t._v("\n            +\n            "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://supabase.com/"}},[t._v("Supabase")]),t._v("\n            starter template. Add Login and Register page into your Nuxt 3\n            project using Supabase authentication.\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://github.com/zackha/supaAuth/"}},[t._v("examine the project >")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"description"},[e("div",{staticClass:"projectname"},[t._v("ra-data-woocommerce")]),t._v(" "),e("div",{staticClass:"detail"},[t._v("\n            Woocommerce REST API Data Provider for\n            "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://github.com/marmelab/react-admin"}},[t._v("react-admin")]),t._v(", the frontend framework for building admin applications on top\n            of REST/GraphQL services.\n          ")]),t._v(" "),e("a",{staticClass:"visit link",attrs:{target:"_blank",href:"https://github.com/zackha/ra-data-woocommerce/"}},[t._v("examine the project >")])])}],!1,null,null,null);e.default=component.exports}}]);