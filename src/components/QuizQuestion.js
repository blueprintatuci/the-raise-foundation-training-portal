import React, { useContext, useState } from "react";
import styled from "styled-components";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Styles = styled.div`
    .question {
        font-size: 1.2rem;
    }

    .choices-container {
        margin-top: 16px;
    }
    .choice {
        padding: 16px 10px;
        background: #f1f1f1;
        margin-bottom: 10px;
        display: flex:
        align-items: center
    }

    .choice:hover{
        border: none
    }

    .choice span{
        padding-left: 10px
    }
`;

const sampleChoices = [
    { id: "1", text: "Choice 1", isCorrect: true },
    { id: "2", text: "Choice 2", isCorrect: false },
    { id: "3", text: "Choice 3", isCorrect: false },
    { id: "4", text: "Choice 4", isCorrect: false },
];

const QuizQuestion = ({ number, question, choices }) => {
    const [activeChoice, setActiveChoice] = useState();

    const selectChoice = (id) => {
        setActiveChoice(id);
    };

    const getRadioStyle = (id) => {
        if (id === activeChoice) {
            return { color: "#60BCC5", fontSize: "40px" };
        }
        return { color: "white", fontSize: "40px" };
    };

    return (
        <Styles>
            <div>
                <div class="question">1. Sample Question?</div>
                <div class="choices-container">
                    {sampleChoices.map((choice) => {
                        return (
                            <div
                                class="choice"
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
