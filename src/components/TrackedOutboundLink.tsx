"use client";

import React from "react";
import { event } from "@/lib/gtag";

type Lang = "ja" | "en";
type Destination = "etsy" | "zazzle";
type ClickType = "shop_button" | "category" | "final_cta";

export default function TrackedOutboundLink({
		href,
		lang,
		destination,
		type,
		label,
		className,
		children,
	}: {
		href: string;
		lang: Lang;
		destination: Destination;
		type: ClickType;
		label: string;
		className?: string;
		children: React.ReactNode;
}) {
	return (
		<a
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className={className}
		onClick={() =>
			event("outbound_click", {
					destination,
					type,
					label,
					url: href,
					lang,
					site: "books",
			})
		}
		>
		{children}
		</a>
	);
}
