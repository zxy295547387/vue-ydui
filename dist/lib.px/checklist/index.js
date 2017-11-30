/*! vue-ydui v1.1.2 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CheckListItem=t.CheckList=void 0;var o=n(79),r=i(o),c=n(78),s=i(c);t.CheckList=r.default,t.CheckListItem=s.default},1:function(e,t){e.exports=function(e,t,n,i){var o,r=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(o=e,r=e.default);var s="function"==typeof r?r.options:r;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),i){var a=s.computed||(s.computed={});Object.keys(i).forEach(function(e){var t=i[e];a[e]=function(){return t}})}return{esModule:o,exports:r,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var c=t[o];"number"==typeof c[0]&&i[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},3:function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t],i=d[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var c=[],o=0;o<n.parts.length;o++)c.push(r(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:c}}}}function o(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function r(e){var t,n,i=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(i){if(p)return m;i.parentNode.removeChild(i)}if(k){var r=h++;i=f||(f=o()),t=c.bind(null,i,r,!1),n=c.bind(null,i,r,!0)}else i=o(),t=s.bind(null,i),n=function(){i.parentNode.removeChild(i)};return t(e),function(i){if(i){if(i.css===e.css&&i.media===e.media&&i.sourceMap===e.sourceMap)return;t(e=i)}else n()}}function c(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var r=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(r,c[t]):e.appendChild(r)}}function s(e,t){var n=t.css,i=t.media,o=t.sourceMap;if(i&&e.setAttribute("media",i),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var a="undefined"!=typeof document,l=n(4),d={},u=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,h=0,p=!1,m=function(){},k="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){p=n;var o=l(e,t);return i(o),function(t){for(var n=[],r=0;r<o.length;r++){var c=o[r],s=d[c.id];s.refs--,n.push(s)}t?(o=l(e,t),i(o)):o=[];for(var r=0;r<n.length;r++){var s=n[r];if(0===s.refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete d[s.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],c=r[0],s=r[1],a=r[2],l=r[3],d={id:e+":"+o,css:s,media:a,sourceMap:l};i[c]?i[c].parts.push(d):n.push(i[c]={id:c,parts:[d]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),i=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,i=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||i.test(e)},r=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},c=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,i=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-i,r=o+t.offsetHeight;return o>=0&&o<n||r>0&&r<=n},s=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},a=function(e,t){s(e,t)||(e.className=""===e.className?t:e.className+" "+t)},l=function(e,t){if(s(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},d=function(e){function t(n,i,o){if(n!==i){var r=n+o>i?i:n+o;n>i&&(r=n-o<i?i:n-o),e===window?window.scrollTo(r,r):e.scrollTop=r,window.requestAnimationFrame(function(){return t(r,i,o)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var r=Math.abs(n-i),c=Math.ceil(r/o*50);t(n,i,c)};t.pageScroll=n,t.isIOS=i,t.isColor=o,t.getScrollview=r,t.checkInview=c,t.addClass=a,t.removeClass=l,t.scrollTop=d},67:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.yd-checklist{background-color:#fff;position:relative;z-index:1}.yd-checklist:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-checklist-alignright .yd-checklist-content{-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}.yd-checklist-alignright .yd-checklist-item-icon{margin-left:0}.yd-checklist-item{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;z-index:1;margin-left:12px}.yd-checklist-item:not(:last-child):after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-checklist-item-icon{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:12px;margin-left:-12px}.yd-checklist-item-icon>input[type=checkbox]{position:absolute;left:-9999em}.yd-checklist-item-icon>input[type=checkbox]:checked+.yd-checklist-icon{background-color:currentColor;border-color:currentColor}.yd-checklist-item-icon>input[type=checkbox]:checked+.yd-checklist-icon>i{-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(1);transform:translate(-50%,-50%) rotate(45deg) scale(1);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.yd-checklist-item-icon>input[type=checkbox]:disabled+.yd-checklist-icon{border-color:#ccc;background-color:#f3f3f3}.yd-checklist-item-icon>input[type=checkbox]:disabled+.yd-checklist-icon>i{border-color:#ccc}.yd-checklist-icon{border:1px solid #ccc;border-radius:100px;display:block;position:relative;z-index:10;pointer-events:none;width:20px;height:20px}.yd-checklist-icon>i{width:6px;height:12px;content:"";position:absolute;top:45%;left:50%;border:2px solid #fff;border-top:0;border-left:0;-webkit-transform:translate(-50%,-50%) rotate(45deg) scale(0);transform:translate(-50%,-50%) rotate(45deg) scale(0)}.yd-checklist-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;color:#333;padding-right:12px}',""])},78:function(e,t,n){var i=n(1)(n(243),n(175),null,null);e.exports=i.exports},79:function(e,t,n){n(229);var i=n(1)(n(244),n(194),null,null);e.exports=i.exports},175:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yd-checklist-item",on:{click:e.emitChangeHandler}},[e.label?n("div",{staticClass:"yd-checklist-item-icon"},[n("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.checked}}),e._v(" "),e._m(0)]):n("label",{staticClass:"yd-checklist-item-icon"},[n("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.checked},on:{change:e.changeHandler}}),e._v(" "),e._m(1)]),e._v(" "),n("div",{staticClass:"yd-checklist-content"},[e._t("default")],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"yd-checklist-icon"},[n("i")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"yd-checklist-icon"},[n("i")])}]}},194:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"yd-checklist",class:"right"==e.align?"yd-checklist-alignright":"",style:{color:e.color}},[e._t("default")],2)},staticRenderFns:[]}},229:function(e,t,n){var i=n(67);"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);n(3)("67a3bb8c",i,!0)},243:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"yd-checklist-item",data:function(){return{checked:!1,label:!0}},methods:{changeHandler:function(){this.disabled||(this.checked=!this.checked,this.$parent.emitInput())},emitChangeHandler:function(){this.label&&this.changeHandler()}},props:{disabled:{type:Boolean,default:!1},val:{type:[Boolean,String,Number],required:!0}},mounted:function(){this.$nextTick(this.$parent.checkItem)}}},244:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(5);t.default={name:"yd-checklist",data:function(){return{isCheckAll:!1}},props:{value:{type:Array},color:{validator:function(e){return(0,i.isColor)(e)},default:"#4CD864"},align:{type:String,validator:function(e){return["left","right"].indexOf(e)>-1},default:"left"},label:{type:Boolean,default:!0},callback:{type:Function}},methods:{checkItem:function(){var e=this,t=this.$children.filter(function(e){return"yd-checklist-item"===e.$options.name});t.forEach(function(t){t.checked=e.contains(e.value,t.val),t.label=e.label})},contains:function(e,t){for(var n=e.length;n--;)if(e[n]==t)return!0;return!1},emitInput:function(e,t){var n=[],i=this.$children.filter(function(e){return"yd-checklist-item"===e.$options.name}),o=0;i.forEach(function(i){i.disabled?o++:e&&(i.checked=t),i.checked&&n.push(i.val)}),this.isCheckAll=n.length>=i.length-o,this.$emit("input",n)},checkAll:function(e){this.emitInput(!0,e)}},watch:{value:function(e){this.callback&&this.callback(e,this.isCheckAll),this.$nextTick(this.checkItem)}},mounted:function(){this.$on("ydui.checklist.checkall",this.checkAll)}}}})});