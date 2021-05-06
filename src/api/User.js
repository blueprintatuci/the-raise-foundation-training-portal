import Socket from "./Socket";

async function getUserById(userId, token) {
    const props = {
        baseURL: "https://x5t2xc1swj.execute-api.us-east-2.amazonaws.com/devel", // Base URL
        url: `/user/${userId}`, // Path of URL
        headers: {
            Authorization: token,
        },
    };

    return await Socket.GET(props);
}

async function updateUserById(userId, token, payload) {
    const props = {
        baseURL: "https://x5t2xc1swj.execute-api.us-east-2.amazonaws.com/devel", // Base URL
        url: `/user/update/${userId}`, // Path of URL
        headers: {
            Authorization: token,
        },
        data: payload,
    };

    return await Socket.PUT(props);
}

export default {
    getUserById,
    updateUserById,
};
