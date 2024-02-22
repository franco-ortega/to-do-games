'use client';

import { useEffect, useState } from 'react';
import {
  Game,
  GamesToPlay,
  TimeSpan,
  TimeSpanPathOptions,
} from '../../utils/types';
import { getGames } from '@/utils/localStorage';
import GamesList from '../gamesList/GamesList';
import styles from './GamesToPlay.module.scss';

type Props = {
  timeSpan: TimeSpan;
};

export default function GamesToPlay({ timeSpan }: Props): JSX.Element {
  const [gameStuff, setGameStuff] = useState([] as Game[]);

  useEffect(() => {
    const currentGames = getGames('GAMES_TO_PLAY');
    const currentTime = timeSpan.path as TimeSpanPathOptions;
    const gameInfo = currentGames[currentTime] ? currentGames[currentTime] : [];
    setGameStuff(gameInfo);
  }, [timeSpan]);

  return (
    <main className={styles.GamesToPlay}>
      <h2>Games To Play This {timeSpan.title}</h2>
      <GamesList
        gamesList={gameStuff}
        timeSpan={timeSpan.path as TimeSpanPathOptions}
      />
    </main>
  );
}
