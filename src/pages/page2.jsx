import largeImage from 'Assets/images/large_img.jpg';
import styles from 'Styles/index.module.scss';

const Page2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Page 2</div>
      <img src={largeImage} alt="large image" width="100%" />
    </div>
  );
};

export default Page2;
