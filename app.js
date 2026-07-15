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

// mobile caraousel
const slides = document.querySelector(".mobile-slides");

const images = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let current = 0;

function updateSlide() {
  // current is =0 and translate x(0%) when we click next current = 1  translatex = (-100%)
  // the entire row moves left by one image and we multiply by 100 because each image takes the full width of the carusel
  slides.style.transform = `translateX(-${current * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  // changes current image by 1
  current++;

  //returns it back current back to the 1st image when we reach the end
  if (current >= images.length) {
    current = 0;
  }

  // to update or display the current image on screen
  updateSlide();
});

prevBtn.addEventListener("click", function () {
  current--;

  // to stop us from going below 0
  if (current < 0) {
    current = images.length - 1;
  }

  updateSlide();
});

// the desktop style of this carosuel which is each image click changes the images dispalyed
