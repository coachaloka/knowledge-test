import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';
import './Home.css';

const Home = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);
    return (
        <div>
            <div>
                <h2>Test your Kowledge</h2>
                <div className='home'>
                    {
                        allBooks.data.map(book=><Book key={book.id} book={book}/>)
                    }
                </div>
            </div>
        </div>
        
    );
};

export default Home;