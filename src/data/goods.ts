export type Lang = "ja" | "en";

export const SHOPS = {
	etsy: {
		name: "Etsy",
		url: "https://www.etsy.com/shop/OkojoArtStudio", // TODO
	},
	zazzle: {
		name: "Zazzle",
		url: "https://www.zazzle.co.jp/store/okojo_art_studio", // TODO
	},
} as const;

export const GOODS_T = {
	ja: {
		title: "オコジョの関連グッズ",
		lead: "絵本の世界から生まれたステッカーやマグカップなどを、Etsy / Zazzle で販売しています。",
		ctaEtsy: "Etsyで見る",
		ctaZazzle: "Zazzleで見る",
		categoriesTitle: "カテゴリ",
		finalTitle: "ショップへ",
		finalLead: "最新の在庫やバリエーションは各ショップでご確認ください。",
	},
	en: {
		title: "Okojo Goods",
		lead: "Stickers, mugs, and more—born from the picture-book world. Available on Etsy and Zazzle.",
		ctaEtsy: "View on Etsy",
		ctaZazzle: "View on Zazzle",
		categoriesTitle: "Categories",
		finalTitle: "Visit the shops",
		finalLead: "For the latest variants and availability, please check each shop.",
	},
} as const;

export const CATEGORIES = [
{
	key: "stickers",
	title: { ja: "ステッカー", en: "Stickers" },
	img: "/goods/stickers.jpg",
	desc: {
		ja: "ノートやPCに貼れる、オコジョの小さな相棒。",
		en: "A tiny Okojo companion for notebooks and laptops.",
	},
	links: {
		etsy: "https://www.etsy.com/shop/OkojoArtStudio", // TODO
		zazzle: "https://www.zazzle.com/cute_hiking_okojo_sticker_japanese_stoat_adventu-256859280041495373", // TODO
	},
},
{
	key: "mugs",
	title: { ja: "マグカップ", en: "Mugs" },
	img: "/goods/mugs.jpg",
	desc: {
		ja: "朝の一杯に、山の冒険を。",
		en: "Bring a hint of mountain adventure to your mornings.",
	},
	links: {
		etsy: "https://www.etsy.com/shop/OkojoArtStudio", // TODO
		zazzle: "https://www.zazzle.com/adventure_okojo_mug_cute_hiking_stoat_illustrati-256604942897746117", // TODO
	},
},
] as const;
