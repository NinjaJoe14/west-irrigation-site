"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { business } from "@/lib/site";

const navLinks = [
	{ href: "/services", label: "Services" },
	{ href: "/services/sprinkler-installation", label: "Installation" },
	{ href: "/services/sprinkler-repair", label: "Repairs" },
	{ href: "/backflow", label: "Backflow" },
	{ href: "/service-areas", label: "Service Areas" },
	{ href: "/contact", label: "Contact" },
	{ href: "/quote-request", label: "Request Quote" },
];

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 border-b border-white/15 bg-gradient-to-r from-slate-950 via-slate-900 to-sky-900 text-white shadow-lg">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-16">
				<Link href="/" className="flex items-center gap-3">
					<img
						src="/logo.png"
						alt={`${business.name} logo`}
						className="h-16 w-auto sm:h-20"
					/>
					<div>
						<p className="text-lg font-semibold sm:text-xl">{business.name}</p>
						<p className="text-xs uppercase tracking-[0.3em] text-sky-200">
							Irrigation and backflow
						</p>
					</div>
				</Link>

				<nav className="hidden items-center gap-3 md:flex" aria-label="Main navigation">
					{navLinks.map((link) => {
						const active = pathname === link.href;
						return (
							<Link
								key={link.href}
								href={link.href}
								aria-current={active ? "page" : undefined}
								className={`rounded-full px-4 py-2 text-sm font-medium transition ${
									active
										? "bg-white text-slate-950 visited:text-slate-950"
										: "bg-white/10 text-white hover:bg-white/20 visited:text-white"
								}`}
							>
								{link.label}
							</Link>
						);
					})}
				</nav>

				<div className="md:hidden">
					<button
						type="button"
						onClick={() => setMobileOpen((open) => !open)}
						aria-expanded={mobileOpen}
						aria-controls="mobile-nav"
						className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium"
					>
						{mobileOpen ? "Close" : "Menu"}
					</button>
				</div>
			</div>

			{mobileOpen ? (
				<nav
					id="mobile-nav"
					className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden"
					aria-label="Mobile navigation"
				>
					<div className="mx-auto flex max-w-6xl flex-col gap-2 sm:px-4">
						{navLinks.map((link) => {
							const active = pathname === link.href;
							return (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setMobileOpen(false)}
									className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
										active
											? "bg-white text-slate-950 visited:text-slate-950"
											: "bg-white/10 text-white hover:bg-white/20 visited:text-white"
									}`}
								>
									{link.label}
								</Link>
							);
						})}
					</div>
				</nav>
			) : null}
		</header>
	);
}
