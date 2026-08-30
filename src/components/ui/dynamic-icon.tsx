// src/components/ui/dynamic-icon.tsx
import {
  Package, Leaf, Monitor, Lightbulb, Megaphone, Video,
  GraduationCap, Droplets, Building, ShoppingCart, Globe,
  Handshake, Wheat, type LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Package,
  Leaf,
  Monitor,
  Lightbulb,
  Megaphone,
  Video,
  GraduationCap,
  Droplets,
  Building,
  ShoppingCart,
  Globe,
  Handshake,
  Wheat,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return null;
  }
  
  return <IconComponent className={className} />;
}