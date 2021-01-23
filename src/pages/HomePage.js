import CreatorProfile from "../components/homepage/CreatorProfile";

import styled from "styled-components";

const Styles = styled.div`
  font-family: 'Raleway', sans-serif;

  .ace-header {
    display: flex;
    margin: 50px 0;
  }

  .ace-header-title {
    padding-left: 50px;
  }

  .ace-header-img {
    width: 500px
  }

  .content {
    margin: 50px auto;
    text-align: center;
    width: 80%;
  }

  .content-creators {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .temp {
    margin: 50px 0;
    text-align: center;
  }

  .about {
    display: flex;
  }

  .about-header {
    flex-basis: 40%;
    flex-shrink: 0;
  }

  .about-header-title {
    padding: 0 50px
  }

  .about-body {
    padding-right: 50px;
  }

  .logos {

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
          <button>Get Started</button>
        </div>
        <img className="ace-header-img" src="" />
      </div>
      
      <div className="content">
        <h3>With Content Featuring</h3>
        <div className="content-creators">
          <CreatorProfile imgSrc="" name="Dr. Gerado Canul" title="Clinical Psychologist" />
          <CreatorProfile imgSrc="" name="Dr. Mark Macmilin" title="Clinical Psychologist" />
          <CreatorProfile imgSrc="" name="Dr. Bina Parekh" title="Pain Psychologist" />
          <CreatorProfile imgSrc="" name="Dr. Kim Vander Dussen" title="Play Therapist" />
        </div>
      </div>

      <div className="temp">
        <h3><a href="#">Sign Up or Log In</a> to Access Training Content Now!</h3>
        <i>Or, continue as a <a href="#">guest</a></i>
      </div>

      <div className="about">
        <div className="about-header">
          <div className="about-header-title">
            <a href="#">About the Training Portal</a>
            <h2>Accessible Training for Communities is Our Mission</h2>
          </div>
          <img />
        </div>
        <div className="about-body">
          <p>
          <a href="#">The Raise Foundation</a>, convening <b>Orange County's Child Abuse Prevention Council</b>, has collaborated with <b>The Chicago School of Professional Psychology</b> as grantees for the statewide ACEs Aware Initiative. 
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

      </div>
    </Styles>
      
  )
}

export default HomePage;