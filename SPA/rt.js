document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const links = document.querySelectorAll('nav a');

    function navigateTo(pageId) {
        pages.forEach(page => {
            page.classList.add('hidden');
            if (page.id === pageId) {
                page.classList.remove('hidden');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const pageId = link.id.split('-')[0];
            navigateTo(pageId);
            history.pushState({ pageId }, '', `#${pageId}`);
        });
    });

    window.addEventListener('popstate', (event) => {
        if (event.state && event.state.pageId) {
            navigateTo(event.state.pageId);
        } else {
            navigateTo('home');
        }
    });

    const initialPage = location.hash ? location.hash.substring(1) : 'home';
    navigateTo(initialPage);
});
