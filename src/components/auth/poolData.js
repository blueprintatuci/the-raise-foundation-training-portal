import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-2_iRsS9EAPT",
    ClientId: "2pklf704q8vni1ifm7g4ohpup8",
};

export default new CognitoUserPool(poolData);
