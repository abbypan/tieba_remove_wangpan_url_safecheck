// --------------------------------------------------------------------
//
// ==UserScript==
// @name          tieba_remove_wangpan_url_safecheck 
// @namespace     http://abbypan.github.io/
// @version       0.1
// @author        Abby Pan (abbypan@gmail.com)
// @description   移除百度贴吧中百度云链接safecheck跳转  
// @copyright     2017, Abby Pan (http://abbypan.github.com/) 
// @include       http://tieba.baidu.com/*
// @include       https://tieba.baidu.com/*
// ==/UserScript==
//
// --------------------------------------------------------------------
// @resource      jquery http://code.jquery.com/jquery-latest.js

var path = '//a';

var wordNumTds = document.evaluate(path, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
if (!wordNumTds) return;

for (var i = 0; i < wordNumTds.snapshotLength; i++) {
    var td = wordNumTds.snapshotItem(i);
    var s = td.textContent || td.innerText || ""; 
    if(s.match(/http:\/\/pan\.baidu\.com\/share\/link\?/)) continue;
    td.setAttribute('href', s);
}
