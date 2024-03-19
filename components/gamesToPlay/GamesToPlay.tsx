'use client';

import { useEffect, useState } from 'react';
import { Game, TimeSpan, TimeSpanPaths } from '../../utils/types';
import { getGames } from '@/utils/localStorage';
import GamesList from '../gamesList/GamesList';
import styles from './GamesToPlay.module.scss';
import updateNoteData from '@/utils/updateNoteData';
import createHeaderFromPath from '@/utils/createHeaderFromPath';

type Props = {
  timeSpan: TimeSpan;
};

export default function GamesToPlay({
  timeSpan: { path, header },
}: Props): JSX.Element {
  const [games, setGames] = useState([] as Game[]);

  const realHeader = createHeaderFromPath(path);
  console.log(realHeader);

  useEffect(() => {
    // update note data
    updateNoteData();

    const gamesFromLocalStorage = getGames('GAMES_TO_PLAY');
    const gamesByTimeSpan = gamesFromLocalStorage[path]
      ? gamesFromLocalStorage[path]
      : [];
    setGames(gamesByTimeSpan);
  }, [path]);

  return (
    <section className={styles.GamesToPlay}>
      <h2>Games To Play This {realHeader}</h2>
      <GamesList gamesList={games} timeSpan={path} />
    </section>
  );
}
