let zapato1 =  {
  talla: 6,
  marca: "adidas"
}
let zapato2 =  {
  talla: 8,
  marca: "vans"
}
let zapato3 = {
  talla: 5,
  marca:  "rebook"
}
let zapato4 = {
  talla: 6,
  marca: "nike"
}
const zapatos = [zapato1, zapato2, zapato3, zapato4];
const cambiarTalla = (zapato) => {
  return zapato.talla -2;
}
const tallasMx = zapatos.map(cambiarTalla);
console.log(tallasMx);