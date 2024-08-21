// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '*.md' {
	import type { SvelteComponentDev } from 'svelte/internal'

	export default class Comp extends SvelteComponentDev {
		$$prop_def: {}
	}
	export const metadata: Record<string, any>
}
