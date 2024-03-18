'use client';

import styles from './Home.module.scss';
import AddGame from '../addGame/AddGame';
import updateNoteData from '@/utils/updateNoteData';

export default function Home() {
  updateNoteData();

  return (
    <main className={styles.Home}>
      <section>
        <p>
          Make lists of the games you want to play this week, this month, and
          this year.
        </p>
      </section>
      <AddGame />
    </main>
  );
}
