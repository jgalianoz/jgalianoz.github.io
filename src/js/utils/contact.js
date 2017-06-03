const axios = require('axios');

const contactForm = document.getElementById('contact-form');
const messaje = document.getElementById('messageSend');

const baseUrl = "https://formspree.io/jgalianoz.dev@gmail.com"

contactForm.addEventListener('submit', function(ev) {
  ev.preventDefault();

  axios({
    method: 'POST',
    url: baseUrl,
    data: new FormData(contactForm),
    responseType: 'json',
  })
  .then(function(response) {
    messaje.classList.add('messaje-ok');
    messaje.innerHTML = 'Tu mensaje ha sido enviado con exito'
    ev.target.reset();
  })
  .catch(function(err) {
    messaje.classList.add('messaje-err');
    messaje.innerHTML = 'Lo siento algo estuvo mal, intento de nuevo.'
  })
});
