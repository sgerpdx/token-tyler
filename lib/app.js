// ref URL: https://ethereum.org/en/developers/tutorials/calling-a-smart-contract-from-javascript/
const Web3 = require("web3");
require('dotenv').config();
// const web3 = new Web3("http://localhost:7777");
const web3 = new Web3(process.env.ROPSTEN_URL);
const tokenOne = require("../build/contracts/Token");
// we can use tokenOne.abi to access the methods
const tokenABI = tokenOne.abi;
const TOKEN_ADDRESS = "0x45C69420113DBb0B46D8cBd91E6fF59f2Bb4baD4";
const contractAddress = "0x18c233e07662669fd37dC3839D7fceB538803Ac0";

const aToken = new web3.eth.Contract(tokenABI, TOKEN_ADDRESS);
const senderAddress = "0xE1FefDfF38A55d7fBD49cDb12e4dD0E1c7FA7acf";
const receiverAddress = "0xd375C836F2644854dBD04CA5813D7E97B998c47E";
const domAddress = "0x8105193c23113602345d3fC84Bdc1473020699E0";
const samAddress = "0xaAD8ACd477997c724098883Ad0DA0c39DFcbcFCc";
const tylerAddress = "0xcd257a0c76b83d009a992495DBF3E106d77DDf6b";
const eionAddress = "0x64c987a32fF214c8822C80c93ac351b1d99e7371";

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// async function findChannelIds() {
//   try{
//   const result = await app.client.conversations.list({token: process.env.SLACK_BOT_TOKEN});
//     // console.log(result);
//   result.channels.map((channel) => {
//     // channel.purpose.value = channel.purpose.value + ' reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
//     // tryIt(channel.purpose.value);
//     // console.log(channel.id, ' is the channel id for channel named: ', channel.name);
//     return channel.id;
//   })

//     // console.log(result);
//     return result.channel;
// }catch(error){
//     console.log(error);
//   }
// }
// findChannelIds();


app.event('reaction_added', async ({ event, channel_id, user_id }) => {
  try{

  }catch(error){

  }
})
// Listen for a slash command invocation
app.command("/helloworld", async ({ ack, payload, context }) => {
  try {
    // Acknowledge the command request
    await ack();
    // const transFer = aToken.methods
    // .transferFrom(domAddress, tylerAddress, 500)
    // .send({ from: domAddress }, function (err, res) {
    //   if (err) {
    //     console.log("An error occured", err);
    //     return;
    //   }
    //   console.log("Hash of the transaction: " + res);
    // });
    // console.log(transFer);
    const account = web3.eth.accounts.create();
    // console.log(account, 'tttttttttttttttttttttttttttttttttttt');  


//********************************************************************** */
//      Read accounts

    //creates a new account when passed a specific slack user_id
    const privateKey = web3.eth.accounts.hashMessage(payload.user_id);
    const realAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
    console.log(realAccount);
//************************************************************************ */
    const fakeAccount = web3.eth.accounts.privateKeyToAccount(privateKey);
    const userBalance = await web3.eth.getBalance('0x621923d073A2FA9aD43b51E2497c09c1869a61e3');
    // const userBalance1 = await  web3.eth.getBalance('0x5Fc6086Db80797DacC68283263554f92523FE249');
    // const send = await web3.eth.sendTransaction({
    //   from: '0x621923d073A2FA9aD43b51E2497c09c1869a61e3',
    //   to: '0x5Fc6086Db80797DacC68283263554f92523FE249',
    //   value: '500000'
    // })



    //********************************************************** */
    //  Transfer tokens

    const send = await aToken.methods.transfer('0x621923d073A2FA9aD43b51E2497c09c1869a61e3', 500000);
    console.log(send);

    //************************************************************ */
    // console.log(realAccount, 'first account ');
    // console.log(fakeAccount, 'should be same account');

    // const accounts =await aToken.getAccounts();
    // console.log(accounts, '777777777777777777777777777777777');
    const bb = aToken.methods.totalSupply()._method.signature;
    // console.log(bb);
    // const thisNThat = aToken.methods.balanceOf(domAddress); 
    // const transfer = async() => aToken.methods.transferFrom(domAddress, eionAddress, 455);
    // console.log(await transfer());
    // console.log(thisNThat, 'tttttttttttttttttttttttttttttttttttttt');
    const result = await app.client.chat.postMessage({
      // type: 'shortcut',
      token: context.botToken,
      // Channel to send message to
      channel: payload.channel_id,
      // Include a button in the message (or whatever blocks you want!)
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Hello again <@${payload.user_id}>, this channel is managed by contract with signature ${bb}
            Your account public address is ${realAccount.address} use this account to recieve funds.
            Your current balance is ${userBalance}`,
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "Click me!",
            },
            action_id: "button_abc",
          },
        },
      ],
      bolly: "gotcha",
      // Text in the notification
      text: "Message from Test App",
    });
    // console.log(payload)

    // console.log(result.message.user);
  } catch (error) {
    console.error(error);
  }
});

// the approach here is to invoke methods directly from the contract via the ABI:

// aToken.methods.balanceOf(senderAddress).call(function (err, res) {
//   if (err) {
//     console.log("There was an error", err);
//     return;
//   }
//   console.log("The balance is:", res);
// });

// aToken.methods
//   .transfer(receiverAddress, 1000000)
//   .send({ from: senderAddress }, function (err, res) {
//     if (err) {
//       console.log("An error occured", err);
//       return;
//     }
//     console.log("Hash of the transaction: " + res);
//   });

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3122);

  console.log("⚡️ Bolt app is running!");
})();
