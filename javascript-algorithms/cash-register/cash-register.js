const denom = [
  { name: "ONE HUNDRED", value: 100.0 },
  { name: "TWENTY", value: 20.0 },
  { name: "TEN", value: 10.0 },
  { name: "FIVE", value: 5.0 },
  { name: "ONE", value: 1.0 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.1 },
  { name: "NICKEL", value: 0.05 },
  { name: "DIME", value: 0.01 }
];

// Transform cid array in a drawer object
const parseCID = cid => {
  cid.reduce(
    (acc, curr) => {
      const [name, amount] = curr;

      acc.total += amount;
      acc[name] = amount;

      return acc;
    },
    { total: 0 }
  );
};

// Process change devolution
const checkCashRegister = (price, cash, cid) => {
  let output = { status: "", change: [] };
  let change = cash - price;

  let drawer = parseCID(cid);
};

export default checkCashRegister;
