// nav

const menu = document.querySelector(".menu-btn");

const closeBtn = document.querySelector(".close-btn");

const mobileNav = document.querySelector(".mobile-nav");

// open slider
menu.addEventListener("click", () => {
  mobileNav.classList.add("active");
});

// we use a function here because we wanna repeat the code
const closeSiderbar = () => {
  mobileNav.classList.remove("active");
};

// close button
closeBtn.addEventListener("click", closeSiderbar);

document.addEventListener("click", (e) => {
  // not inside the side bar and not on the menu btn
  if (!mobileNav.contains(e.target) && !menu.contains(e.target)) {
    closeSiderbar();
  }
});
