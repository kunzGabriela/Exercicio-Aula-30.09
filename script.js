const titulo = document.getElementById('meu-titulo');

setInterval(() => {
  if (titulo.style.visibility === 'hidden') {
    titulo.style.visibility = 'visible';
  } else {
    titulo.style.visibility = 'hidden';
  }
}, 500);
