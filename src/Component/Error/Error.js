import React from 'react';
import { Link } from "react-router-dom";
const Error = () => {

    return (
        <div>
            <div>
                <h1>404</h1>
                <p>Something is missing.</p>
                <p>
                    Sorry, we can't find that page.{""}
                </p>
                <button>
                    <Link to="./">Back to Homepage</Link>
                </button>
            </div> 
        </div>
    );
};

export default Error;