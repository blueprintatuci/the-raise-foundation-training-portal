import React, { createContext, useState } from "react";
import Pool from "./poolData";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const AccountContext = createContext();

// let userSession = {};

const Account = (props) => {
    const getSession = async () => {
        return new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                });
            } else {
                console.log("no user");
                reject();
            }
        });
    };

    const authenticate = async (Username, Password) => {
        await new Promise((resolve, reject) => {
            const cognitoUser = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({
                Username,
                Password,
            });

            cognitoUser.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    resolve(data);
                },
                onFailure: (err) => {
                    reject(err);
                },
                newPasswordRequired: (data) => {
                    resolve(data);
                },
            });
        });
    };

    const logout = () => {
        const user = Pool.getCurrentUser();
        if (user) {
            user.signOut();
        }
    };

    return (
        <AccountContext.Provider
            value={{
                authenticate,
                getSession,
                logout,
                // userSession,
            }}
        >
            {props.children}
        </AccountContext.Provider>
    );
};

export { Account, AccountContext };
