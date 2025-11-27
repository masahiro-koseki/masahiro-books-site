// components/BooksSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";

type BooksSectionProps = {
	books: Book[];
};

export default function BooksSection({ books }: BooksSectionProps) {
	if (!books || books.length === 0) return null;
	
	return (
		<div className="mt-6 space-y-6">
		{books.map((book) => (
					<article
					key={book.id}
					className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 rounded-2xl border border-neutral-200 bg-white p-4"
					>
					{/* 左：タイトル＋説明＋ボタン */}
					<div className="flex-1">
					{/* メインタイトル（日本語優先ならここを逆にしてOK） */}
					<h3 className="text-base md:text-lg font-semibold text-neutral-900">
					{book.titleJa ?? book.title}
					</h3>
					
					{/* サブタイトル的に英語タイトルを表示 */}
					{book.title && (
							<p className="mt-1 text-xs text-neutral-500">
							{book.title}
							</p>
					)}
					
					{/* 簡単な説明（フィールドがあれば） */}
					{/* 実データに合わせて description / descriptionJa / descriptionEn などに変更してください */}
					{"description" in book && (book as any).description && (
							<p className="mt-2 text-sm text-neutral-600">
							{(book as any).description}
							</p>
					)}
					
					{/* ボタン群 */}
					<div className="mt-3 flex flex-wrap gap-2 text-xs">
					{/* Amazon.co.jp リンク（プロパティ名は実データに合わせて変更） */}
					{"amazonJp" in book && (book as any).amazonJp && (
							<a
							href={(book as any).amazonJp}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 hover:bg-neutral-100 transition-colors"
							>
							Amazon.co.jp
							</a>
					)}
					
					{/* Amazon.com（英語版） */}
					{"amazonEn" in book && (book as any).amazonEn && (
							<a
							href={(book as any).amazonEn}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 hover:bg-neutral-100 transition-colors"
							>
							Amazon.com
							</a>
					)}
					
					{/* 詳細ページへのリンク */}
					<Link
					href={`/books/${book.id}`}
					className="inline-flex items-center rounded-full border border-neutral-300 px-3 py-1 hover:bg-neutral-100 transition-colors"
					>
					詳細を見る
					</Link>
					</div>
					</div>
					
					{/* 右：カバー画像（正方形） */}
					<div className="md:w-32 lg:w-36 md:shrink-0">
					<div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100">
					{/* プロパティ名は、今お使いのカバー画像のフィールド名に合わせて変更してください */}
					<Image
					src={(book as any).coverSrc ?? "/covers/placeholder.jpg"}
					alt={book.title}
					fill
					className="object-cover"
					/>
					</div>
					</div>
					</article>
		))}
		</div>
	);
}
