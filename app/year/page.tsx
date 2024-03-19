import { TimeSpanOptions } from '@/utils/enums';
import GamesToPlay from '@/components/gamesToPlay/GamesToPlay';

export default function YearPage() {
  return <GamesToPlay timeSpan={TimeSpanOptions.year} />;
}
