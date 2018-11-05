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
        var animation = fs.animate({
            transform: ['scale(1)', 'scale(0.99)'],
        }, {
            direction: 'alternate',
            duration: 500,
            iterations: 1
        });
        animation.play();
        setTimeout(function () {
            var rect = fs.getBoundingClientRect();
            Sp.style.top = rect.top + 'px';
            Sp.style.display = 'block';
            ht.style.overflow = 'hidden';
        }, 500);
    }
}
function narrow(backname) {
    var fs = '.section_' + backname.charAt(backname.length - 1);
    var na = document.getElementById(backname);
    var ht = document.querySelector("body");
    var fss = document.querySelector(fs);
    fss.style.visibility = 'visible';
    na.scrollTop = 0;
    na.classList.add('disrecommed');
    na.addEventListener("animationend", function () {
        na.classList.remove('disrecommed');
        na.style.display = 'none';
        ht.style.overflow = 'auto';
    }, { once: true });
}
function inter(introcename) {
    var na = document.getElementById(introcename);
    na.style.display = 'block';
}
function back(back_name) {
    var na = document.getElementById(back_name);
    var nb = na;
    nb.classList.add('disapper');
    // setTimeout(()=>{
    //     nb.style.display='none';
    //     nb.classList.remove('disapper');
    // },1000)
    nb.addEventListener("animationend", function () {
        nb.classList.remove('disapper');
        nb.style.display = 'none';
    }, { once: true });
}
