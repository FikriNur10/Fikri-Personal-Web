import Scrollbar from "smooth-scrollbar";

Scrollbar.init(document.querySelector("#my-scrollbar"), options);
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#my-scrollbar"]', {
  speed: 700,
  speedAsDuration: true,
});
