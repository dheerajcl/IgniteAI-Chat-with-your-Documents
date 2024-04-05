import { stringify } from "querystring"
import {ReactNode} from "react"

const MaxWidthWrapper = ({
    className,
    children
}:{
    className?: string
    children: ReactNode
}) => {
    return (
        <div className="mx-auto w-full max-w-screen-x1 px-2.5 md:px-20">
            {children}
        </div>
    )  
}

export default MaxWidthWrapper