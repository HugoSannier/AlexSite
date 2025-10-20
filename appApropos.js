const hamburgerbtn = document.querySelector(".hamburgerbtn");
const telTopNav = document.querySelector(".tel_topnav");
const cross = document.querySelector(".cross");
const crossbtn = document.querySelector(".crossbtn");
const telnav = document.querySelector(".telnav");
const main = document.querySelector("main");
console.log(hamburgerbtn, telTopNav, cross, crossbtn, telnav, main);

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

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    telTopNav.style.height = "75" + "px";
    telTopNav.style.borderBottom = " 1px  rgba(0, 0, 0, 0.555) solid";
  } else if (window.scrollY < 30) {
    telTopNav.style.height = "100" + "px";
    telTopNav.style.borderBottom = "none";
  }
});
