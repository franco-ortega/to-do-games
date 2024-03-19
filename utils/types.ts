export type Game = [
  string,
  {
    isPlayed: boolean, 
    note?: string,
    notes?: string
  }
];

export type GamesToPlay = {
  week: Game[],
  month: Game[],
  year: Game[]
};

export type TimeSpanPathOptions = 'week' | 'month' | 'year';
export type TimeSpanTitleOptions = 'Week' | 'Month' | 'Year';

export type TimeSpan = {
  path: TimeSpanPathOptions;
  title: TimeSpanTitleOptions;
}