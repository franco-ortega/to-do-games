'use client';

import { useState } from 'react';
// import { usePathname } from 'next/navigation';
import styles from './GameEntry.module.scss';
import updateGameEntry from '@/utils/updateGameEntry';
import { TimeSpanOptions } from '@/utils/types';

type Props = {
  game: string;
  isPlayed: boolean;
  timeSpan: TimeSpanOptions;
};

export default function GameEntry({ game, isPlayed, timeSpan }: Props) {
  const [isChecked, setIsChecked] = useState(isPlayed);
  // const pathname = usePathname();
  console.log(timeSpan);

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
