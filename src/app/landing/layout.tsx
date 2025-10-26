import { ReactNode } from "react";
import Header from "./_components/Header";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function Layout({ children }: { children: ReactNode }) {

  const user = await currentUser();
  if(user){
    redirect('/dashboard');
  }

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
