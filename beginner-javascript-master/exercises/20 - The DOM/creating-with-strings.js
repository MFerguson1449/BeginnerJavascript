const item = document.querySelector('.item');

const width = 300;
const src = `https://source.unsplash.com/random/${width}`;
const desc = `Cute pup`;
const myHTML = `
   <div class='wrapper'>
      <h2>Cute Pup</h2>
      <img src='${src}' alt='${desc}'/>
   </div>
   `;

// Turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.append(myFragment);
