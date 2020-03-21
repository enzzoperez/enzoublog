---
title: Consejos antes del codding de una app mobile Parte 1
date: "2020-03-20T23:46:37.121Z"
---

Buenas! En este post vengo a traer algunas cositas que creo se deberían tener en cuenta antes de comenzar a desarrollar (codificar) apps móviles.

Porque este post?, porque vengo desarrollando apps hace ya casi 2 años, siempre para startups, por lo que aprendí y vi algunas (bastante) cosas y las quiero compartir acá para que al hacer una app vayan teniendo una idea antes de empezar.

Voy a tratar de ser lo más claro y conciso ya que son varias cosas, voy a tratar de dar algunos conceptos, como resolveria el problema y mencionare algunas herramientas que se podrían utilizar (si es que conozco y/o utilizo), y tratando de ser lo menos técnico posible (sacando la parte de las herramientas) llevando un lenguaje más informatico-tumbero (cuak).

Vamos a separar los ítems en distintas categorías, donde el orden en que aparecen en el post no tiene que ver con la importancia de cada uno, pero estamos en democracia (? y podemos debatir si alguna es más importante de que la otra, eso estaria bueno.

Si bien todos sabemos que primero va el análisis, recopilación de datos, etc, etc. , eso me pareció obvio, recalco que en este post pongo cosas que me parecen fundamentales y que (en mi caso, cuando me toco laburar con equipos) muchas veces/nunca se hacen.

![Photo by [Rami Al-zayat](https://unsplash.com/@rami_alzayat?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/10368/0*iX-TcKlJLmaJc3Ab)*Photo by [Rami Al-zayat](https://unsplash.com/@rami_alzayat?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

***DISEÑO***

**Tener un diseño definido de la app**

En esta parte entran en juego los diseñadores gráficos con toda su creatividad. Es MUY importante que el diseño de la app sea aprobado primeramente por el cliente, y en alguna medida, guiarlo (al cliente) con la Experiencia de Usuario (UX), así que si hay un diseñador de UX en el equipo muchisimo mejor, aunque no siempre se tiene esa posibilidad. Ahora, que pasa acá?, a veces me pasaron diseños que si bien podían ser lindos con buena combinación de colores y re facheros, había partes donde la UX era pobre. Entonces, una vez que el cliente tiene la app en su dispositivo (disp) se está preguntando que joraca hace este botón, o donde me lleva esta pestaña o en qué estado está la carga de los archivos?.

En esta parte del diseño me gusta que al menos esté presente un desarrollador (de) que pueda decir “mira, con ese diseño, ese botón no parecería tener la funcionalidad que aparenta”, y digo un dev porque es el que le da la funcionalidad a las cosas y es el primero que testea la app dándose cuenta que algo no cuadra.

**Tener definida una ruta:**

Este para mi es uno de los puntos más importantes y que va a ahorrar mucho tiempo a la hora de empezar a desarrollar, porque? porque una vez que tenemos definida la ruta que va a seguir la app tenemos una visión general del funcionamiento y nuestro dev va a poder sacar, con ese esquema de ruteo, las diferentes cosas que deben pasar entre una pantalla y otra o bien si a esas cosas puede almacenarla en algún lugar para tenerla disponible en toda la app.

Un ejemplo es lo que hace Uber que lo muestra en este tuit:

[https://twitter.com/UberEng/status/1133765737175224321](https://twitter.com/UberEng/status/1133765737175224321)

algo tan simple como un grafico hecho con [https://www.draw.io](https://www.draw.io) permite esto, tener una vision general de como es el flujo de la app, lo cual va a ser util tambien para el cliente

**Casos de uso (CU)**

Los casos de uso son algo tambien de lo mas importante a mi parecer y en ningún proyecto donde estuve se hicieron. Estos CU se refieren a describir qué es lo que puede pasar cuando el usuario esté usando la app y como (la app) debería reaccionar a determinadas acciones. Deberían hacerse en conjunto con el cliente ya que es él quien más conoce el proceso que está queriendo automatizar y que es lo que sucede en cada paso de ese proceso.

Si bien no me parece necesario hacer CU de tooodas las operaciones que se realizan, deberían hacerse al menos de las operaciones más críticas, importantes y/o de las operaciones que pueden llegar a ser más confusas.

Estos casos de uso pueden definirse tanto en texto como con gráficos, cualquiera de las dos me parecen bien.

Un ejemplo trivial puede ser: Se tiene un filtro de precios con un **Minimo — Maximo , **es obvio que el filtro va a buscar precios en ese rango, pero el caso de uso que se debería realizar es por ejemplo qué pasaría si el user busca con un Min y Max que tienen los mismos valores?. O bien, a que pantalla me dirigiría después de haber elegido en pantallas anteriores determinadas opciones.

En resumidas palabras, se deben describir todos los caminos posibles que puede seguir el usuario en la app.

**Responsividad de la app:**

Aunque no lo crean es algo que verdaderamente se tiene que tener en cuenta antes de empezar el desarrollo. Una porque ayuda al equipo a definir mejor el presupuesto, con los diseños aprobados con el cliente; y lo que me pasa a mi, me ayuda a darme una idea de como voy a tener que ir maquetando, definiendo estilos y desde un primer momento ver que tal van quedando las fuentes, layouts e imágenes en distintas medidas de dispositivos.

Es un punto que en mi caso ayudo a no tener que estar a medio proyecto, esperando a que el cliente apruebe (otra vez) un diseño propuesto para tablets por ejemplo.

***EXPERIENCIA DE USUARIO (UX)***

En esta parte no voy a nombrar herramientas porque no son cosas tan técnicas, sino me parece que más de sentido común y darle comodidad al usuario cuando utilice nuestra app.

**Permisos de user**

Lo que se refiere a los permisos que nos da el usuario lo puse en la parte de UX porque tiene que ver con eso mismo, darle a conocer al usuario que vamos a realizar una operación que puede no ser de su agrado. Por ejemplo: una vez me pasaron para hacer una app que apenas ingresaban (haces el loggin) la app comenzaba a guardar datos en una DB y a realizar la descarga de entre 65–80 mb de imágenes dependiendo cuantas tenga cargada el servidor. Si bien no digo que esta mal, no me parece la mejor forma de manejarse con los usuarios, al menos deberías avisarles que le vas a ocupar más de 75mb de su teléfono. Una solución rápida podría ser que haya una sección “Descargas” donde puedas descargar toda esa info, y si nos ponemos más detallistas, tendría que poder elegir qué es lo que quiere descargar, solo datos, solo imágenes, ambos?.

**Mensajes de estado**

Los mensajes sobre en qué estado se encuentra nuestra aplicación son de gran importancia, una porque le quita al usuario (en parte) esa ansiedad de querer todo yayaya en caso de que haya que esperar, entonces, si ocurre un error, si las imagenes estan cargando, si faltan algunos datos, etc., hay que estar constantemente avisando al usuario que es lo que está pasando y así generar una confianza en que se está trabajando para brindarle los mejores resultados.

Con un loader y un pequeño mensaje ya es suficiente, o bien un gif de un Macri trabajando (Si es que ese gif existe en alguna parte del universo).

**Manejo de errores**

El manejo de errores está entre los puntos porque son como los planes de contingencias que tienen las empresas ante cualquier evento desfavorable, o una rutina en caso de incendio que se tiene en cualquier institución, obviamente en menor medida ja. Definir cómo manejaremos los errores nos simplifican muchos dolores de cabeza cuando ocurran eventos inesperados o que no dependen de nosotros y que pueden desembocar en errores fatales para la app si es que no sabemos manejarlos.

Esta parte siempre deberíamos hablar con el cliente para que, si en algún momento llega a pasarle, sepa que está bien que se haga determinada acción en caso de falla.

Los errores a los cuales quizá mayor atención le prestaria es cuando tenemos features que requieren de conexión a internet. Qué es lo que vamos a hacer cuando no tengamos conexión?, vamos a avisar al usuario que hasta que no se conecte no puede usar la app o ese feature? guardar algunos datos en caché y usarlos cuando no haya conexión? no vamos a hacer nada y dejar al usuario esperando? esas son las preguntas que, por ejemplo en este caso, deberían resolverse.

Hasta aquí llegamos a la primera parte, más que nada para hacer los post un poco más amenos y no que sea todo de una sola vez. Nos vemos en [la parte 2](https://medium.com/@enzzorp/consejos-antes-del-codding-de-una-app-mobile-parte-2-71b66e2dabd?postPublishedType=repub).
