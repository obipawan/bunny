export default class {
	constructor (outer) {
		this.data = {}
		this.outer = outer || null
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
