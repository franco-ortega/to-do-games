import { timeSpan } from '@/utils/enums';
import { getGames, setGames } from '@/utils/localStorage';
import { TimeSpanOptions, TimeSpanPathOptions } from '@/utils/types';
import React, { useState } from 'react';
import styles from './AddGame.module.scss';

export default function AddGame() {
  const [game, setGame] = useState('');
  const [timeSpanOption, setTimeSpanOption] = useState(
    '' as TimeSpanPathOptions
  );

  const addGame: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const savedGames = getGames('GAMES_TO_PLAY');

    const updatedGames = {
      ...savedGames,
      [timeSpanOption]: [
        ...savedGames[timeSpanOption],
        [game, { isPlayed: false }],
      ],
    };

    setGames('GAMES_TO_PLAY', updatedGames);
    setGame('');
  };

  return (
    <form className={styles.AddGame} onSubmit={addGame}>
      <h3>Add a Game</h3>
      <label htmlFor='add-game'>
        Game:{' '}
        <input
          type='text'
          id='add-game'
          value={game}
          onChange={(e) => setGame(e.target.value)}
        />
      </label>
      <label htmlFor='time-span-options'>
        <select
          id='time-span-options'
          name='time-span-options'
          onChange={(e) =>
            setTimeSpanOption(e.target.value.toLowerCase() as TimeSpanOptions)
          }
        >
          <option value={''}>When Will You Play?</option>
          <option value={timeSpan.week.title}>This Week</option>
          <option value={timeSpan.month.title}>This Month</option>
          <option value={timeSpan.year.title}>This Year</option>
        </select>
      </label>
      <button disabled={!game || !timeSpanOption}>Add Game</button>
    </form>
  );
}
