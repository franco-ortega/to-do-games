import React, { useState } from 'react';
import { TimeSpanOptions } from '@/utils/enums';
import { TimeSpanPaths } from '@/utils/types';
import { getGames, setGames } from '@/utils/localStorage';
import styles from './AddGame.module.scss';

export default function AddGame() {
  const [game, setGame] = useState('');
  const [note, setNote] = useState('');
  const [timeSpanOption, setTimeSpanOption] = useState('' as TimeSpanPaths);

  const addGame: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const savedGames = getGames('GAMES_TO_PLAY');

    const updatedGames = {
      ...savedGames,
      [timeSpanOption]: [
        ...savedGames[timeSpanOption],
        [game, { isPlayed: false, note }],
      ],
    };

    setGames('GAMES_TO_PLAY', updatedGames);
    setGame('');
    setNote('');
  };

  return (
    <form className={styles.AddGame} onSubmit={addGame}>
      <label htmlFor='add-game'>
        <p>Title</p>

        <input
          type='text'
          id='add-game'
          value={game}
          onChange={(e) => setGame(e.target.value)}
        />
      </label>

      <label htmlFor='add-note'>
        <p>Note</p>

        <input
          id='add-note'
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </label>

      <label htmlFor='time-span-options'>
        <select
          id='time-span-options'
          name='time-span-options'
          onChange={(e) =>
            setTimeSpanOption(e.target.value.toLowerCase() as TimeSpanPaths)
          }
        >
          <option value={''}>When Will You Play?</option>
          <option value={TimeSpanOptions.week}>This Week</option>
          <option value={TimeSpanOptions.month}>This Month</option>
          <option value={TimeSpanOptions.year}>This Year</option>
        </select>
      </label>

      <label htmlFor='add-game-submit-button'>
        <button id='add-game-submit-button' disabled={!game || !timeSpanOption}>
          Add Game
        </button>
      </label>
    </form>
  );
}
