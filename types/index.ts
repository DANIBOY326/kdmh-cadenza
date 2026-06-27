// ─── Navigation ────────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

// ─── Competition ───────────────────────────────────────────────────────────────
export interface CompetitionDetail {
  label: string;
  value: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// ─── Features / Benefits ────────────────────────────────────────────────────────
export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitCard {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
}

// ─── Steps ─────────────────────────────────────────────────────────────────────
export interface Step {
  step: number;
  title: string;
  description: string;
  icon: string;
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  season: string;
}

// ─── FAQ ───────────────────────────────────────────────────────────────────────
export interface FaqItem {
  question: string;
  answer: string;
}

// ─── Contact ───────────────────────────────────────────────────────────────────
export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

// ─── Payment ───────────────────────────────────────────────────────────────────
export interface PaymentDetail {
  bank: string;
  accountName: string;
  accountNumber: string;
  disclaimer: string;
}
