// ==UserScript==
// @name         Medium Hash Cleaner
// @namespace    https://blog.gslin.org/medium-hash-cleaner/
// @version      0.3
// @description  Medium hash cleaner
// @author       Gea-Suan Lin
// @match        *://*/*
// @grant        none
// @run-at       document-end
// @updateURL    https://openuserjs.org/meta/gslin/Medium_Hash_Cleaner.meta.js
// ==/UserScript==

(function() {
    'use strict';

    var mediumSite = false;
    var ss = document.getElementsByTagName('script');
    var len = ss.length;
    for (var i = 0; i < len; i++) {
        var url = ss[i].src;
        if (undefined !== url && -1 !== url.indexOf('://cdn-static-1.medium.com/_/fp/gen-js/')) {
            mediumSite = true;
            break;
        }
    }

    if (mediumSite) {
        window.history.replaceState = function(){};

        if ('' !== window.location.hash) {
            window.location = '';
        }
    }
})();
