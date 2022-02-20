import { useState, useEffect } from "react"
import { supabase } from "../utils/supabase"
import { useRouter } from "next/router"
import { useUser } from '../context/UserInfo'


const Login = () => {
    const { loginUser, user } = useUser()

    const router = useRouter()
    useEffect(() => {
        if (user) router.push('/')
    }, [user, router])

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const onInputChange = ({ key, value }) => {
        setUserInfo({ ...userInfo, ...{ [key]: value } })
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <label>
                mail
                <input className="border border-indigo-600" type="text" name="email" onChange={e => onInputChange({ key: e.target.name, value: e.target.value })} />

            </label>
            <label>
                password
                <input className="border border-indigo-600" type="text" name="password" onChange={e => onInputChange({ key: e.target.name, value: e.target.value })}></input>

            </label>
            <button onClick={() => loginUser(userInfo)}>Giriş Yap</button>
        </div>
    )
}

export default Login