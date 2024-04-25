import      { font }         from '&theme/vars.css.ts'
import type { FC }           from 'react'

import      { version }      from '&package.json'
import      { Path }         from '&ui/path'

import      { construction } from './styles.css.ts'
import      { label }        from './styles.css.ts'
import      { root }         from './styles.css.ts'
import      { underline }    from './styles.css.ts'

export function UnderConstruction() {
	return (
		<div className={root}>
			<div className={label}>
				<div>
					Under{' '}
					<span className={construction}>
						Construction
						<svg
							className={underline}
							width='256'
							preserveAspectRatio='none'
							height='8'
							version='1.1'
							viewBox='0 0 256 8'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='m0.6626 7.337c18.393-11.359 40.223 3.0565 59.385-4.2607 15.835-6.0469 28.823 2.8272 45.022 2.1713 18.268-0.73965 36.59-5.9811 54.595 5e-3 18.198 6.0504 35.138-6.5889 53.326-4.3106 13.971 1.7499 28.632 7.8381 42.347 0.83412'
								fill='none'
								stroke='#0758c2'
								strokeLinecap='round'
								strokeWidth='1.3252'
							/>
						</svg>
					</span>
				</div>
			</div>
			<div style={{ fontWeight: '900', fontFamily: font.mono }}>
				<div>
					<Path />
					be_patient
				</div>
				<div>v{version}</div>
			</div>
		</div>
	)
}

displayName(UnderConstruction)

function displayName(component: FC) {
	component.displayName = component.name
}
