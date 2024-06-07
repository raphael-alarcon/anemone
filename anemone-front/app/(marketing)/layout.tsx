import { MainNavigation } from "@/components/navigation/main-navigation";

export default async function MarketingLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<div className="container border-x-[1px] border-dashed px-0">
			<MainNavigation />
			{children}
		</div>
	)
}