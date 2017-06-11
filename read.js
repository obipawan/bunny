const regex = /[\s,]*(~@|[\[\]{}()'`~^@]|"(?:\\.|[^\\"])*"|;.*|[^\s\[\]{}('"`,;)]*)/g

export const tokenize = (input = '') =>
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

export const generateAST = (tokens = []) => ast(tokens).tokens

const ast = (tokens = []) => {
	const length = tokens.length
	if (!length)
		return { tokens: [] }
	let obj = []
	let index = 0
	while (true) {
		const token = tokens[index]
		if (!token)
			break
		if (token === '(') {
			const {
				endIndex = 0,
				tokens: subAst,
			} = ast(tokens.slice(++index))
			if (subAst.length) {
				if (!obj.length) {
					obj = [ ...subAst ]
					break
				} else {
					obj.push(subAst)
				}
			}
			index += (endIndex + 1)
		}
		if (token === ')')
			break
		if (index === length - 1)
			break
		obj.push(evalToken(token))
		index++
	}
	return { tokens: obj, endIndex: index }
}
