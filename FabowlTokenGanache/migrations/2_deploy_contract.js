let fabowlToken = artifacts.require("./fabowlToken.sol");

module.exports = async function(deployer) {
  await deployer.deploy(fabowlToken);
};
