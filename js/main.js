"use strict";
function GetTime() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var week = date.getDay();
    var ShowWeek = ' 星期' + '日一二三四五六'.charAt(week);
    var show = "<h5>" + month + '月' + day + '日' + ShowWeek + "</h5>";
    var elem = document.getElementById("showdate");
    if (elem) {
        elem.innerHTML = show;
    }
}
GetTime();
function Spread(sectionname) {
    var sec = '.' + sectionname;
    var recom = 'rc_' + sec.charAt(sec.length - 1);
    var fs = document.querySelector(sec);
    var Sp = document.getElementById(recom);
    var ht = document.querySelector("body");
    if (Sp && fs && ht) {
        var rect = fs.getBoundingClientRect();
        Sp.style.top = rect.top + 'px';
        Sp.style.display = 'block';
        ht.style.overflow = 'hidden';
    }
}
function narrow(backname) {
    var bna = 'rc_' + backname.charAt(backname.length - 1);
    var na = document.getElementById(bna);
    var ht = document.querySelector("body");
    if (na && ht) {
        na.style.display = 'none';
        ht.style.overflow = 'auto';
    }
}
