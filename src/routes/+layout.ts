import type { LayoutLoad } from './$types'

export const load = (async () => {
	return {
		name: 'Nwp-Studio',
		nav: [
			{
				name: 'Start',
				href: '/',
				icon: 'nwp-start',
				hidden: false
			},
			{
				name: 'Game',
				href: '/game',
				icon: 'nwp-game',
				hidden: false
			},
			{
				name: 'Settings',
				href: '/settings',
				icon: 'nwp-options',
				hidden: false
			}
		]
	}
}) satisfies LayoutLoad
