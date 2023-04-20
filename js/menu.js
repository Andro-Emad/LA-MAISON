let elementList = document.querySelector(".menu-icon");
const elementUl = document.querySelector("nav .nav__menu");
let menu_status = false;

elementList.addEventListener("click", () => {
  if (menu_status == false) {
    /*===== MENU SHOW =====*/
    elementUl.classList.add("show-menu");
    elementList.classList.add("list");
    menu_status = true;
  } else if (menu_status == true) {
    /*===== MENU Close =====*/
    elementUl.classList.remove("show-menu");
    elementList.classList.remove("list");
    menu_status = false;
  }
});

// what year
const spanYear = document.querySelector("footer .container .what_year ");
let dateNow = new Date();
spanYear.innerHTML = `${dateNow.getFullYear()}`;

//=====================list card==========================
// Make the list card in two ways, the first is with json and the second is with OOP
const menu_card = document.querySelector("#menu .container #menu-card");
//List card making using json
let xhr = new XMLHttpRequest();

xhr.open("GET", "meals.json", true);

xhr.send();
let dataParent = document.createElement("div");
dataParent.id = "data";

xhr.onreadystatechange = function () {
  if (this.readyState === this.DONE && this.status === 200) {
    let mainData = JSON.parse(this.response);
    for (let i = 0; i < mainData.length; i++) {
      let myMainElement = document.createElement("div");
      let myMainElement1 = document.createElement("div");
      let myimg = document.createElement("img");
      let myHeading = document.createElement("h2");
      let myParagraph = document.createElement("p");
      let myspan = document.createElement("span");
      myMainElement.className = "card-box";
      myMainElement1.className = "card-Text";
      myimg.setAttribute(`src`, `${mainData[i].mealImg}`);
      let myHeadingText = document.createTextNode(mainData[i].mealName);
      let myParagraphText = document.createTextNode(mainData[i].mealDetails);
      let myspanText = document.createTextNode(mainData[i].price);

      myHeading.appendChild(myHeadingText);
      myParagraph.appendChild(myParagraphText);
      myspan.appendChild(myspanText);

      myMainElement.appendChild(myimg);
      myMainElement1.append(myHeading, myParagraph, myspan);
      myMainElement.appendChild(myMainElement1);
      menu_card.appendChild(myMainElement);
    }
  }
};
