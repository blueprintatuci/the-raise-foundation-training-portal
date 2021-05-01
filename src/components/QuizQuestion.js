import React, { useContext, useState } from "react";
import styled from "styled-components";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Styles = styled.div`
    .question-container {
        margin-bottom: 2rem;
    }
    .question {
        font-size: 1.2rem;
    }

    .choices-container {
        margin-top: 16px;
    }
    .choice-btn {
        padding: 16px 10px;
        background-color: var(--background-color);
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        border: none;
        outline: none;
        position: relative;
        cursor: pointer;

        --background-color: #f1f1f1;
        --accent-color: #60bcc5;
    }

    .choice-btn span {
        padding-left: 10px;
    }
`;

const sampleChoices = [
    { id: "1", text: "Choice 1", isCorrect: true },
    { id: "2", text: "Choice 2", isCorrect: false },
    { id: "3", text: "Choice 3", isCorrect: false },
    { id: "4", text: "Choice 4", isCorrect: false },
];

const QuizQuestion = ({ updateUserChoices, number, questionObj, choices }) => {
    const [activeChoice, setActiveChoice] = useState();

    const selectChoice = (id) => {
        setActiveChoice(id);
        updateUserChoices({ questionId: 1, choiceId: id });
    };

    const getRadioStyle = (id) => {
        if (id === activeChoice) {
            return { color: "#60BCC5", fontSize: "40px" };
        }
        return { color: "white", fontSize: "40px" };
    };

    return (
        <Styles>
            <div className="question-container">
                <div className="question">1. Sample Question?</div>
                <div className="choices-container">
                    {sampleChoices.map((choice) => {
                        return (
                            <div
                                className="choice-btn bg-slide"
                                // style={getBackground(choice.id)}
                                onClick={() => selectChoice(choice.id)}
                            >
                                <FiberManualRecordIcon
                                    style={getRadioStyle(choice.id)}
                                />
                                <span> {choice.text}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Styles>
    );
};

export default QuizQuestion;
