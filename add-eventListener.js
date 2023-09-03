document.getElementById("header").addEventListener("click", abc);
function abc(){
    document.getElementById("header").style.backgroundColor = "green";

}
document.getElementById("one").addEventListener("mouseleave", l);
function l(){
    this.style.border = "10px solid red";
}
document.getElementById("one").addEventListener("click", e);
function e() {
    document.getElementById("one").removeEventListener("mouseleave", l);
}
document.getElementById("outer").addEventListener("mouseenter", def);
function def(){
    document.getElementById("outer").style.backgroundColor = "pink";
}
document.getElementById("inner").addEventListener("mouseenter", ghi);
function ghi(){
    document.getElementById("inner").style.backgroundColor = "orange";
}
document.getElementById("outer").addEventListener("mouseleave", x);
function x(){
    document.getElementById("outer").removeEventListener("mouseenter", def);
}
document.getElementById("inner").addEventListener("mouseleave", y);
function y(){
    document.getElementById("inner").removeEventListener("mouseenter", ghi);
}