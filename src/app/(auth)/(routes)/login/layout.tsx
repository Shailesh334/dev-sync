import { ReactNode } from "react";

const LoginLayout = ({
    children
} : {
    children : ReactNode
}) => {
    return ( 
        <div className="bg-red-700 h-full text-white">
            {children}
        </div>
     );
}
 
export default LoginLayout;