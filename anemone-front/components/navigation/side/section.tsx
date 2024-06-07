import { Separator } from "@/components/ui/separator";
import { NavTitle } from "../nav-title";

interface SideNavSectionProps {
	title: string
	children: React.ReactNode
}

export default function SideNavSection({ title, children }: SideNavSectionProps) {
	return (
		<div className="flex flex-col space-y-2 text-gray-500">
			<NavTitle>{title}</NavTitle>
			{children}
			<Separator />
		</div>
	)
}