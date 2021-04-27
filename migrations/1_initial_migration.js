const Migrations = artifacts.require("Migrations");
const POLYBOMB = artifacts.require("POLYBOMB");

module.exports = async function (deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(POLYBOMB);
};