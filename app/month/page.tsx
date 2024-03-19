import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { TimeSpanOptions } from '@/utils/enums';

export default function MonthPage() {
  return <GamesToPlay timeSpan={TimeSpanOptions.month} />;
}
