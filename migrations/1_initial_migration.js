const TestContract = artifacts.require("TestContract");
const Token = artifacts.require("Token");

module.exports = function (deployer) {
  deployer.deploy(TestContract);
  deployer.deploy(Token);
};
