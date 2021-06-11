import styles from '../styles/index.module.scss';
import React from 'react';
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
import _ from 'lodash';

const Page1 = () => {
  console.log('test');
  const test = '1234';

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.title}>Page 1</div>
      </div>
      <div>
        {_.map(arr, (item) => (
          <div key={item}>{item}</div>
        ))}
        {_.map(
          _.filter(arr, (item) => item < 5),
          (num) => (
            <div key={num}>{num}</div>
          ),
        )}
      </div>
    </React.Fragment>
  );
};

export default Page1;
