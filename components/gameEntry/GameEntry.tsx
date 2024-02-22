'use client';

import { useState } from 'react';
import styles from './GameEntry.module.scss';
import updateGameEntry from '@/utils/updateGameEntry';
import { TimeSpanPathOptions } from '@/utils/types';

type Props = {
  game: string;
  isPlayed: boolean;
  timeSpan: TimeSpanPathOptions;
};

export default function GameEntry({ game, isPlayed, timeSpan }: Props) {
  const [isChecked, setIsChecked] = useState(isPlayed);

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);
    updateGameEntry(timeSpan, game, isPlayed);
  };

  return (
    <li className={styles.GameEntry}>
      <label>
        <input type='checkbox' onChange={isCheckedChange} checked={isChecked} />
        <span>{game} </span>
        <span>
          (status:{' '}
          {isChecked ? <span>played 🎉</span> : <span>not played yet</span>})
        </span>
      </label>
    </li>
  );
}
