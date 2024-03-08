import GamesToPlay from '../gamesToPlay/GamesToPlay';
import { timeSpanOptions } from '@/utils/enums';
import styles from './AllGames.module.scss';

export default function AllGames() {
  return (
    <main className={styles.AllGames}>
      <GamesToPlay timeSpan={timeSpanOptions.week} />
      <GamesToPlay timeSpan={timeSpanOptions.month} />
      <GamesToPlay timeSpan={timeSpanOptions.year} />
    </main>
  );
}
