!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=e.parcelRequire9f9b;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in n){var e=n[t];delete n[t];var i={id:t,exports:{}};return r[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},e.parcelRequire9f9b=i),i.register("6qbIH",(function(t,e){"use strict";var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===n.call(t)},a=function(t){if(!t||"[object Object]"!==n.call(t))return!1;var e,i=r.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&r.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!i&&!o)return!1;for(e in t);return void 0===e||r.call(t,e)},p=function(t,e){i&&"__proto__"===e.name?i(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},l=function(t,e){if("__proto__"===e){if(!r.call(t,e))return;if(o)return o(t,e).value}return t[e]};t.exports=function t(){var e,r,n,i,o,u,c=arguments[0],f=1,h=arguments.length,d=!1;for("boolean"==typeof c&&(d=c,c=arguments[1]||{},f=2),(null==c||"object"!=typeof c&&"function"!=typeof c)&&(c={});f<h;++f)if(null!=(e=arguments[f]))for(r in e)n=l(c,r),c!==(i=l(e,r))&&(d&&i&&(a(i)||(o=s(i)))?(o?(o=!1,u=n&&s(n)?n:[]):u=n&&a(n)?n:{},p(c,{name:r,newValue:t(d,u,i)})):void 0!==i&&p(c,{name:r,newValue:i}));return c}}));var o={};(()=>{"use strict";var t=i("6qbIH");String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,this.substr(e,t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var r=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>r.length)&&(e=r.length),e-=t.length;var n=r.indexOf(t,e);return-1!==n&&n===e}),String.prototype.includes||(String.prototype.includes=function(t,e){return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),String.prototype.repeat||(String.prototype.repeat=function(t){if(null==this)throw new TypeError("can't convert "+this+" to object");var e=""+this;if((t=+t)!=t&&(t=0),t<0)throw new RangeError("repeat count must be non-negative");if(t==1/0)throw new RangeError("repeat count must be less than infinity");if(t=Math.floor(t),0==e.length||0==t)return"";if(e.length*t>=268435456)throw new RangeError("repeat count must not overflow maximum string size");for(var r="";1==(1&t)&&(r+=e),0!=(t>>>=1);)e+=e;return r}),Array.prototype.remove||(Array.prototype.remove=function(t,e){this.splice(t,1)}),String.prototype.contains||(String.prototype.contains=String.prototype.includes),Array.prototype.insert||(Array.prototype.insert=function(t,e){this.splice(t,0,e)}),o=class{parse(t){let e=t;var r=this.clean_lines(e);return this.options.dontJoinCurlyBracet||(r=this.join_opening_bracket(r)),(r=this.perform_indentation(r)).join("\n")}extractTextBySeperator(t,e,r){null==r&&(r=e);var n=new RegExp(e),i=new RegExp(r),o=new RegExp(e+"(.*?)"+r);return n.test(t)&&i.test(t)?t.match(o)[1]:""}extractAllPossibleText(t,e,r){null==r&&(r=e);for(var n={},i="",o=0;""!=(i=this.extractTextBySeperator(t,e,r));){var s="#$#%#$#placeholder"+o+"#$#%#$#";n[s]=e+i+r,t=t.replace(n[s],s),o++}return{inputHidden:t,extracted:n,getRestored:function(){var t=this.inputHidden;for(var e in n)t=t.replace(e,n[e]);return t}}}strip_line(t){var e=t.trim(),r=this.extractAllPossibleText(e,'"','"');return r.inputHidden=r.inputHidden.replace(/\s\s+/g," "),r.getRestored()}clean_lines(t){for(var e=t.split(/\r\n|\r|\n/g),r=0,n=0;r<e.length;r++)if(e[r]=e[r].trim(),e[r].startsWith("#")||e[r].startsWith("sub_filter")||""==e[r])""==e[r]&&n++>=2&&(e.splice(r,1),r--);else{n=0;var i=e[r]=this.strip_line(e[r]);if("}"!=i&&"{"!=i){var o,s;if((o=i.indexOf("}"))>=0)e[r]=this.strip_line(i.slice(0,o-1)),e.insert(r+1,"}"),""!=(s=this.strip_line(i.slice(o+1)))&&e.insert(r+2,s),i=e[r];if((o=i.indexOf("{"))>=0)e[r]=this.strip_line(i.slice(0,o)),e.insert(r+1,"{"),""!=(s=this.strip_line(i.slice(o+1)))&&e.insert(r+2,s)}}return e}join_opening_bracket(t){for(var e=0;e<t.length;e++){"{"==t[e]&&e>=1&&(t[e]=t[e-1]+" {",this.NEWLINEAFTERBRACET&&t.length>e+1&&t[e+1].length>0&&t.insert(e+1,""),t.remove(e-1))}return t}perform_indentation(t){var e,r,n;e=[],r=0;for(var i=t,o=0;o<i.length;o++)!(n=i[o]).startsWith("#")&&n.endsWith("}")&&r>0&&(r-=1),""!==n?e.push(this.INDENTATION.repeat(r)+n):e.push(""),!n.startsWith("#")&&n.endsWith("{")&&(r+=1);return e}constructor(e){this.INDENTATION="\t",this.NEWLINEAFTERBRACET=!0,this.options={spaces:0,tabs:0,dontJoinCurlyBracet:!0},t(this.options,e),this.options.tabs>0&&(this.INDENTATION="\t".repeat(this.options.tabs)),this.options.spaces>0&&(this.INDENTATION=" ".repeat(this.options.spaces))}}})();const s=document.getElementById("textarea");document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault();const r=parseInt(document.getElementById("tabs").value),n=parseInt(document.getElementById("spaces").value),i=document.getElementById("dontJoinCurlyBracet").checked,a=new(t(o))({spaces:n,tabs:r,dontJoinCurlyBracet:i});return s.value=a.parse(s.value),!1}))}();
//# sourceMappingURL=index.f2c9818b.js.map
