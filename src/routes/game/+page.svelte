<script lang="ts">
	import { game } from '$lib/app.svelte.ts'
	import { Dialog, GridMiniMap, GridMap } from '$lib'
	let modal = $state()
</script>

<div class="main bg-base-100">
	<div class="page center nwp">
		<div class="flex flex-col items-center gap-4">
			<GridMap></GridMap>
		</div>
	</div>
</div>

<aside class="sb bg-base-200">
	<nav class="flex flex-col gap-2 p-4">
		<GridMiniMap tileSize={4}></GridMiniMap>
		<div class="flex items-center justify-between gap-2">
			<div class="font-bold">Map</div>
			<div></div>
		</div>
		<div class="flex items-center justify-between gap-2">
			<div>Size</div>
			<div>{game.grid.config.width} x {game.grid.config.height}</div>
		</div>
		<div class="flex items-center justify-between gap-2">
			<div>Items</div>
			<div>{game.grid.items.length}</div>
		</div>
		<div class="flex items-center justify-between gap-2">
			<div>Enemys</div>
			<div>{game.grid.enemys.length}</div>
		</div>
		<hr />
		<div class="flex items-center justify-between gap-2">
			<div class="font-bold">Player</div>
			<div></div>
		</div>
		<div class="flex items-center justify-between gap-2">
			<div>{game.fighter.name}</div>
			<div>{game.fighter.hp}/{game.fighter.maxHp}</div>
		</div>
		<div class="flex items-center justify-between gap-2">
			<div>Position</div>
			<div>{game.grid.hero.x}/{game.grid.hero.y}</div>
		</div>
		<div class="flex items-center justify-between gap-2">
			<div>Inventory</div>
			<div>{game.inventory.length}</div>
		</div>
	</nav>
</aside>

<Dialog bind:modal1={modal}></Dialog>
