import type { Metadata } from "next";

import "./globals.css";


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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
