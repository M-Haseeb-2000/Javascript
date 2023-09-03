var newElement = document.createElement("h1");
console.log(newElement);
//createTextNode
var newText = document.createTextNode("This is just a text");
console.log(newText);
//createComment
var newComment = document.createComment("This is just a comment");
console.log(newComment);
// how to append the text into elements that we have created above
newElement.appendChild(newText);
console.log(newElement);
// document.getElementById("first").appendChild(newElement);
//insertBefore
var target = document.getElementById("first");
target.insertBefore(newElement, target.childNodes[2]);

//insertAdjescentMethods -> 
//1)insertAdjascentElement 
var box_2 = document.getElementById("second");
var element_2 = document.createElement("h2");
var text_2 = document.createTextNode("This is just second Text");
element_2.appendChild(text_2);
box_2.insertAdjacentElement("beforeend",element_2);

//2)insertAdjascentHTML
var newHTML = "<h2>This is newHTML</h2>";
var box_3 = document.getElementById("third");
box_3.insertAdjacentHTML("afterbegin", newHTML);

//3) insertAdjascentText
var lastBox = document.getElementById("fourth");
var newText = "Hello World";
lastBox.insertAdjacentText("beforeend", newText);

//replaceChild method
var newTa = document.createElement("li");                  //first create new element
var newT = document.createTextNode("Wow new Text!");     //second create new text to be replaced
newTa.appendChild(newT);                                //append the newText in newTag
var tar = document.getElementById("list");               //target the element by naming
var old = tar.children[1];                          //target the old element with text
console.log(old);
tar.replaceChild(newTa, old);

//removeChild
var removeElement = tar.children[0];
tar.removeChild(removeElement);

//cloneNode
var cloneFrom = document.getElementById("frst");
var cloneItem = cloneFrom.children[0];
var item = cloneItem.cloneNode(true);
var cloneTo = document.getElementById("scnd");
cloneTo.appendChild(cloneItem);

//contains method
var parentElement = document.getElementById("parent");
var childElement = document.getElementById("child");
var findItem = parentElement.contains(childElement);
console.log(findItem);

//hasAttribute
var findAttribute = childElement.hasAttribute("class");
console.log(findAttribute);

//hasChildNodes
var findChild = childElement.hasChildNodes();
console.log(findChild);

//isEqualNode       isEqualNode checks whether both the elements even their attributes and attributes values remain same otherwise it will return false
var target1 = document.getElementById("list-1");
var target2 = document.getElementById("list-2");
var equal1 = target1.firstElementChild.isEqualNode(target2.firstElementChild);
console.log(equal1);
var equal2 = target1.children[1].isEqualNode(target2.children[1]);
console.log(equal2);
var target3 = document.getElementById("list-1").lastElementChild;
var target4 = document.getElementById("list-2").lastElementChild;
var equal3 = target3.isEqualNode(target4);
console.log(equal3);