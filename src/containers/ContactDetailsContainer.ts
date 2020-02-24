import React from 'react';
import ContactDetails from '../components/ContactDetails';
import useForm from '../hooks/useForm';
import useGlobal from '../hooks/useGlobal';

interface Props {
  className?: string;
}

const ContactDetailsContainer = ({ className }: Props) => {
  const { nextStep } = useGlobal();

  const { fields, onChange } = useForm('contactDetails', {
    firstName: '',
    lastName: ''
  });

  const props = {
    fields,
    onChange,
    className,
    nextStep
  };

  return React.createElement(ContactDetails, props);
};

export default ContactDetailsContainer;
