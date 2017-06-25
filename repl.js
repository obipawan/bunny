import read from './read'
import evaluate from './evaluate'
import print from './print'

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
			print(evaluate(read(input)))
		} catch (e) {
			console.log(e.message)
		}
		repl()
	})

export default () => repl()
