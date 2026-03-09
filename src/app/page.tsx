export default function Home() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<header className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-700 text-white">
				<div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
						West Irrigation Services
					</p>
					<h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
						Reliable Irrigation Solutions for Homes, Farms, and Businesses
					</h1>
					<p className="mt-6 max-w-2xl text-lg text-emerald-100 sm:text-xl">
						From system installs and seasonal maintenance to diagnostics and repairs,
						we keep your water delivery efficient, dependable, and built for East
						Texas conditions.
					</p>
					<div className="mt-10">
						<a
							href="#quote"
							className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-900 shadow-lg transition hover:bg-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-800"
						>
							Request a Quote
						</a>
					</div>
				</div>
			</header>

			<main>
				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-slate-900">
								Professional Irrigation Services
							</h2>
							<p className="mt-4 text-slate-700">
								Our team delivers end-to-end irrigation care, including new sprinkler
								system design, valve and controller replacement, leak detection,
								performance tuning, and routine maintenance to protect your landscape
								and reduce water waste.
							</p>
						</div>
						<div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-emerald-900">
								Backflow Testing You Can Count On
							</h2>
							<p className="mt-4 text-emerald-900/90">
								Protect your drinking water with certified backflow testing and timely
								reporting. We help property owners stay compliant and keep systems
								safe with dependable scheduling and clear documentation.
							</p>
						</div>
					</div>
				</section>

				<section className="bg-white/70 py-16">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h2 className="text-3xl font-bold text-slate-900">Service Area</h2>
						<p className="mt-4 max-w-3xl text-slate-700">
							West Irrigation Services proudly serves homeowners and businesses
							throughout Greenville, Celeste, Caddo Mills, Commerce, Quinlan,
							Royse City, Wills Point, and the Lake Tawakoni area.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							{[
								"Greenville",
								"Celeste",
								"Caddo Mills",
								"Commerce",
								"Quinlan",
								"Royse City",
								"Wills Point",
								"Lake Tawakoni",
							].map((city) => (
								<span
									key={city}
									className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700"
								>
									{city}
								</span>
							))}
						</div>
					</div>
				</section>
			</main>

			<section id="quote" className="bg-slate-900 py-16 text-white">
				<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
					<div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-700 bg-slate-800 p-8 sm:flex-row sm:items-center">
						<div>
							<h2 className="text-2xl font-bold sm:text-3xl">
								Need dependable irrigation service?
							</h2>
							<p className="mt-3 text-slate-300">
								Tell us about your property and we&apos;ll provide a fast, competitive
								quote.
							</p>
						</div>
						<a
							href="mailto:info@westirrigationservices.com"
							className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-7 py-3 text-base font-semibold text-emerald-950 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800"
						>
							Request a Quote
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}