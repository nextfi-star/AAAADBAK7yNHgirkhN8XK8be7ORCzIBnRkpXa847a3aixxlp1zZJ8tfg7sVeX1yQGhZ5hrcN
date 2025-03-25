"use client";
import { create } from "zustand";
import { IStore } from "@/types";
import { persist } from "zustand/middleware";
import { getChatHistory, sendMessage } from "@/utils/api";
import { InvestPacket } from "@/app/[locale]/(profile)/invest/page";

function hexToString(hex: string): string {
  try {
    return decodeURIComponent(hex.replace(/(..)/g, (m) => "%" + m));
  } catch {
    return hex;
  }
}
interface ChatMessage {
  tid: string;
  text: string;
  time: number;
  status: number;
  sender: "me" | "admin";
}

interface ChatStore {
  tid: string;
  messages: ChatMessage[];
  setTid: (tid: string) => void;
  loadChatHistory: (csrf: string) => Promise<void>;
  sendChatMessage: (csrf: string, text: string) => Promise<void>;
  addMessage: (msg: ChatMessage) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  tid: "",
  messages: [],
  setTid: (tid: string) => set({ tid }),
  loadChatHistory: async (csrf: string) => {
    const { tid } = get();
    if (!csrf || !tid) return;
    const result = await getChatHistory(csrf, tid);
    if (result?.response === "success" && result.data) {
      const msgs: ChatMessage[] = result.data.map((msg: any) => ({
        tid: msg.tid,
        text: hexToString(msg.text),
        time: msg.time,
        status: msg.status,
        sender: msg.uid === tid ? "me" : "admin",
      }));
      set({ messages: msgs });
    }
  },
  sendChatMessage: async (csrf: string, text: string) => {
    const { tid, messages, addMessage } = get();
    if (!csrf || !tid) return;
    const result = await sendMessage(csrf, tid, text);
    if (result?.response === "success") {
      const newMsg: ChatMessage = {
        tid,
        text,
        time: Date.now(),
        status: 0,
        sender: "me",
      };
      addMessage(newMsg);
    }
  },
  addMessage: (msg: ChatMessage) =>
    set((state) => ({ messages: [...state.messages, msg] })),
}));

export const useThemeStore = create<IStore>()(
  persist(
    (set) => ({
      twoFaActive: false,
      setTwoFaActive: (val: boolean) => set({ twoFaActive: val }),
      theme: "dark",
      setTheme: (newTheme) => {
        set(() => {
          if (typeof document !== "undefined") {
            sessionStorage.setItem("theme", newTheme);
            document.documentElement.classList.toggle(
              "dark",
              newTheme === "dark"
            );
          }
          return { theme: newTheme };
        });
      },
      setLocalVerif: (val: boolean) => set({ localVerif: val }),
      localVerif: false,
      initializeTheme: () => {
        const savedTheme = sessionStorage.getItem("theme") || "dark";
        set(() => {
          if (typeof document !== "undefined") {
            document.documentElement.classList.toggle(
              "dark",
              savedTheme === "dark"
            );
          }
          return { theme: savedTheme };
        });
      },
      activeTab: "Profile",
      modeToogle: (selected) => set({ mode: selected }),
      mode: "email",
      email: "",
      phone: "",
      password: "",
      setEmail: (email) => set({ email }),
      setPhone: (phone) => set({ phone }),
      setPassword: (password) => set({ password }),
      verifyState: false,
      setVerifyState: (state) => set({ verifyState: state }),
      progress: 0,
      setProgress: (state) => set({ progress: state }),
      step: 1,
      setStep: (value) => set({ step: value }),
      confirmationStep: 1,
      setConfirmStep: (val) => set({ confirmationStep: val }),
      swapPoppover_1: "",
      swapPoppover_2: "",
      swapCheck: (val1) =>
        set({
          swapPoppover_1: val1,
        }),
      swapCheck2: (val2) =>
        set({
          swapPoppover_2: val2,
        }),
      globalVeriState: false,
      setGlobalVerifState: (state) => set({ globalVeriState: state }),
      replaceCurrency: false,
      setReplaceCurrency: (val) => set({ replaceCurrency: val }),
      globalCompany: null,
      setGlboalCompany: (val) => set({ globalCompany: val }),
      globalCompanyIcon: null,
      setGlboalCompanyIcon: (val) => set({ globalCompanyIcon: val }),
      globalPeriod: null,
      setGlobalPeriod: (val) => set({ globalPeriod: val }),
      globalCoin: null,
      setGlobalCoin: (val) => set({ globalCoin: val }),
      globalAmount: 0,
      setGlobalAmount: (val) => set({ globalAmount: val }),
      invests: [],
      setInvests: (val) => set({ invests: val }),
      investConfirmError: null,
      setInvestConfirmError: (val) => set({ investConfirmError: val }),
      open: false,
      setOpen: (val) => set({ open: val }),
      user: null,
      setUser: (userData) => {
        if (typeof document !== "undefined") {
          set({ user: userData });
          sessionStorage.setItem("userData", JSON.stringify(userData));
        }
      },
      clearUser: () => {
        sessionStorage.removeItem("userData");
        sessionStorage.removeItem("profile-store");
        set({ user: null });
      },
      packets: [],
      setPackets: (val: InvestPacket[]) => set({ packets: val }),
      showVerifWindow: false,
      setshowVerifWindow: (val) => set({ showVerifWindow: val }),
    }),
    {
      name: "profile-store",
    }
  )
);
