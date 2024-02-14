import { useEffect, useState } from 'react';
import { Game } from '@/utils/types';
import Loading from '../loading/Loading';
import GameEntry from '../gameEntry/GameEntry';
import styles from './GamesList.module.scss';

type Props = {
  gamesList: Game[];
};

export default function GamesList({ gamesList }: Props) {
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([] as Game[]);

  useEffect(() => {
    setGames(gamesList);
    setLoading(false);
  }, [gamesList]);

  if (loading) return <Loading />;

  return (
    <ul className={styles.GamesList}>
      {gamesList.length
        ? gamesList.map(([game, { isPlayed }]) => (
            <GameEntry key={game} game={game} isPlayed={isPlayed} />
          ))
        : 'No games yet.'}
    </ul>
  );
}
