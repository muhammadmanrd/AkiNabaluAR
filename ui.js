/* Mobile navbar toggle */
var navToggle = document.getElementById("navToggle");
var navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    var isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  var menuLinks = navMenu.querySelectorAll("a");
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function () {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }
}

/* Tabs (Synopsis) */
var tabs = document.querySelectorAll(".tab");
var panels = document.querySelectorAll(".panel");

for (var t = 0; t < tabs.length; t++) {
  tabs[t].addEventListener("click", function () {
    var target = this.getAttribute("data-tab");

    for (var i = 0; i < tabs.length; i++) tabs[i].classList.remove("active");
    this.classList.add("active");

    for (var p = 0; p < panels.length; p++) panels[p].classList.remove("active");
    var panel = document.getElementById(target);
    if (panel) panel.classList.add("active");
  });
}

/* Smooth scroll with navbar offset */
var scrollLinks = document.querySelectorAll('a.navLink[href^="#"]');
for (var s = 0; s < scrollLinks.length; s++) {
  scrollLinks[s].addEventListener("click", function (e) {
    var id = this.getAttribute("href");
    var targetEl = document.querySelector(id);
    if (!targetEl) return;

    e.preventDefault();

    var navOffset = 72;
    var y = targetEl.getBoundingClientRect().top + window.pageYOffset - navOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
}
// JavaScript Document