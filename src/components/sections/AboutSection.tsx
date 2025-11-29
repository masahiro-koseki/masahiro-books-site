// src/components/sections/AboutSection.tsx
import { MapPin, Camera, Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type AboutTexts = {
	title: string;
	bio: string;
	location: string;
	focus: string;
	links: string;
};

type AboutSectionProps = {
	lang: "ja" | "en";
	about: AboutTexts;
};

export default function AboutSection({ lang, about }: AboutSectionProps) {
	return (
		<div className="mt-6">
		{/* 紹介文（プロフィール画像なしで横幅いっぱい） */}
		<p className="text-neutral-700 section-body">
		{about.bio}
		</p>
		
		{/* 場所・撮影対象 */}
		<ul className="mt-4 text-sm text-neutral-700 space-y-1">
		<li className="flex items-center gap-2">
		<MapPin className="h-4 w-4" /> {about.location}
		</li>
		<li className="flex items-center gap-2">
		<Camera className="h-4 w-4" /> {about.focus}
		</li>
		</ul>
		
		{/* 略歴・掲載など：2列カード */}
		<div className="mt-6 grid sm:grid-cols-2 gap-4">
		<Card className="rounded-2xl h-full">
		<CardHeader>
		<CardTitle className="text-base flex items-center gap-2">
		<Calendar className="h-4 w-4" />
		{lang === "ja" ? "略歴" : "Timeline"}
		</CardTitle>
		</CardHeader>
		<CardContent>
		<ul className="text-sm text-neutral-700 space-y-2">
		<li>
		1962 – {lang === "ja"
			? "岩手県金ケ崎町に生まれる"
		: "Born in Kanegasaki, Iwate, Japan"}
		</li>
		
		<li>
		1970s – {lang === "ja"
			? "山や川で遊びながら自然に親しむ"
		: "Spent childhood exploring mountains and rivers"}
		</li>
		
		<li>
		2020s – {lang === "ja"
			? "自然体験をもとに「オコジョの山のぼうけん」シリーズ制作開始"
		: "Began creating the “Stoat’s Big Mountain Adventure” picture-book series"}
		</li>
		
		<li>
		2020s – {lang === "ja"
			? "日本の城・野鳥・花をテーマにした塗り絵シリーズを制作"
		: "Started creating coloring books featuring Japanese castles, birds, and flowers"}
		</li>
		
		<li>
		2020s – {lang === "ja"
			? "自然をテーマにした写真集の制作も並行して行う"
		: "Also works on nature-themed photo books"}
		</li>
		</ul>
		</CardContent>
		</Card>
		
		<Card className="rounded-2xl h-full">
		<CardHeader>
		<CardTitle className="text-base">
		{lang === "ja" ? "掲載・活動" : "Features & Activities"}
		</CardTitle>
		</CardHeader>
		<CardContent>
		<ul className="text-sm text-neutral-700 space-y-2">
		<li>
		{lang === "ja"
			? "絵本・塗り絵を通して自然の魅力を伝える活動を行う"
		: "Creates picture books and coloring books to share the charm of nature"}
		</li>
		
		<li>
		{lang === "ja"
			? "「オコジョの山のぼうけん」シリーズや日本の城・野鳥の塗り絵シリーズを制作"
		: "Author of the “Stoat’s Big Mountain Adventure” series and coloring books on castles and birds"}
		</li>
		
		<li>
		{lang === "ja"
			? "東北の自然をテーマにした作品づくりを継続"
		: "Continues to create works inspired by the nature of northeastern Japan"}
		</li>
		</ul>
		</CardContent>
		</Card>
		</div>
		
		{/* 下の区切り線：次セクションとの余白は Section 側に任せる */}
		<div className="w-full h-px bg-neutral-200 mt-8 mb-0" />
		</div>
	);
}
