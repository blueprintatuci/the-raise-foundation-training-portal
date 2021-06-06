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

    .choice-btn:hover {
        color: var(--accent-color);
    }
`;

const QuizQuestion = ({ updateUserChoices, question }) => {
    const [activeChoice, setActiveChoice] = useState();

    const selectChoice = (qid, cid) => {
        setActiveChoice(cid);
        updateUserChoices({ questionId: qid, choiceId: cid });
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
                <div className="question">
                    {question.id}. {question.question}
                </div>
                <div className="choices-container">
                    {question.choices.map((choice) => {
                        return (
                            <div
                                className="choice-btn bg-slide"
                                // style={getBackground(choice.id)}
                                onClick={() =>
                                    selectChoice(question.id, choice.id)
                                }
                            >
                                <FiberManualRecordIcon
                                    style={getRadioStyle(choice.id)}
                                />
                                <span> {choice.choice}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Styles>
    );
};

export default QuizQuestion;
