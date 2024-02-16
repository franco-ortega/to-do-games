'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getGames, setGames } from '@/utils/localStorage';
import styles from './GameEntry.module.scss';
import { Game, GamesToPlay, TimeSpanOptions } from '@/utils/types';
import updateGameEntry from '@/utils/updateGameEntry';

type Props = {
  game: string;
  isPlayed: boolean;
};

export default function GameEntry({ game, isPlayed }: Props) {
  const [isChecked, setIsChecked] = useState(isPlayed);
  const pathname = usePathname();

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);
    updateGameEntry(pathname, game, isPlayed);
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
