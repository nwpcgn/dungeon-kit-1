<script lang="ts">
	import '../app.css'
	import '../assets/scss/index.scss'
	import { navigating, page, updated } from '$app/state'
	import { Sprites, sleep, Loader, AppBar } from '$lib'
	let { children, data } = $props()
	let current = $derived(page.url.hash.replace('#', ''))
	const init = async () => {
		await sleep(1000)
		return true
	}
	let promise = init()
</script>

{#await promise}
	<Loader></Loader>
{:then _}
	<AppBar></AppBar>
	<div class="main-grid">
		<aside class="aside w-[200px] bg-base-200">
			<nav class="grid gap-2 p-2">
				{#each data.nav as { name, href, icon }}
					<a href="#{href}" class="btn btn-neutral" class:btn-outline={current === href}>{name}</a>
				{/each}
			</nav>
		</aside>
		{@render children?.()}
	</div>
{/await}

<Sprites></Sprites>
