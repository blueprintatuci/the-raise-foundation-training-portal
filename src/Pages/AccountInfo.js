import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AccountOverview from "../components/accountInfo/AccountOverview";
import Demographics from "../components/accountInfo/Demographics";
import EditDemographics from "../components/accountInfo/EditDemographics";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import UserAPI from "../api/User";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useLocation, useParams } from "react-router-dom";

const Styles = styled.div`
    background: white;
    .header {
        margin-top: 3rem;
        margin: 30px;
        margin-bottom: 10px;
        display: flex;
    }
    .subheader {
        padding-top: 3rem;
        padding: 30px;
        padding-bottom: 10px;
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
        font-size: 1.7rem;
    }

    .back-button {
        color: rgb(1, 131, 225);
    }
    .back-button:hover {
        text-decoration: none;
        color: rgb(1, 131, 190);
    }

    .demographics-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 3rem;
        padding: 30px;
        padding-bottom: 10px;
        font-weight: 700;
        font-size: 1.2rem;
    }
`;

const AccountInfo = ({ jwtToken, userId }) => {
    let location = useLocation();
    console.log(location);
    const [edit, setEdit] = useState(false);

    const [toasterOpened, setToasterOpened] = useState(false);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const [accountInfo, setAccountInfo] = useState({});
    const [updatedAccountInfo, setUpdatedAccountInfo] = useState({});

    useEffect(() => {
        UserAPI.getUserById(userId, jwtToken)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    let data = res.data.users[0];

                    setAccountInfo(data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [updatedAccountInfo]);

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
        setUpdatedAccountInfo(ai);
    };

    const toggleEditDemographics = () => {
        setEdit(!edit);
    };

    return (
        <Styles>
            <div className="header">
                <div>
                    <Link className="back-button" to="/videos" block>
                        Back to Video Library
                    </Link>
                    <div className="title">Account</div>
                </div>
            </div>
            <AccountOverview accountInfo={accountInfo} />
            <div className="demographics-header">
                <div className="">Demographic Info</div>
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
            {edit ? (
                <EditDemographics
                    jwtToken={jwtToken}
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
                autoHideDuration={2000}
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
};

export default AccountInfo;
