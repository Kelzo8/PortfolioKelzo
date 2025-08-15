import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SWRegister } from "@/components/sw-register";

const heading = Poppins({ weight: ["700"], subsets: ["latin"], variable: "--font-heading" });
const body = Inter({ weight: ["400"], subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://jameskelly.dev"),
  title: {
    default: "James Kelly — AI Engineer & Web Developer",
    template: "%s — James Kelly",
  },
  description: "James Kelly is a Software Engineer specialising in AI and Web Applications.",
  applicationName: "James Kelly Portfolio",
  authors: [{ name: "James Kelly" }],
  keywords: ["James Kelly", "AI Engineer", "Web Developer", "Next.js", "Three.js", "Framer Motion"],
  openGraph: { title: "James Kelly — AI Engineer & Web Developer", description: "Personal portfolio of James Kelly, specialising in AI and web applications.", type: "website", url: "/", siteName: "James Kelly Portfolio" },
  twitter: { card: "summary_large_image", title: "James Kelly — AI Engineer & Web Developer", description: "Personal portfolio of James Kelly, specialising in AI and web applications.", creator: "@JamesKelly" },
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.webmanifest",
  themeColor: "#0ea5e9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <ThemeProvider>
          <SWRegister />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
