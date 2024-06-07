import type { Metadata } from "next";
import { Inter, Lilita_One } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {siteConfig} from "@/config/site";
import ReactQueryProvider from "@/components/providers/query-client-provider";
import AuthProvider from "@/components/providers/auth-provider";
import { Toaster } from "@/components/ui/toaster";

const fontSans = Inter({ 
	subsets: ["latin"],
	variable: "--font-sans",
});

const fontLogo = Lilita_One({ 
	weight: "400",
	subsets: ["latin"],
	variable: "--font-logo",
});

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
					fontLogo.variable
				)}
			>
				<ReactQueryProvider>
					<AuthProvider>
						<main>
							{children}
						</main>
						<Toaster />
					</AuthProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
