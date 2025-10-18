
import { ReactNode } from "react";


const LoginLayout = ({
    children
} : {
    children : ReactNode
}) => {
    return ( 
        <div className="w-full bg-green-400 text-white">
            {children}
        </div>
     );
}
 
export default LoginLayout;