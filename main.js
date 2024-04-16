import { auth, initAuth } from './auth.js';

initAuth();

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

signInBtn.addEventListener('click', () => {
  auth();  
});

signOutBtn.addEventListener('click', () => {
  signOut(getAuth()); 
});

window.addEventListener('signedin', (event) => {
  const user = event.detail;
  console.log('Signed in as:', user.displayName);
});

window.addEventListener('signedout', () => {
  console.log('Signed out');
});

window.addEventListener('authchange', (event) => {
  const user = event.detail;
  const signInBtn = document.getElementById('signInBtn');
  const signOutBtn = document.getElementById('signOutBtn');
  
  if (user) {
    signInBtn.style.display = 'none';
    signOutBtn.style.display = 'inline-block';
  } else {
    signInBtn.style.display = 'inline-block';
    signOutBtn.style.display = 'none';
  }
});
