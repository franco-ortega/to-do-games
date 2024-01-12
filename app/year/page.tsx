import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import sampleData from '../../data/sample.json';
import { Game } from '@/utils/types';

export default function YearPage() {
  const data = sampleData.year as Game[];

  return <GamesToPlay gameData={data} time={'Year'} />;
}
