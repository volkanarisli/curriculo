
import Image from "next/image"
import { classNames } from "../../utils/helpers"
const Loader = ({ className }) => {
    return (
        <div className={classNames('animate-pulse', className)}>
            <Image src="/logo.svg" alt='Logo' width="50" height="50" />
        </div>
    )
}

export default Loader