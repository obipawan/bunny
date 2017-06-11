// const readline = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// })

const prompt = 'bunny> '
import { tokenize, generateAST } from './read'
// const repl = () => {
// 	readline.question(prompt, input => {
// 		if (input === null) {
// 			readline.close()
// 			return;
// 		}
// 		input && console.log(input)
// 		repl()
// 	})
// }

export default () => {
	let str = '( + 10 ( * 3 2 ) )'
	// let str = '( + 10 20 )'
	const ast = generateAST(tokenize(str))
	console.log(JSON.stringify(ast))
}
