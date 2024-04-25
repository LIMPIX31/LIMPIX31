import { style } from '@vanilla-extract/css'

import { color, font, space } from '&theme/vars.css.ts'

export const root = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: space.xxl,
	padding: `${space.l} ${space.m}`,
	color: color.foreground,
})

export const label = style({
	fontFamily: font.display,
	fontWeight: 900,
	fontSize: '5rem',
})

export const construction = style({
	position: 'relative',
	background: 'linear-gradient(#7d6af9, #0758c2)',
	backgroundClip: 'text',
	WebkitTextFillColor: 'transparent',
})

export const underline = style({
	position: 'absolute',
	bottom: 0,
	left: 0,
	width: '100%',
})
