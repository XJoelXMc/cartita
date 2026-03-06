// LetterService.js
export class LetterService {
    constructor() {
        this.text = `Se que no sos de festejar estas fechas aun, pues todavía no cumplimos un año pero estamos próximos :), ya es otro mes mas juntos en esta carta quería agradecerte lo mucho que me has acompañado y apoyado, gracias por hacerme pasar buenos momentos aunque este tiempo no nos estamos viendo seguido quiero que sepas que cada momento a tu lado cada segundo lo disfruto como nunca, quizas puedo ser un poco cursi o muy cariñoso jajaja es que vos tienes la llave de mi corazon y yo ya estoy muy rendido a vos, se Tambien que nuestro tiempo lo disfrutamos al maximo, Tambien tenemos sueños propositos y aunque vos quieras hacerlas sola yo siempre estare para darte una mano un corazon una mirada una charla un abrazo una idea (aunque aveces es media tonta)  incluso la vida mia con el unico proposito de que vos te sientas contenta y feliz, con el proposito de que nuestro amor nunca se apague.
Muchas relaciones suelen apagarse por el simple hecho de que lo  "real"  al final no se termina de completar, lo nuestro va en contra de esa corriente somos dos personas que quieren que seamos el ultimo amor que nos pase eso nos relaciona hasta viejitos vos y yo de alguna manera siempre vamos a estar conectados.
Siempre quiero que seas la mujer mas especial de mi mundo, sueño con darte todo lo que algun dia sueñas, la boda de tus sueños, la felicidad que buscaste, la carrera que sueñas, la casa que sueñas, nuestros patos, nuestro iker, nuestro kiwi, nuestras vacas, nuestra casa en el campo, nuestro mono, nuestro camello, y nuestra felicidad de los dos.
Tambien se que ese corazon tan noble llego a cautivarme de una manera tan apasionada que ahora no creo que haya otro igual, por eso es que quiero que seas el amor de mi vida como lo dices en tu carta  un "PARA SIEMPRE" se escucha algo descabellado a esta edad pero se que nosotros queremos ese "PARA SIEMPRE" que se nos haga realidad y yo anhelo de corazon ser el hombre de tu PARA SIEMPRE para asi tener a mi amor y que lo nuestro se SIEMBRE.
 
TE AMO CON TODO MI CORAZON
ATENTAMENTE JOEL GUERRERO CHAVARRIA
PARA LA UNICA MUJER QUE ME HIZO SENTIR Y CREER QUE LO VERDADERO SI EXISTE : YESSICA VICTORIA VACAFLOR NIETO`;
        
        // 1. Instanciar el objeto Audio apuntando a tu ruta
        this.audio = new Audio('./sonidos/teclado.mp3');
        // 2. Activar el bucle para que el sonido de 5s se repita infinitamente
        this.audio.loop = true; 
    }

    async typeLetter(element) {
        let i = 0;
        const speed = 20;

        // 3. Reproducir el audio al comenzar a escribir
        // Usamos catch por si el navegador bloquea el autoplay, aunque
        // al venir de un "click" previo (en el EnvelopeController), no debería haber problema.
        this.audio.play().catch(err => console.error("Error al reproducir el sonido:", err));

        const write = () => {
            if (i < this.text.length) {
                element.innerHTML += this.text.charAt(i);
                i++;
                setTimeout(write, speed);
            } else {
                // 4. Detener el audio cuando el texto termina
                this.audio.pause();
                this.audio.currentTime = 0; // Reiniciar el audio al principio por si se vuelve a abrir
            }
        };
        write();
    }
}