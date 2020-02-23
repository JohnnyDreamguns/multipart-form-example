import React, { SyntheticEvent } from 'react';
import FormField from './FormField';
import Label from './Label';

interface Props {
  fields: { [fieldName: string]: string };
  onChange: (e: SyntheticEvent) => void;
  className?: string;
}

const LoginDetails = ({ fields, onChange, ...props }: Props) => (
  <div {...props}>
    <h1 className="mb-3">Login details</h1>
    <form className="flex flex-col max-w-xl">
      <Label htmlFor="firstName">Email address</Label>
      <FormField
        type="text"
        name="email"
        id="email"
        value={fields.email}
        onChange={onChange}
        className="mb-5 mr-5"
      />

      <Label htmlFor="password">Password</Label>
      <FormField
        type="text"
        name="password"
        id="password"
        value={fields.password}
        onChange={onChange}
        className="mb-5 mr-5"
      />
    </form>
  </div>
);

export default LoginDetails;
