// Sample data
// import { itemManager } from "./itemManager.js";

import {cyberPunkItems, steamPunkItems, armasBasicas,itemsMagicos,itemsOnlyKundums} from "./Javascript/dataItems.js";

let allData = cyberPunkItems.concat(steamPunkItems,armasBasicas,itemsMagicos)

let cpSpItems = [...cyberPunkItems];
cpSpItems.push(...steamPunkItems);
cpSpItems.sort((a, b) => a.nombre.localeCompare(b.nombre));
armasBasicas.sort((a, b) => a.nombre.localeCompare(b.nombre));
itemsMagicos.sort((a, b) => a.nombre.localeCompare(b.nombre));

console.log(allData)










//*FUNCION PARA ORDENAR POR LO COLUMNA QUE QUIERA
// function sortTableByRarity() {
//   var table, rows, switching, i, x, y, shouldSwitch;
//   table = document.getElementById("myTable");
//   switching = true;
//   while (switching) {
//     switching = false;
//     rows = table.rows;
//     for (i = 1; i < (rows.length - 1); i++) {
//       shouldSwitch = false;
//       x = rows[i].getElementsByTagName("TD")[4];
//       y = rows[i + 1].getElementsByTagName("TD")[4];
//       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }
// }

// const buttonSortRarity = document.getElementById("sortTableButton");
// buttonSortRarity.addEventListener("click",sortTableByRarity)


  
  // Get table and tbody elements
  const table = document.querySelector('#myTable');
  const itemsTable = table.querySelector('tbody');
  const weaponsTable = document.getElementById("weaponsTable");
  const weaponsTableBody = weaponsTable.querySelector("tbody")
  const magicItemsTable = document.getElementById("magicItemsTable");
  const magicItemsTableBody = magicItemsTable.querySelector("tbody");
  
  // Function to populate the table with data
  function populateTable(data,table) {

    // establecerInnerHTML(table)
    // Clear existing table rows
    table.innerHTML = ""
  
    // Loop through data and create a new row for each item
    data.forEach(item => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const typeCell = document.createElement('td');
      const descriptionCell = document.createElement('td');
      const effectCell = document.createElement("td");
      const rarityCell = document.createElement("td");
      const costCell = document.createElement("td");
  
      nameCell.textContent = item.nombre;
      typeCell.textContent = item.tipo;
      descriptionCell.textContent = item.descripcion;
      effectCell.textContent = item.efecto;
      rarityCell.textContent = item.rareza;
      costCell.textContent = item.costo;
  
      row.appendChild(nameCell);
      row.appendChild(typeCell);
      row.appendChild(descriptionCell);
      row.appendChild(effectCell);
      row.appendChild(rarityCell);
      row.appendChild(costCell)
      table.appendChild(row);
    });
  }
  
  // Initial population of table
  populateTable(cpSpItems ,itemsTable);
  populateTable(armasBasicas,weaponsTableBody);
  populateTable(itemsMagicos,magicItemsTableBody)
  
  // Get search bar element
  const searchBar = document.querySelector('#searchBar');
  
  // Function to filter data based on search query
  function filterData(searchQuery) {
    const filteredData =  allData.filter(item => {
      const nombre = item.nombre.toLowerCase();      
      return nombre.includes(searchQuery) 
    });
    return filteredData;
  }
  
  // Function to handle search bar input
  function handleSearch() {
    const searchQuery = searchBar.value.toLowerCase();
    const filteredData = filterData(searchQuery);
    populateTable(filteredData,itemsTable);
    
  }
  
  // Add event listener to search bar
  searchBar.addEventListener('input', handleSearch);



//funcion que muestra la tabla o la oculta
let showItemsTable = (tabla)=> {
  
  if(tabla.hasAttribute("hidden")){
    tabla.removeAttribute("hidden");
  }
  else{
    tabla.setAttribute("hidden","hidden")
  }

}

//botones de las tablas 
let itemsButton = document.getElementById("buttonItems");
itemsButton.addEventListener("click",()=>{
  showItemsTable(table)
});

let weaponsButton = document.getElementById("weaponsButton");
weaponsButton.addEventListener("click", ()=> {
  showItemsTable(weaponsTable)
})

let magicItemsButton = document.getElementById("magicItemsButton");
magicItemsButton.addEventListener("click",()=>{
  showItemsTable(magicItemsTable)
})
