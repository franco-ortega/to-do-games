# To Do Games app

An app for listing the games you want to play this week / month / year.

### To Do

1. Create reusuable component to display data on Week, Month, and Year pages. - DONE
   1. Fine tune reusable GamesToPlay component: - DONE
      1. Create separate component for the LIST- DONE
      1. Fine tune types as needed - DONE
      1. Create enum for time span string values - DONE
1. Add LOADING component - DONE
1. Add "notes" section to Add Game and data structure. - DONE
1. Add id for game entry
1. Add database

// Do no display Note
// ---- if note exists, display View Note
// ---- ---- if View Note clicked, display Note
// ---- ---- ---- if Hide Note clicked, hide Note
// ---- ---- ---- if Edit Note clicked, display EditNote
// ---- ---- ---- ---- if note added and Save clicked, save note and display updated Note
// ---- ---- ---- ---- if Cancel clicked, display previous Note
// ---- if not, display Add Note
// ---- ---- if Add Note clicked, display Note and display EditNote and hide Add Note
// ---- ---- ---- if note added and Save clicked, save note and display Note and Hide Note
// ---- ---- ---- if Cancel clicked, hide Note and hide EditNote and display Add Note
