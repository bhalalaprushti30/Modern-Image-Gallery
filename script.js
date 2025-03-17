const images = document.querySelectorAll(".gallery img");
let currentIndex = 0;
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

function openModal(index) {
    currentIndex = index;
    modalImage.src = images[index].src;
    modal.style.display = "flex";
}
function closeModal() {
    modal.style.display = "none";
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentIndex].src;
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImage.src = images[currentIndex].src;
}
