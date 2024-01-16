'use client';

import { useState } from 'react';
import { Game } from '../../utils/types';
import styles from './Home.module.scss';

export default function Home() {
  const [game, setGame] = useState('');
  const [games, setGames] = useState([] as Game[]);

  const addGame: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setGames((prevState) => [...prevState, [game, { isPlayed: false }]]);
  };

  return (
    <main className={styles.Home}>
      <h2>Home Page</h2>
      <section>
        The links for This Week, This Month, and This Year now dynamically
        display sample data.
      </section>
      <section>
        <form onSubmit={addGame}>
          <p>
            <label>
              Game:{' '}
              <input type='text' onChange={(e) => setGame(e.target.value)} />
            </label>
          </p>
          <button>Add Game</button>
        </form>
      </section>
    </main>
  );
}
