import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface NavigationLinkProps {
	href: string;
	className?: string;
	children: React.ReactNode;
}

export function NavigationLink({ href, children, className }: NavigationLinkProps) {

	const segment = useSelectedLayoutSegment();

	return (
		<NavigationMenuItem className="inline-flex">
			<Link href={href} legacyBehavior passHref>
				<NavigationMenuLink 
					className={cn(
						"text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
						className,
						href.startsWith(`/${segment}`)
							? "text-foreground"
							: "text-foreground/60",
					)}>
					{children}
				</NavigationMenuLink>
			</Link>
		</NavigationMenuItem>
	);
}