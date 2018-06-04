# Cifrado César

## Preámbulo

Está próxima la fecha del cumpleaños de tu flacx (novix) y estás organizando una
fiesta sorpresa. Para organizar la fiesta has creado un grupo de Whatsapp junto
con amigos y familiares.

Un gran problema es que pones tu alarma para levantarte temprano, sin embargo
(como supondrás) eso nunca sucede y tu flacx es quien termina apagando la alarma
y "de casualidad" revisando tus mensajes. Debido a que es algo sorpresa, decides
crear una aplicación que te permita enviar mensajes cifrados y que las demás
personas (partícipes de la fiesta) puedan tener una interfaz para
descifrarlo. Así que ahora te toca aplicar tus superpoderes 😎

## Introducción

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los
primeros métodos de cifrado conocidos históricamente. Es un tipo de cifrado por
sustitución en el que una letra en el texto original es reemplazada por otra
letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El emperador Julio César lo usaba para enviar órdenes a sus generales en los
campos de batalla, es una de las técnicas más simples y más usadas para cifrar
un mensaje.

Por ejemplo si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Actualmente todos los cifrados de sustitución alfabética simple, se descifran
con facilidad y en la práctica no ofrece mucha seguridad en la comunicación,
pero el cifrado César muchas veces puede formar parte de sistemas más complejos
de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el
sistema ROT13.

### Definición del producto

El análisis del proyecto se realizó en el grupo CODEBREAKERS, para resolver el reto organizamos las actividades del plan y conocer nuestro entorno de trabajo.

![Planing1](http://subirimagen.me/uploads/20180604021823.27)

![Planing2](http://subirimagen.me/uploads/20180604022415.27)

![Planing3](http://subirimagen.me/uploads/20180604022518.27)


Para definir el producto:

¿Qué es? Es una aplicación construida bajo la lógica del cifrado César para cifrar y descifrar mensajes.

¿Como funciona? La persona ingresa un número clave (número de espacios por desplazar) que previamente se asigna por convención en el grupo que va utilizarlo, posteriormente ingresa el mensaje y elige un botón (según sea el caso): Ocultar o Descifrar el mensaje. Finalmente recibirá el mensaje para que pueda copiarlo y enviarlo por medio de whatsapp.

¿Para qué? Se creó por necesidad de organizar una fiesta sorpresa y que la persona agasajada no se entere de los preparativos.

* ¿Quiénes son los principales usuarios de producto?: Los invitados de la fiesta y el organizador.

* ¿Cuáles son los objetivos de estos usuarios en relación con el producto? Facilidad, Seguridad y de manejo amigable y responsive para que puedan utilizarlo desde su celular.

* ¿Cómo crees que el producto que estás creando les está resolviendo sus problemas?: Con la aplicación van a tener protegidos los mensajes será el único medio para descubrir los mensajes.

### UI

La interfaz permite al usuario:

* elegir un `offset` indicando cuántas posiciones queremos que el cifrado desplace cada caracter
* insertar un mensaje (texto) que queremos cifrar
* ver el resultado del mensaje cifrado
* insertar un mensaje (texto) a descifrar
* ver el resultado del mensaje descifrado

[![PresentaciónUI](http://subirimagen.me/uploads/20180604023607.png)]

[![PresentaciónUI-Repsonsive](http://subirimagen.me/uploads/20180604023727.png)]



## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages.


## Tips / Pistas

A continuación se detalla los recursos muy útiles para 
resolver este proyecto. 

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

También te compartimos más información de lo que Michelle te ha explicado en el
video anterior:

* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

