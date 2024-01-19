'use client';

import { useState } from 'react';
import { Game, GamesToPlay, TimeSpanOptions } from '../../utils/types';
import styles from './Home.module.scss';
import { timeSpan } from '@/utils/enums';

type Props = {
  data: GamesToPlay;
  time: TimeSpanOptions;
};

function GameListByTimeSpan({ data, time }: Props) {
  return (
    <section>
      <h4>...This Month</h4>
      <ul>
        {data[time].length
          ? data[time].map(([game, { isPlayed }]) => (
              <li key={game}>
                {game} ({isPlayed ? 'Played!' : 'not played yet'})
              </li>
            ))
          : `No games to play yet this ${time}.`}
      </ul>
    </section>
  );
}

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
          <button>Add Game</button>
        </form>
      </section>
      <GameListByTimeSpan data={gamesToPlay} time='week' />
      <GameListByTimeSpan data={gamesToPlay} time='month' />
      <GameListByTimeSpan data={gamesToPlay} time='year' />
    </main>
  );
}
