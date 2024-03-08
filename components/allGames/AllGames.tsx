import GamesToPlay from '../gamesToPlay/GamesToPlay';
import { timeSpanOptions } from '@/utils/enums';
import styles from './AllGames.module.scss';

type Props = {};

export default function AllGames({}: Props) {
  return (
    <main className={styles.AllGames}>
      <h2>All Games to Play</h2>
      <section>
        <GamesToPlay timeSpan={timeSpanOptions.week} />
        <GamesToPlay timeSpan={timeSpanOptions.month} />
        <GamesToPlay timeSpan={timeSpanOptions.year} />
      </section>
    </main>
  );
}
