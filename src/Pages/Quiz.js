import React, { useContext, useState } from "react";
import styled from "styled-components";
import QuizQuestion from "../components/QuizQuestion";
import { Link } from "react-router-dom";
import { AccountContext } from "../components/auth/Accounts";

const Styles = styled.div`
    background: white;

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
`;

const Quiz = (props) => {
    const { getSession } = useContext(AccountContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [accountInfo, setAccountInfo] = useState({
        city: "Irvine",
        state: "CA",
        degree_level: "Bachelor's",
        degree_focus: "Computer Science",
        occupation: "Software Engineer",
        license: "",
    });

    getSession()
        .then(() => {
            setIsLoggedIn(true);
        })
        .catch((err) => {
            console.error(err);
        });

    return (
        <Styles>
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
                <QuizQuestion />
            </div>
        </Styles>
    );
};

export default Quiz;
