var btn1=document.getElementById("society");
var btn2=document.getElementById("classf");
var btn3=document.getElementById("classsmate");
var bg1=document.getElementById("bg1");
var bg2=document.getElementById("bg2");
var bg3=document.getElementById("bg3");
var showbox=document.getElementById("backgroundd");
var flag1=true;
var flag2=true;
var flag3=true;
btn1.click=function(){
    if(flag1){
        showbox.innerHTML=bg1.innerHTML;
        flag1=false;
    }
}
btn2.click=function(){
    if(flag2){
        showbox.innerHTML=bg2.innerHTML;
        flag2=false;
    }
}
btn3.click=function(){
    if(flag3){
        showbox.innerHTML=bg3.innerHTML;
        flag3=false;
    }
}