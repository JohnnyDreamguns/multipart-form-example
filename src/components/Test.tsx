import React from 'react';
import Button from './Button';
import Div from './Div';
import styles from './Test.module.scss';

const Test = () => (
  <Div className={styles.wrapper}>
    <p>Test</p>
    <Button />
  </Div>
);

export default Test;
