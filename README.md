# JuegoCartas
Esto es un juego de cartas, y es un trabajo final para Programacion distribuida y paralela

# Validaciones del juego
- La logica que se implemento es simple, no se validan escaleras, tanto para las ternas como para las cuartas, tienen que ser de el mismo numero diferente pinta.
 
- Aunque ya hayas completado la terna terna cuarta, se tiene que validar primero el turno del contrincante, y ya despues si ganas.

- Dejar cargar la pantalla la ruta "/Login" o "/" desde esta pantalla se hace el consumo a la api, y hay un timeOut de 3 segundos, no dar next a la loca, da el tiempo suficiente para poner los nombres de los jugadores o esperar los 3 segundos.

# Pasos para jugar

1. Entrar a la pantalla de login 
2. Poner los nombres de los jugadores, sino el te pone Player1 o Player2 por defecto
3. Presionar Start
4. Seleccionar Button Cards, este te mostrar la carta que te salio y el nombre del jugador en turno, aqui tienes dos opciones, oprecionas close para cerrar el modal y ir a la baraja del jugador y seleccionar la carta que quiere remplazar, o darle al button de pass, para no cambiar ninguna carta y pasar el turno al siguiente jugador.
5. Una vez logres la terna terna cuarta, no ganas en ese mismo instante, sino en el siguiente turnio, y te saca a una pantalla de ganadores.
6. Si cada jugador saca sus 51 cartas y no gano, automaticamente se declara empate.

