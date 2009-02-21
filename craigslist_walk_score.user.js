// ==UserScript==
// @name           craigslist walk score
// @namespace      http://aedion.net/userscript/clws
// @description    puts a WalkScore(tm) link beside the google maps one
// @include        http://*.craigslist.*/apa/*
// ==/UserScript==

//(function () {

for each (a_tag in document.getElementsByTagName("a")) {	
    if (!a_tag.hostname.match(/^maps.google/))
        continue;

    var loc = a_tag.search.replace('?q=loc%3A','');

    var ws_link = document.createElement('a');
    ws_link.setAttribute('target', '_blank');
    ws_link.setAttribute('href', 'http://www.walkscore.com/get-score.php?street=' + loc + '&go=Go');
    ws_link.textContent = 'walk score';	

    var spacer = document.createTextNode('  ');

    a_tag.parentNode.insertBefore(ws_link, a_tag);
    a_tag.parentNode.insertBefore(spacer, a_tag);

    break;
}

//})()
