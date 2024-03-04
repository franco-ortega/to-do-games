// import { timeSpan } from '@/utils/enums';
import { getGames, setGames } from '@/utils/localStorage';
import { TimeSpanPathOptions } from '@/utils/types';
import React, { useState } from 'react';
import styles from './AddGame.module.scss';
import { timeSpanOptions } from '@/utils/enums';

export default function AddGame() {
  const [game, setGame] = useState('');
  const [notes, setNotes] = useState('');
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
        [game, { isPlayed: false, notes }],
      ],
    };

    setGames('GAMES_TO_PLAY', updatedGames);
    setGame('');
    setNotes('');
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
      <label htmlFor='add-note'>
        Notes:{' '}
        <input
          type='text'
          id='add-note'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <label htmlFor='time-span-options'>
        <select
          id='time-span-options'
          name='time-span-options'
          onChange={(e) =>
            setTimeSpanOption(
              e.target.value.toLowerCase() as TimeSpanPathOptions
            )
          }
        >
          <option value={''}>When Will You Play?</option>
          <option value={timeSpanOptions.week.title}>This Week</option>
          <option value={timeSpanOptions.month.title}>This Month</option>
          <option value={timeSpanOptions.year.title}>This Year</option>
        </select>
      </label>
      <button disabled={!game || !timeSpanOption}>Add Game</button>
    </form>
  );
}
