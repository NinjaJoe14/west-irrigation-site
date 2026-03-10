import type { MetadataRoute } from "next";

import { business, serviceAreas } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = [
	"",
	"/services",
	"/services/sprinkler-installation",
	"/services/sprinkler-repair",
	"/backflow",
	"/contact",
	"/quote-request",
	"/service-areas",
];

export default function sitemap(): MetadataRoute.Sitemap {
	const staticEntries = staticRoutes.map((route) => ({
		url: `${business.baseUrl}${route}`,
		lastModified: new Date(),
		changeFrequency: route === "" ? "weekly" : "monthly",
		priority: route === "" ? 1 : 0.8,
	})) satisfies MetadataRoute.Sitemap;

	const serviceAreaEntries = serviceAreas.map((area) => ({
		url: `${business.baseUrl}/service-areas/${area.slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.7,
	})) satisfies MetadataRoute.Sitemap;

	return [...staticEntries, ...serviceAreaEntries];
}
