import { Game } from '@/utils/types';

type Props = {
  gamesList: Game[];
};

export default function GamesList({ gamesList }: Props) {
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
