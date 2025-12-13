// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const GA_ID = "G-B3W4BL798N";

export const metadata: Metadata = {
	metadataBase: new URL("https://masahiro-koseki.com"),
	
	title: {
		default:
		"Books & Coloring Books by Masahiro Koseki",
		template:
		"%s | Books & Coloring Books by Masahiro Koseki",
	},
	
	description:
	"Picture books of a small stoat, Japanese castles coloring books, wild birds series, and nature photo books by Masahiro Koseki. オコジョ絵本、城や野鳥の塗り絵、自然写真集まで、小関政弘の作品をまとめた公式紹介サイトです。",
	
	icons: {
		icon: [
		{ url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
		{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
		{ url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
		{ url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
		{ url: "/favicon.ico" },
		],
		apple: "/apple-touch-icon.png",
	}
};

export default function RootLayout({
		children,
	}: {
		children: React.ReactNode;
}) {
	return (
		<html lang="ja">
		<body className="antialiased bg-white text-neutral-900">
		<Script
		src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
			strategy="afterInteractive"
			/>
			<Script id="ga-init" strategy="afterInteractive">
			{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${GA_ID}', {
						page_path: window.location.pathname,
				});
			`}
			</Script>
			{children}
			</body>
			</html>
	);
}
