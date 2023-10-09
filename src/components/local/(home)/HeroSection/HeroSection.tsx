import Image from 'next/image'
import image from '@/assets/images/ImageMe.png'
import Headline from '@/components/global/Headline/Headline'
import Icon from '@/components/global/Icon/Icon'
import { useRouter } from 'next/navigation'
import { routes } from '@/services/routes/routes'
import { HomeSections } from '@/types/reactTypes'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Canvas = dynamic(() => import('./Canvas'), { ssr: false })

export type HeroSectionProps = {
	scrollY: number
}

const backgroundModes = [0, 1, 2]

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
	const router = useRouter()
	const [backgroundMode, setBackgroundMode] = useState<0 | 1 | 2>(0)

	useEffect(() => {
		setBackgroundMode(backgroundModes[Math.floor(Math.random() * backgroundModes.length)] as 0 | 1 | 2)
	}, [])

	return (
		<div className="w-full sm:h-[calc(100vh_-_128px)]">
			<div id="canvas" className="relative w-full h-full">
				<Canvas mode={backgroundMode} strokeWeight={12} />
				<div className="container relative flex flex-col h-full z-20 pt-14 sm:pt-24">
					<Headline level={1} size="7xl" className="text-center sm:text-left whitespace-nowrap">
						Hi, I{"'"}m <span className="text-pampas-500">Timo</span>, I{"'"}m a<br />
						Fullstack Developer
					</Headline>
					<div className="flex-1 flex flex-col sm:flex-row">
						<div className="flex-1 sm:w-1/2 pb-10 sm:pb-8 flex flex-col justify-end sm:items-start items-center text-center sm:text-left">
							<div className="w-9/12 sm:w-full h-full sm:h-2/3 md:pt-0 pt-4 pb-4 sm:pl-1 flex gap-4 md:gap-20 items-end">
								<Image
									className="w-full sm:w-auto h-48 sm:h-64 object-cover object-[0%_35%] sm:object-top drop-shadow-sm rounded-xl"
									src={image}
									alt="Me"
								/>
								<button
									onClick={() => router.replace(routes.home(HomeSections.experience))}
									className="relative h-12 -bottom-2 hidden sm:inline"
								>
									<Icon icon="arrow_downward" size="5xl" color={scrollY <= 100 ? 'pampas' : 'transparent'} />
								</button>
								{/* TODO: change to <Button /> */}
							</div>
						</div>
						<div className="w-full sm:w-1/2 sm:pt-20 pb-10 flex flex-col justify-end sm:items-end gap-4 text-center sm:text-right">
							<Headline level={4} size="5xl">
								passionate & dedicated
							</Headline>
							<div className="w-full md:w-[574px] pb-1 flex flex-row sm:flex-col gap-4 justify-between font-semibold sm:gap-2 xl:gap-12 xl:flex-row text-left sm:text-right xl:text-left">
								<p className="">Timo Waldherr</p>
								<p className="">25 Years</p>
								<p className=" 2xl:w-60 text-right">
									located in Stuttgart,
									<wbr /> Germany
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
