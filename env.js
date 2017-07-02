export default class {
	constructor (outer, binds = [], expressions = []) {
		this.data = {}
		this.outer = outer || null

		binds.forEach((bind, i) => this.data[bind] = expressions[i])
	}

	find (key) {
		if (this.data[key])
			return this
		if (this.outer)
			return this.outer.find(key)
		return null
	}

	set (key, value) {
		this.data[key] = value
		return value
	}

	get (key) {
		const env = this.find(key)
		if (env)
			return env.data[key]
	}
}
