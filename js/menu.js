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

//
const menu_card = document.querySelector("#menu .container #menu-card");

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "meals.json");
// myRequest.send();
// console.log(typeof myRequest);
// myRequest.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let jsData = JSON.parse(this.responseText);

//     let div = document.write(`<div class="card-box">`);
//     for (let i = 0; i < jsData.length; i++) {
//       document.write(`<img src="${jsData[i].mealImg}" alt="image Box">`);
//       document.write(`<div class="card-Text">`);
//       document.write(`
//         <h2>${jsData[i].mealName}</h2>
//         <p>${jsData[i].mealDetails}</p>
//         <span>${jsData[i].price}</span>
//       `);
//       document.write(`</div>`);
//     }
//     document.write(`</div>`);
//     menu_card.appendChild(div);
//   }
// };

//--------------- 2-----------
class User {
  constructor(mealImg, mealName, mealDetails, price) {
    this.i = mealImg;
    this.u = mealName;
    this.d = mealDetails;
    this.p = price;
  }
}
let user1 = new User(
  `images/menu/Schmugglerkiste.png`,
  "Schmugglerkiste",
  "Treasure box filled with chocolate and vanilla ice cream. Including a small surprise  ",
  "3,50 €"
);
let user2 = new User(
  `images/menu/Warm-chocolate-cake.webp`,
  "Warm chocolate cake  ",
  "Warm chocolate cake with vanilla ice cream",
  "5,90 €"
);
let user3 = new User(
  `images/menu/Vegan-patties.jpg`,
  "Vegan patties",
  "Vegan patties with vegetables on a fruity tomato sauce",
  "11,50 €"
);
let user4 = new User(
  `images/menu/colorful.jpg`,
  "colorful",
  "Large mixed salad",
  "7,50 €"
);
let user5 = new User(
  `images/menu/Shepherd's-Salad.jpg`,
  "Shepherd's Salad",
  "Salad with peppers, onions, olives and feta cheese",
  "9,75 €"
);
let user6 = new User(
  `images/menu/Goggelar.jpg`,
  "Goggelar",
  "Salad with corn, egg, onions, olives and juicy corn chicken breast fillet",
  "12,50 €"
);
let user7 = new User(
  `images/menu/Classic-Burger.jpg`,
  "Classic Burger",
  "Beef (approx. 180g), lettuce, onion, tomatoes and pickle. With french fries 2.40€",
  "8,50 €"
);
let user8 = new User(
  `images/menu/Sennerin-burger.jpg`,
  "Sennerin burger",
  "Beef (approx. 250g), cheese, lettuce, onion, tomatoes, pickle. ",
  "9,50 €"
);
let user9 = new User(
  `images/menu/Sennerin-burger1.jpg`,
  "Sennerin burger",
  "Beef (approx. 180g), cheese, lettuce, onion, tomatoes, pickle.",
  "9,99 €"
);
let user10 = new User(
  `images/menu/Sennerin-burger2.jpeg`,
  "Sennerin burger",
  "Beef (approx. 190g), cheese, lettuce, onion, tomatoes, pickle.",
  "9,75 €"
);
let user11 = new User(
  `images/menu/Sennerin-burger3.jpg`,
  "Sennerin burger",
  "Beef (approx. 180g), cheese, lettuce, onion, tomatoes, pickle. With french fries 2.40€ ",
  "9,25 €"
);
let user12 = new User(
  `images/menu/Sennerin-burger4.jpg`,
  "Sennerin burger",
  "Beef (approx. 185g), cheese, lettuce, onion, tomatoes, pickle. With french fries 2.40€ ",
  "10,00 €"
);
let user13 = new User(
  `images/menu/Farmers-burger.jpg`,
  "Farmers burger",
  "Beef (about 200g), spicy BBQ sauce, fried egg, salad, onion, tomatoes, pickle. With french fries 2.40€  ",
  "9,90 €"
);
let user14 = new User(
  `images/menu/Pasta-Salmone1.webp`,
  "Pasta Salmone ",
  "Pasta with fresh salmon, grilled vegetables, spinach and cream sauce  ",
  "13,99 €"
);
let user15 = new User(
  `images/menu/Pasta-Salmone.jpg`,
  "Pasta Salmone ",
  "Pasta with fresh salmon, grilled vegetables, spinach and cream sauce  ",
  "14,99 €"
);
let user16 = new User(
  `images/menu/Mine-burger.jpg`,
  "Mine burger",
  "Beef (about 100g), salad, onion, tomatoes, pickle. With french fries 2.40€  ",
  "4,90 €"
);
const jsData = [
  user7,
  user16,
  user8,
  user9,
  user10,
  user11,
  user12,
  user13,
  user3,
  user4,
  user5,
  user6,
  user14,
  user15,
  user2,
  user1,
];
// console.log(jsData);
for (let i = 0; i < jsData.length; i++) {
  let myMainElement = document.createElement("div");
  let myMainElement1 = document.createElement("div");
  let myimg = document.createElement("img");
  let myHeading = document.createElement("h2");
  let myParagraph = document.createElement("p");
  let myspan = document.createElement("span");
  myMainElement.className = "card-box"; // عمل كلاس
  myMainElement1.className = "card-Text"; // عمل كلاس
  myimg.setAttribute(`src`, `${jsData[i].i}`); //  تعديل في اتربيوت او انشاء
  let myHeadingText = document.createTextNode(jsData[i].u);
  let myParagraphText = document.createTextNode(jsData[i].d);
  let myspanText = document.createTextNode(jsData[i].p);

  myHeading.appendChild(myHeadingText);
  myParagraph.appendChild(myParagraphText);
  myspan.appendChild(myspanText);
  // console.log(jsData[i]);
  myMainElement.appendChild(myimg);
  myMainElement1.appendChild(myHeading);
  myMainElement1.appendChild(myParagraph);
  myMainElement1.appendChild(myspan);
  myMainElement.appendChild(myMainElement1);
  menu_card.appendChild(myMainElement);
}
