import { Button } from "@/components/ui/button";
import Logo from "./logo";

const Footer = () => {
    return ( 
        <>
       
        <div className="w-full h-8 py-8 flex items-center gap-4 justify-between px-4">
              
               <Logo/>
              <div className="flex gap-4">
                <Button variant={"ghost"} className="dark:bg-inherit opacity-50 bg-white hover:opacity-100 hidden md:block">Privacy Policy</Button>
                <Button variant={"ghost"} className="dark:bg-inherit opacity-50 bg-white hover:opacity-100" >Terms and conditions</Button>
              </div>
        </div>
        </>
     );
}
 
export default Footer;