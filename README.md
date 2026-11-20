# English Corner

Personal game pages for each student, plus a master page for the teacher.

## Links

- Master page (teacher only): https://tali-bargil.github.io/English-Corner/
- Ariel: https://tali-bargil.github.io/English-Corner/ariel.html
- Kedem: https://tali-bargil.github.io/English-Corner/kedem.html
- Liad: https://tali-bargil.github.io/English-Corner/liad.html
- Noam: https://tali-bargil.github.io/English-Corner/noam.html

## How to make changes

Everything is changed in **one file: `students.js`**.
Open it on github.com, click the pencil icon, make the change, then click **Commit changes**.
The pages update within a minute or two.

| I want to… | Do this in `students.js` |
| --- | --- |
| Give a student a game | Add the game's id to their `games` list, e.g. `"phonics"` |
| Take a game away | Delete the game's id from their `games` list |
| Change a theme | Change `theme` to `"red-panda"`, `"bricks"`, `"pixel"`, `"german-shepherd"` or `"plain"` |
| Remove the theme | Set `theme` to `"plain"` |

Keep the quotes and commas as they are: ids sit in quotes, separated by commas.

## Adding a new game

1. Open `games.js` and copy one of the game blocks.
2. Give it a new id, name, short description and link.
3. Add that id to any student in `students.js`.

Icons you can use: `cards`, `book`, `sound`, `car`, `grid`.

## Adding a new student

1. In `students.js`, copy one student block and change the id, name, theme and games.
2. Copy `liad.html`, rename it to the new id (e.g. `noa.html`), and inside it change `"liad"` to `"noa"`.

## Removing a student

Delete their block in `students.js` and their `.html` file.
