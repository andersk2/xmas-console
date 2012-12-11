define(['modules/output', "commands/disco"], function(output, Disco){

	var Command = function() {
	};
	Command.prototype.run = function(args) {
        var lastCommand = output.getLastCommand();

        if(lastCommand !== '') {
            switch(lastCommand) {
                case "cd":
                    output.print("CD is da shitz, stop harrasing me!");
                    break;

                case "del":
                case "delete":
                    output.print("Nahh, that's just stupid...");
                    break;

                case "format":
                    output.print("Can't really remember which drive you wanted to format, so I'm gonna go ahead and format C: for you :)");
                    output.print('Formatting C: (<span class="formatter">0</span>% done)');
                    var counter = 0;
                    (function update() {
                        setTimeout(function() {
                            if (counter++ < 100) {
                                $(".formatter").last().html(counter);
                                update();
                            } else {
                                $("#main").prepend(
                                    $("<div>", {id: "overlay"}).fadeIn(500)
                                );
								$("#overlay").click(function() {
									output.print("And the punishment for doing stupid things...");
									(new Disco()).run([]);
                                   	$("#overlay").remove();
                                });
                            }
                        }, 70);
                    })();
                    break;

                default:
                    output.print("Me not find anz YES-question :(");
            }
        }
        output.setLastCommand('');
	};

	return Command;
});