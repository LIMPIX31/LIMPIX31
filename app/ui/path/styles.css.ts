import { style } from '@vanilla-extract/css'

import { font }  from '&theme/vars.css.ts'

export const text = style({
	fontFamily: font.mono,
	display: 'inline',
})
