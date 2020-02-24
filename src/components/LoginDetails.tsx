import React, { SyntheticEvent } from 'react';
import FormField from './FormField';
import Label from './Label';

interface Props {
  fields: { [fieldName: string]: string };
  className?: string;
  onChange: (e: SyntheticEvent) => void;
  nextStep: () => void;
}

const LoginDetails = ({ fields, onChange, nextStep, ...props }: Props) => (
  <div {...props}>
    <h1 className="mb-3">Login details</h1>

    <form onSubmit={nextStep} className="flex flex-col max-w-md">
      <Label htmlFor="email">Email address</Label>
      <FormField
        type="text"
        name="email"
        id="email"
        value={fields.email}
        onChange={onChange}
        className="mb-5"
      />

      <Label htmlFor="password">Password</Label>
      <FormField
        type="text"
        name="password"
        id="password"
        value={fields.password}
        onChange={onChange}
        className="mb-5"
      />

      <button className="btn self-end" type="submit">
        Save
      </button>
    </form>
  </div>
);

export default LoginDetails;
