import { HomeSections } from '@/types/reactTypes'

export const routes = {
	home: (section: HomeSections) => {
		if (section === HomeSections.heroSection) {
			return '/'
		} else {
			return `/#${section}`
		}
	},
	imprint: '/imprint',

	siebtesLeben: '/siebtes-leben',
	extSiebtesLebenArticle: 'https://www.edit-magazin.de/siebtes-leben-sterben-einer-digitalisierten-welt.html',
	extSiebtesLebenWebsite: 'https://www.siebtesleben.de',
	extSiebtesLebenGithub: 'https://github.com/dopeshot/beyond-life',

	beast: '/beast',
	// extBeastPitch: 'https://drive.google.com/drive/folders/1AjzgFhwvH6kDlfXtaFIQkTuLtTAWimU2',

	chatbot: '/chatbot',
	extChatbotGithub: 'https://github.com/TjWaaaa/Chatbot',

	lightTomorrow: '/light-tomorrow',
	extLightTomorrowGithub: 'https://github.com/TjWaaaa/LightTomorrow',

	aboutTomorrow: '/about-tomorrow',
	extAboutTomorrowWebsite: 'https://durability.about-tomorrow.de/',
	extAboutTomorrowPrototype:
		'https://xd.adobe.com/view/84ff3ede-91ba-48d1-b1d0-a365486e7c93-d1ac/screen/fec9e5f8-3821-4c26-8577-b5211c97f3a8?fullscreen',

	settlers: '/settlers-of-catan',
	extSettlersGithub: 'https://github.com/TjWaaaa/SiedlerVonCatan',
}
