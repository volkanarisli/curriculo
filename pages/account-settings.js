import { useUser } from "../context/UserInfo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Divider from "../components/common/Divider";
import SettingsRow from "../components/account-settings/SettingsRow";
import PersonalInfoForm from "../components/account-settings/PersonalInfoForm";
import UpdatePlanTable from "../components/account-settings/UpdatePlanTable";
import axios from "axios";
import Link from "next/link";

const AccountSettings = ({ plans }) => {
    const { user } = useUser()
    const router = useRouter()
    useEffect(() => {
        if (!user) return router.push('/login')
    }, [user, router])
    return (
        <div className="container mx-auto mt-5">
            <div className="flex">
                <Link href='/dashboard'>
                    <a className="flex items-center mr-3 justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-indigo-50 border-indigo-200 sm:left-8 left-2">
                        ←
                        <span className="sm:block sm:ml-2 hidden">
                            Back to Dashboard
                        </span>
                    </a>
                </Link>
                <div className="flex flex-col">


                    <span className="text-lg text-gray-900">Account Settings</span>
                    <span className="text-sm text-gray-500">Update your billing and account information.</span>
                </div>
            </div>
            <Divider className="mt-5 mb-10" />
            <SettingsRow header="Personal information" info="Update your personal information.">
                <PersonalInfoForm />
            </SettingsRow>
            <Divider className="mt-5 mb-10" />
            <SettingsRow header="Subscription" info="Update your billing information.">
                <UpdatePlanTable plans={plans} />
            </SettingsRow>

        </div>
    )
}

export const getServerSideProps = async () => {
    const { data: { response: plans } } = await axios.post(`${process.env.PADDLE_API_URL}2.0/subscription/plans`,
        {
            vendor_id: process.env.PADDLE_VENDOR_ID,
            vendor_auth_code: process.env.PADDLE_API_AUTH_CODE
        }
    );
    return {
        props: {
            plans
        }
    }
}


export default AccountSettings