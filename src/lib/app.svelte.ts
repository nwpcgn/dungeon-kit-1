import createMap from './game/createMap'
import loot from './data/loot.json'
import shuffle from './utils/shuffle.js'
export interface Game {
	grid: Grid
	fighter: Fighter
	inventory?: InvenEntity[] | null
}
export interface Grid {
	config: Config
	map?: (string[] | null)[] | null
	items?: ItemEntity[] | null
	enemys?: ItemEntity[] | null
	hero: Hero
}
export interface Config {
	width: number
	height: number
	size: number
	type: string
}
export interface ItemEntity {
	x: number
	y: number
	slug: string
}
export interface Hero {
	x: number
	y: number
}
export interface Fighter {
	id: number
	name: string
	hp: number
	atk: number
	def: number
	mana: number
	sp: number
	maxHp: number
	maxMana: number
}
export interface InvenEntity {
	name: string
	type: string
	value: number
}
export interface Loot {
	id: number
	name: string
	rarity: string
	type: string
	dropChance: number
	value: number
}

class Fighter {
	id = $state()
	name = $state()
	hp = $state()
	atk = $state()
	def = $state()
	mana = $state()
	maxHp = $state()
	maxMana = $state()
	constructor({ id, name, hp, atk, def, mana }) {
		this.id = id
		this.name = name
		this.hp = hp
		this.atk = atk
		this.def = def
		this.mana = mana
		this.maxHp = this.hp
		this.maxMana = this.mana
	}
}

class Grid {
	config: Config = $state({
		width: 40,
		height: 40,
		size: 40,
		type: 'Uniform'
	})
	hero: Hero | null = $state()
	items: ItemEntity[] | null = $state()
	enemys: ItemEntity[] | null = $state()
	map: string[][] | null = $state()

	constructor() {
		this.createMap()
	}

	createMap() {
		const data = createMap(
			this.config.width,
			this.config.height,
			this.config.type
		)
		this.map = data.map
		this.items = data.items
		this.enemys = data.enemys
		this.hero = data.position
	}
	updateHero(obj = { x: 0, y: 0 }) {
		this.hero = obj
	}
	removeItem(x = 0, y = 0) {
		this.items = this.items.filter((d) => d.x != x || d.y != y)
	}
	removeEnemy(x = 0, y = 0) {
		this.enemys = this.enemys.filter((d) => d.x != x || d.y != y)
	}
	updateConfig(obj: Config) {
		this.config = { ...this.config, ...obj }
	}
}

class Game {
	grid: Grid = $state()
	fighter: Fighter = $state()
	#inventory: InvenEntity[] = $state()
	constructor() {
		this.grid = new Grid()
		this.#inventory = []
		this.fighter = new Fighter({
			id: 113,
			name: 'Mew',
			hp: 35,
			atk: 4,
			def: 4,
			mana: 9,
			sp: 4
		})
		this.grid.createMap()
	}
	get inventory() {
		return this.#inventory
	}
	set inventory(value) {
		this.#inventory.push(value)
	}
}

export let game = new Game()
