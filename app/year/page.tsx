import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { timeSpanOptions } from '@/utils/enums';

export default function YearPage() {
  return <GamesToPlay timeSpan={timeSpanOptions.year} />;
}
