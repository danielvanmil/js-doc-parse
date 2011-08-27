define([ 'dojo/_base/kernel', './env' ], function (dojo, env) {
	var oldConsole = this.console;

	function log(fn, prefix, messages) {
		messages = [].slice.call(messages, 0);
		if (prefix) {
			messages.unshift(prefix, env.file.filename + ':' + env.tokenizer.line + ':' + env.tokenizer.column);
		}

		oldConsole[fn].apply(oldConsole, messages);
	}

	this.console = dojo.mixin({}, this.console, {
		log: function () {
			log('log', null, arguments);
		},
		warn: function () {
			log('warn', 'WARN:', arguments);
		},
		error: function () {
			log('error', 'ERR: ', arguments);
		},
		info: function () {
			log('info', 'INFO:', arguments);
		}
	});
});