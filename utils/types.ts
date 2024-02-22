export type Game = [string, { isPlayed: boolean }];

export type GamesToPlay = {
  week: Game[],
  month: Game[],
  year: Game[]
};

export type TimeSpanOptions = 'week' | 'month' | 'year';

export type TimeSpan = {
  path: string;
  title: string;
}
export type TimeSpanPathOptions = 'week' | 'month' | 'year';
export type TimeSpanTitleOptions = 'Week' | 'Month' | 'Year';