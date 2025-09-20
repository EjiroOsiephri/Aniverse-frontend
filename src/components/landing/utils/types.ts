// types.ts
export interface WindowDimensions {
  width: number;
  height: number;
}

export interface Particle {
  initialX: number;
  initialY: number;
  driftX: number;
  delay: number;
  duration: number;
}

export interface NavItem {
  name: string;
  href: string;
}
