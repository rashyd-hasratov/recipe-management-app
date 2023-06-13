import styles from './Header.module.scss';
import commonStyles from '../../styles/Common.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={commonStyles.container}>
        <div className={styles.header_content}>
          <div className={styles.logo}>
            Recipes
          </div>

          <button className={styles.saved_button} />
        </div>
      </div>
    </header>
  );
}