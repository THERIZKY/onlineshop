import type { Metadata } from "next";
import { Providers } from "./providers";

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layouts/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Toko Titik",
	description: "Toko Titik",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={"dark"}>
			<body className={inter.className}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
			</body>
		</html>
	);
}
