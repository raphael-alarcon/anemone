import { ChevronLeft, CreditCard, Lock, LogOut, LucideIcon, Shield, User, Users } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
	login: Lock,
	logout: LogOut,
	user: User,
	role: Shield,
	billing: CreditCard,
	chevronLeft: ChevronLeft,
	users: Users,
} as const;