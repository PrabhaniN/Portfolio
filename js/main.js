function respNavbar() {
  var x = document.getElementById("side_nav");
  if (x.className === "sideNav") {
    x.className += " responsive";
  } else {
    x.className = "sideNav";
  }
}

// Open SideNav 
function openNav() {
  document.getElementById("side_nav").style.width = "20%";
  document.getElementById("closebtn").style.zIndex = "1";
}

// Close SideNav
function closeNav() {
  document.getElementById("side_nav").style.width = "0";
  document.getElementById("openbtn").style.zIndex = "0";
}

// Hamberger menu
function menuAnimation(e) {
  e.classList.toggle("show");

  var elem = document.getElementById("side_nav"),
  rightVal = window.getComputedStyle(elem, null).getPropertyValue("right");

  if (rightVal == 0) {
    console.log("sex");
    elem.style.right = "-30%"
  } else {
    console.log("sexx");
    elem.style.right = "0"
  }
}

// var fullPageScroller = new fullpage('#fullpage', {
  // autoScrolling: true
// });