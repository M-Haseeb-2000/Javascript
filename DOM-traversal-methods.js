var a = document.getElementById("inner").parentElement;
console.log(a);
var b = document.getElementById("inner").parentElement.style.backgroundColor = "tan";
var c = document.getElementById("inner").parentNode;
console.log(c);
//Children and childNodes
var d = document.getElementById("inner").children[0].style.border = "2px dotted yellow"; //children returns the elements like h2, div, and other elements
console.log(d);
var e = document.getElementById("inner").childNodes[2].style.backgroundColor = "red"; //while childNodes returns everything like text, spaces and elements and comments etc
console.log(e);
var f = document.getElementById("inner").childNodes[0];
console.log(f);
//firstElementChild, firstChild, lastElementChild and lastElement
var g = document.getElementById("inner").firstChild;    //returns anything that is first element whether it is space, enter, html element or text or comment
console.log(g);
var h = document.getElementById("inner").firstElementChild.style.color = "pink";  //targets only the first inner html element
console.log(h);
var i = document.getElementById("inner").lastChild;  //returns anything that is last element whether it is space, enter, html element or text or comment
console.log(i);
var j = document.getElementById("inner").lastElementChild.style.backgroundColor = "pink";  //targets only the last inner html element
console.log(j);


var k = document.getElementById("inner").firstElementChild.nextSibling; //returns anything that is next sibling whether it is space, enter, html element or text or comment
console.log(k);
var l = document.getElementById("inner").firstElementChild.nextElementSibling.style.backgroundColor = "purple"; //targets only the html element next sibling
var m = document.getElementById("inner").lastElementChild.previousSibling; //returns anything that is previous sibling whether it is space, enter, html element or text or comment
console.log(m);
var n = document.getElementById("inner").lastElementChild.previousElementSibling.style.backgroundColor = "brown";//targets only the html element previous sibling


document.getElementById("button1").addEventListener("click", outer);
function outer(){
    document.getElementById("inner").parentElement.style.backgroundColor = "blue";
}
document.getElementById("button2").addEventListener("click", inner);
function inner(){
    document.getElementById("inner").children[1].style.backgroundColor = "green";
    document.getElementById("inner").children[2].style.backgroundColor = "orange";
    document.getElementById("inner").children[2].innerHTML = "Hello My world";
    //console.log(document.getElementById("inner").children);
}