const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
   console.log('Someone clicked my butt!!');
}

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

// Listen on multiple items 
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
   console.log('You clicked a button!');
   const button = event.target;
   // console.log(button.textContent);
   // console.log(parseFloat(event.target.dataset.price));
   console.log(event.target);
   console.log(event.currentTarget);
   console.log(event.target === event.currentTarget);
   // Stop this event from bubbling up
   // event.stopPropagation();
}


buyButtons.forEach(function(buyButton) {
   buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function() {
   console.log('You clicked the window! You fucking did it!');
},
{ capture: true});

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', function(e) {
   console.log(e.currentTarget);
   console.log(this);
})