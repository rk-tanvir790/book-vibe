import React from 'react';
import Book from '../Book/Book';

const Books = ({ books }) => {
    return (
        <div className='py-[100px]'>
            <h1 className='font-display font-bold text-[40px] text-[#131313] text-center mb-9'>Books</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;