const assert = require("assert");
const mergeIntervals = require("./index");

// Positive Testfälle
const testCases = [
  {
    input: [undefined, [14, 23, 24], [4, 8]],
    expectedOutput: [[4, 8]],
  },
  {
    input: [
      [25, 30],
      [2, 19],
      [14, 23],
      [4, 8],
    ],
    expectedOutput: [
      [2, 23],
      [25, 30],
    ],
  },
  { input: [], expectedOutput: [] },
  {
    input: [
      [1, 3],
      [5, 7],
      [9, 11],
    ],
    expectedOutput: [
      [1, 3],
      [5, 7],
      [9, 11],
    ],
  },
  {
    input: [
      [1, 5],
      [2, 6],
      [8, 10],
      [15, 20],
    ],
    expectedOutput: [
      [1, 6],
      [8, 10],
      [15, 20],
    ],
  },
  {
    input: [
      [5, 10],
      [11, 15],
    ],
    expectedOutput: [
      [5, 10],
      [11, 15],
    ],
  },
  {
    input: [
      [-5, 0],
      [-3, 3],
      [2, 5],
      [6, 8],
    ],
    expectedOutput: [
      [-5, 5],
      [6, 8],
    ],
  },
];

for (const testCaseI in testCases) {
  const { input, expectedOutput } = testCases[testCaseI];
  const result = mergeIntervals(input);
  assert.deepStrictEqual(
    result,
    expectedOutput,
    `Test case ${testCaseI + 1} failed`
  );
}

console.log("All tests passed!");
