import { useEffect, useState } from 'react';
import { Game, TimeSpanOptions } from '@/utils/types';
import Loading from '../loading/Loading';
import GameEntry from '../gameEntry/GameEntry';
import styles from './GamesList.module.scss';

type Props = {
  gamesList: Game[];
  timeSpan: TimeSpanOptions;
};

export default function GamesList({ gamesList, timeSpan }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (gamesList) setLoading(false);
  }, [gamesList]);

  if (loading) return <Loading />;

  return (
    <ul className={styles.GamesList}>
      {gamesList.length
        ? gamesList.map(([game, { isPlayed }]) => (
            <GameEntry
              key={game}
              game={game}
              isPlayed={isPlayed}
              timeSpan={timeSpan}
            />
          ))
        : 'No games yet.'}
    </ul>
  );
}
