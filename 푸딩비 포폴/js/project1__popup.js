const buttonImg = document.querySelector(".project1__category4--sentence");
const popUp = document.querySelector(".project1__popup");
const show = document.getElementById("show");


function buttonClick(){
  popUp.removeAttribute('id');
}

buttonImg.addEventListener("click", buttonClick)



const closeIcon = document.querySelector(".close__btn");

closeIcon.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active__close__btn")
  popUp.classList.toggle("active");
});


// if(buttonImg.classList.contains("active") === true) {
//   popUp.id = "show";
//   buttonImg.addEventListener("click", buttonClick)
//   buttonClick()
// }

// if(buttonImg.classList.contains("active") === true) {
//   popUp.id = "show";
//   buttonImg.addEventListener("click", buttonClick)
//   buttonClick()
// }


// if(document.getElementById("show") !== true) {
//   popUp.id = "show";
//   buttonImg.addEventListener("click", buttonClick)
//   buttonClick()
// }


/* 왜 안되는 걸까ㅠㅠ */

if(document.getElementById("show") === null) {
  popUp.id = "show";
  buttonClick()
}


buttonImg.addEventListener("click", buttonClick)

