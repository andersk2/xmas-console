define(['modules/chat', 'modules/output'], function(chat, output){

	var Command = function() {
	};

	Command.prototype.run = function(args) {
		output.print(chat.user.name );
	};

	return Command;
});