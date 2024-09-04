document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'AIzaSyCjLsr1nJ8X1QbZ7yVgMI6TdXNdCwAF-kA';

    const routes = {
        '#about': loadAbout,
        '#top-selling': loadTopSelling,
        '#book-detail': loadBookDetail,
        '#contact': loadContact
    };

    const contentDiv = document.getElementById('content');

    function loadContent() {
        const hash = window.location.hash || '#about';
        const route = routes[hash];
        if (route) {
            route();
        }
    }

    function loadAbout() {
        contentDiv.innerHTML = `
            <div class="large-font">
                <h2>About</h2>
                <p>This website is a prestigious platform for buying books. We offer a vast collection of books across various genres, ensuring that every reader finds something to their liking. Our mission is to promote reading by providing easy access to books for everyone. We collaborate with publishers worldwide to bring the best books to our customers. Our platform is user-friendly, making the book-buying process seamless and enjoyable. Customer satisfaction is our top priority, and we strive to provide exceptional service at all times.</p>
            </div>
        `;
    }

    function loadTopSelling() {
        contentDiv.innerHTML = `
            <div>
                <h2>Top Selling Books</h2>
                <input type="text" id="search-bar" placeholder="Search for a book...">
                <div id="books-list"></div>
            </div>
        `;
        fetchBooks('bestseller');
        document.getElementById('search-bar').addEventListener('input', searchBooks);
    }

    function loadBookDetail() {
        contentDiv.innerHTML = `
            <div id="book-detail">
                <h2>Book Detail</h2>
                <div id="detail-content"></div>
                <button id="buy-button">Buy</button>
            </div>
        `;
    }

    function loadContact() {
        contentDiv.innerHTML = `
            <div>
                <h2>Contact</h2>
                <p>Email: sharksbooksellers@example.com</p>
                <p>Phone: 123-456-7890</p>
                <p>Address: 123 Book St, Book City, BK 12345</p>
                <p>Office Hours: Monday - Friday, 9 AM - 6 PM</p>
            </div>
        `;
    }

    function fetchBooks(query) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                displayBooks(data.items);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
                document.getElementById('books-list').innerHTML = '<p>Error loading books.</p>';
            });
    }

    function displayBooks(books) {
        const booksList = document.getElementById('books-list');
        booksList.innerHTML = books.slice(0, 10).map(book => `
            <div class="book-item" data-id="${book.id}">
                <h3>${book.volumeInfo.title}</h3>
                <p>${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
            </div>
        `).join('');
        document.querySelectorAll('.book-item').forEach(item => {
            item.addEventListener('click', () => {
                const bookId = item.getAttribute('data-id');
                window.location.hash = '#book-detail';
                loadBookDetailById(bookId);
            });
        });
    }

    function searchBooks() {
        const query = document.getElementById('search-bar').value.toLowerCase();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const filteredBooks = data.items.filter(book => book.volumeInfo.title.toLowerCase().includes(query));
                displayBooks(filteredBooks.length ? filteredBooks : [{ volumeInfo: { title: 'No record found', authors: [] } }]);
            });
    }

    function loadBookDetailById(id) {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`)
            .then(response => response.json())
            .then(book => {
                const detailContent = document.getElementById('detail-content');
                detailContent.innerHTML = `
                    <h3>${book.volumeInfo.title}</h3>
                    <p>${book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                    <p>${book.volumeInfo.description ? book.volumeInfo.description : 'No description available'}</p>
                    <p>Price: ${book.saleInfo.listPrice ? '$' + book.saleInfo.listPrice.amount : 'Not for sale'}</p>
                `;
            })
            .catch(error => {
                console.error('Error fetching book detail:', error);
                document.getElementById('detail-content').innerHTML = '<p>Error loading book detail.</p>';
            });
    }

    window.addEventListener('hashchange', loadContent);
    loadContent();
});
