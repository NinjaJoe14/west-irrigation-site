import Link from "next/link";

import { business, serviceAreaNames } from "@/lib/site";

const currentYear = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className="bg-slate-950 py-12 text-white" aria-label="Site footer">
			<div className="mx-auto grid max-w-6xl gap-8 px-6 sm:px-10 lg:grid-cols-3 lg:px-16">
				<div>
					<h2 className="text-lg font-semibold">{business.name}</h2>
					<p className="mt-3 text-sm leading-6 text-slate-300">
						Reliable irrigation installation, repair, maintenance, and backflow
						testing across Greenville and surrounding East Texas communities.
					</p>
					<p className="mt-3 text-sm leading-6 text-slate-400">
						Primary coverage: {serviceAreaNames.join(", ")}.
					</p>
				</div>

				<div>
					<h2 className="text-lg font-semibold">Explore</h2>
					<div className="mt-3 flex flex-col gap-2 text-sm text-slate-300">
						<Link href="/services" className="hover:text-white">
							Services
						</Link>
						<Link
							href="/services/sprinkler-installation"
							className="hover:text-white"
						>
							Sprinkler Installation
						</Link>
						<Link href="/services/sprinkler-repair" className="hover:text-white">
							Sprinkler Repair
						</Link>
						<Link href="/backflow" className="hover:text-white">
							Backflow Testing
						</Link>
						<Link href="/service-areas" className="hover:text-white">
							Service Areas
						</Link>
					</div>
				</div>

				<div>
					<h2 className="text-lg font-semibold">Contact</h2>
					<div className="mt-3 space-y-2 text-sm text-slate-300">
						<p>{business.phoneDisplay}</p>
						<p>{business.email}</p>
						<Link
							href="/quote-request"
							className="inline-flex rounded-full bg-emerald-600 px-5 py-2 font-semibold text-white transition hover:bg-emerald-700"
						>
							Request a Quote
						</Link>
					</div>
				</div>
			</div>

			<div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-6 pt-6 text-sm text-slate-400 sm:px-10 lg:px-16">
				<p>&copy; {currentYear} {business.name}. All rights reserved.</p>
			</div>
		</footer>
	);
}
