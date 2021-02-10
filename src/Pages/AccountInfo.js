import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import AccountOverview from "../components/accountInfo/AccountOverview";
import Demographics from "../components/accountInfo/Demographics";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

const Styles = styled.div`
    background: white;
    .header {
        margin-top: 3rem;
        margin: 30px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
    }
    .subheader {
        margin-top: 3rem;
        margin: 30px;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 1.2rem;
    }
    .title {
        font-weight: 800;
        font-size: 2rem;
    }
    .edit-button {
        color: rgb(1, 131, 225);
        border: none;
        outline: none;
    }

    .back-button {
        color: rgb(1, 131, 225);
    }
    .back-button:hover {
        text-decoration: none;
        color: rgb(1, 131, 190);
    }
`;

const AccountInfo = (props) => {
    return (
        <Styles>
            <div className="header">
                <div>
                    <Link className="back-button" to="/videos" block>
                        Back to Video Library
                    </Link>
                    <div className="title">Account</div>
                </div>
                <div>
                    <IconButton className="edit-button">
                        <EditIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>
            <AccountOverview />
            <div className="subheader">Demographic Info</div>
            <Demographics />
        </Styles>
    );
};

export default AccountInfo;
