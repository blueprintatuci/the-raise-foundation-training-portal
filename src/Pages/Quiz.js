import React, { useContext, useState } from "react";
import styled from "styled-components";
import QuizQuestion from "../components/QuizQuestion";
import { Link } from "react-router-dom";
import { AccountContext } from "../components/auth/Accounts";
import GradientButton from "../components/standard/GradientButton";

const Styles = styled.div`
    background: white;
    font-family: "Raleway";

    @media only screen and (min-width: 800px) {
        padding-left: 5.5rem;
        padding-right: 5.5rem;
    }

    .header {
        margin-top: 3rem;
        margin: 30px;
        margin-bottom: 10px;
    }
    .subheader {
        margin-bottom: 50px;
        font-size: 0.9rem;
    }
    .questions {
        margin: 10px 30px;
    }
    .title {
        font-weight: 500;
        font-size: 2rem;
    }
    .edit-button {
        color: rgb(1, 131, 225);
        border: none;
        outline: none;
        font-size: 2.5rem;
    }

    .back-button {
        color: red;
    }

    .button-container {
        display: flex;
        justify-content: center;
        padding-bottom: 1rem;
    }
`;

const sampleQuestions = [
    {
        id: 1,
        text: "Sample Question?",
        choices: [
            { id: "1", text: "Choice 1", isCorrect: true },
            { id: "2", text: "Choice 2", isCorrect: false },
            { id: "3", text: "Choice 3", isCorrect: false },
            { id: "4", text: "Choice 4", isCorrect: false },
        ],
    },
    {
        id: 2,
        text: "Sample Question?",
        choices: [
            { id: "1", text: "Choice 1", isCorrect: true },
            { id: "2", text: "Choice 2", isCorrect: false },
            { id: "3", text: "Choice 3", isCorrect: false },
            { id: "4", text: "Choice 4", isCorrect: false },
        ],
    },
    {
        id: 3,
        text: "Sample Question?",
        choices: [
            { id: "1", text: "Choice 1", isCorrect: true },
            { id: "2", text: "Choice 2", isCorrect: false },
            { id: "3", text: "Choice 3", isCorrect: false },
            { id: "4", text: "Choice 4", isCorrect: false },
        ],
    },
    {
        id: 4,
        text: "Sample Question?",
        choices: [
            { id: "1", text: "Choice 1", isCorrect: true },
            { id: "2", text: "Choice 2", isCorrect: false },
            { id: "3", text: "Choice 3", isCorrect: false },
            { id: "4", text: "Choice 4", isCorrect: false },
        ],
    },
];

const Quiz = (props) => {
    // Test binding
    const [userChoices, setUserChoices] = useState([
        { questionId: 1, choiceId: 2 },
        { questionId: 2, choiceId: 2 },
        { questionId: 3, choiceId: 2 },
        { questionId: 4, choiceId: 2 },
    ]);

    const updateUserChoices = (choice) => {
        let newChoices = [...userChoices];
        let foundIndex = userChoices.findIndex(
            (c) => c.questionId === choice.questionId
        );
        newChoices[foundIndex] = choice;
        setUserChoices(newChoices);
    };
    return (
        <Styles>
            {userChoices.map((uc) => {
                return (
                    <div style={{}}>
                        {`{questionId: ${uc.questionId}, choiceId: ${uc.choiceId}}`}
                    </div>
                );
            })}
            <div className="header">
                <div>
                    <Link className="back-button" to="/videos" block>
                        Exit
                    </Link>
                    <div className="title">QUIZ: </div>
                </div>
                <div className="subheader">
                    Select the choice that best answers the question.
                </div>
            </div>

            <div className="questions">
                {sampleQuestions.map((question) => {
                    return (
                        <QuizQuestion
                            updateUserChoices={updateUserChoices}
                            question={question}
                        />
                    );
                })}
            </div>

            <div className="button-container">
                <GradientButton width="350px" text="Submit" />
            </div>
        </Styles>
    );
};

export default Quiz;
