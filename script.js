
var toggled=false;

var button = document.getElementById('circle');

var headings = document.getElementsByTagName('h1');

var circle = document.getElementById("circle");

button.addEventListener('click',function(event){
    
    if(!toggled){
    headings[0].style.color="white";
    document.body.style.backgroundColor="black";
    circle.style.marginLeft = "100px";
    toggled=true;
    }else{
       headings[0].style.color="black";
    document.body.style.backgroundColor="white";
    circle.style.marginLeft ="0px";
    toggled=false;

    }

});