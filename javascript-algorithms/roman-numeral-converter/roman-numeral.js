const ROMAN = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

const convertToRoman = number =>
  ROMAN.reduce(
    (acc, curr) => [
      acc[0] + curr[0].repeat(acc[1] / curr[1]),
      acc[1] % curr[1]
    ],
    ["", number]
  )[0];

export default convertToRoman;
