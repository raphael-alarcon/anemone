type NavTitleProps = {
	children: string
}

export function NavTitle({ children }: NavTitleProps) {

	return (
		<h3 className="text-xs text-foreground/70 uppercase">
			{children}
		</h3>
	)
}