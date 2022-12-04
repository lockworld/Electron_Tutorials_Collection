const notifier = require('node-notifier');
         const path = require('path');

            notifier.notify ({
               title: 'My awesome title',
               message: 'Hello from electron, Mr. User!',
               icon: path.join('','resources','images','Family 1.jpg'),  // Absolute path (doesn't work on balloons)
               sound: true,  // Only Notification Center or Windows Toasters
               wait: true    // Wait with callback, until user action is taken against notification
            
            }, function (err, response) {
               // Response is response from notification
               console.log(response);
            });

            notifier.on('click', function (notifierObject, options) {
               console.log("You clicked on the notification");
            });

            notifier.on('timeout', function (notifierObject, options) {
               console.log("Notification timed out!");
            });