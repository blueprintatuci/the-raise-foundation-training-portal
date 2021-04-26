import React from "react";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Styles = styled.div`
    .overview-container {
        font-family: "Raleway", sans-serif;
        background: #f1f1f1;
        margin: 30px;
        margin-top: 0;
        border-radius: 15px;
        padding: 15px;
        display: flex;
        align-items: center;
        max-width: 550px;
    }
    .initials-avatar {
        margin: 1rem;
        width: 80px;
        height: 80px;
        background: white;
        font-size: 2.5rem;
        color: rgb(1, 131, 225);
        color: linear-gradient(
            90deg,
            rgba(1, 131, 225, 1) 0%,
            rgba(90, 184, 253, 1) 100%
        );
    }
    .overview-info {
        padding-left: 1rem;
    }
    .fullname {
        height: 30px;
        font-weight: 800;
        font-size: 1.5rem;
    }
    .joined {
        font-size: 0.9rem;
        font-style: italic;
        margin-bottom: 1rem;
    }

    .email {
        font-size: 0.8rem;
        // padding-top: 2px;
    }

    .reset-password {
        background: #60bcc5;
        border: none;
        font-size: 0.8rem;
        margin-bottom: 5px;
    }
`;

const AccountOverview = ({ accountInfo }) => {
    const formatDate = (date) => {
        if (date) {
            let fd = new Date(date);
            return `${fd.toLocaleString("default", {
                month: "long",
            })} ${fd.getFullYear()}`;
        }
        return date;
    };
    return (
        <Styles>
            <div className="overview-container">
                <Avatar className="initials-avatar">
                    {accountInfo.first_name && (
                        <div>
                            {accountInfo.first_name[0]}
                            {accountInfo.last_name[0]}
                        </div>
                    )}
                </Avatar>
                <div className="overview-info">
                    <div className="fullname">
                        {accountInfo.first_name} {accountInfo.last_name}
                    </div>
                    <div className="joined">
                        joined {formatDate(accountInfo.createdAt)}
                    </div>

                    <Row>
                        <Col>
                            <div>Email</div>
                            <div className="email">{accountInfo.email}</div>
                        </Col>
                        <Col>
                            <div>Password</div>
                            <div>
                                <Button className="reset-password">
                                    Reset Password
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Styles>
    );
};

export default AccountOverview;
