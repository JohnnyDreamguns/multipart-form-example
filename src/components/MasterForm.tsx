import React from 'react';
import ContactDetailsContainer from '../containers/ContactDetailsContainer';
import LoginDetailsContainer from '../containers/LoginDetailsContainer';

interface Props {
  step: number;
  nextStep: any;
}

const MasterForm = ({ step, nextStep }: Props) => (
  <div className="p-5">
    {step === 1 && <ContactDetailsContainer />}
    {step === 2 && <LoginDetailsContainer />}
    <button className="border px-3 rounded" onClick={nextStep}>
      Next
    </button>
  </div>
);

export default React.memo(MasterForm);
