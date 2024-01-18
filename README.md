# To Do Games app

An app for listing the games you want to play this week / month / year.

### To Do

1. Create reusuable component to display data on Week, Month, and Year pages.
   1. Fine tune reusable GamesToPlay component:
      1. Create separate component for the LIST- DONE
      1. Fine tune types as needed
      1. Create enum for time span string values

PROTOTYPE

function GamesToPlayList(data: GamesToPlay, time: TimeSpanOptions) {
console.log(data);
return (
<section>
<h4>...This Year</h4>
<ul>
{data[time]?.length
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
