'use client';

import AddGame from '../addGame/AddGame';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <main className={styles.Home}>
      <section>
        <h2>Add a Game</h2>
      </section>
      <section>
        <p>
          Make lists of the games you want to play this week, this month, and
          this year.
        </p>
      </section>
      <section>
        <AddGame />
      </section>
    </main>
  );
}
