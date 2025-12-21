import TrackedOutboundLink from "@/components/TrackedOutboundLink";
import { GOODS_T, SHOPS, Lang } from "@/data/goods";

export default function GoodsHero({ lang }: { lang: Lang }) {
	const t = GOODS_T[lang];
	
	return (
		<section className="pt-10">
		<h1 className="text-3xl font-semibold tracking-tight">{t.title}</h1>
		<p className="mt-3 text-neutral-600 max-w-2xl">{t.lead}</p>
		
		<div className="mt-6 flex flex-wrap gap-3">
		<TrackedOutboundLink
		href={SHOPS.etsy.url}
		lang={lang}
		destination="etsy"
		type="shop_button"
		label="hero:etsy"
		className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:opacity-90"
		>
		{t.ctaEtsy}
		</TrackedOutboundLink>
		
		<TrackedOutboundLink
		href={SHOPS.zazzle.url}
		lang={lang}
		destination="zazzle"
		type="shop_button"
		label="hero:zazzle"
		className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-neutral-50"
		>
		{t.ctaZazzle}
		</TrackedOutboundLink>
		</div>
		</section>
	);
}
