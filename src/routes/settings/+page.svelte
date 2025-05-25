<script lang="ts">
	import { game } from '$lib/app.svelte.ts'
	import { Dialog, GridMiniMap } from '$lib'
	let modal = $state()

</script>

<div class="main bg-base-100">
	<div class="page center nwp">
		<div>
			<div class="p-4" data-theme="abyss">
				<button class="btn btn-neutral">Neutral</button>
				<button class="btn btn-primary">Primary</button>
				<button class="btn btn-secondary">Secondary</button>
				<button class="btn btn-accent">Accent</button>
				<button class="btn btn-info">Info</button>
				<button class="btn btn-success">Success</button>
				<button class="btn btn-warning">Warning</button>
				<button class="btn btn-error">Error</button>
			</div>
			<div class="p-4">
				<button class="btn btn-info btn-soft">Info</button>
				<button class="btn btn-success btn-soft">Success</button>
				<button class="btn btn-warning btn-soft">Warning</button>
				<button class="btn btn-error btn-soft">Error</button>
			</div>

			<!-- tab -->
			<div class="tabs tabs-lift p-4">
				<button class="tab">Tab 1</button>
				<button class="tab tab-active">Tab 2</button>
				<button class="tab">Tab 3</button>
				<button class="tab"></button>
			</div>

			<!-- toggle, checkbox, radio -->
			<div class="p-4">
				<input type="checkbox" class="toggle" />
				<input type="checkbox" class="toggle toggle-primary" />
				<input type="checkbox" class="toggle toggle-secondary" />
				<input type="checkbox" class="toggle toggle-accent" />
				<br />
				<input type="checkbox" class="checkbox" />
				<input type="checkbox" class="checkbox-primary checkbox" />
				<input type="checkbox" class="checkbox-secondary checkbox" />
				<input type="checkbox" class="checkbox-accent checkbox" />
				<br />
				<input type="radio" name="radio" class="radio" />
				<input type="radio" name="radio" class="radio-primary radio" />
				<input type="radio" name="radio" class="radio-secondary radio" />
				<input type="radio" name="radio" class="radio-accent radio" />
			</div>
		</div>
	</div>
</div>

<aside class="sb bg-base-200 w-[200px]">
	<nav class="flex justify-center p-2">
		<GridMiniMap tileSize={3}></GridMiniMap>
	</nav>
</aside>

<Dialog bind:modal1={modal}></Dialog>
