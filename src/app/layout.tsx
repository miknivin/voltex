import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VLTX | Luxury Meets Liquidity",
  description:
    "VLTX provides a discreet and structured way to unlock liquidity from diamonds, precious stones, jewellery, platinum and select luxury watches.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={leagueSpartan.variable}>
      <body className="bg-bg text-text-primary antialiased">{children}</body>
    </html>
  );
}
