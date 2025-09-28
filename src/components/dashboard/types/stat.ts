// components/types/stat.ts
export interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}
