// src/components/OkojoLogo.tsx
import * as React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export function OkojoLogo(props: Props) {
	return (
		<svg
		viewBox="0 0 48 48"
		fill="none"
		stroke="currentColor"
		strokeWidth={1.8}
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
		{...props}
		>
		{/* 顔まわり */}
		<path d="M17 14c0-4 3-7 7-7s7 3 7 7v6H17z" />
		{/* 耳 */}
		<path d="M19 9.5V7.5M29 9.5V7.5" />
		{/* 目 */}
		<circle cx="21" cy="14.5" r="0.9" fill="currentColor" />
		<circle cx="27" cy="14.5" r="0.9" fill="currentColor" />
		{/* 鼻 */}
		<circle cx="24" cy="16.5" r="0.8" fill="currentColor" />
		{/* 口 */}
		<path d="M24 17.5c-0.6 0.5-1.2 0.7-2 0.7M24 17.5c0.6 0.5 1.2 0.7 2 0.7" />
		
		{/* 体 */}
		<path d="M18 20v11c0 4.5 2.7 7 6 7s6-2.5 6-7V20" />
		{/* 腕のライン */}
		<path d="M18 24c-2 0.5-3.5 1.5-4.5 3" />
		<path d="M30 24c2 0.5 3.5 1.5 4.5 3" />
		{/* 足元 */}
		<path d="M20 38.5c-1.5 1-3 1.5-4.5 1.5" />
		<path d="M28 38.5c1.5 1 3 1.5 4.5 1.5" />
		{/* しっぽ */}
		<path d="M31 33c3 0.5 5 2.2 6.5 4.5" />
		</svg>
	);
}
