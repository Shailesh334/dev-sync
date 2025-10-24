import { Button } from "@/components/ui/button";
import { Images } from "lucide-react";
import Image from "next/image";
import Logo from "./logo";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";

const Header = () => {
    return ( 
        <div className="flex justify-between align-center text-black-500 w-full px-4 py-4 sticky top-0 bg-white dark:bg-[#1f1f1f]" >
            <Logo />
            <div className="flex justify-center items-center gap-4">
                <Button className="font-bold font-mono hover:shadow-lg hover:cursor-pointer " variant={"secondary"} >Enter zotion</Button>
                <ModeToggle />
            </div>
        </div>
        
     );
}
 
export default Header;