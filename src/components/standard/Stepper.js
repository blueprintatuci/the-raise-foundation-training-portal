import React, {  } from "react";
import styled from "styled-components";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Styles = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
`;

const Stepper = (props) => {

    const steps = props.steps
    const activeStep = props.activeStep

    const stepColor = (index) => {
        if (activeStep === index+1){
            return "#0183E1"
        }
        return "#f1f1f1"
    }

    return (
        <Styles>
            {Array.from(Array(steps), (e, i) => {
                return <FiberManualRecordIcon style={{fill: stepColor(i), fontSize: '1rem'}}/>
            })}
        </Styles>
    );
};

export default Stepper;
