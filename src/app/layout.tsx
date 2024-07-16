"use client";

import { ReactNode } from "react";

import { ContextProvider } from "@/store";
import { MainLayout } from "@/layouts/MainLayout";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ContextProvider>
      <html lang="ru">
        <MainLayout>{children}</MainLayout>
      </html>
    </ContextProvider>
  );
}
