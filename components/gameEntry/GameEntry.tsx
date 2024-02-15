'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { getGames, setGames } from '@/utils/localStorage';
import styles from './GameEntry.module.scss';
import { Game, GamesToPlay, TimeSpanOptions } from '@/utils/types';

type Props = {
  game: string;
  isPlayed: boolean;
};

export default function GameEntry({ game, isPlayed }: Props) {
  const [isChecked, setIsChecked] = useState(isPlayed);
  const pathname = usePathname();

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);

    const savedGames = getGames('GAMES_TO_PLAY') as GamesToPlay;
    const timeSpan = pathname.slice(1) as TimeSpanOptions;
    console.log(pathname);
    console.log(savedGames);

    const updatedGames = {
      ...savedGames,
      [timeSpan]: savedGames[timeSpan].map((gameItem) => {
        console.log({ gameItem });
        console.log(gameItem[1]);
        if (gameItem[0] === (game as unknown as string)) {
          return [
            game,
            {
              isPlayed: !isPlayed,
            },
          ];
        } else return gameItem;
      }),
    };

    console.log(updatedGames);

    setGames('GAMES_TO_PLAY', updatedGames);
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
