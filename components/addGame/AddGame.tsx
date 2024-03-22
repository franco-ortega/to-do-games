import React, { useState } from 'react';
import { TimeSpanOptions } from '@/utils/enums';
import { TimeSpanPaths } from '@/utils/types';
import { getGames, setGames } from '@/utils/localStorage';
import styles from './AddGame.module.scss';
import addGame from '@/utils/addGame';

export default function AddGame() {
  const [game, setGame] = useState('');
  const [note, setNote] = useState('');
  const [timeSpanOption, setTimeSpanOption] = useState('' as TimeSpanPaths);

  const onAddGameSubmit: React.FormEventHandler = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const updatedGames = addGame(timeSpanOption, game, note);

    setGames('GAMES_TO_PLAY', updatedGames);
    setGame('');
    setNote('');
  };

  const onTimeSpanSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeSpanOption(e.target.value as TimeSpanPaths);
  };

  return (
    <form className={styles.AddGame} onSubmit={onAddGameSubmit}>
      <h2>Add a Game</h2>

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
          onChange={onTimeSpanSelect}
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
