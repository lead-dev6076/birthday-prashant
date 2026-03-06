const mediaList = [
    { type: "image", src: "images/IMAGE-1.JPG" },
    { type: "image", src: "images/IMAGE-2.JPG" },
    { type: "image", src: "images/IMAGE-3.JPG" },
    { type: "image", src: "images/IMAGE-4.JPG" },
    { type: "image", src: "images/IMAGE-5.JPG" },
    { type: "image", src: "images/IMAGE-6.JPG" },
    { type: "image", src: "images/IMAGE-7.JPG" },
    { type: "image", src: "images/IMAGE-8.JPG" },
    { type: "image", src: "images/IMAGE-9.JPG" },
    { type: "image", src: "images/IMAGE-10.JPG" },
    { type: "image", src: "images/IMAGE-11.JPG" },
    { type: "image", src: "images/IMAGE-12.JPG" },
    { type: "image", src: "images/IMAGE-13.JPG" },
    { type: "image", src: "images/IMAGE-14.JPG" },
    { type: "image", src: "images/IMAGE-15.JPG" },
    { type: "image", src: "images/IMAGE-16.JPG" },
    { type: "image", src: "images/IMAGE-17.JPG" },
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
