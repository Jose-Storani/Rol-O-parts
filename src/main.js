// Sample data
// import { itemManager } from "./itemManager.js";

import data from "./Javascript/itemManager.js";
  
  // Get table and tbody elements
  const table = document.querySelector('#myTable');
  const tbody = table.querySelector('tbody');
  
  // Function to populate the table with data
  function populateTable(data) {
    // Clear existing table rows
    tbody.innerHTML = '';
  
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
      tbody.appendChild(row);
    });
  }
  
  // Initial population of table
  populateTable(data);
  
  // Get search bar element
  const searchBar = document.querySelector('#searchBar');
  
  // Function to filter data based on search query
  function filterData(searchQuery) {
    const filteredData = data.filter(item => {
      const nombre = item.nombre.toLowerCase();
      const descripcion = item.descripcion.toLowerCase();
      return nombre.includes(searchQuery) || descripcion.includes(searchQuery);
    });
    return filteredData;
  }
  
  // Function to handle search bar input
  function handleSearch() {
    const searchQuery = searchBar.value.toLowerCase();
    const filteredData = filterData(searchQuery);
    populateTable(filteredData);
    console.log(itemManager.consultarItems())
  }
  
  // Add event listener to search bar
  searchBar.addEventListener('input', handleSearch);