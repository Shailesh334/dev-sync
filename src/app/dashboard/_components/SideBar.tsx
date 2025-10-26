import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";
import NewDocument from "./NewDocument";


const SideBar = () => {
  return (
    <>
    <div className="bg-gray-400 dark:bg-[#1f1f1f] ">
      
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu Items</SheetTitle>  
            <NewDocument />
          </SheetHeader>
        </SheetContent>
      
    </div>

  
    <div className="bg-gray-200 dark:bg-gray-400 p-4 hidden md:inline sticky">
        <NewDocument />
    </div>

    </>
  );
};

export default SideBar;
