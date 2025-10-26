"use client";

import { ModeToggle } from '@/components/ui/mode-toggle';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { UserButton, useUser } from '@clerk/nextjs'
import { MenuIcon } from 'lucide-react';
import React from 'react'

const Header = () => {
  const {user} = useUser();
  if(!user)return;
  return (
   
    <div className='flex justify-between p-4 bg-white dark:bg-[#1f1f1f] h-full sticky top-0'>
      
       <div className='flex gap-4 items-center'>
             <SheetTrigger>
                <MenuIcon className="cursor-pointer text-sm" />
              </SheetTrigger>
            <div className='text-xl md:text-2xl'>{user.fullName}&apos;s <span className='text-base text-slate-900 dark:text-white'>space</span></div>
        </div>
        <div className='flex items-center gap-4'>
            <UserButton />
            <ModeToggle />
         </div>
         
    </div>
   
 
  )
}

export default Header
