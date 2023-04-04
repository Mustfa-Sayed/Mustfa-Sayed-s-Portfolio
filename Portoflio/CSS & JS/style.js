//  toggle  \\
const styleSwitcherToggle = document.querySelector(".style-switch-toggler")
styleSwitcherToggle.addEventListener("click", () =>{
    document.querySelector(".style-switch").classList.toggle("open")
})
// hide style switch on scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switch").classList.contains("open"))
    {
        document.querySelector(".style-switch").classList.remove("open");
    }
})
//  colors
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach(style => {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  }


  