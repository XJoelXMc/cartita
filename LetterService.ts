export class LetterService {

text = `Se que no sos de festejar estas fechas aun, pues todavía no cumplimos un año pero estamos próximos :), ya es otro mes mas juntos en esta carta quería agradecerte lo mucho que me has acompañado y apoyado, gracias por hacerme pasar buenos momentos aunque este tiempo no nos estamos viendo seguido quiero que sepas que cada momento a tu lado cada segundo lo disfruto como nunca, quizas puedo ser un poco cursi o muy cariñoso jajaja es que vos tienes la llave de mi corazon y yo ya estoy muy rendido a vos.

Se Tambien que nuestro tiempo lo disfrutamos al maximo, Tambien tenemos sueños propositos y aunque vos quieras hacerlas sola yo siempre estare para darte una mano un corazon una mirada una charla un abrazo una idea incluso la vida mia con el unico proposito de que vos te sientas contenta y feliz.

Muchas relaciones suelen apagarse por el simple hecho de que lo real al final no se termina de completar, lo nuestro va en contra de esa corriente somos dos personas que quieren que seamos el ultimo amor que nos pase.

Siempre quiero que seas la mujer mas especial de mi mundo.

TE AMO CON TODO MI CORAZON
ATENTAMENTE JOEL GUERRERO CHAVARRIA`;

typingSound;

constructor(){

this.typingSound = new Audio("./sonidos/teclado.mp3");

/* volumen */
this.typingSound.volume = 0.4;

/* repetir sonido */
this.typingSound.loop = true;

}

typeLetter(element: HTMLElement){

let i = 0;
const speed = 120;

const write = () => {

if(i === 0){
/* iniciar sonido SOLO cuando empieza a escribir */
this.typingSound.play().catch(()=>{});
}

if(i < this.text.length){

element.innerHTML += this.text.charAt(i);

i++;

element.scrollTop = element.scrollHeight;

setTimeout(write, speed);

}else{

/* detener sonido cuando termina */
this.typingSound.pause();
this.typingSound.currentTime = 0;

}

};

write();

}

}