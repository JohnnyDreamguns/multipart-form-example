import React, { SyntheticEvent } from 'react';
import FormField from './FormField';
import Label from './Label';

interface Props {
  fields: { [fieldName: string]: string };
  className?: string;
  onChange?: (e: SyntheticEvent) => void;
  onSubmit: (e: any) => void;
}

const ContactDetails = ({ fields, onChange, onSubmit, ...props }: Props) => (
  <div {...props}>
    <h1 className="mb-3">Contact details</h1>

    <form onSubmit={onSubmit} className="flex flex-col max-w-md">
      <Label htmlFor="firstName">First Name</Label>
      <FormField
        type="text"
        name="firstName"
        id="firstName"
        value={fields.firstName}
        onChange={onChange}
        className="mb-5"
      />

      <Label htmlFor="lastName">Last Name</Label>
      <FormField
        type="text"
        name="lastName"
        id="lastName"
        value={fields.lastName}
        onChange={onChange}
        className="mb-5"
      />

      <button className="btn self-end" type="submit">
        Save
      </button>
    </form>
  </div>
);

export default React.memo(ContactDetails);
