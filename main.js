var x = 5;
var y = 6;
var z = x + y;

document.getElementById("demo").innerHTML = z;

buttonReddenDiv = document.getElementById("buttonReddenDiv")

buttonReddenDiv.onmousedown = function(){
    div = document.getElementById("box")
    div.style.backgroundColor = "red";
};

buttonReddenDiv.onmouseup = function () {
    div = document.getElementById("box")
    div.style.backgroundColor = "blue";
}



