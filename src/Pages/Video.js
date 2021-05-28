import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Styles = styled.div`
    width: 70%;
    font-family: "Raleway";
    margin: 50px auto;
    display: block;

    .video-info {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-weight: 600;
            font-size: 2.5em;
            @media only screen and (max-width: 800px) {
                font-size: 1.875em;
            }
        }

        h2 {
            font-weight: 400;
            font-size: 1.875em;
            @media only screen and (max-width: 800px) {
                font-size: 1.25em;
            }
        }
    }

    .video-description {
        margin-bottom: 30px;
    }

    .video-status {
        text-transform: uppercase;
        font-size: 1.25em;
        margin-left: 30px;
        width: 25%;
        text-align: right;

        .emoji {
            margin: 0 5px 0 0;
        }

        @media only screen and (max-width: 800px) {
            display: none;
        }
    }

    .video-player {
        overflow: hidden;
        /* 16:9 aspect ratio */
        padding-top: 56.25%;
        position: relative;
        margin-bottom: 60px;
    }

    .video-player iframe {
        border: 0;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .quiz-section {
        display: flex;
        justify-content: center;

        a {
            text-decoration: none;
            width: 330px;
            height: 88px;

            div {
                display: flex;
                align-items: center;
                justify-content: center;

                background-color: #0083e1;
                color: #fff;
                font-size: 2em;
                font-weight: 600;
            }

            @media only screen and (max-width: 800px) {
                width: 70%;
            }
        }
    }

    .video-participants {
        margin-bottom: 0.8rem;
        .participant {
            margin-right: 5px;
            font-weight: 400;
            font-size: 1.125em;
            @media only screen and (max-width: 800px) {
                font-size: 0.875em;
            }
        }
    }
`;

const Video = ({ location }) => {
    const { videoId } = useParams();

    console.log("Location:", location);
    const video = location.state;

    const embedUrl = (url) => {
        let finalUrl =
            url.replace("watch", "embed").replace("?v=", "/") +
            "?rel=0&modestbranding=1";
        return finalUrl;
    };
    // Dummy Data
    // Should load video info from backend.

    // const video = {
    //     title: "Recognizing the Nature and Extent of Prejudice",
    //     thumbnail: "https://img.youtube.com/vi/21X5lGlDOfg/maxresdefault.jpg",
    //     description:
    //         "A brief description about the contents of the video will go here, provided by The Raise Foundation. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus consectetur interdum. Ut sagittis id ante a tincidunt. Morbi bibendi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //     author: "Dr. Gerardo Canul",
    //     length: "60m",
    //     isComplete: true,
    // };

    return (
        <Styles>
            <a href="/videos">Back to Video Library</a>
            <div className="video-info">
                <div>
                    <h1>{video.title}</h1>
                    <div className="video-participants">
                        {video.participants.map((p) => {
                            return <span className="participant">{p}</span>;
                        })}
                    </div>
                </div>
                <div className="video-status">
                    {video.isComplete ? (
                        <p>
                            <span className="emoji">✅</span> Complete
                        </p>
                    ) : (
                        <p>
                            <span className="emoji">❌</span> Incomplete
                        </p>
                    )}
                </div>
            </div>
            <p className="video-description">{video.description}</p>
            <div className="video-player">
                <iframe
                    src={embedUrl(video.url)}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="quiz-section">
                <a href="">
                    <div>Take Quiz</div>
                </a>
            </div>
        </Styles>
    );
};

export default Video;
