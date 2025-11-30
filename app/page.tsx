// app/page.tsx rewritten version placeholder
// full code rewrite will be placed next turn after structure scaffold confirmation
"use client";

import React, { useMemo, useState, useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AboutSection from "@/components/sections/AboutSection";
import NewsSection from "@/components/sections/NewsSection";
import ContactSection from "@/components/sections/ContactSection";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GalleryVerticalEnd, BookOpen, Camera, Mail, ExternalLink, ArrowRight, MapPin, Calendar, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import BooksSection from "@/components/BooksSection";
import { BOOKS } from "@/data/books";


// --- Amazon Links ---
const AMAZON_JP = "https://www.amazon.co.jp/dp/B0G1CNPJ1L";
const AMAZON_EN = "https://www.amazon.com/dp/B0G1GZVWKW";

const LANG_KEY = "mk_lang";
type Lang = "ja" | "en";

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => {
	const safeId = typeof id === "string" ? id : "";
	const extra = typeof className === "string" ? className : "";
	
	
	return (
		<section id={safeId} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-1 ${extra}`}>
		{children}
		</section>
	);
};

const H2 = ({ children }: { children: React.ReactNode }) => (
	<motion.h2
	initial={{ opacity: 0, y: 8 }}
	whileInView={{ opacity: 1, y: 0 }}
	viewport={{ once: true }}
	transition={{ duration: 0.5 }}
	className="text-1xl sm:text-2xl md:text-2xl font-bold tracking-tight"
	>
	{children}
	</motion.h2>
);


export default function Page() {
	const [lang, setLang] = useState<Lang>("ja");
	
	const pictureBooks = BOOKS.filter((b) => b.category === "picture-book");
	const coloringBooks = BOOKS.filter((b) => b.category === "coloring");
	const photoBooks = BOOKS.filter((b) => b.category === "photo");
	
	// コンポーネント内（Page 関数の中）で:
	const [selectedCategory, setSelectedCategory] = useState<
	"all" | "picture" | "coloring" | "photo"
	>("all");
	
	
	// URL の ?lang= を優先して言語を決定し、なければ localStorage から復元
	useEffect(() => {
			if (typeof window === "undefined") return;
			
			const params = new URLSearchParams(window.location.search);
			const urlLang = params.get("lang");
			if (urlLang === "ja" || urlLang === "en") {
				setLang(urlLang);
				try {
					localStorage.setItem(LANG_KEY, urlLang);
				} catch {}
				return;
			}
			
			// URL で指定がなければ localStorage を見る
			try {
				const saved = localStorage.getItem(LANG_KEY) as Lang | null;
				if (saved === "ja" || saved === "en") setLang(saved);
			} catch {}
	}, []);
	
	const changeLang = (l: Lang) => {
		setLang(l);
		try {
			localStorage.setItem(LANG_KEY, l);
		} catch {}
	};
	
	const [menuOpen, setMenuOpen] = useState(false);
	
		
	const NEWS_ITEMS = [
	{
		date: "2025-11-28",
		title_ja: "Websiteを全面リニューアル",
		title_en: "Website Fully Updated",
		body_ja:
		"絵本・塗り絵・写真集を横断して紹介できる新デザインにリニューアルしました。Hero画像のスライドや2カラムレイアウトを追加し、より見やすい構成になりました。",
		body_en:
		"The website has been redesigned with a new layout showcasing picture books, coloring books, and photo books in a unified format. A new two-column Hero section with slideshow has also been added."
	},
	{
		date: "2025-11-20",
		title_ja: "各書籍の内容紹介ページを作成",
		title_en: "Individual Book Introduction Pages Added",
		body_ja:
		"これまで制作した絵本、塗り絵シリーズ、写真集について、それぞれ内容紹介ページを作成しました。各書籍の特徴やテーマが分かりやすく確認できます。",
		body_en:
		"Introduction pages for each book—including picture books, coloring books, and photo books—have been created. Visitors can now easily explore the themes and features of each title."
	},
	{
		date: "2025-11-10",
		title_ja: "絵本や塗り絵などの書籍を紹介するWebsiteの制作開始",
		title_en: "Website Development Started for Showcasing Books",
		body_ja:
		"絵本や塗り絵、写真集などをまとめて紹介できる新しいWebsiteの制作を開始。作品ごとのページ構成やデザインの検討を進めています。",
		body_en:
		"Development has begun on a new website designed to showcase picture books, coloring books, and photo books in one place. Work is underway on organizing layouts and refining each book’s introduction page."
	}
	] as const;
	
	const t = useMemo(
		() =>
		({
				ja: {
					nav: {
						home: "ホーム",
						book: "本の一覧",
						about: "プロフィール",
						news: "お知らせ",
						contact: "お問い合わせ"
					},
					
					hero: {
						title: "山と自然を楽しむ絵本・塗り絵・写真集",
						subtitle:
						"オコジョの山のぼうけん、城や野鳥の塗り絵シリーズ、そして自然風景写真集まで。",
						poem:
						"東北・岩手の山や森、町並みへのまなざしから生まれた本たち。<br />" +
						"ページをめくるたびに、山の息づかいや季節の色合いを、そっとたどるように楽しんでいただけたらうれしく思います。",
						cta1: "本の一覧を見る",
						cta2: "作品ギャラリーへ"
					},
					
					// ★ トップページの書籍セクション見出し
					book: {
						lead: "本の一覧",
						desc:
						"これまでに制作した絵本、塗り絵シリーズ、写真集をカテゴリごとにご紹介します。"
					},
					
					about: {
						title: "プロフィール",
						bio:
						"岩手県金ケ崎町生まれ。子どもの頃から山や川で遊び、自然の中で過ごす時間が何よりの楽しみだった。大人になってからも東北の山々を歩き続け、そこで出会った動物たちや季節の移ろいに心を動かされてきた。その体験を子どもたちにも伝えたいという思いから、オコジョを主人公にした「オコジョの山のぼうけん」シリーズの制作を開始。山で見た景色や動物たちの世界を、絵と物語として届けている。また、日本の城や野鳥、花をテーマにした塗り絵シリーズも制作し、“自然を感じる本づくり”をライフワークとして活動している。",
						location: "拠点：岩手県（日本）",
						focus: "主なテーマ：自然・山・動物・物語づくり",
						links: "詳しいプロフィール"
					},
					
					news: {
						title: "お知らせ",
						items: NEWS_ITEMS
					},
					
					contact: {
						title: "お問い合わせ",
						desc: "お気軽にお知らせください。",
						name: "お名前",
						email: "メールアドレス",
						message: "メッセージ",
						send: "送信"
					},
					
					footer: {
						rights: "© Masahiro Koseki",
						lang: "言語",
						jp: "日本語",
						en: "English"
					}
				},
				
				en: {
					nav: {
						home: "Home",
						book: "Books",
						about: "About",
						news: "News",
						contact: "Contact"
					},
					
					hero: {
						title: "Picture Books, Coloring Books & Nature Photo Books",
						subtitle:
						"Stoat adventure picture books, castles and wild birds coloring series, and a landscape photo book from northern Japan.",
						poem:
						"Born from quiet moments in the mountains, forests, and towns of northern Japan.<br />" +
						"As you turn each page, I hope you gently feel the breath of the mountains and the changing colors of the seasons.",
						cta1: "Browse All Books",
						cta2: "View Gallery"
					},
					
					book: {
						lead: "Books & Coloring Books",
						desc:
						"Here you’ll find my published works, including picture books, Japanese castles and wild birds coloring series, and a landscape photo book.",
					},
					
					about: {
						title: "About",
						bio:
						"Born in Kanegasaki, Iwate, Masahiro grew up exploring mountains, rivers, and forests—places that shaped his deep appreciation for nature. Even as an adult, he continues to walk the mountains of northeastern Japan, observing the animals and the quiet changes of each season. These experiences inspired him to create picture books that share the wonder of nature with children. This led to the “Stoat’s Big Mountain Adventure” series, in which a curious stoat explores real mountain landscapes and encounters wildlife along the way. He also creates coloring books featuring Japanese castles, wild birds, and seasonal flowers, all rooted in the idea of helping readers “feel the presence of nature through books.”",
						location: "Location: Iwate, Japan",
						focus: "Themes: Nature, mountains, wildlife, storytelling",
						links: "Full profile"
					},
					
					news: {
						title: "News",
						items: NEWS_ITEMS
					},
					
					contact: {
						title: "Contact",
						desc: "Please get in touch.",
						name: "Name",
						email: "Email",
						message: "Message",
						send: "Send"
					},
					
					footer: {
						rights: "© Masahiro Koseki",
						lang: "Language",
						jp: "日本語",
						en: "English"
					}
				}
		} as const)[lang],
		[lang]
	);
	
	
	const scrollTo = (id: string) => {
		if (typeof window === "undefined") return;
		
		const el = document.getElementById(id);
		if (!el) return;
		
		// ヘッダーの高さを取得（sticky header 分のオフセット）
		const header = document.querySelector("header");
		const headerHeight =
		header instanceof HTMLElement ? header.offsetHeight : 0;
		
		// 要素の画面内位置 + 現在のスクロール量 - ヘッダー高さ（少し余裕を見て数px引く）
		const rect = el.getBoundingClientRect();
		const targetY = rect.top + window.scrollY - headerHeight - 8; // 8pxだけ余裕
		
		window.scrollTo({
				top: targetY < 0 ? 0 : targetY,
				behavior: "smooth",
		});
		
		// モバイルメニューを閉じる
		setMenuOpen(false);
	};
	
		
	
	return (
		<div className="min-h-screen bg-white text-neutral-900">
		<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
		<div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
		
		{/* 左：ロゴ */}
		<div className="flex items-center gap-2 font-semibold">
		<Image src="/okojo-logo.png" alt="Okojo logo" width={28} height={28} />
		<span>Masahiro Koseki</span>
		</div>
		
		{/* --- PC 用ナビ --- */}
		<nav className="hidden md:flex items-center gap-6 text-sm">
		<button onClick={() => scrollTo("home")} className="hover:opacity-70">
		{t.nav.home}
		</button>
		<button onClick={() => scrollTo("book")} className="hover:opacity-70">
		{t.nav.book}
		</button>
		<button onClick={() => scrollTo("about")} className="hover:opacity-70">
		{t.nav.about}
		</button>
		<button onClick={() => scrollTo("news")} className="hover:opacity-70">
		{t.nav.news}
		</button>
		<button onClick={() => scrollTo("contact")} className="hover:opacity-70">
		{t.nav.contact}
		</button>
		</nav>
		
		{/* --- PC 用 言語切替ボタン --- */}
		<div className="hidden md:flex items-center gap-2">
		<Button
		variant="outline"
		className="rounded-full"
		onClick={() => changeLang(lang === "ja" ? "en" : "ja")}
		>
		{lang === "ja" ? "EN" : "JP"}
		</Button>
		</div>
		
		{/* --- モバイル用ハンバーガーボタン --- */}
		<button
		className="md:hidden flex items-center justify-center px-2 py-2 border border-neutral-300 rounded-lg bg-white"
		onClick={() => setMenuOpen((v) => !v)}
		aria-label="menu"
		>
		<div className="flex flex-col gap-[4px]">
		<span className="w-5 h-[2px] bg-neutral-800"></span>
		<span className="w-5 h-[2px] bg-neutral-800"></span>
		<span className="w-5 h-[2px] bg-neutral-800"></span>
		</div>
		</button>
		
		</div>
		
		{/* --- モバイルメニュー本体 --- */}
		{menuOpen && (
				<nav className="md:hidden border-t border-neutral-300 bg-white text-sm">
				<button className="block px-4 py-3 w-full text-left hover:bg-neutral-100"
				onClick={() => scrollTo("home")}
				>
				{t.nav.home}
				</button>
				
				<button className="block px-4 py-3 w-full text-left hover:bg-neutral-100"
				onClick={() => scrollTo("book")}
				>
				{t.nav.book}
				</button>
				
				<button className="block px-4 py-3 w-full text-left hover:bg-neutral-100"
				onClick={() => scrollTo("about")}
				>
				{t.nav.about}
				</button>
				
				<button className="block px-4 py-3 w-full text-left hover:bg-neutral-100"
				onClick={() => scrollTo("news")}
				>
				{t.nav.news}
				</button>
				
				<button className="block px-4 py-3 w-full text-left hover:bg-neutral-100"
				onClick={() => scrollTo("contact")}
				>
				{t.nav.contact}
				</button>
				
				{/* 言語切替 */}
				<div className="border-t border-neutral-200 flex gap-2 px-4 py-3">
				<button className={`px-3 py-1 rounded-full ${lang === "ja" ? "bg-neutral-900 text-white" : "bg-neutral-200"}`}
				onClick={() => changeLang("ja")}
				>
				JP
				</button>
				<button className={`px-3 py-1 rounded-full ${lang === "en" ? "bg-neutral-900 text-white" : "bg-neutral-200"}`}
				onClick={() => changeLang("en")}
				>
				EN
				</button>
				</div>
				</nav>
		)}
		</header>
		
		
		<Section id="home" className="pt-0 pb-0">
		<HeroSection texts={t.hero}  />
		</Section>
		
		{/* ---- BOOKS (All Works) ---- */}
		<Section
		id="book"
		className="section-spacing scroll-mt-20 md:scroll-mt-20"
		>
		{/* 全体の見出し */}
		<H2>{t.book.lead}</H2>
		
		{/* ▼ カテゴリータブ */}
		<div className="mt-4 flex flex-wrap gap-2 text-sm border-b border-neutral-200 pb-1">
		<button
		type="button"
		onClick={() => setSelectedCategory("all")}
		className={
			"px-3 py-1 rounded-full" +
			(selectedCategory === "all"
				? " bg-neutral-900 text-white"
			: " text-neutral-700 hover:bg-neutral-100")
		}
		>
		{lang === "ja" ? "すべて" : "All"}
		</button>
		
		<button
		type="button"
		onClick={() => setSelectedCategory("picture")}
		className={
			"px-3 py-1 rounded-full" +
			(selectedCategory === "picture"
				? " bg-neutral-900 text-white"
			: " text-neutral-700 hover:bg-neutral-100")
		}
		>
		{lang === "ja" ? "絵本" : "Picture Books"}
		</button>
		
		<button
		type="button"
		onClick={() => setSelectedCategory("coloring")}
		className={
			"px-3 py-1 rounded-full" +
			(selectedCategory === "coloring"
				? " bg-neutral-900 text-white"
			: " text-neutral-700 hover:bg-neutral-100")
		}
		>
		{lang === "ja" ? "塗り絵" : "Coloring Books"}
		</button>
		
		<button
		type="button"
		onClick={() => setSelectedCategory("photo")}
		className={
			"px-3 py-1 rounded-full" +
			(selectedCategory === "photo"
				? " bg-neutral-900 text-white"
			: " text-neutral-700 hover:bg-neutral-100")
		}
		>
		{lang === "ja" ? "写真集" : "Photo Books"}
		</button>
		</div>
		
		{/* ▼ タブごとの表示内容 */}
		{selectedCategory === "all" && (
				<div className="mt-6 space-y-10">
				{/* 絵本：2冊だけプレビュー */}
				{pictureBooks.length > 0 && (
						<section>
						<h3 className="text-lg font-semibold mb-3">
						絵本 / Picture Books
						</h3>
						<BooksSection
						books={pictureBooks.slice(0, 2)}
						lang={lang}
						/>
						</section>
				)}
				
				{/* 塗り絵：2冊だけプレビュー */}
				{coloringBooks.length > 0 && (
						<section>
						<h3 className="text-lg font-semibold mb-3">
						塗り絵 / Coloring Books
						</h3>
						<BooksSection
						books={coloringBooks.slice(0, 2)}
						lang={lang}
						/>
						</section>
				)}
				
				{/* 写真集：2冊だけプレビュー */}
				{photoBooks.length > 0 && (
						<section>
						<h3 className="text-lg font-semibold mb-3">
						写真集 / Photo Books
						</h3>
						<BooksSection
						books={photoBooks.slice(0, 2)}
						lang={lang}
						/>
						</section>
				)}
				</div>
		)}
		
		{selectedCategory === "picture" && (
				<div className="mt-6 space-y-4">
				<h3 className="text-lg font-semibold">
				絵本 / Picture Books
				</h3>
				<BooksSection books={pictureBooks} lang={lang} />
				</div>
		)}
		
		{selectedCategory === "coloring" && (
				<div className="mt-6 space-y-4">
				<h3 className="text-lg font-semibold">
				塗り絵 / Coloring Books
				</h3>
				<BooksSection books={coloringBooks} lang={lang} />
				</div>
		)}
		
		{selectedCategory === "photo" && (
				<div className="mt-6 space-y-4">
				<h3 className="text-lg font-semibold">
				写真集 / Photo Books
				</h3>
				<BooksSection books={photoBooks} lang={lang} />
				</div>
		)}
		</Section>
					
			
			{/* ---- ABOUT ---- */}
			<Section
			id="about"
			className={`section-spacing ${
					lang === "ja"
					? "scroll-mt-20 md:scroll-mt-20"
					: "scroll-mt-16 md:scroll-mt-20"
			}`}
			>
			<H2>{t.about.title}</H2>
			
			<div id="AboutSection">
			<AboutSection lang={lang} about={t.about} />
			</div>
			</Section>
			
			
			{/* ---- NEWS ---- */}
			<Section
			id="news"
			className={`section-spacing ${
					lang === "ja"
					? "scroll-mt-20 md:scroll-mt-20"
					: "scroll-mt-0 md:scroll-mt-20"
			}`}
			>
			<H2>{t.news.title}</H2>
			
			<div id="NewsSection"></div>
			<NewsSection lang={lang} news={t.news} />
			</Section>
			
			
			{/* ---- CONTACT ---- */}
			<Section
			id="contact"
			className={`section-spacing ${
					lang === "ja"
					? "scroll-mt-20 md:scroll-mt-20"
					: "scroll-mt-16 md:scroll-mt-20"
			}`}
			>
			
			<H2>{t.contact.title}</H2>
			
			<div id="ContactSection">
			<ContactSection texts={t.contact} />
			</div>
			</Section>
			
			
			<footer className="border-t">
			<Section id="footer" className="section-spacing py-10">
			<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
			<div className="text-sm text-neutral-600">
		{t.footer.rights} — {new Date().getFullYear()}
		<Image src="/okojo-logo.png" alt="Okojo icon" width={24} height={24} className="opacity-80"/>
			</div>
			<div className="flex items-center gap-2 text-sm text-neutral-600">
			<span>{t.footer.lang}:</span>
			<button onClick={() => changeLang("ja")} className={`px-2 py-1 rounded-full ${lang === "ja" ? "bg-neutral-900 text-white" : "bg-neutral-100"}`}>
			{t.footer.jp}
			</button>
			<button onClick={() => changeLang("en")} className={`px-2 py-1 rounded-full ${lang === "en" ? "bg-neutral-900 text-white" : "bg-neutral-100"}`}>
			{t.footer.en}
		</button>
		{/* 言語切り替えの横のミニオコジョ */}
		<Image src="/okojo-logo.png" alt="Okojo icon" width={24} height={24} className="opacity-80"/>
			</div>
			</div>
		<div className="flex items-center gap-4 mt-4 text-neutral-600 text-sm">
		{/* 写真集リンク（日本語/英語対応） */}
		<a
		href="https://masahiro-koseki.com/"
		target="_blank"
		rel="noopener noreferrer"
		className="underline underline-offset-4 hover:opacity-70"
		>
		{lang === "ja" ? "写真集サイト" : "Photo Book Website"}
		</a>

			<a href="https://www.instagram.com/mkoseki423/" target="_blank" className="underline underline-offset-4 hover:opacity-70" rel="noopener noreferrer">
			Instagram
			</a>
			<a href="https://www.facebook.com/mkoseki/" target="_blank" className="underline underline-offset-4 hover:opacity-70" rel="noopener noreferrer">
			Facebook
			</a>
			<a href="https://www.threads.com/@mkoseki423" target="_blank" className="underline underline-offset-4 hover:opacity-70" rel="noopener noreferrer">
			Threads
			</a>
			</div>
			</Section>
			</footer>
			</div>
		);
	}