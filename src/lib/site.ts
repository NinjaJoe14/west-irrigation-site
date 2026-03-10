export type ServiceArea = {
	name: string;
	slug: string;
	summary: string;
	population: string;
	region: string;
	coverage: string;
	highlights: string[];
	services: string[];
};

export type BusinessContact = {
	name: string;
	phoneDisplay: string;
	phoneHref: string;
};

export const business = {
	name: "West Irrigation Services",
	contacts: [
		{
			name: "Chris West",
			phoneDisplay: "(469) 474-9266",
			phoneHref: "tel:+14694749266",
		},
		{
			name: "Joseph West",
			phoneDisplay: "(903) 340-1919",
			phoneHref: "tel:+19033401919",
		},
	] satisfies BusinessContact[],
	email: "contact@westirrigationservices.net",
	leadRecipientEmail: "contact@westirrigationservices.net",
	leadSenderEmail: "notifications@westirrigationservices.com",
	baseUrl: "https://westirrigationservices.net",
	hours: [
		"Monday - Friday: 8:00 AM - 6:00 PM",
		"Saturday: 8:00 AM - 2:00 PM",
		"Emergency repair appointments available when needed",
	],
};

export const primaryBusinessContact = business.contacts[0];

export const serviceAreas: ServiceArea[] = [
	{
		name: "Greenville",
		slug: "greenville",
		summary: "Serving Greenville homeowners and property managers with dependable irrigation care.",
		population: "28,000+",
		region: "Hunt County",
		coverage: "Greenville neighborhoods, nearby residential developments, and light-commercial properties.",
		highlights: [
			"Fast scheduling for Greenville-area calls",
			"Experience with established lawns and newer subdivisions",
			"Water-saving upgrades for aging sprinkler systems",
		],
		services: [
			"Sprinkler installation and replacements",
			"Seasonal tune-ups and repairs",
			"Backflow testing for irrigation systems",
			"Controller programming and efficiency checks",
		],
	},
	{
		name: "Celeste",
		slug: "celeste",
		summary: "Reliable irrigation service for Celeste homes, small acreage properties, and nearby communities.",
		population: "800+",
		region: "Hunt County",
		coverage: "Celeste and surrounding rural residential properties.",
		highlights: [
			"Service planned around larger lots and open landscapes",
			"Practical repairs for existing systems",
			"Conservative watering solutions for seasonal conditions",
		],
		services: [
			"New sprinkler layouts for homes and small acreage",
			"Repair work and seasonal maintenance",
			"Backflow testing for irrigation assemblies",
			"Coverage adjustments and controller updates",
		],
	},
	{
		name: "Caddo Mills",
		slug: "caddo-mills",
		summary: "Professional irrigation support for Caddo Mills homes and growing neighborhoods.",
		population: "1,500+",
		region: "Hunt County",
		coverage: "Caddo Mills residential properties and nearby developments.",
		highlights: [
			"Support for newer residential construction",
			"Repairs that improve coverage and reduce runoff",
			"Routine service for expanding neighborhoods",
		],
		services: [
			"Sprinkler installation and add-on zones",
			"Repairs, diagnostics, and tune-ups",
			"Backflow testing for lawn irrigation systems",
			"Smart controller upgrades",
		],
	},
	{
		name: "Commerce",
		slug: "commerce",
		summary: "Local irrigation care for Commerce homes, rentals, and small business properties.",
		population: "9,000+",
		region: "Hunt County",
		coverage: "Commerce residential neighborhoods and light-commercial landscapes.",
		highlights: [
			"Flexible service for owner-occupied and rental properties",
			"Maintenance plans for busy property owners",
			"Simple upgrades that improve system efficiency",
		],
		services: [
			"Sprinkler installation and retrofits",
			"Repair visits and routine maintenance",
			"Backflow testing for irrigation systems",
			"Controller troubleshooting and schedule tuning",
		],
	},
	{
		name: "Quinlan",
		slug: "quinlan",
		summary: "Irrigation solutions for Quinlan homes and properties around the Lake Tawakoni corridor.",
		population: "1,400+",
		region: "Hunt County",
		coverage: "Quinlan residential properties and nearby lake-area homes.",
		highlights: [
			"Service tailored to full-time and weekend properties",
			"Repairs aimed at minimizing wasted water",
			"Support for mixed turf and landscape watering",
		],
		services: [
			"Sprinkler repairs and seasonal service",
			"Water-efficient upgrades and head adjustments",
			"Backflow testing for irrigation assemblies",
			"Controller checks before peak watering season",
		],
	},
	{
		name: "Royse City",
		slug: "royse-city",
		summary: "Comprehensive irrigation service for Royse City neighborhoods and surrounding properties.",
		population: "12,000+",
		region: "Rockwall and Collin counties",
		coverage: "Royse City homes, neighborhood common areas, and light-commercial landscapes.",
		highlights: [
			"Support for rapidly growing residential areas",
			"Installation and repair work for modern systems",
			"Maintenance aimed at curb appeal and efficiency",
		],
		services: [
			"New system installation and expansions",
			"Sprinkler repair and diagnostics",
			"Backflow testing for irrigation systems",
			"Smart controller setup and reprogramming",
		],
	},
	{
		name: "Wills Point",
		slug: "wills-point",
		summary: "Dependable irrigation maintenance and repair for Wills Point properties.",
		population: "3,500+",
		region: "Van Zandt County",
		coverage: "Wills Point homes and nearby residential properties.",
		highlights: [
			"Responsive service for residential system issues",
			"Straightforward recommendations without inflated claims",
			"Ongoing maintenance for established landscapes",
		],
		services: [
			"Sprinkler installation and replacements",
			"Repairs and seasonal maintenance",
			"Backflow testing for irrigation assemblies",
			"Coverage corrections and leak checks",
		],
	},
	{
		name: "Lake Tawakoni",
		slug: "lake-tawakoni",
		summary: "Specialized irrigation support for lake-area homes and recreational properties.",
		population: "2,000+",
		region: "Lake Tawakoni area",
		coverage: "Lakefront homes, weekend properties, and surrounding landscapes.",
		highlights: [
			"Service for seasonal-use properties",
			"Equipment recommendations suited to exposed conditions",
			"Watering plans designed to limit runoff",
		],
		services: [
			"Sprinkler repairs and seasonal startup checks",
			"Landscape watering upgrades for lake properties",
			"Backflow testing for irrigation systems",
			"Controller adjustments for changing weather patterns",
		],
	},
	{
		name: "Fate",
		slug: "fate",
		summary: "Irrigation service coverage for Fate homes and nearby neighborhoods.",
		population: "20,000+",
		region: "Rockwall County",
		coverage: "Fate residential properties and surrounding subdivisions.",
		highlights: [
			"Support for newer neighborhood systems",
			"Quick tune-ups before high-heat months",
			"Efficient repairs for busy homeowners",
		],
		services: [
			"Sprinkler installation and repairs",
			"Seasonal maintenance visits",
			"Backflow testing for irrigation assemblies",
			"Controller and zone optimization",
		],
	},
	{
		name: "Nevada",
		slug: "nevada",
		summary: "Practical irrigation support for Nevada homes and small acreage properties.",
		population: "1,500+",
		region: "Collin County",
		coverage: "Nevada residential properties and nearby acreage homesites.",
		highlights: [
			"Service suited to spread-out properties",
			"Repairs that improve consistency across larger yards",
			"Straightforward system improvement recommendations",
		],
		services: [
			"Sprinkler layout updates and repairs",
			"Routine system checks and maintenance",
			"Backflow testing for irrigation systems",
			"Controller scheduling adjustments",
		],
	},
	{
		name: "Farmersville",
		slug: "farmersville",
		summary: "Local irrigation care for Farmersville homes and growing residential areas.",
		population: "4,000+",
		region: "Collin County",
		coverage: "Farmersville neighborhoods and nearby residential developments.",
		highlights: [
			"Support for older systems that need cleanup and upgrades",
			"Preventive maintenance before costly failures",
			"Coverage tuning for lawns and foundation planting beds",
		],
		services: [
			"Sprinkler installations, repairs, and upgrades",
			"Seasonal maintenance service",
			"Backflow testing for irrigation assemblies",
			"Leak checks and controller programming",
		],
	},
];

export const serviceAreaNames = serviceAreas.map((area) => area.name);

export const serviceAreaLabel = serviceAreaNames.join(", ");

export function getServiceArea(slug: string) {
	return serviceAreas.find((area) => area.slug === slug);
}
