document.querySelector("#one1").addEventListener("click", abc);
function abc() {
    document.querySelector(".one").classList.add("xyz", "abc");
}
document.querySelector("#one1").addEventListener("dblclick", def);
function def(){
    document.querySelector(".one").classList.remove("xyz");
}

document.querySelector("#one").addEventListener('mouseleave', def);
function def(){
    document.querySelector(".one").classList.toggle("xyz");
}

document.querySelector("#two").addEventListener("click", abc);
function abc() {
    document.querySelector("#two").classList.add("ggg");
}
document.querySelector("#two").addEventListener("dblclick", def);
function def(){
    document.querySelector("#two").classList.remove("ggg");
}

document.querySelector("#four").addEventListener("click", four_func);
function four_func(){
    document.querySelector("#four").classList.add("four");
}
document.querySelector("#four").addEventListener("dblclick", four_func2);
function four_func2(){
    document.querySelector("#four").classList.add("five");
}