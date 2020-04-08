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

function esTalla6(articulo){
    return articulo.talla == 6;
}
const talla6 = zapatos.filter(esTalla6);
console.log(talla6);