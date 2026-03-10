import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
	title: "Sprinkler System Repair Greenville TX - West Irrigation Services",
	description:
		"Sprinkler repair and irrigation diagnostics for Greenville and surrounding East Texas service areas.",
	url: "/services/sprinkler-repair",
});

const repairItems = [
	"Broken or clogged sprinkler heads",
	"Leaks and damaged lateral lines",
	"Valve and zone issues",
	"Controller setup and programming problems",
	"Uneven watering and dry spots",
	"Low-pressure troubleshooting",
];

export default function SprinklerRepair() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<main>
				<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 py-20 text-white">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Sprinkler system repair
						</h1>
						<p className="mt-6 max-w-3xl text-lg text-sky-100 sm:text-xl">
							Targeted repair work for irrigation systems that are leaking,
							wasting water, or failing to cover the landscape evenly.
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-slate-900">
								Common repair calls
							</h2>
							<ul className="mt-5 space-y-3 text-slate-700">
								{repairItems.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
						<div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-emerald-900">
								How repair visits work
							</h2>
							<ol className="mt-5 space-y-3 text-emerald-950/90">
								<li>Inspect the system and confirm the issue.</li>
								<li>Explain the recommended repair path.</li>
								<li>Complete the repair and test the zone.</li>
								<li>Flag any other problem areas worth watching.</li>
							</ol>
						</div>
					</div>
				</section>

				<section className="bg-white/80 py-16">
					<div className="mx-auto max-w-6xl px-6 text-center sm:px-10 lg:px-16">
						<h2 className="text-3xl font-bold text-slate-900">
							Need a repair quote?
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-slate-700">
							Describe the symptoms you are seeing and we will review the request
							before scheduling the next step.
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<Link
								href="/quote-request"
								className="inline-flex rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
							>
								Request repair service
							</Link>
							<Link
								href="/contact"
								className="inline-flex rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-900 transition hover:border-emerald-300 hover:bg-emerald-50"
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
