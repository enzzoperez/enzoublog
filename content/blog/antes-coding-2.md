---
title: Consejos antes del codding de una app mobile Parte 2
date: '2020-03-20T23:46:37.121Z'
path: app-mobile-2
thumbnail: assets/coyote3.jpeg
---


Hola de Nuevo! Continuando con el [anterior post](https://medium.com/@enzzorp/consejos-antes-del-codding-de-una-app-mobile-parte-1-965ea873981), ahora vamos a ver algunos puntos un toquesin más técnicos ya que la vez pasada vimos cosas más de sentido común.

Como escribí anteriormente, los puntos que van a ver acá son los que para mi hay que tener muy en cuenta, pero que muchas veces o casi nunca pasa eso cuando se empieza con el proceso de desarrollar una app

***PERFORMANCE***

**Intentar entender los recursos que va a usar la app**

Una cosa que hay que entender es que el desarrollo mobile en parte no es lo mismo que un desarrollo web u otro; acá se tiene en cuenta recursos como ser la memoria, procesador, SO, etc., principalmente porque a veces estos te limitan con los módulos que vas a utilizar y no siempre se cuenta con un desarrollador que sea crack con la parte nativa como para hacer una feature para una versión de SO y la misma feature para otra version de SO. Lo que si es parecido a otros desarrollos es que si no sabes administrar esos recursos de forma correcta o si no se le advierte al usuario que determinada feature requiere ciertos recursos del dispositivo donde se va a instalar, terminará en un incendio y vos tratando de resolverlo a las apuradas seguramente.

Si bien deberíamos tratar de desarrollar para la mayor cantidad de dispositivos posibles, no siempre es posible hacerlo dependiendo de las features que se vayan a realizar. Por ejemplo: Para hacer un visor de imagenes 360 y que el usuario tenga la mejor experiencia, el dispositivo debe contar con Giroscopio y Acelerómetro, caso contrario estoy seguro de el usuario pensara que algo en la aplicación está mal, cuando en realidad es su dispositivo el que está “fallando”.

Esta parte se complica cuando tenemos que usar módulos o realizar features que jamás hicimos. No sabemos cómo pueden reaccionar los diferentes dispositivos a los diferentes procesos o módulos. Lo que deberíamos hacer es verificar muy bien la documentación del módulo que vayamos a utilizar para saber si tiene algunas restricciones ya sea en cuanto a hardware o sistema operativo.

Ahora, cuando se tiene un PROCESO, por ejemplo, la escritura de una gran cantidad de datos en una base de datos en el dispositivo, tenemos que planificar cómo podemos hacerlo de la mejor manera sin hacer que explote el hardware del dispositivo, si lo vamos a hacer todo junto, por partes, cada determinado tiempo, etc. (por nombrar algunas alternativas).

**Limitar la app a qué dispositivos va a estar disponible(versiones, recursos, sensores, etc)**

Esto es similar a lo anterior, solo que entra más en juego el cliente, en lo anterior somos nosotros los que tenemos que entender que es recursos vamos a necesitar y si hay alguno que nos limite, para despues darle esa info al cliente y que sepa entender que el feature que está pidiendo no es tan fácil como él piensa y darle alguna alternativa si es que quiere.

Si el cliente quiere si o si esa feature/app podríamos arreglar, dependiendo los deadlines que ponga, de limitar el lanzamiento dejando afuera a dispositivos que tengan versiones antiguas del sistema operativo o que no cuenten con algún sensor, o cierta cantidad de RAM; sobre el espacio en memoria el mismo SO nos ayuda a que no se instale la app si no hay demasiado espacio.

***TESTING***

**Definir testing**

Si bien existe una metodología para desarrollar los test antes de empezar a desarrollar (TDD), no vamos a meternos ahí ya que no nos referimos a escribir test con herramientas de testing, sino más bien a definirlos (hay diferencia entre definir e implementar).

Esta parte es parecida a los casos de uso, con la diferencia que acá tenemos que saber como es el camino correcto para llegar a determinado objetivo, y además definir si vamos a realizar tests y que herramientas de testing vamos a utilizar, si bien es recomendable hacerlos, el tiempo con los clientes no siempre lo permiten. En los CU, como dijimos en el anterior post, definimos todos los caminos posibles que puede realizar el user.

En mi caso que trabajo con React Native, jest y enzyme para test unitarios fue lo que probé y me gusto, bastante simple. Para tests de integración me recomendaron Detox, no lo use pero lo dejo como alternativa.

**Implementar un logger / debugger**

Esto es una de las cosas más importantes que hay que tener en cuenta. Los loggers te van a ayudar a identificar los problemas que están pasando en tu app.

Yo particularmente uso dos tipos de loger, uno local para cuando estoy desarrollando y uno remoto para cuando la app esta en produccion.

Como local uso Reactotron, es fácil de agregarlo a tu project y tiene una interfaz muy amigable.

El logger remoto me permite ver qué fue lo que fallo de la aplicación en los dispositivos de los users, dándote un stacktrace del error además de detalles del dispositivo. En mi caso uso crashlytics de Google, estuve viendo Sentry pero aun no lo implemente, seguro en el próximo proyecto lo hago.

Para cerrar esta pequeña serie de post, quiero referirme de forma breve a las versiones de la aplicación. No es necesario que el primer release de tu versión tenga las 5 mil funcionalidades que quiere el cliente, tranquilamente podes ir lanzando features de a poco, pero es cuestión de arreglarlo con el cliente.

Quiero también recalcar que escribí esto siempre basándome en mi experiencia y en lo que converse con otros devs tanto web devs como mobile devs, son puntos muy importantes, y cuanto más los puedan tener en cuenta antes de empezar a desarrollar, muchísimo mejor.

Sin otra pavada que hablar, cualquier feedback va a ser muy bienvenido :D .

Buena semana y good coding!
