drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    });
}