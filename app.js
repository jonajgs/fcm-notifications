const FCM = require('fcm-node');
// Replace these with your own values.
const apiKey = "AIzaSyDcAZUZLejn5wHPPBghKkY4N53hCWTTi-s";
const deviceID = "fXUGBlJMl0g:APA91bEUG-MQH7l7Rff8MeWe7TkJn1Mp5kREiEq3orukt9xBaRl0uWoyKgQvCjJfdu49GIznZ0X2aK4BkbXSXJigecsh4Q42zUdTgTqOZAGrbCFRbF4T8NK4W3s3pbN3e0xvB-4nJEny";
const fcm = new FCM(apiKey);

const message = {
    to: deviceID,
    data: {
        title: 'Badge Test',
        message: 'Badges, we don\'t need no stinking badges',
        badge: 7
    }
};

fcm.send(message, (err, response) => {
  if (err) {
    console.log(err);
    console.log("Something has gone wrong!");
  } else {
    console.log("Successfully sent with response: ", response);
  }
});
