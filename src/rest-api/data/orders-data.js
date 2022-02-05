const productsData = require("./products-data");

module.exports = ordersData = Object.values(productsData).reduce(
  (acc, { id: productID }, i) => {
    acc["transaction" + (i + 1)] = {
      id: "0" + (i + 1),
      countryFrom: "America",
      coutryTo: "Armenia",
      productID,
    };
    return acc;
  },
  {}
);
