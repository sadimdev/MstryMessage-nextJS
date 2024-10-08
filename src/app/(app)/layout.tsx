import Navbar from "@/components/Navbar";
import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
