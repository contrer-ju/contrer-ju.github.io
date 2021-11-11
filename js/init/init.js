$(document).ready(function () {
  initWidth = $(window).width();
  let btnPrev = document.getElementById("btn-prev");
  let btnNext = document.getElementById("btn-next");
  let dotsContainer = document.getElementById("dots-container");
  let thumbnailContainer = document.getElementById("thumbnail-container");
  let projectImage = document.getElementById("project-image");
  let projectIframe = document.getElementById("project-iframe");

  if (initWidth <= 420) {
    document.getElementById("btn-menu").setAttribute("class", "nav-bar-menu bold");
    document.getElementById("navbar").setAttribute("class", "bars-flex");
    document.getElementById("menu").setAttribute("class", "btn-bar");
    document.getElementById("menu").setAttribute("style", "display: none");
    document.getElementById("navbarContainer").setAttribute("class", "horizontal-width");
    document.getElementById("linkedin-logo").setAttribute("src", "./img/icons/linkedin19.png");
    document.getElementById("github-logo").setAttribute("src", "./img/icons/github19.png");
    document.getElementById("freecodecamp-logo").setAttribute("src", "./img/icons/fcc19.png");
    document.getElementById("codesandbox-logo").setAttribute("src", "./img/icons/codesandbox19.png");
    if (btnPrev !== null) document.getElementById("btn-prev").setAttribute("class", "fas fa-angle-up");
    if (btnNext !== null) document.getElementById("btn-next").setAttribute("class", "fas fa-angle-down");
    if (dotsContainer !== null) document.getElementById("dots-container").setAttribute("class", "thumbnail-dots");
    if (thumbnailContainer !== null) document.getElementById("thumbnail-container").setAttribute("class", "work-thumbnail-flex hidden");
    if (projectImage !== null) document.getElementById("project-image").setAttribute("class", "project-image");
    if (projectIframe !== null) document.getElementById("project-iframe").setAttribute("class", "project-iframe hidden");
  }

  if (initWidth > 420 && initWidth <= 768) {
    document.getElementById("btn-menu").setAttribute("class", "nav-bar-menu bold");
    document.getElementById("navbar").setAttribute("class", "bars-flex");
    document.getElementById("menu").setAttribute("class", "btn-bar");
    document.getElementById("menu").setAttribute("style", "display: none");
    document.getElementById("navbarContainer").setAttribute("class", "horizontal-width");
    document.getElementById("linkedin-logo").setAttribute("src", "./img/icons/linkedin24.png");
    document.getElementById("github-logo").setAttribute("src", "./img/icons/github24.png");
    document.getElementById("freecodecamp-logo").setAttribute("src", "./img/icons/fcc24.png");
    document.getElementById("codesandbox-logo").setAttribute("src", "./img/icons/codesandbox24.png");
    if (btnPrev !== null) document.getElementById("btn-prev").setAttribute("class", "fas fa-angle-up");
    if (btnNext !== null) document.getElementById("btn-next").setAttribute("class", "fas fa-angle-down");
    if (dotsContainer !== null) document.getElementById("dots-container").setAttribute("class", "thumbnail-dots");
    if (thumbnailContainer !== null) document.getElementById("thumbnail-container").setAttribute("class", "work-thumbnail-flex hidden");
    if (projectImage !== null) document.getElementById("project-image").setAttribute("class", "project-image");
    if (projectIframe !== null) document.getElementById("project-iframe").setAttribute("class", "project-iframe hidden");
  }

  if (initWidth > 768) {
    document.getElementById("btn-menu").setAttribute("class", "nav-bar-menu bold hidden");
    document.getElementById("navbar").removeAttribute("class");
    document.getElementById("menu").removeAttribute("class");
    document.getElementById("menu").setAttribute("style", "display: inline");
    document.getElementById("navbarContainer").setAttribute("class", "horizontal-width bars-flex");
    document.getElementById("linkedin-logo").setAttribute("src", "./img/icons/linkedin32.png");
    document.getElementById("github-logo").setAttribute("src", "./img/icons/github32.png");
    document.getElementById("freecodecamp-logo").setAttribute("src", "./img/icons/fcc32.png");
    document.getElementById("codesandbox-logo").setAttribute("src", "./img/icons/codesandbox32.png");
    if (btnPrev !== null) document.getElementById("btn-prev").setAttribute("class", "fas fa-angle-left");
    if (btnNext !== null) document.getElementById("btn-next").setAttribute("class", "fas fa-angle-right");
    if (dotsContainer !== null) document.getElementById("dots-container").setAttribute("class", "thumbnail-dots hidden");
    if (thumbnailContainer !== null) document.getElementById("thumbnail-container").setAttribute("class", "work-thumbnail-flex");
    if (projectImage !== null) document.getElementById("project-image").setAttribute("class", "project-image hidden");
    if (projectIframe !== null) document.getElementById("project-iframe").setAttribute("class", "project-iframe");
  }
});
