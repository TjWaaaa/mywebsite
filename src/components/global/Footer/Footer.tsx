import { routes } from '@/services/routes/routes'
import Link from 'next/link'
import Headline from '../Headline/Headline'
import Button from '../Button/Button'

const Footer: React.FC = () => {
	return (
		<div className="w-full bg-main-200 py-6 border-t-2 border-solid border-white">
			<div className="container grid grid-cols-3 py-4 text-2xl font-semibold">
				<div>
					<p className="text-lg">
						Timo Walderr
						<br />
						Stuttgart, Germany
					</p>
				</div>
				<div />
				<div className="">
					<Button size="md" text="Imprint" color="transparent" hasPadding={false} href={routes.imprint} />
				</div>
			</div>
		</div>
	)
}

export default Footer
