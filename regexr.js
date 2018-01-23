// For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller.
//
//1. car and cat
//
//2. pop and prop
//
//3. ferret, ferry, and ferrari
//
//4. Any word ending in ious
//
//5. A whitespace character followed by a dot, comma, colon, or semicolon
//
//6. A word longer than six letters
//
//7. A word without the letter e

verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);
       //matches 'ca' and any characters between r and t after

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop"]);
       //matches 'p', then 'r' as an option and then 'op'

verify(/ferr\w*/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);
       //matches 'ferr' and then any word character after

verify(/\w*ious/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);
       //matches any (or non) word characters and then 'ious'

verify(/ (\.|,|;|:)/,
       ["bad punctuation ."],
       ["escape the dot"]);
       //matches an empty space ' ' and then . or , or ; or ;
       // backlash on \. because . has special meaning in RegExp

verify(/\w{6}\w+/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);
       //matches 6 word characters and 1 or more after.

verify(/\b\w+?e\w+?\b/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape"]);
       //Inside a word boundry \b, we match any number of words as an option, then e, and then any number of words as an option
       //This way the word can start and finish with e

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
