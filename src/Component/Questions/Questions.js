import React, { useState } from "react";
import Options from "../Options/Options";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import "./Questions.css";
import { Alert} from 'flowbite-react';
// import { ToastContainer } from "react-toastify";

const Questions = ({ quiz }) => {
  const { question, options, correctAnswer} = quiz;
//   console.log(question);
const [isActive, setIsActive] = useState(true);
  const handleAnsView = event => {
    setIsActive(current => !current);
  };

  return (
    <div className="q">
      {/* <ToastContainer /> */}
      <div className="qa">
        <h3>Quizes: {question.slice(3, -4)}</h3>
        <FontAwesomeIcon onClick={handleAnsView} className={isActive ? '' : 'hidden'} icon={faEye} />
        <FontAwesomeIcon onClick={handleAnsView} className={isActive ? 'hidden' : ''} icon={faEyeSlash} />
      </div>
      <div>
        {
            options.map(option=><Options key={option.id} option={option} correctAnswer={correctAnswer}/>)
        }
      </div>
        <div className={isActive ? 'hidden' : ''}>
        
                <Alert
                    color="success"
                    onDismiss={function onDismiss() { handleAnsView() }}>
                    <span>
                        <span className="font-medium">
                            Correct Answer :
                        </span>
                        {' '}{correctAnswer}
                    </span>
                </Alert>
        </div>
    </div>
  );
};

export default Questions;
