import { Game } from '@/utils/types';

type Props = {
  gamesList: Game[];
};

export default function GamesList({ gamesList }: Props) {
  return (
    <ul>
      {gamesList.map((game: Game) => (
        <li key={game[0]}>
          {game[0]} (played:{' '}
          {game[1]['played'] ? <span>yes</span> : <span>no</span>})
        </li>
      ))}
    </ul>
  );
}
