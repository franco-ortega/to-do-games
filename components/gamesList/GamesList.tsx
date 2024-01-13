import { Game } from '@/utils/types';

type Props = {
  gamesList: Game[];
};

export default function GamesList({ gamesList }: Props) {
  return (
    <ul>
      {gamesList.map(([game, { played }]) => (
        <li key={game}>
          {game} (played: {played ? <span>yes</span> : <span>no</span>})
        </li>
      ))}
    </ul>
  );
}
