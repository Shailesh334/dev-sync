import Image from "next/image";

const Logo = () => {
    return ( 
        <div className="flex items-center h-auto w-auto">
            
            <Image 
                src="logo.svg"
                alt="logo"
                width={20}
                height={20}
            
            />
            <h4 className="font-bold p-2 font-mono">Zotion</h4>
        </div>
     );
}
 
export default Logo;