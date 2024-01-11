// type Game = [
//   string,
//   {
//     played: boolean;
//   }
// ];

// type Props = {
//   games: Game[][];
// };

const GamesToPlay: React.FC<{
  games: [][];
}> = ({ games }) => {
  console.log('GAMES TO PLAY', games);

  return (
    <main>
      <h2>Games To Play</h2>
    </main>
  );
};

export default GamesToPlay;

// export default function GamesToPlay(games): React.FC<Props> {
//   console.log('GAMES TO PLAY', games);

//   return (
//     <main>
//       <h2>Games To Play</h2>
//     </main>
//   );
// }
