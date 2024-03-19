import { useEffect, useState } from 'react';
import { Game, TimeSpanPathOptions } from '@/utils/types';
import Loading from '../loading/Loading';
import GameEntry from '../gameEntry/GameEntry';
import styles from './GamesList.module.scss';

type Props = {
  gamesList: Game[];
  timeSpan: TimeSpanPathOptions;
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
        ? gamesList.map(([game, { isPlayed, note }]) => (
            <GameEntry
              key={game}
              game={game}
              isPlayed={isPlayed}
              note={note || ''}
              timeSpan={timeSpan}
            />
          ))
        : 'No games yet.'}
    </ul>
  );
}
