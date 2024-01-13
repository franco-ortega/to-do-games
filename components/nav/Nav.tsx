import Link from 'next/link';
import styles from './Nav.module.scss';

export default function Nav() {
  return (
    <nav className={styles.Nav}>
      <ul>
        <li>
          <Link href={'/'}>Home Page</Link>
        </li>
        <li>
          <Link href={'/week'}>This Week</Link>
        </li>
        <li>
          <Link href={'/month'}>This Month</Link>
        </li>
        <li>
          <Link href={'/year'}>This Year</Link>
        </li>
        <li>
          <Link href={'/all'}>All Games</Link>
        </li>
      </ul>
    </nav>
  );
}
