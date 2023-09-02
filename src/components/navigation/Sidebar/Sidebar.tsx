'use client'
import { useEffect, useRef, useState } from 'react'
import Icon from '@/components/global/Icon/Icon'
import React from 'react'
import { HomeSections } from '@/app/page'

export type SidebarProps = {
	activeSection: HomeSections
	isVisible: boolean
}

type ListItemProps = {
	children: React.ReactNode
	isActive: boolean
	href: string
}

const ListItem: React.FC<ListItemProps> = ({ children, isActive, href }) => {
	return (
		<a
			href={href}
			className={`${
				isActive && 'bg-pampas-500'
			} rounded-lg w-12 h-12 flex justify-center items-center hover:bg-pampas-400 duration-300`}
		>
			{children}
		</a>
	)
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection = '', isVisible }) => {
	return (
		<div
			className={`z-40 fixed flex flex-col items-center justify-between py-8 px-1 gap-3 bg-pampas-300 rounded-full right-4 lg:right-6 xl:right-8 2xl:right:10 top-1/3 drop-shadow-md font-bold duration-1000 ${
				isVisible ? '!opacity-0 md:!opacity-100' : '!opacity-0'
			}`}
		>
			<ListItem href={`#${HomeSections.heroSection}`} isActive={activeSection === HomeSections.heroSection}>
				<Icon icon="house" />
			</ListItem>
			<ListItem href={`#${HomeSections.experience}`} isActive={activeSection === HomeSections.experience}>
				<Icon icon="school" />
			</ListItem>
			<ListItem href={`#${HomeSections.projects}`} isActive={activeSection === HomeSections.projects}>
				<Icon icon="amp_stories" />
			</ListItem>
			{/* <ListItem href={`#${HomeSections.playground}`} isActive={activeSection === HomeSections.playground}>
				<Icon icon="build" />
			</ListItem> */}
		</div>
	)
}

export default Sidebar
