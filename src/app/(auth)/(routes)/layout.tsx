import { ReactNode } from "react";

const RoutesLayout = ({
    children 
} : {
    children : ReactNode
}) => {
    return ( 
        <div className="h-full bg-amber-800 text-white">
            {children}
        </div>
     );
}
 
export default RoutesLayout;