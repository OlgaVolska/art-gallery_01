//массив изображений, с которого генерируется разметка
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

//находим GALLERY - contаiner для будущих изображений
const gallery = document.querySelector("#gallery");

// перебираем массив ITEMS и добавляем каждый item в галерею
items.forEach((item) => {
  //создаем img element
  let img = document.createElement("img");
  img.src = item.src;
  img.id = item.id;
  img.classList = "gallery-img";
  // добавляем image в gallery
  gallery.appendChild(img);
});

// чтобы дальше работать с фоографиями в галерее, нужно сделать из них массив

// находим фотографии
const img = gallery.children;
// создаем массив из фотографий
const images = Array.from(img);

// находим модалку
const modalBox = document.querySelector("#modal-box");
const modalImg = document.querySelector("#modal-img"); // big image(modal)

// перебираем массив
// по клику на фото, открываем его в модальном окне

let curIndexPhoto;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modalBox.classList = "visible";
    modalImg.classList = "imgBig";
    modalImg.src = img.src;
    curIndexPhoto = index;
  });
});

// находим стрелки и вешаем на них событие клик
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");

// arrowRight.addEventListener("click", nextImage);
arrowRight.addEventListener("click", nextImage);

function nextImage() {
  // увеличиваем индекс на 1. чтобы листать вперед
  curIndexPhoto++;

  if (curIndexPhoto >= images.length) {
    // если дошли до конца массива
    curIndexPhoto = 0; // начинаем с первого элемента
  }
  // изображение в модальном окне будет равно выбранному элементу в массиве
  modalImg.src = images[curIndexPhoto].src;
}

arrowLeft.addEventListener("click", previousImage);

function previousImage() {
  //  уменьшаем индекс на 1 чтобы листать назад
  curIndexPhoto--;

  if (curIndexPhoto < 0) {
    // если дошли до первого элемента
    curIndexPhoto = images.length - 1; // начинам с последнего
  }
  modalImg.src = images[curIndexPhoto].src;
}

// function nextImage() {
//   let nextItem;
//   for (let i = 0; i < images.length; i++) {
//     if (modalImg.src === images[i].src) {
//       nextItem = img[i + 1];
//     }
//   }
//   if (nextItem === undefined) {
//     modalImg.src = images[0].src;
//   } else {
//     modalImg.src = nextItem.src;
//   }
// }

// function previousImage() {
//   let previousItem;
//   for (let i = 0; i < images.length; i++) {
//     if (modalImg.src === images[i].src) {
//       previousItem = img[i - 1];
//     }
//   }
//   if (previousItem === undefined) {
//     modalImg.src = images.at(-1).src;
//   } else {
//     modalImg.src = previousItem.src;
//   }
// }

// выход из модалки
const closeIcon = document.querySelector("#close-icon");
closeIcon.addEventListener("click", () => {
  modalBox.classList = "hidden";
});

// или так
const body = document.body;
body.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalBox.classList = "hidden";
  }
});
