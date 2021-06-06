import Socket from "./Socket";

async function getVideos(token) {
    const props = {
        baseURL: "https://f196dw6vfd.execute-api.us-east-2.amazonaws.com/dev", // Base URL
        url: `/video/all`, // Path of URL
        headers: {
            Authorization: token,
        },
    };

    return await Socket.GET(props);
}

async function getVideoById(videoId, token) {
    const props = {
        baseURL: "https://f196dw6vfd.execute-api.us-east-2.amazonaws.com/dev", // Base URL
        url: `/video/${videoId}`, // Path of URL
        headers: {
            Authorization: token,
        },
    };

    return await Socket.GET(props);
}

export default {
    getVideos,
    getVideoById,
};
