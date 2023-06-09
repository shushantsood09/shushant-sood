// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//  Toggle Icon

let menuIcon = document.querySelector("#id-menu");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//            Scroll sections active link

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector('header nav a[href*=' + id + ']').classList.add("active");
      });
    }
  });
  //          Sticky navbar

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY);

  // Remove togglr icon and navbar when clicked navabar link

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//  Scroll reveal

ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

//  Typed js

const type = new Typed(".multiple-text", {
  strings: ["Software Engineer", "Frontend Developer", "Teacher"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//  Function success

function success() {
  if (
    document.getElementById("fullName").value === "" &&
    document.getElementById("email").value === "" &&
    document.getElementById("subject").value === "" &&
    document.getElementById("message").value === ""
  ) {
    document.getElementById("button").disabled = true;
  } else {
    document.getElementById("button").disabled = false;
  }
}
