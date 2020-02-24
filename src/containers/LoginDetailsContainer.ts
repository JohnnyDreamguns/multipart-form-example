import React from 'react';
import LoginDetails from '../components/LoginDetails';
import useForm from '../hooks/useForm';
import useGlobal from '../hooks/useGlobal';

interface Props {
  className?: string;
}

const LoginDetailsContainer = ({ className }: Props) => {
  const { nextStep } = useGlobal();

  const { fields, onChange } = useForm('loginDetails', {
    email: '',
    password: ''
  });

  const props = {
    fields,
    onChange,
    className,
    nextStep
  };

  return React.createElement(LoginDetails, props);
};

export default LoginDetailsContainer;
