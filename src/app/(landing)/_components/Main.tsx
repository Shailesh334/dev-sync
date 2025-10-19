import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Main = () => {
  return (
    <div className="flex flex-col p-6 flex-1 justify-center items-center min-h-svh gap-8 w-full">
        <div className="flex flex-col w-full justify-center gap-6">
            <div className="w-full flex justify-center">
                <h1 className="font-bold text-3xl max-w-3xl text-center md:text-6xl px-4 md:px-8 space-y-4 font-mono ">
                    Your Ideas, Documents & Plans. Unified. Welcome to  <span className="underline"> Zotion </span>
                </h1>
            </div>
            <div className="ml-8 md:ml-0 md:mr-32 flex w-full justify-center pr-14">
                <h4 className="text-base w-[80%] text-center font-medium md:text-lg md:w-[500px]">
                    Zotion is the connected workspace where  better, faster work happens.
                </h4>
            </div>
            <div className="flex w-full justify-center md:pr-8">
              <Button className="py-4">Enter Zotion <ArrowRight/></Button>
            </div>
      </div>
      <div className="flex gap-4">
      <div className="relative aspect-square overflow-hidden">
        <Image
        src="/team.svg"   // path relative to /public
        alt="Logo"
        width={400}
        height={400}
      />
      </div>
      <div className="relative aspect-square overflow-hidden hidden md:block">
        <Image
        src="/idea.svg"   // path relative to /public
        alt="Logo"
        width={400}
        height={400}
      />
      </div>
      </div>
    </div>
  );
};

export default Main;
