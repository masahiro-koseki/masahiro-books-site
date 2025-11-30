"use client";

import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";
import { useEffect, useState } from "react";

type BooksSectionProps = {
	books: Book[];
	lang: "ja" | "en";
};

function truncate(text: string, max: number) {
	if (!text) return "";
	if (text.length <= max) return text;
	return text.slice(0, max) + "…";
}

export default function BooksSection({ books, lang }: BooksSectionProps) {
	if (!books || books.length === 0) return null;
	
	// ▼ 新 → 旧 の順にソート
	const sortedBooks = [...books].sort((a, b) => {
			const da = new Date(a.published || "1970-01-01").getTime();
			const db = new Date(b.published || "1970-01-01").getTime();
			return db - da;
	});
	
	// マウント時アニメーション
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);
	
	return (
		<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
		{sortedBooks.map((book, index) => {
					// ▼ タイトル（日本語 / 英語）
					const mainTitle =
					lang === "ja"
					? book.titleJa ?? book.title
					: book.title ?? book.titleJa ?? "";
					
					// ▼ 説明文
					const fullDesc =
					lang === "ja"
					? book.descriptionJa ?? book.description
					: book.description ?? book.descriptionJa;
					
					const maxLength = lang === "ja" ? 120 : 190;
					const shortDesc = fullDesc ? truncate(fullDesc, maxLength) : "";
					
					const detailLabel = lang === "ja" ? "詳細を見る" : "View details";
					
					return (
						<article
						key={book.id}
						className={`
							flex flex-col md:flex-row gap-6 rounded-2xl border border-neutral-200 
							bg-white p-5 shadow-md hover:shadow-xl 
							transition-all duration-500 ease-out transform
							${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
						`}
						style={{ transitionDelay: `${index * 90}ms` }}
						>
						{/* ▼ 左側：本文 */}
						<div className="flex-1 flex flex-col justify-between">
						{/* タイトル */}
						<h3 className="text-lg font-semibold text-neutral-900 tracking-tight leading-snug">
						{mainTitle}
						</h3>
						
						{/* 説明文 */}
						{shortDesc && (
								<p className="mt-3 text-sm text-neutral-600 leading-relaxed">
								{shortDesc}
								</p>
						)}
						
						{/* ▼ ボタン類 */}
						<div className="mt-4 flex flex-wrap gap-2 text-xs">
						{book.amazonJp && (
								<a
								href={book.amazonJp}
								target="_blank"
								rel="noopener noreferrer"
								className="
								px-3 py-1.5 rounded-full border border-neutral-300 
								hover:bg-neutral-50 transition text-neutral-800
								"
								>
								Amazon.co.jp
								</a>
						)}
						
						{book.amazonEn && (
								<a
								href={book.amazonEn}
								target="_blank"
								rel="noopener noreferrer"
								className="
								px-3 py-1.5 rounded-full border border-neutral-300 
								hover:bg-neutral-50 transition text-neutral-800
								"
								>
								Amazon.com
								</a>
						)}
						
						<Link
						href={`/books/${book.id}`}
						className="
						px-3 py-1.5 rounded-full border border-neutral-300 
						hover:bg-neutral-50 transition text-neutral-800
						"
						>
						{detailLabel}
						</Link>
						</div>
						</div>
						
						{/* ▼ 右側：表紙画像 */}
						{book.coverSrc && (
								<div className="w-full md:w-48 lg:w-56 shrink-0">
								<div
								className="
								relative aspect-square rounded-xl overflow-hidden 
								bg-neutral-100 shadow-sm hover:shadow-md transition-shadow
								"
								>
								<Image
								src={book.coverSrc}
								alt={mainTitle}
								fill
								className="
								object-cover transition-transform duration-500
								hover:scale-[1.03]
								"
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
