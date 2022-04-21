import { useEffect, useState } from "react";
import { classNames } from "../../utils/helpers";
import Modal from "../common/Modal";
import axios from "axios";
import { useRouter } from "next/router";
import { useUser } from "../../context/UserInfo";
import PaddleLoader from "../common/PaddleLoader";



const UpdatePlanTable = ({ plans }) => {
    const { user, updateCard, cancelSubsription, openCheckout } = useUser()
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState(null)
    const router = useRouter()
    const multiplyEnum = {
        25651: 1,
        25652: 2,
        25653: 4,
        25654: 12
    }
    const openModal = (plan) => {
        if (plan.id === Number(user?.subscription_plan_id)) return
        setModalOpen(true)
        setSelectedPlan(plan)
    }
    const updateUser = async () => {
        const res = await axios.post(`/api/updateUsersPlan`, {
            sub_id: user.subscription_id,
            plan_id: selectedPlan.id
        })
        setModalOpen(false)
        router.reload(window.location.pathname)

    }
    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <>
            <PaddleLoader />
            <>
                <Modal open={modalOpen} setOpen={setModalOpen} showClose={false}>
                    {
                        user?.subscription_plan_id ?
                            <div className="flex gap-8">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="px-3 py-2 text-base font-medium rounded-md text-white bg-red-600 w-full my-2">
                                    Cancel
                                </button>
                                <button
                                    onClick={updateUser}
                                    className="px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 w-full my-2">
                                    Update
                                </button>
                            </div> :
                            <div>
                                <button
                                    onClick={() => openCheckout(selectedPlan, Paddle)}
                                    className="px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 w-full my-2">
                                    Subscribe
                                </button>
                            </div>
                    }

                </Modal>

                <fieldset>
                    <div className="sm:min-w-lg">
                        {plans.map((plan) => (
                            <div key={plan.id} className={classNames("flex items-center justify-between border rounded border-gray-200 py-3 px-5",
                                plan.id === Number(user?.subscription_plan_id) && 'bg-indigo-50')}
                            >
                                <div className="flex items-center h-5">
                                    <input
                                        id={plan.id}
                                        onChange={() => openModal(plan)}
                                        aria-describedby={`${plan.id}-description`}
                                        name="plan"
                                        type="radio"
                                        checked={plan.id === Number(user?.subscription_plan_id)}
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mr-2"
                                    />
                                    <label htmlFor={plan.id} className={classNames("font-medium ", plan.id === Number(user?.subscription_plan_id) ? 'text-indigo-900' : 'text-gray-700')}>
                                        {plan.name}
                                    </label>
                                </div>


                                <span id={`${plan.id}-description`} className={classNames("mx-4 sm:mx-16", plan.id === Number(user?.subscription_plan_id) ? 'text-indigo-900' : 'text-gray-700')}>
                                    ${plan.recurring_price.USD} / mo <span className={classNames(plan.id === Number(user?.subscription_plan_id) ? 'text-indigo-700' : 'text-gray-400')}> (${plan.recurring_price.USD * multiplyEnum[plan.id]} / yr)</span>
                                </span>

                                <span id={`${plan.id}-description`} className={classNames(plan.id === Number(user?.subscription_plan_id) ? 'text-indigo-700' : 'text-gray-400')}>
                                    Unlimited Requests
                                </span>

                            </div>
                        ))}
                    </div>
                </fieldset>
                {
                    user?.subscription_plan_id &&
                    <div className="flex gap-4">

                        <button
                            onClick={() => cancelSubsription(Paddle)}
                            className="px-3 py-2 text-base font-medium rounded-md text-white bg-red-600 w-full my-2">
                            Cancel Subscription
                        </button>

                        <button
                            onClick={() => updateCard(Paddle)}
                            className="px-3 py-2 text-base font-medium rounded-md text-white bg-blue-600 w-full my-2">
                            Update Card Info
                        </button>
                    </div>
                }

            </>


        </>
    )
}

export default UpdatePlanTable