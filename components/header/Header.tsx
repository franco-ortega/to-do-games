import Nav from '../nav/Nav';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.Header}>
      <h1>Games To Play...</h1>
      <Nav />
    </header>
  );
}
