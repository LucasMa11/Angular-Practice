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
    let fs:any = document.querySelector(sec);
    let Sp:any = document.getElementById(recom);
    let ht:any = document.querySelector("body");
    if(Sp&&fs&&ht){
        let animation =fs.animate({
            transform: ['scale(1)', 'scale(0.99)'],
        },{
            direction: 'alternate',
            duration: 500,
            iterations: 1
        });
        animation.play();
    setTimeout(()=>{
        let rect: ClientRect = fs.getBoundingClientRect();
        Sp.style.top = rect.top+'px';
        Sp.style.display = 'block';
        ht.style.overflow = 'hidden';
    },500)
       
        
    }
}

function narrow(backname:string)
{
    let fs ='.section_'+backname.charAt(backname.length-1) ;
    let na:any = document.getElementById(backname);
    let ht:any = document.querySelector("body");
    let fss:any = document.querySelector(fs);
    fss.style.visibility ='visible';
    na.scrollTop=0;
    na.classList.add('disrecommed');
    na.addEventListener("animationend",function(){
        na.classList.remove('disrecommed');
        na.style.display='none';
        ht.style.overflow = 'auto';
    },{once:true});
}

function inter(introcename:string)
{
    let na:any=document.getElementById(introcename);
    na.style.display = 'block';
}

function back(back_name:string)
{
    let na:any=document.getElementById(back_name);
    let nb:HTMLElement = na;
    nb.classList.add('disapper');
    // setTimeout(()=>{
    //     nb.style.display='none';
    //     nb.classList.remove('disapper');
    // },1000)
    nb.addEventListener("animationend",function(){
        nb.classList.remove('disapper');
        nb.style.display='none';
    },{once:true});
}



