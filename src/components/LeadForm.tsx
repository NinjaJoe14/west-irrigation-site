"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import {
	buildLeadPayload,
	type LeadFormState,
	validateLead,
} from "@/lib/leads";
import { primaryBusinessContact } from "@/lib/site";

type LeadFormProps = {
	type: "contact" | "quote";
};

const initialState: LeadFormState = {
	success: false,
	message: "",
};

function SubmitButton({
	label,
	isSubmitting,
}: {
	label: string;
	isSubmitting: boolean;
}) {
	return (
		<button
			type="submit"
			disabled={isSubmitting}
			className="w-full rounded-full bg-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-400"
		>
			{isSubmitting ? "Sending..." : label}
		</button>
	);
}

function FieldError({ error }: { error?: string }) {
	if (!error) return null;

	return <p className="mt-1 text-sm text-red-600">{error}</p>;
}

export default function LeadForm({ type }: LeadFormProps) {
	const [state, setState] = useState(initialState);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const errors = state.fieldErrors ?? {};

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const payload = buildLeadPayload(formData, type);
		const validationError = validateLead(payload);

		if (validationError) {
			setState(validationError);
			return;
		}

		setIsSubmitting(true);
		try {
			const response = await fetch("/api/lead", {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify(payload),
			});
			const nextState = (await response.json()) as LeadFormState;
			setState(nextState);

			if (response.ok) {
				event.currentTarget.reset();
			}
		} catch (error) {
			console.error("[lead-submit-error]", error);
			setState({
				success: false,
				message:
					"We could not send your request right now. Please call us directly.",
			});
		} finally {
			setIsSubmitting(false);
		}
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
				Submitting sends your request directly to our team. If the form does not
				go through, call{" "}
				<a
					href={primaryBusinessContact.phoneHref}
					className="font-medium text-emerald-700 underline-offset-4 hover:underline"
				>
					{primaryBusinessContact.name}: {primaryBusinessContact.phoneDisplay}
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

			<SubmitButton
				label={type === "quote" ? "Request Quote" : "Send Message"}
				isSubmitting={isSubmitting}
			/>
		</form>
	);
}
