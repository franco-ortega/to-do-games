'use client';

import { useState } from 'react';
import styles from './GameEntry.module.scss';
import updateGameEntry from '@/utils/updateGameEntry';
import { TimeSpanPathOptions } from '@/utils/types';

type Props = {
  game: string;
  isPlayed: boolean;
  notes: string;
  timeSpan: TimeSpanPathOptions;
};

export default function GameEntry({ game, isPlayed, notes, timeSpan }: Props) {
  const [isChecked, setIsChecked] = useState(isPlayed);

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);
    updateGameEntry(timeSpan, game, isPlayed);
  };

  return (
    <li className={styles.GameEntry}>
      <label htmlFor='game'>
        <div>
          <input
            id='game'
            type='checkbox'
            onChange={isCheckedChange}
            checked={isChecked}
          />
          <h3>{game} </h3>
        </div>
        <div>
          <span>(status: {isChecked ? 'played 🎉' : 'not played yet'})</span>
        </div>
        <div>Notes: {notes}</div>
      </label>
    </li>
  );
}
