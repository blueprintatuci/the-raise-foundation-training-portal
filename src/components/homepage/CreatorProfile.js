import styled from "styled-components";

const Styles = styled.div`
  text-align: center;
  margin: 10px;
  flex-basis: 0;
  flex-grow: 1;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  p {
    margin: 0;
  }
`;

const CreatorProfile = ({imgSrc, name, title}) => {
  return (
        <Styles>
            <img src={imgSrc} />
            <p><b>{name}</b></p>
            <p><i>{title}</i></p>
        </Styles>
    )
}

export default CreatorProfile;