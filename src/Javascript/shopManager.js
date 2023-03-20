import {
    cyberPunkItems,
    steamPunkItems,
    itemsMagicos,
    armasBasicas,
    itemsOnlyKundums,
    baseProducts,    
    vehiculos,
    kundums,
} from "./dataItems.js";

let shopTable = document.getElementById("shopTable");
let shopTableBody = shopTable.querySelector("tbody");
let percentButton = document.getElementById("percent");
const shopBaseProducts = document.getElementById("shopTableBaseProducts")
const shopBaseProductsBody = shopBaseProducts.querySelector("tbody");
console.log(shopBaseProductsBody)

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
                nombre: "NADA",
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
            item = {
                nombre: "Opart",
            };

            break;
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            item = randomItem(steamPunkItems);
            break;
        default:
            item = "ERROR";
            break;
    }
    return item;
}

function generateArray() {
    let i = 0;
    let arrayItemsShop = [];
    //es 20 porque es la cantidad de items por shop
    while (i < 20) {
        i++;
        let itemSelected = selectItemType();
        arrayItemsShop.push(itemSelected);
    }
    return arrayItemsShop;
}

function percentButtonValue() {
    return 1 + percentButton.value / 100;
}

function populateShopTable(arrayItems) {
    shopTableBody.innerHTML = "";
    shopBaseProductsBody.innerHTML= "";

    let arrayItemsCopy = JSON.parse(JSON.stringify(arrayItems));
    let baseProductsCopy = JSON.parse(JSON.stringify(baseProducts));

    arrayItemsCopy.forEach((item) => {
        if (item.nombre == "NADA") {
            return;
        }
       

        item.precio = Math.round(item.precio * percentButtonValue()) || "Pregunte al master";

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

    baseProductsCopy.forEach((item)=>{
        if(item.cantidad === 0){
            return;
        }

        item.precio = Math.round(item.precio * percentButtonValue());


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
        
    })


}

const generateShopButton = document.getElementById("shopButton");
generateShopButton.addEventListener("click", () => {
    populateShopTable(generateArray());
});


// const itemsArray = [{
//     nombre: "Revolver Samael (2 tiros por turno",

//     efecto: "4 balas x cartucho, 3D8 + 35pt daño c/u",
//     precio:10000
//   },
//   {
//     nombre: "The unnatural selector (atk area)",

//     efecto: "5D6 sin resistencia en 4x4m",
//     precio:11250
//   },
//   {
//     nombre: "Dado del sueño (area)",

//     efecto: "30 vs autoc. Para dormir",
//     precio:8750
//   },
//   {
//     nombre: "Jetpack (Tecno 35 para usar)",

//     efecto: "Atlet 40 para usar con una mano",
//     precio:11875
//   },
//   {
//     nombre: "Automail (miembro al azar)",

//     efecto: "Fue de 1 a 5D, Res de 30 a 70pt",
//     precio:10000
//   }];

// let tempArray = JSON.parse(JSON.stringify(itemsArray));

// tempArray.forEach((e)=>{
//     e.precio *= 2
// })
// console.log(itemsArray)
// console.log(tempArray)
