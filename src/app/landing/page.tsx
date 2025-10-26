"use client";

import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Main from "./_components/Main";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

const LandingPage = () => {




  return (
    <div className="dark:bg-[#1f1f1f]">
      <Main />
      <Footer />
    </div>
  );
};

export default LandingPage;
