import Image from "next/image";
import TrackedOutboundLink from "@/components/TrackedOutboundLink";
import { CATEGORIES, GOODS_T, Lang } from "@/data/goods";

export default function GoodsCategoryGrid({ lang }: { lang: Lang }) {
	const t = GOODS_T[lang];
	
	return (
		<section className="mt-12">
		<h2 className="text-xl font-semibold">{t.categoriesTitle}</h2>
		
		<div className="mt-4 grid gap-6 md:grid-cols-2">
		{CATEGORIES.map((c) => (
					<div key={c.key} className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
					{/* 画像 */}
					{("img" in c && c.img) && (
							<div className="relative aspect-[16/9] w-full bg-neutral-50">
							<Image
							src={c.img}
							alt={c.title[lang]}
							fill
							className="object-contain p-6"
							sizes="(max-width: 768px) 100vw, 50vw"
							/>
							</div>
					)}
					
					{/* テキスト */}
					<div className="p-5">
					<div className="text-lg font-semibold">{c.title[lang]}</div>
					<p className="mt-2 text-sm text-neutral-600">{c.desc[lang]}</p>
					
					<div className="mt-4 flex gap-3">
					<TrackedOutboundLink
					href={c.links.etsy}
					lang={lang}
					destination="etsy"
					type="category"
					label={`${c.key}:etsy`}
					className="inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
					>
					{lang === "ja" ? "Etsyで見る" : "View on Etsy"}
					</TrackedOutboundLink>
					
					<TrackedOutboundLink
					href={c.links.zazzle}
					lang={lang}
					destination="zazzle"
					type="category"
					label={`${c.key}:zazzle`}
					className="inline-flex items-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
					>
					{lang === "ja" ? "Zazzleで見る" : "View on Zazzle"}
					</TrackedOutboundLink>
					</div>
					</div>
					</div>
		))}
		</div>
		</section>
	);
}
