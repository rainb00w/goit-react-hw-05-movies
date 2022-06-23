import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styles from './views.module.css';

const Loader = () => {
  return <AiOutlineLoading3Quarters className={styles.rotate} size="30px" />;
};

export default Loader;
