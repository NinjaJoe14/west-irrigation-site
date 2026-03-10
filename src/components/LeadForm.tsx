"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import {
	buildLeadPayload,
	createLeadMailtoHref,
	createLeadReference,
	type LeadFormState,
	validateLead,
} from "@/lib/leads";
import { business } from "@/lib/site";

type LeadFormProps = {
	type: "contact" | "quote";
};

const initialState: LeadFormState = {
	success: false,
	message: "",
};

function SubmitButton({ label }: { label: string }) {
	return (
		<button
			type="submit"
			className="w-full rounded-full bg-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-700"
		>
			{label}
		</button>
	);
}

function FieldError({ error }: { error?: string }) {
	if (!error) return null;

	return <p className="mt-1 text-sm text-red-600">{error}</p>;
}

export default function LeadForm({ type }: LeadFormProps) {
	const [state, setState] = useState(initialState);
	const errors = state.fieldErrors ?? {};

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const payload = buildLeadPayload(formData, type);
		const validationError = validateLead(payload);

		if (validationError) {
			setState(validationError);
			return;
		}

		const reference = createLeadReference();
		setState({
			success: true,
			message:
				"Your default email app should open with this request prefilled. If it does not, call us directly and mention the reference below.",
			reference,
		});
		window.location.href = createLeadMailtoHref(
			payload,
			reference,
			business.leadRecipientEmail,
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-slate-700">
					{type === "quote" ? "Full Name *" : "Name *"}
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-3 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
				/>
				<FieldError error={errors.name} />
			</div>

			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<label htmlFor="email" className="block text-sm font-medium text-slate-700">
						Email *
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-3 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
					/>
					<FieldError error={errors.email} />
				</div>
				<div>
					<label htmlFor="phone" className="block text-sm font-medium text-slate-700">
						Phone *
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						required
						className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-3 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
					/>
					<FieldError error={errors.phone} />
				</div>
			</div>

			{type === "quote" ? (
				<>
					<div className="grid gap-6 md:grid-cols-2">
						<div>
							<label
								htmlFor="address"
								className="block text-sm font-medium text-slate-700"
							>
								Property Address *
							</label>
							<input
								type="text"
								id="address"
								name="address"
								required
								className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-3 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
							/>
							<FieldError error={errors.address} />
						</div>
						<div>
							<label
								htmlFor="zipCode"
								className="block text-sm font-medium text-slate-700"
							>
								ZIP Code *
							</label>
							<input
								type="text"
								id="zipCode"
								name="zipCode"
								required
								className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-3 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
							/>
							<FieldError error={errors.zipCode} />
						</div>
					</div>

					<div>
						<label
							htmlFor="serviceType"
							className="block text-sm font-medium text-slate-700"
						>
							Service Type *
						</label>
						<select
							id="serviceType"
							name="serviceType"
							required
							className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-3 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
							defaultValue=""
						>
							<option value="" disabled>
								Select Service
							</option>
							<option value="new-installation">New System Installation</option>
							<option value="repair">System Repair</option>
							<option value="maintenance">Seasonal Maintenance</option>
							<option value="backflow-testing">Backflow Testing</option>
							<option value="upgrade">System Upgrade</option>
							<option value="consultation">Consultation</option>
						</select>
						<FieldError error={errors.serviceType} />
					</div>
				</>
			) : null}

			<p className="text-sm text-slate-500">
				Submitting opens your default email app with this request prefilled. If
				no email app opens, call{" "}
				<a
					href={business.phoneHref}
					className="font-medium text-emerald-700 underline-offset-4 hover:underline"
				>
					{business.phoneDisplay}
				</a>
				.
			</p>

			<div>
				<label
					htmlFor={type === "quote" ? "description" : "message"}
					className="block text-sm font-medium text-slate-700"
				>
					{type === "quote" ? "Project Description *" : "Message *"}
				</label>
				<textarea
					id={type === "quote" ? "description" : "message"}
					name={type === "quote" ? "description" : "message"}
					rows={4}
					required
					placeholder={
						type === "quote"
							? "Describe the irrigation work, repairs, or upgrades you need."
							: "Tell us how we can help."
					}
					className="mt-1 block w-full rounded-md border border-slate-300 px-4 py-3 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
				/>
				<FieldError error={errors.message} />
			</div>

			{state.message ? (
				<div
					className={`rounded-lg border px-4 py-3 text-sm ${
						state.success
							? "border-emerald-200 bg-emerald-50 text-emerald-900"
							: "border-red-200 bg-red-50 text-red-700"
					}`}
				>
					<p>{state.message}</p>
					{state.reference ? (
						<p className="mt-1 font-medium">Reference: {state.reference}</p>
					) : null}
				</div>
			) : null}

			<SubmitButton label={type === "quote" ? "Request Quote" : "Send Message"} />
		</form>
	);
}
