// components/types/sidebar.ts
import { ComponentType } from "react";

export interface SidebarItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
  path?: string;
  active?: boolean;
  disabled?: boolean;
}
