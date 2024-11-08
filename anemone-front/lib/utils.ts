import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { API_URL } from "./constants";
import { User } from "./user";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const login = async (credentials?: Pick<User, "email" | "password">) => {
	const response = await fetch(`${API_URL}/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify(credentials),
	});
	if (!response.ok) {
		return null;
	}
	return response.json();
};

export const register = async (credentials?: Pick<User, "email" | "password" | "firstName" | "lastName"> & { confirmPassword: string }) => {
	const response = await fetch(`${API_URL}/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		body: JSON.stringify(credentials),
	});
	if (!response.ok) {
		return null;
	}
	return response.json();
};

export const logout = async () => {
	const response = await fetch(`${API_URL}/logout`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
	});
	if (!response.ok) {
		return null;
	}
	return response.json();
};

export const getUser = async () => {
	const response = await fetch(`${API_URL}/me`, {
		credentials: "include",
	});
	if (!response.ok) {
		return null;
	}
	return response.json();
};

String.prototype.toTitleCase = function () {
	return this.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};

declare global {
	interface String {
		toTitleCase(): string;
	}
}
