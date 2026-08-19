"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import attachIcon from "../../public/icons/attach-paperclip.svg";

const labelClasses = "text-xs font-bold tracking-[1.8px] text-[#99907c] uppercase";
const inputClasses =
  "w-full rounded-sm bg-white px-3.5 py-3 text-base text-gray-800 placeholder:text-gray-500 outline-none";
const selectClasses =
  "w-full rounded-sm border border-white/10 bg-transparent px-3 py-3 text-base text-[#d0c5af] outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Simulated submission — no backend is wired up, this just mimics
    // the round-trip so the flow feels real.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-sm bg-[rgba(10,10,10,0.6)] px-8 py-20 text-center">
        <p className="text-xs font-bold tracking-[3.6px] text-[#d4af37] uppercase">
          Submission Received
        </p>
        <h3 className="font-display text-3xl font-semibold text-white">
          Thank You
        </h3>
        <p className="max-w-sm text-base leading-6 text-[#d0c5af]">
          Your enquiry has been routed through our secure gateway. A member
          of our private client team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={submitting}
      className="flex flex-col gap-6 rounded-sm bg-[rgba(10,10,10,0.6)] p-8 sm:p-12"
    >
      <fieldset disabled={submitting} className="contents">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClasses}>
            Full Legal Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Institutional / Personal Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="secure@domain.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClasses}>
            Secure Contact Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="jurisdiction" className={labelClasses}>
            Primary Jurisdiction / Country
          </label>
          <select id="jurisdiction" name="jurisdiction" defaultValue="" className={selectClasses}>
            <option value="" disabled>
              Select Jurisdiction
            </option>
            <option value="uk">United Kingdom</option>
            <option value="us">United States</option>
            <option value="ae">United Arab Emirates</option>
            <option value="sg">Singapore</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="service" className={labelClasses}>
            Service Required
          </label>
          <select id="service" name="service" defaultValue="valuation" className={selectClasses}>
            <option value="valuation">Asset Valuation</option>
            <option value="liquidity">Liquidity Solutions</option>
            <option value="consultation">General Consultation</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="assetClass" className={labelClasses}>
            Primary Asset Class
          </label>
          <select id="assetClass" name="assetClass" defaultValue="diamonds" className={selectClasses}>
            <option value="diamonds">Investment Grade Diamonds</option>
            <option value="jewellery">Jewellery</option>
            <option value="platinum">Platinum</option>
            <option value="watches">Luxury Watches</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="portfolioValue" className={labelClasses}>
          Estimated Portfolio Value (USD)
        </label>
        <input
          id="portfolioValue"
          name="portfolioValue"
          type="text"
          placeholder="$500,000+"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClasses}>
          Secure Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Provide preliminary details. Do not include sensitive account numbers here."
          className="w-full resize-none rounded-sm bg-white/[0.03] px-3 py-3 text-base text-gray-400 placeholder:text-gray-500 outline-none"
        />
      </div>

      </fieldset>

      <div className="flex flex-col items-stretch gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          disabled={submitting}
          className="flex items-center justify-center gap-2 rounded-sm border border-white/10 px-6 py-3 text-base text-[#d4af37] transition-colors hover:bg-white/5 disabled:opacity-50"
        >
          <Image src={attachIcon} alt="" className="h-3 w-auto" />
          Attach Certificates
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="flex items-center justify-center gap-2 rounded-sm bg-[#d4af37] px-8 py-3 text-base font-bold text-[#0a0a0a] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a]" />
          )}
          {submitting ? "Submitting..." : "Request Private Consultation"}
        </button>
      </div>
    </form>
  );
}
