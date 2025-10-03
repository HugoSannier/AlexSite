const hamburgerbtn = document.querySelector(".hamburgerbtn");
const topNav = document.querySelector(".topnav");
const cross = document.querySelector(".cross");
const crossbtn = document.querySelector(".crossbtn");
const telnav = document.querySelector(".telnav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
console.log(hamburgerbtn, topNav, cross, crossbtn, telnav, main, footer);

hamburgerbtn.addEventListener("click", () => {
  hamburgerbtn.style.opacity = "0";
  hamburgerbtn.style.display = "none";
  cross.style.display = "block";
  cross.style.opacity = "1";
  telnav.style.transform = "translate(0)";
  console.log("click !");
  main.style.opacity = "0";
  footer.style.opacity = "0";
  topNav.style.position = "relative";
});

crossbtn.addEventListener("click", () => {
  console.log("click ");
  topNav.classList.remove("navtel");
  hamburgerbtn.style.opacity = "1";
  cross.style.opacity = "0";
  cross.style.display = "none";
  hamburgerbtn.style.display = "block";
  telnav.style.transform = "translate(-200%)";
  main.style.opacity = "1";
  footer.style.opacity = "1";
  topNav.style.position = "fixed";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    topNav.style.height = "75" + "px";
    topNav.style.borderBottom = " 1px  rgba(0, 0, 0, 0.555) solid";
  } else if (window.scrollY < 30) {
    topNav.style.height = "100" + "px";
    topNav.style.borderBottom = "none";
  }
});
