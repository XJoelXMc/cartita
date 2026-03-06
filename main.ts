import { LetterService } from "./LetterService.js";

class EnvelopeController {

private envelope:HTMLElement;
private letterBox:HTMLElement;
private letterService:LetterService;

constructor(){

this.envelope = document.getElementById("envelope")!;
this.letterBox = document.getElementById("letter")!;
this.letterService = new LetterService();

this.init();

}

private init(){

this.envelope.addEventListener("click", () => this.open());

}

private open(){

if(!this.envelope.classList.contains("open")){

this.envelope.classList.add("open");

this.letterService.typeLetter(this.letterBox);

}

}

}

new EnvelopeController();