// app/books/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BOOKS } from "@/data/books";
import type { Book } from "@/data/books";

// カテゴリーごとのラベルと説明（必要に応じて調整OK）
function getCategoryMeta(category: Book["category"]) {
	switch (category) {
		case "picture-book":
		return {
			label: "Picture Book",
			labelJa: "絵本",
		};
		case "coloring":
		return {
			label: "Coloring Book",
			labelJa: "塗り絵",
		};
		case "photo":
		return {
			label: "Photo Book",
			labelJa: "写真集",
		};
		default:
		return {
			label: "Book",
			labelJa: "書籍",
		};
	}
}

export default async function BookDetailPage({
		params,
	}: {
		// ★ Next.js 16 では params が Promise なので Promise 型
		params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	
	const book = BOOKS.find((b) => b.id === id);
	if (!book) return notFound();
	
	const catMeta = getCategoryMeta(book.category);
	
	return (
		<div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
		{/* 戻るリンク */}
		<div className="mb-4">
		<Link
		href="/"
		className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-800"
		>
		<span aria-hidden>←</span>
		<span className="ml-1">書籍一覧へ戻る</span>
		</Link>
		</div>
		
		{/* タイトルとカテゴリ */}
		<header className="mb-8">
		<div className="flex flex-wrap items-center gap-3 mb-3">
		<span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
		{catMeta.labelJa} / {catMeta.label}
		</span>
		{book.series && (
				<span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 border border-amber-100">
				シリーズ: {book.series}
				</span>
		)}
		</div>
		
		<h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
		{book.title}
		</h1>
		{book.titleJa && book.titleJa !== book.title && (
				<p className="mt-1 text-lg text-neutral-700">{book.titleJa}</p>
		)}
		
		{/* ↓ 説明文はヘッダーの下にまとめて表示 */}
		{book.descriptionJa && (
				<p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
				{book.descriptionJa}
				</p>
		)}
		{book.description && (
				<p className="mt-2 text-sm leading-relaxed text-neutral-600">
				{book.description}
				</p>
		)}
		</header>
		
		{/* 上段：カバー + 書籍情報 */}
		<section className="grid gap-8 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] items-start mb-10">
		{/* 左：カバーとボタン */}
		<div className="space-y-4">
		{book.coverSrc && (
				<div className="relative w-full max-w-xs mx-auto aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
				<Image
				src={book.coverSrc}
				alt={book.title}
				fill
				className="object-contain"
				/>
				</div>
		)}
		
		{/* Amazon ボタン */}
		<div className="flex flex-col gap-2">
		{book.amazonJp && (
				<a
				href={book.amazonJp}
				target="_blank"
				rel="noreferrer"
				className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
				>
				Amazonで見る（日本）
				</a>
		)}
		{book.amazonEn && (
				<a
				href={book.amazonEn}
				target="_blank"
				rel="noreferrer"
				className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-800 bg-white hover:bg-neutral-50"
				>
				View on Amazon (Intl.)
				</a>
		)}
		</div>
		</div>
		
		{/* 右：書籍情報（日 → 英 の順でブロック分け） */}
		<div className="text-neutral-800 leading-relaxed space-y-3">
		{(book.specs ||
				book.features ||
				book.ageRange ||
				book.difficulty ||
				book.specsEn ||
				book.featuresEn ||
				book.ageRangeEn ||
			book.difficultyEn) ? (
				<div className="mt-0 border-t border-neutral-200 pt-4 text-sm space-y-3">
				<h2 className="font-semibold text-neutral-800 text-[14px]">
				書籍情報 / Book Details
				</h2>
				
				{/* 2カラム（PC）・1カラム（モバイル） */}
				<div className="grid gap-6 md:grid-cols-2">
				
				{/* 日本語ブロック */}
				{(book.specs || book.features || book.ageRange || book.difficulty) && (
						<div className="space-y-3 leading-snug">
						<p className="font-semibold text-neutral-800 text-xs uppercase tracking-wide">
						日本語
						</p>
						
						{/* Specs（日本語） */}
						{book.specs && book.specs.length > 0 && (
								<ul className="list-disc list-outside ml-5 text-neutral-700 text-sm leading-snug">
								{book.specs.map((s) => (
											<li key={s}>{s}</li>
								))}
								</ul>
						)}
						
						{/* Age Range（日本語） */}
						{book.ageRange && (
								<p className="text-neutral-700 text-sm leading-tight">
								対象年齢: {book.ageRange}
								</p>
						)}
						
						{/* Difficulty（日本語） */}
						{book.difficulty && (
								<p className="text-neutral-700 text-sm leading-tight">
								難易度: {book.difficulty}
								</p>
						)}
						
						{/* Features（日本語） */}
						{book.features && book.features.length > 0 && (
								<ul className="list-disc list-outside ml-5 text-neutral-700 text-sm leading-snug">
								{book.features.map((f) => (
											<li key={f}>{f}</li>
								))}
								</ul>
						)}
						</div>
				)}
				
				{/* 英語ブロック */}
				{(book.specsEn ||
						book.featuresEn ||
						book.ageRangeEn ||
					book.difficultyEn) && (
						<div className="space-y-3 leading-snug">
						<p className="font-semibold text-neutral-800 text-xs uppercase tracking-wide">
						English
						</p>
						
						{/* Specs（EN） */}
						{book.specsEn && book.specsEn.length > 0 && (
								<ul className="list-disc list-outside ml-5 text-neutral-700 text-sm leading-snug">
								{book.specsEn.map((s) => (
											<li key={s}>{s}</li>
								))}
								</ul>
						)}
						
						{/* Age Range（EN） */}
						{book.ageRangeEn && (
								<p className="text-neutral-700 text-sm leading-tight">
								Age range: {book.ageRangeEn}
								</p>
						)}
						
						{/* Difficulty（EN） */}
						{book.difficultyEn && (
								<p className="text-neutral-700 text-sm leading-tight">
								Difficulty: {book.difficultyEn}
								</p>
						)}
						
						{/* Features（EN） */}
						{book.featuresEn && book.featuresEn.length > 0 && (
								<ul className="list-disc list-outside ml-5 text-neutral-700 text-sm leading-snug">
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
				<section className="mt-4">
				<h2 className="text-xl font-semibold mb-4">内容見本 / Sample Pages</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				{book.sampleImages.map((src, i) => (
							<div
							key={src}
							className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border border-neutral-200 bg-white shadow-sm"
							>
							<Image
							src={src}
							alt={`${book.title} sample spread ${i + 1}`}
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
