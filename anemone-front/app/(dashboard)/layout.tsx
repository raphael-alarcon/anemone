import { SideNavigation } from "@/components/navigation/side-navigation";
import { Separator } from "@/components/ui/separator";

export default async function DashboardLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<div className="inline-flex h-screen">
			<SideNavigation />
			<Separator orientation="vertical" className="h-full"/>
			{children}
		</div>
	)
}