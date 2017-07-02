import Env from './env'

const globalEnv = new Env(null)
globalEnv.set('+', (a, b) => Number(a) + Number(b))
globalEnv.set('-', (a, b) => Number(a) - Number(b))
globalEnv.set('/', (a, b) => Number(a) / Number(b))
globalEnv.set('*', (a, b) => Number(a) * Number(b))

const evaluate = (ast, env = globalEnv) => {
	if (!Array.isArray(ast))
		return evalAst(ast, env)

	if (!ast.length)
		return ast
	if (ast.length === 1)
		return env.get(ast[0]) || ast[0]

	const [ a0, a1, a2 ] = ast
	switch (a0) {
		case 'def':
			return env.set(a1, evaluate(a2, env))
		case 'let':
			const letEnv = new Env(env)
			for (let i = 0; i < a1.length; i += 2) {
				letEnv.set(a1[i], evaluate(a1[i + 1], letEnv))
			}
			return evaluate(a2, letEnv)
		default:
			const list = evalAst(ast, env)
			const [ fn ] = list
			return fn.apply(fn, list.slice(1))
	}
}

const evalAst = (ast, env) =>
	Array.isArray(ast)
	? ast.map(item => evaluate(env.get(item) || item))
	: env.get(ast) || ast

export default evaluate
