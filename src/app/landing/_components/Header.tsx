import { Button } from "@/components/ui/button";

import Logo from "./logo";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignInButton,  SignUpButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="flex justify-between align-center text-black-500 w-full px-4 py-4 sticky top-0 bg-white dark:bg-[#1f1f1f]">
      <Logo />
      <div className="flex justify-center items-center gap-4">
      
          <SignInButton mode="modal" forceRedirectUrl={"/dashboard"}>

              <Button variant="link" className="hover:cursor-pointer">Log In</Button>

          </SignInButton>
        
       
          <SignUpButton mode="modal" forceRedirectUrl={"/dashboard"}>
          
            <Button className="hover:cursor-pointer">Enter Zotion</Button>
          </SignUpButton>
        

        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
