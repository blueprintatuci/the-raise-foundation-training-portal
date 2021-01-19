import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_4YSyhv0yv",
    ClientId: "75ko0feo5lalfnakq1uhsviuks",
};

export default new CognitoUserPool(poolData);
