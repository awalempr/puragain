import { Phone } from "lucide-react";

// Tracked inbound line. Single source of truth - update here to change it everywhere.
export const PHONE_DISPLAY = "(760) 254-0089";
export const PHONE_HREF = "tel:+17602540089";

// "Prefer to call?" line to place next to any form.
export function CallCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      className={`inline-flex items-center gap-2 text-sm text-gray-600 hover:text-brand-red transition-colors ${className}`}
    >
      <Phone className="w-4 h-4 text-brand-red" />
      <span>
        Prefer to call? <strong className="text-navy">{PHONE_DISPLAY}</strong>
      </span>
    </a>
  );
}
