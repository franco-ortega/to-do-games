import { GamesToPlay, TimeSpanPathOptions } from '@/utils/types';

type Props = {
  data: GamesToPlay;
  time: TimeSpanPathOptions;
};

export default function GameListsByTimeSpan({ data, time }: Props) {
  return (
    <section>
      <h4>...This Month</h4>
      <ul>
        {data[time].length
          ? data[time].map(([game, { isPlayed }]) => (
              <li key={game}>
                {game} ({isPlayed ? 'Played!' : 'not played yet'})
              </li>
            ))
          : `No games to play yet this ${time}.`}
      </ul>
    </section>
  );
}
