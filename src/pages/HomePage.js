import CreatorProfile from "../components/homepage/CreatorProfile";
import GradientButton from "../components/standard/GradientButton";

// Logos
import acesLogo from "../assets/logos/aces-aware.png";
import chicagoSchoolLogo from "../assets/logos/chicago-school.png";
import raiseLogoBlue from "../assets/logos/raise_logo_background.png";

// Images
import beachPicture from "../assets/stock/unsplash-natalya-zaritskaya.png";
import pinwheelPicture from "../assets/illustrations/pinwheel.png";
import studyingPicture from "../assets/stock/unsplash-windows.png";

// People Pictures
import anonymousPicture from "../assets/people/anonymous.png";
import canulPicture from "../assets/people/gerardo-canul.png";
import macmilinPicture from "../assets/people/mark-macmilin.png";
import parekhPicture from "../assets/people/bina-parekh.png";
import vanderPicture from "../assets/people/kim-vander.png";

import styled from "styled-components";

const Styles = styled.div`
  background-color: white;
  font-family: 'Raleway', sans-serif;

  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-weight: 600;
  }

  .ace-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .ace-header-title {
    padding-top: 50px;
    padding-left: 50px;
    width: 50%;
    font-size: larger;
    height: auto;
  }

  .ace-header-img {
    max-width: 50%;
    height: auto;
  }

  .ace-header-button-container {
    width: 250px;
  }

  .content {
    text-align: center;
    width: 100%;
  }

  .content-creators {
    display: flex;
    flex-wrap: wrap;
    margin: 0 50px;
    justify-content: space-evenly;
  }

  .signup-prompt {
    margin: 50px 0;
    text-align: center;
  }

  .picture-divider {
    margin: 50px;

    img {
      width: 100%;
    }
  }

  .about {
    display: flex;
  }

  .about-header {
    flex-basis: 40%;
    flex-shrink: 0;
  }

  .about-header-title {
    padding: 0 50px;
    
    a {
      text-transform: uppercase;
    }
  }

  .about-header img {
    width: 100%;
    max-width: 350px;
    transform: rotate(45deg);
    margin: -50px;
  }

  .about-body {
    padding-right: 50px;
    font-size: 1.25rem;
  }

  .logos {
    display: flex;
    justify-content: space-evenly;
    margin: 50px 50px 100px 50px;

    a {
      height: 100px;
      flex-grow: 1;
      flex-basis: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
`;

const HomePage = () => {
  return (
    <Styles>
      <div className="ace-header">
        <div className="ace-header-title">
          <h1>On Demand ACEs Training</h1>
          <p>
            Adverse Childhood Experiences (ACEs) are a public health crisis. The Raise Foundation is here to provide you with essential training on this topic at your pace.                    
          </p>
          <div className="ace-header-button-container">
            <GradientButton text="Get Started" />
          </div>
        </div>
        <img className="ace-header-img" src={beachPicture} />
      </div>
      
      <div className="content">
        <h3>With Content Featuring</h3>
        <div className="content-creators">
          <CreatorProfile imgSrc={canulPicture} name="Dr. Gerado Canul" title="Clinical Psychologist" />
          <CreatorProfile imgSrc={macmilinPicture} name="Dr. Mark Macmilin" title="Clinical Psychologist" />
          <CreatorProfile imgSrc={parekhPicture} name="Dr. Bina Parekh" title="Pain Psychologist" />
          <CreatorProfile imgSrc={vanderPicture} name="Dr. Kim Vander Dussen" title="Play Therapist" />
          <CreatorProfile imgSrc={anonymousPicture} name="+ More!" />
        </div>
      </div>

      <div className="signup-prompt">
        <h3><a href="/signup">Sign Up or Log In</a> to Access Training Content Now!</h3>
        <i>Or, continue as a <a href="#">guest</a></i>
      </div>

      <div className="picture-divider">
        <img src={studyingPicture} />
      </div>

      <div className="about">
        <div className="about-header">
          <div className="about-header-title">
            <a href="/about">About the Training Portal</a>
            <h2>Accessible Training for Communities is Our Mission</h2>
          </div>
          <img src={pinwheelPicture} />
        </div>
        <div className="about-body">
          <p>
          <a href="http://theraisefoundation.org/">The Raise Foundation</a>, convening <b>Orange County's Child Abuse Prevention Council</b>, has collaborated with <b>The Chicago School of Professional Psychology</b> as grantees for the statewide ACEs Aware Initiative. 
          ACEs Aware is an initiative led by the Office of the California Surgeon General and the Department of Health Care Services to give Medi-Cal providers training, clinical protocols, and payment for screening children and adults for ACEs. 
          </p>
          <p>
          As Provider Engagement Grantees, The Raise Foundation and The Chicago School of Professional Psychology have provided 4 online trainings thus far to over 1,800 medical and behavioral health providers, social workers, clinicians, and graduate level clinical intern students. 
          These comprehensive trainings have resulted in more than 1,000 CEUs being distributed, excellent feedback regarding curriculum and quality of educators, and the development of Orange County specific networks of care. 
          </p>
          <p>
          While these trainings were conducted live, this portal was designed to give providers and community members alike the opportunity to attend these trainings at their own leisure. 
          Please sign up for more information on upcoming trainings and activities. 
          </p>
          <p>
          Thank you for your engagement!
          </p>
        </div>
      </div>

      <div className="logos">
        <a href="https://www.thechicagoschool.edu/">
          <img src={chicagoSchoolLogo} />
        </a>
        <a href="http://theraisefoundation.org/">
          <img src={raiseLogoBlue} />
        </a>
        <a href="https://www.acesaware.org/">
          <img src={acesLogo} />
        </a>
      </div>
    </Styles>
      
  )
}

export default HomePage;