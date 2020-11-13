const DENOM = [
  { name: "ONE HUNDRED", value: 100.0 },
  { name: "TWENTY", value: 20.0 },
  { name: "TEN", value: 10.0 },
  { name: "FIVE", value: 5.0 },
  { name: "ONE", value: 1.0 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.1 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 }
];

// Transform cid array in a drawer object
const parseCID = cid =>
  cid.reduce(
    (acc, curr) => {
      const [name, amount] = curr;

      acc.total += amount;
      acc[name] = amount;

      return acc;
    },
    { total: 0 }
  );

// Process change devolution
const checkCashRegister = (price, cash, cid) => {
  const drawer = parseCID(cid);
  const output = { status: "", change: [] };
  let change = cash - price;

  // Exact change in drawer
  if (drawer.total === change) {
    output.status = "CLOSED";
    output.change = cid;

    return output;
  }

  const changeArray = DENOM.reduce((acc, curr) => {
    let amount = 0;

    while (change >= curr.value && drawer[curr.name] > 0) {
      change -= curr.value;
      drawer[curr.name] -= curr.value;
      amount += curr.value;
      change = Math.round(change * 100) / 100;
    }

    if (amount !== 0) {
      acc.push([curr.name, amount]);
    }

    return acc;
  }, []);

  if (changeArray.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
  } else {
    output.status = "OPEN";
    output.change = changeArray;
  }

  return output;
};

export default checkCashRegister;
