import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IStore {
  activeTab: string;
  theme: string;
  setTheme: (newTheme: string) => void;
  initializeTheme: () => void;
  modeToogle: (selected: string) => void;
  mode: string;
  email: string;
  phone: string;
  password: string;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setPassword: (password: string) => void;
  verifyState: boolean;
  setVerifyState: (state: boolean) => void;
}
