import React from 'react';
import { formatClass } from '../utilities';

interface Props {
  type?: string;
  name?: string;
  id?: string;
  value?: string;
  onChange?: (e: any) => void;
  className?: string;
}

const FormField = ({ className = '', ...props }: Props) => (
  <input className={`${formatClass(className)}form-field`} {...props} />
);

export default React.memo(FormField);
