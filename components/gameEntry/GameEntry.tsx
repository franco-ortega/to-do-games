type Props = {
  game: string;
  isPlayed: boolean;
};

export default function GameEntry({ game, isPlayed }: Props) {
  return (
    <li>
      {game} (played: {isPlayed ? <span>yes</span> : <span>no</span>})
    </li>
  );
}
