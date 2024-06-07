import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
	className?: string;
	size: number;
	withText?: boolean;
}

export function Logo({ className, withText = false, size }: LogoProps) {
  
	return (
		<div className={cn("inline-flex items-center space-x-2", className)}>
			<Image src="/logo.png" alt="Anemone" width={size} height={size}/>
			{withText && <span className="text-md font-extrabold text-[#2E2E2E]">{siteConfig.name}</span>}
		</div>
	)
}