import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { classNames } from '../../utils/helpers'

const ToggleInput = ({ onInputChange, placeholder, options, value }) => {
    const [enabled, setEnabled] = useState(false)

    return (
        <Switch
            checked={value}
            onChange={onInputChange}
            className={classNames(
                value ? 'bg-blue-600' : 'bg-gray-200',
                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={classNames(
                    value ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                )}
            />
        </Switch>
    )
}


export default ToggleInput