import { useUser } from "../context/UserInfo";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Divider from "../components/common/Divider";
import SettingsRow from "../components/account-settings/SettingsRow";
import PersonalInfoForm from "../components/account-settings/PersonalInfoForm";
const AccountSettings = () => {
    const { user } = useUser()
    const router = useRouter()
    useEffect(() => {
        if (!user) return router.push('/login')
    }, [user, router])
    return (
        <div className="container mx-auto mt-5">
            <div className="flex flex-col">
                <span className="text-lg text-gray-900">Account Settings</span>
                <span className="text-sm text-gray-500">Update your billing and account information.</span>
            </div>
            <Divider className="mt-5 mb-10" />
            <SettingsRow header="Personal information" info="Update your personal information.">
                <PersonalInfoForm />
            </SettingsRow>
        </div>
    )
}

export default AccountSettings