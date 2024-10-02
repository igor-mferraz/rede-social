'use client'

import { IconDefinition } from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

type Props = {
    placeholder: string;
    value?: string;
    onChange?: (newValue:string) => void;
    password?: boolean
    filled?: boolean;
    icon?: IconDefinition | any;
    type: 'password' | 'text' | 'number';
}

export const Input = ({placeholder, value, onChange, password, filled, icon, type}:Props) => {

    const [showPassword, setShowPassword] = useState(false);


    return(
        <div className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${filled && 'bg-gray-700'} `} >
            { icon &&
                <FontAwesomeIcon
                    icon={icon}
                    className="ml-4 size-6 text-gray-500"
                />
            }
            
            <input
                className="flex-1 outline-none bg-transparent h-full px-4" 
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                type={showPassword ? 'text' : type}
                placeholder={placeholder}/>

            {
                type == 'password' &&
                <FontAwesomeIcon
                    onClick={ ()=> setShowPassword(!showPassword)}
                    className="size-6 text-gray-500 cursor-pointer mr-4"
                    icon={showPassword ? faEye : faEyeSlash}
                />
            }
           
        </div>
    )
}