export type Game = [string, { isPlayed: boolean }];

export type GamesToPlay = {
  week: Game[],
  month: Game[],
  year: Game[]
};
