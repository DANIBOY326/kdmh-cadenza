"use client";

import {
  Mic2,
  Globe,
  Users,
  TrendingUp,
  Music,
  Sparkles,
  Trophy,
  Radio,
  Star,
  BookOpen,
  Award,
  Mic,
  CreditCard,
  ClipboardList,
  Video,
  Bell,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Copy,
  Check,
  Menu,
  X,
  ArrowRight,
  Calendar,
  Clock,
  DollarSign,
  Headphones,
  Heart,
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const icons: Record<string, React.ComponentType<LucideProps>> = {
  Mic2,
  Globe,
  Users,
  TrendingUp,
  Music,
  Sparkles,
  Trophy,
  Radio,
  Star,
  BookOpen,
  Award,
  Mic,
  CreditCard,
  ClipboardList,
  Video,
  Bell,
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Copy,
  Check,
  Menu,
  X,
  ArrowRight,
  Calendar,
  Clock,
  DollarSign,
  Headphones,
  Heart,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
