import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Styles = styled.div`
	width: 100%;
	.gradient-button {
		background: rgb(1, 131, 225);
		background: linear-gradient(
			90deg,
			rgba(1, 131, 225, 1) 0%,
			rgba(90, 184, 253, 1) 100%
		);
		border-radius: 12px;
		border: none;
		height: 50px;
		font-size: 1.3rem;
		font-weight: 600;
	}
`;

const GradientButton = (props) => {
	const text = props.text;
	const handleSubmit = props.onClick;

	return (
		<Styles>
			<Button block className="gradient-button" onClick={handleSubmit}>
				{text}
			</Button>
		</Styles>
	);
};

export default GradientButton;
