// app/books/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BOOKS } from "@/data/books";
import type { Book } from "@/data/books";

// カテゴリーの表示ラベル
function getCategoryMeta(category: Book["category"]) {
	switch (category) {
		case "picture-book":
		return { label: "Picture Book", labelJa: "絵本" };
		case "coloring":
		return { label: "Coloring Book", labelJa: "塗り絵" };
		case "photo":
		return { label: "Photo Book", labelJa: "写真集" };
		default:
		return { label: "Book", labelJa: "書籍" };
	}
}

export default async function BookDetailPage({
		params,
	}: {
		params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	
	const book = BOOKS.find((b) => b.id === id);
	if (!book) return notFound();
	
	const catMeta = getCategoryMeta(book.category);
	
	return (
		<div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
		{/* 戻るリンク */}
		<div className="mb-6">
		<Link
		href="/"
		className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-800 transition"
		>
		← <span className="ml-1">書籍一覧へ戻る</span>
		</Link>
		</div>
		
		{/* タイトル・カテゴリ */}
		<header className="mb-10">
		<div className="flex flex-wrap items-center gap-3 mb-4">
		<span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
		{catMeta.labelJa} / {catMeta.label}
		</span>
		
		{book.series && (
				<span className="inline-flex items-center rounded-full bg-amber-50 border border-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
				シリーズ: {book.series}
				</span>
		)}
		</div>
		
		<h1 className="text-3xl font-bold tracking-tight text-neutral-900">
		{book.title}
		</h1>
		
		{book.titleJa && book.titleJa !== book.title && (
				<p className="mt-1 text-xl text-neutral-700">{book.titleJa}</p>
		)}
		
		{/* 説明文 */}
		{book.descriptionJa && (
				<p className="mt-5 text-[15px] leading-relaxed text-neutral-800">
				{book.descriptionJa}
				</p>
		)}
		{book.description && (
				<p className="mt-3 text-sm leading-relaxed text-neutral-600">
				{book.description}
				</p>
		)}
		</header>
		
		{/* 上段：カバー + Amazon ボタン + 書籍情報 */}
		<section className="grid gap-10 md:grid-cols-[minmax(0,260px)_1fr] items-start mb-12">
		{/* 左：カバー画像 + Amazon */}
		<div className="space-y-5">
		{book.coverSrc && (
				<div className="relative w-full max-w-xs mx-auto aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
				<Image
				src={book.coverSrc}
				alt={book.title}
				fill
				className="object-contain p-2"
				/>
				</div>
		)}
		
		{/* Amazon ボタン */}
		<div className="flex flex-col gap-2 text-sm">
		{book.amazonJp && (
				<a
				href={book.amazonJp}
				target="_blank"
				rel="noreferrer"
				className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2.5 font-medium text-white shadow hover:bg-neutral-800 transition"
				>
				Amazonで見る（日本）
				</a>
		)}
		
		{book.amazonEn && (
				<a
				href={book.amazonEn}
				target="_blank"
				rel="noreferrer"
				className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-4 py-2.5 font-medium text-neutral-800 shadow-sm hover:bg-neutral-50 transition"
				>
				View on Amazon (Intl.)
				</a>
		)}
		</div>
		</div>
		
		{/* 右：書籍情報パネル（日本語 / 英語） */}
		<div className="text-neutral-800 leading-relaxed space-y-4">
		{(book.specs ||
				book.features ||
				book.ageRange ||
				book.difficulty ||
				book.specsEn ||
				book.featuresEn ||
				book.ageRangeEn ||
			book.difficultyEn) ? (
				<div className="border-t border-neutral-200 pt-5 text-sm">
				<h2 className="font-semibold text-neutral-900 text-[15px] mb-4">
				書籍情報 / Book Details
				</h2>
				
				<div className="grid gap-8 md:grid-cols-2">
				{/* 日本語 */}
				{(book.specs ||
						book.features ||
						book.ageRange ||
					book.difficulty) && (
						<div className="space-y-3">
						<p className="font-semibold text-xs text-neutral-700 uppercase tracking-wide">
						日本語
						</p>
						
						{book.specs && (
								<ul className="list-disc ml-5 text-neutral-700 leading-snug">
								{book.specs.map((s) => (
											<li key={s}>{s}</li>
								))}
								</ul>
						)}
						
						{book.ageRange && (
								<p className="text-neutral-700">対象年齢: {book.ageRange}</p>
						)}
						
						{book.difficulty && (
								<p className="text-neutral-700">難易度: {book.difficulty}</p>
						)}
						
						{book.features && (
								<ul className="list-disc ml-5 text-neutral-700 leading-snug">
								{book.features.map((f) => (
											<li key={f}>{f}</li>
								))}
								</ul>
						)}
						</div>
				)}
				
				{/* 英語 */}
				{(book.specsEn ||
						book.featuresEn ||
						book.ageRangeEn ||
					book.difficultyEn) && (
						<div className="space-y-3">
						<p className="font-semibold text-xs text-neutral-700 uppercase tracking-wide">
						English
						</p>
						
						{book.specsEn && (
								<ul className="list-disc ml-5 text-neutral-700 leading-snug">
								{book.specsEn.map((s) => (
											<li key={s}>{s}</li>
								))}
								</ul>
						)}
						
						{book.ageRangeEn && (
								<p className="text-neutral-700">
								Age range: {book.ageRangeEn}
								</p>
						)}
						
						{book.difficultyEn && (
								<p className="text-neutral-700">
								Difficulty: {book.difficultyEn}
								</p>
						)}
						
						{book.featuresEn && (
								<ul className="list-disc ml-5 text-neutral-700 leading-snug">
								{book.featuresEn.map((f) => (
											<li key={f}>{f}</li>
								))}
								</ul>
						)}
						</div>
				)}
				</div>
				</div>
			) : (
				<p className="text-sm text-neutral-500">
				書籍情報は順次追加予定です。
				</p>
		)}
		</div>
		</section>
		
		{/* Sample Pages（内容見本） */}
		{book.sampleImages && book.sampleImages.length > 0 && (
				<section className="mt-6">
				<h2 className="text-xl font-semibold mb-5">内容見本 / Sample Pages</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
				{book.sampleImages.map((src, i) => (
							<div
							key={src}
							className="relative w-full aspect-[3/2] rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
							>
							<Image
							src={src}
							alt={`${book.title} sample ${i + 1}`}
							fill
							className="object-contain"
							/>
							</div>
				))}
				</div>
				</section>
		)}
		</div>
	);
}
