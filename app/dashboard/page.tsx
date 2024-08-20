"use client";

import { Dashboard } from "@/components/ddashboard";
import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

export default function Home() {
  return (
    <WalletProvider>
      <Dashboard></Dashboard>
    </WalletProvider>
  );
}
