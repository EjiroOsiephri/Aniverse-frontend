// components/types/sidebar.ts
export interface SidebarItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  disabled?: boolean;
}
