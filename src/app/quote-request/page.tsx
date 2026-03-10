import type { Metadata } from "next";

import LeadForm from "@/components/LeadForm";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
	title: "Free Irrigation Quote Greenville TX - West Irrigation Services",
	description:
		"Request a quote for sprinkler installation, repairs, maintenance, and backflow testing in Greenville and surrounding East Texas service areas.",
	url: "/quote-request",
});

export default function QuoteRequest() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<main>
				<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 py-20 text-white">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Request a quote
						</h1>
						<p className="mt-6 max-w-3xl text-lg text-sky-100 sm:text-xl">
							Tell us about the property, the service you need, and the issue you
							are trying to solve. We will review the request and follow up with
							next steps.
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
						<h2 className="text-2xl font-bold text-slate-900">Quote details</h2>
						<div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-950/90">
							<p>
								Free estimates for new systems, repairs, upgrades, and irrigation
								backflow testing.
							</p>
							<p className="mt-2">
								Include as much detail as you can so the follow-up is useful.
							</p>
						</div>
						<div className="mt-8">
							<LeadForm type="quote" />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
