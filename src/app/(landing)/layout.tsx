import { ReactNode } from "react";
import Header from "./_components/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
