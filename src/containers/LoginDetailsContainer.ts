import React from 'react';
import LoginDetails from '../components/LoginDetails';
import useForm from '../hooks/useForm';
import useGlobal from '../hooks/useGlobal';

interface Props {
  className?: string;
}

const LoginDetailsContainer = ({ className }: Props) => {
  const { nextStep } = useGlobal();

  const { fields, onChange, saveToStore } = useForm('loginDetails', {
    email: '',
    password: ''
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

  return React.createElement(LoginDetails, props);
};

export default LoginDetailsContainer;
