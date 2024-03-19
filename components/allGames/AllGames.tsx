import { TimeSpanOptions } from '@/utils/enums';
import GamesToPlay from '../gamesToPlay/GamesToPlay';
import styles from './AllGames.module.scss';

export default function AllGames() {
  return (
    <main className={styles.AllGames}>
      <GamesToPlay timeSpan={TimeSpanOptions.week} />
      <GamesToPlay timeSpan={TimeSpanOptions.month} />
      <GamesToPlay timeSpan={TimeSpanOptions.year} />
    </main>
  );
}
