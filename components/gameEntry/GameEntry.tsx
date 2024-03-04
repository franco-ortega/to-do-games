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
      <label>
        <div>
          <input
            type='checkbox'
            onChange={isCheckedChange}
            checked={isChecked}
          />
          <h3>{game} </h3>
          <span>
            (status:{' '}
            {isChecked ? <span>played 🎉</span> : <span>not played yet</span>})
          </span>
        </div>
        <p>
          <span>Notes</span>: {notes}
        </p>
      </label>
    </li>
  );
}
