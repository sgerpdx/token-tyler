// ref URL: https://ethereum.org/en/developers/docs/apis/javascript/
const Web3 = require("web3");
const web3 = new Web3("hosting-URL");

// to create a wallet from a mnemonic:
mnemonic = "bizarre string of words from Ganache";

walletMnemonic = Wallet.fromMnemonic(mnemonic);

// to create a wallet from an existing private key (eg Slack ID):

walletPrivateKey = new Wallet(walletMnemonic.privateKey);

walletMnemonic.address === walletPrivateKey.address;

// each wallet has internal cryptographic components:
// walletPrivateKey.privateKey
// walletPrivateKey.publicKey

// a wallet created with a privateKey has a null mnemonic

//// maybe this is better web3 for the wallet:

web3.eth.accounts.wallet.create(numberOfAccounts [, entropy]);
web3.eth.accounts.wallet.add(account);
// e.g. to add an account with a private key to the wallet:

// web3.eth.accounts.wallet.add({
//     privateKey: '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
//     address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01'
// });
// > {
//     index: 0,
//     address: '0xb8CE9ab6943e0eCED004cDe8e3bBed6568B2Fa01',
//     privateKey: '0x348ce564d427a3311b6536bbcff9390d69395b06ed6c486954e971d960fe8709',
//     signTransaction: function(tx){...},
//     sign: function(data){...},
//     encrypt: function(password){...}
// }