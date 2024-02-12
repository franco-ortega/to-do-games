import { Game } from '@/utils/types';
import { useEffect, useState } from 'react';
import Loading from '../loading/Loading';

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
    <ul>
      {gamesList.length
        ? gamesList.map(([game, { isPlayed }]) => (
            <li key={game}>
              {game} (played: {isPlayed ? <span>yes</span> : <span>no</span>})
            </li>
          ))
        : 'No games yet.'}
    </ul>
  );
}
