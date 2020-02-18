import React from 'react';

interface Props {
  children: any;
  className?: string;
}

const Div = ({ children, className }: Props) => (
  <div className={className}>{children}</div>
);

export default Div;
