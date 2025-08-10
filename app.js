document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    window.addEventListener('hashchange', loadPage);
    loadPage();

    function loadPage() {
        const hash = location.hash.replace('#', '');
        content.innerHTML = `<h2>${hash || 'Inicio'}</h2><p>Contenido dinámico para ${hash || 'la página principal'}.</p>`;
    }
});
