import React from 'react';
import {Link} from "react-router-dom";
import  Notes from "./Notes.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Notes = ({Note}) => {
    const {name, logo, total, id } = Note;

    return (
        <div className='Notes'>
            <img src={logo} alt="imge" />
            <div className='Note'>
                 <h3>{name}</h3>
                 <h3>Total: {total}</h3>
                 <Link to ={`/quizes/${id}`}>
                    <button className="btn-practice">
                        Start Practice<FontAwesomeIcon className="icon" icon={faArrowRight} />
                    </button>
                    </Link>
            </div>
        </div>
    );
};

export default Notes;
