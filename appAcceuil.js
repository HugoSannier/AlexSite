const hamburgerbtn = document.querySelector(".hamburgerbtn");
const telTopNav = document.querySelector(".tel_topnav");
const cross = document.querySelector(".cross");
const crossbtn = document.querySelector(".crossbtn");
const telnav = document.querySelector(".telnav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const images = document.querySelectorAll("img");
const nbSlide = images.length;
const next = document.querySelector(".bouttonnext");
const previous = document.querySelector(".bouttonprevious");
let count = 2;
console.log(
  // hamburgerbtn,
  // telTopNav,
  // cross,
  // crossbtn,
  // telnav,
  // main,
  // footer,
  // images,
  // nbSlide,
  // next,
  // previous,
  count
);

function slideSuivante() {
  images[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 1;
  }
  images[count].classList.add("active");
  console.log(count);
}

function slidePrecedente() {
  images[count].classList.remove("active");

  if (count > 1) {
    count--;
  } else {
    count = nbSlide - 1;
  }
  images[count].classList.add("active");
  console.log(count);
}

next.addEventListener("click", slideSuivante);
previous.addEventListener("click", slidePrecedente);

hamburgerbtn.addEventListener("click", () => {
  hamburgerbtn.style.opacity = "0";
  hamburgerbtn.style.display = "none";
  cross.style.display = "block";
  cross.style.opacity = "1";
  telnav.style.transform = "translate(0)";
  main.style.opacity = "0";
  footer.style.opacity = "0";
});

crossbtn.addEventListener("click", () => {
  telTopNav.classList.remove("navtel");
  hamburgerbtn.style.opacity = "1";
  cross.style.opacity = "0";
  cross.style.display = "none";
  hamburgerbtn.style.display = "block";
  telnav.style.transform = "translate(-200%)";
  main.style.opacity = "1";
  footer.style.opacity = "1";
});
