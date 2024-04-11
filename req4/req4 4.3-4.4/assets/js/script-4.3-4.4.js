//  REQ-4.3 Crea una página junto a un script que guarde dentro de una variable global
//  un color dependiendo de la letra del teclado presionada. (2 Puntos).
//  ○ La letra a guardará el color rosado.
//  ○ La letra s guardará el color naranjo.
//  ○ La letra d guardará el color celeste.
//  ○ Para guardar el color revisa el tip al final del enunciado.
//  ○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
//  color blanco y borde negro.
//  ○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
//  “key” a rosado, naranjo o celeste respectivamente.

//  REQ-4.4Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
//  deberá crear un div nuevo de las mismas dimensiones antes mencionadas
//  con los colores morado, gris y café respectivamente.


/* --- RESPUESTAS 4.3 y 4.4 ---*/

document.addEventListener('keydown', function (event) {
    let color;
    if (event.key === 'a') {
      color = 'pink';
    } else if (event.key === 's') {
      color = 'orange';
    } else if (event.key === 'd') {
      color = 'skyblue';
    }

    if (color) {
      document.getElementById('key').style.backgroundColor = color;
    } else if (event.key === 'q') {
      color = 'purple';
      createNewDiv(color);
    } else if (event.key === 'w') {
      color = 'gray';
      createNewDiv(color);
    } else if (event.key === 'e') {
      color = 'brown';
      createNewDiv(color);
    }
  });

  function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
  }