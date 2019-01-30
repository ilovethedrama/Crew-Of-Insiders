window.onscroll = function() {
    scrollDatBack()
};

function scrollDatBack() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("brandLogo").style.fontSize = "4rem";
    document.getElementById("nav").style.backgroundColor = "#90AC9A";
    document.getElementById("nav").style.borderBottom = "2px solid pink";
  } else {
    document.getElementById("brandLogo").style.fontSize = "4.5rem";
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.getElementById("nav").style.borderBottom = "none";
  }
}