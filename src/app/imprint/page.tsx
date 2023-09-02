import HeaderBar from '@/components/global/HeaderBar/HeaderBar'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Imprint',
	description: '',
}

const Imprint = () => {
	return (
		<div>
			<HeaderBar />
			<h1>Imprint</h1>
		</div>
	)
}

export default Imprint
