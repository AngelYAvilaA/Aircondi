const menuLinks = document.querySelectorAll('nav a');
const content = document.getElementById('content');

function loadContent(section) {
  const url = `./sections/${section}.html`;

  fetch(url)
    .then(response => response.text())
    .then(htmlContent => {
      content.innerHTML = htmlContent;
    })
    .catch(error => {
      console.error(`Error al cargar el contenido para la sección "${section}":`, error);
      content.innerHTML = `Error al cargar el contenido para "${section}"`;
    });
}

menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const section = link.dataset.section;
    loadContent(section);
  });
});

loadContent('Inicio');