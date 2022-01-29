import Navigation from "../components/design/navigation"
import { useState } from "react"


const Design = () => {
    const [tabs, setTabs] = useState([
        {
            name: 'Work',
            isActive: true,
            isSuccess: false,
        },
        {
            name: 'Education',
            isActive: true,
            isSuccess: false,
        },
        {
            name: 'About',
            isActive: true,
            isSuccess: false,
        },
        {
            name: 'Contact',
            isActive: true,
            isSuccess: false,
        },
    ])
    return (
        <div>
            <Navigation tabs={tabs} />
            Design
        </div>
    )
}


export default Design