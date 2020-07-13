const palindrome = str => {
  const formatString = str
    .match(/[^\W_]/g)
    .join("")
    .toLowerCase();

  return formatString === formatString.split("").reverse().join("");
};

export default palindrome;
