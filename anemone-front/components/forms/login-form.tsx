"use client";

import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "./form-input";
import { useState } from "react";

import { login } from "@/lib/utils";
import { navigate } from "@/app/actions";
import { useToast } from "../ui/use-toast";
import { useAuth } from "../providers/auth-provider";

const loginFormSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(1, "Password is required"),
});


export function LoginForm() {

	const { setAuth } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	const form = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof loginFormSchema>) {
		setIsLoading(true);
		const signInResponse = await login(values);

		setIsLoading(false);
		if (!signInResponse) {
			toast({
				title: "Invalid credentials",
				variant: "destructive"
			})
			return;
		}	

		setAuth(true);
		navigate("/");
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField name="email" render={({ field }) => (
					<FormInput i18nNS="auth">
						<Input placeholder="example@example.com" {...field}/>
					</FormInput>
				)}>
				</FormField>
				<FormField name="password" render={({ field }) => (
					<FormInput i18nNS="auth">
						<PasswordInput {...field}/>
					</FormInput>
				)}>
				</FormField>
				<Button className="w-full" type="submit" disabled={isLoading}>Login</Button>
			</form>
		</Form>
	)
}