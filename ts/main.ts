function GetTime()
{
    let date = new Date();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let week = date.getDay();
    let ShowWeek = ' 星期'+'日一二三四五六'.charAt(week);
    let show = "<h5>" + month+'月'+day+'日'+ShowWeek+"</h5>";
    let elem:HTMLElement | null =document.getElementById("showdate");
    if(elem){
    elem.innerHTML=show;
    }
}
GetTime();

function Spread(sectionname:string)
{
    let sec='.'+sectionname;
    let recom='rc_'+sec.charAt(sec.length-1);
    let fs:HTMLElement | null = document.querySelector(sec);
    let Sp:HTMLElement | null = document.getElementById(recom);
    let ht:HTMLElement | null = document.querySelector("body");
    if(Sp&&fs&&ht){
        let rect: ClientRect = fs.getBoundingClientRect();
        Sp.style.top = rect.top+'px';
        Sp.style.display = 'block';
        ht.style.overflow = 'hidden';
    }
}

function narrow(backname:string)
{
    let bna='rc_'+backname.charAt(backname.length-1);
    let na:HTMLElement | null = document.getElementById(bna);
    let ht:HTMLElement | null = document.querySelector("body");
    if(na&&ht){
        na.style.display = 'none';
        ht.style.overflow = 'auto';
    }
    
}
