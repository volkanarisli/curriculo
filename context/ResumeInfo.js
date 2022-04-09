import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Context = createContext();

const ResumeInfo = ({ children }) => {
    // const [resume, setResume] = useState({
    //     work: {
    //         experiences: []
    //     },
    //     education: {
    //         educationHistory: []
    //     },
    //     about: {
    //         name: '',
    //         surname: '',
    //         currentTitle: '',
    //         location: ''
    //     },
    //     contact: {
    //         email: '',
    //         phone: ''
    //     }
    // })
    const [experiences, setExperiences] = useState([])
    const [educationHistory, setEducationHistory] = useState([])
    const [about, setAbout] = useState({})
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        currentTitle: '',
        location: '',
        keywords: '',
        desc: '',
        email: '',
        number: ''
    })
    const [resumeTemplateId, setResumeTemplateId] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const exposed = {
        experiences,
        setExperiences,
        educationHistory,
        setEducationHistory,
        about,
        setAbout,
        contact,
        setContact,
        resumeTemplateId,
        setResumeTemplateId,
        allResumeData: {
            experiences,
            educationHistory,
            about,
            contact,
            resumeTemplateId
        }
    }

    return (
        <Context.Provider value={exposed}>
            {children}
        </Context.Provider>
    )
}

export const useResumeInfo = () => useContext(Context)

export default ResumeInfo