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
			return
		}
		try {
			input && console.log(read(input))
		} catch (e) {
			console.log(e.message)
		}
		repl()
	})

export default () => repl()
