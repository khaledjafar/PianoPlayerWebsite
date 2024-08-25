var numberOfButtons = document.querySelectorAll(".btn").length;

for(var i =0;i<numberOfButtons;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){

        var buttonHTML = this.innerHTML;

        makeSound(buttonHTML);
        makeAnimation(buttonHTML);
    })
}

// event listener for the keyboard
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(ButtonPressed){
   switch (ButtonPressed) {
    case "a":
        var key1 = new Audio("Sounds/key01.mp3");
        key1.play();
        break;
        case "s":
            var key2 = new Audio("Sounds/key02.mp3");
            key2.play();
            break;
            case "d":
                var key3 = new Audio("Sounds/key03.mp3");
                key3.play();
                break;
                case "f":
                    var key4 = new Audio("Sounds/key04.mp3");
                    key4.play();
                    break;
                    case "g":
                        var key5 = new Audio("Sounds/key05.mp3");
                        key5.play();
                        break;
                        case "h":
                            var key6 = new Audio("Sounds/key06.mp3");
                            key6.play();
                            break;
                            case "j":
                                var key7 = new Audio("Sounds/key07.mp3");
                                key7.play();
                                break;
                                case "k":
                                    var key8 = new Audio("Sounds/key08.mp3");
                                    key8.play();
                                    break;
                                    case "l":
                                        var key9 = new Audio("Sounds/key09.mp3");
                                        key9.play();
                                        break;
                                        case "p":
                                            var key10 = new Audio("Sounds/key10.mp3");
                                            key10.play();
                                            break;
                                            case "e":
                                                var key11 = new Audio("Sounds/key11.mp3");
                                                key11.play();
                                                break;
                                                case "r":
                                                    var key12 = new Audio("Sounds/key12.mp3");
                                                    key12.play();
                                                    break;
                                                    case "t":
                                                        var key13 = new Audio("Sounds/key13.mp3");
                                                        key13.play();
                                                        break;
                                                        case "u":
                                                            var key14 = new Audio("Sounds/key14.mp3");
                                                            key14.play();
                                                            break;
                                                            case "i":
                                                                var key15 = new Audio("Sounds/key15.mp3");
                                                                key15.play();
                                                                break;
                                                                case "o":
                                                                    var key16 = new Audio("Sounds/key16.mp3");
                                                                    key16.play();
                                                                    break;

   
    default:
        console.log(buttonHTML);
        break;
   }
}

function makeAnimation(ButtonPressed){
    var keypressed = document.querySelector("."+ButtonPressed);
   switch (ButtonPressed) {
    case "e":
        keypressed.classList.add("black_pressed");
                            setTimeout(function(){
                                keypressed.classList.remove("black_pressed");
                            }, 100);
    break;
        case "r":
            keypressed.classList.add("black_pressed");
                            setTimeout(function(){
                                keypressed.classList.remove("black_pressed");
                            }, 100);
        break;
            case "t":
                keypressed.classList.add("black_pressed");
                            setTimeout(function(){
                                keypressed.classList.remove("black_pressed");
                            }, 100);
            break;
                case "u":
                    keypressed.classList.add("black_pressed");
                            setTimeout(function(){
                                keypressed.classList.remove("black_pressed");
                            }, 100);
                break;
                    case "i":
                        keypressed.classList.add("black_pressed");
                            setTimeout(function(){
                                keypressed.classList.remove("black_pressed");
                            }, 100);
                    break;
                        case "o":
                            keypressed.classList.add("black_pressed");
                            setTimeout(function(){
                                keypressed.classList.remove("black_pressed");
                            }, 100);
                        break;
    default:
        keypressed.classList.add("white_pressed");
        setTimeout(function(){
            keypressed.classList.remove("white_pressed");
        }, 100);
        break;
   }
}