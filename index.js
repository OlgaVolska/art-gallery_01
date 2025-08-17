//array of images
const items = [
  { id: "cottonbro-1", src: "images/сottonbro-1.jpg" },
  { id: "cottonbro-11", src: "images/сottonbro-11.jpg" },
  { id: "cottonbro-3", src: "images/сottonbro-3.jpg" },
  { id: "cottonbro-6", src: "images/сottonbro-6.jpg" },
  { id: "cottonbro-5", src: "images/сottonbro-5.jpg" },
  { id: "cottonbro-10", src: "images/сottonbro-10.jpg" },
  { id: "cottonbro-9", src: "images/сottonbro-9.jpg" },
  { id: "cottonbro-7", src: "images/сottonbro-7.jpg" },
  { id: "cottonbro-4", src: "images/сottonbro-4.jpg" },
  { id: "cottonbro-12", src: "images/сottonbro-12.jpg" },
  { id: "cottonbro-2", src: "images/сottonbro-2.jpg" },
  { id: "cottonbro-8", src: "images/сottonbro-8.jpg" },
];

//find GALLERY - contаiner for future images
const gallery = document.querySelector("#gallery");
// find modal window
const modalBox = document.querySelector("#modal-box");
const modalImg = document.querySelector("#modal-img"); // big image(modal)

// iterate array ITEMS, add each item in gallery
items.forEach((item) => {
  //create img element
  let img = document.createElement("img");
  img.src = item.src;
  img.id = item.id;
  img.classList = "gallery-img";
  // add image in gallery
  gallery.appendChild(img);

  // when we click on photo, photo open in modal window
  img.addEventListener("click", () => {
    modalBox.classList = "visible";
    modalImg.classList = "imgBig";
    modalImg.src = img.src;
    modalImg.id = img.id;
  });
});

// We must create image Array, to continue working with photos

// find all images
const img = gallery.children;
// create array
const images = Array.from(img);

// find arrows
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");

arrowRight.addEventListener("click", nextImage);

function nextImage() {
  //find current index, use ID
  let curIndex = images.findIndex((img) => img.id === modalImg.id);

  let nextItem = curIndex + 1; // increase current index to go to next image
  if (nextItem >= images.length) {
    // if we are at the end of the gallery
    nextItem = 0; // start with first element
  }
  modalImg.src = images[nextItem].src; // modal img will be equal selected img in gallery
  modalImg.id = images[nextItem].id; // update id
}


const closeIcon = document.querySelector("#close-icon");
closeIcon.addEventListener("click", () => {
  modalBox.classList = "hidden";
});


const body = document.body;
body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalBox.classList = "hidden";
  }
});

