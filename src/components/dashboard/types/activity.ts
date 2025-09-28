// components/types/activity.ts
export interface Activity {
  id: number;
  type: string;
  text: string;
  subtext: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
}
