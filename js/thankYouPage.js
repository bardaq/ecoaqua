const params = new URLSearchParams(window.location.search);
const email = params.get('user-email')
document.getElementById('user-email').innerHTML = email;

