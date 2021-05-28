import React, { useEffect, useState } from "react";
import styled from "styled-components";

import VideoCard from "../components/videos/VideoCard";
import lockIcon from "../assets/icons/lock.png";
import VideoAPI from "../api/Video";
import UserAPI from "../api/User";
import { useLocation, useParams } from "react-router-dom";

//background: #f1f1f1;
const Styles = styled.div`
    font-family: "Raleway";

    .video-library-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 60px 60px 30px 60px;

        p {
            margin: 0;
        }

        @media only screen and (max-width: 800px) {
            flex-direction: column;
            align-items: start;
            margin: 30px;
        }
    }

    button {
        background-color: #60bcc5;
        color: #fff;
        border: none;

        width: 250px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        span {
            font-size: 1.5rem;
            margin: auto 10px;
        }

        img {
            width: 30px;
            height: 30px;
        }

        @media only screen and (max-width: 800px) {
            width: 80%;
        }
    }

    button:disabled {
        background-color: #eaeaea;
        color: #000;
    }

    .video-library {
        margin: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .videos-status {
        font-size: 2rem;
    }
`;

const Videos = ({ userId, jwtToken }) => {
    // Dummy Data
    // userName and videos should be pulled from the backend
    const [videos, setVideos] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        console.log("getting videos");
        VideoAPI.getVideos(jwtToken)
            .then((res) => {
                if (res.status === 200) {
                    setVideos(res.data.videos);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        UserAPI.getUserById(userId, jwtToken)
            .then((res) => {
                if (res.status === 200) {
                    console.log(res);
                    setUserInfo(res.data.users[0]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const userName = "Chase";
    const testVideos = [
        {
            title: "Recognizing the Nature and Extent of Prejudice",
            thumbnail:
                "https://img.youtube.com/vi/21X5lGlDOfg/maxresdefault.jpg",
            author: "Dr. Gerardo Canul",
            length: "60m",
            isComplete: true,
        },
        {
            title: "ACEs Awareness and Prevention Workshop",
            thumbnail:
                "https://img.youtube.com/vi/z9eoubnO-pE/maxresdefault.jpg",
            author: "Dr. Mark MacMillin",
            length: "55m",
            isComplete: true,
        },
        {
            title: "Understanding the Neurobiology of Trauma",
            thumbnail:
                "https://img.youtube.com/vi/A0FZIwabctw/maxresdefault.jpg",
            author: "Dr. Kim Vander Dussen",
            length: "60m",
            isComplete: false,
        },
    ];
    // End Dummy Data

    var [videosWatched, totalVideos] = [0, 0];

    for (const video of testVideos) {
        totalVideos += 1;
        if (video.isComplete) {
            videosWatched += 1;
        }
    }

    const completedCertificate = videosWatched == totalVideos;

    return (
        <Styles>
            <div className="video-library-header">
                <div>
                    <p>Welcome back, {userInfo && userInfo.first_name}</p>
                    <div className="videos-status">
                        {completedCertificate ? (
                            <span>Training Complete</span>
                        ) : (
                            <span>
                                <b>
                                    {videosWatched}/{totalVideos}
                                </b>{" "}
                                Videos Watched
                            </span>
                        )}
                    </div>
                </div>
                <button disabled={!completedCertificate}>
                    {!completedCertificate && (
                        <img src={lockIcon} alt="Lock Icon" />
                    )}
                    <span>Certificate</span>
                </button>
            </div>
            <div className="video-library">
                {videos && videos.map((video) => VideoCard(video))}
            </div>
        </Styles>
    );
};

export default Videos;
