import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { createMetadata } from "@/lib/metadata";
import { business, serviceAreas } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = createMetadata({
	title: `${business.name} | Irrigation Systems Greenville TX | East Texas`,
	description:
		"Professional irrigation installation, sprinkler repairs, maintenance, and TCEQ-certified backflow testing for Greenville and surrounding East Texas communities.",
	url: "/",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "LocalBusiness",
							name: business.name,
							image: `${business.baseUrl}/logo.png`,
							description:
								"Irrigation installation, sprinkler repair, maintenance, and backflow testing for residential and light-commercial properties in East Texas.",
							telephone: business.contacts.map((contact) =>
								contact.phoneHref.replace("tel:", ""),
							),
							email: business.email,
							address: {
								"@type": "PostalAddress",
								addressLocality: "Greenville",
								addressRegion: "TX",
								postalCode: "75401",
							},
							areaServed: serviceAreas.map((area) => ({
								"@type": "City",
								name: `${area.name}, TX`,
							})),
							priceRange: "$$",
							openingHoursSpecification: [
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: [
										"Monday",
										"Tuesday",
										"Wednesday",
										"Thursday",
										"Friday",
									],
									opens: "08:00",
									closes: "18:00",
								},
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: "Saturday",
									opens: "08:00",
									closes: "14:00",
								},
							],
						}),
					}}
				/>
			</head>
			<body className="antialiased">
				<a href="#main" className="sr-only focus:not-sr-only">
					Skip to main content
				</a>
				<Header />
				<div id="main">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
