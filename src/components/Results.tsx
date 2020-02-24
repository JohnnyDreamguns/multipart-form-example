import React from 'react';
import { Fields } from '../store/form/types';

interface Props {
  contactDetails: Fields;
  loginDetails: Fields;
}

const Results = ({ contactDetails, loginDetails }: Props) => (
  <>
    <h1 className="mb-3">Results</h1>

    <div className="mb-8">
      <h2 className="text-teal-700">Contact details:</h2>
      <p>First name: {contactDetails.firstName}</p>
      <p>Last name: {contactDetails.lastName}</p>
    </div>

    <div>
      <h2 className="text-teal-700">Login details:</h2>
      <p>Email: {loginDetails.password}</p>
      <p>Password: {loginDetails.password}</p>
    </div>
  </>
);

export default React.memo(Results);
