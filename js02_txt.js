/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Xander Frieders
      Date:   2/5/26

      Filename: js02.js
 */

const EMP_COST = 100;
const BOOK_COST = 350;
const REPRO_COST = 1250;
const TRAVEL_COST = 2;

window.addEventListener("load", setupForm);

function setupForm() {
   document.getElementById("photoNum").onchange = getEstimate;
   document.getElementById("photoHrs").onchange = getEstimate;
   document.getElementById("makeBook").onchange = getEstimate;
   document.getElementById("photoRights").onchange = getEstimate;
   document.getElementById("photoDist").onchange = getEstimate;

   getEstimate();
}

function getEstimate() {
      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;
      totalCost += photographers * EMP_COST * hours;
      totalCost += distance * TRAVEL_COST * photographers;
      let buyBook = document.getElementById("makeBook").checked;
      let buyRights = document.getElementById("photoRights").checked;
      totalCost += buyBook ? BOOK_COST : 0;
      totalCost += buyRights ? REPRO_COST : 0;
      document.getElementById("estimate").innerHTML = "$" + totalCost;
}