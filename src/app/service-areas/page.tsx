import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/metadata";
import { serviceAreas } from "@/lib/site";

export const metadata: Metadata = createMetadata({
	title: "Irrigation Service Areas East Texas | West Irrigation Services",
	description:
		"Irrigation installation, repairs, maintenance, and backflow testing across Greenville and surrounding East Texas service areas.",
	url: "/service-areas",
});

export default function ServiceAreas() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<main>
				<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 py-20 text-white">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Service areas
						</h1>
						<p className="mt-6 max-w-3xl text-lg text-sky-100 sm:text-xl">
							We serve homeowners and light-commercial properties throughout
							Greenville and nearby East Texas communities.
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{serviceAreas.map((area) => (
							<Link
								key={area.slug}
								href={`/service-areas/${area.slug}`}
								className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
							>
								<h2 className="text-xl font-bold text-slate-900 transition group-hover:text-emerald-800">
									{area.name}
								</h2>
								<p className="mt-2 text-sm text-slate-500">{area.region}</p>
								<p className="mt-4 text-slate-700">{area.summary}</p>
								<p className="mt-5 text-sm font-semibold text-emerald-700">
									Learn more
								</p>
							</Link>
						))}
					</div>
				</section>

				<section className="bg-white/80 py-16">
					<div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-16">
						<h2 className="text-3xl font-bold text-slate-900">
							Outside one of these areas?
						</h2>
						<p className="mt-4 text-slate-700">
							Reach out anyway. We can confirm whether your property is within our
							current service range.
						</p>
						<div className="mt-8">
							<Link
								href="/contact"
								className="inline-flex rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
							>
								Contact us
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
