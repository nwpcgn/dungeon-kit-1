<script lang="ts">
	import { game } from '$lib/app.svelte.ts'
	import { Dialog, GridMiniMap } from '$lib'
	let modal = $state()
	const recreateMap = () => {
		game.grid.createMap()
	}
</script>

<div class="main bg-base-100">
	<div class="page center nwp">
		<div class="flex flex-col items-center gap-4">
			<GridMiniMap tileSize={8}></GridMiniMap>
		</div>
	</div>
</div>

<aside class="sb w-[200px] bg-base-200">
	<nav class="grid gap-2 p-2">
		<button class="btn btn-neutral" onclick={recreateMap}>New Map</button>
	</nav>
</aside>

<Dialog bind:modal1={modal}></Dialog>
