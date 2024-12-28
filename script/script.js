
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

console.log(navbar); 
console.log(menuBtn); 

menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");
});

window.onload = function() {
  document.getElementById("popup").style.display = "flex";
};

document.querySelector(".close-popup").onclick = function() {
  document.getElementById("popup").style.display = "none";
};

document.querySelector(".btn").onclick = function() {
  document.getElementById("popup").style.display = "none";
};

// Buton referansı
let scrollTopBtn = document.getElementById("scrollTopBtn");

// Sayfa kaydırıldığında butonu gösterme
window.onscroll = function() {
  showScrollTopBtn();
};

function showScrollTopBtn() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// Yukarı çıkma fonksiyonu
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
