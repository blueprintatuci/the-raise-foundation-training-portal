import styled from "styled-components";

import facebook from "../../assets/icons/facebook.png"
import linkedin from "../../assets/icons/linkedin.png"
import twitter from "../../assets/icons/twitter.png"

const Styles = styled.div`
    width: 100%;
    
    background: rgb(1,131,225);
    background: linear-gradient(90deg, rgba(1,131,225,1) 0%, rgba(90,184,253,1) 100%);

    display: flex;
    justify-content: space-between;

    font-family: 'Raleway', sans-serif;
    font-size: large;
    color: white;
    
    div {
        padding: 50px;
        flex-grow: 1;
        flex-basis: 0;
    }

    p {
        margin: 0;
    }

    a {
        color: white;
    }

    .contact {
        text-align: center
    }

    .donate-button {
        text-transform: uppercase;
        text-decoration: none;

        a {
            width: 50%
        }
        div {
            background-color: rgb(0, 0, 0, 0.5);
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            height: 40px;
            padding: 0px;
            text-align: center;
            font-weight: 600;
        }

    }

    .links-social {
        display: flex;
        justify-content: center;
        padding: 0;

        img {
            margin: 10px;
            width: 40px;
            height: 40px;
        }
    }

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        
        div {
            padding: 0;
            margin: 20px 0;
        }

        .address {
            text-align: center;
        }

        .links-social {
            margin: 5px 0;
        }
    }
`;

const Footer = () => {
    return (
        <Styles>
            <div className="address">
                <p><b>The Raise Foundation</b></p>
                <p>2900 Bristol St Suite J-201</p>
                <p>Costa Mesa, CA 92626</p>
            </div>

            <div className="contact">
                <p><b>Contact Us</b></p>
                <p><a href="tel:7148843421">714.884.3421</a></p>
                <p><a href="mailto:info@theraisefoundation.org">info@theraisefoundation.org</a></p>
            </div>

            <div className="links">
                <a className="donate-button" href="http://theraisefoundation.org/donate/">
                    <div>
                        Donate
                    </div>
                </a>
                <div className="links-social">
                    <a href="https://www.facebook.com/TheRaiseFoundation/"><img src={facebook} /></a>
                    <a href="https://www.linkedin.com/company/the-raise-foundation"><img src={linkedin} /></a>
                    <a href="https://twitter.com/raisefoundation"><img src={twitter} /></a>
                </div>
            </div>
        </Styles>
    )
}

export default Footer;
