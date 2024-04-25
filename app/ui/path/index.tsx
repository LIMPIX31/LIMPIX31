import { text } from './styles.css.ts'

const PATH = '::'
const SPACE = ' '

type Props = {
	spaceBefore?: boolean
	spaceAfter?: boolean
}

export function Path({ spaceBefore = false, spaceAfter = true }: Props) {
	return (
		<pre className={text}>
			{spaceBefore && SPACE}
			{PATH}
			{spaceAfter && SPACE}
		</pre>
	)
}
