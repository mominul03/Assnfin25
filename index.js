///Functionality for heart icons

const cards = document.querySelector('.cards'); //cards box
const favHeartSpan = document.querySelector('.navbar-right .status-box:first-child span');
// Navbar heart count

let favheartsCount = +favHeartSpan.textContent;// Convert heart count text to number
cards.addEventListener('click', (e) => { // Listen for clicks on cards
    
    if (e.target.closest('.fav-btn')) { // Check if a heart button was clicked
    const btn = e.target.closest('.fav-btn');

    favheartsCount++; //increasing heart count
    favHeartSpan.textContent = favheartsCount;
    btn.querySelector('.fav-icon').classList.toggle('liked');// Switch heart style
  }
});