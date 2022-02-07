const images = [
  "0.jpeg",
  "1.jpg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpg",
  "6.webp",
  "7.jpeg",
];

// console.log(Math.floor(Math.random() * images.length));

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.className = "img";

// console.log(bgImage);

document.body.appendChild(bgImage);
