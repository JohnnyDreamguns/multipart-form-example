import React from 'react';
import MasterForm from '../components/MasterForm';
import useGlobal from '../hooks/useGlobal';

const MasterFormContainer = () => {
  const { step, nextStep } = useGlobal();

  const props = {
    step,
    nextStep
  };

  return React.createElement(MasterForm, props);
};

export default MasterFormContainer;
