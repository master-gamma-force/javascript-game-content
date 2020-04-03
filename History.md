# Contexto del Juego

## Saludo (Frame 1)
Soy Oscar tengo una startup y tengo algunos problemas que quiero que me ayudes a solucionar. 

## Contexto (Frame 2)
Voy a crear un sistema de analisis de datos y necesito alguien de mi equipo que sepa Python, quiero encontrarlo sin necesidad de preguntarle a cada uno. Tengo guardadas sus habilidades en un archivo, creo que tu podrías ayudarme con tus conocimientos de JavaScript.

## Lección de Filter

Hola soy Pepe y te apoyare enseñandote  Filter para que puedas ayudar a Oscar.

Te voy a explicar, filter funciona como un filtro, filter es un método que todo array tiene, recibe una función que es la parte lógica del filtro, lo que dice si pasa o no pasa, y ese filtro se aplica a los elementos del array, te devuelve un nuevo array con los elemetos del array que cumplieron con la condición dada en la función.
Ejemplo: 
```js

let alimentos = [🍎,🥑,🍉,🍰,🍕,🍟];

const comidaSana = alimentos.filter(esSaludable(alimento));

console.log(comidaSana);

[🍎,🥑,🍉]
```
## Ejemplo de Uso

Te voy a enseñar como aplicarlo con el problema de Oscar.
Primero pasamos los datos a de los trabajadores a objetos así:
```js
let leonidas = {
    name: "Leondias",
    skill:  "JavaScript"
}
let nicole = {
    name: "Nicole",
    skill: "Python"
}
let david = {
    name: "Nico",
    skill: "Python"
}
```

Declaramos un array de los trabajadores

```js
const trabajadores = [leonidas, nicole, david];
```
Hacemos la función que nos diga si sabe Python

```js
function sabePython(trabajador){
    return trabajador.skill == "Python";
}
```

Hacemos el filter y lo mostramos

```js
const newProyecto = trabajadores.filter(sabePython);
console.log(newProyecto);
```

El resultado sería:

```js
[
    {
     name: "Nicole",
     skill: "Python"
    }
    {
     name: "Nico",
     skill: "Python"
    }
]
```