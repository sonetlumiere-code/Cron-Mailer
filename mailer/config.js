const mailerConfig = {
    service: 'gmail',
    auth: {
		user: "sender@gmail.com",
		pass: "xxxxxxxx"
	},
    from: 'sender@gmail.com',
    to : 'receiver@gmail.com'
};

module.exports = mailerConfig;