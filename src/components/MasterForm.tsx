import React from 'react';
import ContactDetailsContainer from '../containers/ContactDetailsContainer';
import LoginDetailsContainer from '../containers/LoginDetailsContainer';
import ResultsContainer from '../containers/ResultsContainer';

interface Props {
  step: number;
}

const MasterForm = ({ step }: Props) => (
  <div className="p-5">
    {step === 1 && <ContactDetailsContainer />}
    {step === 2 && <LoginDetailsContainer />}
    {step === 3 && <ResultsContainer />}
  </div>
);

export default React.memo(MasterForm);
