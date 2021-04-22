const Accounts = require("web3-eth-accounts");
const accounts = new Accounts('ws://localhost:7777');

//// basic account creation:
// returns object with: address(string) + privateKey(string) + signTransaction(tx [, callback]) function + sign(data) function

web3.eth.accounts.create([entropy]);
//// example:
// web3.eth.accounts.create();
// > {
//     address: "0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01",
//     privateKey: "0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709",
//     signTransaction: function(tx){...},
//     sign: function(data){...},
//     encrypt: function(password){...}
// }



//// create account with private key:
// returns same object as above
// ignoreLength is a Boolean

web3.eth.accounts.privateKeyToAccount(privateKey [, ignoreLength ]);

// other functions:
web3.eth.accounts.signTransaction(tx, privateKey [, callback]);
web3.eth.accounts.recoverTransaction(rawTransaction);


