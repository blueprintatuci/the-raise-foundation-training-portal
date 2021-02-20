import Socket from "./Socket";

async function getUserById(userId) {
    const props = {
        baseURL: "https://x5t2xc1swj.execute-api.us-east-2.amazonaws.com/devel", // Base URL
        url: `/user/${userId}`, // Path of URL
    };

    return await Socket.GET(props);
}

export default {
    getUserById,
};
