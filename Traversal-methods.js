document.getElementById("inner").parentElement.style.backgroundColor = "pink";
document.getElementById("inner").parentNode.style.backgroundColor = "pink"; //parentNode does the same work as parentElement but unlike parentElement parentNode always return a value even if there is no value beyond the element

//Children and childrenNodes
document.getElementById("inner").children[2].style.backgroundColor = "yellow";

//childNode works same as children but unlike children it returns every element even comments and blankspaces
var a = document.getElementById("inner").childNodes[1].innerHTML;   //just as in innerHTML it shows even three tabs
console.log(a);

//firstChild, firstElementChild, lastChild and lastElementChild
//firstChild     It returns every first element even if it maybe a blank space or blank enter
var b = document.getElementById("inner").firstChild;
console.log(b);     //e.g if you see in the console screen it will return a text. If you click on the text it will show its entire content which is just
//firstElementChild      it will return just childelements
var c = document.getElementById("inner").firstElementChild;
console.log(c);
//Same is the case for both lastChild and lastElementChild with the exception that they target the last child of element
//lastChild
var b = document.getElementById("inner").lastChild;
console.log(b);
//lastElementChild
var c = document.getElementById("inner").lastElementChild;
console.log(c);


//nextElementSibling, previousElementSibling, nextSibling and previousSibling
//nextElementSibling
var d = document.getElementById("middle").nextElementSibling;
console.log(d);
d = document.getElementById("last").nextElementSibling;
console.log(d); //As clearly seen nextElementSibling returns null value if there is no element at the end
//nextSibling
var e = document.getElementById("last").nextSibling;
console.log(e); //If there is no element at the end then nextSibling will return something else either some text
// previousElementSibling and previousSibling does the same 
f = document.getElementById("first").previousElementSibling;
console.log(f);
f = document.getElementById("first").previousElementSibling;
console.log(f);