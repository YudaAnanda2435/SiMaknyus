const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

document.querySelectorAll(".text").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.value === "kerja sama") {
      scrollToElement("kerjasama");
    } else if (this.value === "ayam") {
      scrollToElement("ayam");
    } else if (this.value === "Testimoni") {
      scrollToElement("testimoni");
    } else if (this.value === "About") {
      scrollToElement("About");
    } else if (this.value === "Home") {
      scrollToElement("Home");
    }
  });
});

function scrollToElement(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const offset = 80;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1); 
    scrollToElement(targetId);
  });
});

(function () {
  emailjs.init("PEXAPSh8H0l0JGOVC");
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs
      .send("service_qqw760c", "template_k5mt2et", {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value,
      })
      .then(
        function (response) {
          alert("Pesan berhasil dikirim!");
          event.target.reset();
        },
        function (error) {
          alert("Gagal mengirim pesan, coba lagi!");
        }
      );
  });
