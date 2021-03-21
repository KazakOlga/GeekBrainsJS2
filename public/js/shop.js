(()=>{"use strict";var n={705:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=n(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(e)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);e&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),r.push(c))}},r}},426:(n,r,t)=>{t.d(r,{Z:()=>o});var e=t(705),i=t.n(e)()((function(n){return n[1]}));i.push([n.id,".center {\r\n    padding-left: calc(50% - 570px);\r\n    padding-right: calc(50% - 570px)\r\n}\r\n\r\n.header {\r\n    background: #222222;\r\n    height: 75px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    position: relative\r\n}\r\n\r\n.header__box {\r\n    display: block\r\n}\r\n\r\n.header__box_nav {\r\n    display: none\r\n}\r\n\r\n.header__box_img {\r\n    fill: #E8E8E8\r\n}\r\n\r\n\r\n.header_right {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n#switcher {\r\n    position: absolute;\r\n    left: -9999999999px;\r\n    visibility: hidden;\r\n}\r\n\r\n#switcher:checked~.drop {\r\n    opacity: 1;\r\n    visibility: visible\r\n}\r\n\r\n\r\n.drop {\r\n    background: #FFFFFF;\r\n    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21);\r\n    padding: 37px 32px;\r\n    position: absolute;\r\n    top: 75px;\r\n    right: 0;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    width: 232px;\r\n    height: 768px;\r\n    transition: opacity .4s;\r\n    z-index: 1\r\n}\r\n\r\n\r\n.drop__box {\r\n    margin-top: 20px\r\n}\r\n\r\n.drop__menu {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    color: #000000;\r\n    display: block\r\n}\r\n\r\n\r\n.drop__heading {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    color: #F16D7F;\r\n    display: block;\r\n    transition: transform 0.2s\r\n}\r\n\r\n.drop__heading:hover {\r\n    transform: scale(1.05)\r\n}\r\n\r\n.drop__links {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    color: #6F6E6E;\r\n    margin-bottom: 11px;\r\n    display: block;\r\n    transition: transform 0.2s\r\n}\r\n\r\n.drop__links:hover {\r\n    color: #F16D7F;\r\n    transform: scale(1.05)\r\n}\r\n\r\n.drop__ul {\r\n    list-style-type: none;\r\n    padding-left: 20px;\r\n    margin-top: 12px\r\n}\r\n\r\n.search {\r\n    margin-left: 41px\r\n}\r\n\r\n\r\n.account {\r\n    margin-left: 34px;\r\n    margin-right: 34px\r\n}\r\n\r\n\r\n.header_trans {\r\n    transition: transform 0.3s\r\n}\r\n\r\n.header_trans:hover {\r\n    transform: translateY(-3px)\r\n}\r\n\r\n.main_text {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    color: #9F9F9F\r\n}\r\n\r\n.catalog_header {\r\n    height: 148px;\r\n    background: #F8F3F4;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center\r\n}\r\n\r\n\r\n.catalog_header_zag {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    color: #F16D7F;\r\n    animation: tracking-in-contract 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;\r\n}\r\n\r\n\r\n.catalog_header_links {\r\n    display: flex\r\n}\r\n\r\n\r\n\r\n\r\n.cart_content_product_inform {\r\n    padding-top: 56px;\r\n    padding-bottom: 73px;\r\n    padding-right: 130px;\r\n}\r\n\r\n.cart_content__product {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 652px;\r\n    height: 306px;\r\n    -webkit-filter: drop-shadow(17px 19px 24px rgba(0, 0, 0, 0.13));\r\n    filter: drop-shadow(17px 19px 24px rgba(0, 0, 0, 0.13));\r\n    margin-top: 40px;\r\n}\r\n\r\n.cart_content__product_info {\r\n    width: 390px;\r\n    height: 306px;\r\n    background: #FFFFFF;\r\n}\r\n\r\n.cart_content__heading {\r\n    font-family: Lato;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    line-height: 29px;\r\n    color: #222222;\r\n    width: 262px;\r\n    padding-left: 31px;\r\n    padding-top: 22px;\r\n}\r\n\r\n.cc_heading {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    margin-bottom: 42px;\r\n}\r\n\r\n.krestik {\r\n    padding-right: 22px;\r\n}\r\n\r\n.cc_text {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 22px;\r\n    line-height: 26px;\r\n    color: #575757;\r\n    padding-bottom: 8px;\r\n    padding-left: 31px;\r\n}\r\n\r\n.ccq {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.quantity {\r\n    width: 44px;\r\n    height: 24px;\r\n    border: 1px solid #EAEAEA;\r\n    margin-left: 24px;\r\n    text-align: center;\r\n}\r\n\r\n.q_text {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    color: #656565;\r\n}\r\n\r\n.color_price {\r\n    color: #F16D7F;\r\n}\r\n\r\n.shop_content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap\r\n}\r\n\r\n\r\n.shop_block {\r\n    width: 360px;\r\n    background: #F8F8F8;\r\n    position: relative;\r\n    transition: transform 0.3s;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.shop_block:hover {\r\n    transform: scale(1.04)\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.add_cart {\r\n    position: absolute;\r\n    top: 188px;\r\n    left: 111px;\r\n    width: 139px;\r\n    height: 43px;\r\n    border: 1px solid white;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    color: #FFFFFF;\r\n    background-color: transparent;\r\n    opacity: 100;\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: none\r\n}\r\n\r\n\r\n.shop_img {\r\n    width: 100%\r\n}\r\n\r\n\r\n.shop_name {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 13px;\r\n    line-height: 16px;\r\n    color: #000000;\r\n    padding-bottom: 12px\r\n}\r\n\r\n\r\n.mts {\r\n    padding-top: 12px\r\n}\r\n\r\n\r\n.sbm {\r\n    margin-bottom: 30px\r\n}\r\n\r\n\r\n.price {\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 16px;\r\n    line-height: 19px;\r\n    color: #F16D7F;\r\n    padding-top: 18px\r\n}\r\n\r\n\r\n.shop_content_box {\r\n    margin-left: 18px;\r\n    margin-right: 18px;\r\n    margin-top: 25px;\r\n    margin-bottom: 20px\r\n}\r\n\r\n.browse_button {\r\n    width: 211px;\r\n    height: 47px;\r\n    border: 1px solid #FF6A6A;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 23px;\r\n    line-height: 19px;\r\n    color: #F26376;\r\n    background-color: #FFFFFF;\r\n    padding-top: 14px;\r\n}\r\n\r\n.browse_button:hover {\r\n    background-color: #F26376;\r\n    color: white;\r\n}\r\n\r\n.button {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin-top: 48px;\r\n    margin-bottom: 91px;\r\n}\r\n\r\n.btn {\r\n    height: 45px;\r\n    width: 120px;\r\n    background-color: transparent;\r\n    border: 1px solid #FF6A6A;\r\n    color: #FF6A6A;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-size: 15px;\r\n    margin-left: 122px;\r\n    margin-bottom: 25px;\r\n\r\n}\r\n\r\n.btn:hover {\r\n    background-color: #F26376;\r\n    color: white;\r\n}",""]);const o=i},379:(n,r,t)=>{var e,i=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),o=[];function a(n){for(var r=-1,t=0;t<o.length;t++)if(o[t].identifier===n){r=t;break}return r}function s(n,r){for(var t={},e=[],i=0;i<n.length;i++){var s=n[i],c=r.base?s[0]+r.base:s[0],l=t[c]||0,p="".concat(c," ").concat(l);t[c]=l+1;var d=a(p),h={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(o[d].references++,o[d].updater(h)):o.push({identifier:p,updater:u(h,r),references:1}),e.push(p)}return e}function c(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,p=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function d(n,r,t,e){var i=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=p(r,i);else{var o=document.createTextNode(i),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(o,a[r]):n.appendChild(o)}}function h(n,r,t){var e=t.css,i=t.media,o=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var f=null,m=0;function u(n,r){var t,e,i;if(r.singleton){var o=m++;t=f||(f=c(r)),e=d.bind(null,t,o,!1),i=d.bind(null,t,o,!0)}else t=c(r),e=h.bind(null,t,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var t=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var i=a(t[e]);o[i].references--}for(var c=s(n,r),l=0;l<t.length;l++){var p=a(t[l]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}t=c}}}}},r={};function t(e){var i=r[e];if(void 0!==i)return i.exports;var o=r[e]={id:e,exports:{}};return n[e](o,o.exports,t),o.exports}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n=t(379),r=t.n(n),e=t(426);function i(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}r()(e.Z,{insert:"head",singleton:!1}),e.Z.locals;class o{constructor(n,r){i(this,"_text",""),i(this,"_callback",null),this._text=n,this._callback=r}onBtnClick(){const n=this._callback;"function"==typeof n&&n()}getTemplate(){const n=document.createElement("button");return n.classList.add("btn"),n}render(n){if(n){const r=this.getTemplate();r.innerHTML=this._text,n.appendChild(r),r.addEventListener("click",(()=>{this.onBtnClick()}))}}}function a(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}class s{constructor({name:n,price:r,img:t}){a(this,"_name",""),a(this,"_price",0),a(this,"_img",""),a(this,"counter",1),this._name=n,this._price=r,this._img=t}render(n){const r=document.createElement("div");r.innerHTML=`<div class="cart_content_product_inform center">\n        <div class="cart_content__product">\n            <img src="${this._img}" alt="product_photo">\n            <div class="cart_content__product_info">\n                <div class="cc_heading">\n                    <h3 class="cart_content__heading">${this._name}</h3>\n                    <img class="krestik" src="img/krestik.svg" alt="">\n                </div>\n                <p class="cc_text">Price: <span class="color_price">$${this._price}</span> </p>\n                <div class="ccq">\n                    <p class="cc_text">Quantity:${this.counter} </p>\n\n                </div>\n            </div>\n        </div>`,n.appendChild(r)}}function c(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}class l{constructor({name:n,price:r,img:t,desc:e},i){c(this,"_name",""),c(this,"_price",0),c(this,"_img",0),c(this,"_desc",""),c(this,"_CartInstane",null),this._name=n,this._price=r,this._img=t,this._desc=e,this._CartInstane=i}addToCart(){this._CartInstane.add(this),console.log("Added!",this._name)}render(n){const r=document.createElement("div");r.classList.add("shop_block"),r.innerHTML=`\n        <a href="#"><img class="shop_img" src="${this._img}" alt="img"></a>\n        <div class="shop_content_box">\n            <a href="#" class="shop_name">${this._name}</a>\n            <p class="main_text mts ">${this._desc}</p>\n            <div class="price">$${this._price}</div>\n        </div>`,new o("Add to cart",this.addToCart.bind(this)).render(r),n.appendChild(r)}}function p(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}const d=new class{constructor(){var n,r;r=[],(n="_items")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r}add(n){const r=this._items.find((r=>r._name===n._name));r?r.counter++:this._items.push(new s({name:n._name,price:n._price,img:n._img})),this.render()}render(){const n=document.querySelector(".cart-list");n&&(n.innerHTML=""),this._items.forEach((r=>{r.render(n)}))}};new class{constructor(n){p(this,"_items",[]),p(this,"preloading",!1),p(this,"_page",1),p(this,"_CartInstane",null),this._CartInstane=n,this.initShowMoreButton(),this.fetchGoods()}initShowMoreButton(){const n=document.querySelector(".browse_button");n&&n.addEventListener("click",(()=>{this._page++,this.fetchGoods()}))}fetchGoods(){this.preloading=!0;const n=`/database/items${this._page}.json`;return fetch(n).then((n=>n.json())).then((n=>{this.preloading=!1;const r=n.data.map((n=>new l(n,this._CartInstane)));return this._items=[...this._items,...r],this._items})).then(this.render.bind(this)).catch((n=>{alert("No more pages")}))}render(){const n=document.querySelector(".shop_content");n&&(n.innerHTML="",this._items.forEach((r=>{r.render(n)})))}}(d)})()})();