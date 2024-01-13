import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import gameData from '../../data/sample.json';
import { Game } from '@/utils/types';
import { timeSpan } from '@/utils/enums';

export default function AllPage() {
  return (
    <main>
      <h2>All Games to Play</h2>
      <GamesToPlay
        gameData={gameData.week as Game[]}
        timeSpan={timeSpan.week}
      />
      <GamesToPlay
        gameData={gameData.month as Game[]}
        timeSpan={timeSpan.month}
      />
      <GamesToPlay
        gameData={gameData.year as Game[]}
        timeSpan={timeSpan.year}
      />
    </main>
  );
}
