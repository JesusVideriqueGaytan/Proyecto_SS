/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

const tabla = document.getElementById('tabla');
const numFilas = 10;
const numColumnas = 10;

let tablaHTML = '<table>';
tablaHTML += '<tr><th></th>';
for (let i = 1; i <= numColumnas; i++) {
	tablaHTML += `<th>${i}</th>`;
}
tablaHTML += '</tr>';

for (let i = 1; i <= numFilas; i++) {
	tablaHTML += `<tr><th>${i}</th>`;
	for (let j = 1; j <= numColumnas; j++) {
		tablaHTML += `<td>${i * j}</td>`;
	}
	tablaHTML += '</tr>';
}

tablaHTML += '</table>';
tabla.innerHTML = tablaHTML;

