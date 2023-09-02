'use client'
import Headline from '@/components/global/Headline/Headline'
import Image from 'next/image'
import ProjectDescription from '@/components/local/(projects)/ProjectDescription/ProjectDescription'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import Icon from '@/components/global/Icon/Icon'
import tutorial01 from '@/assets/images/siebtesLeben/tutorial01.jpg'
import tutorial02 from '@/assets/images/siebtesLeben/tutorial02.jpg'
import tutorial03 from '@/assets/images/siebtesLeben/tutorial03.jpg'

const SlProjectDescription = () => {
	return (
		<ProjectDescription
			section1Content={
				<div className="h-full pt-4 md:pt-0 lg:justify-center flex flex-col xl:pr-28 gap-2">
					<Headline level={2} size="2xl">
						Create your will without the need for a notary
					</Headline>
					<p className="text-base leading-tight">
						{`Notaries are expensive, the legal regulations surrounding the preparation of wills are complicated. Even
                    in 2023, there is no good way to draw up one's own will cheaply, simply and without a notary. Anyone who
                    tries to write their will on their own will quickly run into problems.`}
					</p>
					<div className="pt-4 lg:pt-4 xl:pt-6 2xl:pt-10 hidden lg:flex gap-10 justify-center">
						<Icon icon="gavel" size="!text-5xl" />
						<Icon icon="security" size="!text-5xl" />
						<Icon icon="schedule" size="!text-5xl" />
					</div>
				</div>
			}
			section2Content={
				<Swiper
					modules={[Navigation, Pagination]}
					navigation
					pagination={{ clickable: true }}
					className="aspect-video rounded-2xl object-center"
				>
					<SwiperSlide>
						<Image src={tutorial01} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={tutorial02} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={tutorial03} alt="" />
					</SwiperSlide>
				</Swiper>
			}
			section1ClassName="order-2 md:order-1"
			section2ClassName="order-1 md:order-2"
		/>
	)
}

export default SlProjectDescription
