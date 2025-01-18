// Book data for different regions
const bookData = {
    europe: {
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: "Historical Fiction",
        summary: "A historical novel that explores the impact of the Napoleonic wars on Russian society.",
    },
    asia: {
        title: "The Tale of Genji",
        author: "Murasaki Shikibu",
        genre: "Classic Japanese Literature",
        summary: "Considered the world's first novel, it chronicles the life and loves of the noble Genji.",
    },
    america: {
        title: "Moby Dick",
        author: "Herman Melville",
        genre: "Adventure Fiction",
        summary: "A sailor's quest for revenge against the white whale that left him maimed.",
    }
};

// DOM elements
const map = document.getElementById('map');
const bookInfo = document.getElementById('book-info');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookGenre = document.getElementById('book-genre');
const bookSummary = document.getElementById('book-summary');
const markReadBtn = document.getElementById('mark-read-btn');
const addToListBtn = document.getElementById('add-to-list-btn');

// Function to display book information
function displayBookInfo(region) {
    const book = bookData[region];
    if (book) {
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookGenre.textContent = book.genre;
        bookSummary.textContent = book.summary;
        bookInfo.style.display = 'block';

        // Save the region in localStorage
        localStorage.setItem('lastRegion', region);
    }
}

// Event listeners for regions
document.getElementById('europe').addEventListener('click', () => displayBookInfo('europe'));
document.getElementById('asia').addEventListener('click', () => displayBookInfo('asia'));
document.getElementById('america').addEventListener('click', () => displayBookInfo('america'));

// Mark as Read functionality
markReadBtn.addEventListener('click', () => {
    const region = localStorage.getItem('lastRegion');
    if (region) {
        alert(`You marked "${bookData[region].title}" as read!`);
    }
});

// Add to Reading List functionality
addToListBtn.addEventListener('click', () => {
    const region = localStorage.getItem('lastRegion');
    if (region) {
        alert(`You added "${bookData[region].title}" to your reading list!`);
    }
});
