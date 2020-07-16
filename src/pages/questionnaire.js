"use strict";

let questionnaire = `
<div class="text-center">
<p>This site is about SPA.</p>

<select class="custom-select">
  <option selected>Mikä on fiilis tänään?</option>
  <option value="3">Loistava</option>
  <option value="2">Hyvä</option>
  <option value="1">Huono</option>
</select>
<br><br>
<select class="custom-select">
  <option selected>Kuinka hyvin nukuit?</option>
  <option value="3">Loistavasti</option>
  <option value="2">Hyvin</option>
  <option value="1">Huonosti</option>
</select>

<br><br>

<input class="btn btn-outline-primary" type="submit" value="Submit">
</div>
       `;

const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", showResults);

// TODO:
function showResults() {

}
