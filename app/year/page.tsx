import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';
import { TimeSpanOptions } from '@/utils/enums';

export default function YearPage() {
  return <GamesToPlay timeSpan={TimeSpanOptions.year} />;
}
