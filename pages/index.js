import { useSession, signIn, signOut } from "next-auth/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const { data: session } = useSession();
	if (!session) {
		return (
			<main className="bg-cyan-900 w-screen h-screen flex justify-center items-center">
				<section className="text-center w-full">
					<button onClick={() => signIn('google')} className=" bg-slate-200 py-2 px-6 rounded-md">
						Login with Google
					</button>
				</section>
			</main>
		);
	}
	return (
		<div>
			Signed in as {session.user.email} <br />{" "}
			<button onClick={() => signOut()} className="py-2 px-4 bg-slate-200 rounded-md">Sign out</button>
		</div>
	);
}
