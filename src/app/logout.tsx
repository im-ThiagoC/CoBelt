"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
	const router = useRouter();

	return ( 
		<Button
			onClick={async () => {
				await authClient.signOut({
					fetchOptions: {
						onSuccess: () => {
							router.push("/login");
						}
					}
				});
			}}
		>
			Logout
		</Button>
	 );
}
 
export default LogoutButton;