import { LetterService } from "./LetterService.js";

class EnvelopeController {

constructor(){

this.envelope = document.getElementById("envelope");
this.letterBox = document.getElementById("letter");
this.letterService = new LetterService();

this.images = document.querySelectorAll(".carousel img");
this.currentIndex = 0;

this.init();

}

init(){

this.envelope.addEventListener("click", () => this.open());

}

open(){

if(!this.envelope.classList.contains("open")){

this.envelope.classList.add("open");

this.letterService.typeLetter(this.letterBox);

this.startCarousel(); // inicia el carrusel

}

}

startCarousel(){

setInterval(() => {

this.images[this.currentIndex].classList.remove("active");

this.currentIndex++;

if(this.currentIndex >= this.images.length){
this.currentIndex = 0;
}

this.images[this.currentIndex].classList.add("active");

},1000);

}

}

new EnvelopeController();