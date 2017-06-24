const regex = /[\s,]*(~@|[\[\]{}()'`~^@]|"(?:\\.|[^\\"])*"|;.*|[^\s\[\]{}('"`,;)]*)/g

const tokenize = (input = '') =>
	input.match(regex)
		.filter(token => !!token)
		.map(token => token.replace(' ', ''))

const evalToken = token => {
	if (!isNaN(token))
		return Number(token)
	if (token === 'true')
		return true
	if (token === 'false')
		return false
	if (token === 'nil')
		return null
	return { name: token }
}

const ast = (tokens = []) => {
	const array = []
	if (!tokens.length)
		return array
	let index = 0
	if (tokens[index] === '(') {
		while(tokens[++index] !== ')') {
			if (index === tokens.length + 1)
				throw new Error('invalid exp')
			if (tokens[index] === '(') {
				const innerAst = ast(tokens.slice(index))
				array.push(innerAst.array)
				index += innerAst.endIndex
			} else {
				array.push(tokens[index])
			}
		}
	}
	return { array, endIndex: index }
}

export default (input = '') =>
	ast(tokenize(input)).array
