
dark = false
collapse = false
document.getElementById("dm_but").addEventListener("click", function contactClickhandler(el) {
  if (dark) {
    document.getElementById("body").className = ""
  } else {
    document.getElementById("body").className = "dark"
  }
  dark = !dark
});

document.getElementById("c_but").addEventListener("click", function contactClickhandler(el) {
  cards = document.getElementsByClassName("card")

  display = collapse ? "block" : "none"

  for (card of cards) {
    card.style.display = display
  }

  collapse = !collapse
});

// document.getElementById("video").addEventListener("play", function contactClickhandler(el) {
//   console.log("llo")
//   document.getElementById("video").style.display = "auto";
//   document.getElementById("spinner").style.display = "none";
// });

