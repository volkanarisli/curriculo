import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Context = createContext();

const ResumeInfo = ({ children }) => {
    const [resume, setResume] = useState({


    })
    const [isLoading, setIsLoading] = useState(true)
    const exposed = {
        resume,
        setResume,
        isLoading
    }

    return (
        <Context.Provider value={exposed}>
            {children}
        </Context.Provider>
    )
}

export const useResumeInfo = () => useContext(Context)

export default ResumeInfo