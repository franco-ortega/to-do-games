import { TimeSpanOptions } from '@/utils/enums';
import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';

export default function MonthPage() {
  return <GamesToPlay timeSpan={TimeSpanOptions.month} />;
}
