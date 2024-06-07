"use client";

import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function IndexPage() {

	const words = ["time", "money", "energy", "ideas"];

	return (
		<section className="h-[40rem] text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto flex flex-col justify-center items-center space-y-4">
			<Link
				href={siteConfig.links.x}
				className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
				target="_blank"
			>
            Follow along on <strong>𝕏</strong>
			</Link>
			<div className="">
				With anemone, you finally have a proper way to save your 
				<FlipWords words={words} />
				.
				<div className="text-base font-normal text-neutral-500 dark:text-neutral-400">
					This app is built-in-public, the code is open-source and you can contribute to it.
				</div>
			</div>
			<div className="inline-flex space-x-4">
				<Button>Get started</Button>
				<Button variant={"outline"}>Discover</Button>
			</div>
		</section>
	)
}