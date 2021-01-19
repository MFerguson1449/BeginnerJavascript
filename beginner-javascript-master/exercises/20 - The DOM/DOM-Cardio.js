

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
myDiv.style.backgroundColor = 'transparent';
myDiv.style.boxShadow = 'none';

console.log(myDiv); //! <---Log

const myList = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Death Knight';

myDiv.appendChild(myList);
document.body.appendChild(myDiv);

const myListHeader = document.createElement('h3');
myListHeader.textContent = 'WoW Classes';
const li2 = document.createElement('li');
li2.textContent = 'Rogue';
const li3 = document.createElement('li');
li3.textContent = 'Mage';
const li4 = document.createElement('li');
li4.textContent = 'Shaman';
const li5 = document.createElement('li');
li5.textContent = 'Paladin';

myList.appendChild(myListHeader);
myList.appendChild(li);
myList.appendChild(li2);
myList.appendChild(li3);
myList.appendChild(li4);
myList.appendChild(li5);

const myImage = document.createElement('img');
myImage.src = 'queens.jpg';
myImage.alt = '2 beautiful queens';
myImage.classList.add('cute')
myImage.style.width = '350px';

myDiv.appendChild(myImage);

const myWords = `
   <div>
      <p>
         Talents
         Many talent combinations will work just fine, these are just recommendations for day to day gameplay. These talents should be adjusted as needed to properly utilize the utility that the Death Knight class provides.
      </p>

      <p class='warning'>
         Bursting Sores plays a large part in what makes Unholy Death Knights thrive in 4+ target situations, mastering the application and explosion of Festering Wound is integral in mastering the Unholy Death Knight, especially in AoE situations. We will talk more about this later on in the rotation section.
      </p>
   </div>
`;

const myFragment = document.createRange().createContextualFragment(myWords);

document.body.appendChild(myFragment);

const deleteBefore = document.querySelector('.warning');
deleteBefore.previousElementSibling.remove();

function ageInDogYears(humanAge) {
   dogYearsAge = humanAge * 7
   return dogYearsAge;
}

function deleteCard() {
      parentElement.remove();
}

function generatePlayerCard(name, age, height) {
   const myCard = `
   <div class='playerCard'>
      <h2>${name} - ${age}</h2>
      <p>They are ${height} and ${age} years old. In dog years this person would be ${ageInDogYears(age)}. That would be a tall dog!
   </div>
   `;
   const myFrag = document.createRange().createContextualFragment(myCard);
   myCardsDiv.appendChild(myFrag);

   // Delete Card Button
   const removeButton = document.createElement('button');
   removeButton.textContent = 'Remove Card';
   removeButton.classList.add('remButton');
   myCardsDiv.appendChild(removeButton);
}

const myCardsDiv = document.createElement('div');
myCardsDiv.classList.add('cards');
myDiv.insertAdjacentElement('beforebegin', myCardsDiv);


generatePlayerCard('Mike', 27, '6ft');
generatePlayerCard('Eileen', 26, '5ft 6in');
generatePlayerCard('Ivy', 5, '2ft');
generatePlayerCard('VJ', 27, '6ft');

const deleteHandler = document.querySelector('.remButton');
deleteHandler.addEventListener('click', deleteCard());

// Make a div

// add a class of wrapper to it

// put it into the body

// make an unordered list

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

// create an image

// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
