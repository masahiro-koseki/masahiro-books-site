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
		<div className="mt-6 grid gap-6 sm:grid-cols-2">
		{books.map((book) => (
					<article
					key={book.id}
					className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm hover:shadow transition"
					>
					{/* カバー画像（正方形） */}
					<div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100">
					<Image
					src={(book as any).coverSrc}
					alt={book.title}
					fill
					className="object-cover"
					/>
					</div>
					
					{/* タイトル群 */}
					<h3 className="text-base font-semibold text-neutral-900">
					{book.titleJa ?? book.title}
					</h3>
					
					{book.title && (
							<p className="text-xs text-neutral-500">{book.title}</p>
					)}
					
					{/* 説明（必要なら2〜3行に抑える案もOK） */}
					{"description" in book && (book as any).description && (
							<p className="text-sm text-neutral-600 line-clamp-3">
							{(book as any).description}
							</p>
					)}
					
					{/* Amazon & 詳細ボタン */}
					<div className="flex flex-wrap gap-2 text-xs mt-auto">
					{"amazonJp" in book && (book as any).amazonJp && (
							<a
							href={(book as any).amazonJp}
							target="_blank"
							className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
							>
							Amazon.co.jp
							</a>
					)}
					
					{"amazonEn" in book && (book as any).amazonEn && (
							<a
							href={(book as any).amazonEn}
							target="_blank"
							className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
							>
							Amazon.com
							</a>
					)}
					
					<Link
					href={`/books/${book.id}`}
					className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
					>
					詳細を見る
					</Link>
					</div>
					</article>
		))}
		</div>
	);
}
