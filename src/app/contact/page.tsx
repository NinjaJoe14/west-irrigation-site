import type { Metadata } from "next";

import LeadForm from "@/components/LeadForm";
import { createMetadata } from "@/lib/metadata";
import { business, serviceAreas } from "@/lib/site";

export const metadata: Metadata = createMetadata({
	title: "Contact West Irrigation Services Greenville TX",
	description:
		"Contact West Irrigation Services for irrigation installation, sprinkler repairs, maintenance, and backflow testing in Greenville and surrounding East Texas communities.",
	url: "/contact",
});

export default function Contact() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<main>
				<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 py-20 text-white">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Contact West Irrigation Services
						</h1>
						<p className="mt-6 max-w-3xl text-lg text-sky-100 sm:text-xl">
							Use the form below or reach out directly if you have a question
							about installation, repairs, maintenance, or backflow testing.
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
						<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-slate-900">Reach us</h2>
							<div className="mt-6 space-y-5 text-slate-700">
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
										Phone
									</p>
									<div className="mt-2 space-y-2">
										{business.contacts.map((contact) => (
											<a
												key={contact.phoneHref}
												href={contact.phoneHref}
												className="block text-lg font-semibold text-slate-900"
											>
												{contact.name}: {contact.phoneDisplay}
											</a>
										))}
									</div>
								</div>
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
										Email
									</p>
									<p className="mt-2">{business.email}</p>
								</div>
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
										Service areas
									</p>
									<p className="mt-2">{serviceAreas.map((area) => area.name).join(", ")}</p>
								</div>
								<div>
									<p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
										Hours
									</p>
									<div className="mt-2 space-y-1">
										{business.hours.map((item) => (
											<p key={item}>{item}</p>
										))}
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-slate-900">Send a message</h2>
							<p className="mt-3 text-slate-700">
								We review submissions in the order they come in and will follow up
								using the contact information you provide.
							</p>
							<div className="mt-8">
								<LeadForm type="contact" />
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
