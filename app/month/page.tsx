import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import sampleData from '../../data/sample.json';
import { Game } from '@/utils/types';
import { timeSpan } from '@/utils/enums';

export default function MonthPage() {
  const data = sampleData.month as Game[];

  return <GamesToPlay gameData={data} time={timeSpan.month} />;
}
