var start=new Date().getTime();
function getRandomColor() {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';   
                for (var i = 0; i < 6; i++ ) {       
                    color += letters[Math.floor(Math.random() * 16)];    
                }   
                return color;
            }
function shapeAppear(){
var x=Math.random()*400;
var y=Math.random()*400;
var width=Math.random()*400+50;
 if (Math.random() > 0.5) {                  
                    document.getElementById("sha").style.borderRadius = "50%";                   
                } else {
                    document.getElementById("sha").style.borderRadius = "0";
                }
document.getElementById("sha").style.backgroundColor= getRandomColor();
document.getElementById("sha").style.top= x+"px";
document.getElementById("sha").style.left= y+"px";
document.getElementById("sha").style.width= width+"px";
document.getElementById("sha").style.height= width+"px";
document.getElementById("sha").style.display="block";
start=new Date().getTime();
}
function timedelay(){
setTimeout(shapeAppear,Math.random()*2000);}
timedelay();
document.getElementById("sha").onclick=function(){
var end=new Date().getTime();
document.getElementById("sha").style.display="none";
var timetaken=(end-start)/1000;
document.getElementById("timetaken").innerHTML=timetaken+"s";
timedelay();
};