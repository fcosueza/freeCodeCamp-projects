const rot13 = str => {
  const regexp = /[A-Z]/g;
  const lowerBound = 65;
  const step = 13;
  const width = 26;

  return str.replace(regexp, c =>
    String.fromCharCode(
      ((c.charCodeAt(0) - lowerBound + step) % width) + lowerBound
    )
  );
};

export default rot13;
