import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import PageLayout from "@/components/layout/PageLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marketplace - Juhuu",
  description: "Cooming Soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="de">
      <body>
      <AppRouterCacheProvider options={{enableCssLayer: true}}>
          <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline/>
              <PageLayout>
              {children}
              </PageLayout>
          </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
      </html>
  );
}
