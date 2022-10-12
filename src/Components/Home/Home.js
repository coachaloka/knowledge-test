import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Notes from '../Notes/Notes';
import './Home.css';
import image from "../img/quiz-blue-banner-3d-style-white_123447-766.jpg"; "

const Home = () => {
    const allNotes = useLoaderData();

    return (
        <div>
            <div className="container">
                <img src={Image} alt="banner" />
                <h2>Test your Knowledge.</h2>
            </div>
            <div className="home">
                {allNotes.data.map((note) => (
                    <Notes key={note.id} book={note} />
                ))}
            </div>
        </div>
    );
};

export default Home;