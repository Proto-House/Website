import "./globals.css";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "ProtoHouse: Industrial Automation & Robotics Education",
    template: "%s | ProtoHouse",
  },
  description:
    "ProtoHouse designs, installs, and supports custom robotic automation for small and mid-size manufacturers, and shares modern robotics education built on real engineering.",
};

// Runs before paint to set the theme class, avoiding a flash and any
// hydration mismatch between the server markup and the client.
const themeScript = `(function(){try{var d=localStorage.getItem('theme')==='dark';var c=document.documentElement.classList;d?c.add('dark'):c.remove('dark');}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
