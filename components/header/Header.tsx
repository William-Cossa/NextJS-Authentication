"use client"

import { useUserContext } from "@/context/UserContext";
import { useDecodedUser } from "@/hooks/useDecodedUser";
import { User } from "@prisma/client";
import { decodeJwt } from "jose";
import Cookies from "js-cookie"
import { UserIcon } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface props{
    user : any
}
function Header({user }: props) {
    const pathname = usePathname();

    console.log("user", user)

  return (
    <header className='w-full h-14 border-b flex items-center justify-between px-4 bg-muted text-sm lg:text-base'>
        <div className='border border-border rounded-full h-12 w-12 flex items-center justify-center'>
                logo
        </div>
        <nav className='flex items-center'>
            <ul className='flex items-center gap-4 lg:gap-8   '>
                <li><Link href={"/dashboard"} className={`${pathname === "/dashboard" ? 'text-slate-900 font-bold border-b border-slate-900  ' : ''} p-1 transition-all duration-300 `}>Dasboard</Link></li>
                <li><Link href={"/login"} className={`${pathname === "/login" ? 'text-slate-900 font-bold border-b border-slate-900  ' : ''} p-1 transition-all duration-300 `}>Login</Link></li>
                <li><Link href={"/cadastro"} className={`${pathname === "/cadastro" ? 'text-slate-900 font-bold border-b border-slate-900  ' : ''} p-1 transition-all duration-300`}>Criar Conta</Link></li>
            </ul>
        </nav>
        {
            user &&
            
            <div className='flex gap-2 items-center'>
                <div className='border border-border rounded-full h-10 w-10 p-2 flex items-center justify-center'>
                    <UserIcon className='text-muted-foreground'/> 
                </div>
                <div className='flex flex-col'>
                    <div className="text-sm font-medium text-gray-700 truncate dark:text-white">
                    {user?.name}            
                    </div>
                    <div className="text-xs text-gray-500 truncate dark:text-gray-400">
                    {user?.email}
                    </div>
                </div>
            </div>
        }   
    </header>
  )
}

export default Header