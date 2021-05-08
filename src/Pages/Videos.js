import React from "react";
import styled from "styled-components";

import VideoCard from "../components/videos/VideoCard";
import lockIcon from "../assets/icons/lock.png";
//background: #f1f1f1;
const Styles = styled.div`
    font-family: 'Raleway';

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
        background-color: #60BCC5;
        color: #fff;
        border: none;

        width: 300px;
        height: 70px;

        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: 2em;
            margin: auto 10px;
        }

        img {
            width: 44px;
            height: 44px;
        }

        @media only screen and (max-width: 800px) {
            width: 80%;
        }
    }

    button:disabled {
        background-color: #EAEAEA;
        color: #000;
    }

    .video-library {
        margin: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

const Videos = () => {
    // Dummy Data
    // userName and videos should be pulled from the backend
    const userName = "Chase";
    const videos = [
        {
            title: "Recognizing the Nature and Extent of Prejudice", 
            thumbnail: "https://img.youtube.com/vi/21X5lGlDOfg/maxresdefault.jpg",
            author: "Dr. Gerardo Canul",
            length: "60m",
            isComplete: true,
        },
        {
            title: "ACEs Awareness and Prevention Workshop", 
            thumbnail: "https://img.youtube.com/vi/z9eoubnO-pE/maxresdefault.jpg",
            author: "Dr. Mark MacMillin",
            length: "55m",
            isComplete: true,
        },
        {
            title: "Understanding the Neurobiology of Trauma", 
            thumbnail: "https://img.youtube.com/vi/A0FZIwabctw/maxresdefault.jpg",
            author: "Dr. Kim Vander Dussen",
            length: "60m",
            isComplete: false,
        }
    ]
    // End Dummy Data

    var [videosWatched, totalVideos] = [0, 0];
    
    for (const video of videos) {
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
                    <p>Welcome back, {userName}</p>
                    {completedCertificate ? 
                        <h1>Training Complete</h1> :
                        <h1><b>{videosWatched}/{totalVideos}</b> Videos Watched</h1>
                    }
                </div>
                <button disabled={!completedCertificate}>
                    {!completedCertificate && <img src={lockIcon} alt="Lock Icon" />}
                    <h1>Certificate</h1>
                </button>
            </div>
            <div className="video-library">
                {videos.map(video => VideoCard(video))}
            </div>
        </Styles>
    );
};

export default Videos;
