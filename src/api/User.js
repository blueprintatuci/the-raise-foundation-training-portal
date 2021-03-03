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

export default {
    getUserById,
};
