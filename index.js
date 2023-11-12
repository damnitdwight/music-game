var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    
    switch (key) {
        case "1":
            var audio = new Audio("sounds/Amazon-prime.mp3");
            audio.play();
        break;
    
        case "2":
            var audio = new Audio("sounds/Apple.mp3");
            audio.play();
        break;

        case "3":
            var audio = new Audio("sounds/hbo.mp3");
            audio.play();
        break;

        case "4":
            var audio = new Audio("sounds/LG.mp3");
            audio.play();
        break;

        case "5":
            var audio = new Audio("sounds/MCD.mp3");
            audio.play();
        break;

        case "6":
            var audio = new Audio("sounds/netflix.mp3");
            audio.play();
        break;

        case "7":
            var audio = new Audio("sounds/windows.mp3");
            audio.play();
        break;

        default: console.log(buttonInnerHTML);

    }
    
}

function buttonAnimation(currentKey) {
 
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
}