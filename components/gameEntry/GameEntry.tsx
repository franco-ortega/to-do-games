import styles from './GameEntry.module.scss';

type Props = {
  game: string;
  isPlayed: boolean;
};

export default function GameEntry({ game, isPlayed }: Props) {
  return (
    <li className={styles.GameEntry}>
      {game} (played: {isPlayed ? <span>yes</span> : <span>no</span>})
    </li>
  );
}
