---
title: Variables de entorno en Ract Native
date: '2020-03-21T23:46:37.121Z'
path: variables-entorno-react-native
thumbnail: assets/turned-on-grey-table-lamp-1643280.jpg
---

# Variables de entorno en React Native (Android)

Hola! que tal?,me puse a escribir este pequeño post sobre algo que aprendí que son muy utiles, las configuraciones de las variables para distintos entornos en React Native.

Voy a escribir todo en español teniendo en cuenta el poco material que hay para paises hablahispana .

### **Que son las variables de entorno (env vars)?**

De donde sale escribir esto de las variables de entorno?, un poco del hartazgo de tener que estar comentado lineas de código según si mi entorno era de desarrollo o de producción, y de conocer a unos pibes que me explicaron como venia la mano con esa cuestión.

Definamos algo: a veces manejamos variables que en producción tienen un valor y para desarrollo tienen otro valor completamente distinto. A estas variables las vamos a llamar variables de entorno (o env vars, para ahorrar tipeo)

Seguramente te topas con cosas como estas en tu código, o en código de otros:

```js
//Url para desarrollo, COMENTAR la siguiente linea en produccion
const URL_BASE: "localhost:3000"

//Url para produccion, DESCOMENTAR la siguiente linea en produccion
//const URL_BASE: 'https://myawesomeapi.com/api/

const miFuncion = () => {
  fetch(URL_BASE)
  .then(<--algo-->)
  .catch(<--algo-->)
}
```

Y no solo son esas lineas, sino que seguro tenes muchas variables mas comentadas por todo lo largo y ancho del codigo.

Entonces, que pasa con esto?, al crecer la aplicación se te va a complicar mucho poder manejar todas esas variables, y lo que va a pasar no te va a gustar nada, porque si se te ocurre salir a producción y olvidarte alguna de estas con el valor de desarrollo, lo mas probable es que tu app se rompa (Pum!) o que los usuarios vean cosas que no tienen/deberían que ver, como por ej aca que se olvidaron de que estaba en un entorno de desarrollo:
[**"Mi vieja mula ya no es lo que era": el error de Santander Río que desconcertó a los clientes**
*Plataforma digital local enfocada al género periodístico de mayor impacto: la conversación. Servicios e información…*elcanciller.com](https://elcanciller.com/nota/5609)

Aquí es donde tenemos buscar otra manera de poder manejar esas variables incomodas que pueden tener distintos valores en los distintos entornos. Para esto, nosotros vamos a usar un package muy fácil de implementar que es react-native-config:
[**luggit/react-native-config**
*Bring some 12 factor love to your mobile apps! Contribute to luggit/react-native-config development by creating an…*github.com](https://github.com/luggit/react-native-config)

Usamos este package porque ademas de ser facil de implementar, soporta las suggest de [https://12factor.net/config,](https://12factor.net/config) 12factor es una metodología para escribir y construir apps que, en resumidas cuentas, sean escalables ademas de otros aspectos.
[**The Twelve-Factor App**
*A methodology for building modern, scalable, maintainable software-as-a-service apps.*12factor.net](https://12factor.net/)

Voy hacer el setting para un proyecto creado con **react-native init** usando

> npx react-native-init

tomando el caso de Android. Para una versión ios y otras versiones de RN pueden visitar el repo donde están las instrucciones para esto.

Yo asumo que a esta altura ya estas con tu proyecto de react native creado asi que empecemos!

Primero agreguemos el package, puede ser con npm o yarn

> yarn add react-native-config

si estas usando una version de RN 0.60 0 mayor el unico paso extra que tenes que hacer es agregar la siguiente linea al archivo android/app/build.gradle

`apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"`

Y listo, estas preparado para usar tus env vars.. Ahora si tu version de RN es <0.60 vas a hacer los siguiente pasos: Primero linkear el modulo a RN

> react-native link react-native-config

luego manualmente, hay que agregar la siguiente linea en el archivo *android/app/build.gradle (en la 2° linea del archivo)*

`apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"`

Perfecto, hasta ahora nada fuera de lo normal. Tengo que decirte que con la version 0.56 me ocurrió un pequeño problema relacionado a la versión del SDK de Android. La solución la voy a dejar al ultimo, hagamos todos los pasos y si tira ese error ya sabes que tenes que ir hasta el ultimo.

Paso siguiente, en la raíz del proyecto, vamos a crear (en mi caso) los archivos .env.developmenty .env.production y vamos a colocar en ellos todas nuestras variables de entorno. Vas a crear un archivo por cada entorno que tengas, en tu caso podes tener distintos entornos *dev/stagging/prod* o *dev/test/qa/prod,* pero si o si tu archivo debe empezar con .env. .
> Mi recomendación es que a estos archivos no se los suba al repo que estés usando (git, bitbucket, etc), es decir que tendrías que agregarlos a tu .gitignore , al menos al .env.production ya que quiza tenga información sensible. Lo que se suele hacer es tener un archivo .env.template donde tenes todos los nombres de tus variables pero sin valores, y luego cada persona que se baje el proyecto le coloca sus propios valores.

Mi archivo .env.development quedaría, por ejemplo, de la siguiente forma:

```js
URL_BASE=localhost:3001

API_KEY_MAPS=1234567890

API_KEY_FACEBOOK=QWERTYUIOP
```

y el .env.production

```js
URL_BASE=https://myawesomeapi.com/api

API_KEY_MAPS=yuwy17y2u32y78hye827yey8328ye23ye92y3e

API_KEY_FACEBOOK=838838he8e38h38e3hehh8e8
```

Listo!, tenemos definidos los valores de nuestras variables para los distintos entornos. Podemos empezar a utilizarlas en nuestro código, ej:

```js
import Config from 'react-native-config'

const miFuncion = () => {
    fetch(Config.URL_BASE, {
        body: {
            maps_key: Config.API_KEY_MAPS, 
            fb_key: Config.API_KEY_FACEBOOK 
        }
    })
    .then(<--algo-->)
    .catch(<--algo-->)
}
```

que tal?, un poco mejor no?. Ahora para testear los dos entornos podes hacer lo siguiente para probar DEV y/o PROD respectivamente. El segundo comando te permite probar la version que sera para los usuarios.
> ENVFILE=.env.development npm run android

> ENVFILE=.env.production npm run android --variant=release

y al correrlo vas a ver como cambia el valor de tus variables según vos quieras, copado no?, esto que parece básico, mucho no lo hacen, complicando mucho la escalabilidad de la aplicación y la lectura de código. Por favor comenzá a implementarlo :).

Ahora, para cerrar, si te sale el siguiente error al querer correr tu proyecto:

    * What went wrong:
    
        A problem occurred configuring project ':app'.
    
        > Could not resolve all dependencies for configuration ':app:_debugApk'.
    
           > A problem occurred configuring project ':react-native-keychain'.
    
              > The SDK Build Tools revision (23.0.1) is too low for project ':react-native-keychain'. Minimum required is 25.0.0

Tenes que agregar estas lineas al final de tu archivo *android/build.gradle*

```js
subprojects { subproject ->
    afterEvaluate {
        if ((subproject.plugins.hasPlugin('android') || subproject.plugins.hasPlugin('android-library'))) {
            android {
                compileSdkVersion rootProject.ext.compileSdkVersion
                buildToolsVersion rootProject.ext.buildToolsVersion
            }
        }
    }
}
```

Si esto no te funciona, dejo el issue donde hay otras soluciones, esta en particular me funciono
[**Not working with 0.56.0 · Issue #267 · luggit/react-native-config**
*The SDK Build Tools revision (23.0.1) is too low for project ':react-native-config'. Minimum required is 25.0.0*github.com](https://github.com/luggit/react-native-config/issues/267)

Bueno, esto es todo gente!, espero les sirva, cualquier feedback que tengas viene bien!.
