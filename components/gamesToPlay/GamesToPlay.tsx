'use client';

import { useEffect, useState } from 'react';
import { getGames } from '@/utils/localStorage';
import { Game, TimeSpanPaths } from '../../utils/types';
import updateNoteData from '@/utils/updateNoteData';
import convertGameData from '@/utils/convertGameData';
import createHeaderFromPath from '@/utils/createHeaderFromPath';
import GamesList from '../gamesList/GamesList';
import styles from './GamesToPlay.module.scss';

type Props = {
  timeSpan: TimeSpanPaths;
};

export default function GamesToPlay({ timeSpan }: Props): JSX.Element {
  const [games, setGames] = useState([] as Game[]);
  const header = createHeaderFromPath(timeSpan);

  useEffect(() => {
    updateNoteData();

    const gamesFromLocalStorage = getGames('GAMES_TO_PLAY');

    if (
      gamesFromLocalStorage[timeSpan] &&
      Array.isArray(gamesFromLocalStorage[timeSpan][0])
    ) {
      console.log('hello convert');
      convertGameData();
    }

    const gamesByTimeSpan = gamesFromLocalStorage[timeSpan]
      ? gamesFromLocalStorage[timeSpan]
      : [];
    setGames(gamesByTimeSpan);
  }, [timeSpan]);

  return (
    <section className={styles.GamesToPlay}>
      <h2>Games To Play This {header}</h2>
      <GamesList gamesList={games} timeSpan={timeSpan} />
    </section>
  );
}
