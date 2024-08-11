// script.js
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");
  
    document.querySelectorAll(".gallery img").forEach(img => {
      img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        captionText.textContent = img.alt;
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });