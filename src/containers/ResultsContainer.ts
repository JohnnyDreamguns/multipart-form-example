import React from 'react';
import Results from '../components/Results';
import { useSelector } from 'react-redux';
import { FormState } from '../store/form/types';

const ResultsContainer = () => {
  const contactDetails: any = useSelector(
    (state: FormState) => state.form.contactDetails
  );

  const loginDetails: any = useSelector(
    (state: FormState) => state.form.loginDetails
  );

  const props = {
    contactDetails,
    loginDetails
  };

  return React.createElement(Results, props);
};

export default ResultsContainer;
