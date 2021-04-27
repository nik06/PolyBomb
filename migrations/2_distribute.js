const POLYBOMB = artifacts.require("POLYBOMB");
const BigNumber = require("bignumber.js");

/**
 * @type {Array<String>}
 */
const addresses = ["0x8b95cA77F94b230EaF06E4fC1e87f627dE710115", "0x8b95cA77F94b230EaF06E4fC1e87f627dE710115"];

module.exports = async function (deployer) {
  const POLYBOMBInstance = await POLYBOMB.deployed();
  const distributedAmount = new BigNumber(3400000).times(
    new BigNumber(10).pow(18)
  );

  for (let i = 0; i < addresses.length; i++) {
    const address = addresses[i];
    POLYBOMBInstance.transfer(address, distributedAmount);
    await setTimeout(() => {}, 100);
    console.log(address);
  }
};
