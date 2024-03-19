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

export type TimeSpanPaths = keyof GamesToPlay;

// export type TimeSpan = {
//   path: TimeSpanPaths;
// }