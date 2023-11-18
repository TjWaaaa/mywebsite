import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { type } from 'os'

type FadeInContainerProps = {
	children: React.ReactNode
	width?: 'fit-content' | 'w-full'
	type?: 'fadeIn' | 'slideIn'
}

const FadeInContainer: React.FC<FadeInContainerProps> = ({ children, width = 'fit-content', type = 'slideIn' }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	const mainControls = useAnimation()

	useEffect(() => {
		if (type === 'slideIn' && isInView) {
			mainControls.start('visible')
		} else if (type === 'fadeIn') {
			mainControls.start('visible')
		}
	}, [isInView, mainControls, type])

	return (
		<div ref={ref} className={`relative h-full`}>
			<motion.div
				className="h-full"
				variants={{
					hiddenFadeIn: { opacity: 0, y: 0 },
					hiddenSlideIn: { opacity: 0, y: 50 },
					visible: { opacity: 1, y: 0 },
				}}
				initial={type === 'fadeIn' ? 'hiddenFadeIn' : 'hiddenSlideIn'}
				animate={mainControls}
				transition={{
					duration: 0.5,
					delay: 0.1,
				}}
			>
				{children}
			</motion.div>
		</div>
	)
}

export default FadeInContainer
