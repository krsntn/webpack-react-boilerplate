import { Fragment } from 'react';
import _ from 'lodash';
import styles from 'Styles/index.module.scss';

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Page1 = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Page1;
