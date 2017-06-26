import env from './env'

const evaluate = ast => {
	if (!Array.isArray(ast))
		return evalAst(ast)

	if (!ast.length)
		return ast
	if (ast.length === 1)
		return ast[0]
	const list = evalAst(ast)
	const fn = list[0]
	return fn.apply(fn, list.slice(1))
}

const evalAst = ast =>
	Array.isArray(ast)
	? ast.map(item => evaluate(item))
	: env[ast] || ast

export default evaluate
