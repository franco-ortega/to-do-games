# To Do Games app

An app for listing the games you want to play this week / month / year.

### To Do

1. Create reusuable component to display data on Week, Month, and Year pages. - DONE
   1. Fine tune reusable GamesToPlay component: - DONE
      1. Create separate component for the LIST- DONE
      1. Fine tune types as needed - DONE
      1. Create enum for time span string values - DONE
1. Add LOADING component - DONE
1. Add "notes" section to Add Game and data structure.
1. Add database

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
