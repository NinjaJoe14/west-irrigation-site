import Link from "next/link";

import { serviceAreas } from "@/lib/site";

const featuredAreas = serviceAreas.slice(0, 8);

export default function Home() {
	return (
		<div className="min-h-screen text-slate-900">
			<header className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 text-white">
				<div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
					<div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
								East Texas irrigation specialists
							</p>
							<h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
								Better watering systems for healthier landscapes.
							</h1>
							<p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100 sm:text-xl">
								West Irrigation Services provides sprinkler installation, repairs,
								maintenance, and certified backflow testing for homes and
								light-commercial properties across Greenville and nearby service
								areas.
							</p>
							<div className="mt-10 flex flex-wrap gap-4">
								<Link
									href="/quote-request"
									className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-700"
								>
									Request a Free Quote
								</Link>
								<Link
									href="/services"
									className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
								>
									Explore Services
								</Link>
							</div>
							<div className="mt-12 flex flex-wrap gap-3 text-sm text-sky-100">
								<span className="rounded-full bg-white/10 px-4 py-2">
									Licensed and insured
								</span>
								<span className="rounded-full bg-white/10 px-4 py-2">
									TCEQ-certified backflow testing
								</span>
								<span className="rounded-full bg-white/10 px-4 py-2">
									Free estimates
								</span>
							</div>
						</div>

						<div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
							<h2 className="text-2xl font-semibold">What we help with</h2>
							<div className="mt-6 space-y-4">
								<div className="rounded-2xl bg-slate-950/35 p-5">
									<h3 className="text-lg font-semibold">Sprinkler installation</h3>
									<p className="mt-2 text-sm leading-6 text-sky-100">
										New layouts, replacement systems, and upgrades designed around
										your landscape and water use.
									</p>
								</div>
								<div className="rounded-2xl bg-slate-950/35 p-5">
									<h3 className="text-lg font-semibold">Repairs and tune-ups</h3>
									<p className="mt-2 text-sm leading-6 text-sky-100">
										Broken heads, leaks, valve issues, controller problems, and
										coverage corrections.
									</p>
								</div>
								<div className="rounded-2xl bg-slate-950/35 p-5">
									<h3 className="text-lg font-semibold">Backflow testing</h3>
									<p className="mt-2 text-sm leading-6 text-sky-100">
										Annual testing and documentation for irrigation backflow
										assemblies.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<main>
				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="grid gap-8 lg:grid-cols-3">
						<Link
							href="/services/sprinkler-installation"
							className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
						>
							<h2 className="text-2xl font-bold text-slate-900">
								Installation and upgrades
							</h2>
							<p className="mt-4 text-slate-700">
								Thoughtful sprinkler layouts, replacement systems, and component
								upgrades built for efficient coverage.
							</p>
						</Link>
						<Link
							href="/services/sprinkler-repair"
							className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
						>
							<h2 className="text-2xl font-bold text-slate-900">
								Repairs and diagnostics
							</h2>
							<p className="mt-4 text-slate-700">
								Targeted repair work for leaking lines, damaged heads, stuck valves,
								coverage issues, and controller problems.
							</p>
						</Link>
						<Link
							href="/backflow"
							className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
						>
							<h2 className="text-2xl font-bold text-emerald-900">
								Backflow testing
							</h2>
							<p className="mt-4 text-emerald-950/85">
								TCEQ-certified irrigation backflow testing, scheduling, and
								documentation for annual compliance.
							</p>
						</Link>
					</div>
				</section>

				<section className="bg-white/80 py-16">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
									Service areas
								</p>
								<h2 className="mt-2 text-3xl font-bold text-slate-900">
									Communities we currently serve
								</h2>
							</div>
							<Link href="/service-areas" className="text-sm font-semibold text-emerald-700">
								View all service areas
							</Link>
						</div>
						<div className="mt-8 flex flex-wrap gap-3">
							{featuredAreas.map((area) => (
								<Link
									key={area.slug}
									href={`/service-areas/${area.slug}`}
									className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800"
								>
									{area.name}
								</Link>
							))}
						</div>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-2xl sm:px-10">
						<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
							<div className="max-w-2xl">
								<h2 className="text-3xl font-bold">
									Need help with an irrigation issue?
								</h2>
								<p className="mt-3 text-slate-300">
									Get a quote for a new system, repairs, seasonal service, or
									backflow testing. We will review the request and follow up with
									next steps.
								</p>
							</div>
							<Link
								href="/quote-request"
								className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-emerald-400"
							>
								Get started
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
