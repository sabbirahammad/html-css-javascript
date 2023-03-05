var button1=document.querySelector(".butt button");
var secondpage=document.querySelector(".second-page");
var exit=document.querySelector(".exit");
var fastpage=document.querySelector(".quez");
var ques=document.querySelector(".question");
var cont=document.querySelector(".cont");
var opt=document.querySelector(".options");
var timecou=document.querySelector(".second");
var timeline=document.querySelector(".timeline");
var lastpage=document.querySelector(".result");
var repbutton=document.querySelector(".reply1");
var exitquiz=document.querySelector(".quit1");

button1.onclick =()=>{
    secondpage.classList.add("active");
}
exit.onclick=()=>{
    secondpage.classList.remove("active");
}
cont.onclick=()=>{
    ques.classList.add("active2");
    secondpage.classList.remove("active");
    showquestion(0);
    time(15);
    times(0);
}

let butt=document.querySelector(".butt3 button");

let count=0;
let co;
let timevalue=15;
let timeli;
let widthvalue=0;
let userscore=0;


butt.onclick=()=>{
    if(count<questions.length){
        count++;
        showquestion(count);
        clearInterval(co);
        time(timevalue);
        clearInterval(timeli);
        times(widthvalue);
        butt.style.display="none";
    }
    else{
        showresult();
    }
}

exitquiz.onclick=()=>{
    window.location.reload();
}


function showquestion(index){
    var qtag=document.querySelector(".body-text");
    var opt=document.querySelector(".options");
    var qin="<span>"+ questions[index].numb+"."+questions[index].question+"</span>";
    var opin=`<div class="option"><span>`+questions[index].option[0]+`</span></div>`
             +`<div class="option"><span>`+questions[index].option[1]+`</span></div>`
            +`<div class="option"><span>`+questions[index].option[2]+`</span></div>`
            +`<div class="option"><span>`+questions[index].option[3]+`</span></div>`;
    qtag.innerHTML=qin;
    opt.innerHTML=opin;
    var total=document.querySelector(".total-qe");
    var toin=`<p>`+questions[index].numb+" "+"Of 6 Questions"+`</p>`;
    total.innerHTML=toin;

    let option=opt.querySelectorAll(".option");

        for(let i=0;i<option.length;i++)
        {
            option[i].setAttribute("onclick","ted(this)");
        }
let opch=opt.children.length;
}



function ted(answer){
    let alloption=opt.children.length;
   let usop=answer.textContent;
   let currea=questions[count].answer;
   var right=`<i class="fa-solid fa-check"></i>`;
let wrong=`<i class="fa-sharp fa-solid fa-xmark"></i>`;
   clearInterval(co);
   clearInterval(timeli);
  
  if(usop==currea){
    answer.classList.add("currect");
    answer.insertAdjacentHTML("beforeend",right);
    userscore+=1;
    console.log(userscore);
    
  }
  else{
    answer.classList.add("incurrect");
    answer.insertAdjacentHTML("beforeend",wrong);
    for(let i=0;i<alloption;i++){
        if(opt.children[i].textContent==currea)
        {
            opt.children[i].setAttribute("class","currect option");
            opt.children[i].insertAdjacentHTML("beforeend",right);
           
        }
    }
  }
  for(let i=0;i<alloption;i++)
  {
    opt.children[i].classList.add("sto");
    butt.style.display="block";
  }
}

function showresult(){
    ques.classList.remove("active2");
    secondpage.classList.remove("active");
    lastpage.classList.add("result2");
    let score=document.querySelector(".like");
    if(userscore>3){
        let scoretag=`<h4>Congrass <i class="fa-sharp fa-solid fa-thumbs-up"></i> You Got <span>`+userscore +`</span>Out of <span>`+questions.length+`</span></h4>`;
        score.innerHTML=scoretag;
    }
   else if(userscore>0){
        let scoretag=`<h4>Carry On <i class="fa-sharp fa-solid fa-thumbs-up"></i> You Got <span>`+userscore +`</span>Out of <span>`+questions.length+`</span></h4>`;
        score.innerHTML=scoretag;
    }
}


function time(timee){
    co=setInterval(settime,1000)
    function settime(){
        timecou.textContent=timee;
        timee--;

        if(timee<0){
            timecou.textContent="00";
            clearInterval(count);
        }
        if(timee<9){
           var addzero=timecou.textContent;
           timecou.textContent="0"+addzero;
    }
}
}


function times(time){
    timeli=setInterval(timesetup,50);
    function timesetup(){
       timeline.style.width=time+"px";
       time++;
       if(time>319){
        clearInterval(timeli);
       }
    }
}

