import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Styles = styled.div`
    width: 400px;
    margin: 30px;
    font-family: Raleway;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    img {
        width: 100%;
    }

    .video-card:hover {
        cursor: pointer;
        opacity: 80%;
    }

    .video-info {
        align-items: center;
        margin: 13px 13px 0 13px;

        .video-title {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .video-participants {
            margin-bottom: 0.8rem;
        }
        div {
            h3 {
                font-weight: 600;
                font-size: 1.375em;

                @media only screen and (max-width: 800px) {
                    font-size: 1.125em;
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

    .participant {
        margin-right: 5px;
        margin-bottom: 1rem;
        font-weight: 400;
        font-size: 1.125em;
        @media only screen and (max-width: 800px) {
            font-size: 0.875em;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        color: black;
    }
`;
const VideoCard = (video) => {
    const watchVideo = () => {};
    return (
        <Styles>
            <StyledLink
                to={{
                    pathname: `videos/watch/${video.video_id}`,
                }}
            >
                <div className="video-card" onClick={watchVideo}>
                    <img src={video.thumbnail} />
                    <div className="video-info">
                        <div className="video-title">
                            <h3>{video.title}</h3>
                            <h2>{video.duration}min</h2>
                        </div>
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
            </StyledLink>
        </Styles>
    );
};

export default VideoCard;
