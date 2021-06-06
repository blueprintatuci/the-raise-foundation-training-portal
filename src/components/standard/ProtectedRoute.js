import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { AccountContext } from "../auth/Accounts";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { getSession } = useContext(AccountContext);
    const [authTokens, setAuthTokens] = useState();

    useEffect(() => {
        getSession()
            .then((res) => {
                let auth_tokens = {
                    authenticated: true,
                    jwt: res.accessToken.jwtToken,
                    userId: res.accessToken.payload.username,
                };
                setAuthTokens(auth_tokens);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    if (authTokens) {
        return authTokens.authenticated ? (
            <Route
                {...rest}
                render={(props) => {
                    return (
                        <Component
                            jwtToken={authTokens.jwt}
                            userId={authTokens.userId}
                            {...props}
                        />
                    );
                }}
            ></Route>
        ) : (
            <Redirect to="login" />
        );
    }

    return <div></div>;
};

export default ProtectedRoute;
