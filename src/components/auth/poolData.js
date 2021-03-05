import { CognitoUserPool } from "amazon-cognito-identity-js";

// UserPoolId: "us-east-2_4YSyhv0yv",
// ClientId: "75ko0feo5lalfnakq1uhsviuks",
const poolData = {
    UserPoolId: "us-east-2_Md8uRvuyb",
    ClientId: "36mu0h9v4f8lg7o8kqg0chucon",
};

export default new CognitoUserPool(poolData);
