export type LeadFormKind = "contact" | "quote";

export type LeadFormState = {
	success: boolean;
	message: string;
	reference?: string;
	fieldErrors?: Record<string, string>;
};

export type LeadPayload = {
	formType: LeadFormKind;
	name: string;
	email: string;
	phone: string;
	address?: string;
	zipCode?: string;
	serviceType?: string;
	message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeLeadValue(value: FormDataEntryValue | null) {
	return typeof value === "string" ? value.trim() : "";
}

export function buildLeadPayload(
	formData: FormData,
	formType: LeadFormKind,
): LeadPayload {
	return {
		formType,
		name: normalizeLeadValue(formData.get("name")),
		email: normalizeLeadValue(formData.get("email")),
		phone: normalizeLeadValue(formData.get("phone")),
		address: normalizeLeadValue(formData.get("address")),
		zipCode: normalizeLeadValue(formData.get("zipCode")),
		serviceType: normalizeLeadValue(formData.get("serviceType")),
		message:
			normalizeLeadValue(formData.get("message")) ||
			normalizeLeadValue(formData.get("description")),
	};
}

export function validateLead(payload: LeadPayload): LeadFormState | null {
	const fieldErrors: Record<string, string> = {};

	if (!payload.name) fieldErrors.name = "Enter your name.";
	if (!payload.email || !EMAIL_PATTERN.test(payload.email)) {
		fieldErrors.email = "Enter a valid email address.";
	}
	if (!payload.phone) fieldErrors.phone = "Enter your phone number.";
	if (!payload.message) {
		fieldErrors.message =
			payload.formType === "quote"
				? "Describe the work you need."
				: "Enter a message.";
	}

	if (payload.formType === "quote") {
		if (!payload.address) fieldErrors.address = "Enter the service address.";
		if (!payload.zipCode) fieldErrors.zipCode = "Enter the ZIP code.";
		if (!payload.serviceType) {
			fieldErrors.serviceType = "Select the service you need.";
		}
	}

	if (Object.keys(fieldErrors).length === 0) {
		return null;
	}

	return {
		success: false,
		message: "Please fix the highlighted fields and try again.",
		fieldErrors,
	};
}

export function createLeadReference() {
	return `WIS-${Date.now().toString(36).toUpperCase()}`;
}
