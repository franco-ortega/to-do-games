'use client';

import { useState } from 'react';
import { Game, GamesToPlay } from '../../utils/types';
import styles from './Home.module.scss';
import AddGame from '../addGame/AddGame';

export default function Home() {
  const [gamesToPlay, setGamesToPlay] = useState({
    week: [] as Game[],
    month: [] as Game[],
    year: [] as Game[],
  } as GamesToPlay);

  return (
    <main className={styles.Home}>
      <section>
        <h2>Home Page</h2>
        <p>
          Make lists of the games that you want to play this week, this month,
          and this year.
        </p>
      </section>
      <AddGame setGamesToPlay={setGamesToPlay} />
    </main>
  );
}
