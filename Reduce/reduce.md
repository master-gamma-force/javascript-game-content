# Reduce

## Frame 1
Hola soy Oscar y ahora ha llegado el momento de pagarle a mis empleados para esto quiero saber cuanto tengo que sacar del banco para poder pagarle a cada uno exactamente y no sacar de más ni de menos.

## Frame 2
Hola! Soy pepe y te voy a enseñar un nuevo método de los arrays, es *.reduce()* este método lo que hace es reducir todo a un solo dato, no modifica el array, crea uno nuevo con el resultado de reducir lo que tu le digas en la función.

```js
let comida = [🍳 ,🌮, 🍎, 🍰, 🍇, 🍌];
const reducir = comida.reduce(digerirComida);
console.log(reducir);
💩
```

## Un ejemplo paso a paso.

Primero creamos los objetos.

```js
let zapato1 =  {
    precio: 2400,
    marca: "adidas"
}
let zapato2 =  {
    precio: 1200,
    marca: "vans"
}
let zapato3 = {
    precio: 1500,
    marca:  "rebook"
}
let zapato4 = {
    precio: 2200,
    marca: "nike"
}
```

### Paso 2 Declaramos el array

```js
const zapatos = [zapato1, zapato2, zapato3, zapato4];
```

## Creamos la Función

```js
const cuenta = (acumulador, zapato) => {
  return acumulador + zapato.precio ;
}
```

## Hacemos el .reduce()

```js
const total = zapatos.reduce(cuenta, 0);
console.log(total);
```

## Ejercicio

Oscar tiene el sueldo de sus empleados ahora tu puedes usar el metodo **.reduce()** para sumar y darle la cifra exacta del dinero que debe sacar del banco.

No olvides los pasos:

1) Tener los objetos.
2) Declarar un array.
3) Hacer la función.
4) Aplicar .reduce()
5) Mostrar el resultado.

 ```js

let leonidas = {
    name: "Leondias",
    salary: 3400
}
let nicole = {
    name: "Nicole",
    salary: 4000
}
let david = {
    name: "Nico",
    salary: 2800
}

```