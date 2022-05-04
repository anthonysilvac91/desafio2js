



const productos = [
    {nombre: "agenda aguacates", precio: 2500},
    {nombre: "agenda puntos", precio: 5500},
    {nombre: "agenda lineas", precio: 3500},
    {nombre: "agenda corazons", precio: 4000},
    {nombre: "agenda cactus", precio: 2500},
    {nombre: "washitape van gogh", precio: 2600},
    {nombre: "washitape set 6 unidades", precio: 3000},
    {nombre: "washitape azul set 6 unidades", precio: 3000},
    {nombre: "washitape verde 6 unidades", precio: 3000},
    {nombre: "washitape rojo 6 unidades", precio: 3000},
    {nombre: "sticker corazones", precio: 1500},
    {nombre: "sticker caritas", precio: 1500},
    {nombre: "sticker otoño", precio: 2000},
    {nombre: "sticker pop", precio: 2500},
    {nombre: "sticker animales", precio: 1500},

   
]


const filtrar = () =>{
    const texto = busqueda;
    for(let producto of productos){
        let nombre = producto.nombre;
        if(nombre.indexOf(texto) !== -1){
            console.log(nombre)

        }
    }
}



const buscar = () =>{
    busqueda = prompt("Ingresa un producto para ver variedades existentes (Agenda, Washitape o sticker").toLowerCase()
}

/*buscar()
filtrar()*/

do{
    buscar()
    if (busqueda !== "agenda" && busqueda !== "sticker" && busqueda !== "washitape"){
        alert("ingrese producto nuevo")
    }else(filtrar())


}while(busqueda != "agenda" && busqueda != "sticker" && busqueda != "washitape")
