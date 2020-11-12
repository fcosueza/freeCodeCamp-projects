const coinValues = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["DOLLAR", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["HUNDRED", 100]
];

const checkCashRegister = (price, cash, cid) => {
  const availableChange = cid.reduce((acc, curr) => acc + curr[1], 0);
  const necessaryChange = cash - price;
  const changeInDimes = {
    status: "OPEN",
    change: []
  };

  if (availableChange < necessaryChange) {
    changeInDimes.status = "INSUFFICIENT_FUNDS";
  } else if (availableChange === necessaryChange) {
    changeInDimes.status = "CLOSED";
    changeInDimes.change = cid;
  }

  return changeInDimes;
};

export default checkCashRegister;
