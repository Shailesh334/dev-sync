import { Button } from "@/components/ui/button";
import { Images } from "lucide-react";
import Image from "next/image";

const Header = () => {
    return ( 
        <div className="flex justify-between align-center text-black-500 w-full px-4 py-4 sticky top-0 bg-white">
            <h4 className="font-bold p-2 font-mono">Zotion</h4>
            <Button className="font-bold font-mono hover:shadow-lg hover:cursor-pointer " variant={"secondary"} >Enter zotion</Button>
        </div>
     );
}
 
export default Header;