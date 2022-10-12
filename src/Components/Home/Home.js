import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Notes from '../Notes/Notes';
import './Home.css'

const Home = () => {
    const allNotes = useLoaderData();

    return (
        <div>
            <h2>This is a home-need details. import here others component here.</h2>
            <div className='home'>
                {allNotes.data.map((note) =>(
                    <Notes key={note.id} book={note} />
                ))} 
            </div>
        </div>
    );
};

export default Home;