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
  let change = {
    status: "CLOSED",
    change: []
  };

  return change;
};

const enoughChange = (change, cid) =>
  cid.reduce((acc, curr) => acc + curr[1], 0) <= change;

export default checkCashRegister;
