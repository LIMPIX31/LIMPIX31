import { style } from '@vanilla-extract/css'

import { color } from './vars.css.ts'
import { space } from './vars.css.ts'
import { font }  from './vars.css.ts'

export const theme = style({
	vars: {
		[color.background]: '#000104',
		[color.foreground]: '#e5e7ff',

		[color.accent.base]: '#0713C2',

		[font.default]: '"Space Grotesk", sans-serif',
		[font.display]: '"Space Grotesk", sans-serif',
		[font.mono]: '"Space mono", sans-serif',

		[space.xs]: '.236rem',
		[space.s]: '.345rem',
		[space.m]: '.786rem',
		[space.l]: '1rem',
		[space.xl]: '1.618rem',
		[space.xxl]: '2.618rem',
	},
})
