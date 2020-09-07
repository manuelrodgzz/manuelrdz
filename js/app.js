let mail = 'hola', domain = 'manuelrdz.com'

let element = document.getElementById('email')

element.setAttribute('href', `mailto:${mail}@${domain}`);

element.innerHTML = `${mail}@${domain}`