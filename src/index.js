import { showHomePage } from "./home";
import { showMenu } from "./menu";
import { showAbout } from "./about";
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
showHomePage();

const clearPage = () => {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

console.log(homeBtn, menuBtn, aboutBtn);

homeBtn.addEventListener("click", () => {
  clearPage();
  showHomePage();
});

menuBtn.addEventListener("click", () => {
  clearPage();
  showMenu();
});

aboutBtn.addEventListener("click", () => {
  clearPage();
  showAbout();
});
