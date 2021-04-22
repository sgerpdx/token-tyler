// tutorial ref: https://ethereum.org/en/developers/tutorials/set-up-web3js-to-use-ethereum-in-javascript/
const Web3 = require("web3");
// hosting-URL will be localhost or wherever deployed from:
const web3 = new Web3("http://localhost:7777");
// here is some alternative code to set & change provider:
// const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:1234"))
// web3.setProvider("ws://localhost:5678")

async function totalSupply() {
  const currentSupply = await web3.eth.totalSupply();
  console.log(currentSupply);
  return currentSupply;
}

async function balanceOf(userAddress) {
  const currentBal = await web3.eth.balanceOf(userAddress);
  console.log(currentBal);
  return currentBal;
}

// the two transfer functions return Booleans:

async function transfer(addressTo, amt) {
  const success = await web3.eth.transfer(addressTo, amt);
  console.log(success);
  return success;
}

async function transferFrom(addressFrom, addressTo, amt) {
  const success = await web3.eth.transferFrom(addressFrom, addressTo, amt);
  console.log(success);
  return success;
}

module.exports = {
  totalSupply,
  balanceOf,
  transfer,
  transferFrom,
};
