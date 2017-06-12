import read from './read'

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
})

const prompt = 'bunny> '

const repl = () =>
	readline.question(prompt, input => {
		if (input === null) {
			readline.close()
			return;
		}
		input && console.log(read(input))
		repl()
	})

export default () => repl()
