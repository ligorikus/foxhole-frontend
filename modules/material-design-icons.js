import { resolve } from 'path'

const icons = [
	'AccountOutline',
	'BellOutline',
	'StarOutline',
	'Web',
	'ClipboardEditOutline',
	'CogOutline',
	'ArchiveOutline',
	'Steam'
]

export default function () {
	this.nuxt.hook('components:dirs', (dirs) => {
		dirs.push({
			path: resolve('node_modules/vue-material-design-icons'),
			prefix: 'Icon',
			pattern: `**/@(${icons.join('|')}).vue`,
		})
	})
}