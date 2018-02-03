var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var lentss = document.getElementById("slidelent");

function myslide(){
 btn1.addEventListener("click",function(){
 	lentss.style.left = "0px";
 })
 btn2.addEventListener("click",function(){
 	lentss.style.left = "-1110px";
 })
 btn3.addEventListener("click",function(){
 	lentss.style.left = "-2220px";
 })
 btn4.addEventListener("click",function(){
 	lentss.style.left = "-3330px";
 })
 btn5.addEventListener("click",function(){
 	lentss.style.left = "-4440px";
 })
}
myslide();
