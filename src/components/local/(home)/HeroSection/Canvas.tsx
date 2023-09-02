'use client'
import Sketch from 'react-p5'
import p5Types from 'p5'

type AnimationMode = {
	range: number
	mapBottomLimit: number
	mapTopLimit: number
	noiseX: number
	noiseY: number
	noiseZ: number
	rangeB: [number, number]
	rangeC: [number, number]
}

const mode1: AnimationMode = {
	range: 18,
	mapBottomLimit: -0.1,
	mapTopLimit: 0.9,
	noiseX: 0.0015,
	noiseY: 0.045,
	noiseZ: 0.0008,
	rangeB: [0.1, 0.35],
	rangeC: [1, 0.65],
}

const mode2: AnimationMode = {
	range: 5,
	mapBottomLimit: -0.2,
	mapTopLimit: 1,
	noiseX: 0.0008,
	noiseY: 2,
	noiseZ: 0.0008,
	rangeB: [0.25, 0.6],
	rangeC: [0.7, 0.95],
}

const mode3: AnimationMode = {
	range: 18,
	mapBottomLimit: -0.4,
	mapTopLimit: 1,
	noiseX: 0.001,
	noiseY: 0.015,
	noiseZ: 0.0012,
	rangeB: [0.05, 0.35],
	rangeC: [1, 0.7],
}

type CanvasType = {
	mode?: 0 | 1 | 2
	strokeWeight?: number
}

const Canvas: React.FC<CanvasType> = ({ mode = 2, strokeWeight = 4 }) => {
	const modi = [mode1, mode2, mode3]

	const setup = (p5: p5Types, canvasParentRef: Element) => {
		const canvasDiv = document.getElementById('canvas')
		const height = canvasDiv?.clientHeight
		p5.createCanvas(p5.windowWidth, height ?? p5.windowHeight).parent(canvasParentRef)
		p5.frameRate(24)
	}

	const windowResized = (p5: p5Types) => {
		const canvasDiv = document.getElementById('canvas')
		const height = canvasDiv?.clientHeight
		p5.resizeCanvas(p5.windowWidth, height ?? p5.windowHeight)
	}

	const draw = (p5: p5Types) => {
		p5.background(255)
		p5.noFill()
		p5.strokeWeight(strokeWeight)

		for (let i = 0; i < modi[mode].range; i++) {
			p5.colorMode(p5.HSL)
			let b = p5.map(i, 0, modi[mode].range, modi[mode].rangeB[0], modi[mode].rangeB[1])
			let c = p5.map(i, 0, modi[mode].range, modi[mode].rangeC[0], modi[mode].rangeC[1])
			p5.stroke(35, 100 * b, 100 * c)

			p5.beginShape()
			for (let x = 0; x < p5.windowWidth; x += 5) {
				let n = p5.noise(x * modi[mode].noiseX, i * modi[mode].noiseY, p5.frameCount * modi[mode].noiseZ)
				let y = p5.map(n, modi[mode].mapBottomLimit, modi[mode].mapTopLimit, 0, p5.height)
				p5.vertex(x, y)
			}
			p5.endShape()
		}
	}

	return (
		<Sketch
			className="absolute z-0 w-full h-full overflow-hidden"
			setup={setup}
			draw={draw}
			windowResized={windowResized}
		/>
	)
}

export default Canvas
