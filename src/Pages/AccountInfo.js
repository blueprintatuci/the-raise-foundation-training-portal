import React from "react";
import styled from "styled-components";
import AccountOverview from "../components/accountInfo/AccountOverview";
import { Link } from "react-router-dom";

const Styles = styled.div`
    background: white;
    .header {
        margin-top: 3rem;
        margin: 30px;
        margin-bottom: 10px;
    }
    .title {
        font-weight: 800;
        font-size: 2rem;
    }

    .back-button {
        color: rgb(1, 131, 225);
    }
    .back-button:hover {
        text-decoration: none;
        color: rgb(1, 131, 190);
    }
`;

const Account = () => {
    return (
        <Styles>
            <div className="header">
                <Link className="back-button" to="/videos" block>
                    Back to Video Library
                </Link>
                <div className="title">Account</div>
            </div>
            <AccountOverview />
        </Styles>
    );
};

export default Account;
