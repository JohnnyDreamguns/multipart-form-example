import React from 'react';
import ContactDetails from '../components/ContactDetails';
import useForm from '../hooks/useForm';

interface Props {
  className?: string;
}

const ContactDetailsContainer = ({ className }: Props) => {
  const { fields, onChange } = useForm('contactDetails', {
    firstName: '',
    lastName: ''
  });

  const props = {
    fields,
    onChange,
    className
  };

  return React.createElement(ContactDetails, props);
};

export default ContactDetailsContainer;
