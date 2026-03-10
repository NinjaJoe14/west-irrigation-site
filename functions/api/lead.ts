import {
	createLeadReference,
	type LeadFormState,
	type LeadPayload,
	validateLead,
} from "../../src/lib/leads";
import { business } from "../../src/lib/site";

type Env = {
	MAILCHANNELS_API_KEY?: string;
};

type EmailAddress = {
	email: string;
	name?: string;
};

function jsonResponse(body: LeadFormState, status = 200) {
	return Response.json(body, {
		status,
		headers: {
			"cache-control": "no-store",
		},
	});
}

function getLeadSubject(payload: LeadPayload, reference: string) {
	return payload.formType === "quote"
		? `New quote request (${reference})`
		: `New contact message (${reference})`;
}

function getLeadText(payload: LeadPayload, reference: string) {
	return [
		`Reference: ${reference}`,
		`Form type: ${payload.formType}`,
		`Name: ${payload.name}`,
		`Email: ${payload.email}`,
		`Phone: ${payload.phone}`,
		payload.address ? `Address: ${payload.address}` : "",
		payload.zipCode ? `ZIP code: ${payload.zipCode}` : "",
		payload.serviceType ? `Service type: ${payload.serviceType}` : "",
		"",
		"Message:",
		payload.message,
	]
		.filter(Boolean)
		.join("\n");
}

function getLeadHtml(payload: LeadPayload, reference: string) {
	return `
		<h1>${payload.formType === "quote" ? "Quote request" : "Contact message"}</h1>
		<p><strong>Reference:</strong> ${reference}</p>
		<p><strong>Name:</strong> ${payload.name}</p>
		<p><strong>Email:</strong> ${payload.email}</p>
		<p><strong>Phone:</strong> ${payload.phone}</p>
		${payload.address ? `<p><strong>Address:</strong> ${payload.address}</p>` : ""}
		${payload.zipCode ? `<p><strong>ZIP code:</strong> ${payload.zipCode}</p>` : ""}
		${payload.serviceType ? `<p><strong>Service type:</strong> ${payload.serviceType}</p>` : ""}
		<p><strong>Message:</strong></p>
		<p>${payload.message.replace(/\n/g, "<br />")}</p>
	`;
}

async function sendLeadEmail(
	payload: LeadPayload,
	reference: string,
	apiKey: string,
) {
	const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			"x-api-key": apiKey,
		},
		body: JSON.stringify({
			personalizations: [
				{
					to: [
						{
							email: business.leadRecipientEmail,
							name: business.name,
						} satisfies EmailAddress,
					],
				},
			],
			from: {
				email: business.leadSenderEmail,
				name: business.name,
			} satisfies EmailAddress,
			reply_to: {
				email: payload.email,
				name: payload.name,
			} satisfies EmailAddress,
			subject: getLeadSubject(payload, reference),
			content: [
				{
					type: "text/plain",
					value: getLeadText(payload, reference),
				},
				{
					type: "text/html",
					value: getLeadHtml(payload, reference),
				},
			],
		}),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(
			`MailChannels request failed with ${response.status}: ${errorText}`,
		);
	}
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
	const apiKey = context.env.MAILCHANNELS_API_KEY;
	if (!apiKey) {
		console.error("MAILCHANNELS_API_KEY is not configured.");
		return jsonResponse(
			{
				success: false,
				message:
					"Lead delivery is not configured yet. Please call us directly for now.",
			},
			500,
		);
	}

	let payload: LeadPayload;
	try {
		payload = (await context.request.json()) as LeadPayload;
	} catch {
		return jsonResponse(
			{
				success: false,
				message: "We could not read your request. Please try again.",
			},
			400,
		);
	}

	const validationError = validateLead(payload);
	if (validationError) {
		return jsonResponse(validationError, 400);
	}

	const reference = createLeadReference();

	try {
		await sendLeadEmail(payload, reference, apiKey);
	} catch (error) {
		console.error("[lead-email-error]", error);
		return jsonResponse(
			{
				success: false,
				message:
					"We could not send your request right now. Please call us directly and reference your request.",
				reference,
			},
			502,
		);
	}

	return jsonResponse({
		success: true,
		message:
			payload.formType === "quote"
				? "Your quote request was received. We will review it and follow up soon."
				: "Your message was received. We will follow up soon.",
		reference,
	});
};
