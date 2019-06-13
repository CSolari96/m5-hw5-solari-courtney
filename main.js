// Access boxes
var box = document.getElementsByClassName("box");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

// Create empty h2 for result message
var result = document.createElement("h2");

// Access main section to append result message
var main = document.querySelector("main");

// On each box, listen for the user's mouse to enter or leave the box
for (i = 0; i < box.length; i++) {
  // When the mouse enters the boxes, change all background colors
  box[i].addEventListener("mouseenter", function() {
    for (x = 0; x < box.length; x++) {
      box[x].style.backgroundColor = "#f7c1bb";
    }
  });

  // When the mouse leaves the boxes, revert all background colors to the original color
  box[i].addEventListener("mouseleave", function() {
    box[0].style.backgroundColor = "#f1eb16";
    box[1].style.backgroundColor = "#83ccb3";
    box[2].style.backgroundColor = "#add037";
  });
}

// Listen for the users to click on box1 and display result message
box1.addEventListener("click", function() {
  result.innerHTML = "Oooh - so close, but no cigar";
  main.appendChild(result);
});

// Listen for the users to click on box2 and display result message
box2.addEventListener("click", function() {
  result.innerHTML = "DING DING DING - We have a winner";
  main.appendChild(result);
});

// Listen for the users to click on box3 and display result message
box3.addEventListener("click", function() {
  result.innerHTML = "Oops, better luck next time";
  main.appendChild(result);
});