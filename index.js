var top = document.querySelector(".top");
var middle = document.querySelector("#mid");
var bottom = document.querySelector("#bottom");

var reset = document.querySelector(".new-color");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var row = document.querySelectorAll(".row");
var col = document.querySelectorAll(".col");
var allcolors = document.querySelectorAll(".color");
var message = document.querySelector(".message");
var head = document.querySelector("h1");
var colorDisplay = document.querySelector(".color-display");
var randomColor;
function changecolorsnormal() {
    var  colors=[];
    var allcolors = document.querySelectorAll(".color");
    for (var i = 0; i < allcolors.length; i++) {
        allcolors[i].classList.remove("display");
        var x =Math.floor(Math.random()*256);
        var y =Math.floor(Math.random()*256);
        var z =Math.floor(Math.random()*256);
        var randomColor ="rgb(" + x + ", " + y + ", " + z + ")";
        num=1;
        colors[ i] = randomColor;
        allcolors[i].style.backgroundColor =randomColor;
    }
    var randNum  =Math.floor(Math.random()*6);
    colorDisplay.textContent= colors[randNum];
   
}

function changecolorseasy() {
    var  colors=[];
    var allcolors = document.querySelectorAll(".color");
    for (var i = 0; i < 3; i++) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var randomColor = "rgb(" + x + ", " + y + ", " + z + ")";
        
        colors[i] = randomColor;
        allcolors[i].style.backgroundColor = randomColor;
      
    }
    num=0;
    var randNum  = Math.floor(Math.random() * 3);
    colorDisplay.textContent= colors[randNum];
    console.log(colorDisplay);
}
changecolorsnormal(); 

easy.addEventListener('click', function () {
    hard.classList.remove("selected");
    easy.classList.add("selected");
    col.forEach(item => {
        item.classList.add("display");
    })
    changecolorseasy();
})

hard.addEventListener('click', function () {
    easy.classList.remove("selected");
    hard.classList.add("selected");
    col.forEach(item => {
        item.classList.remove("display");
        changecolorsnormal();
    })
})


reset.addEventListener('click',num==1?changecolorsnormal:changecolorseasy);
allcolors.forEach(element=>{
var top = document.querySelector(".top");
var allcolors = document.querySelectorAll(".color");
var message = document.querySelector(".message");

    element.addEventListener('click',function(){
        if (element.style.backgroundColor==colorDisplay.textContent){
       
            message.textContent='  Correct  ';
            top.style.backgroundColor="rgb(29, 212, 29)";
            message.style.color="rgb(29, 212, 29)";
            setTimeout(function(){ 
                message.textContent='Play Again!';
                top.style.backgroundColor="#fbbd04";
             }, 2000);

             setTimeout(function(){ 
                message.textContent="";
             }, 3000);
            
            allcolors.forEach(item=>{
                item.style.backgroundColor=colorDisplay.textContent;
                
            })
        }
        else{
            message.textContent='  Try again!  ';
            message.style.color="red";
            top.style.backgroundColor="red"; 
            setTimeout(function(){ 
                message.textContent="";  
                top.style.backgroundColor="#fbbd04"; 
             }, 1000);
             
        }
    })
 
})