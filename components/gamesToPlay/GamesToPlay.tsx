'use client';

import { useEffect, useState } from 'react';
import { TimeSpanOptions } from '@/utils/enums';
import { getGames } from '@/utils/localStorage';
import { Game, TimeSpanPaths } from '../../utils/types';
import createHeaderFromPath from '@/utils/createHeaderFromPath';
import updateNoteData from '@/utils/updateNoteData';
import GamesList from '../gamesList/GamesList';
import styles from './GamesToPlay.module.scss';

type Props = {
  timeSpan: TimeSpanPaths;
};

export default function GamesToPlay({ timeSpan }: Props): JSX.Element {
  const [games, setGames] = useState([] as Game[]);
  const header = createHeaderFromPath(timeSpan);
  console.log(TimeSpanOptions.week);

  useEffect(() => {
    // update note data
    updateNoteData();

    const gamesFromLocalStorage = getGames('GAMES_TO_PLAY');
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
