// Require the Bolt package (github.com/slackapi/bolt)
const  {App}  = require("@slack/bolt");
const {tryIt} = require('./util.js');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");

// WebClient insantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient(process.env.SLACK_BOT_TOKEN, {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG
});
// Post a message to a channel your app is in using ID and message text
async function publishMessage(id, text) {
  try {
    // Call the chat.postMessage method using the built-in WebClient
    const result = await app.client.chat.postMessage({
      // The token you used to initialize your app
      token: process.env.SLACK_BOT_TOKEN,
      channel: id,
      text: text
      // You could also use a blocks[] array to send richer content
    });

    // Print result, which includes information about the message (like TS)
    // console.log(result, 'from within the publish messaage thing ');
  }
  catch (error) {
    console.error(error);
  }
}
//publishes a message to the channel when the code here changes
// publishMessage("C01ULQAQ1N2", "Hello world :tada:");

async function findChannelIds(tryit) {
  try{
  const result = await app.client.conversations.list({token: process.env.SLACK_BOT_TOKEN});
    // console.log(result);
  result.channels.map((channel) => {
    // channel.purpose.value = channel.purpose.value + ' reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
    // tryIt(channel.purpose.value);
    // console.log(channel.id, ' is the channel id for channel named: ', channel.name);
    return channel.id;
  })
    
    // console.log(result);
    return result.channel;
}catch(error){
    console.log(error);
  }
}

async function findConversationByChannelName(name) {
  try{
  const result = await app.client.conversations.list({token: process.env.SLACK_BOT_TOKEN});
  for (const channel of result.channels) {
    if (channel.name === name) {
      // console.log('returning channel name: ', channel.name)
      // console.log('full channel object: ', channel)
      return channel.name;
    } else{
      // console.log('doesnt exist')
    }
  }
    tryIt(result)
}catch(error){
    console.log(error);
  }
}

// async function publishMessage(id, text) {
//   try{
//     const result = await app.client.chat.postMessage({
//       token: process.env.SLACK_BOT_TOKEN,
//       channel: id,
//       text: text
//     })
//     console.log(payload);
//   }catch(error){}
// }


// publishMessage('C01ULQAQ1N2', 'helllllllo san fransiscoo' );
// //find channels the bot has access to
findChannelIds();

// // Find conversation with a specified channel `name`
findConversationByChannelName("bot");

// All the room in the world for your code
app.event('app_home_opened', async ({ event, client, context }) => {
  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    const result = await client.views.publish({

      /* the user that opened your app's app home */
      user_id: event.user,

      /* the view object that appears in the app home*/
      view: {
        type: 'home',
        callback_id: 'home_view',

        /* body of the view */
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `<@${event.user}> *Welcome to your _App's Home_* :tada:`
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app."
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Click me!"
                }
              }
            ]
          }
        ]
      }
    });
    // console.log(result);
    
    // console.log(event.user, 'user id');
  }
  catch (error) {
    console.error(error);
  }
});

// All the room in the world for your code
app.event('member_joined_channel', async ({ event, client, context }) => {
  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    const result = await client.views.publish({

      /* the user that opened your app's app home */
      user_id: event.user,

      /* the view object that appears in the app home*/
      view: {
        type: 'home',
        callback_id: 'home_view',

        /* body of the view */
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `User has joined a channel`
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app."
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Click me!"
                }
              }
            ]
          }
        ]
      }
    });
    //when somevbody joins the channel it triggers an event
    //by accessing that event we can pull the user out of it, the below line corresponds the user id
    //with an actual user within slack, the <> surrounding it is what tells slack to convert it to a tag
    publishMessage('C01ULQAQ1N2', `welcome <@${event.user}>`)
    // console.log(event);
    
    
  }
  catch (error) {
    console.error(error);
  }
});



// All the room in the world for your code
app.event('member_left_channel', async ({ event, client, context }) => {
  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    const result = await client.views.publish({

      /* the user that opened your app's app home */
      user_id: event.user,

      /* the view object that appears in the app home*/
      view: {
        type: 'home',
        callback_id: 'home_view',

        /* body of the view */
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `User has joined a channel`
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app."
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Click me!"
                }
              }
            ]
          }
        ]
      }
    });
    //when somevbody joins the channel it triggers an event
    //by accessing that event we can pull the user out of it, the below line corresponds the user id
    //with an actual user within slack, the <> surrounding it is what tells slack to convert it to a tag
    publishMessage('C01ULQAQ1N2', `everyone wave goodbye to <@${event.user}> that ship has left the harbor`)
    // console.log(event);
    
    
  }
  catch (error) {
    console.error(error);
  }
});


// All the room in the world for your code
app.event('mess.channels', async ({ event, client, context }) => {
  try {
    /* view.publish is the method that your app uses to push a view to the Home tab */
    const result = await client.views.publish({

      /* the user that opened your app's app home */
      user_id: event.user,

      /* the view object that appears in the app home*/
      view: {
        type: 'home',
        callback_id: 'home_view',

        /* body of the view */
        blocks: [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": `A message has been posted to a channel!`
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "This button won't do much for now but you can set up a listener for it using the `actions()` method and passing its unique `action_id`. See an example in the `examples` folder within your Bolt app."
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Click me!"
                }
              }
            ]
          }
        ]
      }
    });
    // console.log(event);
  }
  
  catch (error) {
    console.error(error);
  }
});


// Listen for a slash command invocation
app.command('/helloworld', async ({ ack, payload, context}) => {
  

  try {
    // Acknowledge the command request
  await ack();
    
    const result = await app.client.chat.postMessage({
      // type: 'shortcut',
      token: context.botToken,
      // Channel to send message to
      channel: payload.channel_id,
      // Include a button in the message (or whatever blocks you want!)
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `Hello again <@${payload.user_id}>`,
          },
          accessory: {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'Click me!'
            },
            action_id: 'button_abc'
          }
        }
      ],
      bolly: 'gotcha',
      // Text in the notification
      text: 'Message from Test App'
    });
    // console.log(payload)
    // console.log(result.message.user);
  }
  catch (error) {
    console.error(error);
  }
});


(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
