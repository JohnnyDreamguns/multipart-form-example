import React from 'react';
import { formatClass } from '../utilities';

interface Props {
  className?: string;
  htmlFor: string;
  children: any;
}

const Label = ({ className = '', children, ...props }: Props) => (
  <label className={`${formatClass(className)}label`} {...props}>
    {children}
  </label>
);

export default React.memo(Label);
