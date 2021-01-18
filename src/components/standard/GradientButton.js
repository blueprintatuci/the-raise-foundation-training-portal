import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Styles = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;

  .gradient-button {
    background: rgb(1, 131, 225);
    background: linear-gradient(
      90deg,
      rgba(1, 131, 225, 1) 0%,
      rgba(90, 184, 253, 1) 100%
    );
    border-radius: 12px;
     border: none
    height: 50px;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const GradientButton = (props) => {
	const text = props.text;
	const handleSubmit = props.onClick;
	const block = props.block;

	return (
		<Styles>
			<Button
				className="gradient-button"
				onClick={handleSubmit}
				block={block}
			>
				{text}
			</Button>
		</Styles>
	);
};

export default GradientButton;
