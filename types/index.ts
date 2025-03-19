import {
  CoinsData,
  InvestData,
  InvestPacket,
  PeriodData,
} from "@/app/[locale]/(profile)/invest/page";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IStore {
  twoFaActive: boolean;
  setTwoFaActive: (val: boolean) => void;
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
  progress: number;
  setProgress: (state: number) => void;
  step: number;
  setStep: (value: number) => void;
  confirmationStep: number;
  setConfirmStep: (val: number) => void;
  swapPoppover_1: string | null;
  swapPoppover_2: string | null;
  swapCheck: (val1: string | null) => void;
  swapCheck2: (val2: string | null) => void;
  globalVeriState: boolean;
  setGlobalVerifState: (state: boolean) => void;
  replaceCurrency: boolean;
  setReplaceCurrency: (val: boolean) => void;
  // Investing cards
  globalCompany: InvestData | null;
  setGlboalCompany: (val: InvestData | null) => void;
  globalCompanyIcon: InvestData | null;
  setGlboalCompanyIcon: (val: InvestData | null) => void;
  globalPeriod: PeriodData | null;
  setGlobalPeriod: (val: PeriodData | null) => void;
  globalCoin: CoinsData | null;
  setGlobalCoin: (val: CoinsData | null) => void;
  globalAmount: number;
  setGlobalAmount: (val: number) => void;
  open: boolean;
  setOpen: (val: boolean) => void;
  user: {
    email?: string;
    phone?: string;
    username?: string;
    uid?: string;
    password?: string;
  } | null;
  invests: {
    uid: number;
    packet: {
      name: string;
      periodFrom: number;
      periodTo: number;
    };
    create_time: number;
    id: number;
    status: number;
    rtime: number;
    percent: number;
    amount: number;
    coin: string;
  }[];
  setInvests: (val: any) => void;
  setUser: (userData: any) => void;
  clearUser: () => void;
  showVerifWindow: boolean;
  setshowVerifWindow: (val: boolean) => void;
  localVerif: boolean;
  packets: InvestPacket[];
  setPackets: (val: InvestPacket[]) => void;
  setLocalVerif: (val: boolean) => void;
}
export interface User {
  [key: string]: any;
}

export interface InvestHistoryPayload {
  coin: string;
  csrf: string;
}
