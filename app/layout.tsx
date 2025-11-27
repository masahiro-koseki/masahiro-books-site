// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

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
	
	keywords: [
	// 日本語
	"山と自然に魅せられて",
	"小関 政弘",
	"Masahiro Koseki",
	"風景写真",
	"岩手",
	"焼石岳",
	"栗駒山",
	"早池峰山",
	"渓流",
	"森",
	"写真集",
	
	// 英語
	"Fascinated by Mountains and Nature",
	"Japanese landscape photography",
	"Iwate mountains",
	"mountain photography",
	"nature photography",
	],
	
	authors: [{ name: "Masahiro Koseki" }],
	creator: "Masahiro Koseki",
	
	openGraph: {
		type: "website",
		locale: "ja_JP",
		siteName:
		"山と自然に魅せられて / Fascinated by Mountains and Nature | Masahiro Koseki Photography",
		title:
		"山と自然に魅せられて / Fascinated by Mountains and Nature | Masahiro Koseki Photography",
		description:
		"岩手の山岳風景と渓流、森の静けさを写し取った写真集「山と自然に魅せられて（Fascinated by Mountains and Nature）」の公式ウェブサイト。",
		url: "/",
		images: [
		{
			url: "/images/ogp-main.jpg",
			width: 1200,
			height: 630,
			alt: "Fascinated by Mountains and Nature | Masahiro Koseki Photography",
		},
		],
	},
	
	twitter: {
		card: "summary_large_image",
		title:
		"山と自然に魅せられて / Fascinated by Mountains and Nature | Masahiro Koseki Photography",
		description:
		"Japanese landscape photography by Masahiro Koseki — mountain vistas, forests, and streams from Iwate, Japan.",
		images: ["/images/ogp-main.jpg"],
	},
	
	alternates: {
		canonical: "/",
	},
};

export default function RootLayout({
		children,
	}: {
		children: React.ReactNode;
}) {
	return (
		<html lang="ja">
		<body className="antialiased bg-white text-neutral-900">
		{children}
		</body>
		</html>
	);
}
