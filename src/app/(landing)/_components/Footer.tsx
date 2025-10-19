import { Button } from "@/components/ui/button";

const Footer = () => {
    return ( 
        <div className="w-full h-8 py-8 flex items-center gap-4 justify-between px-4">
              <h4 className="font-bold p-2 font-mono">Zotion</h4>
              <div className="flex gap-4">
                <Button variant={"secondary"} className="opacity-50 bg-white hover:opacity-100 hidden md:block">Privacy Policy</Button>
                <Button variant={"secondary"} className="opacity-50 bg-white hover:opacity-100" >Terms and conditions</Button>
              </div>
        </div>
     );
}
 
export default Footer;