import { getUser } from "@/lib/utils";
import { User } from "@/lib/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = (auth: boolean | null) => {
	return useQuery<User>({
		queryKey: ["currentUser", auth],
		queryFn: async () => {
			return getUser();
		},
	});
};
