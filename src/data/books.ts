// src/data/books.ts

export type BookCategory = "picture-book" | "coloring" | "photo";

export type Book = {
	id: string;
	title: string;         // 英語タイトル or 日本語タイトル
	titleJa?: string;       // 日本語タイトル（ある場合）
	series?: string;        // シリーズ名
	category: BookCategory; // 絵本 / 塗り絵 / 写真集
	published?: string;		//発売日
	description?: string;   // 英語紹介文（任意）
	descriptionJa?: string; // 日本語紹介文（任意）
	amazonJp?: string;      // Amazon JP
	amazonEn?: string;      // Amazon US/Global
	coverSrc?: string;      // public/covers/*.jpg
	tags?: string[];        // 検索用タグ
	sampleImages?: string[];
	
	specs?: string[];      // 判型・ページ数・言語など
	features?: string[];   // 特徴（「初心者向け」「季節ごと」など）
	ageRange?: string;     // 絵本の対象年齢など
	difficulty?: string;   // 塗り絵の難易度など
	
	specsEn?: string[];
	featuresEn?: string[];
	ageRangeEn?: string;
	difficultyEn?: string;

};

export const BOOKS: Book[] = [
// --- 絵本（Picture Books） ---
{
	id: "okojo-ja",
	title: "オコジョのやまのぼうけん Part 1 日本語版",
	titleJa: "オコジョのやまのぼうけん",
	series: "Stoat Adventure",
	category: "picture-book",
	published: "2025-04-21",
	amazonJp: "https://www.amazon.co.jp/dp/B0F64S2YT8",
	amazonEn: "https://www.amazon.com/dp/B0F64S2YT8",
	coverSrc: "/covers/stoat-part1-jp.jpg",
	descriptionJa:
	"小さなオコジョが、はじめて本格的な山登りに挑戦する物語です。朝焼けの稜線や森の静けさ、山で出会う生き物たちとのふれあいを、やさしい言葉とあたたかいイラストで綴りました。親子で一緒に読みながら、山や自然に親しむきっかけにもなる一冊です。",
	description:
	"A Japanese picture book about a small stoat challenging its very first mountain climb. Gentle text and warm illustrations depict dawn light on the ridges, quiet forests, and encounters with animals in the mountains. A story for children and parents to enjoy together, while feeling closer to nature.",
	
	specs: [
	"判型：210mm x 210mm（正方形レイアウト）",
	"ページ数：27 ページ",
	"言語：日本語",
	"構成：左ページに文章、右ページにイラストの見開き構成",
	],
	ageRange: "対象年齢：4〜8歳くらい",
	features: [
	"山の自然をテーマにしたやさしい冒険ストーリー",
	"親子で読み聞かせしやすい短めの文章",
	"見開きごとに場面がはっきり分かるレイアウト",
	],
	
	// ⭐ ここから英語版
	specsEn: [
	"Trim size: 210mm × 210mm (square format)",
	"Pages: 27 pages",
	"Language: Japanese",
	"Layout: text on the left page and illustration on the right, presented as full spreads",
	],
	
	featuresEn: [
	"A gentle adventure story themed around mountain nature",
	"Short and easy-to-read text, ideal for reading aloud with children",
	"Each spread clearly depicts a distinct scene in the story",
	],
	ageRangeEn: "Recommended for ages 4–8",
	difficultyEn: "",
	
	sampleImages: [
	"/books/okojo-ja/sample1.jpg",
	"/books/okojo-ja/sample2.jpg",
	"/books/okojo-ja/sample3.jpg",
	"/books/okojo-ja/sample4.jpg",
	],
},
{
	id: "stoat-part1",
	title: "Stoat's Big Mountain Adventure Part 1",
	series: "Stoat Adventure",
	category: "picture-book",
	published: "2025-04-27",
	amazonJp: "https://www.amazon.co.jp/dp/B0F6Y7X31W",
	amazonEn: "https://www.amazon.com/dp/B0F6Y7X31W",
	
	descriptionJa:
	"小さなオコジョが、はじめて本格的な山登りに挑戦する物語です。朝焼けの稜線や森の静けさ、山で出会う生き物たちとのふれあいを、やさしい言葉とあたたかいイラストで綴りました。親子で一緒に読みながら、山や自然に親しむきっかけにもなる一冊です。",
	description:
	"A Japanese picture book about a small stoat challenging its very first mountain climb. Gentle text and warm illustrations depict dawn light on the ridges, quiet forests, and encounters with animals in the mountains. A story for children and parents to enjoy together, while feeling closer to nature.",
	coverSrc: "/covers/stoat-part1-en.jpg",
	
	specs: [
	"判型：210mm x 210mm（正方形レイアウト）",
	"ページ数：27 ページ",
	"言語：日本語",
	"構成：左ページに文章、右ページにイラストの見開き構成",
	],
	ageRange: "対象年齢：4〜8歳くらい",
	features: [
	"山の自然をテーマにしたやさしい冒険ストーリー",
	"親子で読み聞かせしやすい短めの文章",
	"見開きごとに場面がはっきり分かるレイアウト",
	],
	
	// ⭐ ここから英語版
	specsEn: [
	"Trim size: 210mm × 210mm (square format)",
	"Pages: 27 pages",
	"Language: Japanese",
	"Layout: text on the left page and illustration on the right, presented as full spreads",
	],
	
	featuresEn: [
	"A gentle adventure story themed around mountain nature",
	"Short and easy-to-read text, ideal for reading aloud with children",
	"Each spread clearly depicts a distinct scene in the story",
	],
	ageRangeEn: "Recommended for ages 4–8",
	difficultyEn: "",
	
	sampleImages: [
	"/books/stoat-part1/sample-1.jpg",
	"/books/stoat-part1/sample-2.jpg",
	"/books/stoat-part1/sample-3.jpg",
	"/books/stoat-part1/sample-4.jpg",
	],
},
{
	id: "stoat-part2",
	title: "Stoat's Big Mountain Adventure Part 2",
	series: "Stoat Adventure",
	category: "picture-book",
	published: "2025-05-28",
	amazonJp: "https://www.amazon.co.jp/dp/B0FB8QT2S9",
	amazonEn: "https://www.amazon.com/dp/B0FB8QT2S9",
	coverSrc: "/covers/stoat-part2.jpg",
	
	descriptionJa:
	"小さなオコジョがリュックをしょって、再び山へ出かける冒険絵本の第2巻です。森をぬけ、川を渡り、新しい仲間たちと出会いながら目指す山頂には、たくさんの発見と感動が待っています。草花がゆれる山道、にじのかかる空、星降るキャンプの夜──どのページにも自然の美しさと冒険のワクワクがつまっています。前作に続き、本作では仲間との絆や、困難を乗り越える勇気がやさしい物語として描かれます。",
	description:
	"In this second volume of the stoat’s mountain adventure, our small hero sets out once again with a little backpack on his shoulders. Crossing forests and streams and meeting new friends along the way, he climbs toward a mountaintop filled with discoveries and excitement. Gentle mountain paths, skies touched by a rainbow, and a star-filled camping night bring the beauty of nature to every page. Following the first book, this story warmly portrays friendship, courage, and the joy of exploring the outdoors.",
	
	specs: [
	"判型：210mm × 210mm（正方形レイアウト）",
	"ページ数：32 ページ前後",
	"言語：日本語・英語併記",
	"構成：左ページに日英ナレーション、右ページにフルカラーイラスト",
	],
	specsEn: [
	"Trim size: 210mm × 210mm (square format)",
	"Length: approximately 32 pages",
	"Languages: Japanese and English (bilingual text)",
	"Layout: bilingual narration on the left page and full-color illustration on the right",
	],
	
	ageRange: "対象年齢：3歳〜小学生（読み聞かせにも最適）",
	ageRangeEn: "Recommended for ages 3 to early elementary school",
	
	features: [
	"森、川、山頂へ向かう道のりがテーマの冒険ストーリー",
	"かわいい動物キャラクターが多数登場",
	"高精細フルカラーイラスト",
	"日英ナレーション併記で読み聞かせ・英語学習にも最適",
	],
	featuresEn: [
	"An adventure story through forests, rivers, and mountain trails",
	"Many cute animal characters appear",
	"High-quality full-color illustrations",
	"Bilingual narration ideal for read-aloud time and early English learning",
	],
	
	sampleImages: [
	"/books/stoat-part2/sample-1.jpg", // P3–4
	"/books/stoat-part2/sample-2.jpg", // P14–15
	"/books/stoat-part2/sample-3.jpg", // P18–19
	"/books/stoat-part2/sample-4.jpg", // P18–19
	],
},
{
	id: "stoat-part3",
	title: "Stoat's Big Mountain Adventure Part 3",
	series: "Stoat Adventure",
	category: "picture-book",
	published: "2025-07-13",
	amazonJp: "https://www.amazon.co.jp/dp/B0FHHD56W5",
	amazonEn: "https://www.amazon.com/dp/B0FHHD56W5",
	coverSrc: "/covers/stoat-part3.jpg",
	
	descriptionJa:
	"『オコジョの山のぼうけん』シリーズ第3巻。元気いっぱいのオコジョが、森の奥にすむといわれる“まぼろしの赤い鳥”を探しに出発します。霧に包まれた小道、花が咲きそろう草原、静かな湿地──仲間たちと手がかりを探しながら進む旅には、自然の美しさと発見のよろこびがつまっています。やさしい物語と細やかなフルカラーイラストで、読者を森の深い世界へと誘う一冊です。",
	description:
	"In this third volume of the stoat’s mountain adventure, our lively little hero sets out deep into the forest in search of the legendary “red bird.” Through misty paths, flower-filled meadows, and quiet wetlands, he and his friends follow clues and discoveries along the way. With gentle storytelling and detailed full-color illustrations, this book invites readers into a world of nature, curiosity, and exploration.",
	
	specs: [
	"判型：210mm × 210mm（正方形レイアウト）",
	"ページ数：35 ページ",
	"言語：日本語・英語併記",
	"構成：左ページに日英ナレーション、右ページにフルカラーイラスト",
	],
	specsEn: [
	"Trim size: 210mm × 210mm (square format)",
	"Length: 35 pages",
	"Languages: Japanese and English (bilingual text)",
	"Layout: bilingual narration on the left page and full-color illustration on the right",
	],
	
	ageRange: "対象年齢：4〜9歳（大人の方にもおすすめです）",
	ageRangeEn: "Recommended for ages 4–9 (also enjoyable for adults)",
	
	features: [
	"森の奥にすむ“まぼろしの赤い鳥”を探す冒険ストーリー",
	"親しみやすいマンガ風の動物キャラクターたち",
	"高精細のフルカラーイラスト",
	"自然の美しさと、探究心を大切にした内容",
	],
	featuresEn: [
	"An adventure story about searching for the legendary red bird deep in the forest",
	"Friendly, manga-style animal characters",
	"High-quality full-color illustrations",
	"A gentle story that values curiosity and the beauty of nature",
	],
	
	sampleImages: [
	"/books/stoat-part3/sample-1.jpg",
	"/books/stoat-part3/sample-2.jpg",
	"/books/stoat-part3/sample-3.jpg",
	"/books/stoat-part3/sample-4.jpg",
	],
},
// --- 塗り絵（Coloring Books） ---

// Wild Birds Series 1〜7 を追加
{
	id: "wild-birds-1",
	title: "Japanese Wild Birds Series Vol.1",
	titleJa: "日本の野鳥ぬりえシリーズ Vol.1（まちと畑の鳥たち）",
	category: "coloring",
	published: "2025-05-04",
	amazonJp: "https://www.amazon.co.jp/dp/B0F7HQJJXV",
	amazonEn: "https://www.amazon.com/dp/B0F7HQJJXV",
	coverSrc: "/covers/wildbirds-1.jpg",
	
	descriptionJa:
	"日本の野鳥ぬりえシリーズ第1巻では、まちや畑など身近な環境で見られる14種類の野鳥を紹介しています。スズメやツバメ、ムクドリ、ヒバリなど、親しみのある鳥たちを楽しく塗りながら、姿や特徴を自然に学べる一冊です。各鳥の色や特徴の説明も収録しており、塗り絵としてだけでなく、日本の野鳥のイラスト集としても楽しめます。入門編として親子で楽しめる、自然観察の第一歩にぴったりの内容です。",
	description:
	"This first volume of the Japanese Wild Birds Coloring Series features 14 familiar birds found in towns, fields, and everyday landscapes. From sparrows and swallows to starlings and larks, children and adults can enjoy learning about each bird’s appearance and characteristics while coloring. The book also includes simple explanations of plumage and distinguishing features, making it enjoyable both as a coloring book and as an illustrated guide to Japanese birds. Perfect for beginners and for anyone who enjoys nature and birdwatching.",
	
	specs: [
	"判型：210mm × 210mm（正方形）",
	"ページ数：29ページ",
	"言語：日本語・英語併記",
	"内容：14種類の野鳥イラスト、色見本説明、特徴の解説付き",
	],
	specsEn: [
	"Format: 210mm × 210mm (square)",
	"Length: 29 pages",
	"Languages: Japanese and English (bilingual text)",
	"Includes: 14 bird illustrations with color notes and feature explanations",
	],
	
	ageRange: "対象年齢：10歳〜大人まで",
	ageRangeEn: "Recommended for ages 10 and up, including adults",
	
	features: [
	"まちや畑で見られる身近な14種類の野鳥を収録",
	"野鳥の色や特徴の説明付きで学びながら楽しめる",
	"初心者向けのやさしい線画で塗りやすい",
	"自然観察や野鳥への興味を育む内容",
	"親子で楽しめる入門編として最適",
	],
	featuresEn: [
	"Features 14 familiar birds found in towns and fields",
	"Includes notes on plumage colors and distinguishing characteristics",
	"Easy-to-color line art suitable for beginners",
	"Encourages interest in nature and birdwatching",
	"Great for both kids and adults",
	],
	
	sampleImages: [
	"/books/wildbirds1/sample-1.jpg",
	"/books/wildbirds1/sample-2.jpg",
	"/books/wildbirds1/sample-3.jpg",
	"/books/wildbirds1/sample-4.jpg",
	],
},
{
	id: "wild-birds-2",
	title: "Japanese Wild Birds Series Vol.2",
	titleJa: "日本の野鳥ぬりえシリーズ Vol.2（森と山の鳥たち）",
	category: "coloring",
	published: "2025-05-04",
	amazonJp: "https://www.amazon.co.jp/dp/B0F7HR3W8J",
	amazonEn: "https://www.amazon.com/dp/B0F7HR3W8J",
	coverSrc: "/covers/wildbirds-2.jpg",
	
	descriptionJa:
	"日本の野鳥ぬりえシリーズ第2巻では、森や山で出会える14種類の野鳥を収録しています。シジュウカラ、ヤマガラ、オオルリ、コマドリなど、季節とともに姿を見せる山の鳥たちを、色を塗りながら楽しく学べる一冊です。各鳥の身体の色や特徴の簡単な説明も付いており、塗り絵としてだけでなく、日本の野鳥イラスト集としても楽しめます。自然観察や野鳥の魅力に触れられる、奥深い内容の入門書です。",
	description:
	"The second volume of the Japanese Wild Birds Coloring Series features 14 species commonly found in forests and mountain trails. From the lively Varied Tit and Great Tit to the beautifully colored Blue-and-White Flycatcher and melodious Japanese Robin, this book invites you to explore the charm of mountain birds while coloring. Simple notes on plumage and key features are included, making it enjoyable both as a coloring book and an illustrated guide. A perfect introduction to nature observation and the changing seasons in Japan’s forests.",
	
	specs: [
	"判型：210mm × 210mm（正方形）",
	"ページ数：29ページ",
	"言語：日本語・英語併記",
	"内容：14種類の野鳥イラスト、色見本説明、特徴の解説付き",
	],
	specsEn: [
	"Format: 210mm × 210mm (square)",
	"Length: 29 pages",
	"Languages: Japanese and English (bilingual text)",
	"Includes: 14 forest and mountain bird illustrations with color notes",
	],
	
	ageRange: "対象年齢：10歳〜大人まで",
	ageRangeEn: "Recommended for ages 10 and up, including adults",
	
	features: [
	"森や山で見られる14種類の野鳥を収録",
	"野鳥の色や特徴の説明付きで学びながら楽しめる",
	"四季の変化や自然の奥深さを感じられる構成",
	"丁寧な線画で塗りやすく、初心者にも最適",
	"自然観察や野鳥への関心を深める内容",
	],
	featuresEn: [
	"Features 14 wild birds commonly found in forests and mountain trails",
	"Includes notes on plumage colors and distinctive features",
	"Experience the changing seasons and atmosphere of Japanese woodlands",
	"Beginner-friendly line art suitable for all coloring skill levels",
	"Encourages interest in nature and birdwatching",
	],
	
	sampleImages: [
	"/books/wildbirds2/sample-1.jpg",
	"/books/wildbirds2/sample-2.jpg",
	"/books/wildbirds2/sample-3.jpg",
	"/books/wildbirds2/sample-4.jpg",
	],
},
{
	id: "wild-birds-3",
	title: "Japanese Wild Birds Series Vol.3",
	titleJa: "日本の野鳥ぬりえシリーズ Vol.3（水辺とやぶの鳥たち）",
	category: "coloring",
	published: "2025-05-04",
	amazonJp: "https://www.amazon.co.jp/dp/B0F7HVB2R8",
	amazonEn: "https://www.amazon.com/dp/B0F7HVB2R8",
	coverSrc: "/covers/wildbirds-3.jpg",
	
	descriptionJa:
	"日本の野鳥ぬりえシリーズ第3巻では、水辺や草むら、やぶに暮らす14種類の野鳥を収録しています。カワセミ、セキレイ、ホオジロ、モズなど、身近にいながらも注意深く観察しないと気づきにくい鳥たちの姿を、ぬりえを通して楽しく学べる一冊です。各鳥の身体の色や特徴の説明もあり、塗り絵としてだけでなく、野鳥イラスト集としても楽しめます。自然の奥にひそむ命のドラマを感じられる内容です。",
	description:
	"The third volume of the Japanese Wild Birds Coloring Series features 14 bird species that live around watersides, grasslands, and thickets. From kingfishers and wagtails to buntings and shrikes, this book introduces birds that are familiar yet easy to overlook in daily life. While coloring, readers can discover their unique behaviors and hidden lives. With simple notes on plumage and characteristics, the book is enjoyable both as a coloring activity and as an illustrated guide to Japanese birds.",
	
	specs: [
	"判型：210mm × 210mm（正方形）",
	"ページ数：29ページ",
	"言語：日本語・英語併記",
	"内容：14種類の野鳥イラスト、色見本説明、特徴の解説付き",
	],
	specsEn: [
	"Format: 210mm × 210mm (square)",
	"Length: 29 pages",
	"Languages: Japanese and English (bilingual text)",
	"Includes: 14 illustrations with color notes and feature explanations",
	],
	
	ageRange: "対象年齢：10歳〜大人まで",
	ageRangeEn: "Recommended for ages 10 and up, including adults",
	
	features: [
	"水辺や草むら、やぶに暮らす14種類の野鳥を収録",
	"野鳥の色や特徴の説明付きで学びながら楽しめる",
	"身近な環境にひそむ鳥たちの暮らしを発見できる内容",
	"丁寧な線画で塗りやすく、初心者にも最適",
	"自然観察や野鳥への関心を深めるシリーズの一冊",
	],
	featuresEn: [
	"Features 14 bird species living around watersides, grasslands, and thickets",
	"Includes notes on plumage colors and distinctive features",
	"Discover the hidden lives of birds commonly found in everyday nature",
	"Beginner-friendly line art suitable for all coloring skill levels",
	"Encourages deeper interest in nature and birdwatching",
	],
	
	sampleImages: [
	"/books/wildbirds3/sample-1.jpg",
	"/books/wildbirds3/sample-2.jpg",
	"/books/wildbirds3/sample-3.jpg",
	"/books/wildbirds3/sample-4.jpg",
	],
},
{
	id: "wild-birds-4",
	title: "Japanese Wild Birds Series Vol.4",
	titleJa: "日本の野鳥ぬりえシリーズ Vol.4（湖と湿地の鳥たち）",
	category: "coloring",
	published: "2025-05-05",
	amazonJp: "https://www.amazon.co.jp/dp/B0F7L9SHYF",
	amazonEn: "https://www.amazon.com/dp/B0F7L9SHYF",
	coverSrc: "/covers/wildbirds-4.jpg",
	
	descriptionJa:
	"日本の野鳥ぬりえシリーズ第4巻では、湖、池、湿地、ヨシ原などの淡水環境で暮らす14種類の水辺の野鳥を紹介しています。サギやカモ、カイツブリ、ハクチョウなど、水辺で見られる美しい鳥たちを、リアルで繊細な白黒線画で楽しく彩色できる一冊です。日本語と英語によるわかりやすい解説も付いており、塗り絵としてだけでなく、野鳥のイラスト図鑑としても楽しめます。野鳥好きの方はもちろん、自然に触れながらリラックスしたい方にもおすすめです。",
	description:
	"The fourth volume of the Japanese Wild Birds Coloring Series features 14 bird species that inhabit lakes, ponds, marshes, and reed wetlands. From herons and ducks to grebes and swans, this book introduces the beautiful waterbirds commonly seen in quiet freshwater environments. With detailed black-and-white line art and bilingual explanations in Japanese and English, the book can be enjoyed both as a coloring activity and as an illustrated guide. It is ideal not only for bird lovers but also for anyone seeking relaxation and a deeper connection with nature.",
	
	specs: [
	"判型：210mm × 210mm（正方形）",
	"ページ数：29ページ",
	"言語：日本語・英語併記",
	"内容：14種類の水辺の野鳥イラスト、色見本説明、特徴の解説付き",
	],
	specsEn: [
	"Format: 210mm × 210mm (square)",
	"Length: 29 pages",
	"Languages: Japanese and English (bilingual text)",
	"Includes: 14 freshwater bird illustrations with color notes and feature explanations",
	],
	
	ageRange: "対象年齢：10歳〜大人まで",
	ageRangeEn: "Recommended for ages 10 and up, including adults",
	
	features: [
	"湖、池、湿地、ヨシ原など淡水環境に暮らす14種の野鳥を収録",
	"野鳥の身体の色や特徴の説明付きで学びながら楽しめる",
	"サギ、カモ、カイツブリ、ハクチョウなど多様な水辺の鳥が登場",
	"繊細な白黒線画で塗りやすく、完成度の高い作品に仕上がる",
	"自然観察や野鳥への興味を深める内容で、リラックスしながら学べる",
	],
	featuresEn: [
	"Features 14 bird species living in lakes, ponds, marshes, and reed wetlands",
	"Includes notes on plumage colors and distinctive characteristics",
	"Herons, ducks, grebes, swans, and other waterbirds included",
	"Detailed black-and-white line drawings suitable for all skill levels",
	"Encourages interest in nature and provides a relaxing coloring experience",
	],
	
	sampleImages: [
	"/books/wildbirds4/sample-1.jpg",
	"/books/wildbirds4/sample-2.jpg",
	"/books/wildbirds4/sample-3.jpg",
	"/books/wildbirds4/sample-4.jpg",
	],
},
{
	id: "wild-birds-5",
	title: "Japanese Wild Birds Series Vol.5",
	titleJa: "日本の野鳥ぬりえシリーズ Vol.5（海岸と干潟の鳥たち）",
	category: "coloring",
	published: "2025-05-07",
	amazonJp: "https://www.amazon.co.jp/dp/B0F7X2YWNL",
	amazonEn: "https://www.amazon.com/dp/B0F7X2YWNL",
	coverSrc: "/covers/wildbirds-5.jpg",
	
	
	descriptionJa:
	"日本の野鳥ぬりえシリーズ第5巻では、海岸や干潟に暮らす14種類の海鳥を収録しています。アジサシ、ウミネコ、ミユビシギ、チドリ類など、潮風の中で出会える個性豊かな鳥たちを、繊細な白黒線画で楽しく彩色できる一冊です。野鳥の身体の色や特徴の説明も付いており、塗り絵としてだけでなく、海辺の野鳥のイラスト集としても楽しめます。自然を感じながらリラックスしたい方や、海の鳥が好きな方にもおすすめです。",
	description:
	"The fifth volume of the Japanese Wild Birds Coloring Series features 14 bird species that inhabit Japan’s coasts, beaches, and tidal flats. From elegant terns and powerful gulls to sandpipers and plovers, this book introduces a wide variety of seabirds found along the shoreline. With detailed black-and-white line drawings and bilingual explanations, it can be enjoyed both as a coloring book and as an illustrated guide. Perfect for nature lovers, bird enthusiasts, and anyone seeking a calming creative activity.",
	
	specs: [
	"判型：210mm × 210mm（正方形）",
	"ページ数：29ページ",
	"言語：日本語・英語併記",
	"内容：14種類の海鳥イラスト、色見本説明、特徴の解説付き",
	],
	specsEn: [
	"Format: 210mm × 210mm (square)",
	"Length: 29 pages",
	"Languages: Japanese and English (bilingual text)",
	"Includes: 14 coastal bird illustrations with color notes and feature explanations",
	],
	
	ageRange: "対象年齢：10歳〜大人まで",
	ageRangeEn: "Recommended for ages 10 and up, including adults",
	
	features: [
	"海岸や干潟に生息する14種類の海鳥を収録",
	"野鳥の色や特徴の説明付きで学びながら楽しめる",
	"アジサシ、ウミネコ、ミユビシギ、チドリ類など多彩な海鳥が登場",
	"丁寧な線画で塗りやすく、初心者にも最適",
	"自然観察や鳥への興味を深める内容で、リラックスしながら楽しめる",
	],
	featuresEn: [
	"Features 14 bird species found along Japan’s coasts and tidal flats",
	"Includes notes on plumage colors and distinctive features",
	"Terns, gulls, sandpipers, and plovers are included",
	"Beginner-friendly line art suitable for all coloring skill levels",
	"Ideal for nature lovers and anyone who enjoys relaxing creative activities",
	],
	
	sampleImages: [
	"/books/wildbirds5/sample-1.jpg",
	"/books/wildbirds5/sample-2.jpg",
	"/books/wildbirds5/sample-3.jpg",
	"/books/wildbirds5/sample-4.jpg",
	],
},
{
	id: "wild-birds-6",
	title: "Japanese Wild Birds Series Vol.6",
	titleJa: "日本の野鳥ぬりえシリーズ Vol.6（野原と平原の鳥たち）",
	category: "coloring",
	published: "2025-05-07",
	amazonJp: "https://www.amazon.co.jp/dp/B0F7WHNHYD",
	amazonEn: "https://www.amazon.com/dp/B0F7WHNHYD",
	coverSrc: "/covers/wildbirds-6.jpg",
	
	descriptionJa:
	"日本の野鳥ぬりえシリーズ第6巻では、野原や平原、湿原などに生息する14種類の野鳥を収録しています。優美なタンチョウ、力強いキジ、優雅に舞うガンの仲間など、広い大地で出会える堂々とした鳥たちを、繊細な白黒線画で楽しく彩色できる一冊です。鳥の身体の色や特徴を学べる説明付きで、塗り絵として楽しむだけでなく、野鳥図鑑としても楽しめます。鳥好きの方はもちろん、自然に触れながらリラックスしたい方にもおすすめです。",
	description:
	"The sixth volume of the Japanese Wild Birds Coloring Series features 14 magnificent bird species found in Japan’s fields, plains, and wetlands. From the graceful Red-crowned Crane and striking Green Pheasant to geese soaring across open landscapes, this book highlights powerful and elegant birds that thrive in wide natural habitats. With detailed black-and-white line drawings and bilingual explanations, it can be enjoyed both as a relaxing coloring activity and as an illustrated guide for bird lovers and nature enthusiasts.",
	
	specs: [
	"判型：210mm × 210mm（正方形）",
	"ページ数：29ページ",
	"言語：日本語・英語併記",
	"内容：14種類の野鳥イラスト、色見本説明、特徴の解説付き",
	],
	specsEn: [
	"Format: 210mm × 210mm (square)",
	"Length: 29 pages",
	"Languages: Japanese and English (bilingual text)",
	"Includes: 14 field and plain bird illustrations with color notes and feature explanations",
	],
	
	ageRange: "対象年齢：10歳〜大人まで",
	ageRangeEn: "Recommended for ages 10 and up, including adults",
	
	features: [
	"野原、平原、湿原などに暮らす14種類の野鳥を収録",
	"タンチョウ、キジ、ガン類など迫力と美しさを兼ね備えた鳥が登場",
	"野鳥の身体の色・特徴を学べる解説付き",
	"丁寧な線画で塗りやすく、初心者にも最適",
	"自然観察や野鳥への興味を深める構成",
	],
	featuresEn: [
	"Features 14 bird species living in fields, plains, and wetlands",
	"Includes cranes, pheasants, geese, and other striking birds",
	"Includes notes on plumage colors and distinctive characteristics",
	"Beginner-friendly line art suitable for all coloring skill levels",
	"Ideal for nature lovers and birdwatching enthusiasts",
	],
	
	sampleImages: [
	"/books/wildbirds6/sample-1.jpg",
	"/books/wildbirds6/sample-2.jpg",
	"/books/wildbirds6/sample-3.jpg",
	"/books/wildbirds6/sample-4.jpg",
	],
},
{
	id: "wild-birds-7",
	title: "Japanese Wild Birds Series Vol.7",
	titleJa: "日本の野鳥ぬりえシリーズ Vol.7（猛禽たち）",
	category: "coloring",
	published: "2025-05-08",
	amazonJp: "https://www.amazon.co.jp/dp/B0F83ZGR5L",
	amazonEn: "https://www.amazon.com/dp/B0F83ZGR5L",
	coverSrc: "/covers/wildbirds-7.jpg",
	
	descriptionJa:
	"日本の野鳥ぬりえシリーズ第7巻では、力強いワシ、俊敏なタカ、神秘的なフクロウなど、日本の自然を象徴する14種類の猛禽類を収録しています。鋭い眼差しや広げた翼の迫力を、繊細な白黒線画でじっくりと彩色できる一冊です。身体の色や特徴に関する解説も付いており、塗り絵としてだけでなく、猛禽類のイラスト図鑑としても楽しめます。自然が好きな方、鳥に興味がある方、迫力ある生きものを描きたい方におすすめです。",
	description:
	"The seventh volume of the Japanese Wild Birds Coloring Series features 14 birds of prey found across Japan, including powerful eagles, swift hawks, and mysterious owls. Their sharp eyes, strong wings, and striking forms are captured in detailed black-and-white line art for you to color. With bilingual explanations on plumage and key features, this book can be enjoyed both as a coloring activity and as an illustrated guide. Perfect for nature lovers, bird enthusiasts, and anyone fascinated by the beauty and strength of raptors.",
	
	specs: [
	"判型：210mm × 210mm（正方形）",
	"ページ数：29ページ",
	"言語：日本語・英語併記",
	"内容：14種類の猛禽類イラスト、色見本説明、特徴の解説付き",
	],
	specsEn: [
	"Format: 210mm × 210mm (square)",
	"Length: 29 pages",
	"Languages: Japanese and English (bilingual text)",
	"Includes: 14 raptor illustrations with color notes and feature explanations",
	],
	
	ageRange: "対象年齢：10歳〜大人まで",
	ageRangeEn: "Recommended for ages 10 and up, including adults",
	
	features: [
	"ワシ、タカ、フクロウなど日本の猛禽類14種類を収録",
	"鋭い眼差しや翼の動きなど、迫力ある姿を丁寧に線画で表現",
	"身体の色や特徴の解説付きで、学びながら塗れる内容",
	"繊細な線画で塗りやすく、初心者から上級者まで楽しめる",
	"自然観察や猛禽類への興味を深める一冊",
	],
	featuresEn: [
	"Features 14 birds of prey found in Japan, including eagles, hawks, and owls",
	"Detailed line drawings capture sharp eyes, powerful wings, and dynamic poses",
	"Includes notes on plumage colors and distinctive characteristics",
	"Suitable for beginners and advanced colorists alike",
	"Ideal for nature lovers and anyone fascinated by raptors",
	],
	
	sampleImages: [
	"/books/wildbirds7/sample-1.jpg",
	"/books/wildbirds7/sample-2.jpg",
	"/books/wildbirds7/sample-3.jpg",
	"/books/wildbirds7/sample-4.jpg",
	],
},

// --- 塗り絵（Coloring Books） ---

{
	id: "castles",
	title: "Castles of Japan – Enjoying Japanese Castles through Coloring",
	titleJa: "CASTLES OF JAPAN — 日本の名城を楽しむ塗り絵ブック（英語版）",
	category: "coloring",
	published: "2025-05-11",
	amazonJp: "https://www.amazon.co.jp/dp/B0F89YXC6K",
	amazonEn: "https://www.amazon.com/dp/B0F89YXC6K",
	coverSrc: "/covers/castles.jpg",
	
	descriptionJa:
	"日本各地の名城20ヶ所を、美しい線画イラストで楽しめる塗り絵ブックです。姫路城の優美な天守、竹田城跡の山城、名古屋城や松本城など、歴史に彩られた名城の姿をじっくりと塗りながら楽しめます。各城にまつわる歴史や逸話、武将のドラマ、城の構造や特徴など、読みものとしても楽しめる内容になっています。ストレス解消や創作時間としてはもちろん、日本文化・歴史の学びにも役立つ一冊です。",
	description:
	"Explore the timeless beauty and history of Japan’s most iconic castles through detailed, hand-drawn illustrations. This coloring book features 20 remarkable fortresses, each with its own stories of samurai warfare, strategic architecture, and cultural heritage. From the elegance of Himeji to the mountaintop scenery of Takeda Castle, every page invites you to relax, learn, and enjoy the art of Japanese castles.",
	
	specs: [
	"判型：210mm × 210mm（正方形レイアウト）",
	"ページ数：45ページ",
	"言語：英語",
	"内容：城の解説、豆知識、用語集を収録",
	],
	specsEn: [
	"Format: 210mm × 210mm (8.3 × 8.3 inches, square)",
	"Pages: 45 pages",
	"Language: English ",
	"Includes historical notes, trivia, and a glossary of castle architecture",
	],
	
	features: [
	"日本の名城20ヶ所を精密な線画で収録",
	"歴史的背景、城の構造、逸話など読みもの要素も充実",
	"天守、石垣、櫓、堀など、城の魅力を細やかに描写",
	"ストレス解消・創作・学習に最適",
	"日本文化・歴史が好きな方へのプレゼントにもおすすめ",
	],
	featuresEn: [
	"20 highly detailed illustrations of famous Japanese castles",
	"Historical background pages with legends, battles, and cultural insights",
	"Includes glossary of architectural terms and trivia sections",
	"Perfect for relaxation, creative exploration, and learning about Japanese history",
	"Great for fans of castles, samurai culture, and Japanese art",
	],
	
	difficulty: "塗りやすい難易度で、初心者から上級者まで楽しめます",
	difficultyEn: "Suitable for beginners to advanced colorists",
	
	sampleImages: [
	"/books/castle/sample-1.jpg",
	"/books/castle/sample-2.jpg",
	"/books/castle/sample-3.jpg",
	"/books/castle/sample-4.jpg",
	],
},

{
	id: "flowers",
	title: "Close-up Flowers for Coloring",
	titleJa: "Close-up Flowers（花のクローズアップ塗り絵）",
	category: "coloring",
	published: "2025-04-27",
	amazonJp: "",
	amazonEn: "https://www.amazon.com/dp/B0F6XWGP8L",
	coverSrc: "/covers/flowers.jpg",
		
	descriptionJa:
	"『Close-up Flowers for Coloring』は、季節ごとに咲く美しい花々を繊細な線画で描いた、全26点のボタニカル塗り絵集です。ヒマワリ、サクラ、バラ、アサガオなど、身近な花の細部に焦点を当て、その形や質感をじっくり味わえる構成になっています。大人からティーンまで楽しめる内容で、リラックスしながら自然の美しさに触れられる一冊です。色鉛筆、ペン、水彩など、お好みの画材で自由に彩色をお楽しみください。",
	
	description:
	"Discover the intricate beauty of nature with Close-up Flowers for Coloring. This collection features 26 detailed botanical illustrations showcasing seasonal favorites such as sunflowers, cherry blossoms, roses, and morning glories. Each artwork highlights the elegant structure and delicate textures of each bloom, inviting a mindful and relaxing coloring experience. Suitable for adults and teens, this book offers a creative journey through the floral wonders of the year, one close-up at a time.",
	
	specs: [
	"判型：約182mm × 256mm（縦長）",
	"ページ数：27ページ",
	"言語：—（文章なし、イラストのみ）",
	"内容：26種類の花をテーマにしたボタニカル線画",
	],
	specsEn: [
	"Format: approx. 182mm × 256mm (portrait)",
	"Length: 27 pages",
	"Language: — (illustrations only, no text)",
	"Includes: 26 botanical close-up flower illustrations",
	],
	
	ageRange: "対象年齢：13歳〜大人まで",
	ageRangeEn: "Recommended for ages 13 and up, including adults",
	
	features: [
	"季節の花をテーマにしたボタニカル塗り絵集（全26点）",
	"サクラ、ヒマワリ、バラ、アサガオなど多彩な花を収録",
	"細部まで描かれた繊細な線画で塗りごたえ抜群",
	"リラックスしながら楽しめる大人向けデザイン",
	"文章なしのシンプル構成で、彩色に集中できる",
	],
	featuresEn: [
	"A botanical coloring collection featuring 26 close-up flower designs",
	"Includes seasonal favorites such as cherry blossoms, roses, sunflowers, and morning glories",
	"Fine, detailed linework ideal for mindful coloring",
	"Designed for adults and teens seeking a relaxing creative experience",
	"Simple illustration-only format for maximum coloring focus",
	],
	
	sampleImages: [
	"/books/flowers/sample-1.jpg",
	"/books/flowers/sample-2.jpg",
	"/books/flowers/sample-3.jpg",
	"/books/flowers/sample-4.jpg",
	],
},
{
	id: "architecture",
	title: "Coloring Book of Traditional Japanese Architecture and Landscapes",
	titleJa: "日本の伝統建築と風景の塗り絵",
	category: "coloring",
	published: "2025-04-24",
	amazonJp: "",
	amazonEn: "https://www.amazon.com/dp/B0F6LY2ZGM",
	coverSrc: "/covers/architecture.jpg",
	
	descriptionJa:
	"『Coloring Book of Traditional Japanese Architecture and Landscapes』は、日本の伝統的な建築物や風景を精密な線画で描いた大人向けの塗り絵集です。城、寺社、武家屋敷、古い町並みなど、日本の美しい歴史的風景をじっくりと楽しめる内容になっています。文章のないシンプルな構成で、落ち着いた時間の中で建築の美しさや四季の情景を自由に彩色できます。日本文化が好きな方や、細密な線画を塗るのが好きな方におすすめの一冊です。",
	
	description:
	"This coloring book features detailed line art of traditional Japanese architecture and landscapes, including castles, shrines, temples, and samurai residences. Designed for adults, it offers a relaxing way to appreciate the beauty of Japan’s historic buildings and scenic views. With illustration-only pages, it invites you to enjoy mindful coloring while exploring the charm of Japan’s cultural heritage.",
	
	specs: [
	"判型：約182mm × 256mm（縦長）",
	"ページ数：31ページ",
	"言語：—（文章なし、イラストのみ）",
	"内容：日本の伝統建築と風景を描いた精密線画",
	],
	specsEn: [
	"Format: approx. 182mm × 256mm (portrait)",
	"Length: 31 pages",
	"Language: — (illustrations only, no text)",
	"Includes: detailed line art of traditional Japanese buildings and landscapes",
	],
	
	ageRange: "対象年齢：13歳〜大人まで",
	ageRangeEn: "Recommended for ages 13 and up, including adults",
	
	features: [
	"日本の城、神社、寺、武家屋敷、町並みなど多彩な建築を収録",
	"繊細で美しい線画で、塗りごたえのある大人向けデザイン",
	"風景と歴史的建築を楽しみながらリラックスできる内容",
	"文章のないシンプル構成で、彩色に集中できる",
	"日本文化・建築・歴史が好きな方に最適",
	],
	featuresEn: [
	"Features castles, shrines, temples, samurai houses, and traditional townscapes",
	"Fine, detailed line drawings designed for adult coloring",
	"A relaxing way to enjoy Japan’s architectural beauty and scenic landscapes",
	"Text-free pages for full creative focus",
	"Ideal for fans of Japanese culture, architecture, and traditional art",
	],
	
	sampleImages: [
	"/books/architecture/sample-1.jpg",
	"/books/architecture/sample-2.jpg",
	"/books/architecture/sample-3.jpg",
	"/books/architecture/sample-4.jpg",
	],
},

// --- 写真集（Photo Books） ---
{
	id: "photo-main",
	title: "Fascinated by Mountains and Nature",
	titleJa: "山と自然に魅せられて",
	category: "photo",
	published: "2025-11-07",
	amazonJp: "https://www.amazon.co.jp/dp/B0G1CNPJ1L",
	amazonEn: "",
	coverSrc: "/covers/photo-main.jpg",
	
	descriptionJa:
	"岩手の山々と東北の大自然を題材に、四季と光が織りなす静かな瞬間を収めた写真集です。焼石岳、早池峰山、栗駒山を中心に、沢、湿原、ブナ林、そして四季の花々──。作者が長年歩き続けてきた「故郷の自然」の姿を、丁寧に写しとっています。朝の山頂で見た雲海、霧に沈む湿原、萌葱色に輝く初夏のブナ林、霜と紅葉が溶け合う晩秋の湿原、そして冬の冷たい光に包まれた静寂の森。ページをめくるごとに、大自然と向き合った時間の記憶がよみがえるような一冊です。",
	
	description:
	"This photo book captures quiet moments shaped by the light and seasons of the mountains in Iwate and the natural landscapes of northern Japan. Featuring Mt. Yakeishi, Mt. Hayachine, Mt. Kurikoma, and the surrounding streams, wetlands, beech forests, and seasonal flowers, it is a collection of scenes encountered over many years spent walking through the photographer’s home mountains. From sea clouds seen at dawn, mist-covered marshlands, and fresh green beech forests of early summer to the frosted colors of late autumn and the stillness of winter light, each photograph preserves a vivid memory of time spent with nature. May this book bring a sense of quiet breath and lingering tranquility to all who turn its pages.",
	
	specs: [
	"判型：210mm × 210mm（正方形）",
	"ページ数：138ページ",
	"言語：日本語・英語併記（キャプション含む）",
	"内容：岩手・東北の自然風景写真を収録",
	],
	specsEn: [
	"Format: 210mm × 210mm (square)",
	"Length: 138 pages",
	"Languages: Japanese and English (with bilingual captions)",
	"Content: Landscape photography from Iwate and northern Japan",
	],
	
	ageRange: "対象年齢：13歳〜大人まで",
	ageRangeEn: "Recommended for ages 13 and up, including adults",
	
	features: [
	"岩手・東北の山々と自然風景を中心とした写真集",
	"焼石岳・早池峰山・栗駒山をはじめとする四季の光景を収録",
	"森・沢・湿原・季節の花など、多様な自然の表情を幅広く掲載",
	"静けさと臨場感を大切にした構成",
	"大自然と向き合ってきた長年の記録として楽しめる一冊",
	],
	featuresEn: [
	"A photo collection focused on the mountains and natural landscapes of Iwate and northern Japan",
	"Includes scenes from Mt. Yakeishi, Mt. Hayachine, Mt. Kurikoma, and surrounding regions",
	"Features streams, wetlands, beech forests, and seasonal blossoms",
	"A quiet, immersive presentation emphasizing natural light and atmosphere",
	"A record of years spent walking and observing the photographer’s home mountains",
	],
	
	sampleImages: [
	"/books/photo-book/sample-1.jpg",
	"/books/photo-book/sample-2.jpg",
	"/books/photo-book/sample-3.jpg",
	"/books/photo-book/sample-4.jpg",
	],
},
{
	id: "photo-main-en",
	title: "Fascinated by Mountains and Nature",
	titleJa: "Fascinated by Mountains and Nature",
	category: "photo",
	published: "2025-11-07",
	amazonJp: "",
	amazonEn: "https://www.amazon.com/dp/B0G1GZVWKW",
	coverSrc: "/covers/photo-main-en.jpg",
	descriptionJa:
	"岩手の山々と東北の大自然を題材に、四季と光が織りなす静かな瞬間を収めた写真集です。焼石岳、早池峰山、栗駒山を中心に、沢、湿原、ブナ林、そして四季の花々──。作者が長年歩き続けてきた「故郷の自然」の姿を、丁寧に写しとっています。朝の山頂で見た雲海、霧に沈む湿原、萌葱色に輝く初夏のブナ林、霜と紅葉が溶け合う晩秋の湿原、そして冬の冷たい光に包まれた静寂の森。ページをめくるごとに、大自然と向き合った時間の記憶がよみがえるような一冊です。",
	
	description:
	"This photo book captures quiet moments shaped by the light and seasons of the mountains in Iwate and the natural landscapes of northern Japan. Featuring Mt. Yakeishi, Mt. Hayachine, Mt. Kurikoma, and the surrounding streams, wetlands, beech forests, and seasonal flowers, it is a collection of scenes encountered over many years spent walking through the photographer’s home mountains. From sea clouds seen at dawn, mist-covered marshlands, and fresh green beech forests of early summer to the frosted colors of late autumn and the stillness of winter light, each photograph preserves a vivid memory of time spent with nature. May this book bring a sense of quiet breath and lingering tranquility to all who turn its pages.",
	
	specs: [
	"判型：210mm × 210mm（正方形）",
	"ページ数：138ページ",
	"言語：日本語・英語併記（キャプション含む）",
	"内容：岩手・東北の自然風景写真を収録",
	],
	specsEn: [
	"Format: 210mm × 210mm (square)",
	"Length: 138 pages",
	"Languages: Japanese and English (with bilingual captions)",
	"Content: Landscape photography from Iwate and northern Japan",
	],
	
	ageRange: "対象年齢：13歳〜大人まで",
	ageRangeEn: "Recommended for ages 13 and up, including adults",
	
	features: [
	"岩手・東北の山々と自然風景を中心とした写真集",
	"焼石岳・早池峰山・栗駒山をはじめとする四季の光景を収録",
	"森・沢・湿原・季節の花など、多様な自然の表情を幅広く掲載",
	"静けさと臨場感を大切にした構成",
	"大自然と向き合ってきた長年の記録として楽しめる一冊",
	],
	featuresEn: [
	"A photo collection focused on the mountains and natural landscapes of Iwate and northern Japan",
	"Includes scenes from Mt. Yakeishi, Mt. Hayachine, Mt. Kurikoma, and surrounding regions",
	"Features streams, wetlands, beech forests, and seasonal blossoms",
	"A quiet, immersive presentation emphasizing natural light and atmosphere",
	"A record of years spent walking and observing the photographer’s home mountains",
	],
	
	sampleImages: [
	"/books/photo-book/sample-1.jpg",
	"/books/photo-book/sample-2.jpg",
	"/books/photo-book/sample-3.jpg",
	"/books/photo-book/sample-4.jpg",
	],
},

];
