// =====================================================
//  STUDENTS — this is the file you edit.
//
//  To give a student a game:    add its id to their games list
//  To take a game away:         delete its id from the list
//  To change a theme:           change the theme word
//     themes: "red-panda", "bricks", "pixel", "german-shepherd", "robots", "plain"
//
//  Say It to Open It starting point (optional):
//     add  start: "medium"  to a student to open the game at Medium, Level 1.
//     options: "easy", "medium", "hard", or a band + level like "medium-4"
//
//  Say It to Open It mode (optional):
//     no mode line = Beginner (levels 1-5)
//     add  mode: "intermediate"  for all 8 levels
//
//  Game ids are listed in games.js.
//  Keep the quotes and commas exactly as they are.
// =====================================================

const STUDENTS = {

  ariel: {
    name: "Ariel",
    theme: "pixel",
    mode: "beginner",
    games: ["phonics", "word-by-word-reader", "drive-home", "vocabulary-bingo", "say-it-to-open-it", "whats-the-weather"]
  },

  kedem: {
    name: "Kedem",
    theme: "red-panda",
    games: ["vocabulary-bingo", "word-by-word-reader", "whats-the-weather"]
  },

  liad: {
    name: "Liad",
    theme: "bricks",
    games: ["liad-expensive-dog", "word-flip-cards", "vocabulary-bingo"]
  },

  noam: {
    name: "Noam",
    theme: "robots",
    games: ["vocabulary-bingo", "drive-home", "phonics", "word-by-word-reader"]
  }

};
