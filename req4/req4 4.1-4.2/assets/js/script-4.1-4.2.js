//  REQ-4.1 Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y
//  amarillo (insertar estilos con atributo style). Cada uno de los divs debe tener
//  un identificador único.

/* --- RESPUESTA 4.1 ---*/
//  Los 4 divs fueron creados en el html 4_colores con sus respectivos styles



//  REQ-4.2 Dentro del script agrega el evento para que al hacer click a cada uno de los
//  divs, este cambie de color al color negro. Utiliza addEventListener para
//  agregar el evento.

/* --- RESPUESTA 4.2 ---*/
const azul = document.getElementById('azul');
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');

function cambiarColor(event) {
    event.target.style.backgroundColor = 'black';
}

azul.addEventListener('click', cambiarColor);
rojo.addEventListener('click', cambiarColor);
verde.addEventListener('click', cambiarColor);
amarillo.addEventListener('click', cambiarColor);