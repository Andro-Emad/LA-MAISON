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
// class User {
//   constructor(mealImg, mealName, mealDetails, price) {
//     this.i = mealImg;
//     this.u = mealName;
//     this.d = mealDetails;
//     this.p = price;
//   }
// }
// let userOne = new User(
//   `images/android-icon-192x192.png`,
//   "Beer",
//   "brewed in our own brewery, unfiltered wheat",
//   "3,50 €"
// );
// let userTwo = new User(
//   `images/android-icon-192x192.png`,
//   "Beer",
//   "brewed in our own brewery, unfiltered wheat",
//   "4,50 €"
// );
// let userThree = new User(
//   `images/android-icon-192x192.png`,
//   "Beer",
//   "brewed in our own brewery, unfiltered wheat",
//   "6,50 €"
// );
// const jsData = [userOne, userTwo, userThree];
// console.log(jsData);
// let myMainElement = document.createElement("div");
// let myMainElement1 = document.createElement("div");
// let myimg = document.createElement("img");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");
// let myspan = document.createElement("span");
// for (let i = 0; i < jsData.length; i++) {
//   myMainElement.className = "card-box"; // عمل كلاس
//   myMainElement1.className = "card-Text"; // عمل كلاس

//   let myAttr = document.createAttribute(`src`);
//   myimg.setAttributeNode(myAttr);
//   let myHeadingText = document.createTextNode(jsData[i].u);
//   let myParagraphText = document.createTextNode(jsData[i].d);
//   let myspanText = document.createTextNode(jsData[i].p);

//   myHeading.appendChild(myHeadingText);
//   myParagraph.appendChild(myParagraphText);
//   myspan.appendChild(myspanText);

//   myMainElement1.appendChild(myimg);
//   myMainElement1.appendChild(myHeading);
//   myMainElement1.appendChild(myParagraph);
//   myMainElement1.appendChild(myspan);
// }
// myMainElement.appendChild(myMainElement1);
// //="${jsData[i].i}"
// menu_card.innerHTML += `${myMainElement}`;
// // // console.log(card);

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

//--------------- 3 -----------
// getData("meals.json").then((result) => {
//   console.log(result);

//   let div = document.write(`<div class="card-box">`);
//   for (let i = 0; i < result.length; i++) {
//     document.write(`<img src="${result[i].mealImg}" alt="image Box">`);
//     document.write(`<div class="card-Text">`);
//     document.write(`
//           <h2>${result[i].mealName}</h2>
//           <p>${result[i].mealDetails}</p>
//           <span>${result[i].price}</span>
//         `);
//     document.write(`</div>`);
//   }
//   document.write(`</div>`);
//   menu_card.innerHTML += `${div}`;
// });

//----4----
// fetch("meals.json").then((result) => {
//   console.log(result);
//   // let myData = result.json();
//   // console.log(myData);
//   // return myData;
// });
