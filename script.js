const DEBUG = false;

// Thème
document.body.dataset.theme = "dark";

function toggleTheme() {
  var theme = document.body.dataset.theme;

  if (theme === "dark") {
    document.body.dataset.theme = "light";
    if (DEBUG) {
      console.log("Theme: " + document.body.dataset.theme);
    }

  } else {
    document.body.dataset.theme = "dark";
    if (DEBUG) {
      console.log("Theme: " + document.body.dataset.theme);
    }

  }
}



// Header

const header = document.getElementById("header");
const title = document.getElementById("title");
const navText = document.getElementById("nav-text");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop >= 81) {
    if (DEBUG) {
      console.log("Scroll position: " + document.documentElement.scrollTop);
    }

    // Style pour le header quand on est en haut de la page
    header.className = "Header-Bottom";

    // Style pour le titre quand on est en haut de la page
    title.className = "title-bottom";

    // Style pour les liens de navigation quand on est en haut de la page
    navText.className = "nav-text-bottom";

  } else {
    if (DEBUG) {
      console.log(document.documentElement.scrollTop);
    }

    // Style pour le header quand on est en haut de la page
    header.className = "Header-Top";

    // Style pour le titre quand on est en haut de la page
    title.className = "title-top";

    // Style pour les liens de navigation quand on est en haut de la page
    navText.className = "nav-text-top";
  }
}
