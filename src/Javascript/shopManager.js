import {
    cyberPunkItems,
    steamPunkItems,
    itemsMagicos,
    armasBasicas,
    itemsOnlyKundums,
    baseProducts,
    vehiculos,
    kundums,
    randomNumber,
    efectosMagicos,
    opartsListadas,
    municiones

} from "./dataItems.js";



//tablas 
let shopTable = document.getElementById("shopTable");
let shopTableBody = shopTable.querySelector("tbody");


const shopBaseProducts = document.getElementById("shopTableBaseProducts")
const shopBaseProductsBody = shopBaseProducts.querySelector("tbody");

const shopMunicionesTable = document.getElementById("shopTableMuniciones");
const shopMunicionesBody = shopMunicionesTable.querySelector("tbody");

const weaponsTable = document.getElementById("weaponsTable");
const weaponsTableBody = weaponsTable.querySelector("tbody")

//porcentaje de precio aplicable
let percentButton = document.getElementById("locations");




//devuelve un item random del array de items correspondiente
function randomItem(itemsArray) {
    const randomIndex = Math.floor(Math.random() * itemsArray.length);
    return itemsArray[randomIndex];
}

function kundumType() {
    const randomKundumNumber = Math.floor(Math.random() * 100) + 1;
    const kundumType =
        randomKundumNumber <= 36
            ? kundums[0]
            : randomKundumNumber > 36 && randomKundumNumber <= 62
                ? kundums[1]
                : randomKundumNumber > 62 && randomKundumNumber <= 84
                    ? kundums[2]
                    : randomKundumNumber > 84 && randomKundumNumber <= 94
                        ? kundums[3]
                        : kundums[4];

    return kundumType;
}

function selectItemType() {
    const randomNumberType = Math.floor(Math.random() * 26) + 1;
    let item;
    switch (randomNumberType) {
        case 1:
        case 2:
            item = {
                nombre: "Item vendido",
            };
            break;
        case 3:
        case 4:
            item = kundumType();
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            item = randomItem(vehiculos);
            break;
        case 10:
        case 11:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
            item = randomItem(cyberPunkItems);
            break;
        case 12:
        case 13:
        case 14:
            item = randomItem(opartsListadas);
            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            item = randomItem(steamPunkItems.concat(itemsMagicos));
            break;
        default:
            item = "ERROR";
            break;
    }
    return item;
}

function selectWeapon() {
    const randomNumberType = Math.floor(Math.random() * 26) + 1;
    let item;
    switch (randomNumberType) {
        case 1:
        case 2:
        case 23:
        case 24:
        case 25:
        case 26:
            item = {
                nombre: "Item vendido",
            };
            break;
        case 3:
            item = armasBasicas[0];
            break;
        case 4:
            item = armasBasicas[1];
            break;
        case 5:
            item = armasBasicas[2];
            break;
        case 6:
            item = armasBasicas[3];
            break;
        case 7:
            item = armasBasicas[4];
        case 8:
            item = armasBasicas[5];
            break;

        case 9:
            item = armasBasicas[6];
            break;

        case 10:
            item = armasBasicas[7];
            break;

        case 11:
            item = armasBasicas[8];
            break;

        case 12:
            item = armasBasicas[9];
            break;

        case 13:
            item = armasBasicas[10];
            break;

        case 14:
            item = armasBasicas[11];
            break;

        case 15:
            item = armasBasicas[12];
            break;

        case 16:
            item = armasBasicas[13];
            break;

        case 17:
            item = armasBasicas[14];
            break;

        case 18:
            item = armasBasicas[15];
            break;

        case 19:
            item = armasBasicas[16];
            break;

        case 20:
            item = armasBasicas[17];
            break;

        case 21:
            item = armasBasicas[18];
            break;

        case 22:
            item = armasBasicas[19];
            break;
        default:
            item = "ERROR";
            break;
    }

    const isMagic = randomNumber(1, 100);
    if (isMagic <= 10 && item.nombre !== "Item Vendido") {
       
       let magicWeapon = {
            ...structuredClone(item),
            efectoMagico : efectosMagicos[randomNumber(0, 26)]

        }
        magicWeapon.precio += magicWeapon.efectoMagico.precio
        return magicWeapon
    }
    else {
        return item;
    }

}

function generateArray(arrayLength, arrayTypeFunction) {
    let i = 0;
    let arrayItemsShop = [];
    let locationValues = percentButtonValue();

let locationQuantity = locationValues.newQuantity
    //es 20 porque es la cantidad de items por shop
    while (i < arrayLength) {
        i++;
        let itemSelected = arrayTypeFunction();
        arrayItemsShop.push(itemSelected);
    }
    return arrayItemsShop.slice(0, Math.round(arrayLength * locationQuantity));
}


function percentButtonValue() {
    const newValues = percentButton.value == "Paramo" ? {newPrice: 1.20,newQuantity:0.75} : percentButton.value == "Desierto" ? {newPrice: 1.30,newQuantity:0.60}  : percentButton.value == "Pueblo" ? {newPrice: 1.15,newQuantity:0.85}  : percentButton.value == "Ciudad" ? {newPrice: 1.10,newQuantity:1} : percentButton.value == "Metrópolis" ? {newPrice: 1,newQuantity:1} : percentButton.value == "Desolado" ? {newPrice: 1.40,newQuantity:0.30} : percentButton.value == "Camino" ? {newPrice: 1.25,newQuantity:0.85} : percentButton.value == "Trotamundo" ? {newPrice: 1.35,newQuantity:1} : {newPrice: 1,newQuantity:0.40}     
    return newValues;
}

function crearBaseProductPorClick(){
    let baseProductCopy = [{
        nombre:"Raciones",
        cantidad:randomNumber(8,40),
        precio:70
      },{
        nombre:"Botiquines",
        cantidad:randomNumber(80,500),
        precio: 12
      },{
        nombre:"Combustible (1TL manejando)",
        cantidad: randomNumber(2,10),
        precio:1500
      },{
        nombre:"Hierba azul",
        cantidad:randomNumber(2,20),
        precio:70
      },{
        nombre:"Hierba roja",
        cantidad:randomNumber(2,14),
        precio:100
      },{
        nombre:"Hierba verde",
        cantidad:randomNumber(1,12),
        precio:150
      },{
        nombre:"Hierba violeta",
        cantidad:randomNumber(0,10),
        precio:200
      },{
        nombre:"Hierba amarilla",
        cantidad:randomNumber(0,9),
        precio:300
      },{
        nombre:"Mochila 8 slots",
        cantidad:randomNumber(0,4),
        precio:500
      },{
        nombre:"Mochila 10 slot",
        cantidad:randomNumber(0,3),
        precio:800
      },{
        nombre:"Mochila 12 slot",
        cantidad:randomNumber(0,2),
        precio:1200
      }];
      return baseProductCopy;
}

function crearArrayMuniciones(){
    function municionEspecial(porcentajeProbabilidad){
        if(randomNumber(1,10)<= porcentajeProbabilidad) return 1;
        else return 0;
    }
let municiones = [{
  nombre:"Municion Base x6 Pistolas Ligeras y Medias",
  cantidad:randomNumber(2,10),
  precio:600

},{
nombre:"Municion Antipersonal x4 ",
descripcion:"Objetivos de carne +20%",
  cantidad:municionEspecial(4),
  precio:9600

},
{
nombre:"Municion Neon x4 ",
descripcion: "Ignora armaduras convencionales",
  cantidad:municionEspecial(4),
  precio:11200

},{
nombre:"Municion de Fase x4 ",
descripcion: "Congela la localización aplicando negativos",
descripcion: "Ignora armaduras mágicas",
  cantidad:municionEspecial(1),
  precio:16000

},{
nombre:"Municion Criogenica x4 ",
descripcion: "Congela la localización aplicando negativos",
  cantidad:municionEspecial(3),
  precio:12800

},{
nombre:"Municion Debilitadora x4 ",
descripcion: "La localización afectada tiene -30% de RES",
  cantidad:municionEspecial(3),
  precio:19200

},{
nombre:"Municion Explosiva x4 ",
descripcion:"Una localización adyacente recibe 2D4 sin RES",
  cantidad:municionEspecial(2),
  precio:19200

},{
nombre:"Municion Radioactiva x4 ",
descripcion: "La localización sufre +1D4/TC",
  cantidad:municionEspecial(2),
  precio:11200

},

{

  nombre:"Municion Base x8 Pistolas Pesadas y Shotgun",
  cantidad:randomNumber(2,8),
  precio:2000


},

{
nombre:"Municion Antipersonal x4 ",
descripcion:"Objetivos de carne +20%",
  cantidad:municionEspecial(4),
  precio:11520

},
{
nombre:"Municion Neon x4 ",
descripcion: "Ignora armaduras convencionales",
  cantidad:municionEspecial(4),
  precio:13440

},{
nombre:"Municion de Fase x4 ",
descripcion: "Ignora armaduras mágicas",
  cantidad:municionEspecial(1),
  precio:19200

},{
nombre:"Municion Criogenica x4 ",
descripcion: "Congela la localización aplicando negativos",
  cantidad:municionEspecial(3),
  precio:15360

},{
nombre:"Municion Debilitadora x4 ",
descripcion: "La localización afectada tiene -30% de RES",
  cantidad:municionEspecial(3),
  precio:23040

},{
nombre:"Municion Explosiva x4 ",
descripcion:"Una localización adyacente recibe 2D4 sin RES",
  cantidad:municionEspecial(2),
  precio:23040

},{
nombre:"Municion Radioactiva x4 ",
descripcion: "La localización sufre +1D4/TC",
  cantidad:municionEspecial(2),
  precio:13440

},

{

  nombre:"Municion Base x25 Sniper y Ametralladoras",
  cantidad:randomNumber(2,3),
  precio:3500

},
{
nombre:"Municion Antipersonal x4 ",
descripcion:"Objetivos de carne +20%",
  cantidad:municionEspecial(4),
  precio:16128

},
{
nombre:"Municion Neon x4 ",
descripcion: "Ignora armaduras convencionales",
  cantidad:municionEspecial(4),
  precio:18816

},{
nombre:"Municion de Fase x4 ",
descripcion: "Ignora armaduras mágicas",
  cantidad:municionEspecial(1),
  precio:26880

},{
nombre:"Municion Criogenica x4 ",
descripcion: "Congela la localización aplicando negativos",
  cantidad:municionEspecial(3),
  precio:21504

},{
nombre:"Municion Debilitadora x4 ",
descripcion: "La localización afectada tiene -30% de RES",
  cantidad:municionEspecial(3),
  precio:32256

},{
nombre:"Municion Explosiva x4 ",
descripcion:"Una localización adyacente recibe 2D4 sin RES",
  cantidad:municionEspecial(2),
  precio:32256

},{
nombre:"Municion Radioactiva x4 ",
descripcion: "La localización sufre +1D4/TC",
  cantidad:municionEspecial(2),
  precio:18816

}

]

let municionesConStock = municiones.filter(item => item.cantidad > 0);
return municionesConStock;
}



function populateShopTable(arrayItems, arrayBaseProducts, arrayWeapons,arrayMunitions) {

    shopTableBody.innerHTML = "";
    shopBaseProductsBody.innerHTML = "";
    weaponsTableBody.innerHTML = "";
    shopMunicionesBody.innerHTML = "";

    let arrayItemsCopy = JSON.parse(JSON.stringify(arrayItems));
    
    let weaponsCopy = JSON.parse(JSON.stringify(arrayWeapons));

   
    
   

    let locationValues = percentButtonValue();
    let locationPrice = locationValues.newPrice
    let locationQuantity = locationValues.newQuantity
  
    arrayItemsCopy.forEach((item) => {
        if (item.nombre == "Item vendido") {
            console.log("ESTA VENDIDO BRO")
            return;
        };



        item.precio = Math.round(item.precio * locationPrice) || "Pregunte al master" ;


    

        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const typeCell = document.createElement("td");
        const descriptionCell = document.createElement("td");
        const effectCell = document.createElement("td");
        const priceCell = document.createElement("td");

        nameCell.textContent = item.nombre;
        typeCell.textContent = item.tipo;
        descriptionCell.textContent = item.descripcion;
        effectCell.textContent = item.efecto;
        priceCell.textContent = item.precio;

        row.appendChild(nameCell);
        row.appendChild(typeCell);
        row.appendChild(descriptionCell);
        row.appendChild(effectCell);
        row.appendChild(priceCell);
        shopTableBody.appendChild(row);
    });

    arrayBaseProducts.forEach((item) => {
        
        
        item.precio = Math.round(item.precio * locationPrice);
        item.cantidad = Math.floor(item.cantidad * locationQuantity);
        if (item.cantidad == 0) {
            return;
        }



        



        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const cantCell = document.createElement("td")
        const priceCell = document.createElement("td");

        nameCell.textContent = item.nombre;
        cantCell.textContent = item.cantidad;
        priceCell.textContent = item.precio;

        row.appendChild(nameCell)
        row.appendChild(cantCell)
        row.appendChild(priceCell)

        shopBaseProductsBody.appendChild(row)

    });

    arrayMunitions.forEach((item) => {
        item.precio = Math.round(item.precio * locationPrice);
       // item.cantidad = Math.floor(item.cantidad * locationQuantity);

        //por el momento las municiones no se veran afectadas por locacion. A revisar mas tarde



        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const descriptionCell = document.createElement("td");
        const cantCell = document.createElement("td")
        const priceCell = document.createElement("td");

        nameCell.textContent = item.nombre;
        descriptionCell.textContent = item.descripcion;
        cantCell.textContent = item.cantidad;
        priceCell.textContent = item.precio;

        row.appendChild(nameCell)
        row.appendChild(descriptionCell)
        row.appendChild(cantCell)
        row.appendChild(priceCell)

        shopMunicionesBody.appendChild(row)

    });





    weaponsCopy.forEach((item) => {
        if (item.nombre === "Item vendido") {
            return;
        }


        item.precio = Math.round(item.precio * locationPrice);

        const row = document.createElement("tr")

        const nameCell = document.createElement("td");
        const typeCell = document.createElement("td");
        const dificultCell = document.createElement("td");
        const damageCell = document.createElement("td");
        const hpCell = document.createElement("td");
        const bonCell = document.createElement("td");
        const magicEffectCell = document.createElement("td");
        const magicEffectDescriptionCell = document.createElement("td");
        const priceCell = document.createElement("td");

        nameCell.textContent = item.nombre;
        typeCell.textContent = item.tipo;
        dificultCell.textContent = item.descripcion;
        damageCell.textContent = item.efecto;
        hpCell.textContent = item.rareza;
        bonCell.textContent = item.costo;
        magicEffectCell.textContent = item.efectoMagico?.nombre ?? "";
        magicEffectDescriptionCell.textContent = item.efectoMagico?.efecto ?? "";
        priceCell.textContent = item.precio;

        row.appendChild(nameCell);
        row.appendChild(typeCell);
        row.appendChild(dificultCell);
        row.appendChild(damageCell);
        row.appendChild(hpCell);
        row.appendChild(bonCell);
        row.appendChild(magicEffectCell);
        row.appendChild(magicEffectDescriptionCell);
        row.appendChild(priceCell);
        weaponsTableBody.appendChild(row);


    })


}




let showItemsTable = (tabla) => {
    if (tabla.hasAttribute("hidden")) {
        tabla.removeAttribute("hidden");
    }
}
const generateShopButton = document.getElementById("shopButton");
generateShopButton.addEventListener("click", () => {
    populateShopTable(generateArray(20, selectItemType),crearBaseProductPorClick(), generateArray(5, selectWeapon),crearArrayMuniciones());
    showItemsTable(shopTable)
    showItemsTable(shopBaseProducts)
    showItemsTable(weaponsTable)
showItemsTable(shopMunicionesTable)
});






