"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const CATEGORIES = [
  "Platinum Metal",
  "Platinum Jewellery",
  "Loose Diamond",
  "Diamond Jewellery",
  "Precious Gemstone",
  "Gemstone Jewellery",
  "Luxury Watch",
  "Other Luxury Asset",
] as const;

type Category = (typeof CATEGORIES)[number];

const CATEGORY_FIELDS: Record<Category, { metalWeight: boolean; carat: boolean; brand: boolean }> = {
  "Platinum Metal": { metalWeight: true, carat: false, brand: false },
  "Platinum Jewellery": { metalWeight: true, carat: false, brand: true },
  "Loose Diamond": { metalWeight: false, carat: true, brand: false },
  "Diamond Jewellery": { metalWeight: true, carat: true, brand: true },
  "Precious Gemstone": { metalWeight: false, carat: true, brand: false },
  "Gemstone Jewellery": { metalWeight: true, carat: true, brand: true },
  "Luxury Watch": { metalWeight: false, carat: false, brand: true },
  "Other Luxury Asset": { metalWeight: false, carat: false, brand: true },
};

const CONDITIONS = ["As New", "Excellent", "Good", "Fair"];
const CONTACT_METHODS = ["Call", "WhatsApp", "Email"];

const STEPS = ["Category", "Details", "Photos", "Contact"];

function CategoryIcon({ category, className }: { category: Category; className?: string }) {
  const common = { viewBox: "0 0 32 32", fill: "none", className, "aria-hidden": true } as const;
  if (category.includes("Watch")) {
    return (
      <svg {...common}>
        <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 11v5l3.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 5h6M13 27h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (category === "Platinum Metal") {
    return (
      <svg {...common}>
        <path d="M6 22V13l4-3h12l4 3v9l-4 3H10l-4-3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M6 13h20" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (category.includes("Jewellery")) {
    return (
      <svg {...common}>
        <circle cx="16" cy="19" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 12l4-7 4 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (category.includes("Gemstone")) {
    return (
      <svg {...common}>
        <path d="M8 12l8-6 8 6-8 14-8-14z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8 12h16M13 12l3 14M19 12l-3 14" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    );
  }
  if (category.includes("Diamond")) {
    return (
      <svg {...common}>
        <path d="M9 12l7-7 7 7-7 13-7-13z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 12h14M13 12l3 13M19 12l-3 13" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M16 4l2.4 7.6L26 14l-7.6 2.4L16 24l-2.4-7.6L6 14l7.6-2.4L16 4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

const fieldLabel = "text-[11px] font-bold tracking-[1.6px] text-gold-deep uppercase";
const fieldInput =
  "w-full rounded-sm border border-line bg-bg px-3.5 py-3 text-sm text-text-primary placeholder:text-text-mutedmore outline-none transition-colors focus:border-gold";

type FormState = {
  category: Category | null;
  brand: string;
  metalWeight: string;
  carat: string;
  condition: string;
  certificateAvailable: "Yes" | "No" | "";
  purchaseYear: string;
  description: string;
  name: string;
  mobile: string;
  city: string;
  email: string;
  preferredContact: string;
};

const INITIAL_STATE: FormState = {
  category: null,
  brand: "",
  metalWeight: "",
  carat: "",
  condition: "",
  certificateAvailable: "",
  purchaseYear: "",
  description: "",
  name: "",
  mobile: "",
  city: "",
  email: "",
  preferredContact: "",
};

export default function ValuationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [photos, setPhotos] = useState<{ file: File; url: string }[]>([]);
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const fields = form.category ? CATEGORY_FIELDS[form.category] : null;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handlePhotosChange(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    const next = files.map((file) => ({ file, url: URL.createObjectURL(file) }));
    setPhotos((prev) => [...prev, ...next]);
    e.target.value = "";
  }

  function removePhoto(index: number) {
    setPhotos((prev) => {
      const copy = [...prev];
      URL.revokeObjectURL(copy[index].url);
      copy.splice(index, 1);
      return copy;
    });
  }

  const canProceed = (() => {
    if (step === 0) return form.category !== null;
    if (step === 1) {
      if (!form.condition || !form.certificateAvailable) return false;
      if (fields?.metalWeight && !form.metalWeight) return false;
      if (fields?.carat && !form.carat) return false;
      return true;
    }
    if (step === 2) return photos.length > 0;
    if (step === 3) return Boolean(form.name && form.mobile && form.city && form.preferredContact);
    return true;
  })();

  function goNext() {
    if (!canProceed) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canProceed) return;
    setSubmitting(true);
    // Frontend mockup only — no backend/DB wired up yet.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-card p-10 text-center sm:p-14">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full border border-gold">
          <svg viewBox="0 0 24 24" fill="none" className="size-6 text-gold">
            <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="mt-6 text-xs font-bold tracking-[3px] text-gold-deep uppercase">
          Submission Received
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
          Thank You
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-text-muted">
          Our valuation team will review your asset details and contact you
          shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-line bg-card p-6 sm:p-10">
      <p className="text-xs font-bold tracking-[3px] text-gold-deep uppercase">
        Get a Valuation
      </p>

      <ol className="mt-6 flex items-center gap-2 sm:gap-3">
        {STEPS.map((label, i) => (
          <li key={label} className="flex flex-1 items-center gap-2 sm:gap-3">
            <div className="flex flex-col items-center gap-2 sm:flex-row">
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold transition-colors ${
                  i <= step
                    ? "border-gold bg-gold text-[#3c2f00]"
                    : "border-line text-text-mutedmore"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`hidden text-[10px] font-bold tracking-[1.2px] uppercase sm:block ${
                  i <= step ? "text-gold-deep" : "text-text-mutedmore"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className={`h-px flex-1 ${i < step ? "bg-gold" : "bg-line"}`}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit} className="mt-9">
        {step === 0 && (
          <div>
            <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
              Select Asset Category
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              Choose the category that best describes your asset.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {CATEGORIES.map((category) => {
                const active = form.category === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => update("category", category)}
                    className={`flex flex-col items-center gap-3 rounded-lg border p-4 text-center transition-colors ${
                      active
                        ? "border-gold bg-line-soft"
                        : "border-line hover:border-gold/40"
                    }`}
                  >
                    <CategoryIcon
                      category={category}
                      className={`h-6 w-6 ${active ? "text-gold" : "text-text-mutedmore"}`}
                    />
                    <span
                      className={`text-xs leading-4 font-semibold ${
                        active ? "text-gold-deep" : "text-text-secondary"
                      }`}
                    >
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 1 && fields && (
          <div>
            <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
              Asset Details
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              {form.category}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {fields.brand && (
                <div className="flex flex-col gap-2">
                  <label className={fieldLabel}>Brand / Maker (optional)</label>
                  <input
                    type="text"
                    value={form.brand}
                    onChange={(e) => update("brand", e.target.value)}
                    placeholder="e.g. Rolex, Cartier"
                    className={fieldInput}
                  />
                </div>
              )}
              {fields.metalWeight && (
                <div className="flex flex-col gap-2">
                  <label className={fieldLabel}>Metal Weight (grams)</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.metalWeight}
                    onChange={(e) => update("metalWeight", e.target.value)}
                    placeholder="e.g. 25.5"
                    className={fieldInput}
                  />
                </div>
              )}
              {fields.carat && (
                <div className="flex flex-col gap-2">
                  <label className={fieldLabel}>Weight / Carat</label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.carat}
                    onChange={(e) => update("carat", e.target.value)}
                    placeholder="e.g. 1.20"
                    className={fieldInput}
                  />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <label className={fieldLabel}>Condition</label>
                <select
                  value={form.condition}
                  onChange={(e) => update("condition", e.target.value)}
                  className={fieldInput}
                >
                  <option value="" disabled>
                    Select condition
                  </option>
                  {CONDITIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className={fieldLabel}>Certificate Available</label>
                <div className="flex gap-2">
                  {(["Yes", "No"] as const).map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => update("certificateAvailable", option)}
                      className={`flex-1 rounded-sm border px-4 py-3 text-sm font-semibold transition-colors ${
                        form.certificateAvailable === option
                          ? "border-gold bg-line-soft text-gold-deep"
                          : "border-line text-text-secondary hover:border-gold/40"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className={fieldLabel}>Purchase Year (optional)</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={form.purchaseYear}
                  onChange={(e) => update("purchaseYear", e.target.value)}
                  placeholder="e.g. 2019"
                  className={fieldInput}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label className={fieldLabel}>Short Description (optional)</label>
              <textarea
                rows={3}
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder="Any other detail our specialists should know."
                className={`${fieldInput} resize-none`}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
              Upload Photos
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              Clear photos help our specialists prepare an accurate initial
              valuation.
            </p>

            <div className="mt-6">
              <label className={fieldLabel}>Asset Photos — Front / Back</label>
              <label className="mt-2 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line px-6 py-10 text-center transition-colors hover:border-gold/50">
                <svg viewBox="0 0 24 24" fill="none" className="size-6 text-gold-deep">
                  <path d="M12 16V4m0 0L7 9m5-5l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 16v3a2 2 0 002 2h12a2 2 0 002-2v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span className="text-sm font-semibold text-text-secondary">
                  Click to upload images
                </span>
                <span className="text-xs text-text-mutedmore">
                  PNG or JPG, multiple photos supported
                </span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotosChange}
                  className="hidden"
                />
              </label>

              {photos.length > 0 && (
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {photos.map((p, i) => (
                    <div key={p.url} className="group relative aspect-square overflow-hidden rounded-sm border border-line">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.url} alt="" className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        aria-label="Remove photo"
                        className="absolute top-1 right-1 flex size-5 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="size-3">
                          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label className={fieldLabel}>Certificate / Invoice (optional)</label>
              <label className="flex cursor-pointer items-center justify-between gap-3 rounded-sm border border-line bg-bg px-4 py-3 text-sm text-text-secondary transition-colors hover:border-gold/40">
                <span className="truncate">
                  {certificateFile ? certificateFile.name : "Choose a file"}
                </span>
                <span className="shrink-0 text-xs font-bold tracking-[1.2px] text-gold-deep uppercase">
                  Browse
                </span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => setCertificateFile(e.target.files?.[0] ?? null)}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="font-display text-xl font-semibold text-text-primary sm:text-2xl">
              Contact Details
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-muted">
              So our specialists know where to send your valuation.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className={fieldLabel}>Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your full name"
                  className={fieldInput}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className={fieldLabel}>Mobile Number</label>
                <input
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => update("mobile", e.target.value)}
                  placeholder="+91 00000 00000"
                  className={fieldInput}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className={fieldLabel}>City</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  placeholder="Your city"
                  className={fieldInput}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className={fieldLabel}>Email (optional)</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@example.com"
                  className={fieldInput}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label className={fieldLabel}>Preferred Contact</label>
              <div className="flex gap-2">
                {CONTACT_METHODS.map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => update("preferredContact", method)}
                    className={`flex-1 rounded-sm border px-4 py-3 text-sm font-semibold transition-colors ${
                      form.preferredContact === method
                        ? "border-gold bg-line-soft text-gold-deep"
                        : "border-line text-text-secondary hover:border-gold/40"
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-9 flex items-center justify-between gap-4 border-t border-line pt-6">
          {step > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="text-xs font-bold tracking-[1.4px] text-text-muted uppercase transition-colors hover:text-text-primary"
            >
              Back
            </button>
          ) : (
            <span />
          )}

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              disabled={!canProceed}
              className="rounded-sm bg-gold px-8 py-3 text-sm font-bold tracking-[1.2px] text-[#3c2f00] uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canProceed || submitting}
              className="flex items-center gap-2 rounded-sm bg-gold px-8 py-3 text-sm font-bold tracking-[1.2px] text-[#3c2f00] uppercase transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting && (
                <span className="size-4 animate-spin rounded-full border-2 border-[#3c2f00]/30 border-t-[#3c2f00]" />
              )}
              {submitting ? "Submitting…" : "Get My Valuation"}
            </button>
          )}
        </div>
      </form>

      <p className="mt-6 text-center text-xs leading-5 text-text-mutedmore">
        Your information is handled discreetly and securely. Initial
        valuations are indicative and subject to physical verification and
        authentication.
      </p>
    </div>
  );
}
