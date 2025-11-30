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

// ▼ 全書籍を新 → 旧 でソート
const SORTED_BOOKS = [...BOOKS].sort((a, b) => {
		const da = new Date(a.published || "1970-01-01").getTime();
		const db = new Date(b.published || "1970-01-01").getTime();
		return db - da;
});

// ▼ 今月のおすすめ（とりあえず最新 2 冊）
const FEATURED_BOOKS = SORTED_BOOKS.filter((b) => b.featured).slice(0, 2);

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
	
	// ▼ カテゴリ別配列もソート済みから作る
	const pictureBooks = SORTED_BOOKS.filter((b) => b.category === "picture-book");
	const coloringBooks = SORTED_BOOKS.filter((b) => b.category === "coloring");
	const photoBooks    = SORTED_BOOKS.filter((b) => b.category === "photo");
	
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
		
		<Section id="home" className="w-full pt-8 pb-0">
		<HeroSection texts={t.hero}  />
		</Section>
		
		{/* ---- BOOKS (All Works) ---- */}
		<Section
		id="book"
		className="section-spacing scroll-mt-20 md:scroll-mt-20"
		>
		{/* 全体の見出し */}
		<H2>{t.book.lead}</H2>
		
		{/* 今月のおすすめ書籍 */}
		{FEATURED_BOOKS.length > 0 && (
				<section className="mt-2 rounded-2xl border border-amber-50 bg-amber-50/40 px-4 py-4">
				<div className="flex items-center gap-3 text-sm font-medium text-amber-900">
				{/* 小さなオコジョアイコン */}
				<div className="relative h-7 w-7 hidden sm:block">
				<Image
				src="/okojo-logo.png"
				alt="Okojo logo"
				fill
				className="object-contain"
				/>
				</div>
				
				<div className="flex flex-col gap-1">
				<div className="flex items-center gap-2">
				<span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500 text-white">
				{lang === "ja" ? "今月のおすすめ" : "Featured this month"}
				</span>
				</div>
				<span className="text-xs sm:text-sm text-amber-900/90">
				{lang === "ja"
					? "新刊やとくにおすすめしたい本をピックアップしました。"
				: "A small selection of books we especially recommend right now."}
				</span>
				</div>
				</div>
				
				<div className="mt-4 grid gap-4 md:grid-cols-2">
				{FEATURED_BOOKS.map((book) => {
							const mainTitle =
							lang === "ja"
							? book.titleJa ?? book.title
							: book.title || book.titleJa || "";
							
							// カテゴリーラベル
							let categoryLabel = "";
							if (book.category === "picture-book") {
								categoryLabel =
								lang === "ja" ? "絵本 / Picture Book" : "Picture Book";
							} else if (book.category === "coloring") {
								categoryLabel =
								lang === "ja" ? "塗り絵 / Coloring Book" : "Coloring Book";
							} else if (book.category === "photo") {
								categoryLabel =
								lang === "ja" ? "写真集 / Photo Book" : "Photo Book";
							}
							
							// 発売日
							const published = book.published
							? (() => {
									const d = new Date(book.published!);
									if (Number.isNaN(d.getTime())) return "";
									const y = d.getFullYear();
									const m = d.getMonth() + 1;
									const day = d.getDate();
									if (lang === "ja") return `${y}年${m}月${day}日`;
									
									const months = [
									"Jan","Feb","Mar","Apr","May","Jun",
									"Jul","Aug","Sep","Oct","Nov","Dec",
									];
									return `${months[m - 1]} ${day}, ${y}`;
							})()
							: "";
							
							// ★ 説明文（短く）
							const fullDesc = lang === "ja"
							? book.descriptionJa ?? book.description
							: book.description ?? book.descriptionJa;
							
							const shortDesc = fullDesc
							? (lang === "ja"
								? fullDesc.slice(0, 55) + "…"
							: fullDesc.slice(0, 90) + "…")
							: "";
							
							return (
								<Link
								key={book.id}
								href={`/books/${book.id}`}
								className="
								group
								flex items-center gap-4
								rounded-xl bg-white/90 px-3 py-3
								shadow-sm
								transition-all duration-300
								hover:bg-white hover:shadow-lg hover:-translate-y-1
								"
								>
								{/* カバー */}
								{book.coverSrc && (
										<div className="relative h-20 w-16 sm:h-24 sm:w-20 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
										<Image
										src={book.coverSrc}
										alt={mainTitle}
										fill
										className="object-cover"
										/>
										</div>
								)}
								
								<div className="min-w-0">
								{categoryLabel && (
										<div className="text-[11px] text-amber-700 mb-1">
										{categoryLabel}
										</div>
								)}
								
								{/* タイトル */}
								<div className="text-sm font-semibold text-neutral-900 line-clamp-2">
								{mainTitle}
								</div>
								
								{/* 発売日 */}
								{published && (
										<div className="mt-1 text-[11px] text-neutral-500">
										{lang === "ja"
											? `発売日：${published}`
										: `Published: ${published}`}
										</div>
								)}
								
								{/* ★説明文追加 */}
								{shortDesc && (
										<p className="mt-2 text-xs text-neutral-600 line-clamp-2">
										{shortDesc}
										</p>
								)}
								</div>
								</Link>
							);
				})}
				</div>
				</section>
		)}

		
		{/* カテゴリータブ（オシャレ版） */}
		<div className="mt-8 flex justify-center">
		<div className="inline-flex flex-wrap items-center gap-1 rounded-full bg-neutral-100 px-1 py-1">
		{[
			{
				key: "all",
				labelJa: "すべて",
				labelEn: "All",
				icon: Globe,
			},
			{
				key: "picture",
				labelJa: "絵本",
				labelEn: "Picture Books",
				icon: BookOpen,
			},
			{
				key: "coloring",
				labelJa: "塗り絵",
				labelEn: "Coloring Books",
				icon: BookOpen,
			},
			{
				key: "photo",
				labelJa: "写真集",
				labelEn: "Photo Books",
				icon: Camera,
			},
			].map((cat) => {
					const active = selectedCategory === cat.key;
					const Icon = cat.icon;
					return (
						<button
						key={cat.key}
						onClick={() =>
							setSelectedCategory(
								cat.key as "all" | "picture" | "coloring" | "photo"
							)
						}
						className={
							"flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs sm:text-sm transition-all " +
							(active
								? "bg-white text-neutral-900 shadow-sm"
							: "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200/70")
						}
						>
						<Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
						<span>{lang === "ja" ? cat.labelJa : cat.labelEn}</span>
						</button>
					);
		})}
		</div>
		</div>
				
		{/* ▼ タブごとの表示内容 */}
		{selectedCategory === "all" && (
				<motion.div
				key="all"
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35 }}
				className="mt-6 space-y-10"
				>
				{/* 絵本 */}
				<section>
				<h3 className="text-lg font-semibold mb-3">
				絵本 / Picture Books
				</h3>
				<BooksSection
				books={SORTED_BOOKS.filter((b) => b.category === "picture-book").slice(0, 2)}
				lang={lang}
				/>
				</section>
				
				{/* 塗り絵 */}
				<section>
				<h3 className="text-lg font-semibold mb-3">
				塗り絵 / Coloring Books
				</h3>
				<BooksSection
				books={SORTED_BOOKS.filter((b) => b.category === "coloring").slice(0, 2)}
				lang={lang}
				/>
				</section>
				
				{/* 写真集 */}
				<section>
				<h3 className="text-lg font-semibold mb-3">
				写真集 / Photo Books
				</h3>
				<BooksSection
				books={SORTED_BOOKS.filter((b) => b.category === "photo").slice(0, 2)}
				lang={lang}
				/>
				</section>
				</motion.div>
		)}
		
		{selectedCategory === "picture" && (
				<motion.div
				key="picture"
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35 }}
				className="mt-6"
				>
				<BooksSection books={pictureBooks} lang={lang} />
				</motion.div>
		)}
		
		{selectedCategory === "coloring" && (
				<motion.div
				key="coloring"
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35 }}
				className="mt-6"
				>
				<BooksSection books={coloringBooks} lang={lang} />
				</motion.div>
		)}
		
		{selectedCategory === "photo" && (
				<motion.div
				key="photo"
				initial={{ opacity: 0, y: 8 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35 }}
				className="mt-6"
				>
				<BooksSection books={photoBooks} lang={lang} />
				</motion.div>
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