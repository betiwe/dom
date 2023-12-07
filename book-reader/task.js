const book = document.querySelector('.book');
const bookFontSize = document.querySelector('.book__control_font-size');

bookFontSize.addEventListener('click', event => {
    const activeFontSize = document.querySelector('.font-size_active');
    activeFontSize.classList.remove('font-size_active');
    event.target.classList.add('font-size_active');

    if (event.target.dataset.size === 'small') {
        if (book.classList.contains('book_fs-big')) {
			book.classList.remove('book_fs-big');
		}
        book.classList.add('book_fs-small');
    } else if (event.target.dataset.size === 'big') {
        if (book.classList.contains('book_fs-small')) {
			book.classList.remove('book_fs-small');
		}
        book.classList.add('book_fs-big');
    } else {
        if (book.classList.contains('book_fs-small')) {
			book.classList.remove('book_fs-small');
		} else if (book.classList.contains('book_fs-big')) {
			book.classList.remove('book_fs-big');
		}
    }

    event.preventDefault();
});