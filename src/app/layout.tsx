import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata: Metadata = {
  title: "Zotion",
  description : "The connected work space where better and faster work happens.",
  icons:[
    {
      media:"(prefers-color-scheme: light)",
      url : "/logo.svg",
      href:"/logo.svg"
    },
     {
      
      url : "/logo-dark.svg",
      href:"/logo-dark.svg"
    }
  ]

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
