// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j98HG":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6e8a5cd20fbc91cd";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fFaKF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _nginxbeautify = require("nginxbeautify");
var _nginxbeautifyDefault = parcelHelpers.interopDefault(_nginxbeautify);
const textarea = document.getElementById("textarea");
const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const tabs = parseInt(document.getElementById("tabs").value);
    const spaces = parseInt(document.getElementById("spaces").value);
    const dontJoinCurlyBracet = document.getElementById("dontJoinCurlyBracet").checked;
    const beautifier = new (0, _nginxbeautifyDefault.default)({
        spaces,
        tabs,
        dontJoinCurlyBracet
    });
    textarea.value = beautifier.parse(textarea.value);
    return false;
});

},{"nginxbeautify":"duJe4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"duJe4":[function(require,module,exports) {
/*
  NGINX Beautify

  Originally written in Python by Michał Słomkowski
  (https://github.com/1connect/nginx-config-formatter , nginxfmt.py)

  Ported by Yosef (https://github.com/vasilevich/nginxbeautifier/)
  NPM Package by @denvit : https://github.com/denysvitali/
*/ (()=>{
    "use strict";
    var extend = require("extend");
    class Beautifier {
        constructor(customOptions){
            this.INDENTATION = "	";
            this.NEWLINEAFTERBRACET = true;
            this.options = {
                spaces: 0,
                tabs: 0,
                dontJoinCurlyBracet: true
            };
            extend(this.options, customOptions);
            if (this.options.tabs > 0) this.INDENTATION = "	".repeat(this.options.tabs);
            if (this.options.spaces > 0) this.INDENTATION = " ".repeat(this.options.spaces);
        }
        parse(string) {
            let fileContents = string;
            var cleanLines = this.clean_lines(fileContents);
            if (!this.options.dontJoinCurlyBracet) cleanLines = this.join_opening_bracket(cleanLines);
            cleanLines = this.perform_indentation(cleanLines);
            return cleanLines.join("\n");
        }
        /**
         * Grabs text in between two seperators seperator1 thetextIwant seperator2
         * @param {string} input String to seperate
         * @param {string} seperator1 The first seperator to use
         * @param {string} seperator2 The second seperator to use
         * @return {string}
         */ extractTextBySeperator(input, seperator1, seperator2) {
            if (seperator2 == undefined) seperator2 = seperator1;
            var ret = "";
            var seperator1Regex = new RegExp(seperator1);
            var seperator2Regex = new RegExp(seperator2);
            var catchRegex = new RegExp(seperator1 + "(.*?)" + seperator2);
            if (seperator1Regex.test(input) && seperator2Regex.test(input)) return input.match(catchRegex)[1];
            else return "";
        }
        /**
         * Grabs text in between two seperators seperator1 thetextIwant seperator2
         * @param {string} input String to seperate
         * @param {string} seperator1 The first seperator to use
         * @param {string} seperator2 The second seperator to use
         * @return {object}
         */ extractAllPossibleText(input, seperator1, seperator2) {
            if (seperator2 == undefined) seperator2 = seperator1;
            var extracted = {};
            var textInBetween = "";
            var cnt = 0;
            while((textInBetween = this.extractTextBySeperator(input, seperator1, seperator2)) != ""){
                var placeHolder = "#$#%#$#placeholder" + cnt + "#$#%#$#";
                extracted[placeHolder] = seperator1 + textInBetween + seperator2;
                input = input.replace(extracted[placeHolder], placeHolder);
                cnt++;
            }
            return {
                inputHidden: input,
                extracted: extracted,
                getRestored: function() {
                    var textToFix = this.inputHidden;
                    for(var key in extracted)textToFix = textToFix.replace(key, extracted[key]);
                    return textToFix;
                }
            };
        }
        /**
         * @param {string} single_line the whole nginx config
         * @return {string} stripped out string without multi spaces
         */ strip_line(single_line) {
            //"""Strips the line and replaces neighbouring whitespaces with single space (except when within quotation marks)."""
            //trim the line before and after
            var trimmed = single_line.trim();
            //get text without any quatation marks(text foudn with quatation marks is replaced with a placeholder)
            var removedQuatations = this.extractAllPossibleText(trimmed, '"', '"');
            //replace multi spaces with single spaces
            removedQuatations.inputHidden = removedQuatations.inputHidden.replace(/\s\s+/g, " ");
            //restore anything of quatation marks
            return removedQuatations.getRestored();
        }
        /**
         * @param {string} configContents the whole nginx config
         */ clean_lines(configContents) {
            var splittedByLines = configContents.split(/\r\n|\r|\n/g);
            //put {  } on their own seperate lines
            //trim the spaces before and after each line
            //trim multi spaces into single spaces
            //trim multi lines into two
            for(var index = 0, newline = 0; index < splittedByLines.length; index++){
                splittedByLines[index] = splittedByLines[index].trim();
                if (!splittedByLines[index].startsWith("#") && !splittedByLines[index].startsWith("sub_filter") && splittedByLines[index] != "") {
                    newline = 0;
                    var line = splittedByLines[index] = this.strip_line(splittedByLines[index]);
                    if (line != "}" && line != "{") {
                        var i = line.indexOf("}");
                        if (i >= 0) {
                            splittedByLines[index] = this.strip_line(line.slice(0, i - 1));
                            splittedByLines.insert(index + 1, "}");
                            var l2 = this.strip_line(line.slice(i + 1));
                            if (l2 != "") splittedByLines.insert(index + 2, l2);
                            line = splittedByLines[index];
                        }
                        var i = line.indexOf("{");
                        if (i >= 0) {
                            splittedByLines[index] = this.strip_line(line.slice(0, i));
                            splittedByLines.insert(index + 1, "{");
                            var l2 = this.strip_line(line.slice(i + 1));
                            if (l2 != "") splittedByLines.insert(index + 2, l2);
                        }
                    }
                } else if (splittedByLines[index] == "") {
                    if (newline++ >= 2) {
                        //while(splittedByLines[index]=="")
                        splittedByLines.splice(index, 1);
                        index--;
                    }
                }
            }
            return splittedByLines;
        }
        join_opening_bracket(lines) {
            for(var i = 0; i < lines.length; i++){
                var line = lines[i];
                if (line == "{") //just make sure we don't put anything before 0
                {
                    if (i >= 1) {
                        lines[i] = lines[i - 1] + " {";
                        if (this.NEWLINEAFTERBRACET && lines.length > i + 1 && lines[i + 1].length > 0) lines.insert(i + 1, "");
                        lines.remove(i - 1);
                    }
                }
            }
            return lines;
        }
        perform_indentation(lines) {
            var indented_lines, current_indent, line;
            "Indents the lines according to their nesting level determined by curly brackets.";
            indented_lines = [];
            current_indent = 0;
            var iterator1 = lines;
            for(var index1 = 0; index1 < iterator1.length; index1++){
                line = iterator1[index1];
                if (!line.startsWith("#") && line.endsWith("}") && current_indent > 0) current_indent -= 1;
                if (line !== "") indented_lines.push(this.INDENTATION.repeat(current_indent) + line);
                else indented_lines.push("");
                if (!line.startsWith("#") && line.endsWith("{")) current_indent += 1;
            }
            return indented_lines;
        }
    }
    //////// POLYFILLS /////////
    if (!String.prototype.trim) String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
    if (!String.prototype.startsWith) String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
    if (!String.prototype.endsWith) String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) position = subjectString.length;
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
    if (!String.prototype.includes) String.prototype.includes = function(search, start) {
        "use strict";
        if (typeof start !== "number") start = 0;
        if (start + search.length > this.length) return false;
        else return this.indexOf(search, start) !== -1;
    };
    if (!String.prototype.repeat) String.prototype.repeat = function(count) {
        "use strict";
        if (this == null) throw new TypeError("can't convert " + this + " to object");
        var str = "" + this;
        count = +count;
        if (count != count) count = 0;
        if (count < 0) throw new RangeError("repeat count must be non-negative");
        if (count == Infinity) throw new RangeError("repeat count must be less than infinity");
        count = Math.floor(count);
        if (str.length == 0 || count == 0) return "";
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 268435456) throw new RangeError("repeat count must not overflow maximum string size");
        var rpt = "";
        for(;;){
            if ((count & 1) == 1) rpt += str;
            count >>>= 1;
            if (count == 0) break;
            str += str;
        }
        // Could we try:
        // return Array(count + 1).join(this);
        return rpt;
    };
    if (!Array.prototype.remove) Array.prototype.remove = function(index, item) {
        this.splice(index, 1);
    };
    if (!String.prototype.contains) String.prototype.contains = String.prototype.includes;
    if (!Array.prototype.insert) Array.prototype.insert = function(index, item) {
        this.splice(index, 0, item);
    };
    ///////// END POLYFILLS //////////
    module.exports = Beautifier;
})();

},{"extend":"3w2cY"}],"3w2cY":[function(require,module,exports) {
"use strict";
var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray(arr) {
    if (typeof Array.isArray === "function") return Array.isArray(arr);
    return toStr.call(arr) === "[object Array]";
};
var isPlainObject = function isPlainObject(obj) {
    if (!obj || toStr.call(obj) !== "[object Object]") return false;
    var hasOwnConstructor = hasOwn.call(obj, "constructor");
    var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
    // Not own constructor property must be Object
    if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) return false;
    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    var key;
    for(key in obj);
    return typeof key === "undefined" || hasOwn.call(obj, key);
};
// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
    if (defineProperty && options.name === "__proto__") defineProperty(target, options.name, {
        enumerable: true,
        configurable: true,
        value: options.newValue,
        writable: true
    });
    else target[options.name] = options.newValue;
};
// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
    if (name === "__proto__") {
        if (!hasOwn.call(obj, name)) return void 0;
        else if (gOPD) // In early versions of node, obj['__proto__'] is buggy when obj has
        // __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
        return gOPD(obj, name).value;
    }
    return obj[name];
};
module.exports = function extend() {
    var options, name, src, copy, copyIsArray, clone;
    var target = arguments[0];
    var i = 1;
    var length = arguments.length;
    var deep = false;
    // Handle a deep copy situation
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[1] || {};
        // skip the boolean and the target
        i = 2;
    }
    if (target == null || typeof target !== "object" && typeof target !== "function") target = {};
    for(; i < length; ++i){
        options = arguments[i];
        // Only deal with non-null/undefined values
        if (options != null) // Extend the base object
        for(name in options){
            src = getProperty(target, name);
            copy = getProperty(options, name);
            // Prevent never-ending loop
            if (target !== copy) {
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        clone = src && isArray(src) ? src : [];
                    } else clone = src && isPlainObject(src) ? src : {};
                    // Never move original objects, clone them
                    setProperty(target, {
                        name: name,
                        newValue: extend(deep, clone, copy)
                    });
                // Don't bring in undefined values
                } else if (typeof copy !== "undefined") setProperty(target, {
                    name: name,
                    newValue: copy
                });
            }
        }
    }
    // Return the modified object
    return target;
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["j98HG","fFaKF"], "fFaKF", "parcelRequire9f9b")

//# sourceMappingURL=index.0fbc91cd.js.map
