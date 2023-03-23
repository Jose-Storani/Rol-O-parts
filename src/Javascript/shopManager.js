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

} from "./dataItems.js";



//tablas 
let shopTable = document.getElementById("shopTable");
let shopTableBody = shopTable.querySelector("tbody");


const shopBaseProducts = document.getElementById("shopTableBaseProducts")
const shopBaseProductsBody = shopBaseProducts.querySelector("tbody");

const weaponsTable = document.getElementById("weaponsTable");
const weaponsTableBody = weaponsTable.querySelector("tbody")

//porcentaje de precio aplicable
let percentButton = document.getElementById("cars");




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
                nombre: "NADA",
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
    if (isMagic <= 10 && item.nombre !== "NADA") {
        item.efectoMagico = efectosMagicos[randomNumber(0, 26)];
        item.precio += item.efectoMagico.precio
        return item
    }
    else {
        return item;
    }

}

function generateArray(arrayLength, arrayTypeFunction) {
    let i = 0;
    let arrayItemsShop = [];
    let numberOfItems = percentButton.value === "Desierto" ? 7 : percentButton.value === "Poblado" ? 10 : percentButton.value === "Ciudad" ? 15 : 20
    //es 20 porque es la cantidad de items por shop
    while (i < arrayLength) {
        i++;
        let itemSelected = arrayTypeFunction();
        arrayItemsShop.push(itemSelected);
    }
    return arrayItemsShop.slice(0, numberOfItems);
}


function percentButtonValue() {
    const priceRealValue = percentButton.value == "Desierto" ? 10 : percentButton.value == "Poblado" ? 15 : percentButton.value == "Ciudad" ? 20 : 30
    return 1 + priceRealValue / 100;
}

function populateShopTable(arrayItems, arrayWeapons) {

    shopTableBody.innerHTML = "";
    shopBaseProductsBody.innerHTML = "";
    weaponsTableBody.innerHTML = "";

    let arrayItemsCopy = JSON.parse(JSON.stringify(arrayItems));
    let baseProductsCopy = JSON.parse(JSON.stringify(baseProducts));
    let weaponsCopy = JSON.parse(JSON.stringify(arrayWeapons));



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

    baseProductsCopy.forEach((item) => {
        if (item.cantidad === 0) {
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

    });





    weaponsCopy.forEach((item) => {
        if (item.nombre === "NADA") {
            return;
        }


        item.precio = Math.round(item.precio * percentButtonValue());

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
    populateShopTable(generateArray(20, selectItemType), generateArray(5, selectWeapon));
    showItemsTable(shopTable)
    showItemsTable(shopBaseProducts)
    showItemsTable(weaponsTable)

});






