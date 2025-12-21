import TrackedOutboundLink from "@/components/TrackedOutboundLink";
import { GOODS_T, SHOPS, Lang } from "@/data/goods";

export default function GoodsFinalCTA({ lang }: { lang: Lang }) {
	const t = GOODS_T[lang];
	
	return (
		<section className="mt-14 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
		<div className="text-lg font-semibold">{t.finalTitle}</div>
		<p className="mt-2 text-sm text-neutral-600">{t.finalLead}</p>
		
		<div className="mt-5 flex flex-wrap gap-3">
		<TrackedOutboundLink
		href={SHOPS.etsy.url}
		lang={lang}
		destination="etsy"
		type="final_cta"
		label="final:etsy"
		className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white hover:opacity-90"
		>
		{t.ctaEtsy}
		</TrackedOutboundLink>
		
		<TrackedOutboundLink
		href={SHOPS.zazzle.url}
		lang={lang}
		destination="zazzle"
		type="final_cta"
		label="final:zazzle"
		className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium hover:bg-white"
		>
		{t.ctaZazzle}
		</TrackedOutboundLink>
		</div>
		</section>
	);
}
