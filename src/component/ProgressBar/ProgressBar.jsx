import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { FaBoxOpen } from "react-icons/fa";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useSelector } from 'react-redux';
import { t } from 'i18next';

const QontoConnector = styled(StepConnector)(({ theme, stepper_color }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: stepper_color,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: stepper_color,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 5,
    borderRadius: 3,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState, iconsColor }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: iconsColor,
  }),
  '& .QontoStepIcon-completedIcon': {
    color: iconsColor,
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className, iconsColor } = props;
  const icons = {
    1: <FaBoxOpen />,
    2: <FaBoxOpen />,
    3: <LocalShippingIcon />,
    4: <HowToRegIcon />,
  };
  return (
    <QontoStepIconRoot ownerState={{ active }} className={className} iconsColor={iconsColor}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        icons[String(props.icon)]
        
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};


const steps = ['Order is created', 'Order received from the shipper', 'Order is out for delivery',"Order is delivered"];

export default function ProgressBar() {
  let activeStep=0;
  let color="#eaeaf0"
  const shipmentDetail = useSelector((state)=>state.shipmentDetail);
  
  const state = shipmentDetail.CurrentStatus.state;
  if(state==="DELIVERED"){
    activeStep=4;
    color="#3CCF4E";
  }
  else if (state==="CANCELLED" || state==="NOT_YET_SHIPPED"){
    // eslint-disable-next-line no-unused-vars
    activeStep=2;
    if(state==="CANCELLED")
    {color="#e30613"}
    else{
      color="#FFD93D"
    }
  }
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector stepper_color={color}/>}>
        {steps.map((label) => (
          <Step key={label}>
              <StepLabel StepIconComponent={(props) => <QontoStepIcon {...props} iconsColor={color} />}>{t(`${label}`)}</StepLabel>
          </Step>
        ))}
      </Stepper>

    </Stack>
  );
}