"use client";

import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";
import { useEffect, useState } from "react";
import { event } from "@/lib/gtag";

type BooksSectionProps = {
	books: Book[];
	lang: "ja" | "en";
};

function truncate(text: string, max: number) {
	if (!text) return "";
	if (text.length <= max) return text;
	return text.slice(0, max) + "…";
}

// 発売日の表示用フォーマッタ
function formatPublished(published: string | undefined, lang: "ja" | "en") {
	if (!published) return "";
	const d = new Date(published);
	if (Number.isNaN(d.getTime())) return published;
	
	const y = d.getFullYear();
	const m = d.getMonth() + 1;
	const day = d.getDate();
	
	if (lang === "ja") {
		return `${y}年${m}月${day}日`;
	}
	
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	return `${months[m - 1]} ${day}, ${y}`;
}

export default function BooksSection({ books, lang }: BooksSectionProps) {
	if (!books || books.length === 0) return null;
	
	// ▼ マウント時アニメーション用フラグ
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	
	return (
		<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
		{books.map((book, index) => {
					const mainTitle =
					lang === "ja"
					? book.titleJa ?? book.title
					: book.title || book.titleJa || "";
					
					const fullDesc =
					lang === "ja"
					? book.descriptionJa ?? book.description
					: book.description ?? book.descriptionJa;
					
					const maxLength = lang === "ja" ? 120 : 190;
					const shortDesc = fullDesc ? truncate(fullDesc, maxLength) : "";
					
					const detailLabel = lang === "ja" ? "詳細を見る" : "View details";
					
					const publishedLabel = formatPublished(book.published, lang);
					
					return (
						<article
						key={book.id}
						className={`
							group
							flex flex-col md:flex-row
							h-full gap-6 rounded-2xl border border-neutral-200
							bg-white p-4
							shadow-sm
							transition-all duration-300
							hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]
							${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
						`}
						style={{ transitionDelay: `${index * 80}ms` }}
						>
						
						{/* 左：タイトル＋テキスト */}
						<div className="flex-1">
						<h3 className="text-base md:text-lg font-semibold text-neutral-900">
						{mainTitle}
						</h3>
						
						{shortDesc && (
								<p className="mt-3 text-sm text-neutral-600">{shortDesc}</p>
						)}
						
						{/* 発売日 */}
						{publishedLabel && (
								<p className="mt-2 text-xs text-neutral-500">
								{lang === "ja"
									? `発売日：${publishedLabel}`
								: `Published: ${publishedLabel}`}
								</p>
						)}
						
						{/* ボタン類 */}
						<div className="mt-4 flex flex-wrap gap-2 text-xs">
						{book.amazonJp && (
								<a
								href={book.amazonJp}
								target="_blank"
								rel="noopener noreferrer"
								className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
								onClick={() =>
									event("amazon_click", {
											site: "books",
											lang,
											marketplace: "jp",
											link_url: book.amazonJp,
									})
								}
								>
								Amazon.co.jp
								</a>
						)}
						
						{book.amazonEn && (
								<a
								href={book.amazonEn}
								target="_blank"
								rel="noopener noreferrer"
								className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
								onClick={() =>
									event("amazon_click", {
											site: "books",
											lang,
											marketplace: "com",
											link_url: book.amazonEn,
									})
								}
								>
								Amazon.com
								</a>
						)}
						
						<Link
						href={`/books/${book.id}`}
						className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
						>
						{detailLabel}
						</Link>
						</div>
						</div>
						
						{/* 右：カバー画像 */}
						{book.coverSrc && (
								<div className="w-full md:w-48 lg:w-56 shrink-0">
								<div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300">
								<Image
								src={book.coverSrc}
								alt={mainTitle}
								fill
								className="object-cover"
								/>
								</div>
								</div>
						)}
						</article>
					);
		})}
		</div>
	);
}
