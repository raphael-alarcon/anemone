"use client"

import { useState } from "react";
import { Logo } from "../logo";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";
import NavigationUserDropdown from "./navigation-user-dropdown";
import { NavigationLink } from "./navigation-link";
import SideNavSection from "./side/section";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

interface SideNavigationItem {
	href: string
	label: string
	icon: keyof typeof Icons
}

interface SideNavigationSection {
	title: string
	items: SideNavigationItem[]
}

const sideNavigationSections: SideNavigationSection[] = [
	{
		title: "Admin",
		items: [
			{
				href: "/admin/users",
				label: "Users",
				icon: "users"
			},
		]
	},
]


export function SideNavigation() {

	const [expanded, setExpanded] = useState(true)

	return (
		<NavigationMenu orientation="vertical" className={cn(
			"flex flex-col justify-between m-4 max-w-none",
			expanded ? "w-32" : "w-16" 
		)}>
			<NavigationMenuList className="flex flex-col space-y-4">
				<NavigationMenuItem className="mb-8">
					<Logo size={35}/>
				</NavigationMenuItem>
				{sideNavigationSections.map((section: SideNavigationSection) => (
					<SideNavSection title={section.title} key={section.title}>
						{section.items.map(item => {
							const Icon = Icons[item.icon || "arrowRight"]
							return (
								<NavigationLink href={item.href} className="inline-flex items-center" key={item.label}>
									<Icon className="h-4"/>
									{item.label}
								</NavigationLink>
							)
						})}
					</SideNavSection>
				))}
			</NavigationMenuList>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationUserDropdown />
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}