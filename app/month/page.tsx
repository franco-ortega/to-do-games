import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { timeSpanOptions } from '@/utils/enums';

export default function MonthPage() {
  return <GamesToPlay timeSpan={timeSpanOptions.month} />;
}
