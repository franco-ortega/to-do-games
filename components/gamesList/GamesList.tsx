import { Game } from '@/utils/types';
import { useState } from 'react';
import Loading from '../loading/Loading';

type Props = {
  gamesList: Game[];
};

export default function GamesList({ gamesList }: Props) {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loading />;

  if (!gamesList.length) return 'No games yet.';

  return (
    <ul>
      {gamesList.map(([game, { isPlayed }]) => (
        <li key={game}>
          {game} (played: {isPlayed ? <span>yes</span> : <span>no</span>})
        </li>
      ))}
    </ul>
  );
}
