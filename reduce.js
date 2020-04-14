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

const zapatos = [zapato1, zapato2, zapato3, zapato4];

const cuenta = (acumulador, zapato) => {
  return acumulador + zapato.precio ;
}

const total = zapatos.reduce(cuenta, 0);
console.log(total);