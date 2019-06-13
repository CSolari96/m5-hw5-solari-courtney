// Access boxes
var box = document.getElementsByClassName("box");

// On each box, listen for the user's mouse to enter or leave the box
for (i = 0; i < box.length; i++) {
  // When the mouse enters the boxes, change all background colors
  box[i].addEventListener("mouseenter", function() {
    for (x = 0; x < box.length; x++) {
      box[x].style.backgroundColor = "#c1c1c1";
    }
  });

  // When the mouse leaves the boxes, revert all background colors to the original color
  box[i].addEventListener("mouseleave", function() {
    box[0].style.backgroundColor = "#f1eb16";
    box[1].style.backgroundColor = "#83ccb3";
    box[2].style.backgroundColor = "#add037";
  });
}