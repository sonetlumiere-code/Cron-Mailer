const cron = require('node-cron');
const mailer = require('./mailer/mailer');

const cronJS = {
    run: () => {
        console.log('cron running . . .');
        cron.schedule('57 23 * * *', () => {
            mailer.sendEmail();
        });
    }
};

cronJS.run();