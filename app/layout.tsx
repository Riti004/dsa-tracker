import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "DSA Tracker",
  description: "Track your DSA questions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
      </body>
    </html>
  );
}