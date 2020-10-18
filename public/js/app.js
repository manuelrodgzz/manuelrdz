let mail = 'marg.2197', domain = 'gmail.com'

let element = document.getElementById('email')

element.setAttribute('href', `mailto:${mail}@${domain}`);

element.innerHTML = `${mail}@${domain}`