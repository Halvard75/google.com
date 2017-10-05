// < button id = "#btn" > Press me! < /button>
// div id = "#tonDiv" > Hello! < /div>

// document.querySelector("#Bouton").onclick = function () {
// if (window.getComputedStyle(document.querySelector('#tonDiv')).display == 'none') {
// document.querySelector("#tonDiv").style.display = "block";
// } else {
// document.querySelector("#tonDiv").style.display = "none";
// }
// }

/*Afficher les éléments centraux*/

let apparition = document.getElementById(".mainc_enter");
let button = document.getElementById("display");

button.onclick = function ()
{
apparition.style.display = 'block';
button.style.display = 'none';
}





// charger message au bout de 10secondes 
onload = setTimeout(function () {
    alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please !!!!!!!");
}, 10000);
