console.log("Javascrip Ready");

// i don't know how to fix this
// all i know is it works
mouseInFacebook();
mouseOutFacebook();
mouseInInsta();
mouseOutInsta();
mouseInTwitter();
mouseOutTwitter();
mouseInLinkedin();
mouseOutLinkedin();
mouseInGithub();
mouseOutGithub();

// for instagram icon
function mouseInFacebook() {
  // yellow
  document.getElementById("social-icons-facebook").src = "https://img.icons8.com/glyph-neue/50/ffff00/facebook-new.png";
}
function mouseOutFacebook() {
  // black
  document.getElementById("social-icons-facebook").src = "https://img.icons8.com/glyph-neue/50/000000/facebook-new.png";
}
// for facebook icon
function mouseInInsta() {
  // yellow
  document.getElementById("social-icons-instagram").src = "https://img.icons8.com/glyph-neue/50/ffff00/instagram-new.png";
}
function mouseOutInsta() {
  // black
  document.getElementById("social-icons-instagram").src = "https://img.icons8.com/glyph-neue/50/000000/instagram-new.png";
}
// for twitter account
function mouseInTwitter() {
  // yellow
  document.getElementById("social-icons-twitter").src = "https://img.icons8.com/glyph-neue/50/ffff00/twitter.png";
}
function mouseOutTwitter() {
  // black
  document.getElementById("social-icons-twitter").src = "https://img.icons8.com/glyph-neue/50/000000/twitter.png";
}
// for linked in icon
function mouseInLinkedin() {
  // yellow
  document.getElementById("social-icons-linkedin").src = "https://img.icons8.com/glyph-neue/50/ffff00/linkedin.png";
}
function mouseOutLinkedin() {
  // black
  document.getElementById("social-icons-linkedin").src = "https://img.icons8.com/glyph-neue/50/000000/linkedin.png";
}
// for github icon
function mouseInGithub() {
  // yellow
  document.getElementById("social-icons-github").src = "https://img.icons8.com/glyph-neue/50/ffff00/github.png";
}
function mouseOutGithub() {
  // black
  document.getElementById("social-icons-github").src = "https://img.icons8.com/glyph-neue/50/000000/github.png";
}

// socialImageChange();
// function socialImageChange() {
//   // black icons
//   facebookIconBlack = "https://img.icons8.com/glyph-neue/50/000000/facebook-new.png";
//   instagramIconBlack = "https://img.icons8.com/glyph-neue/50/000000/instagram-new.png";
//   twitterIconBlack = "https://img.icons8.com/glyph-neue/50/000000/twitter.png";
//   linkedinIconBlack = "https://img.icons8.com/glyph-neue/50/000000/linkedin.png";
//   githubIconBlack = "https://img.icons8.com/glyph-neue/50/000000/github.png";

//   // yellow icons
//   facebookIconYellow = "https://img.icons8.com/glyph-neue/50/ffff00/facebook-new.png";
//   instagramIconYellow = "https://img.icons8.com/glyph-neue/50/ffff00/instagram-new.png";
//   twitterIconYellow = "https://img.icons8.com/glyph-neue/50/ffff00/twitter.png";
//   linkedinIconYellow = "https://img.icons8.com/glyph-neue/50/ffff00/linkedin.png";
//   githubIconYellow = "https://img.icons8.com/glyph-neue/50/ffff00/github.png";

// }

function disableEffect() {
  var x = window.matchMedia("(max-width:576");
  myFunction(x);
  if (x) {
    el.style.removeProperty("social-menu ul li a:hover");
  }
}
