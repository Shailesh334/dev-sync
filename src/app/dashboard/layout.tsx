
import React, { ReactNode } from 'react'

import Header from './_components/Header'
import SideBar from './_components/SideBar'
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import { Sheet } from '@/components/ui/sheet';

const layout = async({children} : {children : ReactNode}) => {
    const user = await currentUser();
    
    if (!user) {
      redirect("/landing");
    }



  return (
    
    <div >
      <Sheet>
        <Header />
        <div className='flex min-h-screen'>
          <SideBar />
          <div className='flex-1 '>{children}</div>
        </div>
      </Sheet>
    </div>
  )
}

export default layout
