const mediaList = [
    { type: "image", src: "images/IMAGE-1.jpg" },
    { type: "image", src: "images/IMAGE-2.jpg" },
    { type: "image", src: "images/IMAGE-3.jpg" },
    { type: "image", src: "images/IMAGE-4.jpg" },
    { type: "image", src: "images/IMAGE-5.jpg" },
    { type: "image", src: "images/IMAGE-6.jpg" },
    { type: "image", src: "images/IMAGE-7.jpg" },
    { type: "image", src: "images/IMAGE-8.jpg" },
    { type: "image", src: "images/IMAGE-9.jpg" },
    { type: "image", src: "images/IMAGE-10.jpg" },
    { type: "image", src: "images/IMAGE-11.jpg" },
    { type: "image", src: "images/IMAGE-12.jpg" },
    { type: "image", src: "images/IMAGE-13.jpg" },
    { type: "image", src: "images/IMAGE-14.jpg" },
    { type: "image", src: "images/IMAGE-15.jpg" },
    { type: "image", src: "images/IMAGE-16.jpg" },
    { type: "image", src: "images/IMAGE-17.jpg" },
];

const slider = document.getElementById("slider");
let currentIndex = 0;

/* Create slides */
mediaList.forEach(media => {
  const slide = document.createElement("div");
  slide.className = "slide";

  if (media.type === "image") {
    const img = document.createElement("img");
    img.src = media.src;
    slide.appendChild(img);
  }

  if (media.type === "video") {
    const video = document.createElement("video");
    video.src = media.src;
    video.controls = true;
    video.preload = "auto";
    video.playsInline = true;
    slide.appendChild(video);
  }

  slider.appendChild(slide);
});

/* Preload media */
mediaList.forEach(media => {
  if (media.type === "image") {
    const img = new Image();
    img.src = media.src;
  }
  if (media.type === "video") {
    const video = document.createElement("video");
    video.src = media.src;
    video.preload = "auto";
  }
});

/* Slide function */
function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}vw)`;
}

/* Swipe for mobile */
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let diff = e.changedTouches[0].clientX - startX;

  if (diff < -50 && currentIndex < mediaList.length - 1) {
    currentIndex++;
  }

  if (diff > 50 && currentIndex > 0) {
    currentIndex--;
  }

  showSlide(currentIndex);
});

/* Arrow keys for laptop */
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" && currentIndex < mediaList.length - 1) {
    currentIndex++;
  }

  if (e.key === "ArrowLeft" && currentIndex > 0) {
    currentIndex--;
  }

  showSlide(currentIndex);
});