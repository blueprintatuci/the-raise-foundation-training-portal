import React from "react";
import styled from "styled-components";

const Styles = styled.div`
    width: 400px;
    height: 350px;
    margin: 30px;
    font-family: Raleway;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    img {
        width: 100%;
        height: 60%;
    }

    .video-info {
        align-items: center;
        margin: 13px 13px 0 13px;;

        .video-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        div {
            h3 {
                font-weight: 600;
                font-size: 1.375em;

                @media only screen and (max-width: 800px) {
                    font-size: 1.125em;
                }
            }

            p {
                font-weight: 400;
                font-size: 1.125em;
                @media only screen and (max-width: 800px) {
                    font-size: 0.875em;
                }
            }
        }

        h2 {
            font-size: 1.56em;
            
            @media only screen and (max-width: 800px) {
                font-size: 1.25em;
            }
        }
    }

    .video-status {
        text-transform: uppercase;
        font-size: 0.75em;
        margin: 0 13px;

        .emoji {
            margin: 0 5px 0 0;
        }
    }

    @media only screen and (max-width: 800px) {
        width: 100%;
        margin: 30px 0;
    }
`;

const VideoCard = (video) => {
    return (
        <Styles>
            <img src={video.thumbnail} />
            <div className="video-info">
                <div className="video-title">
                    <h3>{video.title}</h3>
                    <h2>{video.length}</h2>
                </div>
                <p>{video.author}</p>
            </div>
            <div className="video-status">
                { video.isComplete ? 
                    <p><span className="emoji">✅</span> Complete</p> : 
                    <p><span className="emoji">❌</span> Incomplete</p> 
                }
            </div>
        </Styles>
    );
};

export default VideoCard;
