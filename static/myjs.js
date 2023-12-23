//  
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-header").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  } else {
    document.getElementById("main-header").style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
  prevScrollpos = currentScrollPos;
};
