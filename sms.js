const sdk = require('messagemedia-messages-sdk');
const controller = sdk.MessagesController;

sdk.Configuration.basicAuthUserName = "0XkN0D6gufmx4sqcwgkR";
sdk.Configuration.basicAuthPassword = "SfHe1l9RmiXRAhycHEavUiWyoToaUK";

fs = require('fs');
var msg = fs.readFileSync('data.txt','utf8')
const NUMBER = "";

var body = new sdk.SendMessagesRequest({
    "messages":[
        {
            "content": msg,
            "destination_number": NUMBER,
        }
    ]
});

controller.createSendMessages(body, function(error, response, context) {
    console.log(response);
});