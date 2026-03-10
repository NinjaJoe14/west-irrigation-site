import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
	title: "Irrigation Services Greenville TX - West Irrigation Services",
	description:
		"Sprinkler installation, sprinkler repairs, seasonal maintenance, and irrigation backflow testing for Greenville and surrounding East Texas service areas.",
	url: "/services",
});

const services = [
	{
		title: "System design and installation",
		description:
			"New sprinkler layouts, replacement systems, and efficient zone planning for lawns and planting beds.",
		href: "/services/sprinkler-installation",
	},
	{
		title: "Seasonal maintenance",
		description:
			"Startup checks, adjustments, inspections, and service visits that help keep your system running cleanly.",
	},
	{
		title: "Repairs and diagnostics",
		description:
			"Repairs for broken heads, leaks, controller problems, low-pressure issues, and uneven coverage.",
		href: "/services/sprinkler-repair",
	},
	{
		title: "Performance tuning",
		description:
			"Scheduling, nozzle, and zone adjustments to reduce waste while improving watering consistency.",
	},
	{
		title: "Leak detection",
		description:
			"Troubleshooting for wet spots, pressure loss, and other signs that water is being lost underground.",
	},
	{
		title: "Controller upgrades",
		description:
			"Smart controller replacements and reprogramming for more practical, weather-aware watering.",
	},
];

export default function Services() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<main>
				<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 py-20 text-white">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Our irrigation services
						</h1>
						<p className="mt-6 max-w-3xl text-lg text-sky-100 sm:text-xl">
							From new installations to repair work and annual backflow testing,
							we focus on residential and light-commercial systems that need
							reliable, efficient performance.
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{services.map((service) => {
							const content = (
								<>
									<h2 className="text-2xl font-bold text-slate-900">
										{service.title}
									</h2>
									<p className="mt-4 text-slate-700">{service.description}</p>
								</>
							);

							if (!service.href) {
								return (
									<div
										key={service.title}
										className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
									>
										{content}
									</div>
								);
							}

							return (
								<Link
									key={service.title}
									href={service.href}
									className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
								>
									{content}
								</Link>
							);
						})}
					</div>
				</section>

				<section className="bg-white/80 py-16">
					<div className="mx-auto max-w-6xl px-6 text-center sm:px-10 lg:px-16">
						<h2 className="text-3xl font-bold text-slate-900">
							Need service on your irrigation system?
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-slate-700">
							Request a quote and let us know whether you need new installation,
							repairs, seasonal service, or backflow testing.
						</p>
						<div className="mt-8">
							<Link
								href="/quote-request"
								className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-700"
							>
								Request service
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
