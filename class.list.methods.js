document.getElementById("one").addEventListener("click", abc);
function abc() {
    document.querySelector(".one").classList.add("xyz", "abc");
}
document.getElementById("one").addEventListener("dblclick", def);
function def(){
    document.querySelector(".one").classList.remove("xyz");
}

document.getElementById("one").addEventListener('mouseleave', def);
function def(){
    document.querySelector(".one").classList.toggle("xyz");
}

// document.getElementById("two").addEventListener("click", abc);
// function abc() {
//     document.querySelector("#two").classList.add("ggg");
// }
// document.getElementById("two").addEventListener("dblclick", def);
// function def(){
//     document.querySelector("#two").classList.remove("ggg");
// }