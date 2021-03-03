import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AccountOverview from "../components/accountInfo/AccountOverview";
import Demographics from "../components/accountInfo/Demographics";
import EditDemographics from "../components/accountInfo/EditDemographics";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { AccountContext } from "../components/auth/Accounts";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import UserAPI from "../api/User";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

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
        font-size: 2.5rem;
    }

    .back-button {
        color: rgb(1, 131, 225);
    }
    .back-button:hover {
        text-decoration: none;
        color: rgb(1, 131, 190);
    }
`;

const AccountInfo = () => {
    const { getSession } = useContext(AccountContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [edit, setEdit] = useState(false);
    const [userId, setUserId] = useState("");
    const [jwtToken, setJwtToken] = useState("");

    const [toasterOpened, setToasterOpened] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const [accountInfo, setAccountInfo] = useState({
        city: "Irvine",
        state: "CA",
        degree_level: "Bachelor's",
        degree_focus: "Computer Science",
        occupation: "Software Engineer",
        license: "",
    });

    const openToaster = () => {
        setToasterOpened(true);
    };

    const closeToaster = () => {
        setToasterOpened(false);
    };

    const updateEditSuccess = (status) => {
        setUpdateSuccess(status);
    };

    const updateAccountInfo = (ai) => {
        setAccountInfo(ai);
    };
    getSession()
        .then((res) => {
            setIsLoggedIn(true);
            setUserId(res.accessToken.payload.username);
            setJwtToken(res.accessToken.jwtToken);

            console.log(userId);
            console.log(jwtToken);
        })
        .catch((err) => {
            console.error(err);
        });
    useEffect(() => {
        UserAPI.getUserById(userId, jwtToken)
            .then((res) => {
                if (res.status === 200) {
                    let data = res.data.Items[0];
                    let formattedData = {};
                    for (const attr in data) {
                        if (
                            attr === "first_name" ||
                            attr === "last_name" ||
                            attr === "city" ||
                            attr === "state" ||
                            attr === "phone_number" ||
                            attr === "degree_level" ||
                            attr === "degree_focus" ||
                            attr === "occupation" ||
                            attr === "license_type" ||
                            attr === "license" ||
                            attr === "email"
                        ) {
                            formattedData[attr] = data[attr].S;
                        }
                    }
                    // console.log(formattedData);
                    setAccountInfo(formattedData);
                }
            })
            .catch();
    }, [jwtToken]);

    const toggleEditDemographics = () => {
        setEdit(!edit);
    };

    if (isLoggedIn) {
        return (
            <Styles>
                <div className="header">
                    <div>
                        <Link className="back-button" to="/videos" block>
                            Back to Video Library
                        </Link>
                        <div className="title">Account</div>
                    </div>
                    {edit ? (
                        <div>
                            <IconButton
                                className="edit-button"
                                onClick={toggleEditDemographics}
                            >
                                <HighlightOffIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    ) : (
                        <div>
                            <IconButton
                                className="edit-button"
                                onClick={toggleEditDemographics}
                            >
                                <EditIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    )}
                </div>
                <AccountOverview accountInfo={accountInfo} />
                <div className="subheader">Demographic Info</div>
                {edit ? (
                    <EditDemographics
                        accountInfo={accountInfo}
                        updateAccountInfo={updateAccountInfo}
                        updateEditSuccess={updateEditSuccess}
                        openToaster={openToaster}
                        toggleEdit={toggleEditDemographics}
                    />
                ) : (
                    <Demographics accountInfo={accountInfo} />
                )}

                <Snackbar
                    open={toasterOpened}
                    onClose={closeToaster}
                    autoHideDuration={6000}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                >
                    {updateSuccess ? (
                        <MuiAlert
                            onClose={closeToaster}
                            elevation={6}
                            variant="filled"
                            severity="success"
                        >
                            Successfully updated account information
                        </MuiAlert>
                    ) : (
                        <MuiAlert
                            onClose={closeToaster}
                            elevation={6}
                            variant="filled"
                            severity="error"
                        >
                            Failed to update account information
                        </MuiAlert>
                    )}
                </Snackbar>
            </Styles>
        );
    } else {
        return <div></div>;
    }
};

export default AccountInfo;
