const mike = document.querySelector('.mike');

mike.addEventListener('click', function(event) {
   console.log('You clicked it!');
   const shouldChangePage = confirm('This website might be scary! Do you wish to proceed?');
   console.log(shouldChangePage);
   if(!shouldChangePage) {
      event.preventDefault();
   }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
   event.preventDefault();
   const name = event.currentTarget.name.value;
   if(name.includes('chad')) {
      alert('This is a Chad free zone');
      event.preventDefault();
   }
});

function logEvent(event) {
   console.log(event.type);
   console.log(event.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);