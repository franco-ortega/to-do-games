'use client';

import styles from './Home.module.scss';
import AddGame from '../addGame/AddGame';

export default function Home() {
  return (
    <main className={styles.Home}>
      <section>
        <p>
          Make lists of the games that you want to play this week, this month,
          and this year.
        </p>
      </section>
      <AddGame />
    </main>
  );
}
