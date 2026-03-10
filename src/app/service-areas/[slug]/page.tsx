import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { createMetadata } from "@/lib/metadata";
import { getServiceArea, serviceAreas } from "@/lib/site";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
	return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const area = getServiceArea(slug);

	if (!area) {
		return {};
	}

	return createMetadata({
		title: `Irrigation Services in ${area.name}, TX - West Irrigation Services`,
		description: `${area.summary} Installation, repairs, maintenance, and irrigation backflow testing in ${area.name}, Texas.`,
		url: `/service-areas/${area.slug}`,
	});
}

export default async function ServiceAreaDetail({ params }: PageProps) {
	const { slug } = await params;
	const area = getServiceArea(slug);

	if (!area) {
		notFound();
	}

	return (
		<div className="min-h-screen bg-slate-50 text-slate-900">
			<main>
				<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 py-20 text-white">
					<div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
						<h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
							Irrigation services in {area.name}
						</h1>
						<p className="mt-6 max-w-3xl text-lg text-sky-100 sm:text-xl">
							{area.summary}
						</p>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-slate-900">
								Local coverage
							</h2>
							<p className="mt-4 text-slate-700">{area.coverage}</p>
							<ul className="mt-5 space-y-3 text-slate-700">
								{area.highlights.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
						<div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
							<h2 className="text-2xl font-bold text-emerald-900">
								Services available in {area.name}
							</h2>
							<ul className="mt-5 space-y-3 text-emerald-950/90">
								{area.services.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section className="bg-white/80 py-16">
					<div className="mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-16">
						<h2 className="text-3xl font-bold text-slate-900">
							Need irrigation help in {area.name}?
						</h2>
						<p className="mt-4 text-slate-700">
							Request a quote for installation, repairs, maintenance, or backflow
							testing and include the property address if you have it handy.
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-4">
							<Link
								href="/quote-request"
								className="inline-flex rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white transition hover:bg-emerald-700"
							>
								Request a quote
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
