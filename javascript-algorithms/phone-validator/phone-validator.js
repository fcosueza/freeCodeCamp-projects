const telephoneCheck = number => {
  const regexp = new RegExp(
    /^[1]{0,1}\s{0,1}[(]{0,1}[0-9]{3}[)]{0,1}[-\s.0-9]{7,9}$/g
  );

  return regexp.test(number);
};

export default telephoneCheck;
