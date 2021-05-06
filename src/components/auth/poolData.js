import { CognitoUserPool } from "amazon-cognito-identity-js";

// UserPoolId: "us-east-2_4YSyhv0yv",
// ClientId: "75ko0feo5lalfnakq1uhsviuks",
const poolData = {
    UserPoolId: "us-east-2_muA6NyajR",
    ClientId: "1n9qp1lc8po9srhtrp21samnd2",
};

export default new CognitoUserPool(poolData);
