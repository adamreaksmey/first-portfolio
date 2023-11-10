var isMouseHover = false;

// not hovering
let reveal_list = ["reveal_me-1", "reveal_me-2", "reveal_me-3"];

let fs_list = ["fs-1", "fs-2", "fs-3"];
var lang_names = document.getElementById("lang-names");
var lang = document.getElementsByClassName("programming-lang")[0];
var p_cover = document.getElementsByClassName("prog-cover")[0];
var bg = document.getElementsByClassName("bg")[0];
// lang_names.classList.toggle('translated')

for (let i = 0; i < reveal_list.length; i++) {
  var element = document.getElementById(fs_list[i]);
  element.addEventListener("mouseleave", function (event) {
    console.log("left");
    let reveal = document.getElementById(reveal_list[i]);
    isMouseHover = false;
    lang_names.style.transform = "translate(-33.77vw, 27vw)";
    lang.style.transform = "translate(-33.77vw, 23vw)";
    setTimeout(function () {
      p_cover.style.transform = "translate(-56vw, 51vw)";
      p_cover.style.height = "13vw";
    });
    try {
      reveal.style.display = "none";
    } catch (err) {}
  });

  element.addEventListener("mouseover", function (event) {
    let reveal = document.getElementById(reveal_list[i]);
    isMouseHover = true;
    try {
      reveal.style.display = "block";
    } catch (err) {}
  });

  element.addEventListener("mouseenter", function (event) {
    lang_names.style.transform = "translate(-53.3vw, 14vw)";
    lang.style.transform = "translate(-42.77vw, 23vw)";
    // bg.style.height = '68.4vw'
    p_cover.style.display = "block";
    p_cover.style.transform = "translate(-56vw, 22vw)";
    p_cover.style.height = "22vw";
  });
}
