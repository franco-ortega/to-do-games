import { useState } from 'react';
import styles from './GameEntry.module.scss';

type Props = {
  game: string;
  isPlayed: boolean;
};

export default function GameEntry({ game, isPlayed }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const isCheckedChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <li className={styles.GameEntry}>
      <label>
        <input type='checkbox' onChange={isCheckedChange} />
        <p>
          {game} (status:{' '}
          {isPlayed ? <span>🎉</span> : <span>not played yet</span>})
        </p>
      </label>
    </li>
  );
}
