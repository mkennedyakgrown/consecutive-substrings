function consecutiveSubstrings(string) {
  const substrings = [];
  for (let i = 1; i <= string.length; ++i) {
    substrings.push(string.slice(0, i));
  }
  if (string.length > 1) {
    substrings.push(...consecutiveSubstrings(string.slice(1)));
  }
  return substrings;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
