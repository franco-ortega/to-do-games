export type Game = [string, { isPlayed: boolean }];

export type GamesToPlay = {
  week: Game[],
  month: Game[],
  year: Game[]
};

export type TimeSpanOptions = 'week' | 'month' | 'year';