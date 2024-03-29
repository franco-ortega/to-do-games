export type OldGameData = [
  string,
  {
    isPlayed: boolean;
    note: string;
  }
];

export type NewGameData = {
  title: string,
  isPlayed: boolean,
  note: string,
};

export type Game = OldGameData | NewGameData;

export type GamesToPlay = {
  week: Game[],
  month: Game[],
  year: Game[]
};

export type TimeSpanPaths = keyof GamesToPlay;