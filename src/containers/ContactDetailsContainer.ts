import React from 'react';
import ContactDetails from '../components/ContactDetails';
import useForm from '../hooks/useForm';
import useGlobal from '../hooks/useGlobal';

interface Props {
  className?: string;
}

const ContactDetailsContainer = ({ className }: Props) => {
  const { nextStep } = useGlobal();

  const { fields, onChange, saveToStore } = useForm('contactDetails', {
    firstName: '',
    lastName: ''
  });

  const onSubmit = (e: any) => {
    saveToStore();
    nextStep();
    e.preventDefault();
  };

  const props = {
    fields,
    onChange,
    className,
    onSubmit
  };

  return React.createElement(ContactDetails, props);
};

export default ContactDetailsContainer;
