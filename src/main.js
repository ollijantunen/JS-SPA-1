"use strict";

// Load the content with DOM location hash property
function loadContent() {
  let contentDiv = document.getElementById("app");
  let fragmentId = location.hash.substr(1);
  //contentDiv.innerHTML = getContent(fragmentId);
  getContent(fragmentId, function (content) {
    contentDiv.innerHTML = content;
  })
}

function getContent(fragmentId, callback) {
  let pages = {
    home: home,
    about: about,
    contact: contact,
  };
  callback(pages[fragmentId]);
}

if(!location.hash) {
  location.hash = "#home";
}

// load content when refreshing
loadContent();

// Listener for menu buttons
window.addEventListener("hashchange", loadContent);
