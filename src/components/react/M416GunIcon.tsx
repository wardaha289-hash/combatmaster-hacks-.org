/** Compact M416 / AR-style rifle silhouette for nav tap animation. */
export default function M416GunIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 56 22"
			fill="none"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="1" y="8.5" width="8" height="2.8" rx="0.8" fill="currentColor" opacity="0.5" />
			<path d="M9 7.2h22l1.4 2.6H9V7.2z" fill="currentColor" opacity="0.9" />
			<path d="M31 6.8h8.5l3 2.8v1.4H31V6.8z" fill="currentColor" />
			<rect x="19" y="5" width="6" height="2.2" rx="0.45" fill="currentColor" opacity="0.75" />
			<circle cx="21.5" cy="6.1" r="0.5" fill="currentColor" opacity="0.4" />
			<path d="M14 9.8v4.8l-1.8 2.8h-2l1-7.6h2.8z" fill="currentColor" opacity="0.8" />
			<path d="M17.5 9.8l1.5 6.8 2-0.3-1.2-6.5h-2.3z" fill="currentColor" opacity="0.65" />
			<path d="M36 9.8h6l4.5 3.2v1.5l-5 1.8-5.5-6.5z" fill="currentColor" opacity="0.85" />
			<path d="M42 10.5l6.5 1.2 2.5 1.8-3.2 0.8-5.8-3.8z" fill="currentColor" opacity="0.7" />
			<circle className="m416-gun__flash" cx="2.2" cy="9.8" r="1" fill="currentColor" />
		</svg>
	);
}
