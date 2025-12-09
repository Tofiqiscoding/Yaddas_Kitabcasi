import "./globals.css";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import { UniversityProvider } from "@/contexts/UniversityContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Universitet Kitabı",
  description: "Universitet portalı",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body className={inter.className}>
        <UniversityProvider>
          <div className="app-shell">
            <main className="app-main">{children}</main>
            <Footer />
          </div>
        </UniversityProvider>
      </body>
    </html>
  );
}