---
title: Imágenes SVGs en React Native
date: "2020-03-20T23:46:37.121Z"
path: svg-en-rn
thumbnail: ../../static/assets/denys-nevozhai-qpqd-w28adc-unsplash.jpg
---

Que tal gente?, hoy voy a escribir un poco sobre como trabajar imágenes SVGs en React Native. No es mucho lo que tengo para escribir, simplemente como usar package que funciona bastante bien, así que empecemos.

Los SVG (Scalable Vector Graphics) tienen la particularidad que no se deforman cuando se agrandan o cuando se achican. Eso tampoco quiere decir que en todos lados vayamos a poner SVG 😁, suelen complicarte la vida muchas veces, pero a diferencia de los JPG o PNG que son mapas de bits, los SVG están formados por etiquetas XML y se pueden escribir/editar con cualquier editor de texto y son útiles para mostrar logos, iconos y gráficos, para mostrar imágenes realistas es preferible hacerlo con imágenes JPG y/o PNG.

**React Native SVG**

Este package es OSS y saca provecho de las etiquetas XML por las que están formados los SVG y usa componentes llamados de igual forma que estas etiquetas.
[**react-native-community/react-native-svg**
*SVG library for React Native. Contribute to react-native-community/react-native-svg development by creating an account…*github.com](https://github.com/react-native-community/react-native-svg)

Vamos a usar un ejemplo con un SVG para ver como deberíamos usarlo.

Como recomendación les diría que hagan un componente que contenga a esa imagen SVG para que después puedan utilizarlo sin tener que escribir todo el SVG nuevamente, como lo haremos en este post.

Vamos a utilizar este SVG

<!-- <iframe src="https://medium.com/media/51a03cfc2d5e0f54742dafa6e9c4e2de" frameborder=0></iframe> -->

Bien, tenemos nuestro SVG. Agreguemos el package a nuestro proyecto:

    npm i react-native-svg

y luego linkeamos el código nativo

    react-native link react-native-svg

Ahora vamos a crear nuestro componente logoRiver.js o como quieran llamarlo de acuerdo a la imagen que vayan a utilizar

<!-- <iframe src="https://medium.com/media/d1e6dab4b4974519f48f3abba0d2bff7" frameborder=0></iframe> -->

Bien!, como vas a notar, los únicos pasos que debemos hacer son:

1- Fijarnos cuales son las etiquetas que usa nuestro SVG e importar esas etiquetas desde el package, en este caso el SVG que utilizamos tiene 3 etiquetas _svg, g y path_ , para estas etiquetas react-native-svg tiene 3 componentes _Svg, G y Path_ los cuales los importamos arriba.

Podes ver todos los componentes que tiene en su documentación en el repo que deje mas arriba ☝️

2- Copiar de nuestro SVG los atributos de las etiquetas XML y pegarlas como props de los componentes del package.

Resumen lvl 10, cambiar los nombres de las etiquetas de tu SVG por los nombres de los componentes del package.

Luego de tener nuestro component, podemos utilizarlo en cualquier parte de código que queramos, por ejemplo:

<!-- <iframe src="https://medium.com/media/0b4c3e7d93de87d6e465475676fc89ca" frameborder=0></iframe> -->

Fácil no?, bueno eso es todo, ahora podes tener tus SVG ordenados por componentes y ahorrarte un par de problemillas 😆.

Cualquier feedback o duda que tengan dejenlos en los comentarios por favor. Saludos!
