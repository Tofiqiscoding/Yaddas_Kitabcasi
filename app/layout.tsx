import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "./ClientShell";

export const metadata: Metadata = {
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
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
