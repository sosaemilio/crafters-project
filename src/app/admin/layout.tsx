import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";

export const metadata: Metadata = {
	title: "Crafter Heaven",
	description: "Admin Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode} ) {
	return (
		<html lang="en">
			<body className={inter.className}>
                <NavBar/>
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
		</html>
	);
}
