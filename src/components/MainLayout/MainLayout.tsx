import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';
import commonStyles from '../../styles/Common.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const MainLayout = () => {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={commonStyles.container}>
          <div className={styles.main_content}>
            <Outlet />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};