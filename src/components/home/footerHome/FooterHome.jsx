import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import {motion} from 'framer-motion'
const icons = [
    {
        to: '/restaurants',
        icon: <IoHomeOutline />
    },
    {
        to: '/search',
        icon: <BsSearch />
    },
    {
        to: '/orders',
        icon: <RxCounterClockwiseClock />
    },
    {
        to: '/profile',
        icon: <HiOutlineUser />
    }
]

const FooterHome = () => {
    const location = useLocation()
    const [locationName, setlocationName] = useState('')
    
    useEffect(() => {
        setlocationName(location.pathname)
    }, [location])

    return (
        <>
        {locationName !== '/' ? <motion.footer 
        initial={{marginLeft: '-500px'}}
        transition={{duration:  '0.7'}}
        animate={{marginLeft: '0px'}}

        className="flex gap-10 w-screen justify-around text-4xl p-2">
            {icons.map((item, index) => (
                <figure key={index} className={`flex items-center ${locationName == item.to ? 'text-yellow-500' : ''} ${locationName == '/' ? 'text-transparent' : ''}`}>
                    <Link to={item.to} className='flex gap-3 flex-col items-center'>
                        {item.icon}
                        <span className={`h-2 w-2 ${locationName == item.to ? 'flex  rounded-full bg-yellow-500' : ''}`}></span>
                    </Link>
                </figure>
            ))}
        </motion.footer> : <></>}
        </>
    );
};

export default FooterHome;