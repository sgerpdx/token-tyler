// ref URL: https://ethereum.org/en/developers/tutorials/calling-a-smart-contract-from-javascript/
const Web3 = require("web3");
const web3 = new Web3("hosting-URL");
const tokenOne = require("../build/contracts/Token");
// we can use tokenOne.abi to access the methods
const tokenABI = tokenOne.abi;
const TOKEN_ADDRESS = "789zGHI";

const aToken = new web3.eth.Contract(tokenABI, TOKEN_ADDRESS);
const senderAddress = "123xABC";
const receiverAddress = "456yDEF";

// the approach here is to invoke methods directly from the contract via the ABI:

aToken.methods.balanceOf(senderAddress).call(function (err, res) {
  if (err) {
    console.log("There was an error", err);
    return;
  }
  console.log("The balance is:", res);
});

aToken.methods
  .transfer(receiverAddress, 1000000)
  .send({ from: senderAddress }, function (err, res) {
    if (err) {
      console.log("An error occured", err);
      return;
    }
    console.log("Hash of the transaction: " + res);
  });
