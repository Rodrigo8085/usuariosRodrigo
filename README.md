# UsuariosRodrigo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

![Screenshot](https://github.com/Rodrigo8085/usuariosRodrigo/blob/master/src/assets/img/screencapture-localhost-4200-2024-02-21-00_43_47%20(1).png)


![Screenshot](https://github.com/Rodrigo8085/usuariosRodrigo/blob/master/src/assets/img/screencapture-localhost-4200-2024-02-21-00_45_24.png)


1. Angular:
¿Qué es Angular y cuál es su propósito principal en el desarrollo web? Explica la diferencia entre AngularJS y Angular
* Es un framework de codigo abierto en typescript que lo mantiene google, su proposito es crear aplicaciones web single page y progresivas. La diferencia consiste en que el primero se basa en JavaScript y el segunto en typeScript.

¿Qué es un componente en Angular y cómo se crea uno? ¿Cuál es la diferencia entre ngOnInit() y constructor() en Angular?
*Es un consjunto de archivos(ts (lógica), html (vista), css(estilos), specs(pruebas)) que crean una instacia de clase. Con el cli:
ng g c [nombre del componente] [banderas]

*el OnInit es parte del ciclo de vida de un componente en angular y es primero que se ejecuta y el contructor de inicia antes de cualquier ciclo de vida para inicializar variables y propiedades del componente.


2. HTML5:
¿Cuáles son algunas de las nuevas características introducidas en HTML5? Describe la diferencia entre las etiquetas

y . ¿Qué son los atributos data- en HTML5 y para qué se utilizan?
* header: Define el encabezado de la página.
footer: Define el pie de página.
nav: Define la sección de navegación.
section: Define una sección de contenido.
article: Define un artículo independiente.
*Data se utilizan para almacenar datos personalizados en elementos HTM
3. CSS/Sass:
¿Qué es Sass y cuál es su ventaja sobre CSS convencional? Explica la diferencia entre @import y @use en Sass. ¿Qué es BEM y cómo puede mejorar la estructura y mantenimiento del código CSS?
*es un preprocesador de CSS que añade funcionalidades como variables, anidación, mixins y funciones a la escritura de estilos
*@import: se utiliza para importar archivos Sass en otro archivo Sass
@use:e utiliza para importar reglas de estilo de otro archivo Sass
*


4. JavaScript / TypeScript:
¿Cuál es la diferencia entre JavaScript y TypeScript? ¿Qué son los tipos en TypeScript y cómo pueden mejorar el desarrollo de aplicaciones web? Explica cómo se declara una variable en JavaScript y en TypeScript.
* la principal diferencia es el tipado de datos entre uno puede cambiar a lo largo del tiempo y en el otro se espera un tipo en especifico. La mejora en desarrollo consiste principalmente en el mejor estructura y mantenimiento de codigo e implementacion de modulos.

const uno = 1;
const dos: number = 2;

5. Sistema de Gestión de Paquetes (npm):
¿Qué es npm y cuál es su función en el desarrollo de aplicaciones web? Describe el proceso para instalar un paquete npm en un proyecto.
Es un administrador de dependencia del proyecto. Se debe considerar la version correcta a intalar 
npm i @angular/material@16

6. Integración e Implementación de APIs y WebSocket :
Explica qué es una API y cómo se utiliza en el desarrollo web. ¿Qué es JSON y cuál es su relación con las APIs REST? Describe el proceso para realizar una solicitud GET a una API REST utilizando JavaScript/TypeScript. Descripbe como integrarias un WebSocket
*Son eccesos a funciones especificadas para ver, editar, crear y eliminar datos. Es una representación estructurada de datos con valores nativos los de tipo rest es lo mas comun como respondes las apis. 

return this.http.get<Users[]>(endPoint);

*utilizar Socket libreria de socket.io-client
*declarar  socket: Socket;
*en el contructor instanciar  this.socket = io('localhost:3000');
*this.socket.on('connect', () => {
  console.log('Conectado al servidor WebSocket');
});

7. Patrón MVC:
Define el patrón de diseño Modelo-Vista-Controlador (MVC) y explica sus componentes. ¿Cuál es la ventaja de utilizar el patrón MVC en el desarrollo de aplicaciones web?
*Es un patrón de diseño arquitectónico que se utiliza para desarrollar aplicaciones con una separación clara entre la lógica de la aplicación, la presentación y la interacción
Modelo: Representa la lógica de la aplicación y el estado de los datos
Vista: Representa la presentación de la información al usuario
Controlador: Actúa como intermediario entre el modelo y la vista, procesando las entradas del usuario y actualizando la vista en función de los cambios en el modelo

Facilita el desarrollo y mantenimiento, reutilización de código y escalabilidad.

8. Desarrollo de Pruebas Unitarias e Integración (Jasmine y Karma):
¿Qué son las pruebas unitarias y por qué son importantes en el desarrollo de software? Explica la diferencia entre las pruebas unitarias y las pruebas de integración. Describe cómo se configura y ejecuta un conjunto de pruebas Jasmine utilizando Karma en un proyecto Angular.

*Las pruebas unitarias son un tipo de prueba de software que se utiliza para verificar el comportamiento de unidades individuales de código, como funciones, metodos o clases

* Pruebas unitarias se centran en unidades individuales de código. Pruebas de integración se centran en cómo interactúan las diferentes unidades de código entre sí

*karma start