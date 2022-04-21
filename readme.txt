1. node installed


2. set file index.js, example:
cron.schedule('57 23 * * *', () => {	
   task();
});
#run a task at 23:57hs every day. (https://www.npmjs.com/package/node-cron)


3. set file mailer/config.js		
#auth, from, to


4. https://myaccount.google.com/lesssecureapps		
#allow sender google account to use node-mailer


5. in console: 
node -v				#check nodeJS version
cd desktop/nodejs-cron		#go to folder
npm install			#install dependencies
node index.js			#run


6. Ctrl + C 			#stop script