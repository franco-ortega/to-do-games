import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { TimeSpanOptions } from '@/utils/enums';

export default function WeekPage() {
  return <GamesToPlay timeSpan={TimeSpanOptions.week} />;
}
