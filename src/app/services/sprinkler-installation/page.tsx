import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
	title: "Sprinkler System Installation Greenville TX - West Irrigation Services",
	description:
		"Professional sprinkler installation and system upgrades for Greenville and surrounding East Texas communities.",
	url: "/services/sprinkler-installation",
});

export default function SprinklerInstallation() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<main>
				<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 py-20 text-white">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Sprinkler system installation
						</h1>
						<p className="mt-6 max-w-3xl text-lg text-sky-100 sm:text-xl">
							New systems and replacement layouts designed around your property,
							coverage needs, and long-term water efficiency.
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-slate-900">
								What installation includes
							</h2>
							<ul className="mt-5 space-y-3 text-slate-700">
								<li>Custom layout planning for lawn and planting areas</li>
								<li>Zone planning that matches plant and sun exposure needs</li>
								<li>Professional pipe, valve, head, and controller installation</li>
								<li>Startup testing and basic owner walkthrough</li>
							</ul>
						</div>
						<div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-emerald-900">
								A good fit for
							</h2>
							<ul className="mt-5 space-y-3 text-emerald-950/90">
								<li>New home landscapes that need full irrigation coverage</li>
								<li>Older systems that are no longer worth patching</li>
								<li>Expansion projects that add beds, turf, or new zones</li>
								<li>Owners who want a simpler, more efficient controller setup</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="bg-white/80 py-16">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h2 className="text-3xl font-bold text-slate-900">
							Installation approach
						</h2>
						<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
							{[
								"Walk the property and review coverage goals",
								"Build a practical layout and equipment plan",
								"Install the system and test each zone",
								"Adjust the controller and review operation",
							].map((step, index) => (
								<div key={step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
									<p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
										Step {index + 1}
									</p>
									<p className="mt-3 text-slate-700">{step}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="rounded-3xl bg-slate-950 px-8 py-10 text-white shadow-xl">
						<h2 className="text-3xl font-bold">
							Planning a new sprinkler system?
						</h2>
						<p className="mt-4 max-w-2xl text-slate-300">
							Request a quote and include any existing irrigation issues, project
							timing, and property details.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							<Link
								href="/quote-request"
								className="inline-flex rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
							>
								Request a quote
							</Link>
							<Link
								href="/contact"
								className="inline-flex rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
							>
								Ask a question
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
