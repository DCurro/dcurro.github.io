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

result = httpGet("example.txt")

function httpGet(theUrl)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            alert(xmlhttp.responseText)
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();
}