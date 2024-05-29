import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Head } from '@inertiajs/react'

export default function Home(props: { version: number }) {
	return (
		<>
			<Head title="Homepage" />
			<div className="container bg-black"></div>
		</>
	)
}
