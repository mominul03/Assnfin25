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



///Functionality for call buttons

document.querySelectorAll('.call-btn').forEach(btn => {
  // Call button click

  btn.addEventListener('click', () => { // When button is clicked
    //Getting service card info,title and number
    const card = btn.closest('.card'); 
    const svname = card.querySelector('.card-title').textContent; 
    const svnumber = card.querySelector('.card-number').textContent; 

    const coinscount = document.querySelector('.navbar-right .status-box:nth-child(2) span'); // Navbar coin count
    let coins = +coinscount.textContent; // Coins as numbers

    if (coins < 20) return alert("Not enough coins!"); // Alerting for not enough coins

    coinscount.textContent = coins - 20; // Deduct everytime a call is taken
    alert(`Calling ${svname} at ${svnumber}`); //ALerting with call details

    // New history entry of calls and added to the top
    const historyItem = document.createElement('li'); // This is a new list item

    // Call details with service name, service number, and current time of call
    historyItem.innerHTML = `               
      <div>
        <p class="history-title">${svname}</p>    
        <p class="history-number">${svnumber}</p>
      </div>
      <span class="time">${new Date().toLocaleTimeString()}</span>
    `;
    document.querySelector('.history-list').prepend(historyItem); // Add to top
  });
});





///Functionality for call history
const clearBtn = document.querySelector('.clear-btn'); //clear button click
clearBtn.addEventListener('click', () => {   // when clear button click 
  const history = document.querySelector('.history-list'); // call history list selection
  // clearing all history
  history.innerHTML = ''; 
});




///Functionality for copy buttons
const copyBtns = document.querySelectorAll('.copy-btn-outline'); // card copy buttons
const navCopy = document.querySelector('.copy-btn');             // navbar copy count
let copyCount = parseInt(navCopy.textContent) || 0;             // initially the copy count

copyBtns.forEach(btn => {
  btn.addEventListener('click', () => {                         //when copy button is clicked
    const copyNum = btn.closest('.card').querySelector('.card-number').textContent; // getting number

    navigator.clipboard.writeText(copyNum);                      // copy number to clipboard
    alert(`${copyNum} copied!`);                                  // show alerting message at top

    copyCount++;                                                 // increment the count of copies
    navCopy.textContent = `${copyCount} Copy`;                  // show updated copy count on navbar
  });
});

