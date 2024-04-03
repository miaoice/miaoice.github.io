const images = [
  "answer/1.jpg",
  "answer/2.jpg",
  "answer/3.jpg",
  "answer/4.jpg",
  "answer/5.jpg",
  "answer/6.jpg",
  "answer/7.jpg",
  "answer/8.jpg",
  "answer/9.jpg",
  "answer/10.jpg",
  "answer/11.jpg",
  "answer/12.jpg",
  "answer/13.jpg",
  "answer/14.jpg",
  "answer/15.jpg",
  "answer/16.jpg",
  "answer/17.jpg",
  "answer/18.jpg",
  "answer/19.jpg",
  "answer/20.jpg"
  // Add more image URLs as needed
];
let currentPage = 1;
const totalPages = images.length;

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageNumber = document.getElementById("page-number");
const currentImage = document.getElementById("current-image");

function showImage(page) {
  currentImage.src = images[page - 1];
  pageNumber.textContent = page;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    showImage(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    showImage(currentPage);
  }
});

showImage(currentPage);
