import styles from './Header.module.scss';
import commonStyles from '../../styles/Common.module.scss';
import { Link } from 'react-router-dom';

import { BASE_PATH } from '../../constants';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={commonStyles.container}>
        <div className={styles.header_content}>
          <Link
            to={BASE_PATH}
            className={styles.logo}
          >
            Recipes
          </Link>

          <Link
            to={`${BASE_PATH}/saved`}
            className={styles.saved_button}
          />
        </div>
      </div>
    </header>
  );
}