import React from 'react';
import LoginDetails from '../components/LoginDetails';
import useForm from '../hooks/useForm';

interface Props {
  className?: string;
}

const LoginDetailsContainer = ({ className }: Props) => {
  const { fields, onChange } = useForm('loginDetails', {
    email: '',
    password: ''
  });

  const props = {
    fields,
    onChange,
    className
  };

  return React.createElement(LoginDetails, props);
};

export default LoginDetailsContainer;
