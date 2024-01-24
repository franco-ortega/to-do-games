'use client';

import { useState } from 'react';
import GamesListByTimeSpan from '../gamesListByTimeSpan/GamesListByTimeSpan';
import { Game, GamesToPlay, TimeSpanOptions } from '../../utils/types';
import { timeSpan } from '@/utils/enums';
import styles from './Home.module.scss';

export default function Home() {
  const [game, setGame] = useState('');
  const [gamesToPlay, setGamesToPlay] = useState({
    week: [] as Game[],
    month: [] as Game[],
    year: [] as Game[],
  } as GamesToPlay);
  const [timeSpanOption, setTimeSpanOption] = useState('' as TimeSpanOptions);

  const addGame: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    setGamesToPlay((prevState) => {
      prevState[timeSpanOption] = [
        ...prevState[timeSpanOption],
        [game, { isPlayed: false }],
      ];
      return prevState;
    });

    setGame('');
  };

  return (
    <main className={styles.Home}>
      <h2>Home Page</h2>
      <section>
        The links for This Week, This Month, and This Year now dynamically
        display sample data.
      </section>
      <section>
        <h3>Add a Game</h3>
        <form onSubmit={addGame}>
          <p>
            <label htmlFor='add-game'>
              Game:{' '}
              <input
                type='text'
                id='add-game'
                value={game}
                onChange={(e) => setGame(e.target.value)}
              />
            </label>
          </p>
          <p>
            <label htmlFor='time-span-options'>
              <select
                id='time-span-options'
                onChange={(e) =>
                  setTimeSpanOption(
                    e.target.value.toLowerCase() as TimeSpanOptions
                  )
                }
              >
                <option value={''}>When Will You Play?</option>
                <option value={timeSpan.week}>This Week</option>
                <option value={timeSpan.month}>This Month</option>
                <option value={timeSpan.year}>This Year</option>
              </select>
            </label>
          </p>
          <button disabled={!game || !timeSpanOption}>Add Game</button>
        </form>
      </section>
      <GamesListByTimeSpan data={gamesToPlay} time='week' />
      <GamesListByTimeSpan data={gamesToPlay} time='month' />
      <GamesListByTimeSpan data={gamesToPlay} time='year' />
    </main>
  );
}
