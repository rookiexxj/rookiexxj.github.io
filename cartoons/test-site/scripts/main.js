let myHeading = document.querySelector("h1");
myHeading.textContent = "希露菲天下第一!";
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/lxq.png") {
    myImage.setAttribute("src", "images/xilufei.png");
  } else {
    myImage.setAttribute("src", "images/lxq.png");
  }
};
let myButton = document.querySelector("button");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
      
