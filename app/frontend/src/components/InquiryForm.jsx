import { useState } from "react";
import { BUDGETS, SERVICES } from "@/lib/data";
import { API } from "@/lib/scroll";

const inputCls =
  "w-full bg-transparent border-b border-white/25 focus:border-flame outline-none py-3 text-bone placeholder:text-bone/35 transition-colors duration-300";

const labelCls = "font-mono text-[10px] uppercase tracking-[0.25em] text-bone/60";

export default function InquiryForm({ defaultService = "", variant = "full", idPrefix = "inquiry" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: defaultService,
    budget: "",
    deadline: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Please enter a valid email address";
    if (variant === "full" && !form.service) errs.service = "Please choose a service";
    if (!form.message.trim())
      errs.message = variant === "full" ? "Please describe your project" : "Please enter a message";
    return errs;
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("submitting");
    try {
      const res = await fetch(`${API}/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div data-testid={`${idPrefix}-success`} className="border border-flame/40 bg-flame/10 p-8">
        <p className="font-display text-2xl text-bone">Inquiry received.</p>
        <p className="text-bone/70 mt-3 text-sm leading-relaxed">
          Thank you{form.name.trim() ? `, ${form.name.trim()}` : ""} — your enquiry was submitted
          successfully. I&apos;ll get back to you at {form.email.trim()} soon.
        </p>
      </div>
    );
  }

  const err = (k) =>
    errors[k] && <p className="text-flame text-xs mt-2" data-testid={`${idPrefix}-${k}-error`}>{errors[k]}</p>;

  return (
    <form onSubmit={submit} noValidate data-testid={`${idPrefix}-form`} className="space-y-7">
      <div className={variant === "full" ? "grid sm:grid-cols-2 gap-7" : "space-y-7"}>
        <div>
          <label htmlFor={`${idPrefix}-name`} className={labelCls}>Full name *</label>
          <input
            id={`${idPrefix}-name`}
            data-testid={`${idPrefix}-name-input`}
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className={`${inputCls} mt-1`}
          />
          {err("name")}
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelCls}>Email address *</label>
          <input
            id={`${idPrefix}-email`}
            data-testid={`${idPrefix}-email-input`}
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="you@example.com"
            className={`${inputCls} mt-1`}
          />
          {err("email")}
        </div>
      </div>

      {variant === "full" && (
        <>
          <div className="grid sm:grid-cols-2 gap-7">
            <div>
              <label htmlFor={`${idPrefix}-service`} className={labelCls}>Service category *</label>
              <select
                id={`${idPrefix}-service`}
                data-testid={`${idPrefix}-service-select`}
                value={form.service}
                onChange={set("service")}
                className={`${inputCls} mt-1 cursor-pointer`}
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
                <option value="General Enquiry">General Enquiry</option>
              </select>
              {err("service")}
            </div>
            <div>
              <label htmlFor={`${idPrefix}-budget`} className={labelCls}>Estimated budget</label>
              <select
                id={`${idPrefix}-budget`}
                data-testid={`${idPrefix}-budget-select`}
                value={form.budget}
                onChange={set("budget")}
                className={`${inputCls} mt-1 cursor-pointer`}
              >
                <option value="">Select a range</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor={`${idPrefix}-deadline`} className={labelCls}>Expected deadline</label>
            <input
              id={`${idPrefix}-deadline`}
              data-testid={`${idPrefix}-deadline-input`}
              type="date"
              value={form.deadline}
              onChange={set("deadline")}
              className={`${inputCls} mt-1 cursor-pointer`}
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor={`${idPrefix}-message`} className={labelCls}>
          {variant === "full" ? "Project description & requirements *" : "Message *"}
        </label>
        <textarea
          id={`${idPrefix}-message`}
          data-testid={`${idPrefix}-message-input`}
          rows={variant === "full" ? 4 : 3}
          value={form.message}
          onChange={set("message")}
          placeholder={variant === "full" ? "Tell me about your project, goals and timeline" : "Tell me about your idea"}
          className={`${inputCls} mt-1 resize-none`}
        />
        {err("message")}
      </div>

      {status === "error" && (
        <p data-testid={`${idPrefix}-error`} className="text-flame text-sm">
          Something went wrong while submitting — please try again.
        </p>
      )}

      <button
        type="submit"
        data-testid={`${idPrefix}-submit-btn`}
        disabled={status === "submitting"}
        className="w-full bg-flame text-ink font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-flamedeep transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : variant === "full" ? "Send Inquiry" : "Send Message"}
      </button>
    </form>
  );
}
