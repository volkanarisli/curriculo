import { useState, useEffect } from "react"
import { useUser } from "../context/UserInfo"
import { useRouter } from "next/router"
const Register = () => {
    const { registerUser, user } = useUser()
    const [userInfo, setUserInfo] = useState({})
    const router = useRouter()
    useEffect(() => {
        if (user) router.push('/')
    }, [user, router])

    const onInputChange = ({ key, value }) => {
        setUserInfo({ ...userInfo, ...{ [key]: value } })
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <label>
                First Name
                <input className="border border-blue-600" type="text" name="firstName" onChange={e => onInputChange({ key: e.target.name, value: e.target.value })} />

            </label>
            <label>
                Last Name
                <input className="border border-blue-600" type="text" name="lastName" onChange={e => onInputChange({ key: e.target.name, value: e.target.value })} />

            </label>
            <label>
                mail
                <input className="border border-blue-600" type="text" name="email" onChange={e => onInputChange({ key: e.target.name, value: e.target.value })} />

            </label>
            <label>
                password
                <input className="border border-blue-600" type="text" name="password" onChange={e => onInputChange({ key: e.target.name, value: e.target.value })}></input>

            </label>
            <button onClick={() => registerUser(userInfo)}>Giriş Yap</button>
        </div>
    )
}

export default Register