---
title: Imágenes SVGs en React Native
date: '2020-03-20T23:46:37.121Z'
path: svg-en-rn
thumbnail: ../../static/assets/denys-nevozhai-qpqd-w28adc-unsplash.jpg
---

Que tal gente?, hoy voy a escribir un poco sobre como trabajar imágenes SVGs en React Native. No es mucho lo que tengo para escribir, simplemente como usar package que funciona bastante bien, así que empecemos.

Los SVG (Scalable Vector Graphics) tienen la particularidad que no se deforman cuando se agrandan o cuando se achican. Eso tampoco quiere decir que en todos lados vayamos a poner SVG 😁, suelen complicarte la vida muchas veces, pero a diferencia de los JPG o PNG que son mapas de bits, los SVG están formados por etiquetas XML y se pueden escribir/editar con cualquier editor de texto y son útiles para mostrar logos, iconos y gráficos, para mostrar imágenes realistas es preferible hacerlo con imágenes JPG y/o PNG.

### **React Native SVG**

Este package es OSS y saca provecho de las etiquetas XML por las que están formados los SVG, y lo podemos usar de dos formas distintas, una es usando componentes llamados de igual forma que estas etiquetas y la otra es pasar el XML como un string a un Componente de este modulo. Vamos a ver las dos formas: **[react-native-community/react-native-svg](https://github.com/react-native-community/react-native-svg)**

Vamos a usar un ejemplo con un SVG para ver como deberíamos usarlo.

Como recomendación les diría que hagan un componente que contenga a esa imagen SVG para que después puedan utilizarlo sin tener que escribir todo el SVG nuevamente, como lo haremos en este post.

Vamos a utilizar este SVG

```js
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="2500"
  height="2500"
  viewBox="0 0 192.756 192.756"
>
  <g fill-rule="evenodd" clip-rule="evenodd">
    <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
    <path d="M140.582 8.504c-17.225 8.001-32.656 9.039-44.204 9.039-11.547 0-26.979-1.038-44.205-9.039L22.142 36.752c1.414 3.587 9.319 24.023 10.719 35.829l.995 9.364c1.314 12.95 3.115 30.684 6.137 39.297l.568 1.641c3.979 11.564 13.283 38.596 55.817 61.369 42.536-22.773 51.839-49.805 55.817-61.369l.57-1.645c3.02-8.609 4.82-26.343 6.135-39.297 0 0 .996-9.36.996-9.37 1.4-11.796 9.305-32.231 10.717-35.818L140.582 8.504z" />
    <path
      d="M140.258 10.466c-17.129 7.72-32.418 8.73-43.88 8.73-11.462 0-26.75-1.01-43.879-8.73L24.088 37.19c2.199 5.67 9.094 24.072 10.417 35.216l.995 9.372c1.307 12.866 3.096 30.489 6.055 38.922l.569 1.643c3.886 11.295 12.958 37.648 54.255 60.027 41.298-22.379 50.37-48.732 54.257-60.029l.57-1.65c2.955-8.424 4.744-26.048 6.053-38.924l.998-9.391c1.318-11.117 8.213-29.516 10.412-35.186l-28.411-26.724z"
      fill="#fff"
    />
    <path
      d="M136.619 69.122l21.486-34.245-19.104-17.899c-14.283 5.831-27.193 7.348-37.691 7.664l-9.217 14.737c12.167-1.225 35.596 4.342 44.526 29.743zM54.864 98.867l-9.548 15.488c2.662 10.816 9.708 32.303 32.152 49.469l23.603-37.695c-22.27 2.957-39.706-10.744-46.207-27.262z"
      fill="#cc2131"
    />
    <path d="M81.575 166.465c4.296 3.178 9.142 6.34 14.616 9.438 40.602-22.98 46.286-48.842 49.04-55.457 3.393-8.148 5.797-32.685 6.273-39.372 1.383-19.404 7.908-37.259 10.213-42.859L137.918 76.23c3.885 23.739-11.953 42.424-29.969 48.1l-26.374 42.135zM52.911 92.833a43.434 43.434 0 0 1-1.144-9.916c0-20.64 14.425-37.901 33.741-42.279l10-15.949c-11.184-.039-25.725-1.067-42.058-7.735L30.443 38.617s7.813 19.371 9.43 32.998l1.006 9.458c.772 7.606 1.794 17.669 3.144 25.981l8.888-14.221z" />
    <path
      d="M50.746 92.661a45.473 45.473 0 0 1-1.061-9.745c0-21.454 14.873-39.424 34.866-44.193l7.612-12.354c-10.438-.241-23.604-1.596-38.272-7.4L32.574 39.037s7.468 18.635 9.094 32.337l1.008 9.479c.619 6.105 1.403 13.815 2.382 20.893l5.688-9.085zM84.091 166.037a141.242 141.242 0 0 0 12.151 7.803c39.796-22.773 45.839-50.354 47.306-54.041 2.93-7.357 5.191-26.784 6.26-38.945.307-3.484 1.512-18.401 5.6-29.362L140.1 76.458c3.307 25.05-12.475 43.689-31.016 49.708l-24.993 39.871z"
      fill="#fff"
    />
    <path d="M133.428 76.639C133.066 62.134 115.74 50.1 115.74 50.1v65.621c2.859-1.549 6.504-5.033 6.504-5.033v-10.594c12.371-8.698 11.184-23.455 11.184-23.455zm-11.184 12.498V67.238c4.525 3.716 4.576 12.064 4.576 12.064-.394 7.008-4.576 9.835-4.576 9.835zM88.054 113.018c-13.505-3.283-23.536-15.449-23.536-29.965s10.03-26.684 23.536-29.966V45.3c-17.645 3.412-30.972 19.11-30.972 37.752 0 18.641 13.327 34.163 30.972 37.575v-7.609z" />
    <path d="M68.163 83.052c0 8.558 3.955 16.188 10.135 21.172v-9.448c-2.632-2.788-3.651-5.519-4.075-9.369h7.638V106.658a27.095 27.095 0 0 0 6.193 2.592V56.853c-11.471 3.194-19.891 13.71-19.891 26.199z" />
    <path
      d="M81.861 79.058V66.616a21.253 21.253 0 0 0-7.39 12.442h7.39z"
      fill="#fff"
    />
    <path d="M104.418 91.369s4.879-2.021 5.785-8.713c.906-6.691.906-14.569.906-14.778 0-.208-.326-11.06-.326-11.06s.418-11.006-8.643-11.981c-7.636-.822-9.899-.209-9.899-.209v76.785s4.4.309 6.561-.109V96.977s4.195 9.963 6.17 23.389c0 0 5.498-1.463 7.277-2.748.001-.001-1.743-13.747-7.831-26.249z" />
    <path
      d="M104.07 76.359c0 1.396.004 3.928-1.111 4.903-1.115.976-1.734 1.836-3.895 1.279V53.66s2.85.068 3.965 1.114.977 2.301 1.045 3.276c.071.974-.004 16.606-.004 18.309z"
      fill="#fff"
    />
  </g>
</svg>
```

Bien, tenemos nuestro SVG. Agreguemos el package a nuestro proyecto:

> npm i react-native-svg

y luego si estan usando una version de RN < 0.60 linkeamos el código nativo. Si usan la version 0.60 o mayor, RN hara este paso automaticamente por lo que podes saltarlo

> react-native link react-native-svg

Ahora vamos a crear nuestro componente logoRiver.js o como quieran llamarlo de acuerdo a la imagen que vayan a utilizar

```js
import React, { Component } from "react"
import { View, Text } from "react-native"

//Importamos los componentes del package
import Svg, { G, Path } from "react-native-svg"

export const LogoRiver = props => (
  <Svg width="2500" height="2500" viewBox="0 0 192.756 192.756">
    <G fill-rule="evenodd" clip-rule="evenodd">
      <Path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
      <Path d="M140.582 8.504c-17.225 8.001-32.656 9.039-44.204 9.039-11.547 0-26.979-1.038-44.205-9.039L22.142 36.752c1.414 3.587 9.319 24.023 10.719 35.829l.995 9.364c1.314 12.95 3.115 30.684 6.137 39.297l.568 1.641c3.979 11.564 13.283 38.596 55.817 61.369 42.536-22.773 51.839-49.805 55.817-61.369l.57-1.645c3.02-8.609 4.82-26.343 6.135-39.297 0 0 .996-9.36.996-9.37 1.4-11.796 9.305-32.231 10.717-35.818L140.582 8.504z" />
      <Path
        d="M140.258 10.466c-17.129 7.72-32.418 8.73-43.88 8.73-11.462 0-26.75-1.01-43.879-8.73L24.088 37.19c2.199 5.67 9.094 24.072 10.417 35.216l.995 9.372c1.307 12.866 3.096 30.489 6.055 38.922l.569 1.643c3.886 11.295 12.958 37.648 54.255 60.027 41.298-22.379 50.37-48.732 54.257-60.029l.57-1.65c2.955-8.424 4.744-26.048 6.053-38.924l.998-9.391c1.318-11.117 8.213-29.516 10.412-35.186l-28.411-26.724z"
        fill="#fff"
      />
      <Path
        d="M136.619 69.122l21.486-34.245-19.104-17.899c-14.283 5.831-27.193 7.348-37.691 7.664l-9.217 14.737c12.167-1.225 35.596 4.342 44.526 29.743zM54.864 98.867l-9.548 15.488c2.662 10.816 9.708 32.303 32.152 49.469l23.603-37.695c-22.27 2.957-39.706-10.744-46.207-27.262z"
        fill="#cc2131"
      />
      <Path d="M81.575 166.465c4.296 3.178 9.142 6.34 14.616 9.438 40.602-22.98 46.286-48.842 49.04-55.457 3.393-8.148 5.797-32.685 6.273-39.372 1.383-19.404 7.908-37.259 10.213-42.859L137.918 76.23c3.885 23.739-11.953 42.424-29.969 48.1l-26.374 42.135zM52.911 92.833a43.434 43.434 0 0 1-1.144-9.916c0-20.64 14.425-37.901 33.741-42.279l10-15.949c-11.184-.039-25.725-1.067-42.058-7.735L30.443 38.617s7.813 19.371 9.43 32.998l1.006 9.458c.772 7.606 1.794 17.669 3.144 25.981l8.888-14.221z" />
      <Path
        d="M50.746 92.661a45.473 45.473 0 0 1-1.061-9.745c0-21.454 14.873-39.424 34.866-44.193l7.612-12.354c-10.438-.241-23.604-1.596-38.272-7.4L32.574 39.037s7.468 18.635 9.094 32.337l1.008 9.479c.619 6.105 1.403 13.815 2.382 20.893l5.688-9.085zM84.091 166.037a141.242 141.242 0 0 0 12.151 7.803c39.796-22.773 45.839-50.354 47.306-54.041 2.93-7.357 5.191-26.784 6.26-38.945.307-3.484 1.512-18.401 5.6-29.362L140.1 76.458c3.307 25.05-12.475 43.689-31.016 49.708l-24.993 39.871z"
        fill="#fff"
      />
      <Path d="M133.428 76.639C133.066 62.134 115.74 50.1 115.74 50.1v65.621c2.859-1.549 6.504-5.033 6.504-5.033v-10.594c12.371-8.698 11.184-23.455 11.184-23.455zm-11.184 12.498V67.238c4.525 3.716 4.576 12.064 4.576 12.064-.394 7.008-4.576 9.835-4.576 9.835zM88.054 113.018c-13.505-3.283-23.536-15.449-23.536-29.965s10.03-26.684 23.536-29.966V45.3c-17.645 3.412-30.972 19.11-30.972 37.752 0 18.641 13.327 34.163 30.972 37.575v-7.609z" />
      <Path d="M68.163 83.052c0 8.558 3.955 16.188 10.135 21.172v-9.448c-2.632-2.788-3.651-5.519-4.075-9.369h7.638V106.658a27.095 27.095 0 0 0 6.193 2.592V56.853c-11.471 3.194-19.891 13.71-19.891 26.199z" />
      <Path
        d="M81.861 79.058V66.616a21.253 21.253 0 0 0-7.39 12.442h7.39z"
        fill="#fff"
      />
      <Path d="M104.418 91.369s4.879-2.021 5.785-8.713c.906-6.691.906-14.569.906-14.778 0-.208-.326-11.06-.326-11.06s.418-11.006-8.643-11.981c-7.636-.822-9.899-.209-9.899-.209v76.785s4.4.309 6.561-.109V96.977s4.195 9.963 6.17 23.389c0 0 5.498-1.463 7.277-2.748.001-.001-1.743-13.747-7.831-26.249z" />
      <Path
        d="M104.07 76.359c0 1.396.004 3.928-1.111 4.903-1.115.976-1.734 1.836-3.895 1.279V53.66s2.85.068 3.965 1.114.977 2.301 1.045 3.276c.071.974-.004 16.606-.004 18.309z"
        fill="#fff"
      />
    </G>
  </Svg>
)
```

Bien!, como vas a notar, los únicos pasos que debemos hacer son:

1. Fijarnos cuales son las etiquetas que usa nuestro SVG e importar esas etiquetas desde el package, en este caso el SVG que utilizamos tiene 3 etiquetas _svg, g y path_ , para estas etiquetas react-native-svg tiene 3 componentes _Svg, G y Path_ los cuales los importamos arriba.

   Podes ver todos los componentes que tiene en su documentación en el repo que deje mas arriba ☝️

2) Copiar de nuestro SVG los atributos de las etiquetas XML y pegarlas como props de los componentes del package.

Resumen lvl 10 del primer metodo, cambiar los nombres de las etiquetas de tu SVG por los nombres de los componentes del package.

**La otra forma** de hacerlo es usando el componente `SvgXml` del package, el cual es mas sencillo aun:

1. Simplemente colocamos el XML del SVG entre backticks y lo asignamos a una variable

```js
const xml = `<svg width="32" height="32" viewBox="0 0 32 32">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      fill="url(#gradient)"
      d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V4C32 1.79086 30.2091 0 28 0H4ZM17 6C17 5.44772 17.4477 5 18 5H20C20.5523 5 21 5.44772 21 6V25C21 25.5523 20.5523 26 20 26H18C17.4477 26 17 25.5523 17 25V6ZM12 11C11.4477 11 11 11.4477 11 12V25C11 25.5523 11.4477 26 12 26H14C14.5523 26 15 25.5523 15 25V12C15 11.4477 14.5523 11 14 11H12ZM6 18C5.44772 18 5 18.4477 5 19V25C5 25.5523 5.44772 26 6 26H8C8.55228 26 9 25.5523 9 25V19C9 18.4477 8.55228 18 8 18H6ZM24 14C23.4477 14 23 14.4477 23 15V25C23 25.5523 23.4477 26 24 26H26C26.5523 26 27 25.5523 27 25V15C27 14.4477 26.5523 14 26 14H24Z"
    />
    <defs>
      <linearGradient
        id="gradient"
        x1="0"
        y1="0"
        x2="8.46631"
        y2="37.3364"
        gradient-units="userSpaceOnUse">
        <stop offset="0" stop-color="#FEA267" />
        <stop offset="1" stop-color="#E75A4C" />
      </linearGradient>
    </defs>
  </svg>
`
```

2. pasamos esa variable al componente `SvgXml`

```js
export default () => <SvgCss xml={xml} width="100%" height="100%" />
```

Luego de tener nuestro component, podemos utilizarlo en cualquier parte de código

```js
import React from 'react'
import {View, Text} from 'react-native'
import {LogoRiver} from './logoRiver'

class App extends React.Component {
    render() {
        return (
            <Text>Este es el logo</Text>
            <LogoRiver />
        );
    }
}

export default App;
```

Hay una ultima forma, la cual no voy a describir, que es usar un SVG local. No la voy a describir porque no me parece la mejor forma de aprovechar los SVG, ya que si podes usar el codigo XML en un js, para que quisiera tener todos los archivos SVG locales no?.. Mas alla de mi opinion acerca de esta cuestion esa parte esta en el readme del package.

Fácil no?, bueno eso es todo, ahora podes tener tus SVG ordenados por componentes y ahorrarte un par de problemillas 😆.

Cualquier feedback o duda que tengan dejenlos en un PR en [este repo](https://github.com/enzzoperez/enzoublog) por favor hasta que habbilite los comments aca :D . Saludos!
