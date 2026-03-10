import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
	title: "Backflow Testing Greenville TX - TCEQ Certified | West Irrigation Services",
	description:
		"TCEQ-certified irrigation backflow testing and documentation for Greenville and surrounding East Texas service areas.",
	url: "/backflow",
});

export default function Backflow() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<main>
				<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 py-20 text-white">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Backflow testing services
						</h1>
						<p className="mt-6 max-w-3xl text-lg text-sky-100 sm:text-xl">
							Certified irrigation backflow testing to help protect your water
							supply and keep annual compliance paperwork on track.
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-slate-900">
								Why irrigation backflow testing matters
							</h2>
							<p className="mt-4 text-slate-700">
								Backflow happens when water reverses direction and can pull
								contaminants into the potable water supply. Testing confirms that
								your irrigation backflow assembly is operating as intended.
							</p>
							<a
								href="https://www.tceq.texas.gov/drinkingwater/dws/chemicals/backflow.html"
								target="_blank"
								rel="noopener noreferrer"
								className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:underline"
							>
								Learn more from TCEQ
							</a>
						</div>
						<div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-emerald-900">
								What we handle
							</h2>
							<ul className="mt-4 space-y-3 text-emerald-950/90">
								<li>Annual testing for irrigation backflow assemblies</li>
								<li>TCEQ-compliant documentation for your records</li>
								<li>Scheduling reminders for repeat annual service</li>
								<li>Clear next steps if an assembly fails testing</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="bg-white/80 py-16">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
							Typical properties we test
						</h2>
						<div className="grid gap-6 md:grid-cols-3">
							{[
								{
									title: "Residential properties",
									description:
										"Single-family homes, multi-unit housing, and shared residential irrigation systems.",
								},
								{
									title: "Landscape irrigation systems",
									description:
										"Dedicated lawn and landscape watering systems that need annual testing documentation.",
								},
								{
									title: "Light-commercial properties",
									description:
										"Offices, retail sites, and similar properties with irrigation backflow assemblies.",
								},
							].map((item) => (
								<div
									key={item.title}
									className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm"
								>
									<h3 className="text-xl font-semibold text-slate-900">
										{item.title}
									</h3>
									<p className="mt-3 text-slate-700">{item.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="rounded-3xl bg-slate-950 px-8 py-10 text-white shadow-xl">
						<h2 className="text-3xl font-bold">Ready to schedule testing?</h2>
						<p className="mt-4 max-w-2xl text-slate-300">
							Request a quote and include the property location, testing deadline,
							and anything unusual about the assembly.
						</p>
						<div className="mt-8">
							<Link
								href="/quote-request"
								className="inline-flex rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
							>
								Schedule backflow testing
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
