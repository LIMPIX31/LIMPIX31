import { createVar } from '@vanilla-extract/css'

export const color = {
	background: createVar(),
	foreground: createVar(),
	accent: {
		base: createVar(),
	},
}

export const font = {
	default: createVar(),
	display: createVar(),
	mono: createVar(),
}

export const space = {
	xs: createVar(),
	s: createVar(),
	m: createVar(),
	l: createVar(),
	xl: createVar(),
	xxl: createVar(),
}
