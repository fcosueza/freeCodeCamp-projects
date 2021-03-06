const telephoneCheck = number => {
  const regexp = /^[1]{0,1}\s{0,1}(\([0-9]{3}\)|[0-9]{3})[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/g;

  return regexp.test(number);
};

export default telephoneCheck;
